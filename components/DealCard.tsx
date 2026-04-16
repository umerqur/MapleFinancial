import { CheckCircle2, Circle, Clock, Dot, FileText } from "lucide-react";

const steps = [
  { label: "Submitted", time: "09:14 AM", state: "done" },
  { label: "Underwriter Assigned", time: "09:42 AM", state: "done" },
  { label: "Commitment Issued", time: "Today, 3:18 PM", state: "active" },
  { label: "Funded", time: "—", state: "pending" },
];

export function DealCard() {
  return (
    <div className="relative">
      {/* Stacked shadow layers for depth */}
      <div className="absolute -left-4 top-6 h-full w-full rounded-[20px] bg-pine-900/5" />
      <div className="absolute -left-2 top-3 h-full w-full rounded-[20px] bg-pine-900/5" />

      <div className="relative overflow-hidden rounded-[20px] border border-pine-900/10 bg-white shadow-ring">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-pine-900/10 bg-cream-100 px-6 py-4">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-pine-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-pine-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pine-600" />
            </span>
            Deal #MF-24881 · Live
          </div>
          <div className="font-mono text-[11px] text-pine-900/50">
            BRM · S. Patel
          </div>
        </div>

        {/* File summary */}
        <div className="grid grid-cols-3 gap-px bg-pine-900/10">
          <Cell label="Product" value="Near Prime" emphasis />
          <Cell label="LTV" value="72%" />
          <Cell label="Amount" value="$648,000" />
        </div>

        {/* Pipeline */}
        <div className="space-y-0 px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-[13px] font-semibold text-pine-900">
              Commitment Pipeline
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-pine-50 px-2.5 py-1 text-[11px] font-semibold text-pine-700">
              <Clock size={12} /> 2h 04m elapsed
            </div>
          </div>

          <ul className="space-y-4">
            {steps.map((s, i) => (
              <li key={s.label} className="flex items-start gap-3">
                <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  {s.state === "done" ? (
                    <CheckCircle2
                      size={20}
                      className="fill-pine-600/10 text-pine-700"
                    />
                  ) : s.state === "active" ? (
                    <span className="relative flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-brass-300/60" />
                      <span className="relative m-auto h-2.5 w-2.5 rounded-full bg-brass-400" />
                    </span>
                  ) : (
                    <Circle size={18} className="text-pine-900/20" />
                  )}
                  {i < steps.length - 1 && (
                    <span className="absolute left-1/2 top-5 h-5 w-px -translate-x-1/2 bg-pine-900/10" />
                  )}
                </div>

                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <div
                      className={`text-[14px] ${
                        s.state === "pending"
                          ? "text-pine-900/40"
                          : "font-semibold text-pine-900"
                      }`}
                    >
                      {s.label}
                    </div>
                    {s.state === "active" && (
                      <div className="text-[11.5px] text-pine-700">
                        Terms confirmed · Awaiting signature
                      </div>
                    )}
                  </div>
                  <div
                    className={`font-mono text-[11px] ${
                      s.state === "pending"
                        ? "text-pine-900/30"
                        : "text-pine-900/60"
                    }`}
                  >
                    {s.time}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Commit details bar */}
          <div className="mt-6 rounded-xl border border-pine-900/10 bg-cream-50 p-4">
            <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <span>Commitment Terms</span>
              <span className="inline-flex items-center gap-1 text-pine-600">
                <FileText size={12} /> Firm
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <SmallStat label="Rate" value="6.24%" />
              <SmallStat label="Amort." value="30 yr" />
              <SmallStat label="Fee" value="0.95%" />
            </div>
            <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-pine-900/10">
              <span
                className="absolute inset-y-0 left-0 animate-progress rounded-full bg-gradient-to-r from-pine-600 to-pine-500"
                style={{ ["--target" as string]: "74%" }}
              />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10.5px] text-pine-900/50">
              <span>Submission</span>
              <span>Funding</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -right-3 -top-3 hidden rotate-3 items-center gap-2 rounded-full border border-pine-900/10 bg-brass-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brass-800 shadow-soft lg:inline-flex">
        <Dot size={14} /> Zero PDF friction
      </div>
    </div>
  );
}

function Cell({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="bg-white px-5 py-4">
      <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-pine-900/50">
        {label}
      </div>
      <div
        className={`mt-1 font-display text-[20px] ${
          emphasis ? "text-pine-800" : "text-pine-900"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-pine-900/50">
        {label}
      </div>
      <div className="mt-0.5 font-display text-[18px] text-pine-900 num-display">
        {value}
      </div>
    </div>
  );
}
