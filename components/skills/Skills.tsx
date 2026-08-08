import Container from "../layout/Container";
import FadeUp from "../animations/FadeUp";
import SkillGrid from "./SkillGrid";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <FadeUp>
          <span className="text-cyan-400 uppercase tracking-[6px]">
            Skills
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Technologies I Use
          </h2>
        </FadeUp>

        <SkillGrid />
      </Container>
    </section>
  );
}