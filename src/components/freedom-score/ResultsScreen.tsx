"use client";
import { useState } from "react";
import { FreedomResult } from "@/types/freedom";
import { PersonalInfo } from "@/types/assessment";
import Script from "next/script";
import { buildFreedomReport } from "@/lib/engine/reportEngine";

import RadarChart from "./RadarChart";
import ReportHeader from "./ReportHeader";
import StrengthCard from "./StrengthCard";
import OpportunityCard from "./OpportunityCard";
import PillarCard from "./PillarCard";
import BlueprintCard from "./BlueprintCard";
import ExecutiveSummary from "./ExecutiveSummary";

import DownloadFreedomPDF from "./pdf/DownloadFreedomPDF";
import ConsultationRecommendationCard from "./ConsultationRecommendationCard";

interface Props {
  result: FreedomResult;
  assessmentId: string;
  personalInfo: PersonalInfo;
}

export default function ResultsScreen({
  result,
  assessmentId,
  personalInfo,
}: Props) {

  const [paymentLoading, setPaymentLoading] =
    useState(false);

  const [paymentVerified, setPaymentVerified] =
    useState(false);

  const [paymentError, setPaymentError] =
    useState("");

  const report = buildFreedomReport(result);

  const assessmentDate =
    new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  async function handlePayment() {
    try {
      setPaymentLoading(true);
      setPaymentError("");

      const orderResponse = await fetch(
        "/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(
          orderData.error ||
            "Unable to create payment order."
        );
      }

      const razorpayKey =
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!razorpayKey) {
        throw new Error(
          "Razorpay public key is not configured."
        );
      }

      const Razorpay =
        (
          window as typeof window & {
            Razorpay?: new (options: any) => {
              open: () => void;
            };
          }
        ).Razorpay;

      if (!Razorpay) {
        throw new Error(
          "Razorpay Checkout could not be loaded."
        );
      }

      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "The Hiranyakh Framework™",
        description:
          "Freedom Score™ Premium Executive Report",
        order_id: orderData.orderId,

        prefill: {
          name: personalInfo.fullName,
          email: personalInfo.email,
        },

        theme: {
          color: "#D97706",
        },

        handler: async function (
          response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }
        ) {
          try {
            const verifyResponse =
              await fetch(
                "/api/payment/verify",
                {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json",
                  },
                  body: JSON.stringify({
                    razorpay_order_id:
                      response.razorpay_order_id,

                    razorpay_payment_id:
                      response.razorpay_payment_id,

                    razorpay_signature:
                      response.razorpay_signature,
                  }),
                }
              );

            const verifyData =
              await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(
                verifyData.error ||
                  "Payment verification failed."
              );
            }

            setPaymentVerified(true);
          } catch (error) {
            console.error(error);

            setPaymentError(
              error instanceof Error
                ? error.message
                : "Payment verification failed."
            );
          } finally {
            setPaymentLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setPaymentLoading(false);
          },
        },
      };

      const checkout = new Razorpay(options);

      checkout.open();
    } catch (error) {
      console.error(error);

      setPaymentError(
        error instanceof Error
          ? error.message
          : "Unable to start payment."
      );

      setPaymentLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F6F1] via-white to-[#F8F6F1] px-6 py-16">

	      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <div className="mx-auto max-w-7xl space-y-12">

        {/* Executive Report Header */}
        <ReportHeader report={report} />

        {/* Strength & Opportunity */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          <StrengthCard
            strength={report.strongest}
            balanced={report.balanced}
            overallScore={report.overallScore}
          />

          <OpportunityCard
            opportunity={report.weakest}
            balanced={report.balanced}
            overallScore={report.overallScore}
          />

        </div>

        {/* Five Pillars */}
        <section>

          <h2 className="mb-2 text-4xl font-bold text-slate-900">
            Your Freedom Pillars
          </h2>

          <p className="mb-8 text-slate-500">
            Your performance across the five core pillars of freedom.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {report.pillars.map((pillar) => (
              <PillarCard
                key={pillar.pillar}
                pillar={pillar.pillar}
                score={pillar.score}
              />
            ))}

          </div>

        </section>

        {/* Blueprint */}
        <section>

          <h2 className="mb-2 text-4xl font-bold text-slate-900">
            Your Freedom Blueprint
          </h2>

          <p className="mb-8 text-slate-500">
            Personalized action steps to improve every pillar.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {report.blueprint.map((item) => (
              <BlueprintCard
                key={item.pillar}
                blueprint={item}
              />
            ))}

          </div>

        </section>

        {/* Executive Summary */}
        <ExecutiveSummary
          insight={report.executiveSummary}
        />

	{/* Recommended Consultation */}
{report.recommendations?.[0] && (
  <ConsultationRecommendationCard
    recommendation={report.recommendations[0]}
  />
)}

        {/* Freedom Radar */}
        <RadarChart report={report} />

              {/* PREMIUM REPORT */}
        <section className="no-print rounded-3xl border border-amber-200 bg-white p-8 shadow-xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
                Freedom Score™ Premium Report
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Unlock Your Complete Freedom Report
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                Get your complete personalized executive report
                including your Freedom Score, five-pillar analysis,
                Freedom Archetype™, SWOT analysis, 90-day action
                blueprint, weekly tracker and Freedom Certificate.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                  14-Page Executive Report
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  Personalized Analysis
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  90-Day Blueprint
                </span>

              </div>

            </div>

            <div className="flex shrink-0 flex-col items-center gap-4">

              {!paymentVerified ? (
                <>
                  <div className="text-center">

                    <p className="text-sm font-semibold text-slate-500">
                      One-time payment
                    </p>

                    <p className="text-4xl font-black text-slate-900">
                      ₹299
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={handlePayment}
                    disabled={paymentLoading}
                    className="rounded-2xl bg-amber-600 px-8 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-700 disabled:cursor-wait disabled:opacity-60"
                  >
                    {paymentLoading
                      ? "Opening Payment..."
                      : "Unlock My Report — ₹299"}
                  </button>

                  {paymentError && (
                    <p className="max-w-xs text-center text-sm font-semibold text-red-600">
                      {paymentError}
                    </p>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center gap-4">

                  <div className="rounded-2xl bg-green-50 px-6 py-4 text-center">
                    <p className="font-black text-green-700">
                      Payment Successful
                    </p>

                    <p className="mt-1 text-sm text-green-600">
                      Your premium report is unlocked.
                    </p>
                  </div>

                  <DownloadFreedomPDF
                    fullName={personalInfo.fullName}
                    assessmentId={assessmentId}
                    assessmentDate={assessmentDate}
                    freedomScore={report.overallScore}
                    freedomLevel={report.level.title}
                    freedomArchetype={
                      report.freedomArchetype
                    }
                    executiveInsight={
                      report.executiveSummary
                    }
                    pillars={report.pillars}
                    balanced={report.balanced}
                    scoreSpread={report.scoreSpread}
                    healthAnalysis={
                      report.healthAnalysis
                    }
                    wealthAnalysis={
                      report.wealthAnalysis
                    }
                    growthAnalysis={
                      report.growthAnalysis
                    }
                    leadershipAnalysis={
                      report.leadershipAnalysis
                    }
                    purposeAnalysis={
                      report.purposeAnalysis
                    }
                    blueprint={report.blueprint}
                  />

                </div>
              )}

            </div>

          </div>

        </section>

        

      </div>

    </div>
  );
}