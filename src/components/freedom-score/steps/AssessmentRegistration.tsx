"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { PersonalInfo } from "@/types/assessment";

interface Props {
  onContinue: (
    assessmentId: string,
    personalInfo: PersonalInfo
  ) => void;
}

const initialState: PersonalInfo = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  profession: "",
  city: "",
  state: "",
  country: "India",
  goal: "",
};

export default function AssessmentRegistration({
  onContinue,
}: Props) {
  const [form, setForm] = useState<PersonalInfo>(initialState);

  const [errors, setErrors] = useState<
    Partial<Record<keyof PersonalInfo, string>>
  >({});

  function updateField<K extends keyof PersonalInfo>(
    key: K,
    value: PersonalInfo[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function validate() {
    const newErrors: Partial<
      Record<keyof PersonalInfo, string>
    > = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email.";
    }

    if (form.age === "") {
      newErrors.age = "Age is required.";
    }

    if (!form.gender) {
      newErrors.gender = "Select gender.";
    }

    if (!form.profession.trim()) {
      newErrors.profession = "Profession is required.";
    }

    if (!form.goal) {
      newErrors.goal = "Select your primary goal.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleContinue() {
    if (!validate()) return;

    try {
      const params = new URLSearchParams(window.location.search);

      const attribution = {
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
      };

      const response = await fetch("/api/assessment/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalInfo: form,
          attribution,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to save registration.");
      }

      onContinue(data.assessmentId, form);
    } catch (error) {
      setErrors({
        email:
          error instanceof Error
            ? error.message
            : "Unable to save registration. Please try again.",
      });
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Brand Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-white text-[#D4AF37] shadow-sm">
              ◎
            </div>

            <div className="text-left">
              <p className="text-lg font-bold tracking-[0.16em] text-[#0B132B]">
                HIRANYAKH
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F7A5C]">
                Freedom Score™
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,.10)]
          "
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT — Introduction */}
            <div className="relative overflow-hidden bg-[#0B132B] p-7 text-white sm:p-10 lg:p-12">
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  border
                  border-[#D4AF37]/20
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  -left-20
                  h-72
                  w-72
                  rounded-full
                  bg-[#D4AF37]/5
                  blur-3xl
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-[#D4AF37]/40
                    bg-white/5
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#D4AF37]
                  "
                >
                  Begin Your Assessment
                </span>

                <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl">
                  Discover
                  <br />
                  Where You
                  <br />
                  <span className="text-[#D4AF37]">
                    Stand Today.
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Your Freedom Score™ is designed to help you understand
                  your current position across the areas that influence
                  your health, wealth, growth, leadership and purpose.
                </p>

                <div className="mt-10 space-y-5">
                  <InfoRow
                    number="01"
                    title="Answer Honestly"
                    text="Choose what reflects your current reality."
                  />

                  <InfoRow
                    number="02"
                    title="Understand Your Position"
                    text="Your responses create a personalized assessment."
                  />

                  <InfoRow
                    number="03"
                    title="Identify Your Opportunity"
                    text="Use your results to decide what to focus on next."
                  />
                </div>

                <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
                  <ShieldCheck
                    size={18}
                    className="shrink-0 text-[#D4AF37]"
                  />

                  <p className="text-xs leading-5 text-slate-400">
                    Your information is used to personalize your
                    assessment experience and results.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F7A5C]">
                  Personal Details
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Let's Get Started.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                  Tell us a little about yourself so we can personalize
                  your Freedom Score™ experience.
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Input
                  icon={<User size={17} />}
                  label="Full Name *"
                  value={form.fullName}
                  error={errors.fullName}
                  onChange={(v) =>
                    updateField("fullName", v)
                  }
                />

                <Input
                  icon={<Mail size={17} />}
                  label="Email *"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) =>
                    updateField("email", v)
                  }
                />

                <Input
                  icon={<Phone size={17} />}
                  label="Mobile Number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) =>
                    updateField("phone", v)
                  }
                />

                <Input
                  icon={<Calendar size={17} />}
                  label="Age *"
                  type="number"
                  value={String(form.age)}
                  error={errors.age}
                  onChange={(v) =>
                    updateField(
                      "age",
                      v === "" ? "" : Number(v)
                    )
                  }
                />

                <Select
                  label="Gender *"
                  value={form.gender}
                  error={errors.gender}
                  onChange={(v) =>
                    updateField(
                      "gender",
                      v as PersonalInfo["gender"]
                    )
                  }
                  options={[
                    "",
                    "Male",
                    "Female",
                    "Other",
                  ]}
                />

                <Input
                  icon={<Briefcase size={17} />}
                  label="Profession *"
                  value={form.profession}
                  error={errors.profession}
                  onChange={(v) =>
                    updateField("profession", v)
                  }
                />

                <Input
                  icon={<MapPin size={17} />}
                  label="City"
                  value={form.city}
                  onChange={(v) =>
                    updateField("city", v)
                  }
                />

                <Select
                  label="Primary Goal *"
                  value={form.goal}
                  error={errors.goal}
                  onChange={(v) =>
                    updateField("goal", v)
                  }
                  options={[
                    "",
                    "Financial Freedom",
                    "Better Health",
                    "Build Wealth",
                    "Career Growth",
                    "Leadership",
                    "Purpose",
                    "Start a Business",
                  ]}
                />
              </div>

              {/* Assessment Stats */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-3
                  divide-x
                  divide-slate-200
                  rounded-2xl
                  border
                  border-slate-200
                  bg-[#FAF9F6]
                  py-5
                "
              >
                <Stat value="25" label="Questions" />
                <Stat value="~7" label="Minutes" />
                <Stat value="Instant" label="Insights" />
              </div>

              {/* Action */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-[#0F7A5C]
                    px-6
                    py-4
                    text-base
                    font-bold
                    text-white
                    shadow-[0_12px_30px_rgba(15,122,92,.18)]
                    transition-all
                    duration-200
                    hover:bg-[#0B664C]
                    hover:shadow-[0_16px_35px_rgba(15,122,92,.25)]
                  "
                >
                  Continue to Instructions
                  <ArrowRight size={19} />
                </button>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                No right or wrong answers. The goal is honest
                self-assessment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

interface InfoRowProps {
  number: string;
  title: string;
  text: string;
}

function InfoRow({
  number,
  title,
  text,
}: InfoRowProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 text-xs font-bold text-[#D4AF37]">
        {number}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold text-slate-900 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

interface InputProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}

function Input({
  icon,
  label,
  value,
  error,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>

      <div
        className={`
          flex
          items-center
          rounded-xl
          border
          bg-white
          px-3
          transition
          focus-within:border-[#D4AF37]
          focus-within:ring-2
          focus-within:ring-[#D4AF37]/10
          ${
            error
              ? "border-red-300"
              : "border-slate-200"
          }
        `}
      >
        <div className="shrink-0 text-slate-400">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="
            w-full
            bg-transparent
            px-3
            py-3.5
            text-sm
            text-slate-900
            outline-none
            placeholder:text-slate-400
          "
        />
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

interface SelectProps {
  label: string;
  value: string;
  error?: string;
  options: string[];
  onChange: (value: string) => void;
}

function Select({
  label,
  value,
  error,
  options,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3.5
          text-sm
          text-slate-900
          outline-none
          transition
          focus:border-[#D4AF37]
          focus:ring-2
          focus:ring-[#D4AF37]/10
          ${
            error
              ? "border-red-300"
              : "border-slate-200"
          }
        `}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === "" ? "Select..." : option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}