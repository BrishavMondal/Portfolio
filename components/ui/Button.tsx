import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <button
      className={`rounded-full px-7 py-3 transition-all duration-300 ${
        variant === "primary"
          ? "bg-cyan-400 text-black hover:scale-105"
          : "border border-white/20 hover:border-cyan-400"
      }`}
    >
      {children}
    </button>
  );
}