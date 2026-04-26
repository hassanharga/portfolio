import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contact } from '@/data/content';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contact.email,
      subject: `Contact from ${name}`,
      html: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message)}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Unable to send message' }, { status: 500 });
  }
}
