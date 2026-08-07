"use client";

const LABELS = [
  { title: "Health", angle: 0, position: "top" },
  { title: "Wealth", angle: 72, position: "right-top" },
  { title: "Growth", angle: 144, position: "right-bottom" },
  { title: "Purpose", angle: 216, position: "bottom" },
  { title: "Leadership", angle: 288, position: "left-top" },
] as const;

const SIZE = 560;
const CENTER = SIZE / 2;

// Marker sits just outside the outer bezel
const MARKER_RADIUS = 286;

export default function CompassLabels() {
  return (
    <>
      {LABELS.map((label) => {
        const rad = ((label.angle - 90) * Math.PI) / 180;

        const x = CENTER + MARKER_RADIUS * Math.cos(rad);
        const y = CENTER + MARKER_RADIUS * Math.sin(rad);

        let textStyle: React.CSSProperties = {};
        let lineStyle: React.CSSProperties = {};

        switch (label.position) {
          case "top":
            lineStyle = {
              left: 0,
              top: -28,
              width: 1,
              height: 24,
            };

            textStyle = {
              left: 0,
              top: -46,
              transform: "translate(-50%, -100%)",
            };
            break;

          case "bottom":
            lineStyle = {
              left: 0,
              top: 4,
              width: 1,
              height: 24,
            };

            textStyle = {
              left: 0,
              top: 40,
              transform: "translate(-50%, 0)",
            };
            break;

          case "right-top":
            lineStyle = {
              left: 4,
              top: -2,
              width: 26,
              height: 1,
            };

            textStyle = {
              left: 40,
              top: -12,
              transform: "translateY(-50%)",
            };
            break;

          case "right-bottom":
            lineStyle = {
              left: 4,
              top: 0,
              width: 26,
              height: 1,
            };

            textStyle = {
              left: 40,
              top: 12,
              transform: "translateY(-50%)",
            };
            break;

          case "left-top":
            lineStyle = {
              left: -30,
              top: -2,
              width: 26,
              height: 1,
            };

            textStyle = {
              right: 40,
              top: -12,
              transform: "translateY(-50%)",
            };
            break;
        }

        return (
          <div
            key={label.title}
            className="absolute"
            style={{
              left: x,
              top: y,
              width: 0,
              height: 0,
            }}
          >
            {/* Connector */}
            <div
              className="absolute bg-[#D4AF37]/70"
              style={lineStyle}
            />

            {/* Marker */}
            <div
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,.65)]"
            >
              <div className="absolute inset-[5px] rounded-full bg-[#FFF8DC]" />
            </div>

            {/* Text */}
            <div
              className="absolute whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.30em] text-[#F2F0EA]"
              style={textStyle}
            >
              {label.title}
            </div>
          </div>
        );
      })}
    </>
  );
}