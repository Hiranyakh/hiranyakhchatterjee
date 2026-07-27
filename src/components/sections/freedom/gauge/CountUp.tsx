"use client";

import { motion } from "framer-motion";

interface CountUpProps {
  value: number;
}

export default function CountUp({ value }: CountUpProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="text-7xl font-bold text-slate-900"
    >
      {value}
    </motion.span>
  );
}