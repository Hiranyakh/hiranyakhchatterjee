import { NextResponse } from "next/server";
import { supabaseUpdate } from "@/lib/supabaseAdmin";
import { Answer, FreedomResult } from "@/types/freedom";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const assessmentId = body?.assessmentId as string | undefined;
    const answers = body?.answers as Answer[] | undefined;
    const result = body?.result as FreedomResult | undefined;

    if (!assessmentId || !Array.isArray(answers) || !result) {
      return NextResponse.json(
        { success: false, error: "Incomplete assessment data." },
        { status: 400 }
      );
    }

    await supabaseUpdate(
      "registrations",
      { assessment_id: assessmentId },
      {
        answers,
        freedom_result: result,
        status: "completed",
        completed_at: new Date().toISOString(),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Freedom Score completion save failed:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to save assessment results.",
      },
      { status: 500 }
    );
  }
}
