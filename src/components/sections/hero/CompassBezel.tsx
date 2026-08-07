"use client";

import { motion } from "framer-motion";

interface CompassBezelProps {
  children?: React.ReactNode;
}

export default function CompassBezel({
  children,
}: CompassBezelProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 180,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative flex h-[560px] w-[560px] items-center justify-center rounded-full"
    >
      {/* Ambient Gold Glow */}
      <div className="absolute inset-[-40px] rounded-full bg-[#D4AF37]/10 blur-[80px]" />

      {/* Outer Metallic Ring */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[linear-gradient(145deg,#6E5310_0%,#B88A16_15%,#F6E6A7_35%,#FFF7D0_50%,#D4AF37_65%,#9A7315_85%,#6E5310_100%)]
          shadow-[0_15px_45px_rgba(0,0,0,.55),0_0_60px_rgba(212,175,55,.28)]
        "
      />

      {/* Bevel Highlight */}
      <div
        className="
          absolute
          inset-[5px]
          rounded-full
          bg-[linear-gradient(135deg,rgba(255,255,255,.45),transparent_28%,transparent_72%,rgba(0,0,0,.22))]
        "
      />

      {/* Inner Dark Face */}
      <div
        className="
          absolute
          inset-[16px]
          rounded-full
          bg-[#0E1522]
          shadow-inner
        "
      />

      {/* Decorative Gold Ring */}
      <div className="absolute inset-[28px] rounded-full border border-[#F6E6A7]/35" />

      {/* Fine Inner Ring */}
      <div className="absolute inset-[44px] rounded-full border border-[#D4AF37]/15" />

      {children}
    </motion.div>
  );
}