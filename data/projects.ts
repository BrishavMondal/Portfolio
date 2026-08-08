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
    github: "https://github.com/BrishavMondal/My-Protfolio",
    live: "https://my-protfolio-seven-eta.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "Task management application with CRUD, filters, search, and local storage.",
    image: "/images/project2.jpg",
    github: "https://github.com/BrishavMondal/task-manager",
    live: "https://task.vercel.app",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    id: 3,
    title: "News Portal API",
    description:
      "A News Portal API that using .NET Core and Entity Framework to manage news articles and user authentication.",
    image: "/images/project3.jpg",
    github: "https://github.com/BrishavMondal/News-Portal-API",
    live: "#",
    technologies: ["C#", "ASP.NET", "Entity Framework", "SQL Server", "REST API",".NET Core"],
  },
];