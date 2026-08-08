import { Experience } from "@/data/experience";

interface Props {
  item: Experience;
}

export default function TimelineItem({ item }: Props) {
  return (
    <div className="relative border-l border-cyan-400/40 pl-8 pb-10">
      <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-cyan-400" />

      <p className="text-sm text-cyan-400">{item.period}</p>

      <h3 className="mt-2 text-2xl font-semibold">
        {item.role}
      </h3>

      <p className="text-gray-300">{item.company}</p>

      <p className="mt-4 text-gray-400">
        {item.description}
      </p>
    </div>
  );
}