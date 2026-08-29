import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY;

const metaPixelId =
  process.env.NEXT_PUBLIC_META_PIXEL_ID;

const metaAccessToken =
  process.env.META_ACCESS_TOKEN;

const metaTestEventCode =
  process.env.META_TEST_EVENT_CODE;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured."
  );
}

const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

function hash(value: string) {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

function getClientIp(request: Request) {
  const forwardedFor =
    request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return (
    request.headers.get("x-real-ip") ||
    null
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      fbp,
      fbc,
      eventSourceUrl,
    } = body;

    // ---------------------------------------
    // VALIDATE INPUT
    // ---------------------------------------

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Name, email and phone number are required.",
        },
        { status: 400 }
      );
    }

    const cleanName = String(fullName).trim();

    const cleanEmail = String(email)
      .trim()
      .toLowerCase();

    const cleanPhone = String(phone).trim();

    if (
      cleanName.length < 2 ||
      cleanEmail.length < 5 ||
      cleanPhone.length < 7
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide valid registration details.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------
    // SAVE MASTERCLASS LEAD
    // ---------------------------------------

    const { data, error } =
      await supabaseAdmin
        .from("masterclass_leads")
        .insert({
          full_name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          status: "registered",
        })
        .select(
          "id, full_name, email, phone, status, created_at"
        )
        .single();

    if (error) {
      console.error(
        "Masterclass registration error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to complete registration.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------------
    // CREATE META EVENT ID
    // ---------------------------------------

    const eventId =
      `masterclass_${data.id}_${Date.now()}`;

    // ---------------------------------------
    // META CONVERSIONS API
    // ---------------------------------------

    if (metaPixelId && metaAccessToken) {
      try {
        const userAgent =
          request.headers.get("user-agent") ||
          null;

        const clientIp =
          getClientIp(request);

        const eventTime =
          Math.floor(Date.now() / 1000);

        const nameParts =
          cleanName.split(/\s+/);

        const firstName =
          nameParts[0] || "";

        const lastName =
          nameParts.length > 1
            ? nameParts.slice(1).join(" ")
            : "";

        const userData: Record<
          string,
          unknown
        > = {
          em: [hash(cleanEmail)],
          ph: [hash(cleanPhone)],
          fn: [hash(firstName)],
        };

        if (lastName) {
          userData.ln = [hash(lastName)];
        }

        if (fbp) {
          userData.fbp = String(fbp);
        }

        if (fbc) {
          userData.fbc = String(fbc);
        }

        if (clientIp) {
          userData.client_ip_address =
            clientIp;
        }

        if (userAgent) {
          userData.client_user_agent =
            userAgent;
        }

        const metaEvent = {
          event_name: "Lead",

          event_time: eventTime,

          action_source: "website",

          event_source_url:
            typeof eventSourceUrl === "string" &&
            eventSourceUrl
              ? eventSourceUrl
              : undefined,

          user_data: userData,

          custom_data: {
            content_name:
              "AI Powered Side Hustle Masterclass",
          },

          event_id: eventId,
        };

        const metaResponse =
          await fetch(
            `https://graph.facebook.com/v24.0/${metaPixelId}/events?access_token=${encodeURIComponent(
              metaAccessToken
            )}`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
  data: [metaEvent],
  
}),
            }
          );

        const metaResult =
          await metaResponse.json();

        if (!metaResponse.ok) {
          console.error(
            "Meta Conversions API error:",
            metaResult
          );
        } else {
          console.log(
            "Meta Lead event sent:",
            metaResult
          );
        }
      } catch (metaError) {
        // Meta failure must not prevent the
        // lead from being successfully registered.

        console.error(
          "Meta Conversions API request failed:",
          metaError
        );
      }
    } else {
      console.warn(
        "Meta CAPI not configured. Missing META_ACCESS_TOKEN or NEXT_PUBLIC_META_PIXEL_ID."
      );
    }

    // ---------------------------------------
    // SUCCESS
    // ---------------------------------------

    return NextResponse.json({
      success: true,

      message:
        "Masterclass registration successful.",

      registration: data,

      // Returned to the browser so the
      // browser Pixel can use the exact same
      // event ID for deduplication.
      metaEventId: eventId,
    });
  } catch (error) {
    console.error(
      "Masterclass registration request error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to process registration.",
      },
      { status: 500 }
    );
  }
}