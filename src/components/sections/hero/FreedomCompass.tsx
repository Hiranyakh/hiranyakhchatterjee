"use client";

import CompassRing from "./CompassRing";
import CompassCenter from "./CompassCenter";
import CompassLabels from "./CompassLabels";
import CompassGlow from "./CompassGlow";
import FloatingParticles from "./FloatingParticles";

interface Props {
  image: string;
}

export default function FreedomCompass({
  image,
}: Props) {
  return (
    <div className="relative flex items-center justify-center w-[620px] h-[620px]">

      {/* Background Particles */}

      <FloatingParticles />

      {/* Glow */}

      <CompassGlow />

      {/* Compass Ring */}

      <CompassRing />

      {/* Labels */}

      <CompassLabels />

      {/* Center */}

      <CompassCenter />

    </div>
  );
}