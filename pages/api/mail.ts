import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Admin notification email
  const adminHtmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2>New Contact Message from STAAJ Website</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p style="white-space: pre-line;"><strong>Message:</strong><br />${message}</p>
    </div>
  `;

  // Modern, homepage-matching, clean, with extra spacing and no collapsed signature
  const autoResponseHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - STAAJ</title>
    </head>
    <body style="margin:0; padding:0; font-family: 'Inter', Arial, sans-serif; background: #fff5fa;">
      <div style="max-width:600px; margin:48px auto; background:#fff; border-radius:22px; overflow:hidden; box-shadow:0 8px 36px rgba(236,72,153,0.08); border-top: 6px solid #ec4899;">
        <!-- Header -->
        <div style="background: linear-gradient(90deg,#fff5fa 0%,#fff 65%,#ffe4ee 100%); padding:48px 32px 36px 32px; text-align:left;">
          <span style="display:inline-block; font-size:1.3rem; font-weight:800; color:#ec4899; margin-bottom:12px; letter-spacing:-1px;">
            STAAJ Solutions
          </span>
          <h1 style="color:#0f172a; margin:20px 0 24px 0; font-size:2.1rem; font-weight:900; line-height:1.1;">
            Scaling your business is hard.<br>
            <span style="color:#ec4899;">We're here to help.</span>
          </h1>
          <p style="color:#475569; font-size:1.1rem; margin:0 0 38px 0; max-width:430px;">
            We empower small and midsize businesses to scale with confidence through enterprise-level expertise and personalized support.
          </p>
        </div>
        <!-- Main Message & CTA -->
        <div style="padding:0 32px 0 32px;">
          <h2 style="color:#d946ef; font-size:1.3rem; font-weight:700; margin:36px 0 20px 0;">Hello ${firstName}!</h2>
          <p style="color:#3f3e4d; font-size:1rem; line-height:1.7; margin:0 0 22px 0;">
            We've received your message and appreciate you taking the time to contact us.<br>
            Our team will review your inquiry and get back to you shortly.
          </p>
          <p style="color:#3f3e4d; font-size:1rem; line-height:1.7; margin:0 0 32px 0;">
            In the meantime, we'd love to set up a discovery call to better understand your needs and discuss how we can help you achieve your goals.
          </p>
          <div style="text-align:center; margin:48px 0 36px 0;">
            <a href="https://meetings.hubspot.com/booking-staaj?uuid=f8f41247-2e47-4139-8985-27421d59959a"
               style="display:inline-block; background:linear-gradient(90deg,#ec4899 0%,#d946ef 100%); color:#fff; text-decoration:none; padding:16px 38px; border-radius:8px; font-size:1.13rem; font-weight:700; box-shadow:0 1px 8px rgba(236,72,153,0.15); border-bottom: 3px solid #ef4444;">
              📅 Schedule Discovery Call
            </a>
          </div>
          <p style="background:#fff1fa; color:#a21caf; font-size:1.07rem; border-left:4px solid #ec4899; padding:18px 24px; border-radius:12px; margin-bottom:40px;">
            <strong>What to expect:</strong> On the call, we’ll clarify your challenges and goals, and share how our expert guidance and proven systems can help you scale with less stress.
          </p>
        </div>
        <!-- Footer (no typical signature) -->
        <div style="background:linear-gradient(90deg,#ec4899 0%,#d946ef 100%); padding:30px 0 20px 0; text-align:center;">
          <p style="color:#fff; font-size:1rem; margin:0 0 12px 0;">
            <strong style="color:#fff;">The STAAJ Team</strong> — scaling your business with confidence.
          </p>
          <div style="margin:18px 0; padding:13px; background-color:rgba(255,255,255,0.13); border-radius:8px; border-left:4px solid #ef4444; display:inline-block;">
            <p style="color:#fff; font-size:0.95rem; margin:0; font-style:italic;">
              "Scaling your business is hard. We're here to help."
            </p>
          </div>
          <p style="color:#fce7f3; font-size: 12px; margin: 15px 0 0 0;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send admin notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to admin
      subject: `STAAJ Contact: ${subject}`,
      text: `New contact from ${firstName} ${lastName} (${email})\n\nSubject: ${subject}\n\nMessage: ${message}`,
      html: adminHtmlContent,
    });

    // Send auto-response to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // Send to user
      subject: `Thank you for contacting STAAJ - Let's scale with confidence!`,
      text: `Hello ${firstName},\n\nThank you for reaching out to STAAJ! We've received your message and will get back to you shortly.\n\nWe'd love to set up a discovery call to discuss your needs: https://meetings.hubspot.com/booking-staaj?uuid=f8f41247-2e47-4139-8985-27421d59959a\n\nThe STAAJ Team — scaling your business with confidence.\n\nThis is an automated response. Please do not reply to this email.`,
      html: autoResponseHtml,
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send emails' });
  }
}