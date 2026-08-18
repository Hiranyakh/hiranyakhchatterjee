import { NextResponse } from "next/server";

export async function POST() {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
  console.error("Razorpay environment check:", {
    keyIdPresent: Boolean(keyId),
    keySecretPresent: Boolean(keySecret),
    nodeEnv: process.env.NODE_ENV,
  });

  return NextResponse.json(
    {
      success: false,
      error: "Razorpay credentials are not configured.",
      debug: {
        keyIdPresent: Boolean(keyId),
        keySecretPresent: Boolean(keySecret),
      },
    },
    { status: 500 }
  );
}

    const amount = 29900; // ₹299 in paise

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
          amount,
          currency: "INR",
          receipt: `freedom_${Date.now()}`,
          notes: {
            product: "Freedom Score Premium Executive Report",
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Razorpay order creation failed:", data);

      return NextResponse.json(
        {
          success: false,
          error:
            data?.error?.description ||
            "Unable to create Razorpay order.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
    });
  } catch (error) {
    console.error(
      "Razorpay order creation error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to create payment order.",
      },
      { status: 500 }
    );
  }
}