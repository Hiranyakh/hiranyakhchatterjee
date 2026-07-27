"use client";

const journey = [
  "Engineer",
  "Father",
  "Clinical Nutritionist",
  "AI Entrepreneur",
  "Creator of The HIRANYAKH Compass™",
];

export default function JourneyTimeline() {
  return (
    <div className="relative pl-14">

      <div className="absolute left-9 top-0 h-full w-[2px] bg-[#D4AF37]/40" />

      <div className="space-y-8">

        {journey.map((item, index) => (
          <div key={index} className="relative flex items-center">

            <div className="absolute -left-[26px] h-4 w-4 rounded-full bg-[#D4AF37]" />

            <h4 className="text-lg font-medium text-slate-800">
              {item}
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}