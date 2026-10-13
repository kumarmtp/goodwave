# Design Direction

Approved rule set: `design-system/good-wave-ec/MASTER.md` → "Approved Project Overrides" (approved by the user on 2026-10-12).

## UI UX Pro Max output and what was adopted

- Generator: `search.py "construction contractor corporate navy structural steel" --design-system --persist -p "Good Wave EC" --variance 3 --motion 2 --density 4`. Category Construction/Architecture.
- **Adopted:** Minimalism & Swiss Style; Poppins (headings) + Open Sans (body); standard-density spacing scale; subtle 150–250ms transitions; accessibility checklist; Astro stack rules (static `.astro` components, content collection + `getStaticPaths`, `astro:assets` images, minimal islands).
- **Overridden** (reasons in MASTER.md): grey/safety-orange palette → PDF brand palette; generated primary button (3.56:1, fails AA) → white on navy (10.54:1); full-bleed hero → split hero (photos ≈900px wide); GSAP scroll reveals → CSS only; 8–16px radii → 2–4px; "proof: logos/certs" → documented facts only.

## Colour tokens (exact PDF vector fills)

Navy `#163F73` (brand), dark navy `#163A63` (footer), mid blue `#2F6EA5` (focus ring), teal `#1D7A7A` (eyebrows, numbers, markers), ochre `#C58A2A` (decorative rules and focus ring on navy only, never text on white), text `#1F2937`, muted `#5B6777`, surface `#F7F9FC`, tint `#EAF0F8`, border `#D8E2ED`. Implemented in `src/styles/global.css`.

## Typography

Self-hosted at build time with the Astro Fonts API (Google provider): Poppins 600/700, Open Sans 400–600. Fallback `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`, with Astro's metric-adjusted fallbacks. The 700 heading and 400 body weights are preloaded. Fluid H1/H2 with `clamp()`; tabular numerals for values and dates.

## Header and footer

- Sticky white header: eagle mark + "GOOD WAVE E&C / PTE. LTD." as text, five nav links (current page and section marked with an ochre underline and `aria-current`), and a "Call +65 96644506" button.
- Below 1024px the nav collapses behind a "Menu" button (`aria-expanded`, Escape closes it and returns focus). Without JS the nav stays visible.
- Dark-navy footer: logo on a white plate, description, UEN, nav, phone and registered office.

## Patterns

- **Hero:** text left, contained 3:2 photo right with an ochre base rule and caption.
- **Metrics strip:** four sourced figures with a left navy rule and an explicit "not company turnover" note.
- **Capabilities:** numbered four-column ruled list (home); alternating text/photo rows (Capabilities page).
- **Project cards:** white, 1px border, 4px radius; the whole card is a link via the heading. Hover/focus gives a navy border and soft shadow, with no movement. Three columns from 1024px, horizontal cards on tablet, stacked on mobile.
- **Project detail:** overview and scope + sticky "Project information" `<dl>` with a status disclaimer; two-photo gallery (no lightbox); related-capability links; prev/next.
- **CTA band:** navy with ochre top rule; white "Call" button + outline "Contact details".

## Accessibility and motion

Skip link; landmarks; one H1 per page; logical headings; 44px minimum touch targets; visible 3px focus rings; `prefers-reduced-motion` removes all transitions; the scrollable table region is focusable and labelled; external map link announces that it opens a new tab.

## Deviations from the skill's checklist

- `cursor: pointer` is applied only to real buttons/links (native default), not to non-interactive cards.
- Light mode only. The brand artwork is light-surface, and dark mode was not in scope.
