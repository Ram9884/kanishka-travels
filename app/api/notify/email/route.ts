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
      } = data;
      subject = `New Booking – Ref ${booking_reference}`;
      html = `
        <p>A new booking has been created.</p>
        <ul>
          <li><strong>Reference:</strong> ${booking_reference}</li>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>From:</strong> ${pickup_location}</li>
          <li><strong>To:</strong> ${drop_location}</li>
          <li><strong>Date:</strong> ${pickup_date}</li>
          <li><strong>Time:</strong> ${pickup_time}</li>
        </ul>
        <p>Please review and confirm the request.</p>
      `;
    } else if (type === 'login') {
      const { email } = data;
      subject = `User Login Notification – ${email}`;
      html = `<p>User <strong>${email}</strong> has just logged in to Kanishka Travels.</p>`;
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
