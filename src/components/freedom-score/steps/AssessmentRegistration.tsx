"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Target,
  Calendar,
} from "lucide-react";

import { PersonalInfo } from "@/types/assessment";
import { generateAssessmentId } from "@/lib/generateAssessmentId";

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

    if (!form.fullName.trim())
      newErrors.fullName = "Full name is required.";

    if (!form.email.trim())
      newErrors.email = "Email is required.";

    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      newErrors.email = "Enter a valid email.";

    if (form.age === "")
      newErrors.age = "Age is required.";

    if (!form.gender)
      newErrors.gender = "Select gender.";

    if (!form.profession.trim())
      newErrors.profession = "Profession is required.";

    if (!form.goal)
      newErrors.goal = "Select your primary goal.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleContinue() {
    if (!validate()) return;

    const id = generateAssessmentId();

    onContinue(id, form);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-2xl"
    >
      <div className="text-center">

        <h1 className="text-5xl font-black text-slate-900">
          Freedom Score™
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          Assessment Registration
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-slate-500 leading-7">
          Before we begin, tell us a little about
          yourself. These details personalize your
          Freedom Report and will appear on your
          Premium PDF if you choose to unlock it.
        </p>

      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        <Input
          icon={<User size={18} />}
          label="Full Name *"
          value={form.fullName}
          error={errors.fullName}
          onChange={(v) =>
            updateField("fullName", v)
          }
        />

        <Input
          icon={<Mail size={18} />}
          label="Email *"
          value={form.email}
          error={errors.email}
          onChange={(v) =>
            updateField("email", v)
          }
        />

        <Input
          icon={<Phone size={18} />}
          label="Mobile Number"
          value={form.phone}
          onChange={(v) =>
            updateField("phone", v)
          }
        />

        <Input
          icon={<Calendar size={18} />}
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
          icon={<Briefcase size={18} />}
          label="Profession *"
          value={form.profession}
          error={errors.profession}
          onChange={(v) =>
            updateField("profession", v)
          }
        />

        <Input
          icon={<MapPin size={18} />}
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

      <div className="mt-12 rounded-2xl bg-slate-100 p-6">
        <div className="grid grid-cols-3 text-center">

          <div>
            <h3 className="text-3xl font-black">
              25
            </h3>

            <p className="text-slate-500">
              Questions
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              7 Min
            </h3>

            <p className="text-slate-500">
              Duration
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              Instant
            </h3>

            <p className="text-slate-500">
              Report
            </p>
          </div>

        </div>
      </div>

      <div className="mt-10 flex justify-end">

        <button
          onClick={handleContinue}
          className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
        >
          Continue →
        </button>

      </div>
    </motion.div>
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
      <label className="mb-2 block font-semibold">
        {label}
      </label>

      <div className="flex items-center rounded-xl border px-4">
        <div className="text-slate-400">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full bg-transparent p-4 outline-none"
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
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
      <label className="mb-2 block font-semibold">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border bg-white p-4 outline-none"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option === ""
              ? "Select..."
              : option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}