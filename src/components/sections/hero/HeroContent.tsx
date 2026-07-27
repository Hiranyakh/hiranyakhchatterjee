"use client";
import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
        Build a Better Future.
      </h1>

      <h2 className="mt-4 text-3xl font-semibold text-emerald-700 md:text-5xl">
        One Decision at a Time.
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-600">
        Helping people think better, decide better, and build a better life
        through intentional decisions, practical frameworks, and continuous
        growth.
      </p>

      <HeroActions />
    </div>
  );
}