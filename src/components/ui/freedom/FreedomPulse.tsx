"use client";

import { motion } from "framer-motion";

export default function FreedomPulse() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-12 w-12 rounded-full border border-[#D4AF37]/40"
          animate={{
            scale: [1, 8],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}