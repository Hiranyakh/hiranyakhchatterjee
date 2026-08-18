"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface OptionCardProps {
  label: string;
  value: number;
  index: number;
  selected: boolean;
  onSelect: (value: number) => void;
}

export default function OptionCard({
  label,
  value,
  index,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.985,
      }}
      onClick={() => onSelect(value)}
      className={`
        group
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        duration-200
        sm:p-5
        ${
          selected
            ? "border-[#D4AF37] bg-[#FFFCF1] shadow-[0_8px_24px_rgba(212,175,55,.12)]"
            : "border-slate-200 bg-white hover:border-[#D4AF37]/50 hover:bg-[#FAF9F6]"
        }
      `}
    >
      {/* Number */}
      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          text-sm
          font-bold
          transition-all
          ${
            selected
              ? "border-[#D4AF37] bg-[#D4AF37] text-white"
              : "border-slate-200 bg-[#FAF9F6] text-slate-500 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37]"
          }
        `}
      >
        {index + 1}
      </div>

      {/* Label */}
      <span
        className={`
          flex-1
          text-sm
          font-semibold
          leading-6
          sm:text-base
          ${
            selected
              ? "text-slate-900"
              : "text-slate-700"
          }
        `}
      >
        {label}
      </span>

      {/* Score indicator */}
      <span
        className={`
          hidden
          text-[10px]
          font-bold
          uppercase
          tracking-[0.12em]
          sm:block
          ${
            selected
              ? "text-[#0F7A5C]"
              : "text-slate-300"
          }
        `}
      >
        {value}/5
      </span>

      {/* Selection */}
      <div
        className={`
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          transition-all
          ${
            selected
              ? "border-[#0F7A5C] bg-[#0F7A5C] text-white"
              : "border-slate-200 text-transparent"
          }
        `}
      >
        <Check size={15} strokeWidth={3} />
      </div>
    </motion.button>
  );
}