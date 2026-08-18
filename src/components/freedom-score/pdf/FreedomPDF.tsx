"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import type { Pillar } from "@/types/freedom";

interface ExecutiveInsight {
  headline: string;
  overview: string;
  strength: string;
  opportunity: string;
  next90Days: string;
  recommendation: string;
}

  

interface PDFPillar {
  pillar: string;
  label: string;
  score: number;
  description: string;
}

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

interface LeadershipDimension {
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

interface FreedomPDFProps {
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
  executiveInsight: ExecutiveInsight;

  pillars: PDFPillar[];

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
    dimensions: WealthDimension[];
    strongest: WealthDimension | null;
    weakest: WealthDimension | null;
  };

   leadershipAnalysis: {
  dimensions: LeadershipDimension[];
  strongest: LeadershipDimension | null;
  weakest: LeadershipDimension | null;
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


const styles = StyleSheet.create({
  page: {
    padding: 42,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingBottom: 12,
    marginBottom: 30,
  },

  brand: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#047857",
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 8,
    color: "#94A3B8",
    marginTop: 4,
  },

  confidential: {
    fontSize: 8,
    color: "#94A3B8",
    marginTop: 5,
  },

  hero: {
    alignItems: "center",
    marginTop: 30,
  },

  eyebrow: {
    fontSize: 9,
    color: "#D97706",
    letterSpacing: 3,
    marginBottom: 14,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
    lineHeight: 1.15,
  },

  description: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 12,
    textAlign: "center",
  },

  identity: {
    marginTop: 30,
    padding: 22,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
  },

  label: {
    fontSize: 8,
    color: "#D97706",
    letterSpacing: 2,
    marginBottom: 7,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
  },

  assessment: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 5,
  },

  infoRow: {
    flexDirection: "row",
    marginTop: 18,
    gap: 50,
  },

  info: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 7,
    color: "#94A3B8",
    textTransform: "uppercase",
  },

  infoValue: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 4,
  },

  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 7,
    borderColor: "#FDE68A",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
  },

  score: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#0F172A",
  },

  scoreLabel: {
    fontSize: 7,
    color: "#94A3B8",
    letterSpacing: 1,
    marginTop: 4,
  },

  twoColumns: {
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
  },

  levelBox: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ECFDF5",
    borderWidth: 1,
    borderColor: "#A7F3D0",
    alignItems: "center",
  },

  archetypeBox: {
  flex: 1,
  padding: 16,
  borderRadius: 12,
  backgroundColor: "#FFFBEB",
  borderWidth: 1,
  borderColor: "#FDE68A",
  alignItems: "center",
},

      swotGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginTop: 16,
      },

      swotCard: {
        width: "48%",
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#F8FAFC",
        borderWidth: 1,
        borderColor: "#E2E8F0",
      },

      swotLabel: {
        fontSize: 7,
        fontWeight: "bold",
        color: "#D97706",
        letterSpacing: 1.5,
      },

      swotTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#0F172A",
        marginTop: 8,
      },

      swotScore: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#475569",
        marginTop: 4,
      },

      swotText: {
        fontSize: 9,
        color: "#475569",
        lineHeight: 1.5,
        marginTop: 8,
      },

      swotDetail: {
        fontSize: 8,
        color: "#64748B",
        lineHeight: 1.4,
        marginTop: 10,
      },

// =========================================
// PAGE 12 — 90-DAY ROADMAP STYLES
// =========================================

roadmapIntro: {
  fontSize: 9,
  color: "#475569",
  lineHeight: 1.5,
  marginTop: 8,
},

roadmapGrid: {
  marginTop: 10,
},

roadmapCard: {
  padding: 10,
  borderRadius: 10,
  backgroundColor: "#F8FAFC",
  borderWidth: 1,
  borderColor: "#E2E8F0",
  marginBottom: 8,
},

roadmapCardHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

roadmapPhase: {
  fontSize: 7,
  fontWeight: "bold",
  color: "#D97706",
  letterSpacing: 1,
},

roadmapDays: {
  fontSize: 7,
  fontWeight: "bold",
  color: "#64748B",
},

roadmapTitle: {
  fontSize: 11,
  fontWeight: "bold",
  color: "#0F172A",
  marginTop: 4,
},

roadmapAction: {
  fontSize: 8,
  color: "#475569",
  lineHeight: 1.35,
  marginTop: 4,
},

roadmapPillar: {
  fontSize: 7,
  color: "#64748B",
  marginTop: 5,
},

roadmapPriority: {
  fontSize: 6.5,
  fontWeight: "bold",
  color: "#B45309",
  letterSpacing: 0.7,
  marginTop: 5,
},

// =========================================
// PAGE 13 — ACTION BLUEPRINT STYLES
// =========================================

blueprintGrid: {
  marginTop: 6,
},

blueprintCard: {
  padding: 7,
  borderRadius: 8,
  backgroundColor: "#F8FAFC",
  borderWidth: 1,
  borderColor: "#E2E8F0",
  marginBottom: 5,
},

blueprintCardHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

blueprintPillar: {
  fontSize: 9,
  fontWeight: "bold",
  color: "#0F172A",
},

blueprintScore: {
  fontSize: 6.5,
  fontWeight: "bold",
  color: "#64748B",
},

blueprintPriority: {
  fontSize: 6,
  fontWeight: "bold",
  color: "#B45309",
  letterSpacing: 0.5,
  marginTop: 2,
},

blueprintActions: {
  marginTop: 3,
},

blueprintAction: {
  fontSize: 6.5,
  color: "#475569",
  lineHeight: 1.2,
  marginTop: 1,
},

blueprintBullet: {
  fontSize: 6.5,
  fontWeight: "bold",
  color: "#D97706",
},

blueprintPrinciple: {
  marginTop: 5,
  padding: 8,
  borderRadius: 8,
  backgroundColor: "#0F172A",
},

blueprintPrincipleLabel: {
  fontSize: 6,
  fontWeight: "bold",
  color: "#F59E0B",
  letterSpacing: 0.8,
},

blueprintPrincipleText: {
  fontSize: 7,
  color: "#FFFFFF",
  lineHeight: 1.25,
  marginTop: 3,
},

