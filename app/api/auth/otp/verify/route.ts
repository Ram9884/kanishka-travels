import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { normalizePhone, verifyAndClearOTP } from '@/lib/otpStore';

export async function POST(req: Request) {
  try {
    const { phone, otp, mode, full_name, isFirebaseVerified } = await req.json();

    if (!phone || (!otp && !isFirebaseVerified)) {
      return NextResponse.json({ error: 'Phone number and OTP code are required.' }, { status: 400 });
    }

    const { formattedPhone, raw10, isValid } = normalizePhone(phone);
    if (!isValid || raw10.length !== 10) {
      return NextResponse.json({ error: 'Invalid mobile phone number format.' }, { status: 400 });
    }

    let record: any = null;
    if (!isFirebaseVerified) {
      // Verify OTP code against stored record
      const result = verifyAndClearOTP(formattedPhone, otp.toString().trim());
      if (!result.valid) {
        return NextResponse.json({ error: result.error || 'Invalid OTP' }, { status: 400 });
      }
      record = result.record;
    }

    const finalFullName = full_name || record?.fullName || 'Customer';

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!serviceRoleKey || supabaseUrl.includes('placeholder')) {
      return NextResponse.json({ error: 'Supabase server configuration missing.' }, { status: 500 });
    }

    const adminSupabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const syntheticEmail = `${raw10}@kanishkatravels.local`;
    const deterministicPassword = `Kanishka_${raw10}_AuthKey!`;

    // Check if user exists by listUsers
    const { data: usersData } = await adminSupabase.auth.admin.listUsers();
    const existingUser = usersData?.users?.find(
      (u) =>
        u.phone === formattedPhone ||
        u.user_metadata?.phone === formattedPhone ||
        u.user_metadata?.phone === raw10 ||
        u.email === syntheticEmail
    );

    let userId = existingUser?.id;

    if (!existingUser) {
      // Create user with phone & synthetic email
      const { data: newUser, error: createError } = await adminSupabase.auth.admin.createUser({
        email: syntheticEmail,
        password: deterministicPassword,
        phone: formattedPhone,
        email_confirm: true,
        phone_confirm: true,
        user_metadata: {
          full_name: finalFullName,
          phone: formattedPhone,
        },
      });

      if (createError) {
        console.error('Error creating phone user:', createError);
        return NextResponse.json({ error: createError.message }, { status: 400 });
      }
      userId = newUser.user.id;
    } else {
      // User exists, update password and metadata if provided
      const updateData: any = { password: deterministicPassword };
      if (finalFullName && finalFullName !== 'Customer') {
        updateData.user_metadata = {
          ...existingUser.user_metadata,
          full_name: finalFullName,
          phone: formattedPhone,
        };
      }
      await adminSupabase.auth.admin.updateUserById(userId!, updateData);
    }

    // Trigger owner alert notification email
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    void fetch(`${appUrl}/api/notify/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'login',
        data: {
          email: syntheticEmail,
          full_name: finalFullName,
          phone: formattedPhone,
        },
      }),
    }).catch(console.error);

    return NextResponse.json({
      success: true,
      message: 'Mobile OTP verified successfully',
      credentials: {
        email: syntheticEmail,
        password: deterministicPassword,
      },
      user: {
        id: userId,
        phone: formattedPhone,
        full_name: finalFullName,
      },
    });
  } catch (err: any) {
    console.error('OTP Verification error:', err);
    return NextResponse.json(
      { error: err?.message || 'Verification failed. Please try again.' },
      { status: 500 }
    );
  }
}
