"use client";
import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-8 max-w-xl text-xl leading-9 text-slate-600"
    >
      Helping people think better, decide better and build a better
      life through practical frameworks, intentional decisions,
      and continuous growth.
    </motion.p>
  );
}