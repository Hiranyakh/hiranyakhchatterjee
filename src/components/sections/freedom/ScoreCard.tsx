"use client";

import { motion } from "framer-motion";

interface ScoreCardProps {
  title: string;
  score: number;
}

export default function ScoreCard({
  title,
  score,
}: ScoreCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-6
        py-5
        shadow-sm
      "
    >
      <div>
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Current Assessment
        </p>
      </div>

      <div className="text-right">
        <span className="text-3xl font-bold text-[#0F7A5C]">
          {score}
        </span>

        <p className="text-xs uppercase tracking-widest text-slate-400">
          Score
        </p>
      </div>
    </motion.div>
  );
}