import {
  ArrowUpRight,
  Compass,
  Layers3,
  LineChart,
  UserRoundCheck,
} from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    eyebrow: "One-Stop Shop",
    title: "Every tier. One submission.",
    body: "Submit once — we run it across Near Prime, Flex, and Alt. Firm commitments across multiple products, without duplicated paperwork or shuffled files.",
  },
  {
    icon: UserRoundCheck,
    eyebrow: "The BRM Model",
    title: "A decision-maker on your file.",
    body: "Every broker gets a dedicated Broker Relationship Manager — paired with an underwriter with skin in the game. Answers that move the deal forward, not further into queue.",
  },
  {
    icon: LineChart,
    eyebrow: "Transparent Pricing",
    title: "No last-minute surprises.",
    body: "Upfront document review, clearly stated rate and fee, commitments that stand firm all the way to funding. What we commit is what we fund.",
  },
  {
    icon: Compass,
    eyebrow: "President's Club",
    title: "Earned, not rented.",
    body: "By invitation only. Top-performing brokerages unlock priority pricing, full product access, and direct-line concierge support from a dedicated Business Relationship Manager.",
  },
];

export function ValueProps() {
  return (
    <section id="why" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <div className="eyebrow">Why brokers choose Maple</div>
            <h2 className="mt-5 font-display text-[44px] font-[420] leading-[1.02] tracking-tight text-pine-900 lg:text-[60px]">
              Firmly rooted in the basics.{" "}
              <span className="text-pine-500 italic">
                Designed by experience.
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pt-6">
            <p className="text-[17px] leading-[1.7] text-pine-900/70">
              No complicated guidelines. No senseless requirements. We stripped
              out the confusion and embraced the fundamentals — a broker-focused,
              no-nonsense approach to alternative lending.
            </p>
            <a
              href="#process"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-pine-800 link-underline"
            >
              See how a deal moves through Maple
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-pine-900/10 bg-pine-900/10 lg:mt-20 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col bg-cream-50 p-8 transition hover:bg-white lg:p-12"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pine-900/10 bg-pine-50 text-pine-700 transition group-hover:bg-pine-800 group-hover:text-cream-50">
                  <p.icon size={22} strokeWidth={1.6} />
                </div>
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-pine-900/40">
                  0{i + 1}
                </div>
              </div>

              <div className="eyebrow mt-8">{p.eyebrow}</div>
              <h3 className="mt-4 font-display text-[28px] font-[440] leading-[1.1] tracking-tight text-pine-900 lg:text-[32px]">
                {p.title}
              </h3>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-pine-900/70">
                {p.body}
              </p>

              {/* corner accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-12 origin-left scale-x-0 bg-brass-400 transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
