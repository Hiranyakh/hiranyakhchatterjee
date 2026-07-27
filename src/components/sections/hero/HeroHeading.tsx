"use client";
import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="mt-8 text-5xl font-bold leading-[1.05] text-slate-950 lg:text-8xl">
        Build a Better Future.
      </h1>

      <h2 className="mt-3 text-5xl font-bold leading-[1.05] text-emerald-700 lg:text-8xl">
        One Decision at a Time.
      </h2>
    </motion.div>
  );
}