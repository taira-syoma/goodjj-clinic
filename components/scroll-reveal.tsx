"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

export const ScrollReveal = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // 最初は透明で30px下に配置
      whileInView={{ opacity: 1, y: 0 }} // 画面に入ったら不透明にして元の位置へ
      viewport={{ once: true, margin: "-100px" }} // 1回だけ実行。少し画面に入ってから発動
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // 0.6秒かけてアニメーション
    >
      {children}
    </motion.div>
  );
};