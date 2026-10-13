# Sitemap

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Positioning, sourced portfolio figures, capabilities, three project cards, company preview, contact CTA |
| `/about/` | `src/pages/about.astro` | Company profile, corporate snapshot, how the company works, audience |
| `/capabilities/` | `src/pages/capabilities.astro` | Four capability sections (anchors `#structural-steel`, `#railings-barriers`, `#temporary-works`, `#site-coordination`) with project links |
| `/projects/` | `src/pages/projects/index.astro` | Project cards and selected project record table with combined stated value |
| `/projects/tengah-pa-c1-cg/` | `src/pages/projects/[id].astro` + `src/content/projects/tengah-pa-c1-cg.md` | Project detail |
| `/projects/contract-n110-north-south-corridor/` | same template + `contract-n110-north-south-corridor.md` | Project detail |
| `/projects/bukit-merah-c54-54a/` | same template + `bukit-merah-c54-54a.md` | Project detail |
| `/contact/` | `src/pages/contact.astro` | Phone, registered office, map link, company details |
| 404 | `src/pages/404.astro` | Not-found page with links to Home, Projects, Capabilities, Contact (`noindex`) |

Header navigation: Home · About · Capabilities · Projects · Contact, plus a "Call" button. The footer repeats the navigation and contact details.

No generated `sitemap.xml` yet: it needs the production domain (`site`) and the `@astrojs/sitemap` integration.
