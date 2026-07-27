"use client";

import { motion } from "framer-motion";

interface GoldSparkleProps {
  className?: string;
  size?: number;
}

export default function GoldSparkle({
  className = "",
  size = 18,
}: GoldSparkleProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        scale: [0.9, 1.15, 0.9],
        opacity: [0.25, 0.9, 0.25],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2
             L13.8 10.2
             L22 12
             L13.8 13.8
             L12 22
             L10.2 13.8
             L2 12
             L10.2 10.2
             Z"
          fill="#D4AF37"
        />
      </svg>
    </motion.div>
  );
}