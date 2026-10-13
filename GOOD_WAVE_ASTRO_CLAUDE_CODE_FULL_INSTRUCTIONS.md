# Claude Code Implementation Instructions
## GOOD WAVE E&C PTE. LTD. — Astro Website with UI UX Pro Max

**Purpose:** Build a polished, responsive, production-ready corporate website for GOOD WAVE E&C PTE. LTD. using Astro and the UI UX Pro Max skill.

**Primary source of truth:** `goodwave_profile_v2.pdf` supplied by the user. Read the entire PDF, including project photography and page layouts, before writing website copy or implementation code.

**Required framework:** Astro. Do not replace it with Next.js, React as the primary framework, or another framework. Astro components and pages should be the default. Add client-side JavaScript only where a real interaction requires it.

**Required design skill:** `ui-ux-pro-max` from https://github.com/nextlevelbuilder/ui-ux-pro-max-skill. Use its design-system generator, Astro stack guidance, relevant UX/accessibility guidance, and focused searches as described below.

---

# Rules that must be followed throughout

1. **Inspect before changing.** Inspect the repository, package scripts, assets, PDF, and existing conventions. If this is an existing project, do not overwrite or restructure unrelated work.
2. **Use the PDF as the content source.** Do not invent certifications, licences, awards, safety statistics, staff counts, equipment inventories, testimonials, client endorsements, project completion claims, or performance metrics.
3. **Preserve project status and qualifiers.** Dates, values, tonnage, project descriptions, and amounts in the PDF may be estimates or scheduled periods. Label them accordingly. Do not imply a future or ongoing project is completed.
4. **Do not invent missing details.** Keep an explicit list of questions or content gaps. Use neutral wording or omit unverified claims until the user confirms them.
5. **Keep the company identity.** Use the supplied Good Wave logo and genuine project photos if they are available from the PDF or supplied assets. Do not replace the logo with a generated imitation. Do not use unrelated stock construction images as if they were company projects.
6. **No fake functionality.** Every button, link, menu, filter, contact action, and form must work. If no backend/email service is configured, make the limitation explicit and use a real mailto/contact link or clearly documented placeholder rather than pretending to submit.
7. **No destructive commands without permission.** Never delete user files, overwrite existing work, run deployments, publish to production, or change DNS/secrets without explicit approval.
8. **Use Astro appropriately.** Prefer static rendering and semantic HTML. Avoid adding React/Vue/Svelte integrations unless there is a clear requirement and the user approves the extra complexity.
9. **Do not stop at planning.** Continue through implementation and verification, following each phase in order. If a major content ambiguity blocks a factual claim, ask a concise question or leave that claim out while proceeding with the rest.
10. **Report actual test results.** Do not claim that a command, browser check, or test passed unless it was actually run and its output inspected.

# Phase 1 — Repository and requirements discovery

## Step 1.1: Inspect the environment
- Print the current working directory and inspect the top-level file structure.
- Check for `package.json`, lockfiles, `astro.config.*`, `tsconfig.json`, `src/`, `public/`, existing routes, CSS, tests, and README.
- Check Git status before making changes. Preserve all existing uncommitted work.
- Identify whether this is an existing Astro project or a new/empty project.
- Locate the supplied PDF and any accompanying logo or project images. Read all 12 pages of `goodwave_profile_v2.pdf`; inspect both extracted text and embedded page images.
- If the PDF path differs in the user's environment, locate it from the supplied project files rather than guessing a path.

## Step 1.2: Extract and organize requirements
Create `docs/website-requirements.md` containing:
- Company identity and intended website purpose.
- Target audiences: main contractors, clients, consultants, procurement teams, and business-development contacts, based on the PDF.
- Required pages and sections.
- Project records and exact data/qualifiers.
- Existing assets and asset attribution/source.
- Missing information and assumptions.
- Functional requirements, accessibility, SEO, performance, and responsive expectations.

Do not start visual implementation until this inventory exists.

## Step 1.3: Record source facts accurately
Use these facts from the supplied portfolio, preserving spelling and qualifiers:

