"use client";

import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Solutions", href: "#products" },
  { label: "The BRM Model", href: "#brm" },
  { label: "How It Works", href: "#process" },
  { label: "Resources", href: "#resources" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-pine-900/5 bg-cream-50/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" aria-label="Maple Financial home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-pine-800 link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-[13px] font-medium text-pine-800 link-underline lg:block"
          >
            Broker Login
          </a>
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 rounded-full bg-pine-800 px-5 py-2.5 text-[13px] font-semibold text-cream-50 shadow-soft transition hover:bg-pine-700"
          >
            Submit a Deal
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
