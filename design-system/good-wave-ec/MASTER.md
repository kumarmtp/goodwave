# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/good-wave-ec/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Good Wave EC
**Generated:** 2026-10-12 21:40:01
**Category:** Construction/Architecture
**Design Dials:** Variance 3/10 (Centered / Minimal) | Motion 2/10 (Subtle) | Density 4/10 (Standard)

---

## Approved Project Overrides — GOOD WAVE E&C PTE. LTD. (reviewed 2026-10-12)

> **Precedence:** This section is the approved design rule set. Where it conflicts with the generated
> baseline below (Global Rules → Anti-Patterns), **this section wins**. Page files in
> `design-system/good-wave-ec/pages/` still override both.
>
> **Generator command:** `search.py "construction contractor corporate navy structural steel" --design-system --persist -p "Good Wave EC" --variance 3 --motion 2 --density 4`
> (first run with the brief's query `"construction engineering contractor corporate portfolio Singapore structural steel"` resolved to the same category, style, pattern and palette).

### Adopted from the generator

- Category **Construction/Architecture**; style **Minimalism & Swiss Style**: strict grid, white space, high contrast, sans-serif, functional.
- Typography **Poppins (headings) + Open Sans (body)**.
- Density 4/10 spacing scale, subtle 150–250ms hover/focus transitions, accessibility checklist.
- Astro stack rules (see "Astro Implementation Rules" below).

### Overridden, and why

| Generated | Approved | Reason |
|---|---|---|
| Grey `#64748B` + safety orange `#EA580C` palette | Brand navy/teal/ochre palette below | Off-brand. Values below are the exact fills used in `goodwave_profile_v2.pdf` content streams; logo navy visually matches `#163F73` (raster JPEG, not pixel-sampled). |
| `.btn-primary` white on `#EA580C` | White on navy `#163F73` | Generated pair measures **3.56:1, fails WCAG AA**; approved pair is 10.54:1. |
| Full-bleed photo hero | Split hero: text + contained photo | Genuine photos are only 878–949px wide; full-bleed at 1440px+ would upscale them visibly. |
| Hero "Proof (logos, certs, stats)" | Documented facts only | No certifications, client logos, testimonials or metrics are supplied. Do not invent them. |
| GSAP ScrollTrigger reveal | CSS transitions only; no scroll reveal | Avoids a JS dependency on a static site and invisible-by-default content. |
| Anti-pattern "2D-only layouts" | Removed | It pushes the dataset's "3D & Hyperrealism" secondary style, which does not suit this brand. |
| Radius 8–16px, `transition: all`, pointer on all cards | Radius 2–4px; transition named properties; pointer only on real links/buttons | Swiss precision; avoids fake affordances. |

### Color tokens (source: PDF vector fills)

| Token | Hex | Use | Contrast (measured) |
|---|---|---|---|
| `--color-brand` | `#163F73` | Primary: logo navy, headings, primary buttons, links | 10.54:1 on white |
| `--color-brand-strong` | `#163A63` | Footer / dark bands, button hover | white on it 11.54:1 |
| `--color-brand-mid` | `#2F6EA5` | Focus ring on light surfaces, secondary accents | 5.39:1 on white |
| `--color-teal` | `#1D7A7A` | Secondary accent: capability markers, small labels | 5.10:1 on white |
| `--color-ochre` | `#C58A2A` | Decorative rules, dividers, focus ring on navy. **Never body text on white** | 2.98:1 on white (fail); 3.87:1 on `#163A63` (UI/large only) |
| `--color-text` | `#1F2937` | Body text | 13.92:1 on `#F7F9FC` |
| `--color-text-muted` | `#5B6777` | Captions, metadata | 5.45:1 on `#F7F9FC` |
| `--color-bg` | `#FFFFFF` | Page background | — |
| `--color-surface` | `#F7F9FC` | Alternating sections, data panels | — |
| `--color-tint` | `#EAF0F8` | Subtle highlights, text on navy | 9.19:1 on `#163F73` |
| `--color-border` | `#D8E2ED` | Hairlines, card borders (decorative, not the only state cue) | — |
| `--color-on-brand` | `#FFFFFF` | Text on navy/teal | ≥5.10:1 |

Light mode only for launch. The PDF and logo are light-surface artwork.

### Typography

- Headings: `Poppins` 600/700; body: `Open Sans` 400/600. Fallback `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **Self-host** (woff2 in `public/fonts/` or the Astro fonts API) with `font-display: swap` and preload of the heading weight. Do not use the render-blocking `@import` above.
- Scale (rem): 0.875 / 1 (body, 16px min) / 1.125 / 1.375 / 1.75 / 2.25 / 3 (h1 desktop, clamp down to 2.25 on mobile). Body line-height 1.6, headings 1.15–1.25; line length 60–75ch.
- Project values and dates use `font-variant-numeric: tabular-nums`.

### Layout, spacing, shape

- Container max-width `1200px`; side padding 16px (mobile) / 24px (tablet) / 32px (desktop). 12-column grid, 24px gutter.
- Breakpoints: 375 (min tested), 768, 1024, 1440.
- Spacing: generated `--space-*` scale; section vertical padding `--space-3xl` desktop / `--space-2xl` mobile.
- Radius: `--radius-sm: 2px` (inputs, chips), `--radius-md: 4px` (cards, buttons, images).
- Shadows: borders first. Only `--shadow-sm` on resting cards and `--shadow-md` on hover for linked cards; no `--shadow-xl`.

### Imagery

- Use only genuine assets: logo (PDF image, 1019×1019 JPEG) and the six site photos extracted from the PDF. No stock photos presented as company work.
- Ratios: project cards and galleries `3:2` (`object-fit: cover`, check crops keep the subject); logo `1:1` source, shown cropped to its mark/wordmark area.
- Never render photos above their native width (≈ 900px). Use Astro `<Picture>` (AVIF/WebP + JPEG fallback) with widths ≤ native.
- The logo is a JPEG on a white field: place it only on white surfaces. On navy, use a white plate, or obtain a vector/transparent logo (open request).
- Informative photos get descriptive alt text naming the project and visible work; decorative imagery gets `alt=""`.

### Page pattern (homepage)

Header (logo, nav, "Contact" button) → Split hero (positioning line from PDF + one project photo + primary CTA "View projects", secondary "Contact") → Capabilities strip (PDF work categories) → Selected projects (3 cards: name, client, stated period, estimated value) → Company snapshot (UEN, incorporation date, registered office: PDF facts only) → Contact CTA band (navy) → Footer.

- Project cards show the period and value **as stated / estimated in the PDF**. No "Completed" badge or status claim unless the user confirms it.
- Portfolio total labelled "Combined stated value of selected projects".

### Components (approved specs)

- **Primary button:** bg `--color-brand`, text white, 12px 24px, radius 4px, weight 600; hover bg `--color-brand-strong`; min height 44px.
- **Secondary button:** transparent, 2px border + text `--color-brand`; hover bg `--color-tint`.
- **Focus:** `outline: 3px solid var(--color-brand-mid); outline-offset: 2px` on light; `--color-ochre` outline on navy. Never `outline: none` without replacement.
- **Card:** bg white, 1px `--color-border`, radius 4px. If the whole card is a link: hover `--shadow-md` + border `--color-brand`, no translate.
- **Data list (project facts):** `<dl>` with muted label / strong value rows, tabular numerals.

### Motion

- CSS only. Transition `color, background-color, border-color, box-shadow` at 150–250ms ease-out.
- No scroll-triggered reveals, parallax, auto-rotating carousels or autoplay video.
- `@media (prefers-reduced-motion: reduce)`: remove all transitions and transforms.

### Astro Implementation Rules (from `--stack astro`, dataset verified for astro 7.1.6; project uses ^7.3.8)

- `.astro` components for all static markup; no React/Vue/Svelte integration (High).
- Projects as a **content collection** with a schema, read via `getCollection()` (High).
- Detail pages through `getStaticPaths()` (High).
- Local images through `astro:assets` `<Image />` / `<Picture />`, not raw `<img>` (High / Medium).
- Islands only where interaction is required (e.g. mobile nav toggle, if not done with CSS/`<details>`); prefer `client:visible` / `client:idle` over `client:load`.
- Preload the critical font and the hero image; TypeScript strict (already enabled).
- `set:html` only for trusted content.
- Note: the brief's query `"responsive corporate project portfolio" --stack astro` returned **no database match**; the rules above come from the retry queries `"image optimization static pages"`, `"projects content collections layout"` and `"client javascript islands fonts"`.

### Project anti-patterns (in addition to the baseline list)

- Invented claims: certifications, awards, safety stats, staff counts, testimonials, client logos, "completed" status.
- Stock construction imagery; upscaled or heavily filtered photos.
- AI gradients, glassmorphism, decorative blobs, over-rounded cards, emoji icons.
- Safety-orange UI. Orange/ochre is decorative only.

---

## Generated Baseline (superseded where the overrides above differ)

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#64748B` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#94A3B8` | `--color-secondary` |
| On Secondary | `#0F172A` | `--color-on-secondary` |
| Accent/CTA | `#EA580C` | `--color-accent` |
| On Accent/CTA | `#000000` | `--color-on-accent` |
| Background | `#F8FAFC` | `--color-background` |
| Foreground | `#334155` | `--color-foreground` |
| Card | `#FFFFFF` | `--color-card` |
| Card Foreground | `#334155` | `--color-card-foreground` |
| Muted | `#EBF0F5` | `--color-muted` |
| Muted Foreground | `#475569` | `--color-muted-foreground` |
| Border | `#E2E8F0` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#64748B` | `--color-ring` |

**Color Notes:** Industrial grey + safety orange [Accent adjusted from #F97316]

### Typography

- **Heading Font:** Poppins
- **Body Font:** Open Sans
- **Mood:** modern, professional, clean, corporate, friendly, approachable
- **Google Fonts:** [Poppins + Open Sans](https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
```

### Spacing Variables

*Density: 4/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #EA580C;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #64748B;
  border: 2px solid #64748B;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F8FAFC;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #64748B;
  outline: none;
  box-shadow: 0 0 0 3px #64748B20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Minimalism & Swiss Style

**Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential

**Best For:** Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools

**Key Effects:** Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading

### Page Pattern

**Pattern Name:** Hero-Centric Design

- **Conversion Strategy:** One primary CTA. Let the hero dominate the initial viewport without hiding the next content cue. Use a static hero and non-pulsing CTA when reduced motion is requested; provide video controls. Pause hero media offscreen/hidden and keep the final hero message and CTA static under reduced motion.
- **CTA Placement:** Hero dominant (center/bottom) + Sticky nav CTA
- **Section Order:** Full-bleed Hero (headline + visual) > Single value prop strip > Key benefit or proof > Primary CTA

---

## Motion

**Scroll Reveal** (Subtle) — Trigger: scroll (viewport enter) | Duration: 300-400ms | Easing: `power1.out`

```js
gsap.from(el, { opacity: 0, y: 12, duration: 0.35, ease: 'power1.out', scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
```

**Framework notes:** Requires the ScrollTrigger plugin registered once via gsap.registerPlugin(ScrollTrigger); Use matchMedia('(prefers-reduced-motion: reduce)') to skip non-essential motion and render the final state immediately

- ✅ Keep the y offset small (8-16px) so it reads as a fade, not a slide
- ❌ Don't reveal below-the-fold content needed for SEO/crawlers as invisible-by-default without a no-JS fallback
- ⚡ toggleActions 'play none none reverse' avoids re-triggering on every scroll direction change

---

## Anti-Patterns (Do NOT Use)

- ❌ 2D-only layouts
- ❌ Poor image quality
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
