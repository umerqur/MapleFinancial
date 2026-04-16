import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="relative bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-[980px] px-6 text-center lg:px-10">
        <Quote
          size={40}
          className="mx-auto text-brass-400"
          strokeWidth={1.2}
        />

        <blockquote className="mt-10 font-display text-[34px] font-[420] leading-[1.18] tracking-tight text-pine-900 lg:text-[48px]">
          "Maple is the first alt lender that actually feels like a partner. My
          BRM knows my name, knows my brokerage, and knows how to get a deal
          funded.{" "}
          <span className="italic text-pine-600">
            It's the way alt lending should have always worked.
          </span>
          "
        </blockquote>

        <div className="mx-auto mt-12 flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pine-900/10 bg-pine-50 font-display text-[18px] text-pine-700">
            RK
          </div>
          <div className="text-left">
            <div className="font-display text-[18px] text-pine-900">
              Rajesh Kapoor
            </div>
            <div className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              Principal Broker · Horizon Mortgages
            </div>
          </div>
        </div>

        {/* Brokerage logos (stylized wordmarks — institutional feel) */}
        <div className="mt-20">
          <div className="eyebrow !justify-center">
            Trusted by Canada's top brokerages
          </div>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-6 opacity-60 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "HORIZON",
              "NORTHWOOD",
              "KEYSTONE",
              "CEDAR & OAK",
              "ATLAS CAP",
              "MERIDIAN",
            ].map((name) => (
              <div
                key={name}
                className="font-display text-[18px] tracking-[0.1em] text-pine-900/80"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
