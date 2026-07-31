"use client";

import { ReactNode } from "react";

interface ReportPageProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ReportPage({
  title,
  subtitle,
  children,
}: ReportPageProps) {
  return (
    <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold text-slate-900">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-lg text-slate-600">
            {subtitle}
          </p>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Freedom Score™ Executive Report
      </footer>
    </div>
  );
}