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
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {year && (
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#0F7A5C] uppercase">
          {year}
        </p>
      )}

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}