# Maple Financial — Website

A modern, conversion-focused marketing site for Maple Financial Capital Corp., Canada's invitation-only alternative mortgage lender for brokers.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Designed as an editorial / institutional experience: serif display headlines (Fraunces), clean sans body (Inter), deep pine + brass palette, and careful use of whitespace and motion.

## Design philosophy

1. **Editorial, not tech-bro.** A boutique alt lender should feel considered, rooted, and human — not like a neon crypto dashboard.
2. **Broker-first copy.** Every section is written to a mortgage broker's job-to-be-done, not a retail borrower.
3. **Conversion-optimized.** Google Ads-style clarity: one primary CTA (_Submit a Deal_), one secondary (_Explore solutions_), trust signals above the fold, multiple CTAs throughout, and a compact lead form in the closing block.
4. **Proof in product.** The hero "deal pipeline" card isn't decorative — it _demonstrates_ the value prop (firm commitments, BRM, speed).

## Sections

- **Nav** — sticky, minimal, primary CTA visible
- **Hero** — editorial headline + live deal pipeline card (the "show, don't tell" moment)
- **Marquee** — infinite ticker of trust phrases
- **TrustBar** — four headline stats in inverse (pine background)
- **ValueProps** — the four Maple pillars (One-Stop Shop, BRM, Transparent Pricing, President's Club)
- **Products** — Near Prime / Flex / Alt cards with rate ranges, LTV, and features
- **BRM** — feature block with a BRM "profile card" that shows the human behind the file
- **Process** — three-step "Submit → Commit → Fund" explainer
- **Testimonial** — editorial pull-quote + brokerage wordmarks
- **CTA** — invitation-only introduction form with split copy/form layout
- **Footer** — standard utility footer in deep pine

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech

- Next.js 14 App Router
- TypeScript (strict)
- Tailwind CSS with a custom pine/brass/cream palette
- `lucide-react` icons
- `next/font` for Fraunces + Inter
