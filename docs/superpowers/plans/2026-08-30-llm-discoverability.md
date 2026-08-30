# LLM Discoverability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add crawlable profile, resume, and project pages that make Hassan's documented experience easier for search and AI retrieval without redesigning the homepage or inventing evidence.

**Architecture:** Keep `data/content.ts` as the content source, add pure discovery helpers for project lookup and public routes, and render static App Router pages from that data. Share a small server-rendered header across interior pages, keep the current homepage composition, and derive sitemap entries from the same route list used by tests.

**Tech Stack:** Next.js 16 App Router, React 19 server components, TypeScript, Tailwind CSS 4, Node test runner.

**Spec:** `docs/superpowers/specs/2026-08-30-llm-discoverability-design.md`

## Global Constraints

- Never install dependencies or inspect `node_modules`.
- Keep the homepage design, section order, palette, typography, and motion system intact.
- Use only claims already present in `data/content.ts`, `data/site.ts`, `PRODUCT.md`, or the approved spec.
- Do not add numeric performance, scale, revenue, ranking, team-size, or experience-duration claims.
- Keep new page content server-rendered and useful without client-side JavaScript.
- Run only `tests/seo.test.mts` and the new directly affected discovery test.

---

### Task 1: Test and add the discovery content model

**Files:**
- Create: `tests/discoverability.test.mts`
- Create: `data/discoverability.ts`
- Modify: `data/content.ts`
- Modify: `data/site.ts`

**Interfaces:**
- Consumes: the existing `projects` array and `siteConfig` object.
- Produces: project `slug` and `contribution` fields, `getProjectBySlug(slug)`, `getProjectTags(project)`, and `publicRoutes`.

- [ ] **Step 1: Write the failing discovery test**

```typescript
import assert from 'node:assert/strict';
import test from 'node:test';
import { projects } from '../data/content.ts';
import { getProjectBySlug, getProjectTags, publicRoutes } from '../data/discoverability.ts';

test('project discovery uses unique URL-safe slugs', () => {
  const slugs = projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, projects.length);
  assert.ok(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)));
});

test('project lookup resolves known work and rejects unknown slugs', () => {
  assert.equal(getProjectBySlug('go-social-api')?.title, 'GO-Social-API');
  assert.equal(getProjectBySlug('unknown-project'), undefined);
});

test('project contributions are factual non-empty copy without percentage or currency metrics', () => {
  assert.ok(projects.every((project) => project.contribution.trim().length > 0));
  assert.ok(projects.every((project) => !/(?:\b\d+(?:\.\d+)?%|[$€£]\s?\d+)/.test(project.contribution)));
});

test('project tags are trimmed and unique', () => {
  const tags = getProjectTags(getProjectBySlug('twint-super-deals')!);
  assert.ok(tags.every((tag) => tag === tag.trim()));
  assert.equal(new Set(tags.map((tag) => tag.toLowerCase())).size, tags.length);
});

test('public routes cover profile, resume, and every project', () => {
  assert.ok(publicRoutes.includes('/about'));
  assert.ok(publicRoutes.includes('/resume'));
  assert.equal(publicRoutes.length, projects.length + 3);
  assert.ok(projects.every((project) => publicRoutes.includes(`/work/${project.slug}`)));
});
```

- [ ] **Step 2: Run the focused test and verify the expected failure**

Run: `pnpm test tests/discoverability.test.mts`

Expected: FAIL because `data/discoverability.ts`, project slugs, and contributions do not exist.

- [ ] **Step 3: Add the minimum content and discovery helpers**

Add the approved positioning to `siteConfig`, add stable slugs and factual contribution copy to every existing project, then create:

```typescript
import { projects } from './content.ts';

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectTags(project: Project) {
  const seen = new Set<string>();
  return (project.displayTags ?? project.tags)
    .map((tag) => tag.trim())
    .filter((tag) => {
      const key = tag.toLowerCase();
      if (!tag || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export const publicRoutes = [
  '/',
  '/about',
  '/resume',
  ...projects.map((project) => `/work/${project.slug}`),
] as const;
```

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `pnpm test tests/discoverability.test.mts`

Expected: PASS with five passing tests.

### Task 2: Build the static profile, resume, and project pages

**Files:**
- Create: `components/InteriorHeader.tsx`
- Create: `app/about/page.tsx`
- Create: `app/resume/page.tsx`
- Create: `app/work/[slug]/page.tsx`
- Reuse: `components/Footer.tsx`

**Interfaces:**
- Consumes: `siteConfig`, `contact`, `skills`, `experience`, `education`, `cvUrl`, `projects`, and Task 1 discovery helpers.
- Produces: static `/about`, `/resume`, and `/work/[slug]` pages with unique metadata and semantic HTML.

