"use client";

export default function CompassGeometry() {
  return (
    <svg
      viewBox="0 0 540 540"
      className="absolute inset-0 h-full w-full"
    >
      {/* Outer Ring */}
      <circle
        cx="270"
        cy="270"
        r="175"
        fill="none"
        stroke="rgba(212,175,55,.25)"
        strokeWidth="1.5"
      />

      {/* Inner Ring */}
      <circle
        cx="270"
        cy="270"
        r="155"
        fill="none"
        stroke="rgba(212,175,55,.18)"
        strokeWidth="1"
      />

      {/* Center Ring */}
      <circle
        cx="270"
        cy="270"
        r="120"
        fill="none"
        stroke="rgba(212,175,55,.15)"
        strokeWidth="1"
      />

      {/* Main Axis */}
      <line
        x1="270"
        y1="70"
        x2="270"
        y2="470"
        stroke="rgba(212,175,55,.25)"
      />

      <line
        x1="70"
        y1="270"
        x2="470"
        y2="270"
        stroke="rgba(212,175,55,.25)"
      />

      {/* Diagonals */}
      <line
        x1="130"
        y1="130"
        x2="410"
        y2="410"
        stroke="rgba(212,175,55,.12)"
      />

      <line
        x1="410"
        y1="130"
        x2="130"
        y2="410"
        stroke="rgba(212,175,55,.12)"
      />

      {/* Cardinal Dots */}
      <circle cx="270" cy="85" r="4" fill="#D4AF37"/>
      <circle cx="455" cy="270" r="4" fill="#D4AF37"/>
      <circle cx="270" cy="455" r="4" fill="#D4AF37"/>
      <circle cx="85" cy="270" r="4" fill="#D4AF37"/>

      {/* Center Hub */}
      <circle
        cx="270"
        cy="270"
        r="10"
        fill="#D4AF37"
      />

      <circle
        cx="270"
        cy="270"
        r="20"
        fill="none"
        stroke="rgba(212,175,55,.35)"
      />
      {/* Engraved Tick Marks */}

{Array.from({ length: 60 }).map((_, i) => {
  const angle = (i * 360) / 60;
  const isMajor = i % 5 === 0;

  const inner = isMajor ? 248 : 253;
const outer = 266;

  const x1 =
    270 + inner * Math.cos((angle - 90) * Math.PI / 180);

  const y1 =
    270 + inner * Math.sin((angle - 90) * Math.PI / 180);

  const x2 =
    270 + outer * Math.cos((angle - 90) * Math.PI / 180);

  const y2 =
    270 + outer * Math.sin((angle - 90) * Math.PI / 180);

  return (
    <line
      key={i}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="rgba(246,230,167,.65)"
      strokeWidth={isMajor ? 2 : 1}
      strokeLinecap="round"
    />
  );
})}


    </svg>
  );
}