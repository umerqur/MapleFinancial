# CLAUDE.md — Maple Financial Project Context

Context for AI assistants working on this repository. Keep this file up to date when deployment, stack, or project conventions change.

## Project

**Maple Financial Capital Corp.** — a boutique, invitation-only Canadian alternative mortgage lender for brokers. Founded May 2025, based in Vaughan, ON. NHA-approved lender, rated institutional servicer. Products: Near Prime, Flex, Alt.

Current engagement is a Phase 1 sprint (Umer + Ousmaan) covering:
- Azure foundation + identity/access + governance
- Internal knowledge assistant (policy/process Q&A)
- **This repo**: modern broker-focused marketing website + eventual broker intake flow to replace PDF-based submissions

Tone for copy: broker-first, editorial, institutional-but-modern. Not tech-bro. Not big-bank stuffy. Boutique.

## Stack

- Next.js 14 (App Router) in **static-export** mode (`output: "export"`)
- TypeScript (strict)
- Tailwind CSS (custom pine/brass/cream palette in `tailwind.config.ts`)
- Fonts: Fraunces (display) + Inter (body) via `next/font`
- Icons: `lucide-react`
- No server/SSR — this is a marketing site that builds to fully static HTML/CSS/JS

## Commands

```bash
npm install        # install deps
npm run dev        # local dev at http://localhost:3000
npm run build      # produces static site in ./out
```

`next build` is the build. Because `output: "export"` is set in `next.config.js`, the build emits a complete static site in `out/`.

## Deployment — Netlify

This site deploys to `maplefinancial.netlify.app` (and the custom domain once it's wired up).

**Required Netlify site settings** (either via `netlify.toml` in this repo — preferred — or the Netlify UI):
- Build command: `npm run build`
- Publish directory: `out`
- Node version: `20` (also pinned via `.nvmrc` and `package.json` `engines`)

Both are already set in `netlify.toml` at the repo root, so linking the repo in Netlify should Just Work.

### If Netlify deploy shows "Page not found"
1. Confirm the **Netlify site's repo** is linked to `umerqur/MapleFinancial` on the correct branch (currently `claude/improve-maple-visuals-zuCxy`; production should point at `main` once merged).
2. Confirm the latest build actually ran and succeeded in the Netlify **Deploys** tab (not just "published" from an older empty deploy).
3. Confirm publish directory resolved to `out` — with `output: "export"`, `.next` will be empty of HTML. If Netlify is serving `.next`, it'll 404.
4. If the site was auto-created via the Netlify "drop" or CLI before `netlify.toml` existed, overrides in the Netlify UI can shadow the toml. Clear the build command and publish directory in the UI so the toml wins.

### CI-style checks before every push
Run locally before pushing to catch Netlify-side failures early:

```bash
npm run build    # must exit 0 and populate ./out
```

Because the site is static, **no server-only Next.js features may be used**:
- No API routes (`app/api/*`)
- No server actions
- No `getServerSideProps` (not applicable in App Router anyway)
- No dynamic route segments without `generateStaticParams`
- No `next/image` with remote loaders (we set `images.unoptimized = true`)

If we ever need SSR, switch to the `@netlify/plugin-nextjs` runtime and drop `output: "export"`.

## Repo conventions

- Feature work lives on `claude/<feature>` branches.
- Never push to `main` without explicit user instruction. PRs only on explicit request.
- Commits should be imperative, describe *why*, not just *what*, and never `--amend` a previously pushed commit.
- File structure:
  - `app/` — Next.js App Router (layout, page, globals)
  - `components/` — page section components (Hero, Nav, Products, etc.)
  - `tailwind.config.ts` — design tokens (pine/brass/cream palette, Fraunces/Inter, custom animations)
  - `netlify.toml` — deploy config (do not remove)

## Design system

- **Palette**: `pine` (deep forest green primary), `brass` (warm gold accent), `cream` (off-white/ivory neutrals), `ink` (near-black text)
- **Type**: Fraunces for editorial headlines (use the `italic` variant for emphasized words — it's a key stylistic move), Inter for body
- **Motion**: subtle and confident only. No bouncy spring animations, no parallax scroll gimmicks. `animate-fade-up`, `animate-pulse-dot`, `animate-progress`, `animate-ticker` are defined in `tailwind.config.ts`.
- **Layout**: max width `1280px`, generous vertical padding (`py-24 lg:py-32` on sections), editorial rules and dot-rules for dividers (`.rule`, `.dot-rule` in `globals.css`)
- **Eyebrow labels**: use the `.eyebrow` class — renders a horizontal rule + uppercase tracked small-caps label. This is a signature element.

## Copy rules

- Speak to brokers, not borrowers.
- Lead with the three differentiators: **one submission / BRM model / firm commitments**.
- Rate ranges shown are *indicative* — always include the disclaimer (already present in `Products.tsx`).
- Trust signals: NHA-approved, rated institutional servicer, Broker Number 13659 (ON), Vaughan HQ.
