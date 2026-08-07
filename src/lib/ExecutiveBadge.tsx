interface Props {
  children: React.ReactNode;
}

export default function ExecutiveBadge({
  children,
}: Props) {
  return (
    <span className="
      inline-flex
      items-center
      rounded-full
      bg-amber-100
      px-4
      py-2
      text-sm
      font-semibold
      uppercase
      tracking-widest
      text-amber-700
    ">
      {children}
    </span>
  );
}