import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const keySecret =
      process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json(
        {
          success: false,
          error: "Razorpay secret is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
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

    const generatedSignature =
      crypto
        .createHmac("sha256", keySecret)
        .update(
          `${razorpay_order_id}|${razorpay_payment_id}`
        )
        .digest("hex");

    const expected =
      Buffer.from(generatedSignature, "utf8");

    const received =
      Buffer.from(razorpay_signature, "utf8");

    if (
      expected.length !== received.length ||
      !crypto.timingSafeEqual(
        expected,
        received
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Payment verification failed.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error(
      "Razorpay payment verification failed:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to verify payment.",
      },
      { status: 500 }
    );
  }
}