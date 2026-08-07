"use client";

import { Calendar, FileBadge, User } from "lucide-react";

interface Props {
  fullName: string;
  assessmentId: string;
  assessmentDate: string;
}

export default function ExecutiveIdentity({
  fullName,
  assessmentId,
  assessmentDate,
}: Props) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

      <p className="text-sm uppercase tracking-[0.35em] text-amber-600 font-semibold">
        Prepared Exclusively For
      </p>

      <h2 className="mt-5 text-5xl font-black text-slate-900">
        {fullName}
      </h2>

      <p className="mt-3 text-xl text-slate-500">
        Freedom Score™ Executive Assessment
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <InfoRow
          icon={<FileBadge size={20} />}
          label="Assessment ID"
          value={assessmentId}
        />

        <InfoRow
          icon={<Calendar size={20} />}
          label="Assessment Date"
          value={assessmentDate}
        />

      </div>

    </div>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-start gap-4">

      <div className="rounded-xl bg-slate-100 p-3">
        {icon}
      </div>

      <div>

        <p className="text-sm uppercase tracking-wider text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-lg font-bold text-slate-900">
          {value}
        </p>

      </div>

    </div>
  );
}