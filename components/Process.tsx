import { FileUp, MessagesSquare, Banknote } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: FileUp,
    title: "Submit once.",
    body: "Send us the file through Filogix, Velocity, or our secure broker intake. No PDFs to chase. We pull everything together and triage across all three product tiers.",
    meta: "Typical intake: under 4 minutes",
  },
  {
    n: "02",
    icon: MessagesSquare,
    title: "Hear back in hours.",
    body: "Your BRM reviews the file personally, structures the deal alongside our underwriter, and comes back with a firm commitment — the number you see is the number we fund.",
    meta: "Average commitment turnaround: 24 hours",
  },
  {
    n: "03",
    icon: Banknote,
    title: "Fund without friction.",
    body: "Institutional servicing from day one means faster instruction to lawyers, fewer admin loops, and a mortgage your client inherits from a rated professional servicer.",
    meta: "Servicing by NHA-approved partner",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="eyebrow">How it works</div>
          <h2 className="mt-5 font-display text-[44px] font-[420] leading-[1.02] tracking-tight text-pine-900 lg:text-[60px]">
            From submission to funding,{" "}
            <span className="italic text-pine-600">uninterrupted.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[16.5px] leading-[1.7] text-pine-900/70">
            We designed Maple the way brokers actually work. A clean intake, a
            real human on the file, and a commitment that holds — end to end.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-0">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative flex flex-col gap-6 ${
                i < steps.length - 1
                  ? "lg:border-r lg:border-pine-900/10 lg:pr-10"
                  : ""
              } ${i > 0 ? "lg:pl-10" : ""}`}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display text-[56px] font-[400] leading-none text-brass-400 num-display">
                  {s.n}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-pine-900/10 bg-white text-pine-700">
                  <s.icon size={18} strokeWidth={1.7} />
                </div>
              </div>

              <h3 className="font-display text-[30px] font-[440] leading-[1.05] tracking-tight text-pine-900">
                {s.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-pine-900/70">
                {s.body}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-pine-900/10 pt-5">
                <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-pine-900/60">
                  {s.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
