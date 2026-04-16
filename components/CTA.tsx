import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="apply" className="relative bg-cream-50 py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] border border-pine-900/10 bg-gradient-to-br from-pine-900 via-pine-800 to-pine-900 p-10 text-cream-50 shadow-soft lg:p-20">
          {/* Decorative leaf mark */}
          <svg
            className="pointer-events-none absolute -right-10 -top-10 h-[320px] w-[320px] opacity-[0.12]"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden
          >
            <path
              d="M100 20 L115 55 L155 48 L138 82 L175 100 L138 118 L155 152 L115 145 L100 180 L85 145 L45 152 L62 118 L25 100 L62 82 L45 48 L85 55 Z"
              fill="#D9B553"
            />
          </svg>

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <div className="eyebrow !text-brass-200">Partner with Maple</div>
              <h2 className="mt-6 font-display text-[48px] font-[420] leading-[1.02] tracking-tight lg:text-[72px]">
                Let's fund your next deal.
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-cream-100/85">
                Partnership with Maple is by invitation only — reserved for
                Canada's top-performing brokerages. Submit your brokerage for
                review and we'll be in touch within one business day.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#form"
                  className="group inline-flex items-center gap-3 rounded-full bg-brass-400 px-8 py-4 text-[15px] font-semibold text-pine-950 transition hover:bg-brass-300"
                >
                  Request an introduction
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="mailto:partnerships@maplefinancial.ca"
                  className="inline-flex items-center gap-3 rounded-full border border-cream-50/20 px-7 py-4 text-[15px] font-semibold text-cream-50 transition hover:border-cream-50/40 hover:bg-cream-50/5"
                >
                  <Mail size={16} />
                  partnerships@maplefinancial.ca
                </a>
              </div>
            </div>

            {/* Compact form */}
            <form
              id="form"
              className="space-y-3 rounded-2xl border border-cream-50/15 bg-pine-950/30 p-6 backdrop-blur-sm"
            >
              <div className="mb-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass-200">
                Brokerage Introduction
              </div>
              <Field label="Full name" placeholder="Jane Broker" />
              <Field label="Brokerage" placeholder="Name of brokerage" />
              <Field
                label="Work email"
                placeholder="jane@brokerage.ca"
                type="email"
              />
              <Field
                label="Annual volume"
                placeholder="$25M+"
              />
              <button
                type="button"
                className="group mt-3 flex w-full items-center justify-between rounded-xl bg-brass-400 px-5 py-3.5 text-[14px] font-semibold text-pine-950 transition hover:bg-brass-300"
              >
                Submit for review
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="pt-1 text-[11px] text-cream-50/55">
                By submitting you agree to our privacy terms. We'll respond
                within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/55">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 block w-full rounded-lg border border-cream-50/10 bg-cream-50/[0.04] px-3.5 py-3 text-[14px] text-cream-50 placeholder:text-cream-50/30 focus:border-brass-300 focus:outline-none"
      />
    </label>
  );
}
