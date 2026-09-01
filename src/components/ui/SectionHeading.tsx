import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {(subtitle || description) && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          {subtitle || description}
        </p>
      )}

      {children}
    </div>
  );
}

export { SectionHeading };
export default SectionHeading;