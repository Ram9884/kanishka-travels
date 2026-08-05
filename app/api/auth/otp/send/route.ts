import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { normalizePhone, saveOTP } from '@/lib/otpStore';

export async function POST(req: Request) {
  try {
    const { phone, mode, full_name } = await req.json();

    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ error: 'Mobile phone number is required.' }, { status: 400 });
    }

    const { formattedPhone, raw10, isValid } = normalizePhone(phone);
    if (!isValid || raw10.length !== 10) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit mobile number (e.g. 9876543210).' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    let userExists = false;
    let existingUser: any = null;

    if (serviceRoleKey && !supabaseUrl.includes('placeholder')) {
      const adminSupabase = createClient(supabaseUrl, serviceRoleKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });

      const syntheticEmail = `${raw10}@kanishkatravels.local`;
      const { data: usersData } = await adminSupabase.auth.admin.listUsers();
      
      if (usersData?.users) {
        existingUser = usersData.users.find(
          (u) =>
            u.phone === formattedPhone ||
            u.user_metadata?.phone === formattedPhone ||
            u.user_metadata?.phone === raw10 ||
            u.email === syntheticEmail
        );
        if (existingUser) {
          userExists = true;
        }
      }
    }

    // Validate based on mode
    if (mode === 'signup' && userExists) {
      return NextResponse.json(
        { error: `Mobile number ${formattedPhone} is already registered. Please sign in instead.` },
        { status: 400 }
      );
    }

    if (mode === 'login' && !userExists) {
      return NextResponse.json(
        { error: `Mobile number ${formattedPhone} is not registered yet. Please click Register to create an account.` },
        { status: 400 }
      );
    }

    // Generate random 6-digit OTP code
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in memory OTP store
    saveOTP(formattedPhone, otpCode, mode || 'login', full_name);

    console.log(`[OTP SENT] Mode: ${mode} | Phone: ${formattedPhone} | Code: ${otpCode}`);

    return NextResponse.json({
      success: true,
      message: `Verification code sent to ${formattedPhone}`,
      formattedPhone,
    });
  } catch (err: any) {
    console.error('OTP Send error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to send OTP. Please try again.' },
      { status: 500 }
    );
  }
}