- [ ] **Step 1: Add the shared interior-page header**

Create a server component with a skip link, `HM` home link, and descriptive links to `/about`, `/#portfolio`, `/resume`, and `/#contact`. Use the existing warm borders, near-black background, amber hover color, and focus styles. Do not add client state or Framer Motion.

```tsx
import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/#portfolio', label: 'Work' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

export default function InteriorHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" aria-label="Hassan Mohamed home">HM</Link>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Add the About page**

Render a `ProfilePage` JSON-LD object, one `h1`, factual profile copy, capability groups from `skills`, and links to work, resume, LinkedIn, GitHub, and contact. Use an asymmetric two-column hero followed by editorial divided capability rows. Keep paragraphs within `max-w-2xl`.

- [ ] **Step 3: Add the HTML Resume page**

Render all `experience` entries as semantic articles, education as a divided list, and capability names as compact text groups. Link to `cvUrl` as “Open formatted CV” and back to contact. Do not calculate total experience or derive new dates.

- [ ] **Step 4: Add static project pages**

Use Next.js 16 async params, static parameters, unique metadata, and `notFound()`:

```tsx
type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} | Work by ${siteConfig.name}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();
  const tags = getProjectTags(project);
  return (
    <main id="main-content">
      <article>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <section aria-labelledby="contribution-heading">
          <h2 id="contribution-heading">Contribution</h2>
          <p>{project.contribution}</p>
        </section>
        <ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <a href={project.link}>{project.linkLabel}</a>
      </article>
    </main>
  );
}
```

Use `CreativeWork` JSON-LD connected to `siteConfig.personId`. Use project imagery only when it already exists and give it meaningful alt text.

- [ ] **Step 5: Run typecheck for the new page interfaces**

Run: `pnpm exec tsc --noEmit`

Expected: PASS with no TypeScript errors.

### Task 3: Connect the homepage and discovery surfaces

**Files:**
- Modify: `components/Hero.tsx`
- Modify: `components/Navigation.tsx`
- Modify: `components/Portfolio.tsx`
- Modify: `components/Resume.tsx`
- Modify: `data/content.ts`
- Modify: `app/layout.tsx`
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

**Interfaces:**
- Consumes: the routes and entity identifiers produced by Task 1 and the pages produced by Task 2.
- Produces: internal homepage navigation, connected JSON-LD entities, complete sitemap entries, and a human-readable AI directory.

- [ ] **Step 1: Update homepage positioning and links without changing layout**

Use the approved positioning in `heroContent`. Change the hero CV link and resume-section CTA to `/resume`. Add About to the navigation and change the navigation Resume button to `/resume`. Keep the same classes, layout, animations, section order, and colors.

- [ ] **Step 2: Link projects to internal detail pages**

Import `Link` from `next/link`. Wrap featured and additional project titles in links to `/work/${project.slug}`. Keep each external product or source link separate and retain its current label.

- [ ] **Step 3: Connect structured-data entities**

Add stable identifiers to the root graph:

```typescript
{
  '@type': 'Person',
  '@id': siteConfig.personId,
  // existing visible fields
},
{
  '@type': 'WebSite',
  '@id': siteConfig.websiteId,
  url: siteConfig.url,
  // existing visible fields
}
```

- [ ] **Step 4: Generate complete sitemap entries**

Map the tested route list to absolute URLs:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }));
}
```

- [ ] **Step 5: Update `llms.txt` as a concise route directory**

Keep the existing factual summary and add absolute links for About, Resume, and every internal project route. Do not add claims about search rank, traffic, scale, or guaranteed availability.

- [ ] **Step 6: Re-run directly affected tests**

Run: `pnpm test tests/seo.test.mts tests/discoverability.test.mts`

Expected: PASS with all tests in those two files passing.

### Task 4: Verify production readiness

**Files:**
- Review all files changed by Tasks 1 to 3.

**Interfaces:**
- Consumes: the complete implementation.
- Produces: verification evidence and a clean, reviewable diff.

- [ ] **Step 1: Review the diff for unsupported claims and UI scope**

Run: `git diff --check` and `git diff --stat`. Then read the full diff and confirm the homepage structural classes and section order remain unchanged.

- [ ] **Step 2: Run the required verification chain**

Run these commands serially:

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm test tests/seo.test.mts tests/discoverability.test.mts
pnpm build
```

Expected: every command exits with status 0. Report each result separately.

- [ ] **Step 3: Inspect generated routes**

Read the build route table and confirm `/`, `/about`, `/resume`, and every `/work/[slug]` page are generated. If the build output does not expose enough detail, start `pnpm dev` and inspect representative pages without editing data.

- [ ] **Step 4: Review final repository state**

Run: `git status --short --branch`

Expected: only the intended feature changes are present on `feat/llm-discoverability`.
