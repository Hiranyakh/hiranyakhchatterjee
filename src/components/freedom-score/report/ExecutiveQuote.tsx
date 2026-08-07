"use client";

interface Props {
  score: number;
}

export default function ExecutiveQuote({
  score,
}: Props) {
  let quote =
    "Every remarkable transformation begins with one intentional decision.";

  if (score >= 80) {
    quote =
      "Excellence is the result of disciplined choices repeated consistently.";
  } else if (score >= 60) {
    quote =
      "Small daily improvements create extraordinary long-term results.";
  }

  return (
    <div className="rounded-[32px] bg-[#0F172A] p-10 text-center text-white">

      <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
        Executive Insight
      </p>

      <blockquote className="mt-6 text-3xl italic leading-relaxed">
        "{quote}"
      </blockquote>

    </div>
  );
}