"use client";
import { useState } from "react";
import { sendEmail } from "@/app/actions";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<any>({}); // 各項目のエラーメッセージを保存する場所

  async function handleFormSubmit(formData: FormData) {
    setStatus("送信中...");
    setErrors({}); // 前回の表示を一度リセット

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("無事に送信されました！");
      // 送信成功時にフォームを空にする
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form.reset();
    } else {
      setStatus("");
      // もし Zod のチェックでエラーがあれば、画面に表示させる
      if (result.errors) {
        setErrors(result.errors);
      } else {
        setStatus(result.message || "エラーが発生しました。");
      }
    }
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border border-blue-50">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">お問い合わせフォーム</h2>
      
      <form id="contact-form" action={handleFormSubmit} className="space-y-5">
        {/* お名前 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お名前</label>
          <input 
            name="name" 
            type="text" 
            placeholder="山形 太郎"
            className={`w-full border rounded-lg p-3 outline-none transition ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">⚠️ {errors.name[0]}</p>}
        </div>
        
        {/* メールアドレス */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス</label>
          <input 
            name="email" 
            type="text" 
            placeholder="example@st.yamagata-u.ac.jp"
            className={`w-full border rounded-lg p-3 outline-none transition ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">⚠️ {errors.email[0]}</p>}
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お問い合わせ内容（10文字以上）</label>
          <textarea 
            name="message" 
            placeholder="ご相談内容を入力してください"
            className={`w-full border rounded-lg p-3 h-40 outline-none transition ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">⚠️ {errors.message[0]}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg transform hover:-translate-y-0.5"
        >
          内容を確認して送信する
        </button>

        {status && (
          <div className={`mt-4 p-3 rounded-lg text-center font-bold ${status.includes("失敗") || status.includes("確認") ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
}