"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CompassCenter() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute z-30 flex items-center justify-center"
    >
      {/* Shadow */}
      <div className="absolute h-[300px] w-[300px] translate-y-6 rounded-full bg-black/30 blur-2xl" />

      {/* Gold Medallion */}
      <div
        className="
          relative
          flex
          h-[280px]
          w-[280px]
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-[#FFF4C7]
          via-[#D4AF37]
          to-[#8B6914]
          p-[10px]
          shadow-[0_0_45px_rgba(212,175,55,.35)]
        "
      >
        {/* Inner Ivory Ring */}
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F8F6F1]">

          {/* Glass Reflection */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-br
              from-white/35
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Portrait */}
          <Image
            src="/images/hero-portrait.png"
            alt="Hiranyakh"
            fill
            priority
            sizes="280px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </motion.div>
  );
}