import { NextResponse } from "next/server";
import crypto from "crypto";

const EVENT_TYPE_IDS: Record<string, number> = {
  health: 6751336,
  wealth: 6751406,
  purpose: 6751538,
  growth: 6751467,
  leadership: 6751502,
};

function verifyBookingToken(
  token: string
) {
  try {
    const parts = token.split(".");

    if (parts.length !== 2) {
      return null;
    }

    const [
      encodedPayload,
      receivedSignature,
    ] = parts;

    const secret =
      process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      return null;
    }

    const expectedSignature =
      crypto
        .createHmac("sha256", secret)
        .update(encodedPayload)
        .digest("base64url");

    const expected =
      Buffer.from(
        expectedSignature,
        "utf8"
      );

    const received =
      Buffer.from(
        receivedSignature,
        "utf8"
      );

    if (
      expected.length !==
        received.length ||
      !crypto.timingSafeEqual(
        expected,
        received
      )
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(
        encodedPayload,
        "base64url"
      ).toString("utf8")
    );

    if (
      !payload.expiresAt ||
      Date.now() > payload.expiresAt
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function POST(
  request: Request
) {
  try {
    const apiKey =
      process.env.CAL_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "CAL_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      bookingToken,
      eventTypeId,
      start,
      name,
      email,
      timeZone,
    } = body;

    if (
      !bookingToken ||
      !eventTypeId ||
      !start ||
      !name ||
      !email
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Booking token, event type, start time, name and email are required.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // VERIFY PAYMENT AUTHORIZATION TOKEN
    // -----------------------------------------

    const tokenPayload =
      verifyBookingToken(
        bookingToken
      );

    if (!tokenPayload) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid or expired booking authorization.",
        },
        { status: 403 }
      );
    }

    // -----------------------------------------
    // VERIFY EVENT TYPE
    // -----------------------------------------

    const expectedEventTypeId =
      EVENT_TYPE_IDS[
        tokenPayload.consultationType
      ];

    if (
      !expectedEventTypeId ||
      Number(eventTypeId) !==
        expectedEventTypeId
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid consultation event.",
        },
        { status: 403 }
      );
    }

    // -----------------------------------------
    // CREATE CAL.COM BOOKING
    // -----------------------------------------

    const response = await fetch(
      "https://api.cal.com/v2/bookings",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "cal-api-version":
            "2024-08-13",
        },

        body: JSON.stringify({
          start,

          eventTypeId:
            expectedEventTypeId,

          attendee: {
            name,
            email,
            timeZone:
              timeZone ||
              "Asia/Kolkata",
            language: "en",
          },

          metadata: {
            source:
              "hiranyakhchatterjee.com",
            consultationType:
              tokenPayload.consultationType,
            razorpayPaymentId:
              tokenPayload.paymentId,
            razorpayOrderId:
              tokenPayload.orderId,
          },
        }),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      console.error(
        "Cal.com booking creation failed:",
        data
      );

      return NextResponse.json(
        {
          success: false,
          error:
            data?.message ||
            data?.error ||
            "Unable to create booking.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      booking: data?.data,
    });
  } catch (error) {
    console.error(
      "Cal.com booking error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to create booking.",
      },
      { status: 500 }
    );
  }
}