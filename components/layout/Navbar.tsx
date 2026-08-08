"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import MobileMenu from "./MobileMenu";

const links = [
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-widest"
            >
              BM.
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-10 md:flex">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <button className="hidden rounded-full border border-cyan-400 px-5 py-2 text-sm transition-all duration-300 hover:bg-cyan-400 hover:text-black md:block">
              Let's Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              className="rounded-lg p-2 text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}