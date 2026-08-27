import { NextResponse } from "next/server";
import { generateAssessmentId } from "@/lib/generateAssessmentId";
import { supabaseInsert } from "@/lib/supabaseAdmin";
import { PersonalInfo } from "@/types/assessment";

function getUtmValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const info = body?.personalInfo as PersonalInfo | undefined;
    const attribution = body?.attribution ?? {};

    if (!info?.fullName?.trim() || !info?.email?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const assessmentId = generateAssessmentId();

    await supabaseInsert("registrations", {
      assessment_id: assessmentId,
      event_type: "freedom_score",
      event_name: "Freedom Score™ Assessment",
      name: info.fullName.trim(),
      email: info.email.trim().toLowerCase(),
      phone: info.phone?.trim() || null,
      age: info.age === "" ? null : Number(info.age),
      gender: info.gender || null,
      profession: info.profession?.trim() || null,
      city: info.city?.trim() || null,
      state: info.state?.trim() || null,
      country: info.country?.trim() || null,
      goal: info.goal || null,
      payment_required: false,
      payment_status: "not_required",
      status: "registered",
      utm_source: getUtmValue(attribution.utm_source),
      utm_medium: getUtmValue(attribution.utm_medium),
      utm_campaign: getUtmValue(attribution.utm_campaign),
      utm_content: getUtmValue(attribution.utm_content),
      utm_term: getUtmValue(attribution.utm_term),
    });

    return NextResponse.json({ success: true, assessmentId });
  } catch (error) {
    console.error("Freedom Score registration failed:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to save registration.",
      },
      { status: 500 }
    );
  }
}
