"use client";
import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
        Think Better. Decide Better. Build Better.
      </span>
    </motion.div>
  );
}