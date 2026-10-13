# QA Report

**Date:** 2026-10-12
**Environment:** Windows 11 Pro, Node v24.21.0, npm, Astro 7.3.8, headless Google Chrome (DevTools Protocol, scripted), Python 3.14.8 (uv) for the UI UX Pro Max scripts.

## Commands and results

| Check | Command | Result |
|---|---|---|
| Content/type sync | `npx astro sync` | PASS |
| Production build | `npm run build` | PASS: 9 pages, 31 optimised images, fonts self-hosted in `dist/_astro/fonts/` |
| Astro type check | `astro check` | NOT RUN: `@astrojs/check` and `typescript` are not installed (would add dev dependencies) |
| Lint / format | none configured | NOT RUN |
| Local server | `npx astro preview --port 4321` | PASS |

Note: the build downloads Poppins and Open Sans from Google Fonts on first run (cached afterwards), so it needs network access.

## Routes tested (375, 768, 1024, 1440px; scripted Chrome)

`/`, `/about/`, `/capabilities/`, `/projects/`, `/projects/tengah-pa-c1-cg/`, `/projects/contract-n110-north-south-corridor/`, `/projects/bukit-merah-c54-54a/`, `/contact/`, `/does-not-exist/`

| Check | Result |
|---|---|
| HTTP status | PASS: 200 on all pages; 404 route returns HTTP 404 with the custom page |
| Horizontal overflow (`scrollWidth` vs viewport, offending elements) | PASS: none at any width |
| Exactly one H1 per page | PASS |
| Images missing `alt` / broken images | PASS: 0 / 0 |
| Console errors | PASS: none (only the expected 404 resource error on the 404 test) |
| Internal links and assets (all `href`s across all pages, 18 unique) | PASS: all 200 |
| Screenshots reviewed | Home (375/1024/1440), Projects (768), Tengah detail (1440), Bukit Merah detail (375), Capabilities (1440) |

## Interaction and accessibility checks

| Check | Result |
|---|---|
| Mobile menu: closed by default, `aria-expanded=false` | PASS |
| Click opens (`aria-expanded=true`, nav visible) | PASS |
| Escape closes and returns focus to the toggle | PASS |
| Current section exposed via `aria-current` (Projects on detail page) | PASS |
| First Tab focuses visible skip link → `#main` | PASS |
| `tel:+6596644506` links | PASS (format; not dialled) |
| Google Maps link | Format verified (official `maps/search/?api=1` URL, encoded address); not opened in a browser |
| Colour contrast of token pairs (computed WCAG ratios) | PASS: body 13.92:1, muted 5.45:1, white on navy 10.54:1, teal 5.10:1; ochre never used as text on white |
| Reduced-motion | Implemented via CSS media query; NOT emulated in a test |
| Automated axe scan | NOT RUN (not installed) |
| Screen-reader testing | NOT RUN |

## Content accuracy audit (grep of built HTML)

- S$560,000 appears only on Tengah, S$140,000 only on N110 (plus the PDF's range statement on Capabilities), S$1,450,682 only on Bukit Merah. PASS
- Periods are attached to the correct projects and labelled "Estimated period". PASS
- "~700 t" appears only on Home (labelled Tengah) and the Tengah page. PASS
- S$2,150,682 is always labelled "combined stated value" with a "not company turnover" note. PASS
- UEN 202114466R, address and phone match the PDF exactly. PASS
- No email, certification, award, safety statistic, testimonial or completion claims. PASS

## Issues found and fixed during QA

1. Back link and eyebrow ran onto one line on project detail pages → back link made block-level.
2. Missing space in "Client / reference:" → fixed.
3. 2+1 orphan card layout at 768–1023px → three columns from 1024px, horizontal cards on tablet.
4. Capability numbers used ochre text on white (2.98:1) → changed to teal (5.10:1).

## Remaining limitations

- No production domain: no canonical URLs, `og:url`, `og:image` or `sitemap.xml`.
- Logo is a raster JPEG; no vector/transparent version.
- Source photos are ≈900px wide; they are fine for contained layouts but not for full-bleed use.
- Phone is the only contact channel (no email or form in the source).
- Corporate particulars and project data are as supplied in the portfolio and not independently verified.
