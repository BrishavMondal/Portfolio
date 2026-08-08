"use client";

import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

const links = ["About", "Projects", "Experience", "Skills", "Contact"];

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
      <nav className="flex h-full flex-col items-center justify-center gap-8">
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={onClose}
            className="text-3xl"
          >
            {link}
          </Link>
        ))}
      </nav>
    </div>
  );
}