"use client";

export default function CompassRing() {
  return (
    <div
      className="
      absolute
      w-[520px]
      h-[520px]
      rounded-full
      border-[8px]
      border-yellow-500
      shadow-[0_0_80px_rgba(255,215,0,.15)]
      "
    >
      <div
        className="
        absolute
        inset-6
        rounded-full
        border
        border-yellow-400/30
        "
      />

      <div
        className="
        absolute
        inset-12
        rounded-full
        border
        border-white/10
        "
      />
    </div>
  );
}