"use client";

import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="
        mt-7
        max-w-xl
        text-lg
        leading-8
        text-slate-600
        sm:text-xl
        sm:leading-9
      "
    >
      Helping professionals and entrepreneurs optimize their{" "}
      <span className="font-semibold text-slate-800">health</span>, build{" "}
      <span className="font-semibold text-slate-800">wealth</span>, and create
      meaningful <span className="font-semibold text-slate-800">growth</span>.
    </motion.p>
  );
}