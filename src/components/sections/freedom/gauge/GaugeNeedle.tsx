"use client";

import { motion } from "framer-motion";

export default function GaugeNeedle() {
  return (
    <motion.div
      initial={{ rotate: -120 }}
      whileInView={{ rotate: 18 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.8,
        ease: "easeOut",
      }}
      className="
        absolute
        z-10
        h-40
        w-1
        origin-bottom
        rounded-full
        bg-[#D4AF37]
      "
    />
  );
}