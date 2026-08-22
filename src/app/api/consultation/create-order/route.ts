import { NextResponse } from "next/server";
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

export async function POST(request: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay credentials are missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Payment system is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const consultationType =
      body?.consultationType as ConsultationType;

    if (
      !consultationType ||
      !validConsultationTypes.includes(
        consultationType
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid consultation type.",
        },
        { status: 400 }
      );
    }

    const consultation =
      consultationConfig[consultationType];

    const auth = Buffer.from(
      `${keyId}:${keySecret}`
    ).toString("base64");

    const response = await fetch(
      "https://api.razorpay.com/v1/orders",
      {
        method: "POST",

        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          amount: consultation.amount,
          currency: "INR",
          receipt: `consult_${consultationType}_${Date.now()}`,

          notes: {
            product: consultation.name,
            consultationType,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "Consultation Razorpay order creation failed:",
        data
      );

      return NextResponse.json(
        {
          success: false,
          error:
            data?.error?.description ||
            "Unable to create payment order.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,

      orderId: data.id,

      amount: data.amount,

      currency: data.currency,

      consultationType,

      consultationName: consultation.name,

      price: consultation.price,
    });
  } catch (error) {
    console.error(
      "Consultation order creation error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to create consultation payment.",
      },
      { status: 500 }
    );
  }
}