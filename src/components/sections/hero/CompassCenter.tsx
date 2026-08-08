"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPASS } from "@/components/ui/freedom/compassGeometry";

export default function CompassCenter() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-30 flex items-center justify-center"
      style={{
        width: COMPASS.SIZE,
        height: COMPASS.SIZE,
      }}
    >
      {/* Gold Medallion */}
      <div
        className="
          relative
          flex
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
        style={{
          width: COMPASS.PORTRAIT_SIZE,
          height: COMPASS.PORTRAIT_SIZE,
        }}
      >
        {/* Animated Glass Reflection */}
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-full
          "
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
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/images/hero-portrait.png"
            alt="Hiranyakh"
            fill
            priority
            sizes={`${COMPASS.PORTRAIT_SIZE}px`}
            className="object-cover object-top"
          />
        </div>

        {/* Inner Glass / Shadow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            shadow-[inset_0_0_45px_rgba(0,0,0,.28)]
          "
        />
      </div>
    </motion.div>
  );
}