import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "goodjj 内科クリニック | 地域に根ざした、信頼の医療",
  description: "山形から発信する goodjj クリニックは、国立大学出身の医師による丁寧な診察と最新設備を備えた内科クリニックです。",
  keywords: ["内科", "クリニック", "山形", "goodjj"],
  openGraph: {
    title: "goodjj 内科クリニック",
    description: "あなたに一番近い内科クリニック。最新設備で健やかな毎日をサポートします。",
    url: "https://goodjj-clinic.vercel.app",
    siteName: "goodjj 内科クリニック",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

// ↓↓↓ この下の部分が消えていたため、エラーになっていました！ ↓↓↓
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}<SpeedInsights /></body>
    </html>
  );
}