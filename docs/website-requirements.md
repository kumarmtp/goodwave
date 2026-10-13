# Website Requirements

Source of truth: `goodwave_profile_v2.pdf` (12 pages, "Project Portfolio 2026"). Text was extracted from the PDF content streams and all embedded images were inspected (2026-10-12).

## Purpose and audience

Corporate website for **GOOD WAVE E&C PTE. LTD.** presenting company particulars, capabilities and three selected project records. Audience stated in the PDF (p.5, p.12): clients, main contractors, consultants and procurement teams, for tendering, prequalification and business development discussions.

## Company facts (PDF p.4, p.12)

| Fact | Value |
|---|---|
| Legal name | GOOD WAVE E&C PTE. LTD. |
| Description | Singapore-registered building construction contractor |
| Entity type | Singapore Private Company Limited by Shares |
| UEN | 202114466R |
| Incorporated | 22 April 2021 |
| Status | Live Company |
| Paid-up capital | SGD 100,000 |
| Previous name | APR ENGINEERING |
| Business activity (principal and secondary) | General Contractors (Building Construction including Major Upgrading Works) |
| Registered office | 740 Pasir Ris Street 71, #02-55, Singapore 510740 |
| Phone | +65 96644506 |
| Tagline (p.1, p.3) | "Engineering · Construction · Steel Works"; "Building with precision. Delivering with discipline." |

The PDF notes the corporate particulars were "supplied for this portfolio by the client". They have **not** been independently verified against ACRA.

## Projects (PDF p.6–9, p.11)

| Project | Client / reference | Period (PDF: "estimated duration") | Estimated value | Key metric |
|---|---|---|---|---|
| Tengah PA C1 & CG | Teambuild Engineering & Construction Pte Ltd | Feb–Nov 2026 | S$560,000 | ~700 t steel structure |
| Contract N110 — North-South Corridor | Lum Chang Building Contractors Pte. Ltd. | Jul–Oct 2026 | S$140,000 | Zone 3 |
| Bukit Merah C54 & 54A | Teambuild Engineering & Construction Pte Ltd | Apr 2026–2029 | S$1,450,682 | 1,462 residential units (development) |

- Combined stated value: S$2,150,682 = S$560,000 + S$140,000 + S$1,450,682. The PDF explicitly says this is a portfolio summary, **not company turnover**.
- Extra Tengah facts (p.7): 1,004 residential units in Part 1; 716-lot multi-storey carpark.
- N110 location (p.8): between Ang Mo Kio Avenue 3 and Ang Mo Kio Avenue 9.
- Bukit Merah location (p.9): Alexandra Road / Prince Charles Crescent.
- No completion status is stated for any project. The site shows periods as "estimated" and makes no status claim.

## Capabilities (PDF p.3, p.10)

Structural steel; Railings & barriers; Temporary works (incl. steel drain works); Site coordination. Plus the four "What this portfolio demonstrates" points (p.10).

## Pages

`/`, `/about/`, `/capabilities/`, `/projects/`, `/projects/tengah-pa-c1-cg/`, `/projects/contract-n110-north-south-corridor/`, `/projects/bukit-merah-c54-54a/`, `/contact/`, custom 404.

## Functional, accessibility, SEO and performance requirements

- Static Astro site; JS only for the mobile menu toggle.
- WCAG AA contrast, visible focus, skip link, landmarks, one H1 per page, alt text on informative photos, reduced-motion support.
- Phone via `tel:+6596644506`; no invented email, form, social links or opening hours.
- Per-page title/description; Open Graph text tags; Organization JSON-LD with sourced facts only.
- Canonical URLs and absolute OG images only once the production domain is known (`site` in `astro.config.mjs`).
- Optimised responsive images (`astro:assets`), never upscaled beyond the ~900px source width.

## Missing information / open questions

1. **Production domain**: needed for canonical URLs, `og:url`/`og:image` and a sitemap.
2. **Email address / enquiry form backend**: not in the PDF; the site uses phone only.
3. **Vector or transparent logo**: only a JPEG on white exists; the footer uses a white plate.
4. **Project status**: completion or progress is not stated; confirm before any status labels are added.
5. **Higher-resolution photos**: the source photos are 878–949px wide, which limits large hero use.
6. **Location for Tengah PA C1 & CG**: no street location is given in the PDF.
