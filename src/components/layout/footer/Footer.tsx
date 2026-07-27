"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white">

      <Container>

        <div className="border-t border-white/10 py-20">

          {/* ============================ */}
          {/* Logo */}
          {/* ============================ */}

          <div className="flex flex-col items-center text-center">

            <Image
              src="/brand/compass-watermark.svg"
              alt="HIRANYAKH"
              width={70}
              height={70}
              className="opacity-90"
            />

            <h2 className="mt-6 text-3xl font-bold tracking-wide">
              HIRANYAKH
            </h2>

            <p className="mt-3 text-slate-400 tracking-[0.25em] uppercase text-xs">
              Think Better • Decide Better • Build Better
            </p>

          </div>

          {/* ============================ */}
          {/* Navigation */}
          {/* ============================ */}

          <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm">

            <Link href="/framework" className="hover:text-[#D4AF37] transition">
              Framework
            </Link>

            <Link href="/freedom-score" className="hover:text-[#D4AF37] transition">
              Freedom Score™
            </Link>

            <Link href="/resources" className="hover:text-[#D4AF37] transition">
              Resources
            </Link>

            <Link href="/about" className="hover:text-[#D4AF37] transition">
              About
            </Link>

            <Link href="/contact" className="hover:text-[#D4AF37] transition">
              Contact
            </Link>

          </div>

          {/* ============================ */}
          {/* Social */}
          {/* ============================ */}

          <div className="mt-12 flex justify-center gap-8 text-sm text-slate-400">

            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white transition">
              Facebook
            </a>

            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              YouTube
            </a>

          </div>

          {/* ============================ */}
          {/* Divider */}
          {/* ============================ */}

          <div className="py=20" />

          {/* ============================ */}
          {/* Bottom */}
          {/* ============================ */}

          <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 lg:flex-row">

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