import ReceiverEmailTemplate from "@/app/components/ReceiverEmailTemplate";
import SenderEmailTemplate from "@/app/components/SenderEmailTemplate";
import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
const { EMAIL_API_KEY } = process.env;
import * as React from "react";
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const resend = new Resend(EMAIL_API_KEY);

    await resend.emails.send({
      from: `Hello from Lucky Victory <hello@lucky-victory.dev>`,
      reply_to: "hello@lucky-victory.dev",
      to: [`${email}`],
      subject: "Contact Form Submission",
      text: "",

      react: SenderEmailTemplate({ name, email, message }),
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
