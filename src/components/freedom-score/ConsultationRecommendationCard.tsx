"use client";

import { useEffect, useMemo, useState } from "react";
import { ConsultationRecommendation } from "@/lib/engine/recommendationEngine";

interface Props {
  recommendation: ConsultationRecommendation;
}

interface Slot {
  time?: string;
  start?: string;
  end?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const EVENT_TYPE_IDS: Record<string, number> = {
  health: 6751336,
  wealth: 6751406,
  purpose: 6751538,
  growth: 6751467,
  leadership: 6751502,
};

export default function ConsultationRecommendationCard({
  recommendation,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [bookingToken, setBookingToken] =
    useState("");

  const [bookingStep, setBookingStep] =
    useState<"payment" | "booking" | "confirmed">(
      "payment"
    );

  const [selectedDate, setSelectedDate] =
    useState("");

  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] =
    useState(false);

  const [selectedSlot, setSelectedSlot] =
    useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [bookingLoading, setBookingLoading] =
    useState(false);

  const [bookingError, setBookingError] =
    useState("");

  const price =
    recommendation.pillar === "health"
      ? 1500
      : 1000;

  const eventTypeId = useMemo(
    () =>
      EVENT_TYPE_IDS[
        recommendation.pillar
      ],
    [recommendation.pillar]
  );

  // -----------------------------------------
  // LOAD RAZORPAY
  // -----------------------------------------

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const existingScript =
        document.querySelector(
          'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
        );

      if (existingScript) {
        existingScript.addEventListener(
          "load",
          () => resolve(true)
        );

        existingScript.addEventListener(
          "error",
          () => resolve(false)
        );

        return;
      }

      const script =
        document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // -----------------------------------------
  // PAYMENT
  // -----------------------------------------

  const handlePayment = async () => {
    try {
      setLoading(true);
      setMessage("");

      const loaded =
        await loadRazorpay();

      if (!loaded) {
        throw new Error(
          "Unable to load payment system."
        );
      }

      const orderResponse =
        await fetch(
          "/api/consultation/create-order",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              consultationType:
                recommendation.pillar,
            }),
          }
        );

      const orderData =
        await orderResponse.json();

      if (
        !orderResponse.ok ||
        !orderData.success
      ) {
        throw new Error(
          orderData.error ||
            "Unable to create payment order."
        );
      }

