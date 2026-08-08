interface Props {
  number: string;
  title: string;
}

export default function AboutCard({
  number,
  title,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition hover:border-cyan-400">
      <h3 className="text-5xl font-bold text-cyan-400">
        {number}
      </h3>

      <p className="mt-4 text-gray-400">
        {title}
      </p>
    </div>
  );
}