archetypePage10Box: {
  padding: 18,
  borderRadius: 12,
  backgroundColor: "#FFFBEB",
  borderWidth: 1,
  borderColor: "#FDE68A",
  alignItems: "center",
  marginTop: 8,
  marginBottom: 12,
},
  boxLabel: {
    fontSize: 7,
    color: "#64748B",
    letterSpacing: 1,
  },

  boxValue: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 7,
    textAlign: "center",
  },

  insight: {
    marginTop: 22,
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#0F172A",
    alignItems: "center",
  },

  insightLabel: {
    fontSize: 7,
    color: "#FBBF24",
    letterSpacing: 2,
  },

  insightText: {
    fontSize: 10,
    color: "#E2E8F0",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 1.5,
  },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 42,
    right: 42,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footerText: {
    fontSize: 7,
    color: "#94A3B8",
  },

  tocTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 7,
  },

  tocSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 25,
  },

  tocIntro: {
  padding: 12,
  backgroundColor: "#F1F5F9",
  borderRadius: 12,
  marginBottom: 12,
},

  tocIntroTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0F172A",
  },

  tocIntroText: {
  fontSize: 7,
  color: "#64748B",
  marginTop: 4,
  lineHeight: 1.4,
},

  tocItem: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 5,
  borderBottomWidth: 1,
  borderBottomColor: "#E2E8F0",
},

  tocNumber: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
  },

  tocContent: {
    flex: 1,
    marginLeft: 10,
  },

  tocItemTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0F172A",
  },

  tocItemDescription: {
  fontSize: 6.5,
  color: "#64748B",
  marginTop: 1,
},

  howTo: {
    marginTop: 18,
    padding: 14,
    backgroundColor: "#FFFBEB",
    borderLeftWidth: 4,
    borderLeftColor: "#F59E0B",
  },

  howToTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#92400E",
  },

  howToText: {
    fontSize: 8,
    color: "#475569",
    marginTop: 5,
    lineHeight: 1.5,
  },
  /* =========================================
     EXECUTIVE SUMMARY
     ========================================= */

  summaryHeader: {
    marginBottom: 24,
  },

  sectionEyebrow: {
    fontSize: 9,
    color: "#2563EB",
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
  },

  sectionSubtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 5,
  },

  summaryHero: {
    backgroundColor: "#1D4ED8",
    borderRadius: 16,
    padding: 22,
    marginBottom: 20,
  },

  summaryHeroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  summaryHeroText: {
    fontSize: 10,
    color: "#DBEAFE",
    lineHeight: 1.6,
    marginTop: 9,
  },

  insightGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },

  insightCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  insightCardFull: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
  },

  insightCardLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#64748B",
    letterSpacing: 1,
  },

  insightCardText: {
    fontSize: 9,
    color: "#334155",
    lineHeight: 1.55,
    marginTop: 7,
  },

  priorityBox: {
    marginTop: 6,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFFBEB",
    borderWidth: 1,
    borderColor: "#FDE68A",
  },

  priorityLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#B45309",
    letterSpacing: 1,
  },

  priorityText: {
    fontSize: 9,
    color: "#475569",
    lineHeight: 1.55,
    marginTop: 7,
  },

  /* =========================================
     FREEDOM SCORE OVERVIEW
     ========================================= */

  overviewHeader: {
    marginBottom: 18,
  },

  overviewEyebrow: {
    fontSize: 9,
    color: "#2563EB",
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: 7,
  },

  overviewTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
  },

  overviewSubtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 5,
  },

  scoreOverviewBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 14,
    backgroundColor: "#0F172A",
    marginBottom: 18,
  },

  scoreOverviewNumber: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  scoreOverviewSmall: {
    fontSize: 8,
    color: "#94A3B8",
    marginTop: 3,
    letterSpacing: 1,
  },

  scoreOverviewRight: {
    flex: 1,
    marginLeft: 24,
  },

  scoreOverviewLevel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FBBF24",
  },

  scoreOverviewProfile: {
    fontSize: 10,
    color: "#CBD5E1",
    marginTop: 5,
  },

  pillarList: {
    marginTop: 4,
  },

  pillarRow: {
    marginBottom: 12,
  },

  pillarTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  pillarName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0F172A",
  },

  pillarScore: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2563EB",
  },

  pillarTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  pillarFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2563EB",
  },

  pillarDescription: {
    fontSize: 7.5,
    color: "#64748B",
    marginTop: 4,
    lineHeight: 1.35,
  },

  balanceBox: {
    marginTop: 8,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },

  balanceTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#1D4ED8",
  },

   balanceText: {
    fontSize: 8,
    color: "#475569",
    marginTop: 5,
    lineHeight: 1.45,
  },

  /* =========================================
     HEALTH ANALYSIS
     ========================================= */

  healthHeader: {
    marginBottom: 16,
  },

  healthEyebrow: {
    fontSize: 9,
    color: "#059669",
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: 7,
  },

  healthTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
  },

  healthSubtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 5,
  },

  healthScoreBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#064E3B",
    marginBottom: 16,
  },

  healthScoreNumber: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  healthScoreSmall: {
    fontSize: 8,
    color: "#A7F3D0",
    marginTop: 2,
    letterSpacing: 1,
  },

  healthScoreRight: {
    flex: 1,
    marginLeft: 22,
  },

  healthScoreRightTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  healthScoreRightText: {
    fontSize: 9,
    color: "#D1FAE5",
    marginTop: 5,
    lineHeight: 1.4,
  },

  dimensionList: {
    marginTop: 2,
  },

  dimensionRow: {
    marginBottom: 11,
  },

  dimensionTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  dimensionName: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0F172A",
    flex: 1,
  },

  dimensionScore: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#059669",
  },

  dimensionTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  dimensionFill: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#059669",
  },

  dimensionResponse: {
    fontSize: 7,
    color: "#64748B",
    marginTop: 3,
  },

  healthInsightGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 5,
  },

  healthInsightCard: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  healthInsightLabel: {
    fontSize: 7,
    fontWeight: "bold",
    color: "#64748B",
    letterSpacing: 1,
  },

  healthInsightTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 6,
  },

  healthInsightText: {
    fontSize: 8,
    color: "#475569",
    marginTop: 5,
    lineHeight: 1.4,
  },

  healthActionBox: {
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#ECFDF5",
    borderWidth: 1,
    borderColor: "#A7F3D0",
  },

  healthActionLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#047857",
    letterSpacing: 1,
  },

  healthActionText: {
    fontSize: 8.5,
    color: "#334155",
    marginTop: 6,
    lineHeight: 1.45,
  },

  /* =========================================
     WEALTH ANALYSIS
     ========================================= */

  wealthHeader: {
    marginBottom: 16,
  },

  wealthEyebrow: {
    fontSize: 9,
    color: "#2563EB",
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: 7,
  },

  wealthTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
  },

  wealthSubtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 5,
  },

  wealthScoreBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#1E3A8A",
    marginBottom: 16,
  },

  wealthScoreNumber: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  wealthScoreSmall: {
    fontSize: 8,
    color: "#BFDBFE",
    marginTop: 2,
    letterSpacing: 1,
  },

  wealthScoreRight: {
    flex: 1,
    marginLeft: 22,
  },

  wealthScoreRightTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  wealthScoreRightText: {
    fontSize: 9,
    color: "#DBEAFE",
    marginTop: 5,
    lineHeight: 1.4,
  },

  wealthDimensionList: {
    marginTop: 2,
  },

  wealthDimensionRow: {
    marginBottom: 11,
  },

  wealthDimensionTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  wealthDimensionName: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0F172A",
    flex: 1,
  },

  wealthDimensionScore: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#2563EB",
  },

  wealthDimensionTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  wealthDimensionFill: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#2563EB",
  },

  wealthDimensionResponse: {
    fontSize: 7,
    color: "#64748B",
    marginTop: 3,
  },

  wealthInsightGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 5,
  },

  wealthInsightCard: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  wealthInsightLabel: {
    fontSize: 7,
    fontWeight: "bold",
    color: "#64748B",
    letterSpacing: 1,
  },

  wealthInsightTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 6,
  },

  wealthInsightText: {
    fontSize: 8,
    color: "#475569",
    marginTop: 5,
    lineHeight: 1.4,
  },

  wealthActionBox: {
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },

  wealthActionLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#1D4ED8",
    letterSpacing: 1,
  },

  wealthActionText: {
    fontSize: 8.5,
    color: "#334155",
    marginTop: 6,
    lineHeight: 1.45,
  },

   /* =========================================
     GROWTH & AI ANALYSIS
     ========================================= */

  growthHeader: {
    marginBottom: 16,
  },

  growthEyebrow: {
    fontSize: 9,
    color: "#7C3AED",
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: 7,
  },

  growthTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
  },

  growthSubtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 5,
  },

  growthScoreBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#4C1D95",
    marginBottom: 16,
  },

  growthScoreNumber: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  growthScoreSmall: {
    fontSize: 8,
    color: "#DDD6FE",
    marginTop: 2,
    letterSpacing: 1,
  },

  growthScoreRight: {
    flex: 1,
    marginLeft: 22,
  },

  growthScoreRightTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  growthScoreRightText: {
    fontSize: 9,
    color: "#EDE9FE",
    marginTop: 5,
    lineHeight: 1.4,
  },

  growthDimensionList: {
    marginTop: 2,
  },

  growthDimensionRow: {
    marginBottom: 11,
  },

  growthDimensionTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  growthDimensionName: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0F172A",
    flex: 1,
  },

  growthDimensionScore: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#7C3AED",
  },

  growthDimensionTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    overflow: "hidden",
  },

  growthDimensionFill: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#7C3AED",
  },

  growthDimensionResponse: {
    fontSize: 7,
    color: "#64748B",
    marginTop: 3,
  },

  growthInsightGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 5,
  },

  growthInsightCard: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  growthInsightLabel: {
    fontSize: 7,
    fontWeight: "bold",
    color: "#64748B",
    letterSpacing: 1,
  },

  growthInsightTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 6,
  },

  growthInsightText: {
    fontSize: 8,
    color: "#475569",
    marginTop: 5,
    lineHeight: 1.4,
  },

  growthActionBox: {
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#F5F3FF",
    borderWidth: 1,
    borderColor: "#DDD6FE",
  },

  growthActionLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#6D28D9",
    letterSpacing: 1,
  },

  growthActionText: {
    fontSize: 8.5,
    color: "#334155",
    marginTop: 6,
    lineHeight: 1.45,
  },

});

