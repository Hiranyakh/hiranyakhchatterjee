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
      className="absolute inset-0 z-40 flex items-center justify-center"
    >
      <svg
        width="560"
        height="560"
        viewBox="0 0 560 560"
        className="overflow-visible"
      >
        <defs>
          {/* Gold */}
          <linearGradient id="goldNeedle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF9D6" />
            <stop offset="30%" stopColor="#F6D978" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>

          {/* Graphite */}
          <linearGradient id="blackNeedle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6B7280" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          {/* Metal Shine */}
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodOpacity="0.35"
            />
          </filter>
        </defs>

        {/* NORTH */}
        <polygon
          points="280,70 292,280 280,300 268,280"
          fill="url(#goldNeedle)"
          filter="url(#shadow)"
        />

        {/* SOUTH */}
        <polygon
          points="280,490 292,280 280,260 268,280"
          fill="url(#blackNeedle)"
          filter="url(#shadow)"
        />

        {/* Center Disc */}
        <circle
          cx="280"
          cy="280"
          r="18"
          fill="#D4AF37"
        />

        <circle
          cx="280"
          cy="280"
          r="12"
          fill="#FFF8DC"
        />

        <circle
          cx="276"
          cy="276"
          r="3"
          fill="white"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
}