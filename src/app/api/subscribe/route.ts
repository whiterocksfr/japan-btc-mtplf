import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // No Resend key configured - just log
      console.log("New subscriber (no Resend key):", email);
      return NextResponse.json({ success: true });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      // Add to Resend Audience
      await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    } else {
      // Fallback: send notification email
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "noreply@portal.whiterocksfr.com",
          to: "joel@whiterocksfr.com",
          subject: "MTPLF.com - New subscriber",
          text: `New email signup: ${email}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
