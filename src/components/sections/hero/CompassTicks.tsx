"use client";

export default function CompassTicks() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {Array.from({ length: 120 }).map((_, i) => {
        const angle = i * 3;
        const major = i % 10 === 0;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translateY(-272px)`,
            }}
          >
            <div
              className={`rounded-full ${
                major
                  ? "h-5 w-[2.5px] bg-[#F6E6A7]"
                  : "h-3 w-px bg-[#C9A43A]"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}