import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
        py-28
        lg:py-36
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export { Section };
export default Section;