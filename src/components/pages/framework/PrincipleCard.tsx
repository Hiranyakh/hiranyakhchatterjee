"use client";

import { motion } from "framer-motion";

interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
}

export default function PrincipleCard({
  number,
  title,
  description,
}: PrincipleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(15,23,42,.05)]
        transition-all
        duration-300
        hover:border-[#D4AF37]/40
        hover:shadow-[0_20px_45px_rgba(15,23,42,.10)]
        sm:p-8
      "
    >
      {/* Gold Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          bg-gradient-to-r
          from-[#D4AF37]
          via-[#F6E6A7]
          to-transparent
        "
      />

      {/* Number */}
      <span
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#D4AF37]
        "
      >
        {number}
      </span>

      {/* Title */}
      <h3
        className="
          mt-4
          text-2xl
          font-bold
          tracking-tight
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          text-base
          leading-7
          text-slate-600
        "
      >
        {description}
      </p>
    </motion.div>
  );
}