import type { LucideIcon } from "lucide-react";
import { ArrowRight, PhoneCall, Mail, Calendar } from "lucide-react";

export function BRM() {
  return (
    <section id="brm" className="relative overflow-hidden bg-pine-900 py-24 text-cream-50 lg:py-36">
      {/* Decorative editorial frame */}
      <div className="pointer-events-none absolute inset-0 noise opacity-[0.35]" aria-hidden />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pine-700/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-brass-600/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          {/* Left column — editorial copy */}
          <div>
            <div className="eyebrow !text-brass-200">The BRM Model</div>
            <h2 className="mt-6 font-display text-[48px] font-[420] leading-[1.02] tracking-tight lg:text-[68px]">
              Your file has a{" "}
              <em className="italic text-brass-300">first name.</em>
            </h2>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-cream-100/85">
              From submission through to funding, every broker works with a
              dedicated Broker Relationship Manager. No queues. No hand-offs.
              No re-explaining your deal to the fifth person this week. Just
              one accountable human who knows your file and can make decisions
              on it.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                "Direct line to your underwriter",
                "Same-day turnaround on conditions",
                "Consistent voice from intake to funding",
                "Deal structuring help before you submit",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-3 border-l-2 border-brass-400 pl-4 text-[14.5px] text-cream-100"
                >
                  {t}
                </li>
              ))}
            </ul>

            <a
              href="#apply"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-brass-400 px-7 py-4 text-[15px] font-semibold text-pine-950 transition hover:bg-brass-300"
            >
              Get paired with a BRM
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right column — BRM card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[20px] border border-cream-50/15 bg-cream-50/[0.04] p-8 backdrop-blur-sm lg:p-10">
              {/* Photo placeholder using monogram */}
              <div className="flex items-center gap-5">
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-brass-300/30 bg-gradient-to-br from-brass-300/30 to-pine-700">
                  <span className="font-display text-[28px] text-cream-50">
                    SP
                  </span>
                </div>
                <div>
                  <div className="font-display text-[24px] leading-tight">
                    Sanjay Patel
                  </div>
                  <div className="text-[12.5px] font-semibold uppercase tracking-[0.2em] text-brass-200">
                    Broker Relationship Manager · Ontario East
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-cream-50/10 bg-pine-950/40 p-5">
                <div className="flex items-baseline justify-between">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-200">
                    Last 30 Days
                  </div>
                  <div className="text-[11px] text-cream-50/60">
                    Ontario East Desk
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <Stat label="Files Closed" value="41" />
                  <Stat label="Avg. Turn" value="18h" />
                  <Stat label="Firm Rate" value="99.2%" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <ContactRow
                  icon={PhoneCall}
                  label="Direct"
                  value="(416) 555-0148"
                />
                <ContactRow icon={Mail} label="Email" value="sanjay@maple.ca" />
                <ContactRow
                  icon={Calendar}
                  label="Next available"
                  value="Today, 4:30 PM"
                />
              </div>
            </div>

            {/* Second floating tag */}
            <div className="absolute -right-4 bottom-10 hidden rotate-[-4deg] rounded-xl border border-cream-50/10 bg-pine-800 px-4 py-3 shadow-soft lg:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass-200">
                1 : 1
              </div>
              <div className="font-display text-[16px] text-cream-50">
                Broker : BRM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-[28px] text-cream-50 num-display">
        {value}
      </div>
      <div className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-cream-50/55">
        {label}
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-cream-50/10 pb-3 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream-50/5 text-brass-200">
          <Icon size={15} />
        </div>
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-cream-50/55">
          {label}
        </div>
      </div>
      <div className="text-[14px] text-cream-50">{value}</div>
    </div>
  );
}
