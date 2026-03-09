"use client"; // ユーザーが入力するのでクライアント側
import { sendEmail } from "@/app/actions";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("送信中...");
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("送信が完了しました！");
    } else {
      setStatus("エラーが発生しました。");
    }
  }

  return (
    <form action={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">お名前</label>
        <input name="name" type="text" required className="w-full border p-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">メールアドレス</label>
        <input name="email" type="email" required className="w-full border p-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">お問い合わせ内容</label>
        <textarea name="message" required className="w-full border p-2 rounded h-32"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        送信する
      </button>
      {status && <p className="mt-4 text-center text-sm font-bold">{status}</p>}
    </form>
  );
}