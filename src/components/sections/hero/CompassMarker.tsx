"use client";

interface CompassMarkerProps {
  label: string;
  angle: number;
}

export default function CompassMarker({
  label,
  angle,
}: CompassMarkerProps) {
  const radius = 318;

  const x = radius * Math.cos((angle - 90) * Math.PI / 180);
  const y = radius * Math.sin((angle - 90) * Math.PI / 180);

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className="relative flex flex-col items-center">

        {/* Connector */}
        <div className="h-8 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />

        {/* Gold Marker */}
        <div className="h-4 w-4 rounded-full border-2 border-[#F6E6A7] bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,.6)]" />

        {/* Label */}
        <span className="mt-3 whitespace-nowrap text-sm font-semibold tracking-[0.25em] uppercase text-[#F6E6A7]">
          {label}
        </span>

      </div>
    </div>
  );
}