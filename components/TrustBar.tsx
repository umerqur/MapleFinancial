const stats = [
  { value: "24 hrs", label: "Avg. Commitment" },
  { value: "< 1%", label: "Fall-through Rate" },
  { value: "100%", label: "NHA-Approved Funding" },
  { value: "1:1", label: "Broker to BRM" },
];

export function TrustBar() {
  return (
    <section className="border-y border-pine-900/10 bg-pine-900 text-cream-50">
      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-l border-cream-50/15 pl-5 first:border-l-0 first:pl-0 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <div className="font-display text-[40px] font-[450] leading-none tracking-tight text-cream-50 num-display lg:text-[56px]">
                {s.value}
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-200">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
