"use client";

import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import {PillarScore, Pillar} from "@/types/freedom";
import FreedomPDF from "./FreedomPDF";

const PDFDownloadLink = dynamic(
  () =>
    import("@react-pdf/renderer").then(
      (mod) => mod.PDFDownloadLink
    ),
  {
    ssr: false,
    loading: () => (
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-2 rounded-xl bg-slate-400 px-6 py-3 text-sm font-bold text-white shadow-lg"
      >
        <Download size={17} />
        Loading PDF...
      </button>
    ),
  }
);

interface HealthDimension {
  questionId: number;
  pillar: string;
  label: string;
  question: string;
  response: string;
  value: number;
  percentage: number;
  description?: string;
}

interface WealthDimension {
  questionId: number;
  pillar: string;
  label: string;
  question: string;
  response: string;
  value: number;
  percentage: number;
  description?: string;
}

interface GrowthDimension {
  questionId: number;
  pillar: string;
  label: string;
  question: string;
  response: string;
  value: number;
  percentage: number;
  description?: string;
}

interface PurposeDimension {
  questionId: number;
  pillar: string;
  label: string;
  question: string;
  response: string;
  value: number;
  percentage: number;
  description?: string;
}

interface Props {
  fullName: string;
  assessmentId: string;
  assessmentDate: string;
  freedomScore: number;
  freedomLevel: string;
  
freedomArchetype: {
  name: string;
  title: string;
  description: string;
  strengths: string[];
  watchOut: string[];
  nextLevel: string;
};

  executiveInsight: {
    headline: string;
    overview: string;
    strength: string;
    opportunity: string;
    next90Days: string;
    recommendation: string;
  };

  pillars: {
    pillar: string;
    label: string;
    score: number;
    description: string;
  }[];

  balanced: boolean;

  scoreSpread: number;

  healthAnalysis: {
    dimensions: HealthDimension[];
    strongest: HealthDimension | null;
    weakest: HealthDimension | null;
  };

  wealthAnalysis: {
    dimensions: WealthDimension[];
    strongest: WealthDimension | null;
    weakest: WealthDimension | null;
  };

 growthAnalysis: {
  dimensions: GrowthDimension[];
  strongest: GrowthDimension | null;
  weakest: GrowthDimension | null;
};

 leadershipAnalysis: {
  dimensions: GrowthDimension[];
  strongest: GrowthDimension | null;
  weakest: GrowthDimension | null;
};  

 purposeAnalysis: {
  dimensions: PurposeDimension[];
  strongest: PurposeDimension | null;
  weakest: PurposeDimension | null;
};

  blueprint: {
    pillar: Pillar;
    priority: "High" | "Medium" | "Low";
    actions: string[];
    focusBehavior: string;
    focusPercentage: number;
  }[];

}

export default function DownloadFreedomPDF({
  fullName,
  assessmentId,
  assessmentDate,
  freedomScore,
  freedomLevel,
  freedomArchetype,
  executiveInsight,
  pillars,
  balanced,
  scoreSpread,
  healthAnalysis,
  wealthAnalysis,
  growthAnalysis,
  leadershipAnalysis,
  purposeAnalysis,
  blueprint,

}: Props) {
  return (
    <PDFDownloadLink
      document={
        <FreedomPDF
          fullName={fullName}
          assessmentId={assessmentId}
          assessmentDate={assessmentDate}
          freedomScore={freedomScore}
          freedomLevel={freedomLevel}
          freedomArchetype={freedomArchetype}
          executiveInsight={executiveInsight}
          pillars={pillars}
          balanced={balanced}
          scoreSpread={scoreSpread}
          healthAnalysis={healthAnalysis}
          wealthAnalysis={wealthAnalysis}
          growthAnalysis={growthAnalysis}
	  leadershipAnalysis={leadershipAnalysis}
          purposeAnalysis={purposeAnalysis}
	  blueprint={blueprint}
        />
      }
      fileName={`Freedom-Score-${fullName
        .replace(/\s+/g, "-")}.pdf`}
    >
      {({ loading }: { loading: boolean }) => (
        <button
          type="button"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-60"
        >
          <Download size={17} />

          {loading
            ? "Preparing PDF..."
            : "Download Freedom Report"}
        </button>
      )}
    </PDFDownloadLink>
  );
}