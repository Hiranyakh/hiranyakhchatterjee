"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FrameworkStageProps {
  step: string;
  title: string;
  description: string;
}

export default function FrameworkStage({
  step,
  title,
  description,
}: FrameworkStageProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative"
    >
      <div
        className="
        rounded-[28px]
        border
        border-[#D4AF37]/20
        bg-white/70
        backdrop-blur-xl
        p-10
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        group-hover:border-[#D4AF37]/50
        group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
      "
      >
        <div className="flex items-center gap-5">

          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-[#D4AF37]
            bg-[#FAF9F6]
            text-lg
            font-bold
            text-[#D4AF37]
          "
          >
            {step}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 max-w-xl text-slate-600 leading-7">
              {description}
            </p>
          </div>

        </div>

        <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />

       <button
  onClick={() => setExpanded(!expanded)}
  className="
    mt-8
    text-sm
    font-semibold
    tracking-wide
    text-[#0F7A5C]
    transition-all
    hover:translate-x-1
  "
>
  {expanded ? "Show Less ↑" : "Explore Stage →"}
</button>
<AnimatePresence>
  {expanded && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden"
    >
      <div className="mt-6 border-t border-slate-200 pt-6">
        <ul className="space-y-3 text-slate-600">
          <li>✓ Ask Better Questions</li>
          <li>✓ Learn Continuously</li>
          <li>✓ Challenge Assumptions</li>
          <li>✓ Build Mental Clarity</li>
        </ul>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </motion.div>
  );
}