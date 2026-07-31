"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-10">

      <div className="flex justify-between text-sm text-slate-500 mb-2">
        <span>
          Question {current} of {total}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: .5
          }}
        />

      </div>

    </div>
  );
}