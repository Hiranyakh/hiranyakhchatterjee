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
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="relative flex justify-center"
    >
      {/* Soft Glow */}

      <div
        className="
          absolute
          inset-6
          rounded-[36px]
          bg-[#D4AF37]/15
          blur-3xl
        "
      />

      {/* Outer Gold Frame */}

      <div
        className="
          relative
          rounded-[36px]
          border-[3px]
          border-[#D4AF37]
          bg-gradient-to-b
          from-[#FFFDF7]
          to-[#F7F3E8]
          p-3
          shadow-[0_25px_60px_rgba(15,23,42,0.15)]
        "
      >
        {/* Navy Accent */}

        <div
          className="
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-3
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
              w-[280px]
              lg:w-[340px]
              object-contain
            "
          />
        </div>
      </div>
    </motion.div>
  );
}