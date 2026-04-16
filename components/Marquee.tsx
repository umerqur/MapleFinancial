const items = [
  "NHA-Approved Lender",
  "Rated Institutional Servicer",
  "1:1 Broker Relationship Manager",
  "Firm Commitments",
  "Transparent Pricing",
  "Near Prime · Flex · Alt",
  "Canadian-owned",
  "Invitation-only",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-pine-900/10 bg-cream-100 py-4">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-ticker gap-12 whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-pine-900/60">
          {loop.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{t}</span>
              <span className="text-brass-500">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
