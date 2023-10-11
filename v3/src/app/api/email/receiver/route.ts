import * as React from "react";
import ReceiverEmailTemplate from "@/app/components/ReceiverEmailTemplate";
import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
const { EMAIL_API_KEY } = process.env;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const resend = new Resend(EMAIL_API_KEY);

    await resend.emails.send({
      from: `Message from ${name} <hello@lucky-victory.dev>`,
      to: ["hello@lucky-victory.dev", "luckyvictory54@gmail.com"],
      subject: "Contact Form Submission",
      text: "",
      react: ReceiverEmailTemplate({ name, email, message }),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "An error occured, please try again..." },
      { status: 500 },
    );
  }
}
