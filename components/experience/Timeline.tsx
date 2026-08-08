import { experiences } from "@/data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="mt-16">
      {experiences.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}