### Company
- Legal name: GOOD WAVE E&C PTE. LTD.
- Description in portfolio: Singapore-registered building construction contractor.
- UEN: 202114466R.
- Incorporation date: 22 April 2021.
- Status stated in PDF: Live Company; Private Company Limited by Shares.
- Paid-up capital stated in PDF: SGD 100,000.
- Registered office: 740 Pasir Ris Street 71, #02-55, Singapore 510740.
- Contact number: +65 96644506.
- Main work categories described: structural steel installation, linkways, drop-off porches, pavilions, staircase/corridor/AC ledge railings, crash barriers, temporary works, steel drain works, and site coordination.
- Previous name stated in PDF: APR ENGINEERING. Include only where useful and do not imply it is the current brand.

### Project 1
- Name: Tengah PA C1 & CG.
- Client/reference: Teambuild Engineering & Construction Pte Ltd.
- Period: February–November 2026.
- Estimated value: S$560,000.
- Steel structure installation: approximately 700 tonnes.
- Scope: steel structures for linkways, drop-off porch and pavilion elements; site work in a high-density residential development; coordination with completed and ongoing building works.
- PDF describes a proposed public housing development with multiple residential blocks, a multi-storey carpark, roof garden, ESS, commercial/social communal facilities, precinct pavilions, and green areas.
- Do not claim the project is completed unless the user supplies confirmation.

### Project 2
- Name: Contract N110 — North-South Corridor.
- Client/reference: Lum Chang Building Contractors Pte. Ltd.
- Period: July–October 2026.
- Estimated value: S$140,000.
- Work zone: Zone 3.
- Scope: temporary works associated with the infrastructure programme, including Zone 3 steel drain works.
- The PDF describes the wider tunnel project between Ang Mo Kio Avenue 3 and Ang Mo Kio Avenue 9.
- Do not claim completion unless verified by the user.

### Project 3
- Name: Bukit Merah C54 & 54A.
- Client/reference: Teambuild Engineering & Construction Pte Ltd.
- Period: April 2026–2029.
- Estimated value: S$1,450,682.
- Development information in PDF: five high-rise residential blocks totalling 1,462 units, social/communal facilities, multi-storey carpark with commercial facilities and roof garden, precinct pavilions, ESS, and underground detention tanks at Alexandra Road / Prince Charles Crescent.
- Scope: staircase and AC ledge railing installation; corridor railing and crash-barrier installation; linkway, pavilion and drop-off porch works.
- Treat the period and value as stated/estimated in the portfolio, not proof of completion.

### Portfolio summary
- Total stated project value: S$2,150,682, calculated as S$560,000 + S$140,000 + S$1,450,682.
- Label this as “combined stated value of selected projects” or similarly precise wording. Do not present it as annual turnover, revenue, or company valuation.
- The PDF states three selected projects and project periods spanning 2026–2029.

If any value, date, spelling, or status differs in a newer user-supplied source, stop and ask which source should take precedence rather than silently reconciling it.

# Phase 2 — Install and verify UI UX Pro Max

## Step 2.1: Verify installation
- Check whether the `ui-ux-pro-max` skill already exists in the project/global Claude Code skills.
- Read its `SKILL.md` and follow the installed skill's instructions.
- Do not install a duplicate if it is already available and current.
- If absent, explain that the user must approve/run the installation. The repository documents either:
  - Claude Code marketplace:
    `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill`
    `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`
  - CLI:
    `npm install -g ui-ux-pro-max-cli`
    `uipro init --ai claude`
- Do not run OS package managers or install Python/system software without user involvement.
- Check Python 3 availability before running the skill's Python search script. On Windows use `python` if `python3` is unavailable. If Python is missing, ask the user to install it or continue using the skill's documented quick-reference guidance without pretending the search script ran.

## Step 2.2: Generate the project design system
Use the installed script path, not a guessed path. The common project-local path is:
`.claude/skills/ui-ux-pro-max/scripts/search.py`

From the project root, run a design-system search with an intent similar to:
`python .claude/skills/ui-ux-pro-max/scripts/search.py "construction engineering contractor corporate portfolio Singapore structural steel" --design-system -p "Good Wave E&C" -f markdown`

Use `python3` instead of `python` if appropriate for the environment. Confirm flags against the installed script's help if they differ.

