import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import InteriorHeader from '@/components/InteriorHeader';
import { cvUrl, education, experience, projects, skills } from '@/data/content';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} Resume | ${siteConfig.title}`,
  description:
    'Experience, education, and technical capabilities for Hassan Mohamed, a senior full-stack engineer based in Egypt and working remotely.',
  alternates: {
    canonical: '/resume',
  },
};

const capabilityGroups = Object.values(skills);
const projectGroups = [
  { category: 'Part-time freelance', title: 'Part-time freelance projects' },
  { category: 'Personal', title: 'Personal projects' },
].map((group) => ({
  ...group,
  projects: projects.filter((project) => project.category === group.category),
}));

export default function ResumePage() {
  return (
    <>
      <InteriorHeader />
      <main id="main-content">
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Resume</p>
              <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Experience,
                <span className="block text-[var(--primary)]">in full.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--muted-strong)]">
                A full-stack path across mobility, telecom, healthcare, and tourism.
              </p>
            </div>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-lg border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Open formatted CV
            </a>
          </div>
        </section>

        <section className="bg-[var(--background-raised)] px-4 py-24 sm:px-6" aria-labelledby="experience-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="experience-heading" className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">
              Professional experience
            </h2>
            <div className="mt-12 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {experience.map((entry) => (
                <article key={entry.id} className="grid gap-6 py-9 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="text-sm font-medium text-[var(--primary)]">{entry.period}</p>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      {entry.role}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {entry.company} · {entry.location}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {entry.description.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--muted-strong)]">
                        <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {projectGroups.map((group) => (
          <section key={group.category} className="px-4 py-16 sm:px-6" aria-label={group.title}>
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">{group.title}</h2>
              <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {group.projects.map((project) => (
                  <article key={project.slug} className="grid gap-4 py-7 lg:grid-cols-[0.85fr_1.15fr]">
                    <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                      <Link href={`/work/${project.slug}`} className="hover:text-[var(--primary)]">{project.title}</Link>
                    </h3>
                    <p className="max-w-2xl text-sm leading-7 text-[var(--muted-strong)]">{project.contribution}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="px-4 py-24 sm:px-6" aria-labelledby="capabilities-heading">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Technical profile</p>
              <h2 id="capabilities-heading" className="font-display mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">
                Capabilities
              </h2>
            </div>
            <div className="border-y border-[var(--border)]">
              {capabilityGroups.map((group) => (
                <article key={group.title} className="border-b border-[var(--border)] py-6 last:border-b-0">
                  <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">{group.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">{group.items.join(' · ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--background-raised)] px-4 py-24 sm:px-6" aria-labelledby="education-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="education-heading" className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">
              Education
            </h2>
            <div className="mt-10 border-y border-[var(--border)]">
              {education.map((entry) => (
                <article
                  key={`${entry.degree}-${entry.school}`}
                  className="grid gap-3 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[10rem_1fr] md:gap-8"
                >
                  <p className="text-sm font-medium text-[var(--primary)]">{entry.period}</p>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">{entry.degree}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{entry.school}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 border-y border-[var(--border)] py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
              Have a role or product problem that fits this background? Share the context and the outcome your team needs.
            </p>
            <Link
              href="/#contact"
              className="w-fit rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)]"
            >
              Contact Hassan
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
