"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GoldSparkle from "@/components/ui/GoldSparkle";

export default function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="hero-glow glow-pulse absolute h-[620px] w-[620px] rounded-full" />

      {/* Luxury Sparkles */}
      <GoldSparkle className="left-10 top-20" size={18} />
      <GoldSparkle className="right-10 top-28" size={14} />
      <GoldSparkle className="left-20 bottom-24" size={14} />
      <GoldSparkle className="right-12 bottom-20" size={18} />

      {/* Gold Ring */}
      <div className="gold-ring relative flex h-[620px] w-[620px] items-center justify-center rounded-full p-[14px]">

        {/* Inner Circle */}
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#FAF9F6]">

          {/* Compass Watermark */}
          {/* Compass Watermark */}

<div className="absolute inset-0 z-0 flex items-center justify-center">
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 180,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <Image
      src="/brand/compass-watermark.svg"
      alt=""
      width={540}
      height={540}
      className="pointer-events-none select-none opacity-50"
    />
  </motion.div>
</div>

        {/* Inner Ring */}
          <div className="absolute inset-5 z-20 rounded-full border border-white/40" />

          {/* Portrait */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-30 h-full w-full"
          >
            <Image
              src="/images/hero-portrait.png"
              alt="Hiranyakh"
              fill
              priority
              className="
                object-cover
                object-top
                scale-[1.12]
                translate-y-3
              "
            />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}