"use client";

import FrameworkStage from "./FrameworkStage";
import FrameworkConnector from "./FrameworkConnector";

function PurposeBlock() {
  return (
    <div className="flex w-full flex-col items-center text-center">
      {/* Purpose Icon */}
      <div
        className="
          relative
          flex
          h-[68px]
          w-[68px]
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]
          text-[25px]
          font-bold
          text-white
          shadow-[0_8px_30px_rgba(212,175,55,.28)]
        "
      >
        <div className="absolute inset-[4px] rounded-full border border-white/30" />
        <span className="relative">★</span>
      </div>

      {/* Purpose Title */}
      <h3 className="mt-6 text-[22px] font-bold tracking-tight text-slate-900">
        Purpose
      </h3>

      {/* Purpose Description */}
      <p className="mx-auto mt-3 max-w-[220px] text-[13px] leading-6 text-slate-600">
        Every better decision ultimately leads you toward a life of purpose.
      </p>

      {/* Gold Accent */}
      <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </div>
  );
}

export default function FrameworkTimeline() {
  return (
    <div className="mt-20">
      {/* ========================= */}
      {/* DESKTOP TIMELINE */}
      {/* ========================= */}

      <div className="hidden lg:flex lg:items-start lg:gap-5 xl:gap-7">

        {/* Stage 01 */}
        <div className="min-w-0 flex-1">
          <FrameworkStage
            step="01"
            title="Think Better"
            description="Develop clarity through awareness, learning and better questions."
          />
        </div>

        {/* Connector */}
        <div className="mt-[33px] w-14 shrink-0 xl:w-20">
          <FrameworkConnector active horizontal />
        </div>

        {/* Stage 02 */}
        <div className="min-w-0 flex-1">
          <FrameworkStage
            step="02"
            title="Decide Better"
            description="Use proven frameworks to make confident decisions aligned with your goals."
          />
        </div>

        {/* Connector */}
        <div className="mt-[33px] w-14 shrink-0 xl:w-20">
          <FrameworkConnector active horizontal />
        </div>

        {/* Stage 03 */}
        <div className="min-w-0 flex-1">
          <FrameworkStage
            step="03"
            title="Build Better"
            description="Turn intentional decisions into better health, wealth and freedom."
          />
        </div>

        {/* Connector */}
        <div className="mt-[33px] w-14 shrink-0 xl:w-20">
          <FrameworkConnector active horizontal />
        </div>

        {/* Purpose */}
        <div className="min-w-0 flex-1">
          <PurposeBlock />
        </div>
      </div>

      {/* ========================= */}
      {/* MOBILE / TABLET TIMELINE */}
      {/* ========================= */}

      <div className="flex flex-col items-center lg:hidden">

        {/* Stage 01 */}
        <FrameworkStage
          step="01"
          title="Think Better"
          description="Develop clarity through awareness, learning and better questions."
        />

        <FrameworkConnector active />

        {/* Stage 02 */}
        <FrameworkStage
          step="02"
          title="Decide Better"
          description="Use proven frameworks to make confident decisions aligned with your goals."
        />

        <FrameworkConnector active />

        {/* Stage 03 */}
        <FrameworkStage
          step="03"
          title="Build Better"
          description="Turn intentional decisions into better health, wealth and freedom."
        />

        <FrameworkConnector active />

        {/* Purpose */}
        <PurposeBlock />
      </div>
    </div>
  );
}