import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: process.env.EMAIL || 'theo.clauzure@outlook.fr',
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
  });

  return NextResponse.json({ success: true });
}
