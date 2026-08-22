import { NextResponse } from "next/server";

export async function GET(request: Request) {
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

    const { searchParams } = new URL(request.url);

    const eventTypeId = searchParams.get("eventTypeId");
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!eventTypeId || !start || !end) {
      return NextResponse.json(
        {
          success: false,
          error:
            "eventTypeId, start and end are required.",
        },
        { status: 400 }
      );
    }

    const url = new URL(
      "https://api.cal.com/v2/slots"
    );

    url.searchParams.set(
      "eventTypeId",
      eventTypeId
    );

    url.searchParams.set("start", start);
    url.searchParams.set("end", end);

    url.searchParams.set(
      "timeZone",
      "Asia/Kolkata"
    );

    url.searchParams.set(
      "format",
      "range"
    );

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-09-04",
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "Cal.com availability request failed:",
        data
      );

      return NextResponse.json(
        {
          success: false,
          error:
            data?.message ||
            data?.error ||
            "Unable to retrieve available slots.",
          calResponse: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "Cal.com availability error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to retrieve availability.",
      },
      { status: 500 }
    );
  }
}