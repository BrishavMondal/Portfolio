import Container from "../layout/Container";
import FadeUp from "../animations/FadeUp";
import Stats from "./Stats";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <FadeUp>
          <span className="text-cyan-400 uppercase tracking-[6px]">
            About
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Building modern digital experiences.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            I'm Brishav Mondal, a Full Stack Developer passionate
            about creating scalable applications using Next.js,
            React, ASP.NET Core, Node.js, and TypeScript. My
            focus is writing clean, maintainable code while
            delivering exceptional user experiences.
          </p>
        </FadeUp>

        <Stats />

      </Container>
    </section>
  );
}