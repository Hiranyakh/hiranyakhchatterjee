"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileFrameProps {
  src: string;
  alt: string;
}

export default function ProfileFrame({
  src,
  alt,
}: ProfileFrameProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      transition={{ duration: 0.35 }}
      className="relative flex w-full justify-center"
    >
      {/* Soft Gold Glow */}
      <div
        className="
          absolute
          inset-4
          rounded-[36px]
          bg-[#D4AF37]/15
          blur-3xl
          sm:inset-6
        "
      />

      {/* Outer Gold Frame */}
      <div
        className="
          relative
          w-full
          max-w-[340px]
          rounded-[32px]
          border-[3px]
          border-[#D4AF37]
          bg-gradient-to-b
          from-[#FFFDF7]
          to-[#F7F3E8]
          p-2.5
          shadow-[0_25px_60px_rgba(15,23,42,0.15)]
          sm:rounded-[36px]
          sm:p-3
        "
      >
        {/* Inner Frame */}
        <div
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-slate-200
            bg-white
            p-2.5
            sm:rounded-[28px]
            sm:p-3
          "
        >
          {/* Portrait */}
          <Image
            src={src}
            alt={alt}
            width={420}
            height={560}
            priority
            className="
              h-auto
              w-full
              object-contain
            "
          />
        </div>
      </div>
    </motion.div>
  );
}