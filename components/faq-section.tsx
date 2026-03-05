"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "予約なしでも受診できますか？",
    answer: "当院は完全予約制ではありませんが、予約優先で診察を行っております。待ち時間を短縮するため、Web予約またはお電話でのご予約をおすすめいたします。"
  },
  {
    question: "初めて受診する際に必要なものはありますか？",
    answer: "健康保険証（またはマイナ保険証）を必ずお持ちください。お薬手帳や紹介状、健康診断の結果などがある場合は、あわせてご持参いただくと診察がスムーズです。"
  },
  {
    question: "沖ノ鳥島以外の場所からも受診可能ですか？",
    answer: "現在は対面診療を基本としておりますが、再診の方を対象にオンライン診療の導入も検討しております。詳しくはお問い合わせください。"
  },
  {
    question: "駐車場（または駐輪場）はありますか？",
    answer: "クリニック専用の駐輪スペースがございます。お車や船でお越しの方は、近隣の指定エリアをご利用ください。"
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">よくある質問</h3>
          <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-[#1a2b3c]">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}