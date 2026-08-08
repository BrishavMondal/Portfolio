import { Globe2, Globe, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex items-center gap-5">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <Globe2 className="h-6 w-6" />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <Globe className="h-6 w-6" />
      </a>

      <a
        href="mailto:you@example.com"
        aria-label="Email"
        className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <Mail className="h-6 w-6" />
      </a>
    </div>
  );
}