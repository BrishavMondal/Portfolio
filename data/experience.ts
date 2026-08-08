export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [

  {
    id: 3,
    role: "Full Stack Intern",
    company: "Credosis",
    period: "1 July 2026 – Present",
    description:
      "Building responsive web applications using Next.js, CSS, Node.js and TypeScript.",
  },

  {
    id: 1,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2025 – Present",
    description:
      "Building responsive web applications using Next.js, ASP.NET Core, Node.js and TypeScript.",
  },
  {
    id: 2,
    role: "CSE Student",
    company: "University",
    period: "2022 – Present",
    description:
      "Developed academic projects in AI, machine learning, and full-stack development.",
  },
];