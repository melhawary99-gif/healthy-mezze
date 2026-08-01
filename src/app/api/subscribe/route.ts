import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const segmentId = process.env.RESEND_SEGMENT_ID;

    if (!apiKey || !segmentId) {
      return NextResponse.json({ error: "Newsletter service is not configured." }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }



    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        segments: [
          {
            id: segmentId,
          },
        ],
      });
    } catch (err) {
      // If the contact already exists, we'll ignore the error
      console.log("Contact may already exist:", err);
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

    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
