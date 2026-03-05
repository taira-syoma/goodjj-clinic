"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // 2秒間の擬似的な通信待ち
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus("success");
  };

  if (status === "success") {
    return (
      <section className="py-24 bg-gray-50" id="reservation">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-md mx-auto p-12 bg-white shadow-xl border-none rounded-3xl flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6 animate-bounce" />
            <h3 className="text-2xl font-bold text-[#1a2b3c] mb-2">予約を受け付けました！</h3>
            <p className="text-gray-500 mb-8">
              ご入力いただいたメールアドレスに、確認メールをお送りしました。
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="text-emerald-600 font-bold hover:underline"
            >
              もう一度入力する
            </button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50" id="reservation">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">WEB予約</h3>
        <p className="text-gray-500 mb-12">24時間いつでもご予約いただけます。</p>
        
        <Card className="max-w-2xl mx-auto p-8 bg-white shadow-xl border-none rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* お名前 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">お名前</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="山田 太郎" />
            </div>

            {/* 【追加】メールアドレス */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">メールアドレス</label>
              <input 
                required 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" 
                placeholder="example@mail.com" 
              />
              <p className="text-xs text-gray-400 mt-1">※予約完了メールをお送りします</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">希望日</label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">時間帯</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition">
                  <option>午前 (9:00 - 12:30)</option>
                  <option>午後 (14:00 - 18:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">症状・ご相談内容</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition h-32" placeholder="どのような症状がありますか？"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className={`w-full text-white py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95 border-2 border-black
                ${status === "submitting" ? "bg-gray-400 cursor-not-allowed" : "bg-[#0ea5e9] hover:bg-opacity-80"}`}
            >
              {status === "submitting" ? "送信中..." : "予約内容を確認する"}
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
}