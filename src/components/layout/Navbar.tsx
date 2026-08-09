"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white/95 backdrop-blur-md">
      <Container>
        <nav className="relative flex min-h-[76px] items-center justify-between">
          {/* ========================= */}
          {/* BRAND */}
          {/* ========================= */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            {/* Compass Mark */}
            <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/brand/compass-watermark.svg"
                alt="HIRANYAKH Compass"
                fill
                className="object-contain"
              />
            </div>

            {/* Brand Text */}
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                HIRANYAKH
              </h1>

              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:mt-0.5 sm:block sm:text-[11px] sm:tracking-[0.22em]">
                Think Better • Decide Better • Build Better
              </p>
            </div>
          </Link>

          {/* ========================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================= */}

          <div className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-colors
                  duration-300
                  hover:text-[#0F7A5C]
                "
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* ========================= */}
          {/* DESKTOP CTA */}
          {/* ========================= */}

          <div className="hidden lg:block">
            <Button href="/freedom-score">
              Take Your Freedom Score™
            </Button>
          </div>

          {/* ========================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ========================= */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-800
              shadow-sm
              transition-all
              duration-200
              hover:border-[#D4AF37]
              hover:text-[#0F7A5C]
              lg:hidden
            "
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-[2px] w-full rounded-full bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* ========================= */}
        {/* MOBILE MENU */}
        {/* ========================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden
            ${
              menuOpen
                ? "max-h-[420px] border-t border-slate-100 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col gap-1 py-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-slate-50
                  hover:text-[#0F7A5C]
                "
              >
                {item.title}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="mt-3 border-t border-slate-100 pt-4">
              <Link
                href="/freedom-score"
                onClick={() => setMenuOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0F7A5C]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_24px_rgba(15,122,92,.18)]
                  transition-all
                  hover:bg-[#0c684e]
                "
              >
                Take Your Freedom Score™
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}