const sections = [
  ["Executive Cover", "Personalized assessment overview and executive details."],
  ["Executive Summary", "Overall Freedom Score, key insights and recommendations."],
  ["Freedom Score Overview", "Radar chart, score interpretation and overall performance."],
  ["Health Analysis", "Physical wellbeing, nutrition, habits and energy."],
  ["Wealth Analysis", "Income, wealth creation and financial planning."],
  ["Growth & AI Analysis", "Learning, AI adoption and personal development."],
  ["Leadership Analysis", "Influence, communication and leadership effectiveness."],
  ["Purpose Analysis", "Mission, vision and long-term direction."],
  ["Freedom Archetype™", "Your unique leadership and success profile."],
  ["Personal SWOT Analysis", "Strengths, weaknesses, opportunities and risks."],
  ["90-Day Freedom Roadmap", "Your personalized implementation strategy."],
  ["90-Day Action Blueprint", "Your personalized behavioral action plan and measurable next steps."],
  ["Freedom Certificate", "Official completion certificate."],
];

export default function FreedomPDF({
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

}: FreedomPDFProps) {
 
	
  // =========================================
  // PERSONAL SWOT DATA
  // =========================================

  const allAnalyses = [
    healthAnalysis,
    wealthAnalysis,
    growthAnalysis,
    leadershipAnalysis,
    purposeAnalysis,
  ];

const allDimensions = allAnalyses.flatMap(
  (analysis) => analysis.dimensions
);

const strongestDimension =
  [...allDimensions].sort(
    (a, b) => b.percentage - a.percentage
  )[0] ?? null;

const sortedPillars = [...pillars].sort(
  (a, b) => b.score - a.score
);

const strongestPillar =
  sortedPillars[0] ?? null;

const weakestPillar =
  sortedPillars[sortedPillars.length - 1] ?? null;

const weakestPillarAnalysis =
  allAnalyses.find(
    (analysis) =>
      analysis.dimensions[0]?.pillar ===
      weakestPillar?.pillar
  ) ?? null;

const weakestDimension =
  weakestPillarAnalysis?.dimensions.length
    ? [...weakestPillarAnalysis.dimensions].sort(
        (a, b) => a.percentage - b.percentage
      )[0]
    : null;

  return (
    
 
    <Document
      title={`Freedom Score Report - ${fullName}`}
      author="Freedom Score™"
      subject="Personal Freedom Assessment"
    >

      {/* PAGE 1 */}
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

          <Text style={styles.confidential}>
            CONFIDENTIAL
          </Text>
        </View>

        <View style={styles.hero}>

          <Text style={styles.eyebrow}>
            FREEDOM SCORE™
          </Text>

          <Text style={styles.title}>
            Executive Intelligence{"\n"}Report
          </Text>

          <Text style={styles.description}>
            Confidential Personal Freedom Assessment
          </Text>

        </View>

        <View style={styles.identity}>

          <Text style={styles.label}>
            PREPARED EXCLUSIVELY FOR
          </Text>

          <Text style={styles.name}>
            {fullName}
          </Text>

          <Text style={styles.assessment}>
            Freedom Score™ Executive Assessment
          </Text>

          <View style={styles.infoRow}>

            <View style={styles.info}>
              <Text style={styles.infoLabel}>
                Assessment ID
              </Text>

              <Text style={styles.infoValue}>
                {assessmentId}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.infoLabel}>
                Assessment Date
              </Text>

              <Text style={styles.infoValue}>
                {assessmentDate}
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.scoreCircle}>

          <Text style={styles.score}>
            {freedomScore}
          </Text>

          <Text style={styles.scoreLabel}>
            FREEDOM SCORE
          </Text>

        </View>

        <View style={styles.twoColumns}>

          <View style={styles.levelBox}>

            <Text style={styles.boxLabel}>
              FREEDOM LEVEL
            </Text>

            <Text style={styles.boxValue}>
              {freedomLevel}
            </Text>

          </View>

          <View style={styles.archetypeBox}>

            <Text style={styles.boxLabel}>
              FREEDOM ARCHETYPE™
            </Text>

            <Text style={styles.boxValue}>
              {freedomArchetype.title}
            </Text>

          </View>

        </View>

        <View style={styles.insight}>

          <Text style={styles.insightLabel}>
            EXECUTIVE INSIGHT
          </Text>

          <Text style={styles.insightText}>
            Every remarkable transformation begins with one intentional decision.
          </Text>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>
        </View>

      </Page>

      {/* PAGE 2 */}
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        <Text style={styles.tocTitle}>
          Table of Contents
        </Text>

        <Text style={styles.tocSubtitle}>
          Your personalized Freedom Blueprint™ Executive Edition
        </Text>

        <View style={styles.tocIntro}>

          <Text style={styles.tocIntroTitle}>
            Report Structure
          </Text>

          <Text style={styles.tocIntroText}>
            A structured journey through your current position,
            strengths, opportunities and strategic roadmap toward
            greater freedom.
          </Text>

        </View>

        {sections.map(([title, description], index) => (
          <View
            key={title}
            style={styles.tocItem}
          >

            <Text style={styles.tocNumber}>
              {index + 1}
            </Text>

            <View style={styles.tocContent}>

              <Text style={styles.tocItemTitle}>
                {title}
              </Text>

              <Text style={styles.tocItemDescription}>
                {description}
              </Text>

            </View>

          </View>
        ))}

        

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>
        </View>

      </Page>      

      {/* PAGE 3 — EXECUTIVE SUMMARY */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        <View style={styles.summaryHeader}>

          <Text style={styles.sectionEyebrow}>
            EXECUTIVE INTELLIGENCE
          </Text>

          <Text style={styles.sectionTitle}>
            Executive Summary
          </Text>

          <Text style={styles.sectionSubtitle}>
            Your personalized Freedom Score interpretation and strategic direction.
          </Text>

        </View>

        {/* Main Insight */}

        <View style={styles.summaryHero}>

          <Text style={styles.summaryHeroTitle}>
            {executiveInsight.headline}
          </Text>

          <Text style={styles.summaryHeroText}>
            {executiveInsight.overview}
          </Text>

        </View>

        {/* Strength + Opportunity */}

        <View style={styles.insightGrid}>

          <View style={styles.insightCard}>

            <Text style={styles.insightCardLabel}>
              Greatest Strength
            </Text>

            <Text style={styles.insightCardText}>
              {executiveInsight.strength}
            </Text>

          </View>

          <View style={styles.insightCard}>

            <Text style={styles.insightCardLabel}>
              Biggest Opportunity
            </Text>

            <Text style={styles.insightCardText}>
              {executiveInsight.opportunity}
            </Text>

          </View>

        </View>

        {/* 90 Days */}

        <View style={styles.insightCardFull}>

          <Text style={styles.insightCardLabel}>
            Your Next 90 Days
          </Text>

          <Text style={styles.insightCardText}>
            {executiveInsight.next90Days}
          </Text>

        </View>

        {/* Recommendation */}

        <View style={styles.priorityBox}>

          <Text style={styles.priorityLabel}>
            STRATEGIC RECOMMENDATION
          </Text>

          <Text style={styles.priorityText}>
            {executiveInsight.recommendation}
          </Text>

        </View>

        {/* Current Position */}

        <View style={styles.insightCardFull}>

          <Text style={styles.insightCardLabel}>
            Current Freedom Position
          </Text>

          <Text style={styles.insightCardText}>
            Your current Freedom Score is {freedomScore}/100,
            placing you in the {freedomLevel} level.
            Your Freedom Archetype™ is {freedomArchetype.title}.
          </Text>

        </View>

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>
      

      {/* PAGE 4 — FREEDOM SCORE OVERVIEW */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        <View style={styles.overviewHeader}>

          <Text style={styles.overviewEyebrow}>
            FREEDOM INTELLIGENCE
          </Text>

          <Text style={styles.overviewTitle}>
            Freedom Score Overview
          </Text>

          <Text style={styles.overviewSubtitle}>
            A strategic view of your performance across the five pillars of freedom.
          </Text>

        </View>

        {/* Overall Score */}

        <View style={styles.scoreOverviewBox}>

          <View>

            <Text style={styles.scoreOverviewNumber}>
              {freedomScore}
            </Text>

            <Text style={styles.scoreOverviewSmall}>
              OUT OF 100
            </Text>

          </View>

          <View style={styles.scoreOverviewRight}>

            <Text style={styles.scoreOverviewLevel}>
              {freedomLevel}
            </Text>

            <Text style={styles.scoreOverviewProfile}>
              Freedom Archetype™: {freedomArchetype.title}
            </Text>

          </View>

        </View>

        {/* Five Pillars */}

        <View style={styles.pillarList}>

          {pillars.map((pillar) => (

            <View
              key={pillar.pillar}
              style={styles.pillarRow}
            >

              <View style={styles.pillarTop}>

                <Text style={styles.pillarName}>
                  {pillar.label}
                </Text>

                <Text style={styles.pillarScore}>
                  {pillar.score}/100
                </Text>

              </View>

              <View style={styles.pillarTrack}>

                <View
                  style={[
                    styles.pillarFill,
                    {
                      width: `${Math.max(
                        0,
                        Math.min(100, pillar.score)
                      )}%`,
                    },
                  ]}
                />

              </View>

              <Text style={styles.pillarDescription}>
                {pillar.description}
              </Text>

            </View>

          ))}

        </View>

        {/* Balance Interpretation */}

        <View style={styles.balanceBox}>

          <Text style={styles.balanceTitle}>
            {balanced
              ? "Balanced Freedom Profile"
              : "Strategic Imbalance Detected"}
          </Text>

          <Text style={styles.balanceText}>
            {balanced
              ? "Your five pillars are relatively balanced. Continue strengthening every area while maintaining your existing strengths."
              : `Your pillar scores have a spread of ${scoreSpread} points. Focus your attention on the lowest-scoring pillar while protecting your strongest area.`}
          </Text>

        </View>

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>


      {/* =========================================
          PAGE 5 — HEALTH ANALYSIS
          ========================================= */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Header */}

        <View style={styles.healthHeader}>

          <Text style={styles.healthEyebrow}>
            HEALTH INTELLIGENCE
          </Text>

          <Text style={styles.healthTitle}>
            Health Analysis
          </Text>

          <Text style={styles.healthSubtitle}>
            A personalized analysis of the five behaviors that influence
            your physical wellbeing, energy and long-term vitality.
          </Text>

        </View>

        {/* Health Score */}

        <View style={styles.healthScoreBox}>

          <View>

            <Text style={styles.healthScoreNumber}>
              {
                pillars.find(
                  (pillar) => pillar.pillar === "health"
                )?.score ?? 0
              }
            </Text>

            <Text style={styles.healthScoreSmall}>
              HEALTH SCORE / 100
            </Text>

          </View>

          <View style={styles.healthScoreRight}>

            <Text style={styles.healthScoreRightTitle}>
              Your Health Foundation
            </Text>

            <Text style={styles.healthScoreRightText}>
              Your Health score reflects the consistency of your
              exercise, sleep, nutrition, energy and health-monitoring
              behaviors.
            </Text>

          </View>

        </View>

        {/* Five Health Dimensions */}

        <View style={styles.dimensionList}>

          {healthAnalysis.dimensions.map(
            (dimension) => (

              <View
                key={dimension.questionId}
                style={styles.dimensionRow}
              >

                <View style={styles.dimensionTop}>

                  <Text style={styles.dimensionName}>
                    {dimension.label}
                  </Text>

                  <Text style={styles.dimensionScore}>
                    {dimension.percentage}%
                  </Text>

                </View>

                <View style={styles.dimensionTrack}>

                  <View
                    style={[
                      styles.dimensionFill,
                      {
                        width: `${Math.max(
                          0,
                          Math.min(
                            100,
                            dimension.percentage
                          )
                        )}%`,
                      },
                    ]}
                  />

                </View>

                <Text style={styles.dimensionResponse}>
                  Response: {dimension.response}
                </Text>

              </View>

            )
          )}

        </View>

        {/* Strongest + Weakest */}

        <View style={styles.healthInsightGrid}>

          <View style={styles.healthInsightCard}>

            <Text style={styles.healthInsightLabel}>
              STRONGEST HEALTH BEHAVIOR
            </Text>

            <Text style={styles.healthInsightTitle}>
              {healthAnalysis.strongest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.healthInsightText}>
              {healthAnalysis.strongest
                ? `${healthAnalysis.strongest.response} — ${healthAnalysis.strongest.percentage}%. Continue protecting this behavior as part of your long-term health foundation.`
                : "No health response was available."}
            </Text>

          </View>

          <View style={styles.healthInsightCard}>

            <Text style={styles.healthInsightLabel}>
              PRIORITY OPPORTUNITY
            </Text>

            <Text style={styles.healthInsightTitle}>
              {healthAnalysis.weakest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.healthInsightText}>
              {healthAnalysis.weakest
                ? `${healthAnalysis.weakest.response} — ${healthAnalysis.weakest.percentage}%. This is the health behavior with the greatest immediate opportunity for improvement.`
                : "No health response was available."}
            </Text>

          </View>

        </View>

        {/* Action */}

        <View style={styles.healthActionBox}>

          <Text style={styles.healthActionLabel}>
            90-DAY HEALTH PRIORITY
          </Text>

          <Text style={styles.healthActionText}>
            Focus first on improving your lowest-scoring health
            behavior. Build one repeatable habit around that area,
            track it consistently and review your progress weekly.
            Protect your strongest health behavior while improving
            the area that currently limits your overall health score.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>

	
      {/* =========================================
          PAGE 6 — WEALTH ANALYSIS
          ========================================= */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Header */}

        <View style={styles.wealthHeader}>

          <Text style={styles.wealthEyebrow}>
            WEALTH INTELLIGENCE
          </Text>

          <Text style={styles.wealthTitle}>
            Wealth Analysis
          </Text>

          <Text style={styles.wealthSubtitle}>
            A personalized analysis of the five financial behaviors that
            influence your wealth creation, financial resilience and
            long-term independence.
          </Text>

        </View>

        {/* Wealth Score */}

        <View style={styles.wealthScoreBox}>

          <View>

            <Text style={styles.wealthScoreNumber}>
              {
                pillars.find(
                  (pillar) => pillar.pillar === "wealth"
                )?.score ?? 0
              }
            </Text>

            <Text style={styles.wealthScoreSmall}>
              WEALTH SCORE / 100
            </Text>

          </View>

          <View style={styles.wealthScoreRight}>

            <Text style={styles.wealthScoreRightTitle}>
              Your Wealth Foundation
            </Text>

            <Text style={styles.wealthScoreRightText}>
              Your Wealth score reflects the consistency of your
              saving, income diversification, investing, expense
              management and financial planning behaviors.
            </Text>

          </View>

        </View>

        {/* Five Wealth Dimensions */}

        <View style={styles.wealthDimensionList}>

          {wealthAnalysis.dimensions.map(
            (dimension) => (

              <View
                key={dimension.questionId}
                style={styles.wealthDimensionRow}
              >

                <View style={styles.wealthDimensionTop}>

                  <Text style={styles.wealthDimensionName}>
                    {dimension.label}
                  </Text>

                  <Text style={styles.wealthDimensionScore}>
                    {dimension.percentage}%
                  </Text>

                </View>

                <View style={styles.wealthDimensionTrack}>

                  <View
                    style={[
                      styles.wealthDimensionFill,
                      {
                        width: `${Math.max(
                          0,
                          Math.min(
                            100,
                            dimension.percentage
                          )
                        )}%`,
                      },
                    ]}
                  />

                </View>

                <Text style={styles.wealthDimensionResponse}>
                  Response: {dimension.response}
                </Text>

              </View>

            )
          )}

        </View>

        {/* Strongest + Weakest */}

        <View style={styles.wealthInsightGrid}>

          <View style={styles.wealthInsightCard}>

            <Text style={styles.wealthInsightLabel}>
              STRONGEST WEALTH BEHAVIOR
            </Text>

            <Text style={styles.wealthInsightTitle}>
              {wealthAnalysis.strongest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.wealthInsightText}>
              {wealthAnalysis.strongest
                ? `${wealthAnalysis.strongest.response} — ${wealthAnalysis.strongest.percentage}%. Continue protecting this behavior as part of your long-term financial foundation.`
                : "No wealth response was available."}
            </Text>

          </View>

          <View style={styles.wealthInsightCard}>

            <Text style={styles.wealthInsightLabel}>
              PRIORITY OPPORTUNITY
            </Text>

            <Text style={styles.wealthInsightTitle}>
              {wealthAnalysis.weakest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.wealthInsightText}>
              {wealthAnalysis.weakest
                ? `${wealthAnalysis.weakest.response} — ${wealthAnalysis.weakest.percentage}%. This is the wealth behavior with the greatest immediate opportunity for improvement.`
                : "No wealth response was available."}
            </Text>

          </View>

        </View>

        {/* Action */}

        <View style={styles.wealthActionBox}>

          <Text style={styles.wealthActionLabel}>
            90-DAY WEALTH PRIORITY
          </Text>

          <Text style={styles.wealthActionText}>
            Focus first on improving your lowest-scoring wealth
            behavior. Build one repeatable financial habit around
            that area, track it consistently and review your
            progress weekly. Protect your strongest wealth behavior
            while improving the area that currently limits your
            financial freedom.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>

	      {/* =========================================
          PAGE 7 — GROWTH & AI ANALYSIS
          ========================================= */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Header */}

        <View style={styles.growthHeader}>

          <Text style={styles.growthEyebrow}>
            GROWTH & AI INTELLIGENCE
          </Text>

          <Text style={styles.growthTitle}>
            Growth & AI Analysis
          </Text>

          <Text style={styles.growthSubtitle}>
            A personalized analysis of the five behaviors that influence
            continuous learning, AI adoption, personal development and
            your ability to adapt to a changing world.
          </Text>

        </View>

        {/* Growth Score */}

        <View style={styles.growthScoreBox}>

          <View>

            <Text style={styles.growthScoreNumber}>
              {
                pillars.find(
                  (pillar) => pillar.pillar === "growth"
                )?.score ?? 0
              }
            </Text>

            <Text style={styles.growthScoreSmall}>
              GROWTH SCORE / 100
            </Text>

          </View>

          <View style={styles.growthScoreRight}>

            <Text style={styles.growthScoreRightTitle}>
              Your Growth Foundation
            </Text>

            <Text style={styles.growthScoreRightText}>
              Your Growth score reflects how consistently you
              develop new skills, use AI for productivity, invest
              in learning, seek feedback and embrace new technology.
            </Text>

          </View>

        </View>

        {/* Five Growth Dimensions */}

        <View style={styles.growthDimensionList}>

          {growthAnalysis.dimensions.map(
            (dimension) => (

              <View
                key={dimension.questionId}
                style={styles.growthDimensionRow}
              >

                <View style={styles.growthDimensionTop}>

                  <Text style={styles.growthDimensionName}>
                    {dimension.label}
                  </Text>

                  <Text style={styles.growthDimensionScore}>
                    {dimension.percentage}%
                  </Text>

                </View>

                <View style={styles.growthDimensionTrack}>

                  <View
                    style={[
                      styles.growthDimensionFill,
                      {
                        width: `${Math.max(
                          0,
                          Math.min(
                            100,
                            dimension.percentage
                          )
                        )}%`,
                      },
                    ]}
                  />

                </View>

                <Text style={styles.growthDimensionResponse}>
                  Response: {dimension.response}
                </Text>

              </View>

            )
          )}

        </View>

        {/* Strongest + Weakest */}

        <View style={styles.growthInsightGrid}>

          <View style={styles.growthInsightCard}>

            <Text style={styles.growthInsightLabel}>
              STRONGEST GROWTH BEHAVIOR
            </Text>

            <Text style={styles.growthInsightTitle}>
              {growthAnalysis.strongest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.growthInsightText}>
              {growthAnalysis.strongest
                ? `${growthAnalysis.strongest.response} — ${growthAnalysis.strongest.percentage}%. Continue protecting this behavior as part of your long-term growth system.`
                : "No growth response was available."}
            </Text>

          </View>

          <View style={styles.growthInsightCard}>

            <Text style={styles.growthInsightLabel}>
              PRIORITY OPPORTUNITY
            </Text>

            <Text style={styles.growthInsightTitle}>
              {growthAnalysis.weakest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.growthInsightText}>
              {growthAnalysis.weakest
                ? `${growthAnalysis.weakest.response} — ${growthAnalysis.weakest.percentage}%. This is the growth behavior with the greatest immediate opportunity for improvement.`
                : "No growth response was available."}
            </Text>

          </View>

        </View>

        {/* Action */}

        <View style={styles.growthActionBox}>

          <Text style={styles.growthActionLabel}>
            90-DAY GROWTH & AI PRIORITY
          </Text>

          <Text style={styles.growthActionText}>
            Focus first on improving your lowest-scoring growth
            behavior. Build one repeatable learning or technology
            habit around that area, use AI where it can increase
            your effectiveness, and review your progress weekly.
            Protect your strongest growth behavior while deliberately
            expanding your ability to learn and adapt.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>

      {/* =========================================
          PAGE 8 — LEADERSHIP ANALYSIS
          ========================================= */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Header */}

        <View style={styles.growthHeader}>

          <Text style={styles.growthEyebrow}>
            LEADERSHIP INTELLIGENCE
          </Text>

          <Text style={styles.growthTitle}>
            Leadership Analysis
          </Text>

          <Text style={styles.growthSubtitle}>
            A personalized analysis of the five leadership behaviors
            that influence trust, communication, resilience, initiative
            and your ability to inspire people around you.
          </Text>

        </View>

        {/* Leadership Score */}

        <View style={styles.growthScoreBox}>

          <View>

            <Text style={styles.growthScoreNumber}>
              {
                pillars.find(
                  (pillar) => pillar.pillar === "leadership"
                )?.score ?? 0
              }
            </Text>

            <Text style={styles.growthScoreSmall}>
              LEADERSHIP SCORE / 100
            </Text>

          </View>

          <View style={styles.growthScoreRight}>

            <Text style={styles.growthScoreRightTitle}>
              Your Leadership Foundation
            </Text>

            <Text style={styles.growthScoreRightText}>
              Your Leadership score reflects how consistently
              you build trust, communicate confidently, remain
              calm under pressure, take initiative and motivate
              the people around you.
            </Text>

          </View>

        </View>

        {/* Five Leadership Dimensions */}

        <View style={styles.growthDimensionList}>

          {leadershipAnalysis.dimensions.map(
            (dimension) => (

              <View
                key={dimension.questionId}
                style={styles.growthDimensionRow}
              >

                <View style={styles.growthDimensionTop}>

                  <Text style={styles.growthDimensionName}>
                    {dimension.label}
                  </Text>

                  <Text style={styles.growthDimensionScore}>
                    {dimension.percentage}%
                  </Text>

                </View>

                <View style={styles.growthDimensionTrack}>

                  <View
                    style={[
                      styles.growthDimensionFill,
                      {
                        width: `${Math.max(
                          0,
                          Math.min(
                            100,
                            dimension.percentage
                          )
                        )}%`,
                      },
                    ]}
                  />

                </View>

                <Text style={styles.growthDimensionResponse}>
                  Response: {dimension.response}
                </Text>

              </View>

            )
          )}

        </View>

        {/* Strongest + Weakest */}

        <View style={styles.growthInsightGrid}>

          <View style={styles.growthInsightCard}>

            <Text style={styles.growthInsightLabel}>
              STRONGEST LEADERSHIP BEHAVIOR
            </Text>

            <Text style={styles.growthInsightTitle}>
              {leadershipAnalysis.strongest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.growthInsightText}>
              {leadershipAnalysis.strongest
                ? `${leadershipAnalysis.strongest.response} — ${leadershipAnalysis.strongest.percentage}%. Continue strengthening this behavior as part of your leadership foundation.`
                : "No leadership response was available."}
            </Text>

          </View>

          <View style={styles.growthInsightCard}>

            <Text style={styles.growthInsightLabel}>
              PRIORITY OPPORTUNITY
            </Text>

            <Text style={styles.growthInsightTitle}>
              {leadershipAnalysis.weakest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.growthInsightText}>
              {leadershipAnalysis.weakest
                ? `${leadershipAnalysis.weakest.response} — ${leadershipAnalysis.weakest.percentage}%. This is the leadership behavior with the greatest immediate opportunity for improvement.`
                : "No leadership response was available."}
            </Text>

          </View>

        </View>

        {/* Action */}

        <View style={styles.growthActionBox}>

          <Text style={styles.growthActionLabel}>
            90-DAY LEADERSHIP PRIORITY
          </Text>

          <Text style={styles.growthActionText}>
            Focus first on improving your lowest-scoring leadership
            behavior. Turn that area into a deliberate weekly practice,
            seek feedback from people you lead or influence, and
            measure your progress through real-world interactions.
            Protect your strongest leadership behavior while developing
            greater consistency across the full leadership foundation.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>

	      {/* =========================================
          PAGE 9 — PURPOSE ANALYSIS
          ========================================= */}

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Header */}

        <View style={styles.growthHeader}>

          <Text style={styles.growthEyebrow}>
            PURPOSE & DIRECTION INTELLIGENCE
          </Text>

          <Text style={styles.growthTitle}>
            Purpose Analysis
          </Text>

          <Text style={styles.growthSubtitle}>
            A personalized analysis of the five behaviors that influence
            clarity of vision, alignment, goal review, discipline and
            your ability to create meaningful long-term progress.
          </Text>

        </View>

        {/* Purpose Score */}

        <View style={styles.growthScoreBox}>

          <View>

            <Text style={styles.growthScoreNumber}>
              {
                pillars.find(
                  (pillar) => pillar.pillar === "purpose"
                )?.score ?? 0
              }
            </Text>

            <Text style={styles.growthScoreSmall}>
              PURPOSE SCORE / 100
            </Text>

          </View>

          <View style={styles.growthScoreRight}>

            <Text style={styles.growthScoreRightTitle}>
              Your Purpose Foundation
            </Text>

            <Text style={styles.growthScoreRightText}>
              Your Purpose score reflects how clearly you define
              your direction, align daily work with long-term goals,
              review your progress, maintain discipline and understand
              what you want to achieve over the next five years.
            </Text>

          </View>

        </View>

        {/* Five Purpose Dimensions */}

        <View style={styles.growthDimensionList}>

          {purposeAnalysis.dimensions.map(
            (dimension) => (

              <View
                key={dimension.questionId}
                style={styles.growthDimensionRow}
              >

                <View style={styles.growthDimensionTop}>

                  <Text style={styles.growthDimensionName}>
                    {dimension.label}
                  </Text>

                  <Text style={styles.growthDimensionScore}>
                    {dimension.percentage}%
                  </Text>

                </View>

                <View style={styles.growthDimensionTrack}>

                  <View
                    style={[
                      styles.growthDimensionFill,
                      {
                        width: `${Math.max(
                          0,
                          Math.min(
                            100,
                            dimension.percentage
                          )
                        )}%`,
                      },
                    ]}
                  />

                </View>

                <Text style={styles.growthDimensionResponse}>
                  Response: {dimension.response}
                </Text>

              </View>

            )
          )}

        </View>

        {/* Strongest + Weakest */}

        <View style={styles.growthInsightGrid}>

          <View style={styles.growthInsightCard}>

            <Text style={styles.growthInsightLabel}>
              STRONGEST PURPOSE BEHAVIOR
            </Text>

            <Text style={styles.growthInsightTitle}>
              {purposeAnalysis.strongest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.growthInsightText}>
              {purposeAnalysis.strongest
                ? `${purposeAnalysis.strongest.response} — ${purposeAnalysis.strongest.percentage}%. Continue protecting this behavior as part of your long-term direction and purpose system.`
                : "No purpose response was available."}
            </Text>

          </View>

          <View style={styles.growthInsightCard}>

            <Text style={styles.growthInsightLabel}>
              PRIORITY OPPORTUNITY
            </Text>

            <Text style={styles.growthInsightTitle}>
              {purposeAnalysis.weakest?.label ??
                "Not available"}
            </Text>

            <Text style={styles.growthInsightText}>
              {purposeAnalysis.weakest
                ? `${purposeAnalysis.weakest.response} — ${purposeAnalysis.weakest.percentage}%. This is the purpose behavior with the greatest immediate opportunity for improvement.`
                : "No purpose response was available."}
            </Text>

          </View>

        </View>

        {/* Action */}

        <View style={styles.growthActionBox}>

          <Text style={styles.growthActionLabel}>
            90-DAY PURPOSE PRIORITY
          </Text>

          <Text style={styles.growthActionText}>
            Focus first on improving your lowest-scoring purpose
            behavior. Convert your long-term direction into a
            measurable weekly practice, review your goals regularly,
            and deliberately align your daily actions with the future
            you want to create. Protect your strongest purpose behavior
            while building greater consistency across all five areas.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>

      {/* =========================================
    PAGE 10 — FREEDOM ARCHETYPE
    ========================================= */}

<Page size="A4" style={styles.page}>

  {/* Header */}

  <View style={styles.header}>

    <Text style={styles.brand}>
      THE HIRANYAKH FRAMEWORK™
    </Text>

    <Text style={styles.subtitle}>
      Freedom Score™ Executive Report
    </Text>

  </View>

  {/* Page Introduction */}

  <View style={styles.growthHeader}>

    <Text style={styles.growthEyebrow}>
      FREEDOM IDENTITY INTELLIGENCE
    </Text>

    <Text style={styles.growthTitle}>
      Your Freedom Archetype
    </Text>

    <Text style={styles.growthSubtitle}>
      Your archetype represents the pattern created by your
      overall Freedom Score and the balance across the five
      pillars of Health, Wealth, Growth, Leadership and Purpose.
    </Text>

  </View>

  {/* Archetype Hero */}

  <View style={styles.archetypeBox}>

    <Text style={styles.growthEyebrow}>
      YOUR ARCHETYPE
    </Text>

    <Text style={styles.growthTitle}>
      {freedomArchetype.title}
    </Text>

    <Text style={styles.growthSubtitle}>
      {freedomArchetype.description}
    </Text>

  </View>

  {/* Strengths */}

  <View style={styles.growthInsightGrid}>

    <View style={styles.growthInsightCard}>

      <Text style={styles.growthInsightLabel}>
        YOUR KEY STRENGTHS
      </Text>

      {freedomArchetype.strengths.map(
        (strength, index) => (
          <Text
            key={`strength-${index}`}
            style={styles.growthInsightText}
          >
            • {strength}
          </Text>
        )
      )}

    </View>

    {/* Watch Outs */}

    <View style={styles.growthInsightCard}>

      <Text style={styles.growthInsightLabel}>
        WATCH OUT FOR
      </Text>

      {freedomArchetype.watchOut.map(
        (item, index) => (
          <Text
            key={`watch-${index}`}
            style={styles.growthInsightText}
          >
            • {item}
          </Text>
        )
      )}

    </View>

  </View>

  {/* Strategic Meaning */}

  <View style={styles.growthActionBox}>

    <Text style={styles.growthActionLabel}>
      WHAT THIS MEANS FOR YOUR FREEDOM JOURNEY
    </Text>

    <Text style={styles.growthActionText}>
      {freedomArchetype.description}
    </Text>

  </View>

  {/* Next Level */}

  <View style={styles.growthScoreBox}>

    <View>

      <Text style={styles.growthScoreSmall}>
        YOUR NEXT LEVEL
      </Text>

      <Text style={styles.growthScoreRightTitle}>
        {freedomArchetype.nextLevel}
      </Text>

    </View>

    <View style={styles.growthScoreRight}>

      <Text style={styles.growthScoreRightTitle}>
        Freedom Score
      </Text>

      <Text style={styles.growthScoreRightText}>
        {freedomScore}/100 · {freedomLevel}
      </Text>

    </View>

  </View>

  {/* Footer */}

  <View style={styles.footer}>

    <Text style={styles.footerText}>
      © 2026 Freedom Score™
    </Text>

    <Text style={styles.footerText}>
      Personal Freedom Assessment
    </Text>

  </View>

</Page>

      {/* =========================================
          PAGE 11 — PERSONAL SWOT ANALYSIS
          ========================================= */}

      <Page size="A4" style={styles.page}>

        {/* Header */}

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Page Introduction */}

        <View style={styles.growthHeader}>

          <Text style={styles.growthEyebrow}>
            PERSONAL SWOT INTELLIGENCE
          </Text>

          <Text style={styles.growthTitle}>
            Personal SWOT Analysis
          </Text>

          <Text style={styles.growthSubtitle}>
            A strategic view of the strengths, weaknesses,
            opportunities and risks revealed by your Freedom
            Score assessment.
          </Text>

        </View>

        {/* =========================================
            SWOT GRID
            ========================================= */}

        <View style={styles.swotGrid}>

          {/* STRENGTHS */}

          <View style={styles.swotCard}>

            <Text style={styles.swotLabel}>
              STRENGTHS
            </Text>

            <Text style={styles.swotTitle}>
              {strongestPillar?.label ?? "Not available"}
            </Text>

            <Text style={styles.swotScore}>
              {strongestPillar?.score ?? 0}/100
            </Text>

            <Text style={styles.swotText}>
              Your strongest freedom pillar currently provides
              the most stable foundation in your overall profile.
            </Text>

            {strongestDimension && (
              <Text style={styles.swotDetail}>
                Strongest behavior: {strongestDimension.label}
                {" — "}
                {strongestDimension.percentage}%.
              </Text>
            )}

          </View>

          {/* WEAKNESSES */}

          <View style={styles.swotCard}>

            <Text style={styles.swotLabel}>
              WEAKNESSES
            </Text>

            <Text style={styles.swotTitle}>
              {weakestPillar?.label ?? "Not available"}
            </Text>

            <Text style={styles.swotScore}>
              {weakestPillar?.score ?? 0}/100
            </Text>

            <Text style={styles.swotText}>
              This is currently the greatest structural
              limitation in your Freedom Score profile.
            </Text>

            {weakestDimension && (
              <Text style={styles.swotDetail}>
                Priority behavior: {weakestDimension.label}
                {" — "}
                {weakestDimension.percentage}%.
              </Text>
            )}

          </View>

          {/* OPPORTUNITIES */}

          <View style={styles.swotCard}>

            <Text style={styles.swotLabel}>
              OPPORTUNITIES
            </Text>

            <Text style={styles.swotTitle}>
              Strengthen Your Lowest Behaviors
            </Text>

            <Text style={styles.swotText}>
              Improving your weakest behavioral dimension can
              create disproportionate gains because it addresses
              the area currently limiting your overall balance.
            </Text>

            {weakestDimension && (
              <Text style={styles.swotDetail}>
                Highest-leverage opportunity:{" "}
                {weakestDimension.label}
                {" — "}
                {weakestDimension.percentage}%.
              </Text>
            )}

          </View>

          {/* THREATS */}

          <View style={styles.swotCard}>

            <Text style={styles.swotLabel}>
              THREATS
            </Text>

            <Text style={styles.swotTitle}>
              Pillar Imbalance
            </Text>

            <Text style={styles.swotScore}>
              {scoreSpread} point spread
            </Text>

            <Text style={styles.swotText}>
              A persistent gap between your strongest and weakest
              pillars can create an uneven foundation and slow
              progress toward greater freedom.
            </Text>

            <Text style={styles.swotDetail}>
              Current profile:{" "}
              {balanced
                ? "Relatively balanced"
                : "Requires greater balance"}.
            </Text>

          </View>

        </View>

        {/* =========================================
            STRATEGIC INTERPRETATION
            ========================================= */}

        <View style={styles.growthActionBox}>

          <Text style={styles.growthActionLabel}>
            STRATEGIC SWOT INTERPRETATION
          </Text>

          <Text style={styles.growthActionText}>
            Your current profile should be approached by
            protecting your strongest pillar while deliberately
            improving the weakest. The objective is not to make
            every area identical, but to eliminate the gaps that
            can prevent one strong area from translating into
            broader personal freedom.
          </Text>

          <Text style={styles.growthActionText}>
            Your immediate priority should be the lowest-scoring
            behavioral dimension identified above. Turn that
            weakness into a measurable weekly practice and use
            your strongest pillar as the foundation from which
            to build momentum.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>

