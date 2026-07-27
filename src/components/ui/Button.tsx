import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    {
      "bg-slate-900 text-white hover:bg-emerald-700":
        variant === "primary",

      "bg-emerald-700 text-white hover:bg-emerald-800":
        variant === "secondary",

      "border border-slate-300 hover:bg-slate-100":
        variant === "outline",

      "hover:bg-slate-100":
        variant === "ghost",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}