"use client";

import ReportPage from "./layout/ReportPage";
import {
  Award,
  Calendar,
  FileBadge,
  ShieldCheck,
  Star,
  User,
} from "lucide-react";

interface Props {
  fullName: string;
  assessmentId: string;
  assessmentDate: string;
  freedomScore: number;
  freedomLevel: string;
  freedomArchetype: string;
}

export default function ExecutiveCover({
  fullName,
  assessmentId,
  assessmentDate,
  freedomScore,
  freedomLevel,
  freedomArchetype,
}: Props) {
  return (
    <ReportPage
      title="Executive Cover"
      subtitle="Personalized Freedom Assessment Report"
    >
      <div className="space-y-10">

        {/* Report Title */}

        <div className="text-center">

          <p className="text-sm font-semibold tracking-[0.35em] uppercase text-amber-600">
            Freedom Blueprint™
          </p>

          <h1 className="mt-4 text-6xl font-black text-slate-900">
            Executive Edition
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Personalized Freedom Assessment Report
          </p>

        </div>

        {/* User Information */}

        <div className="grid gap-6 md:grid-cols-2">

          <InfoCard
            icon={<User size={22} />}
            title="Prepared For"
            value={fullName}
          />

          <InfoCard
            icon={<FileBadge size={22} />}
            title="Assessment ID"
            value={assessmentId}
          />

          <InfoCard
            icon={<Calendar size={22} />}
            title="Assessment Date"
            value={assessmentDate}
          />

          <InfoCard
            icon={<Award size={22} />}
            title="Freedom Level"
            value={freedomLevel}
          />

        </div>

        {/* Score */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-10 text-center text-white">

          <p className="uppercase tracking-[0.35em] text-blue-200">
            Overall Freedom Score
          </p>

          <h2 className="mt-4 text-8xl font-black">
            {freedomScore}
          </h2>

          <p className="mt-2 text-2xl">
            /100
          </p>

        </div>

        {/* Archetype */}

        <div className="rounded-3xl border-2 border-amber-400 bg-amber-50 p-8 text-center">

          <Star
            size={40}
            className="mx-auto text-amber-600"
          />

          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-amber-700">
            Your Freedom Archetype™
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            {freedomArchetype}
          </h2>

        </div>

        {/* Quote */}

        <div className="rounded-3xl bg-slate-100 p-8">

          <blockquote className="text-center text-2xl italic leading-10 text-slate-700">
            “Freedom is not achieved by chance. It is built
            through consistent choices across every pillar of
            life.”
          </blockquote>

        </div>

        {/* Confidential */}

        <div className="flex items-start gap-4 rounded-2xl border border-slate-300 p-6">

          <ShieldCheck
            size={28}
            className="mt-1 text-emerald-600"
          />

          <div>

            <h3 className="font-bold text-slate-900">
              Confidential Executive Report
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              This report has been generated exclusively for the
              individual named above using responses provided
              during the Freedom Score™ Assessment.
              The recommendations are intended for personal
              development and strategic planning.
            </p>

          </div>

        </div>

      </div>
    </ReportPage>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">

      <div className="flex items-center gap-3 text-blue-700">

        {icon}

        <span className="font-semibold">
          {title}
        </span>

      </div>

      <p className="mt-5 text-2xl font-bold text-slate-900 break-words">
        {value}
      </p>

    </div>
  );
}