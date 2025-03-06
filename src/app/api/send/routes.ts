
import { EmailTemplate } from '@/components/email/send-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {

  console.log('passa per il send')
  console.log(process.env.RESEND_API_KEY)
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['andreacazzola90@gmail.com'],
      subject: 'Hello world',
      react: await EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}