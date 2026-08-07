interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ExecutiveCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[28px]
        bg-white
        shadow-xl
        border
        border-slate-200
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}