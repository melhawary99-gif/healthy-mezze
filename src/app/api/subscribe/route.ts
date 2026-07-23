import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Healthy Mezze <contact@healthymezze.com>",
      to: "contact@healthymezze.com",
      subject: "🥗 New Healthy Mezze Subscriber",
      html: `
        <h2>New Newsletter Subscription</h2>

        <p>A visitor has subscribed to Healthy Mezze.</p>

        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}