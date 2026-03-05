import React from 'react';
import { ReservationHeader } from "@/components/reservation-header";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <ReservationHeader />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="text-3xl font-bold mb-8 text-[#1a2b3c] border-b pb-4">プライバシーポリシー</h1>
          
          <p className="mb-8 leading-relaxed">
            goodjjクリニック（以下、「当院」といいます。）は、患者様の個人情報の重要性を認識し、個人情報の保護に関する法令を遵守するとともに、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-[#1a2b3c]">1. 個人情報の収集・利用目的</h2>
            <p className="mb-4">当院は、以下の目的のために、お名前、メールアドレス、症状などの個人情報を収集・利用いたします。</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>診察の予約管理および受付業務</li>
              <li>適切な医療サービスの提供および健康管理のアドバイス</li>
              <li>お問い合わせへの対応や確認のご連絡</li>
              <li>医療サービスの向上を目的とした統計データの分析</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-[#1a2b3c]">2. 個人情報の管理・保護</h2>
            <p>当院は、収集した個人情報を安全に管理し、不正アクセス、漏えい、紛失などを防止するために適切なセキュリティ対策を講じます。</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-[#1a2b3c]">3. 第三者への提供</h2>
            <p>当院は、法令に基づく場合や患者様の同意を得た場合を除き、個人情報を第三者に提供することはありません。</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-[#1a2b3c]">4. お問い合わせ先</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、当院の受付窓口までご連絡ください。</p>
          </section>

          <div className="mt-12 text-center border-t pt-8">
            <a href="/" className="text-emerald-600 font-bold hover:underline">トップページに戻る</a>
          </div>
        </div>
      </div>
    </main>
  );
}