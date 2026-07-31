"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface OptionCardProps {
  label: string;
  value: number;
  selected: boolean;
  onSelect: (value: number) => void;
}

export default function OptionCard({
  label,
  value,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      whileTap={{
        scale: .98,
      }}
      onClick={() => onSelect(value)}
      className={`
      w-full
      rounded-2xl
      border-2
      p-5
      text-left
      transition-all
      duration-300

      ${
        selected
          ? "border-amber-500 bg-amber-50"
          : "border-slate-200 bg-white hover:border-amber-300"
      }
      `}
    >
      <div className="flex justify-between items-center">

        <span className="font-medium text-lg">
          {label}
        </span>

        {selected && (
          <CheckCircle2
            className="text-amber-500"
          />
        )}

      </div>
    </motion.button>
  );
}