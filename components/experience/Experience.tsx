import Container from "../layout/Container";
import FadeUp from "../animations/FadeUp";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <Container>
        <FadeUp>
          <span className="text-cyan-400 uppercase tracking-[6px]">
            Experience
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            My Journey
          </h2>
        </FadeUp>

        <Timeline />
      </Container>
    </section>
  );
}