Also retrieve Astro-specific guidance:
`python .claude/skills/ui-ux-pro-max/scripts/search.py "responsive corporate project portfolio" --stack astro`

Run focused searches where useful, for example:
- `"corporate construction navigation and project cards" --domain landing`
- `"accessible navigation focus contrast" --domain ux`
- `"construction project portfolio typography" --domain typography`
- `"project photography image layout" --domain style`
Use the installed script's valid domains and options; do not assume a query succeeded without reading the output.

## Step 2.3: Persist the design system
- Save the approved system under `design-system/good-wave-ec/MASTER.md` using the skill's supported `--persist` and `--output-dir` options, if available.
- Read the generated file and verify that it fits a Singapore construction contractor, not a generic SaaS, beauty, or e-commerce product.
- Do not overwrite an existing design-system file without reading it and preserving the user's existing choices.
- Record tokens for brand colors, typography, spacing, page width, border/radius, shadows, image ratios, responsive breakpoints, and motion.
- Prefer the existing navy/blue brand identity visible in the supplied logo and PDF. The portfolio also uses teal and ochre/gold as accent colors. Confirm precise logo colors from the actual logo asset if possible; do not claim exact brand hex values without checking.
- Aim for a restrained, confident, engineering-led visual language: strong grid, generous whitespace, precise alignment, real construction photography, legible headings, and clear project data.
- Avoid generic AI gradients, excessive glassmorphism, decorative blobs, over-rounded cards, gratuitous animation, emoji icons, and template-like stock imagery.
- Keep motion subtle and respect `prefers-reduced-motion`.

## Step 2.4: Create a design decision record
Create `docs/design-direction.md` recording:
- Design-system output and which parts were adopted.
- Brand color tokens and evidence/source.
- Typography and fallback fonts.
- Header/footer behavior.
- Sitemap and section order.
- Card, gallery, CTA, and metric patterns.
- Accessibility and motion rules.
- Any deviations from UI UX Pro Max recommendations and why.

# Phase 3 — Sitemap, content model, and architecture

## Step 3.1: Build a sitemap
Create `docs/sitemap.md`. Suggested pages:
1. `/` — Home: concise positioning, capabilities, selected projects, credibility based on documented facts, and contact CTA.
2. `/about/` — Company profile, corporate snapshot, project approach, and business activities.
3. `/projects/` — Overview/list of the three selected projects.
4. `/projects/tengah-pa-c1-cg/` — Tengah project detail.
5. `/projects/contract-n110-north-south-corridor/` — Contract N110 project detail.
6. `/projects/bukit-merah-c54-54a/` — Bukit Merah project detail.
7. `/capabilities/` — Structural steel, railings/barriers, temporary works, and site coordination.
8. `/contact/` — Registered office, phone, and contact actions.
9. Custom 404 page.

You may consolidate pages only if there is a clear user-experience reason. Ensure every required project remains easy to discover and has a detailed record.

## Step 3.2: Plan Astro architecture
Prefer a structure like this, adapting to the existing repository if necessary:

```text
src/
  components/
    Header.astro
    Footer.astro
    Container.astro
    Button.astro
    SectionHeading.astro
    ProjectCard.astro
    ProjectMetrics.astro
    ProjectGallery.astro
    ContactCTA.astro
  layouts/
    BaseLayout.astro
    ProjectLayout.astro
  pages/
    index.astro
    about.astro
    capabilities.astro
    contact.astro
    projects/
      index.astro
      tengah-pa-c1-cg.astro
      contract-n110-north-south-corridor.astro
      bukit-merah-c54-54a.astro
    404.astro
  content/
    projects/
      tengah-pa-c1-cg.md
      contract-n110-north-south-corridor.md
      bukit-merah-c54-54a.md
  styles/
    global.css
public/
  images/
  favicon.svg
docs/
  website-requirements.md
  design-direction.md
  sitemap.md
  asset-inventory.md
  QA-REPORT.md
design-system/
  good-wave-ec/
    MASTER.md
```

This is a proposed structure, not a requirement to duplicate files that already exist. If Astro Content Collections are used, implement their current schema correctly and validate content.

