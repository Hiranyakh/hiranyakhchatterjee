"use client";

import FloatingParticles from "./FloatingParticles";
import CompassGlow from "./CompassGlow";
import CompassTicks from "./CompassTicks";
import CompassBezel from "./CompassBezel";
import CompassGeometry from "./CompassGeometry";
import CompassNeedle from "./CompassNeedle";
import CompassCenter from "./CompassCenter";
import CompassLabels from "./CompassLabels";
import FreedomPulse from "@/components/ui/freedom/FreedomPulse";
export default function FreedomCompass() {
  return (
    <div className="relative flex h-[560px] w-[560px] items-center justify-center">

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Ambient Glow */}
      <CompassGlow />

            {/* Compass Body */}
      <CompassBezel>
        <CompassGeometry />
        <CompassNeedle />
        {/* Tick Ring */}
      <CompassTicks />
      </CompassBezel>

      {/* Freedom Pillars */}
      <CompassLabels />
      <FreedomPulse />
      {/* Portrait */}
      <CompassCenter />

    </div>
  );
}