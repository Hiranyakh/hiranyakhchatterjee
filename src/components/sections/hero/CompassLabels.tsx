"use client";

import type { CSSProperties } from "react";
import { COMPASS } from "@/components/ui/freedom/compassGeometry";

const LABELS = [
  { title: "Health", angle: 0 },
  { title: "Wealth", angle: 72 },
  { title: "Growth", angle: 144 },
  { title: "Purpose", angle: 216 },
  { title: "Leadership", angle: 288 },
] as const;

export default function CompassLabels() {
  const markerRadius = 286;
  const labelRadius = 312;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        width: COMPASS.SIZE,
        height: COMPASS.SIZE,
      }}
    >
      {LABELS.map((label) => {
        const radians =
          ((label.angle - 90) * Math.PI) / 180;

        const markerX =
          COMPASS.CENTER +
          markerRadius * Math.cos(radians);

        const markerY =
          COMPASS.CENTER +
          markerRadius * Math.sin(radians);

        const labelX =
          COMPASS.CENTER +
          labelRadius * Math.cos(radians);

        const labelY =
          COMPASS.CENTER +
          labelRadius * Math.sin(radians);

        const connectorLength =
          labelRadius - markerRadius;

        const connectorStyle: CSSProperties = {
          position: "absolute",
          left: 0,
          top: 0,
          width: connectorLength,
          height: 1,
          backgroundColor: "rgba(212,175,55,.72)",
          transformOrigin: "0 50%",
          transform: `rotate(${label.angle}deg)`,
        };

        let textTransform = "translate(-50%, -50%)";

        if (label.angle > 0 && label.angle < 180) {
          textTransform = "translate(0, -50%)";
        }

        if (label.angle > 180) {
          textTransform = "translate(-100%, -50%)";
        }

        return (
          <div
            key={label.title}
            className="absolute"
            style={{
              left: markerX,
              top: markerY,
              width: 0,
              height: 0,
            }}
          >
            {/* Connector */}
            <div style={connectorStyle} />

            {/* Marker */}
            <div
              className="
                absolute
                flex
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                shadow-[0_0_18px_rgba(212,175,55,.7)]
              "
              style={{
                width: COMPASS.MARKER_SIZE,
                height: COMPASS.MARKER_SIZE,
                left: -(COMPASS.MARKER_SIZE / 2),
                top: -(COMPASS.MARKER_SIZE / 2),
              }}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFF8DC]" />
            </div>

            {/* Label */}
            <div
              className="
                absolute
                whitespace-nowrap
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#C29B0C]
              "
              style={{
                left: labelX - markerX,
                top: labelY - markerY,
                transform: textTransform,
              }}
            >
              {label.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}