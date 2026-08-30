# LLM Discoverability Design

## Goal

Make Hassan Mohamed's portfolio easier for search engines and AI search systems to retrieve, understand, and cite when a hiring request matches his real experience. The site must not promise placement, rankings, or recommendation, and it must not add unsupported scale, performance, or business metrics.

## Scope

This change covers the public portfolio only:

- Clarify Hassan's primary positioning as a senior backend-focused full-stack engineer.
- Add crawlable `/about` and `/resume` pages.
- Add one static `/work/[slug]` page for each project already present in `data/content.ts`.
- Link the homepage to the new pages without removing the current single-page recruiter flow.
- Strengthen structured data, sitemap coverage, and `llms.txt` route discovery.
- Preserve the existing contact form, external CV, project links, and home-page sections.

This change does not purchase or configure a custom domain, access Search Console or Bing Webmaster Tools, or edit LinkedIn, GitHub, Wuzzuf, FlowCV, or other external profiles.

## Audience and success criteria

The primary audience is recruiters, hiring managers, and engineering leaders evaluating Hassan for senior backend or full-stack product work.

The implementation is successful when:

- A visitor can understand Hassan's focus, location, availability, experience, capabilities, and contact path from plain HTML pages.
- Every existing project has a stable internal URL and uses only facts already represented in the repository.
- The home page offers clear internal routes to the HTML resume, profile, and project details.
- The generated sitemap lists the home page, profile, resume, and every project route.
- Structured data identifies one stable `Person` entity and connects the profile page and project pages to that entity.
- Typecheck, lint, production build, and the directly affected tests pass.

## Chosen approach

Extend the current content model and App Router structure. `data/content.ts` remains the source of truth. Projects gain stable slugs and concise evidence fields derived from their existing descriptions, outcomes, links, and technologies. Small lookup and route helpers stay in the data layer so they can be tested without rendering React.

The alternative was to replace the home page with a multi-page portfolio. That would weaken the current fast recruiter path and create a larger redesign than needed. Another alternative was to add only more metadata. That would not give crawlers or visitors enough page-level evidence to retrieve for specific hiring queries.

## Information architecture

### Home page

The home page remains the primary overview. Its hero uses the approved positioning and links to contact, selected work, and the internal HTML resume. The project section links every project name to its internal case-study route while retaining the external product or source link. The experience section links to the full HTML resume.

### About page

`/about` is a concise personal profile, not a duplicate CV. It contains:

- Name, role, location, and availability.
- Backend-focused full-stack positioning.
- A short description of the kinds of systems and product work already stated on the home page.
- Capability groups sourced from the existing skills data.
- Links to selected work, the HTML resume, LinkedIn, GitHub, and contact.

The page uses `ProfilePage` structured data with Hassan's `Person` entity as `mainEntity`.

### Resume page

`/resume` is the canonical crawlable resume view. It renders the existing experience, education, and skills as semantic HTML. It also links to the external FlowCV version as an optional formatted copy. It does not introduce experience duration calculations or new claims.

### Project pages

Each `/work/[slug]` page renders:

- Project title and concise description.
- Hassan's documented contribution or scope, based only on existing repository content.
- Existing outcome statement, presented as project scope when it is descriptive rather than measurable.
- Technology list.
- External product or source link.
- Links to the previous recruiter path: all work, resume, and contact.

Each page has unique metadata and `CreativeWork` structured data connected to Hassan's stable `Person` `@id`. Missing slugs return Next.js `notFound()`.

## Content constraints

- Use “Senior backend-focused full-stack engineer” as the primary positioning.
- Keep “Senior Full Stack Developer” as the formal title where a compact title is required.
- Use “Egypt-based, working remotely” for location and working model.
- Do not add years-of-experience totals, traffic levels, performance percentages, revenue, team sizes, rankings, client endorsements, or availability dates unless an existing repository source states them.
- Preserve company and project confidentiality by using only content already public in the repository.
- Keep project technology names trimmed and deduplicated in the new detail-page view.

## Visual design

The pages extend the existing “Amber Workshop” design system:

- Warm near-black surfaces, amber accent, warm off-white text.
- Bricolage Grotesque headings and the existing body font.
- Editorial dividers, numbered details, and open layouts before cards.
- No gradients on text, glass effects, side-stripe accents, fake terminals, decorative metrics, or repeated icon-card grids.
- Body text stays within a readable measure.
- Motion is limited to the current home-page components; the new information pages are server-rendered and mostly static for fast loading and direct crawlability.

The new pages use a simple site header with links back to Home, About, Work, Resume, and Contact. They share the existing footer and global visual tokens.

## Accessibility and responsive behavior

- Use one visible `h1` per page and ordered heading levels.
- Include a skip link and semantic `header`, `nav`, `main`, `article`, and `footer` landmarks.
- Preserve visible focus styles from `globals.css`.
- All internal links use descriptive text.
- Layouts collapse to a single readable column on small screens.
- Project images remain optional; text contains the complete project meaning.
- New server-rendered pages do not require JavaScript for their core content.

## Metadata and discovery

- Add a stable `@id` for the portfolio's `Person` and `WebSite` entities in the root JSON-LD graph.
- Give `/about`, `/resume`, and every project page a canonical URL, title, and description.
- Add `ProfilePage` JSON-LD to `/about`.
- Add `CreativeWork` JSON-LD to project pages.
- Generate sitemap entries from one public-route helper so routes and tests share the same source.
- Update `llms.txt` with links to About, Resume, and each project page. Treat it as a concise directory, not as a ranking claim.
- Keep `robots.txt` broadly permissive and retain the sitemap directive.

## Data and interfaces

`data/site.ts` adds the approved positioning and stable entity identifiers.

Each project in `data/content.ts` adds:

- `slug`: stable URL segment.
- `contribution`: a factual statement derived from current project or experience copy.

`data/discoverability.ts` exports:

- `getProjectBySlug(slug: string)` for static pages.
- `publicRoutes` containing `/`, `/about`, `/resume`, and project paths.

The sitemap maps `publicRoutes` to absolute URLs. Project static parameters map project slugs to `{ slug }` objects.

## Testing and verification

The feature follows test-first development for the data and routing behavior:

- Add a focused Node test that initially fails because project slugs and discovery helpers do not exist.
- Verify every project slug is unique and URL-safe.
- Verify every project has a non-empty contribution without numeric marketing claims being added by this change.
- Verify `getProjectBySlug` returns a matching project and `undefined` for an unknown slug.
- Verify `publicRoutes` contains the required profile and resume routes plus every project route.

After implementation, run:

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm test tests/seo.test.mts tests/discoverability.test.mts`
- `pnpm build`

No dependency installation and no full-suite test run are required.
