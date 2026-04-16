import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-pine-950 pt-24 pb-10 text-cream-100">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 border-b border-cream-50/10 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Logo inverse />
            <p className="mt-6 max-w-xs text-[14px] leading-[1.65] text-cream-100/65">
              An invitation-only alternative mortgage lender serving Canada's
              top-performing brokerages. Underwritten and funded by an
              NHA-approved institutional partner.
            </p>
          </div>

          <FooterCol
            title="Solutions"
            links={["Near Prime", "Flex", "Alt", "Commercial Residential"]}
          />
          <FooterCol
            title="Partners"
            links={[
              "Broker Portal",
              "Submit a Deal",
              "Rate Sheet (current)",
              "Underwriting Guide",
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              "partnerships@maplefinancial.ca",
              "underwriting@maplefinancial.ca",
              "204 – 3582 Major Mackenzie Dr. W",
              "Vaughan, ON · L4H 3T6",
            ]}
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 lg:flex-row lg:items-center">
          <div className="text-[12px] text-cream-100/50">
            © {new Date().getFullYear()} Maple Financial Capital Corp. All
            rights reserved. Broker Number: 13659 (ON).
          </div>
          <div className="flex items-center gap-6 text-[12px] text-cream-100/60">
            <a href="#" className="link-underline hover:text-cream-50">
              Privacy
            </a>
            <a href="#" className="link-underline hover:text-cream-50">
              Terms
            </a>
            <a href="#" className="link-underline hover:text-cream-50">
              Complaints
            </a>
            <a href="#" className="link-underline hover:text-cream-50">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass-200">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-[14px] text-cream-100/85">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="link-underline hover:text-cream-50">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
