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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex w-full flex-col items-center text-center"
    >
      {/* Number */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.25 }}
        className="
          relative
          flex
          h-[68px]
          w-[68px]
          items-center
          justify-center
          rounded-full
          border-2
          border-[#D4AF37]
          bg-[#FAF9F6]
          text-[17px]
          font-bold
          text-[#D4AF37]
          shadow-[0_8px_28px_rgba(212,175,55,.16)]
        "
      >
        <div className="absolute inset-[4px] rounded-full border border-[#D4AF37]/20" />

        <span className="relative">{step}</span>
      </motion.div>

      {/* Content */}
      <div className="mt-6 px-2">
        <h3
          className="
            text-[20px]
            font-bold
            tracking-tight
            text-slate-900
            md:text-[22px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mx-auto
            mt-3
            max-w-[220px]
            text-[13px]
            leading-6
            text-slate-600
          "
        >
          {description}
        </p>
      </div>

      {/* Gold Accent */}
      <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Explore */}
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="
          mt-4
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.20em]
          text-[#0F7A5C]
          transition-all
          duration-200
          hover:tracking-[0.25em]
        "
      >
        {expanded ? "Show Less ↑" : "Explore Stage →"}
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -8,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="w-full overflow-hidden"
          >
            <div
              className="
                mx-auto
                mt-5
                max-w-[230px]
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-4
                text-left
                shadow-[0_8px_24px_rgba(15,23,42,.06)]
              "
            >
              <ul className="space-y-2 text-xs leading-5 text-slate-600">
                <li>✓ Ask Better Questions</li>
                <li>✓ Learn Continuously</li>
                <li>✓ Challenge Assumptions</li>
                <li>✓ Build Mental Clarity</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}