## Step 3.3: Create an asset inventory
Create `docs/asset-inventory.md`:
- List the logo and each extracted/available project image.
- Record the source page and associated project.
- Use descriptive lowercase kebab-case filenames.
- Preserve original files and do not overwrite them.
- If images must be extracted from the PDF, do so into a new working asset directory. Inspect each extracted image for resolution and correctness.
- Do not use screenshots of whole PDF pages as website content. Extract usable photographs/logo where technically possible.
- If a suitable image cannot be extracted, show an honest neutral placeholder and document the missing asset; do not fabricate a project photograph.
- Provide meaningful alt text for informative photos; use empty alt text for decorative images.

# Phase 4 — Astro setup and foundational implementation

## Step 4.1: Preserve or initialize the project
- If an Astro project exists, retain its compatible dependencies and conventions.
- If no project exists, initialize a minimal Astro project using the official current Astro setup approach, after checking the user's environment and getting approval before installing packages.
- Use the existing package manager and lockfile.
- Do not introduce a large UI framework just for convenience.
- Use TypeScript if the project already uses it or it adds value without unnecessary complexity.
- Keep client-side JavaScript minimal. Prefer CSS and native browser features for menus, accordions, and galleries where feasible.

## Step 4.2: Establish global design tokens
Implement CSS custom properties based on `design-system/good-wave-ec/MASTER.md`, for example:
- `--color-brand-primary`
- `--color-brand-secondary`
- `--color-accent`
- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-border`
- spacing scale
- content max-width
- typography scale
- focus ring
- transition duration

Do not blindly copy example hex codes from the skill documentation. Use the generated Good Wave system and verify brand assets. Ensure text/background combinations meet WCAG AA contrast for normal text (4.5:1) and large text (3:1).

## Step 4.3: Build the base layout
Implement:
- Semantic document structure and page landmarks.
- Consistent responsive header and footer.
- Correct `<html lang="en-SG">` or another justified language value.
- Per-page title, description, canonical URL strategy if the production domain is known, and social metadata.
- Favicon based on the supplied logo/brand, not an unrelated icon.
- Visible keyboard focus and skip-to-content link.
- Responsive container and consistent spacing.
- No horizontal overflow at narrow widths.
- Avoid layout shifts from images by setting dimensions/aspect ratios.

## Step 4.4: Navigation behavior
- Header links should lead to actual pages.
- Current page state should be visually indicated and exposed accessibly.
- Mobile menu, if implemented, must open and close using keyboard and touch; support Escape and sensible focus behavior.
- Phone number should use `tel:+6596644506`.
- Email link must not be invented because the source PDF does not provide an email address.
- External links should be descriptive and safe.

# Phase 5 — Implement pages in the required order

## Step 5.1: Home page
Build a premium corporate homepage with:
1. Header with logo and primary navigation.
2. Hero using genuine construction/project imagery when available, with clear headline such as “Engineering, Construction & Steel Works”.
3. Supporting copy grounded in the portfolio: specialist construction packages across structural steel, railings/barriers, temporary works, and associated site works.
4. Primary CTA: “Explore Our Projects”; secondary CTA: “Contact Us”.
5. A compact credibility/statistics area using only sourced information:
   - 3 selected projects.
   - S$2,150,682 combined stated value of selected projects, explicitly not company turnover.
   - Project periods stated as 2026–2029.
   - Approximately 700 tonnes of steel structure installation for Tengah, clearly attached to that project.
6. Capability overview.
7. Three featured project cards with correct names, client references, scope summary, period, estimated value, and genuine project images.
8. Company/about preview.
9. Clear contact CTA and footer.

Do not use unverified slogans like “Singapore’s leading contractor”, “zero accidents”, “100% on-time delivery”, or similar unsupported claims.

## Step 5.2: About page
Include:
- Company name and business description.
- Corporate snapshot with facts exactly as provided in the PDF.
- Main business activity described as general contracting/building construction including major upgrading works.
- Practical explanation of the company's documented project work.
- A clear note or phrasing that the project pages show selected portfolio records.
- Do not present ACRA details as independently verified unless verification was actually performed.

## Step 5.3: Projects index
- Present all three projects in a consistent card/grid/list.
- Provide accessible filters only if they add real value and are fully functional. Do not add inert filter controls.
- Clearly distinguish project type, client/reference, period, and estimated value.
- Include links to the three detail pages.
- Design empty/no-results states if filtering is implemented.

## Step 5.4: Project detail pages
Use one reusable Astro project layout and structured project data.
Every project page should include:
- Project name and client/reference.
- Status-safe period wording (e.g. “Scheduled period” or “Period stated in portfolio” where useful).
- Genuine project images with responsive gallery and useful alt text.
- Overview and work scope.
- Metrics, clearly labeled as estimated or approximate where the source does so.
- Related capabilities.
- Back-to-projects link and contact CTA.
- Image lightbox only if keyboard/touch accessible, closable with Escape, and focus-safe. Otherwise use a simple responsive gallery.

Project-specific data must match Phase 1. Avoid copying unrelated project facts between pages.

## Step 5.5: Capabilities page
Create clear capability sections:
1. Structural steel installation.
2. Railings and barriers: staircase, corridor, AC ledge, and crash-barrier applications.
3. Temporary works and steel drain works.
4. Site coordination across residential and infrastructure environments.

Describe only capabilities supported by the portfolio. Do not infer design engineering, fabrication capacity, BCA grades, ISO certification, licensed specialist status, or other qualifications not supplied.

## Step 5.6: Contact page
Display:
- GOOD WAVE E&C PTE. LTD.
- Registered office: 740 Pasir Ris Street 71, #02-55, Singapore 510740.
- Phone: +65 96644506 with a `tel:` link.
- UEN 202114466R where relevant.
- Contact CTA that works.
- Optional map link only if the address is correctly encoded and the link is tested.
- Do not invent email, opening hours, social accounts, or a web form endpoint.
If a contact form is desired but there is no backend, ask the user which service/backend to use. Do not collect or silently send data to an unconfigured service.

## Step 5.7: 404 page
Create a branded, accessible not-found page with working links to Home, Projects, Capabilities, and Contact.

# Phase 6 — Visual quality and interactions

## Step 6.1: Follow the generated design system
- Read `design-system/good-wave-ec/MASTER.md` before each page implementation.
- If page-specific override files are created, read the page override and apply it only where it intentionally differs from the master.
- Maintain a coherent header, footer, grid, buttons, heading scale, card treatment, and image language across pages.
- Do not implement every section as the same repeated white rounded card. Use hierarchy, spacing, imagery, and grid composition.
- Ensure the website looks like a real engineering/construction company site, not a SaaS dashboard.

## Step 6.2: Responsive implementation
Check at minimum:
- 375px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.
Also check a wider desktop if practical.
Requirements:
- No clipped headings, chips, buttons, tables, or long project names.
- Project metric rows stack sensibly on mobile.
- Images maintain useful crops without hiding essential context.
- Navigation and CTAs remain easy to use by touch.
- Text remains usable with zoom and user text scaling.
- Use fluid sizing and natural text wrapping instead of hard-coded heights.

## Step 6.3: Interaction quality
- Add hover/focus/active states to interactive elements.
- Use `cursor: pointer` on clickable non-native controls, but prefer native links/buttons.
- Avoid using color alone to convey status.
- Respect `prefers-reduced-motion`.
- No autoplay hero video or heavy animation unless explicitly requested.
- Do not add decorative animation that harms page speed or readability.

# Phase 7 — SEO, accessibility, performance, and content QA

## Step 7.1: SEO
- Unique descriptive title and meta description per page.
- One clear primary H1 per page and logical heading order.
- Semantic links with meaningful labels.
- Open Graph/social metadata.
- Favicon.
- `robots.txt` and sitemap generation if suitable for the Astro version/project setup.
- Do not publish a fake canonical domain. Ask the user for the production domain or leave the canonical configuration unset/documented until known.
- Add structured data only for facts that can be supported. Do not invent reviews, ratings, addresses, or credentials.
- Do not add a Google Maps embed requiring a key unless configured and approved.

## Step 7.2: Accessibility
- Keyboard-accessible navigation and all interactions.
- Visible focus states.
- Skip link and semantic landmarks.
- Proper form labels if a form is approved.
- Meaningful image alt text.
- Accessible contrast and non-color status indicators.
- Correct button/link semantics.
- Reduced-motion support.
- No keyboard traps.
- Use axe or another accessibility tool only if already available or installation is approved.

## Step 7.3: Performance
- Optimize and size images appropriately; use Astro image tooling if it fits the current project and can be configured safely.
- Lazy-load below-the-fold images.
- Do not lazy-load the main above-the-fold hero image if that would delay its appearance.
- Set width/height or aspect ratio.
- Minimize client-side JavaScript and dependencies.
- Avoid loading huge original PDF page images as website assets.
- Check build output for large assets and console errors when tools are available.

## Step 7.4: Content accuracy audit
Search the finished website for every project value/date/name and compare it against `docs/website-requirements.md` and the PDF.
Check especially:
- “S$2,150,682” is not described as turnover/revenue.
- S$560,000, S$140,000, and S$1,450,682 stay attached to the correct projects.
- Approx. 700 tonnes belongs to Tengah PA C1 & CG.
- Project periods and “estimated” qualifiers are preserved.
- UEN, office address, and phone number are exact.
- No unsupported certifications, awards, safety claims, testimonials, staff counts, or project completion claims.
- Project photos are correctly associated with projects.

# Phase 8 — Testing and verification

## Step 8.1: Run project checks
Use the project's actual package scripts. At minimum:
- Install dependencies only when needed and with the existing package manager.
- Run formatting/lint/type checks if configured.
- Run Astro check if the package is available/configured.
- Run production build, typically `npm run build`.
- Fix errors introduced by your changes.
- Do not hide or suppress errors just to get a green build.
- Report unrelated pre-existing failures separately.

## Step 8.2: Browser testing
If a browser/Playwright skill or browser tool is available:
- Run the site locally.
- Visit every route.
- Check desktop and mobile layouts at the breakpoints above.
- Test all navigation links, project cards, phone links, mobile menu, gallery controls, and 404 behavior.
- Inspect browser console errors and failed network requests.
- Capture screenshots for Home, Projects, one project detail, Capabilities, and Contact at desktop and mobile widths.
If browser tooling is unavailable, state that visual browser testing was not performed. Do not claim screenshots were reviewed if they were not captured.

## Step 8.3: Test results
Create `docs/QA-REPORT.md` with:
- Date of check.
- Environment and commands run.
- Build result.
- Lint/type-check result.
- Routes tested.
- Responsive widths checked.
- Accessibility checks performed.
- Broken links/console errors found.
- Issues fixed.
- Remaining limitations and unverified assumptions.

Use actual PASS/FAIL/NOT RUN labels. Never mark an unexecuted test as PASS.

# Phase 9 — Final review and handover

Before declaring completion:
- Review every page against the design-system master.
- Confirm all required routes exist and internal links work.
- Confirm the content remains factually grounded in the PDF.
- Confirm the website is responsive, readable, and accessible.
- Confirm no user files or unrelated project areas were modified.
- Confirm the production build succeeds, or document the actual blocker.

Then provide a concise final report containing:
1. Pages implemented.
2. Main components and architecture.
3. UI UX Pro Max design system used.
4. Assets reused/extracted and any missing assets.
5. Exact validation commands and outcomes.
6. Known limitations or content requiring user confirmation.
7. How to run locally (actual command for this project's package manager).
8. What is still needed before production deployment (domain, hosting, contact-form backend, final content approval, etc.).

Do not deploy to production unless the user explicitly requests and authorizes it.

---

# Start here — first message/task for Claude Code

Begin by acknowledging this instruction file and the supplied Good Wave portfolio PDF. Then execute **Phase 1 only**:
1. Inspect the repository and Git status.
2. Read all pages and inspect the visuals/assets in the PDF.
3. Create `docs/website-requirements.md` and `docs/asset-inventory.md`.
4. Report any missing files or material ambiguities.

Do not start coding the website until the Phase 1 findings are complete. After Phase 1, continue to Phase 2 and onward without skipping phases. Ask the user only when a decision materially affects correctness, branding, paid services, or deployment.