      const razorpayKey =
        process.env
          .NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!razorpayKey) {
        throw new Error(
          "Payment configuration is missing."
        );
      }

      const options = {
        key: razorpayKey,

        amount:
          orderData.amount,

        currency:
          orderData.currency,

        name:
          "Hiranyakh's Wellness",

        description:
          orderData.consultationName,

        order_id:
          orderData.orderId,

        prefill: {
          name,
          email,
        },

        theme: {
          color: "#D97706",
        },

        handler: async (
          response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }
        ) => {
          try {
            setMessage(
              "Verifying your payment..."
            );

            const verifyResponse =
              await fetch(
                "/api/consultation/verify-payment",
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

                    consultationType:
                      recommendation.pillar,
                  }),
                }
              );

            const verifyData =
              await verifyResponse.json();

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              throw new Error(
                verifyData.error ||
                  "Payment verification failed."
              );
            }

            setBookingToken(
              verifyData.bookingToken
            );

            setBookingStep(
              "booking"
            );

            setMessage(
              "Payment successful. Please select your consultation date and time."
            );
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            setMessage(
              error instanceof Error
                ? error.message
                : "Payment verification failed."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay =
        new window.Razorpay(options);

      razorpay.on(
        "payment.failed",
        (response: any) => {
          console.error(
            "Razorpay payment failed:",
            response
          );

          setMessage(
            "Payment was not completed. Please try again."
          );

          setLoading(false);
        }
      );

      razorpay.open();
    } catch (error) {
      console.error(
        "Consultation payment error:",
        error
      );

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to start payment."
      );

      setLoading(false);
    }
  };

  // -----------------------------------------
  // LOAD AVAILABLE SLOTS
  // -----------------------------------------

  useEffect(() => {
    if (
      bookingStep !== "booking" ||
      !selectedDate ||
      !eventTypeId
    ) {
      return;
    }

    const loadSlots = async () => {
      try {
        setSlotsLoading(true);
        setSlots([]);
        setSelectedSlot("");
        setBookingError("");

        const start =
          `${selectedDate}T00:00:00+05:30`;

        const end =
          `${selectedDate}T23:59:59+05:30`;

        const response =
          await fetch(
            `/api/cal/slots?eventTypeId=${eventTypeId}&start=${encodeURIComponent(
              start
            )}&end=${encodeURIComponent(
              end
            )}`,
            {
              cache: "no-store",
            }
          );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.error ||
              "Unable to load available times."
          );
        }

	const normalizedSlots =
  data?.data?.data?.[selectedDate] ?? [];

setSlots(normalizedSlots as Slot[]);
        
      } catch (error) {
        console.error(
          "Slot loading error:",
          error
        );

        setBookingError(
          error instanceof Error
            ? error.message
            : "Unable to load available times."
        );
      } finally {
        setSlotsLoading(false);
      }
    };

    loadSlots();
  }, [
    bookingStep,
    selectedDate,
    eventTypeId,
  ]);

  // -----------------------------------------
  // BOOK CONSULTATION
  // -----------------------------------------

  const handleBooking = async () => {
    try {
      setBookingLoading(true);
      setBookingError("");

      if (!bookingToken) {
        throw new Error(
          "Your payment authorization is missing. Please restart the payment."
        );
      }

      if (!selectedSlot) {
        throw new Error(
          "Please select a consultation time."
        );
      }

      if (!name.trim()) {
        throw new Error(
          "Please enter your name."
        );
      }

      if (!email.trim()) {
        throw new Error(
          "Please enter your email address."
        );
      }

      const response =
        await fetch(
          "/api/cal/bookings",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              bookingToken,

              eventTypeId,

              start: selectedSlot,

              name: name.trim(),

              email:
                email.trim(),

              timeZone:
                "Asia/Kolkata",
            }),
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.error ||
            "Unable to confirm your booking."
        );
      }

      setBookingStep(
        "confirmed"
      );

      setMessage(
        "Your consultation has been booked successfully."
      );
    } catch (error) {
      console.error(
        "Consultation booking error:",
        error
      );

      setBookingError(
        error instanceof Error
          ? error.message
          : "Unable to confirm booking."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  // -----------------------------------------
  // FORMAT SLOT
  // -----------------------------------------

  const formatSlot = (
    slot: Slot
  ) => {
    const value =
      slot.time ||
      slot.start;

    if (!value) {
      return "";
    }

    return new Date(
      value
    ).toLocaleTimeString(
      "en-IN",
      {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone:
          "Asia/Kolkata",
      }
    );
  };

  // -----------------------------------------
  // UI
  // -----------------------------------------

  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-white via-amber-50/40 to-white p-8 shadow-xl">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
            Recommended Next Step
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            {recommendation.serviceName}
          </h2>

          <h3 className="mt-3 text-xl font-bold text-slate-800">
            {recommendation.headline}
          </h3>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            {recommendation.description}
          </p>

          <p className="mt-5 text-3xl font-black text-slate-900">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>

        {/* -------------------------------- */}
        {/* PAYMENT */}
        {/* -------------------------------- */}

        {bookingStep === "payment" && (
          <div className="flex flex-col items-start gap-4">
            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-amber-600 px-8 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Processing..."
                : `Pay ₹${price.toLocaleString(
                    "en-IN"
                  )} & Continue`}
            </button>

            {message && (
              <p className="text-sm font-medium text-slate-600">
                {message}
              </p>
            )}
          </div>
        )}

        {/* -------------------------------- */}
        {/* BOOKING */}
        {/* -------------------------------- */}

        {bookingStep === "booking" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">
              Schedule Your Consultation
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Your payment has been confirmed.
              Choose a convenient date and
              available time.
            </p>

            <div className="mt-6">
              <label className="block text-sm font-bold text-slate-700">
                Select Date
              </label>

              <input
                type="date"
                value={selectedDate}
                min={
                  new Date()
                    .toISOString()
                    .split("T")[0]
                }
                onChange={(event) =>
                  setSelectedDate(
                    event.target.value
                  )
                }
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {selectedDate && (
              <div className="mt-6">
                <label className="block text-sm font-bold text-slate-700">
                  Available Times
                </label>

                {slotsLoading ? (
                  <p className="mt-3 text-sm text-slate-500">
                    Checking availability...
                  </p>
                ) : slots.length === 0 ? (
                  <p className="mt-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
                    No available slots on this
                    date. Please select another
                    date.
                  </p>
                ) : (
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {slots.map(
                      (slot, index) => {
                        const slotValue =
                          slot.time ||
                          slot.start ||
                          "";

                        return (
                          <button
                            key={`${slotValue}-${index}`}
                            type="button"
                            onClick={() =>
                              setSelectedSlot(
                                slotValue
                              )
                            }
                            className={`rounded-xl border px-4 py-3 text-sm font-bold transition ${
                              selectedSlot ===
                              slotValue
                                ? "border-amber-600 bg-amber-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                            }`}
                          >
                            {formatSlot(
                              slot
                            )}
                          </button>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            )}

            {selectedSlot && (
              <div className="mt-8">
                <h4 className="text-lg font-black text-slate-900">
                  Your Details
                </h4>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(
                          event.target.value
                        )
                      }
                      placeholder="Enter your full name"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(
                          event.target.value
                        )
                      }
                      placeholder="Enter your email"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBooking}
                  disabled={
                    bookingLoading
                  }
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-600 px-8 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {bookingLoading
                    ? "Confirming Booking..."
                    : "Confirm Consultation Booking"}
                </button>
              </div>
            )}

            {bookingError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                {bookingError}
              </div>
            )}
          </div>
        )}

        {/* -------------------------------- */}
        {/* CONFIRMED */}
        {/* -------------------------------- */}

        {bookingStep === "confirmed" && (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <p className="text-lg font-black text-green-700">
              Consultation Booked Successfully
            </p>

            <p className="mt-2 text-sm leading-6 text-green-700">
              Your payment has been verified and
              your consultation has been scheduled.
              Please check your email for the
              booking confirmation and meeting
              details.
            </p>
          </div>
        )}

        {message &&
          bookingStep !== "payment" &&
          bookingStep !== "confirmed" && (
            <p className="text-sm font-medium text-slate-600">
              {message}
            </p>
          )}
      </div>
    </section>
  );
}