"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { COMPASS } from "@/components/ui/freedom/compassGeometry";

interface CompassBezelProps {
  children: ReactNode;
}

export default function CompassBezel({
  children,
}: CompassBezelProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 180,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: COMPASS.SIZE,
        height: COMPASS.SIZE,
      }}
    >
      {/* Outer Metal Ring */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(145deg,#6E5310_0%,#A97C12_15%,#F8E6A4_34%,#FFF8D5_50%,#D4AF37_67%,#9C7414_84%,#6E5310_100%)]
          shadow-[0_18px_40px_rgba(0,0,0,.55),0_0_45px_rgba(212,175,55,.28)]
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute inset-[4px] rounded-full
          bg-[linear-gradient(135deg,rgba(255,255,255,.45),transparent_30%,transparent_70%,rgba(0,0,0,.25))]
        "
      />

      {/* Dark Face */}
      <div
        className="absolute rounded-full bg-[#0B1220] shadow-inner"
        style={{
          inset: COMPASS.OUTER_RADIUS - COMPASS.FACE_RADIUS,
        }}
      />

      {/* Decorative Ring 1 */}
      <div
        className="absolute rounded-full border border-[#F6E6A7]/35"
        style={{
          inset: COMPASS.OUTER_RADIUS - COMPASS.RING1_RADIUS,
        }}
      />

      {/* Decorative Ring 2 */}
      <div
        className="absolute rounded-full border border-[#D4AF37]/18"
        style={{
          inset: COMPASS.OUTER_RADIUS - COMPASS.RING2_RADIUS,
        }}
      />

      {children}
    </motion.div>
  );
}