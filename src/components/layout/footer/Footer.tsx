"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white">
      <Container>
        <div className="border-t border-white/10 py-14 sm:py-20">

          {/* ============================ */}
          {/* Brand */}
          {/* ============================ */}

          <div className="flex flex-col items-center text-center">
            <Image
              src="/brand/compass-watermark.svg"
              alt="HIRANYAKH"
              width={70}
              height={70}
              className="opacity-90"
            />

            <h2 className="mt-5 text-2xl font-bold tracking-wide sm:text-3xl">
              HIRANYAKH
            </h2>

            <p
  className="
    mt-3
    whitespace-nowrap
    text-[9px]
    uppercase
    tracking-[0.12em]
    text-slate-400
    sm:text-xs
    sm:tracking-[0.22em]
  "
>
  Think Better • Decide Better • Build Better
</p>
          </div>

          {/* ============================ */}
          {/* Navigation */}
          {/* ============================ */}

          <nav
            className="
              mx-auto
              mt-10
              flex
              max-w-xl
              flex-wrap
              justify-center
              gap-x-6
              gap-y-4
              text-sm
              text-slate-300
              sm:mt-14
              sm:gap-x-8
            "
          >
            <Link
              href="/framework"
              className="transition hover:text-[#D4AF37]"
            >
              Framework
            </Link>

            <Link
              href="/freedom-score"
              className="transition hover:text-[#D4AF37]"
            >
              Freedom Score™
            </Link>

            <Link
              href="/resources"
              className="transition hover:text-[#D4AF37]"
            >
              Resources
            </Link>

            <Link
              href="/about"
              className="transition hover:text-[#D4AF37]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[#D4AF37]"
            >
              Contact
            </Link>
          </nav>

          {/* ============================ */}
          {/* Social */}
          {/* ============================ */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              justify-center
              gap-x-6
              gap-y-3
              text-sm
              text-slate-400
              sm:mt-12
              sm:gap-8
            "
          >
            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              YouTube
            </a>
          </div>

          {/* ============================ */}
          {/* Divider */}
          {/* ============================ */}

          <div className="my-10 h-px bg-white/10 sm:my-14" />

          {/* ============================ */}
          {/* Bottom */}
          {/* ============================ */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              text-center
              text-xs
              text-slate-500
              sm:text-sm
              lg:flex-row
              lg:text-left
            "
          >
            <p>
              © 2026 HIRANYAKH. All Rights Reserved.
            </p>

            <p className="text-[#D4AF37]">
              Built with Purpose.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}