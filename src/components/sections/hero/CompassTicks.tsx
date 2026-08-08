"use client";

import { COMPASS } from "@/components/ui/freedom/compassGeometry";

export default function CompassTicks() {
  const center = COMPASS.CENTER;

  const outerRadius = 270;
  const minorInnerRadius = 264;
  const majorInnerRadius = 256;

  return (
    <svg
      viewBox={`0 0 ${COMPASS.SIZE} ${COMPASS.SIZE}`}
      className="absolute inset-0 h-full w-full pointer-events-none"
      preserveAspectRatio="xMidYMid meet"
    >
      {Array.from({ length: 60 }).map((_, index) => {
        const angle = index * 6;
        const radians = ((angle - 90) * Math.PI) / 180;

        const isMajor = index % 5 === 0;
        const innerRadius = isMajor
          ? majorInnerRadius
          : minorInnerRadius;

        const x1 =
          center + innerRadius * Math.cos(radians);

        const y1 =
          center + innerRadius * Math.sin(radians);

        const x2 =
          center + outerRadius * Math.cos(radians);

        const y2 =
          center + outerRadius * Math.sin(radians);

        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={
              isMajor
                ? "rgba(246,230,167,.95)"
                : "rgba(201,164,58,.75)"
            }
            strokeWidth={isMajor ? 2.2 : 1}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}