"use client";

import { motion } from "framer-motion";

interface StoryCardProps {
  year?: string;
  title: string;
  description: string;
}

export default function StoryCard({
  year,
  title,
  description,
}: StoryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(15,23,42,.06)]
        sm:p-6
      "
    >
      {/* Gold Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-gradient-to-b
          from-[#D4AF37]
          via-[#D4AF37]/70
          to-transparent
        "
      />

      <div className="pl-2">
        {/* Optional Year */}
        {year && (
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0F7A5C]
            "
          >
            {year}
          </span>
        )}

        {/* Title */}
        <h3
          className="
            text-xl
            font-semibold
            tracking-tight
            text-slate-900
            sm:text-2xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            leading-7
            text-slate-600
            sm:mt-4
            sm:text-base
            sm:leading-8
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}