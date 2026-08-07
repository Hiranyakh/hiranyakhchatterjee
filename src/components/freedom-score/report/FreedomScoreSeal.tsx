"use client";

interface Props {
  score: number;
  level: string;
}

function getGrade(score: number) {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "E";
}

function getRing(score: number) {
  if (score >= 80) return "border-emerald-500";
  if (score >= 70) return "border-blue-600";
  if (score >= 60) return "border-amber-500";
  if (score >= 50) return "border-orange-500";

  return "border-red-500";
}

export default function FreedomScoreSeal({
  score,
  level,
}: Props) {
  const grade = getGrade(score);

  return (
    <div className="flex flex-col items-center">

      <div
        className={`
          w-72
          h-72
          rounded-full
          border-[12px]
          ${getRing(score)}
          bg-white
          shadow-2xl
          flex
          flex-col
          items-center
          justify-center
        `}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
          Freedom Score™
        </p>

        <h1 className="mt-3 text-8xl font-black text-slate-900">
          {score}
        </h1>

        <div className="mt-5 rounded-full bg-amber-100 px-6 py-2">

          <span className="text-3xl font-black text-amber-700">
            {grade}
          </span>

        </div>

      </div>

      <h2 className="mt-8 text-3xl font-black text-slate-900">
        {level}
      </h2>

    </div>
  );
}