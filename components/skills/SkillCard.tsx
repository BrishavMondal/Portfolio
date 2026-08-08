interface Props {
  name: string;
}

export default function SkillCard({ name }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center transition hover:-translate-y-1 hover:border-cyan-400">
      {name}
    </div>
  );
}