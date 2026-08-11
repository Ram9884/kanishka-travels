import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/notify/email
 * Body: {
 *   type: 'booking' | 'login',
 *   data: Record<string, any>
 * }
 */
export async function POST(req: Request) {
  try {
    const { type, data } = await req.json();

    // Validate payload
    if (!type || !data) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Configure transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const recipients = [
      process.env.NOTIFY_EMAIL_1,
      process.env.NOTIFY_EMAIL_2,
    ].filter(Boolean) as string[];

    const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    // Shared styled card helper
    const contactCard = (name: string, email: string, phone: string) => `
      <table style="width:100%;border-collapse:collapse;background:#fffbeb;border:1px solid #D4AF37;border-radius:10px;margin:16px 0;">
        <tr>
          <td style="padding:14px 18px;border-bottom:1px solid #f0d97a;">
            <span style="font-size:11px;font-family:monospace;color:#92400e;text-transform:uppercase;letter-spacing:2px;">Customer Details</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 18px 4px;">
            <span style="font-size:12px;color:#78350f;font-weight:bold;">👤 Name</span><br/>
            <span style="font-size:15px;color:#1a1a1d;font-weight:700;">${name || '—'}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:4px 18px;">
            <span style="font-size:12px;color:#78350f;font-weight:bold;">📧 Email</span><br/>
            <span style="font-size:14px;color:#1a1a1d;">${email || '—'}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:4px 18px 14px;">
            <span style="font-size:12px;color:#78350f;font-weight:bold;">📱 Mobile</span><br/>
            <span style="font-size:14px;color:#1a1a1d;font-weight:700;">${phone || '—'}</span>
          </td>
        </tr>
      </table>
    `;

    let subject = '';
    let html = '';

    if (type === 'booking') {
      const {
        booking_reference,
        service,
        pickup_location,
        drop_location,
        pickup_date,
        pickup_time,
        customer_name,
        customer_email,
        customer_phone,
      } = data;
      subject = `🚗 New Booking – Ref ${booking_reference} | ${customer_name || customer_email}`;
      html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#D4AF37;margin-bottom:4px;">New Booking Request</h2>
          <p style="color:#555;font-size:13px;margin-top:0;">A new booking has been submitted on Kanishka Travels.</p>

          ${contactCard(customer_name, customer_email, customer_phone)}

          <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-top:8px;">
            <tr style="background:#f9fafb;">
              <td style="padding:10px 16px;font-size:11px;font-family:monospace;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;" colspan="2">Booking Details</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding:9px 16px;font-size:12px;color:#6b7280;font-weight:600;width:40%;">Reference</td>
              <td style="padding:9px 16px;font-size:13px;font-weight:700;color:#111;">${booking_reference}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;background:#fafafa;">
              <td style="padding:9px 16px;font-size:12px;color:#6b7280;font-weight:600;">Service</td>
              <td style="padding:9px 16px;font-size:13px;font-weight:700;color:#111;">${service}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding:9px 16px;font-size:12px;color:#6b7280;font-weight:600;">Pickup From</td>
              <td style="padding:9px 16px;font-size:13px;color:#111;">${pickup_location}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;background:#fafafa;">
              <td style="padding:9px 16px;font-size:12px;color:#6b7280;font-weight:600;">Destination</td>
              <td style="padding:9px 16px;font-size:13px;color:#111;">${drop_location}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding:9px 16px;font-size:12px;color:#6b7280;font-weight:600;">Date</td>
              <td style="padding:9px 16px;font-size:13px;color:#111;">${pickup_date}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;background:#fafafa;">
              <td style="padding:9px 16px;font-size:12px;color:#6b7280;font-weight:600;">Time</td>
              <td style="padding:9px 16px;font-size:13px;color:#111;">${pickup_time}</td>
            </tr>
          </table>

          <p style="margin-top:20px;font-size:12px;color:#888;">Please review and confirm the request with the customer.</p>
        </div>
      `;
    } else if (type === 'login') {
      const { email, full_name, phone } = data;
      subject = `🔑 Login Alert – ${full_name || email}`;
      html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#D4AF37;margin-bottom:4px;">User Login Notification</h2>
          <p style="color:#555;font-size:13px;margin-top:0;">A customer has just signed in to Kanishka Travels.</p>

          ${contactCard(full_name, email, phone)}

          <p style="margin-top:12px;font-size:12px;color:#888;">No action required unless this login looks suspicious.</p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: 'Unsupported notification type' }, { status: 400 });
    }

    await transporter.sendMail({
      from,
      to: recipients,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email notification error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
