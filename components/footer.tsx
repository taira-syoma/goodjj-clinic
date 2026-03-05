import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#0ea5e9] text-white py-16">
      <div className="container mx-auto px-4">
        {/* グリッドレイアウト：スマホでは1列、PCでは3列 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/20 pb-12">
          
          {/* 左側：クリニック紹介 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#0ea5e9] w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg">
                G
              </div>
              <span className="text-xl font-bold tracking-tight">goodjjクリニック</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              日本最南端の地から、<br />
              皆様の健康を支える確かな医療を提供します。
            </p>
          </div>

          {/* 中央：メニューリンク */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-white pl-3">メニュー</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium">
              <li><a href="#about" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">当院について</a></li>
              <li><a href="#doctor" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">医師紹介</a></li>
              <li><a href="#faq" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">よくある質問</a></li>
              <li><a href="#access" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">アクセス</a></li>
              <li><a href="/privacy" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">プライバシーポリシー</a></li>
            </ul>
          </div>

          {/* 右側：お問い合わせ */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-white pl-3">お問い合わせ</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="opacity-80">住所:</span>
                <p>〒100-2100<br />東京都小笠原村 沖ノ鳥島</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="opacity-80">電話:</span>
                <p className="text-xl font-bold">03-1234-5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="pt-8 text-center text-xs opacity-60">
          <p>© 2026 goodjj Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};