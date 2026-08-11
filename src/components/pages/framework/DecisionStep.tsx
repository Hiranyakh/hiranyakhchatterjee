"use client";

import { motion } from "framer-motion";

interface DecisionStepProps {
  number: string;
  title: string;
  description: string;
}

export default function DecisionStep({
  number,
  title,
  description,
}: DecisionStepProps) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ duration: 0.25 }}
      className="group flex gap-5"
    >
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          border-2
          border-[#D4AF37]
          bg-[#FAF9F6]
          text-sm
          font-bold
          text-[#D4AF37]
          transition-all
          duration-300
          group-hover:bg-[#D4AF37]
          group-hover:text-white
        "
      >
        {number}
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}