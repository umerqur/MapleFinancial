import { ArrowUpRight, Check } from "lucide-react";

const products = [
  {
    name: "Near Prime",
    tagline: "A graceful off-ramp from the big banks.",
    range: "5.99% – 6.99%",
    ltv: "Up to 80% LTV",
    accent: "pine",
    features: [
      "Bruised credit considered",
      "Self-employed income accepted",
      "Rental income recognized",
      "No minimum Beacon required",
    ],
    cta: "View Near Prime",
  },
  {
    name: "Flex",
    tagline: "For the file that needs a little breathing room.",
    range: "7.49% – 8.49%",
    ltv: "Up to 75% LTV",
    accent: "brass",
    highlight: true,
    features: [
      "Flexible debt servicing ratios",
      "Stated income (BFS) programs",
      "Equity-take-out to 75%",
      "30-year amortizations",
    ],
    cta: "View Flex",
  },
  {
    name: "Alt",
    tagline: "Equity-first solutions for unique situations.",
    range: "8.99% – 10.99%",
    ltv: "Up to 70% LTV",
    accent: "pine-dark",
    features: [
      "Open/closed term options",
      "1st and 2nd mortgages",
      "Commercial residential available",
      "Common-sense underwriting",
    ],
    cta: "View Alt",
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="eyebrow">Lending Solutions</div>
            <h2 className="mt-5 max-w-2xl font-display text-[44px] font-[420] leading-[1.02] tracking-tight text-pine-900 lg:text-[60px]">
              One submission.{" "}
              <em className="italic text-pine-600">Three tiers.</em> Every fit.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.65] text-pine-900/70">
            Every Maple product is underwritten, funded, and administered by an
            NHA-approved lender and rated institutional servicer — reducing
            renewal and legal costs while ensuring every mortgage is
            professionally managed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {products.map((p) => (
            <article
              key={p.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition ${
                p.highlight
                  ? "border-brass-300 bg-gradient-to-b from-brass-50 to-cream-50 shadow-soft"
                  : "border-pine-900/10 bg-cream-50 hover:border-pine-900/25"
              }`}
            >
              {p.highlight && (
                <div className="absolute right-5 top-5 rounded-full bg-pine-800 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-cream-50">
                  Most Submitted
                </div>
              )}

              <div className="border-b border-pine-900/10 p-8 lg:p-10">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-pine-700">
                  {p.name}
                </div>
                <h3 className="mt-4 font-display text-[32px] font-[440] leading-[1.05] tracking-tight text-pine-900 lg:text-[36px]">
                  {p.tagline}
                </h3>

                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-pine-900/50">
                      Rate Range
                    </div>
                    <div className="mt-1 font-display text-[26px] text-pine-900 num-display">
                      {p.range}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-pine-900/50">
                      Loan to Value
                    </div>
                    <div className="mt-1 font-display text-[20px] text-pine-900">
                      {p.ltv}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <ul className="space-y-3.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[14.5px] text-pine-900/85"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-pine-600"
                        strokeWidth={2.4}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className="mt-10 inline-flex items-center justify-between rounded-xl border border-pine-900/10 bg-white px-5 py-4 text-[14px] font-semibold text-pine-900 transition hover:border-pine-900/30 hover:bg-pine-50"
                >
                  {p.cta}
                  <ArrowUpRight size={16} className="text-pine-600" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-[12px] text-pine-900/45">
          Rate ranges are indicative and dependent on credit, property type, and
          deal structure. All products subject to underwriting approval.
        </p>
      </div>
    </section>
  );
}
