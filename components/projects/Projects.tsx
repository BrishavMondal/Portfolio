import Container from "../layout/Container";
import FadeUp from "../animations/FadeUp";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <FadeUp>
          <span className="text-cyan-400 uppercase tracking-[6px]">
            Projects
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Work
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            A selection of projects showcasing my experience in
            full-stack development, UI engineering, and AI.
          </p>
        </FadeUp>

        <ProjectGrid />
      </Container>
    </section>
  );
}