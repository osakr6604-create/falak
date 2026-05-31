# Falak (فلك)
**Created:** 2026-05-26

Static product portal hub showcasing Waslny, CV Architect, and 5alsana.

## Stack
Next.js 14 · Tailwind · Dark space theme · No DB · No auth

## Live URL
https://falakeg.com — custom domain, public (HTTP 200). The raw `*.vercel.app` URL returns 401 (Vercel deployment protection is ON for this project; only the custom domain is public).

## GitHub
github.com/osakr6604-create/falak

## Critical
- **Auto-deploy** — commit + push to github.com/osakr6604-create/falak → Vercel auto-deploys
- Pure static — no env vars, no API routes, no database
- App URLs in `app/page.tsx` point to falakeg.com subdomains: waslny.falakeg.com, cv.falakeg.com, 5alsana.falakeg.com

## Contact
- **Business email:** contact@falakeg.com (Google Workspace) — serves as customer support until dedicated tooling is set up

## SEO (added 2026-05-29)
- metadataBase/canonical = `https://falakeg.com`. Full openGraph/twitter, JSON-LD `Organization` (layout) + `ItemList` of the 3 products (page).
- `app/icon.svg` (gradient "F" favicon), `app/opengraph-image.tsx` (edge, dark space share card), `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.

## Workflow (2026-05-31)
- **dev → prod branch model.** All work goes on `dev`; `master` is production. Commit to `dev` and push `dev` for a preview deploy. Never push to `master` directly. (Previously this repo pushed straight to master.)

## 2026-05-31 polish (pre-launch)
- Added `app/not-found.tsx` (404) and `app/error.tsx` (client component with `reset()` retry button), both styled to match the dark space theme.
- CV Architect copy on `app/page.tsx` made number-agnostic: dropped the specific template count ("Four"/"4") in both the description and feature badge — now just "Professional templates" (count couldn't be verified cross-repo).
