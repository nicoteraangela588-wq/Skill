# Skill

Project skills for Claude Code, imported from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill).

These are installed under `.claude/skills/` so Claude Code picks them up automatically
in this project. The main one to know about:

- **`design-taste-frontend`** (`.claude/skills/taste-skill/`) — anti-slop frontend design
  skill for landing pages, portfolios, and redesigns. Reads the brief, infers a design
  direction, and ships interfaces that don't look templated.

Other bundled skills, all focused on frontend/web design taste:

| Skill | Purpose |
|---|---|
| `taste-skill-v1` | Original v1 of the taste skill, kept for backward compatibility |
| `gpt-tasteskill` | Awwwards-level design + GSAP motion engineering |
| `image-to-code-skill` | Generates reference design images, then implements code to match |
| `imagegen-frontend-web` | Generates premium website design reference images (no code) |
| `imagegen-frontend-mobile` | Generates premium mobile app screen concepts (no code) |
| `brandkit` | Generates brand-guidelines boards, logo systems, identity decks |
| `redesign-skill` | Audits and upgrades existing sites/apps to premium quality |
| `soft-skill` | Expensive, soft UI look — premium fonts, whitespace, depth |
| `output-skill` | Prevents lazy/truncated/placeholder code output |
| `minimalist-skill` | Clean, editorial, monochrome interfaces |
| `brutalist-skill` | Raw, Swiss-typography, industrial/tactical UI |
| `stitch-skill` | Google Stitch-compatible semantic design rules |

Claude Code loads these automatically for tasks that match their descriptions — just ask
for a website, landing page, redesign, etc. and the relevant skill kicks in.

See `.claude/skills/THIRD_PARTY_NOTICE.md` for license/attribution details (MIT, © Leonxlnx).
