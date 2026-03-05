import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { ReservationForm } from "@/components/reservation-form";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* ヒーロー（メイン）セクション */}
      <ScrollReveal>
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 text-sm text-gray-500 mb-8 shadow-sm">
            <span className="text-blue-500">🛡️</span> 地域に根ざした、信頼の医療
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a2b3c] mb-8 leading-[1.2] tracking-tight">
            あなたの健やかな毎日に、<br />
            <span className="text-blue-600">確かな安心</span>を。
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            goodjjクリニックは、国立大学出身の医師による丁寧な診察と、<br className="hidden md:block" />
            最新設備を備えた、あなたに一番近い内科クリニックです。
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-[#0ea5e9] border-2 border-black text-white w-64 px-10 py-4 rounded-full font-bold hover:bg-opacity-80 transition-all shadow-lg hover:shadow-xl active:scale-95">
              Web予約はこちら
            </button>
            <button className="bg-[#0ea5e9] border-2 border-black text-white w-64 px-10 py-4 rounded-full font-bold hover:bg-opacity-80 transition-all shadow-sm">
              初めての方へ
            </button>
          </div>
        </div>
        
        {/* 背景の装飾的な円 */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
      </section>
      </ScrollReveal>
      {/* 特徴セクション */}
      <ScrollReveal>
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">当院の特徴</h3>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="p-10 bg-gray-50 border-none rounded-2xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-3xl mb-4">🏥</div>
              <h4 className="text-2xl font-bold mb-4 text-[#1a2b3c]">最新の設備</h4>
              <p className="text-gray-500 leading-relaxed text-lg">
                最新の医療機器を導入し、精度の高い診断を行います。患者様の負担を最小限に抑えた、迅速な検査体制を整えています。
              </p>
            </Card>
            <Card className="p-10 bg-gray-50 border-none rounded-2xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-3xl mb-4">🩺</div>
              <h4 className="text-2xl font-bold mb-4 text-[#1a2b3c]">丁寧な診察</h4>
              <p className="text-gray-500 leading-relaxed text-lg">
                患者様一人ひとりのライフスタイルに寄り添い、納得いただけるまで丁寧に説明します。何でも相談できる「かかりつけ医」を目指します。
              </p>
            </Card>
          </div>
        </div>
      </section>
      </ScrollReveal>
{/* 医師紹介セクション */}
<ScrollReveal>
<section  className="py-24 bg-white" id="doctor">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">医師紹介</h3>
      <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
      {/* プロフィール画像（プレースホルダー） */}
      {/* 医師紹介の画像部分（ここだけ差し替え） */}
<div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 border-4 border-white relative">
  <Image 
    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    alt="院長写真"
    fill
    className="object-cover"
  />
</div>

      {/* プロフィール詳細 */}
      <div className="flex-1 text-left">
        <h4 className="text-sm font-bold text-emerald-600 mb-2 uppercase tracking-widest">Director</h4>
        <h2 className="text-3xl font-bold text-[#1a2b3c] mb-4">
          gooojj <span className="text-lg font-normal text-gray-400 ml-2"></span>
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          「goodjjクリニック」のホームページをご覧いただきありがとうございます。
          私は、患者様一人ひとりの不安に寄り添い、納得いただけるまで丁寧に説明することを何よりも大切にしています。
          医学の知識を分かりやすくお伝えし、地域の方々の「健康のパートナー」として歩んでいきたいと考えています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-8">
          <div>
            <h5 className="font-bold text-[#1a2b3c] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              経歴
            </h5>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>国立大学医学部 卒
              
              </li>
              <li>地域医療ボランティア 参加</li>
              <li>健康栄養指導プログラム 修了</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#1a2b3c] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              所属・資格
            </h5>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>日本◯科学会（学生会員）</li>
              <li>日本◯◯学会（学生会員）</li>
              <li>プログラミング（Python / JavaScript）</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</ScrollReveal>
<ScrollReveal>
      <ReservationForm />
      {/* 診療時間セクション */}
      {/* 診療時間セクション */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">診療時間</h3>
      <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="bg-[#0ea5e9] border-2 border-gray-200 text-white">
            <th className="py-4 border-r border-gray-700">診療時間</th>
            <th className="py-4 border-r border-gray-700 font-medium">月</th>
            <th className="py-4 border-r border-gray-700 font-medium">火</th>
            <th className="py-4 border-r border-gray-700 font-medium">水</th>
            <th className="py-4 border-r border-gray-700 font-medium">木</th>
            <th className="py-4 border-r border-gray-700 font-medium">金</th>
            <th className="py-4 border-r border-gray-700 font-medium text-blue-300">土</th>
            <th className="py-4 font-medium text-red-300">日</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          <tr className="border-b">
            <td className="py-6 font-bold bg-gray-50 border-r">09:00 - 12:30</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td>ー</td>
          </tr>
          <tr>
            <td className="py-6 font-bold bg-gray-50 border-r">14:00 - 18:00</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td className="border-r">ー</td>
            <td className="border-r">●</td>
            <td className="border-r">●</td>
            <td className="border-r">ー</td>
            <td>ー</td>
          </tr>
        </tbody>
      </table>
      <div className="p-6 bg-gray-50 text-sm text-gray-500">
        <p>※ 水曜・土曜午後、日曜・祝日は休診です。</p>
        <p>※ 受付は診療終了時間の30分前までとなります。</p>
      </div>
    </div>
  </div>
</section>
</ScrollReveal>
{/* アクセスセクション */}
{/* アクセスセクション（修正版） */}
<ScrollReveal>
<section id="access" className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">アクセス</h3>
      <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      
      {/* 本物のGoogleマップ（沖ノ鳥島を表示） */}
      <div className="w-full h-[400px] rounded-2xl shadow-lg overflow-hidden border">
        <iframe 
          src="https://maps.google.com/maps?q=20.4255723,136.0810829&z=15&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </div>
      
      {/* 住所・連絡先 */}
      <div className="flex flex-col justify-center">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#1a2b3c] mb-2">所在地</h4>
          <p className="text-gray-600 text-lg">
            〒100-2100<br />
            東京都小笠原村 沖ノ鳥島<br />
            goodjjクリニック 本院
          </p>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#1a2b3c] mb-2">アクセス方法</h4>
          <p className="text-gray-600 text-lg">
            父島より観測船にて数日間<br />
            ※一般の方の立ち入りには特別な許可が必要です。
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-[#1a2b3c] mb-2">お電話</h4>
          <p className="text-2xl font-bold text-blue-600">000-0000-0000
            （※診療時間外は留守電対応）
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</ScrollReveal>
<FaqSection />
<Footer />
    </main>
    
  );
}