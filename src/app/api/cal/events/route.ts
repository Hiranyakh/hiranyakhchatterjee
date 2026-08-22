import { NextResponse } from "next/server";

const consultationSlugs = [
  "health-wellness-consultation",
  "accelerate-your-growth-and-protect-your-assets",
  "career-ai-consultation",
  "drive-high-performing-teams-and-scale-your-organizational-impact",
  "gain-absolute-clarity-on-your-next-chapter",
];

export async function GET() {
  try {
    const apiKey = process.env.CAL_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "CAL_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.cal.com/v2/event-types",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "cal-api-version": "2024-06-14",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            data?.message ||
            "Unable to retrieve Cal.com event types.",
        },
        { status: response.status }
      );
    }

    const eventTypes = data?.data ?? [];

    const consultations = eventTypes
      .filter((event: { slug?: string }) =>
        consultationSlugs.includes(event.slug ?? "")
      )
      .map(
        (event: {
          id: number;
          title?: string;
          slug?: string;
        }) => ({
          id: event.id,
          title: event.title,
          slug: event.slug,
        })
      );

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error("Cal.com event lookup failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to connect to Cal.com.",
      },
      { status: 500 }
    );
  }
}