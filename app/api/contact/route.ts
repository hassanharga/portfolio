import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contact } from '@/data/content';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: contact.email,
    subject: `Contact from ${name}`,
    html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
  });

  return NextResponse.json({ success: true });
}
