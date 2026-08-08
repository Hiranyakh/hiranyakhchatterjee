"use client";

import { COMPASS } from "@/components/ui/freedom/compassGeometry";

export default function CompassGeometry() {
  const center = COMPASS.CENTER;

  const innerRingRadius = 155;
  const centerRingRadius = 120;

  const axisStart = 70;
  const axisEnd = 490;

  const diagonalStart = 130;
  const diagonalEnd = 430;

  const cardinalRadius = 185;

  return (
    <svg
      viewBox={`0 0 ${COMPASS.SIZE} ${COMPASS.SIZE}`}
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Inner Ring */}
      <circle
        cx={center}
        cy={center}
        r={innerRingRadius}
        fill="none"
        stroke="rgba(212,175,55,.18)"
        strokeWidth="1"
      />

      {/* Center Ring */}
      <circle
        cx={center}
        cy={center}
        r={centerRingRadius}
        fill="none"
        stroke="rgba(212,175,55,.15)"
        strokeWidth="1"
      />

      {/* Main Vertical Axis */}
      <line
        x1={center}
        y1={axisStart}
        x2={center}
        y2={axisEnd}
        stroke="rgba(212,175,55,.25)"
      />

      {/* Main Horizontal Axis */}
      <line
        x1={axisStart}
        y1={center}
        x2={axisEnd}
        y2={center}
        stroke="rgba(212,175,55,.25)"
      />

      {/* Diagonal */}
      <line
        x1={diagonalStart}
        y1={diagonalStart}
        x2={diagonalEnd}
        y2={diagonalEnd}
        stroke="rgba(212,175,55,.12)"
      />

      {/* Diagonal */}
      <line
        x1={diagonalEnd}
        y1={diagonalStart}
        x2={diagonalStart}
        y2={diagonalEnd}
        stroke="rgba(212,175,55,.12)"
      />

      {/* Cardinal Dots */}
      <circle
        cx={center}
        cy={center - cardinalRadius}
        r="4"
        fill="#D4AF37"
      />

      <circle
        cx={center + cardinalRadius}
        cy={center}
        r="4"
        fill="#D4AF37"
      />

      <circle
        cx={center}
        cy={center + cardinalRadius}
        r="4"
        fill="#D4AF37"
      />

      <circle
        cx={center - cardinalRadius}
        cy={center}
        r="4"
        fill="#D4AF37"
      />

      {/* Center Hub */}
      <circle
        cx={center}
        cy={center}
        r="10"
        fill="#D4AF37"
      />

      <circle
        cx={center}
        cy={center}
        r="20"
        fill="none"
        stroke="rgba(212,175,55,.35)"
      />
    </svg>
  );
}