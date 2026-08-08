import Image from "next/image";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/40 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-2 transition hover:border-cyan-400"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-2 font-medium text-black transition hover:scale-105"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}