"use client";

import { motion } from "framer-motion";

interface Props {
  score: number;
}

export default function ScoreRing({ score }: Props) {
  const radius = 95;
  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference -
    (score / 100) * circumference;

  return (
    <div className="relative w-[240px] h-[240px] mx-auto">

      <svg
        className="-rotate-90"
        width="240"
        height="240"
      >
        <circle
          cx="120"
          cy="120"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="16"
          fill="transparent"
        />

        <motion.circle
          cx="120"
          cy="120"
          r={radius}
          stroke="#F59E0B"
          strokeWidth="16"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: progress,
          }}
          transition={{
            duration: 1.8,
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <h1 className="text-6xl font-black text-slate-900">
          {score}
        </h1>

        <p className="text-slate-500">
          Freedom Score
        </p>

      </div>
    </div>
  );
}