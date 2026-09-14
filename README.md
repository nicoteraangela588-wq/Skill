# Allterra

E-commerce SPA for **Allterra**, "Shield" skincare for active mountain sports (skiing,
climbing, trail running). Built with Next.js (App Router), TailwindCSS, and Framer Motion.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (`framer-motion`)
- Phosphor Icons (`@phosphor-icons/react`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `lib/products.ts` — mock product database (8 products across the Départ, Ascension
  and Refuge collections, each with 4 format variants: Normal, Miniature, Recharge
  normale, Recharge miniature).
- `app/` — Next.js App Router pages and layout.
- `.claude/skills/` — Claude Code project skills imported from
  [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), used to keep the
  frontend design on-brand and free of generic "AI-slop" patterns. See
  `.claude/skills/THIRD_PARTY_NOTICE.md` for attribution.
