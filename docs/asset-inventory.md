# Asset Inventory

All images were extracted byte-for-byte (no re-encoding) from the embedded JPEG streams in `goodwave_profile_v2.pdf`. The untouched originals are kept in `assets-source/pdf-extracted/` (named by PDF object number). No stock or generated imagery is used.

## Logo

| File | Source | Size | Use |
|---|---|---|---|
| `assets-source/pdf-extracted/obj8.jpg` | PDF p.1 (cover), image object 8 | 1019×1019 JPEG, white background | Master logo source |
| `assets-source/pdf-extracted/obj4.jpg` | PDF header on every page, object 4 | 465×466 | Duplicate, lower resolution; not used |
| `assets-source/pdf-extracted/obj300.jpg` | PDF p.12, object 300 | 840×841 | Duplicate; not used |
| `src/assets/brand/good-wave-logo-lockup.png` | obj8, white margins trimmed (sharp) | 829×463 | Footer (on white plate), About page |
| `src/assets/brand/good-wave-mark.png` | obj8, eagle mark only (above wordmark), squared | 530×530 | Header mark (with company name as HTML text) |
| `public/favicon.ico`, `favicon-32/48/192/512.png`, `apple-touch-icon.png` | Derived from the mark | 32–512px | Favicons |

The logo is raster only. A vector or transparent version should be requested for crisper rendering and use on dark backgrounds.

## Project photographs

| File | PDF page / object | Size | Project | Used on |
|---|---|---|---|---|
| `src/assets/projects/tengah-pavilion-steel-frame.jpg` | p.2 and p.6, obj 19 | 878×569 | Tengah PA C1 & CG | Home hero, Tengah card/gallery, Capabilities (structural steel) |
| `src/assets/projects/tengah-linkway-steel-structure.jpg` | p.6–7, obj 117 | 949×569 | Tengah PA C1 & CG | Tengah gallery, Capabilities (site coordination) |
| `src/assets/projects/n110-steel-beam-works.jpg` | p.8, obj 168 | 930×623 | Contract N110 | N110 card/gallery |
| `src/assets/projects/n110-steel-members-excavation.jpg` | p.8, obj 164 | 907×616 | Contract N110 | N110 gallery, Capabilities (temporary works) |
| `src/assets/projects/bukit-merah-railing-installation.jpg` | p.9, obj 197 | 891×588 | Bukit Merah C54 & 54A | Bukit Merah card/gallery, Capabilities (railings) |
| `src/assets/projects/bukit-merah-staircase-railing.jpg` | p.9, obj 201 | 926×595 | Bukit Merah C54 & 54A | Bukit Merah gallery |

Project association follows the PDF page each photo appears on. Astro generates WebP variants at 400/480/640/720px and native width; no variant exceeds the source width. Card images use `alt=""` because the card's linked heading names the project. Gallery, hero and capability images have descriptive alt text.
