"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Work", url: "#work" },
  { name: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-6 bg-navy/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="flex items-center justify-center z-50 relative">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden z-50 relative focus:outline-none flex flex-col justify-between items-end w-8 h-6 group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div
          className={`h-[2px] bg-green rounded transition-all duration-300 ease-in-out ${isOpen ? "w-full rotate-45 translate-y-[11px]" : "w-full"
            }`}
        />
        <div
          className={`h-[2px] bg-green rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 w-full" : "w-[80%] group-hover:w-full"
            }`}
        />
        <div
          className={`h-[2px] bg-green rounded transition-all duration-300 ease-in-out ${isOpen ? "w-full -rotate-45 -translate-y-[11px]" : "w-[60%] group-hover:w-full"
            }`}
        />
      </button>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed inset-0 bg-navy/90 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-[400px] bg-light-navy z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col justify-center items-center w-full">
          <ul className="flex flex-col gap-10 text-center text-lg font-mono text-lightest-slate w-full">
            {NAV_LINKS.map((link, i) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-green transition-colors flex flex-col items-center"
                >
                  <span className="text-green text-sm mb-1">0{i + 1}.</span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-green border border-green rounded px-10 py-4 hover:bg-green-tint transition-colors w-max mx-auto">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm font-mono text-lightest-slate items-center">
          {NAV_LINKS.map((link, i) => (
            <li key={link.name}>
              <Link href={link.url} className="hover:text-green transition-colors">
                <span className="text-green mr-1">0{i + 1}.</span>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-green border border-green rounded px-4 py-2 transition-all duration-300 md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[4px_4px_0_0_var(--color-green)] focus:outline-none">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
