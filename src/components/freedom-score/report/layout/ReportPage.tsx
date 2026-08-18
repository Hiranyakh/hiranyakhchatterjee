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
    <section className="report-page">

      {/* Report Header */}
      <header className="report-page-header">

        <div>
          <p className="report-brand">
            THE HIRANYAKH FRAMEWORK™
          </p>

          <p className="report-brand-subtitle">
            Freedom Score™ Executive Report
          </p>
        </div>

        <div className="report-confidential">
          CONFIDENTIAL
        </div>

      </header>

      {/* Page Title */}
      <div className="report-title-block">

        <h1>
          {title}
        </h1>

        {subtitle && (
          <p>
            {subtitle}
          </p>
        )}

      </div>

      {/* Page Content */}
      <main className="report-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="report-footer">

        <span>
          © {new Date().getFullYear()} Freedom Score™
        </span>

        <span>
          Personal Freedom Assessment
        </span>

      </footer>

    </section>
  );
}