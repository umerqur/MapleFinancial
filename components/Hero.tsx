import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { DealCard } from "./DealCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      {/* Layer 1 — faint skyline mood image (behind everything) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <Image
          src="/maple_hero.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="select-none object-cover object-center opacity-[0.11] saturate-[.2] [transform:scale(1.04)] md:opacity-[0.16]"
        />
      </div>

      {/* Layer 2 — ivory wash: mostly white, a whisper of cream at the base for warmth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/72 via-white/58 to-cream-50/72"
        aria-hidden
      />

      {/* Layer 3 — topographic background lines (above image, below content) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${120 + i * 40} C 300 ${80 + i * 40}, 700 ${160 + i * 40}, 1440 ${100 + i * 40}`}
              stroke="#0B2F20"
              strokeWidth="0.6"
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* LEFT — copy */}
          <div className="animate-fade-up">
            <div className="eyebrow">Invitation-only broker network</div>

            <h1 className="mt-6 font-display text-[56px] font-[420] leading-[0.98] tracking-tightest text-pine-900 lg:text-[84px]">
              Grow your{" "}
              <em className="font-display italic text-pine-700">alternative</em>{" "}
              business.
              <span className="block text-pine-500">
                Without the friction.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-pine-800/80">
              One submission unlocks our full suite — Near Prime, Flex, and Alt —
              underwritten, funded, and serviced by an NHA-approved institutional
              partner. One BRM from intake through to funding. Firm commitments,
              transparent pricing, no last-minute surprises.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-4 text-[15px] font-semibold text-cream-50 shadow-soft transition hover:bg-pine-700"
              >
                Start a Submission
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-pine-900/15 bg-white/60 px-6 py-4 text-[15px] font-semibold text-pine-900 backdrop-blur transition hover:border-pine-900/30 hover:bg-white"
              >
                Explore lending solutions
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-pine-900/70">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-pine-600" />
                NHA-approved lender
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-pine-600" />
                24-hour commitment turnaround
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-pine-600" />
                Rated institutional servicer
              </span>
            </div>
          </div>

          {/* RIGHT — deal card */}
          <div className="animate-fade-up lg:[animation-delay:200ms]">
            <DealCard />
          </div>
        </div>
      </div>

      {/* Editorial rule */}
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="rule" />
      </div>
    </section>
  );
}
