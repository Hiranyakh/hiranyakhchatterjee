"use client";

import { motion } from "framer-motion";

export default function CompassNeedle() {
  return (
    <motion.div
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 flex items-center justify-center z-20"
    >
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
      >
        <defs>
          <linearGradient id="needleGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3C4" />
            <stop offset="40%" stopColor="#F6E6A7" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
        </defs>

        {/* North Needle */}

        <polygon
          points="120,15 130,120 110,120"
          fill="url(#needleGold)"
        />

        {/* South Needle */}

        <polygon
          points="120,225 130,120 110,120"
          fill="#2B3444"
        />

        {/* Center Hub */}

        <circle
          cx="120"
          cy="120"
          r="11"
          fill="#D4AF37"
        />

        <circle
          cx="120"
          cy="120"
          r="5"
          fill="#FFF8DC"
        />
      </svg>
    </motion.div>
  );
}