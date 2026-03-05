// components/reservation-header.tsx として保存
import React from 'react';

export function ReservationHeader() {
  return (
    <header className="bg-[#10b981] border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#10b981] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
            G
          </div>
          <span className="text-xl font-bold text-[#1a2b3c] tracking-tight">goodjjクリニック</span>
        </div>
        <a href="/" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
          トップページへ戻る
        </a>
      </div>
    </header>
  );
}