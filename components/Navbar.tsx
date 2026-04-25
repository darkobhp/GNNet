"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="shell flex min-h-[4.75rem] items-center justify-between gap-3 sm:gap-6">
        <Link
          href="#about"
          className="group flex min-w-0 flex-1 items-center gap-3 text-slate-900 md:flex-none"
          aria-label="GNNet Research home"
        >
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/logo.png"
              alt="GNNet Research logo"
              width={48}
              height={48}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-700 sm:text-lg sm:tracking-[0.22em]">
              GNNET
            </span>
            <span className="truncate text-sm font-normal leading-tight text-slate-900 group-hover:text-navy-800 sm:text-lg">
              Ghana Neuroscience Network
            </span>
          </span>
        </Link>

        <div className="hidden items-center md:flex">
          <div className="relative overflow-hidden rounded-full border border-slate-200 bg-white/94 shadow-sm">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(206,17,38,1) 0%, rgba(252,209,22,1) 50%, rgba(0,107,63,1) 100%)"
              }}
            />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[1px] rounded-full bg-white/80 backdrop-blur-[1px]"
          />
          <nav aria-label="Primary" className="relative">
            <ul className="relative flex items-center gap-2 p-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 hover:border-slate-300 hover:text-slate-900 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
