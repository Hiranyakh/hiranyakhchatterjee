type Props = {
  title: string;
  description: string;
};

export default function PrincipleCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}