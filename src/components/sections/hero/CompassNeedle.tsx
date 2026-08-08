"use client";

import { motion } from "framer-motion";
import { COMPASS } from "@/components/ui/freedom/compassGeometry";

export default function CompassNeedle() {
  const center = COMPASS.CENTER;

  // Keep the needle slightly inside the compass face.
  const needleTip = 70;
  const needleBottom = 490;

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
      style={{
        width: COMPASS.SIZE,
        height: COMPASS.SIZE,
      }}
    >
      <svg
        viewBox={`0 0 ${COMPASS.SIZE} ${COMPASS.SIZE}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gold Needle */}
          <linearGradient
            id="goldNeedle"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#FFF8D5" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#A97C12" />
            <stop offset="100%" stopColor="#6E5310" />
          </linearGradient>

          {/* Graphite */}
          <linearGradient
            id="blackNeedle"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#6B7280" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          {/* Metal Shine */}
          <linearGradient
            id="shine"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="rgba(255,255,255,0)"
            />
            <stop
              offset="50%"
              stopColor="rgba(255,255,255,.55)"
            />
            <stop
              offset="100%"
              stopColor="rgba(255,255,255,0)"
            />
          </linearGradient>

          {/* Needle Shadow */}
          <filter
            id="shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodOpacity="0.35"
            />
          </filter>
        </defs>

        {/* NORTH — Gold */}
        <polygon
          points={`
            ${center},${needleTip}
            ${center + 12},${center}
            ${center},${center + 20}
            ${center - 12},${center}
          `}
          fill="url(#goldNeedle)"
          filter="url(#shadow)"
        />

        {/* SOUTH — Graphite */}
        <polygon
          points={`
            ${center},${needleBottom}
            ${center + 12},${center}
            ${center},${center - 20}
            ${center - 12},${center}
          `}
          fill="url(#blackNeedle)"
          filter="url(#shadow)"
        />

        {/* Center Disc */}
        <circle
          cx={center}
          cy={center}
          r="18"
          fill="#D4AF37"
        />

        <circle
          cx={center}
          cy={center}
          r="12"
          fill="#FFF8DC"
        />

        {/* Center Highlight */}
        <circle
          cx={center - 4}
          cy={center - 4}
          r="3"
          fill="white"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
}