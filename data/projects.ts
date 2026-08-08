export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    image: "/images/project1.jpg",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "Task management application with CRUD, filters, search, and local storage.",
    image: "/images/project2.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task.vercel.app",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    id: 3,
    title: "Deepfake Detection",
    description:
      "AI-powered deepfake image detection using PyTorch and computer vision.",
    image: "/images/project3.jpg",
    github: "https://github.com/yourusername/deepfake",
    live: "#",
    technologies: ["Python", "PyTorch", "OpenCV"],
  },
];