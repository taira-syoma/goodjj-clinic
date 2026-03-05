"use client"; // 状態（useState）を使うために必須です

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // アイコンライブラリ（標準で入っていることが多いです）

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // メニューが開いているかどうかの状態

  return (
    <header 
      style={{ backgroundColor: 'white', opacity: 1 }}
      className="sticky top-0 z-50 border-b shadow-sm transition-all"
    >
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* ロゴ部分 */}
        <div className="flex items-center gap-3">
          <div className="bg-[#0ea5e9] text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl shadow-sm">
            G
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1a2b3c] leading-none">
              goodjj 内科クリニック
            </h1>
            <p className="text-[10px] text-gray-400 mt-1 tracking-wider uppercase">
              Aoi Internal Medicine Clinic
            </p>
          </div>
        </div>

        {/* デスクトップ用ナビゲーション (PCでは表示、スマホでは隠す) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">特徴</a>
          <a href="#doctor" className="hover:text-blue-600 transition-colors">医師紹介</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">よくある質問</a>
          <a href="#access" className="hover:text-blue-600 transition-colors">アクセス</a>
        </nav>

        {/* 右側の電話番号 (PCでは表示) */}
        <div className="hidden lg:flex items-center gap-2 text-[#e91e63] font-bold text-xl">
          <span>03-1234-5678</span>
        </div>

        {/* スマホ用ハンバーガーボタン (スマホでのみ表示) */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* スマホ用メニュー本体 (isOpenがtrueのときだけ表示) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 shadow-lg animate-in slide-in-from-top">
          <nav className="flex flex-col px-6 space-y-4 text-gray-700 font-bold">
            <a href="#about" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">特徴</a>
            <a href="#doctor" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">医師紹介</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">よくある質問</a>
            <a href="#access" onClick={() => setIsOpen(false)} className="py-2">アクセス</a>
            <div className="pt-4 text-[#e91e63] text-center text-xl">
              03-1234-5678
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};