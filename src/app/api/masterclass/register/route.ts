import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY;

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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
    } = body;

    // -----------------------------
    // VALIDATE INPUT
    // -----------------------------

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
          error: "Please provide valid registration details.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // SAVE MASTERCLASS LEAD
    // -----------------------------

    const { data, error } =
      await supabaseAdmin
        .from("masterclass_leads")
        .insert({
          full_name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          status: "registered",
        })
        .select("id, full_name, email, phone, status, created_at")
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

    return NextResponse.json({
      success: true,
      message:
        "Masterclass registration successful.",
      registration: data,
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