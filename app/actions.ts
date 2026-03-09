"use server"; // サーバー側で動くことを宣言

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "Clinic Site <onboarding@resend.dev>", // 最初はこのまま
      to: "m241549@st.yamagata-u.ac.jp", // 自分が受け取りたいアドレス
      subject: `【お問い合わせ】${name}様より`,
      text: `名前: ${name}\nメール: ${email}\n内容: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}