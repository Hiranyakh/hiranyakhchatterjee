"use client";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-5
        z-50
        transition-all
        duration-300
      "
    >
      <Container>
        <nav
          className="
            flex
            h-[82px]
            items-center
            justify-between
            rounded-2xl
            border
            border-[#D4AF37]/10
            bg-white/75
            px-8
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]
          "
        >
          {/* ===================================== */}
          {/* Brand */}
          {/* ===================================== */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            {/* Temporary Compass */}

            <div className="relative h-12 w-12">

              <Image
                src="/brand/compass-watermark.svg"
                alt="HIRANYAKH Compass"
                fill
                className="object-contain"
              />

            </div>

            <div>

              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                HIRANYAKH
              </h1>

              <p className="mt-0.5 text-[11px] tracking-[0.22em] text-slate-500 uppercase">
                Think Better • Decide Better • Build Better
              </p>

            </div>

          </Link>

          {/* ===================================== */}
          {/* Navigation */}
          {/* ===================================== */}

          <div className="hidden items-center gap-10 lg:flex">

            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-[#0F7A5C]
                "
              >
                {item.title}
              </Link>
            ))}

          </div>

          {/* ===================================== */}
          {/* CTA */}
          {/* ===================================== */}

          <Button href="/freedom-score">
            Take Your Freedom Score™
          </Button>

        </nav>
      </Container>
    </header>
  );
}