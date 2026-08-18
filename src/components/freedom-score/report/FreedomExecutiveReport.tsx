"use client";

import ExecutiveCover from "./ExecutiveCover";
import TableOfContents from "./TableOfContents";
import PrintReportButton from "./PrintReportButton";

interface FreedomExecutiveReportProps {
  fullName: string;
  assessmentId: string;
  assessmentDate: string;
  freedomScore: number;
  freedomLevel: string;
  freedomArchetype: string;
}

export default function FreedomExecutiveReport({
  fullName,
  assessmentId,
  assessmentDate,
  freedomScore,
  freedomLevel,
  freedomArchetype,
}: FreedomExecutiveReportProps) {
  return (
    <div className="freedom-report-root">

      {/* Screen-only PDF control */}
      <div className="no-print mx-auto mb-6 flex max-w-5xl justify-end px-6">
        <PrintReportButton />
      </div>

      {/* Report pages */}
      <div className="report-pages">

        <ExecutiveCover
          fullName={fullName}
          assessmentId={assessmentId}
          assessmentDate={assessmentDate}
          freedomScore={freedomScore}
          freedomLevel={freedomLevel}
          freedomArchetype={freedomArchetype}
        />

        <TableOfContents />

      </div>

    </div>
  );
}