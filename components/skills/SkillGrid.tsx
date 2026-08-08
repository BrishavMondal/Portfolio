import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillGrid() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill) => (
        <SkillCard key={skill} name={skill} />
      ))}
    </div>
  );
}