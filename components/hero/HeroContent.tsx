"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <p className="mb-5 text-cyan-400 text-lg">
        Hello, I'm
      </p>

      <h1 className="text-6xl font-black leading-none md:text-8xl">
        Brishav
        <br />
        Mondal
      </h1>

      <p className="mt-8 max-w-xl text-lg text-gray-400">
        I build modern, scalable web applications with
        Next.js, React, ASP.NET Core, Node.js, and
        TypeScript. I focus on creating fast,
        accessible, and visually engaging digital
        experiences.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>View Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </motion.div>
  );
}