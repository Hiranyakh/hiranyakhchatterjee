"use client";

export default function GaugeRing() {
  return (
    <>
      {/* Emerald Glow */}

      <div
        className="
          absolute
          h-[430px]
          w-[430px]
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />

      {/* Outer Ring */}

      <div
        className="
          absolute
          h-[400px]
          w-[400px]
          rounded-full
          border-[10px]
          border-[#D4AF37]/20
        "
      />

      {/* Inner Ring */}

      <div
        className="
          absolute
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-[#D4AF37]/40
        "
      />
    </>
  );
}