import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import InteriorHeader from '@/components/InteriorHeader';
import { contact, heroContent, skills } from '@/data/content';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `About ${siteConfig.name} | ${siteConfig.positioning}`,
  description:
    'Profile of Hassan Mohamed, an Egypt-based senior backend-focused full-stack engineer working with Node.js, TypeScript, React, Next.js, and Go.',
  alternates: {
    canonical: '/about',
  },
};

const capabilityGroups = Object.values(skills);

const profileDetails = [
  {
    label: 'Primary focus',
    value: 'Node.js services, APIs, microservices, and product architecture',
  },
  {
    label: 'Full-stack range',
    value: 'React, Next.js, Angular, TypeScript, and Go',
  },
  {
    label: 'Product contexts',
    value: 'Mobility, telecom, marketplace, SaaS, and customer products',
  },
  {
    label: 'Working model',
    value: 'Egypt-based, working remotely',
  },
];

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteConfig.url}/about#profilepage`,
  url: `${siteConfig.url}/about`,
  name: `About ${siteConfig.name}`,
  description: metadata.description,
  isPartOf: {
    '@id': siteConfig.websiteId,
  },
  mainEntity: {
    '@id': siteConfig.personId,
  },
};

export default function AboutPage() {
  return (
    <>
      <InteriorHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />

        <section className="px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">About Hassan</p>
              <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Backend depth,
                <span className="block text-[var(--primary)]">full-stack range.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--muted-strong)]">
                {heroContent.bio}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#portfolio"
                  className="rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)]"
                >
                  Review selected work
                </Link>
                <Link
                  href="/resume"
                  className="rounded-lg border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Read HTML resume
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-[var(--border-strong)] bg-[var(--surface)] p-7 sm:p-9">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Working profile</p>
              <dl className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {profileDetails.map((detail) => (
                  <div key={detail.label} className="py-5">
                    <dt className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{detail.label}</dt>
                    <dd className="mt-2 text-sm leading-7 text-[var(--foreground)]">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="bg-[var(--background-raised)] px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Capabilities</p>
                <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">
                  How I contribute
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] lg:pt-10">
                Product engineering across service boundaries, interfaces, data, infrastructure, and team delivery.
              </p>
            </div>

            <div className="mt-14 border-y border-[var(--border)]">
              {capabilityGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="grid gap-4 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[5rem_0.8fr_1.2fr] md:gap-8"
                >
                  <p className="font-display text-sm text-[var(--primary)]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">{group.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{group.summary}</p>
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted-strong)] md:text-right">
                    {group.items.join(' · ')}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 border-y border-[var(--border)] py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Current availability</p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-[var(--foreground)]">
                Open to senior backend and full-stack conversations.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
                Based in {contact.location} and working remotely. The fastest route is a focused message about the role, team, and product problem.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
              >
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
              >
                GitHub
              </a>
              <Link
                href="/#contact"
                className="text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
              >
                Contact Hassan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
