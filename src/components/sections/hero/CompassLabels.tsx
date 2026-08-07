"use client";

const labels = [
  { title: "Health", top: "6%", left: "50%" },
  { title: "Wealth", top: "30%", left: "92%" },
  { title: "Growth", top: "78%", left: "86%" },
  { title: "Purpose", top: "94%", left: "50%" },
  { title: "Leadership", top: "78%", left: "10%" },
];

export default function CompassLabels() {
  return (
    <>
      {labels.map((label) => (
        <div
          key={label.title}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: label.top,
            left: label.left,
          }}
        >
          <div className="flex flex-col items-center">

            {/* Connector Line */}

            <div className="h-8 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />

            {/* Gold Marker */}

            <div className="relative flex h-5 w-5 items-center justify-center rounded-full">

              <div className="absolute inset-0 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,.7)]" />

              <div className="h-2.5 w-2.5 rounded-full bg-[#FFF6D6]" />

            </div>

            {/* Label */}

            <div className="mt-3">

              <span
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-[#F6E6A7]
                "
              >
                {label.title}
              </span>

            </div>

          </div>
        </div>
      ))}
    </>
  );
}