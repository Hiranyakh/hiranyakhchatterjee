import { NextResponse } from "next/server";
import crypto from "crypto";

import {
  consultationConfig,
  ConsultationType,
} from "@/lib/consultationConfig";

const validConsultationTypes: ConsultationType[] = [
  "health",
  "wealth",
  "growth",
  "leadership",
  "purpose",
];

function createBookingToken(
  paymentId: string,
  orderId: string,
  consultationType: ConsultationType
) {
  const expiresAt =
    Date.now() + 30 * 60 * 1000;

  const payload = JSON.stringify({
    paymentId,
    orderId,
    consultationType,
    expiresAt,
  });

  const encodedPayload =
    Buffer.from(payload).toString("base64url");

  const secret =
    process.env.RAZORPAY_KEY_SECRET!;

  const signature =
    crypto
      .createHmac("sha256", secret)
      .update(encodedPayload)
      .digest("base64url");

  return `${encodedPayload}.${signature}`;
}

export async function POST(request: Request) {
  try {
    const keyId =
      process.env.RAZORPAY_KEY_ID;

    const keySecret =
      process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Razorpay credentials are not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      consultationType,
    } = body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !consultationType
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing payment verification details.",
        },
        { status: 400 }
      );
    }

    if (
      !validConsultationTypes.includes(
        consultationType as ConsultationType
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid consultation type.",
        },
        { status: 400 }
      );
    }

    const consultation =
      consultationConfig[
        consultationType as ConsultationType
      ];

    // -----------------------------------------
    // VERIFY RAZORPAY SIGNATURE
    // -----------------------------------------

    const generatedSignature =
      crypto
        .createHmac("sha256", keySecret)
        .update(
          `${razorpay_order_id}|${razorpay_payment_id}`
        )
        .digest("hex");

    const expected =
      Buffer.from(
        generatedSignature,
        "utf8"
      );

    const received =
      Buffer.from(
        razorpay_signature,
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
      return NextResponse.json(
        {
          success: false,
          error:
            "Payment signature verification failed.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // FETCH PAYMENT FROM RAZORPAY
    // -----------------------------------------

    const auth = Buffer.from(
      `${keyId}:${keySecret}`
    ).toString("base64");

    const paymentResponse =
      await fetch(
        `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${auth}`,
          },
          cache: "no-store",
        }
      );

    const paymentData =
      await paymentResponse.json();

    if (!paymentResponse.ok) {
      console.error(
        "Unable to fetch Razorpay payment:",
        paymentData
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify payment status.",
        },
        { status: 500 }
      );
    }

    // -----------------------------------------
    // VERIFY ORDER ID
    // -----------------------------------------

    if (
      paymentData.order_id !==
      razorpay_order_id
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Payment does not match the order.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // VERIFY AMOUNT
    // -----------------------------------------

    if (
      paymentData.amount !==
      consultation.amount
    ) {
      console.error(
        "Payment amount mismatch:",
        {
          expected:
            consultation.amount,
          received:
            paymentData.amount,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Payment amount does not match the consultation fee.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // VERIFY CURRENCY
    // -----------------------------------------

    if (
      paymentData.currency !==
      "INR"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid payment currency.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // VERIFY CAPTURED STATUS
    // -----------------------------------------

    if (
      paymentData.status !==
      "captured"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Payment has not been captured yet.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // CREATE BOOKING AUTHORIZATION TOKEN
    // -----------------------------------------

    const bookingToken =
      createBookingToken(
        razorpay_payment_id,
        razorpay_order_id,
        consultationType as ConsultationType
      );

    // -----------------------------------------
    // PAYMENT VERIFIED
    // -----------------------------------------

    return NextResponse.json({
      success: true,

      message:
        "Consultation payment verified successfully.",

      paymentId:
        razorpay_payment_id,

      orderId:
        razorpay_order_id,

      consultationType,

      consultationName:
        consultation.name,

      amount:
        consultation.price,

      currency: "INR",

      paymentStatus:
        paymentData.status,

      bookingToken,
    });
  } catch (error) {
    console.error(
      "Consultation payment verification error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to verify consultation payment.",
      },
      { status: 500 }
    );
  }
}