{/* =========================================
    PAGE 12 — 90-DAY FREEDOM ROADMAP
    ========================================= */}

<Page size="A4" style={styles.page}>

  {/* Header */}

  <View style={styles.header}>

    <Text style={styles.brand}>
      THE HIRANYAKH FRAMEWORK™
    </Text>

    <Text style={styles.subtitle}>
      Freedom Score™ Executive Report
    </Text>

  </View>

  {/* Introduction */}

  <View style={styles.growthHeader}>

    <Text style={styles.growthEyebrow}>
      IMPLEMENTATION INTELLIGENCE
    </Text>

    <Text style={styles.growthTitle}>
      Your 90-Day Freedom Roadmap
    </Text>

    <Text style={styles.growthSubtitle}>
      A practical implementation framework designed to
      convert your Freedom Score insights into consistent
      action over the next 90 days.
    </Text>

  </View>

  {/* Executive 90-Day Direction */}

  <View style={styles.growthActionBox}>

    <Text style={styles.growthActionLabel}>
      YOUR PRIMARY 90-DAY DIRECTION
    </Text>

    <Text style={styles.growthActionText}>
      {executiveInsight.next90Days}
    </Text>

  </View>

  {/* Roadmap */}

  <View style={styles.roadmapGrid}>

    {/* DAYS 1–30 */}

    <View style={styles.roadmapCard} wrap={false}>

      <View style={styles.roadmapCardHeader}>

        <Text style={styles.roadmapPhase}>
          PHASE 1 — FOUNDATION
        </Text>

        <Text style={styles.roadmapDays}>
          DAYS 1–30
        </Text>

      </View>

      <Text style={styles.roadmapTitle}>
        Establish Consistency
      </Text>

      <Text style={styles.roadmapAction}>
        Identify the highest-priority behavior in your
        current assessment and establish one repeatable
        habit around it. Focus on consistency rather than
        trying to change everything at once.
      </Text>

      {weakestPillar && (
        <Text style={styles.roadmapPillar}>
          Primary pillar: {weakestPillar.label} —{" "}
          {weakestPillar.score}/100
        </Text>
      )}

      <Text style={styles.roadmapPriority}>
        PRIORITY: BUILD THE BASELINE
      </Text>

    </View>

    {/* DAYS 31–60 */}

    <View style={styles.roadmapCard}>

      <View style={styles.roadmapCardHeader}>

        <Text style={styles.roadmapPhase}>
          PHASE 2 — MOMENTUM
        </Text>

        <Text style={styles.roadmapDays}>
          DAYS 31–60
        </Text>

      </View>

      <Text style={styles.roadmapTitle}>
        Strengthen the System
      </Text>

      <Text style={styles.roadmapAction}>
        Build on the habit established during the first
        30 days. Increase consistency, measure progress
        weekly and use your strongest pillar as a source
        of confidence and leverage.
      </Text>

      {strongestPillar && (
        <Text style={styles.roadmapPillar}>
          Strength to leverage: {strongestPillar.label} —{" "}
          {strongestPillar.score}/100
        </Text>
      )}

      <Text style={styles.roadmapPriority}>
        PRIORITY: CREATE MOMENTUM
      </Text>

    </View>

    {/* DAYS 61–90 */}

    <View style={styles.roadmapCard}>

      <View style={styles.roadmapCardHeader}>

        <Text style={styles.roadmapPhase}>
          PHASE 3 — EXPANSION
        </Text>

        <Text style={styles.roadmapDays}>
          DAYS 61–90
        </Text>

      </View>

      <Text style={styles.roadmapTitle}>
        Expand Your Freedom System
      </Text>

      <Text style={styles.roadmapAction}>
        Review the progress created during the first
        60 days. Strengthen the weakest area further,
        protect your strongest behaviors and begin
        connecting improvements across multiple pillars.
      </Text>

      <Text style={styles.roadmapPillar}>
        Objective: reduce the gap between your strongest
        and weakest pillars.
      </Text>

      <Text style={styles.roadmapPriority}>
        PRIORITY: CREATE SUSTAINABLE BALANCE
      </Text>

    </View>

  </View>

  {/* Existing Recommendation */}

  <View style={styles.growthActionBox}>

    <Text style={styles.growthActionLabel}>
      EXECUTIVE RECOMMENDATION
    </Text>

    <Text style={styles.growthActionText}>
      {executiveInsight.recommendation}
    </Text>

  </View>

  {/* Footer */}

  <View style={styles.footer}>

    <Text style={styles.footerText}>
      © 2026 Freedom Score™
    </Text>

    <Text style={styles.footerText}>
      Personal Freedom Assessment
    </Text>

  </View>

