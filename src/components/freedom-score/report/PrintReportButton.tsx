"use client";

import { Printer } from "lucide-react";

export default function PrintReportButton() {
  function handlePrint() {
    window.print();
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="no-print inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
    >
      <Printer size={17} />
      Download / Print PDF
    </button>
  );
}