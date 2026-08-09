"use client";

import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0F7A5C]">
        Build a Better Future
      </p>

      <h2 className="mt-3 text-5xl font-bold leading-[1.05] text-slate-900 sm:text-6xl lg:text-8xl">
        One Decision
        <br />
        <span className="text-[#0F7A5C]">at a Time.</span>
      </h2>
    </motion.div>
  );
}