</Page>

      {/* =========================================
          PAGE 13 — 90-DAY ACTION BLUEPRINT
          ========================================= */}

      <Page size="A4" style={styles.page}>

        {/* Header */}

        <View style={styles.header}>

          <Text style={styles.brand}>
            THE HIRANYAKH FRAMEWORK™
          </Text>

          <Text style={styles.subtitle}>
            Freedom Score™ Executive Report
          </Text>

        </View>

        {/* Introduction */}

        <View style={styles.growthHeader}>

          <Text style={styles.growthEyebrow}>
            ACTION INTELLIGENCE
          </Text>

          <Text style={styles.growthTitle}>
            Your 90-Day Action Blueprint
          </Text>

          <Text style={styles.growthSubtitle}>
            Your personalized action plan converts the five-pillar
            Freedom Score assessment into practical behaviors,
            priorities and measurable next steps.
          </Text>

        </View>

        {/* Blueprint Cards */}

        <View style={styles.blueprintGrid}>

                    {blueprint.map((item) => {
            const pillarData = pillars.find(
              (pillar) => pillar.pillar === item.pillar
            );

            return (
              <View
                key={item.pillar}
                style={styles.blueprintCard}
                wrap={false}
              >

                {/* Card Header */}

                <View style={styles.blueprintCardHeader}>

                  <Text style={styles.blueprintPillar}>
                    {pillarData?.label ?? item.pillar}
                  </Text>

                  <Text style={styles.blueprintScore}>
                    {pillarData?.score ?? 0}/100
                  </Text>

                </View>

                {/* Priority */}

                <Text style={styles.blueprintPriority}>
                  {item.priority.toUpperCase()} PRIORITY
                </Text>

                {/* Focus Behavior */}

                <Text
                  style={{
                    fontSize: 7,
                    fontWeight: "bold",
                    color: "#64748B",
                    marginTop: 4,
                  }}
                >
                  FOCUS BEHAVIOR
                </Text>

                <Text
                  style={{
                    fontSize: 8.5,
                    fontWeight: "bold",
                    color: "#0F172A",
                    marginTop: 2,
                  }}
                >
                  {item.focusBehavior}
                </Text>

                {/* Behavioral Score */}

                <Text style={styles.blueprintScore}>
                  Behavioral score: {item.focusPercentage}%
                </Text>

                {/* Action Plan */}

                <View style={styles.blueprintActions}>

                  {item.actions.map(
                    (action, index) => (
                      <Text
                        key={`${item.pillar}-${index}`}
                        style={styles.blueprintAction}
                      >
                        <Text style={styles.blueprintBullet}>
                          •{" "}
                        </Text>
                        {action}
                      </Text>
                    )
                  )}

                </View>

              </View>
            );
          })}

        </View>

        {/* Implementation Principle */}

        <View style={styles.blueprintPrinciple}>

          <Text style={styles.blueprintPrincipleLabel}>
            IMPLEMENTATION PRINCIPLE
          </Text>

          <Text style={styles.blueprintPrincipleText}>
            Start with your highest-priority pillar. Build consistency
            before adding more commitments. Track your actions weekly
            and reassess your Freedom Score after 90 days.
          </Text>

        </View>

        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            © 2026 Freedom Score™
          </Text>

          <Text style={styles.footerText}>
            Personal Freedom Assessment
          </Text>

        </View>

      </Page>
        
      {/* =========================================
          PAGE 14 — FREEDOM CERTIFICATE
          ========================================= */}

      <Page
        size="A4"
        style={{
          ...styles.page,
          padding: 28,
          backgroundColor: "#F8FAFC",
        }}
      >

        {/* Certificate Outer Frame */}

        <View
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "#D97706",
            padding: 18,
            justifyContent: "space-between",
          }}
        >

          {/* Header */}

          <View
            style={{
              alignItems: "center",
              marginTop: 12,
            }}
          >

            <Text
              style={{
                fontSize: 9,
                fontWeight: "bold",
                letterSpacing: 2,
                color: "#B45309",
              }}
            >
              THE HIRANYAKH FRAMEWORK™
            </Text>

            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#0F172A",
                marginTop: 14,
                textAlign: "center",
              }}
            >
              FREEDOM SCORE™
            </Text>

            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                letterSpacing: 2,
                color: "#475569",
                marginTop: 6,
                textAlign: "center",
              }}
            >
              CERTIFICATE OF PERSONAL FREEDOM ASSESSMENT
            </Text>

          </View>


          {/* Recognition */}

          <View
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
          >

            <Text
              style={{
                fontSize: 9,
                color: "#64748B",
                textAlign: "center",
              }}
            >
              THIS CERTIFICATE IS PRESENTED TO
            </Text>

            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#0F172A",
                marginTop: 12,
                textAlign: "center",
              }}
            >
              {fullName}
            </Text>

            <View
              style={{
                width: 220,
                borderBottomWidth: 1,
                borderBottomColor: "#CBD5E1",
                marginTop: 8,
              }}
            />

            <Text
              style={{
                fontSize: 10,
                color: "#475569",
                lineHeight: 1.5,
                textAlign: "center",
                marginTop: 18,
                maxWidth: 420,
              }}
            >
              This certificate recognizes the completion of the Freedom
              Score™ Personal Freedom Assessment and the commitment to
              building greater freedom across Health, Wealth, Growth & AI,
              Leadership and Purpose.
            </Text>

          </View>


          {/* Score */}

          <View
            style={{
              alignItems: "center",
              marginTop: 18,
            }}
          >

            <Text
              style={{
                fontSize: 8,
                fontWeight: "bold",
                letterSpacing: 1.5,
                color: "#64748B",
              }}
            >
              FREEDOM SCORE
            </Text>

            <Text
              style={{
                fontSize: 38,
                fontWeight: "bold",
                color: "#D97706",
                marginTop: 4,
              }}
            >
              {freedomScore}/100
            </Text>

            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                color: "#0F172A",
                marginTop: 5,
              }}
            >
              {freedomLevel}
            </Text>

          </View>


          {/* Profile Information */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 12,
              marginTop: 18,
            }}
          >

            <View
              style={{
                width: 145,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#E2E8F0",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 6.5,
                  fontWeight: "bold",
                  color: "#64748B",
                  letterSpacing: 0.7,
                }}
              >
                FREEDOM ARCHETYPE™
              </Text>

              <Text
                style={{
                  fontSize: 9,
                  fontWeight: "bold",
                  color: "#0F172A",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                {freedomArchetype.title}
              </Text>
            </View>


            <View
              style={{
                width: 145,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#E2E8F0",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 6.5,
                  fontWeight: "bold",
                  color: "#64748B",
                  letterSpacing: 0.7,
                }}
              >
                ASSESSMENT ID
              </Text>

              <Text
                style={{
                  fontSize: 8,
                  fontWeight: "bold",
                  color: "#0F172A",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                {assessmentId}
              </Text>
            </View>

          </View>


          {/* Bottom Section */}

          <View
            style={{
              alignItems: "center",
              marginBottom: 8,
            }}
          >

            <Text
              style={{
                fontSize: 8,
                color: "#64748B",
              }}
            >
              ASSESSMENT DATE
            </Text>

            <Text
              style={{
                fontSize: 9,
                fontWeight: "bold",
                color: "#0F172A",
                marginTop: 3,
              }}
            >
              {assessmentDate}
            </Text>


            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 80,
                marginTop: 28,
              }}
            >

              <View
                style={{
                  width: 120,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 110,
                    borderBottomWidth: 1,
                    borderBottomColor: "#94A3B8",
                    marginBottom: 5,
                  }}
                />

                <Text
                  style={{
                    fontSize: 7,
                    color: "#64748B",
                  }}
                >
                  ASSESSMENT AUTHORITY
                </Text>
              </View>


              <View
                style={{
                  width: 120,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 110,
                    borderBottomWidth: 1,
                    borderBottomColor: "#94A3B8",
                    marginBottom: 5,
                  }}
                />

                <Text
                  style={{
                    fontSize: 7,
                    color: "#64748B",
                  }}
                >
                  DATE OF ISSUE
                </Text>
              </View>

            </View>


            <Text
              style={{
                fontSize: 7,
                color: "#94A3B8",
                marginTop: 20,
              }}
            >
              © 2026 Freedom Score™ • Personal Freedom Assessment
            </Text>

          </View>

        </View>

      </Page>

    
   </Document>
  );
}
    
	

   