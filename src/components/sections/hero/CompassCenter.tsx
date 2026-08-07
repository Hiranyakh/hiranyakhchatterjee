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
        {/* Center Jewel */}
<div className="absolute flex items-center justify-center">
  <div className="h-8 w-8 rounded-full bg-[#D4AF37] shadow-lg flex items-center justify-center">
    <div className="h-5 w-5 rounded-full bg-[#FFF8DC]" />
    <div className="absolute h-1.5 w-1.5 -translate-x-1 -translate-y-1 rounded-full bg-white opacity-90" />
  </div>
</div>
        {/* Inner Ivory Ring */}
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F8F6F1]">

          {/* Animated Glass Reflection */}
<motion.div
  className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
>
  <motion.div
    animate={{
      x: ["-180%", "180%"],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 3,
    }}
    className="
      absolute
      -left-1/2
      top-0
      h-full
      w-1/3
      rotate-12
      bg-gradient-to-r
      from-transparent
      via-white/25
      to-transparent
      blur-xl
    "
  />
</motion.div>

          {/* Portrait */}
          <Image
            src="/images/hero-portrait.png"
            alt="Hiranyakh"
            fill
            priority
            sizes="280px"
            className="object-cover object-top"
          />
          <div
  className="
    absolute
    inset-0
    rounded-full
    shadow-[inset_0_0_45px_rgba(0,0,0,.28)]
    pointer-events-none
  "
/>
        </div>
      </div>
    </motion.div>
  );
}