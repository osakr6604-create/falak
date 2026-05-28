# Falak (فلك)
**Created:** 2026-05-26

Static product portal hub showcasing Waslny, CV Builder, and TYT.

## Stack
Next.js 14 · Tailwind · Dark space theme · No DB · No auth

## Live URL
https://falakeg.com — custom domain, public (HTTP 200). The raw `*.vercel.app` URL returns 401 (Vercel deployment protection is ON for this project; only the custom domain is public).

## GitHub
github.com/osakr6604-create/falak

## Critical
- **Auto-deploy** — commit + push to github.com/osakr6604-create/falak → Vercel auto-deploys
- Pure static — no env vars, no API routes, no database

## Contact
- **Business email:** contact@falakeg.com (Google Workspace) — serves as customer support until dedicated tooling is set up

## SEO (added 2026-05-29)
- metadataBase/canonical = `https://falakeg.com`. Full openGraph/twitter, JSON-LD `Organization` (layout) + `ItemList` of the 3 products (page).
- `app/icon.svg` (gradient "F" favicon), `app/opengraph-image.tsx` (edge, dark space share card), `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.

## Notes
- App URLs in `app/page.tsx` are already current (Waslny/CV Builder/TYT vercel URLs). Footer © year is now dynamic.
- **TYT is 401-protected** on its `*.vercel.app` URL (Vercel deployment protection) — the "Visit TYT" link from this portal currently hits an auth wall. Fix: TYT Vercel project → Settings → Deployment Protection → disable (cv-builder + waslny are already public/200).
