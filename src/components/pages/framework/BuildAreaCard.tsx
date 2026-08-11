"use client";

import { motion } from "framer-motion";

interface BuildAreaCardProps {
  number: string;
  title: string;
  description: string;
}

export default function BuildAreaCard({
  number,
  title,
  description,
}: BuildAreaCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        group
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
        sm:p-7
      "
    >
      <div className="flex items-center justify-between">
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

        <span
          className="
            h-2
            w-2
            rounded-full
            bg-[#0F7A5C]
            transition-transform
            duration-300
            group-hover:scale-150
          "
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}