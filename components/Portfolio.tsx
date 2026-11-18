'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

const featuredProjects = projects.filter((project) => project.featured);
const projectGroups = [
  { category: 'Professional', title: 'More professional work', description: 'Selected client and internal products' },
  { category: 'Part-time freelance', title: 'Part-time freelance projects', description: 'Selected part-time client engagements' },
  { category: 'Personal', title: 'Personal projects', description: 'Independent engineering projects and tools' },
].map((group) => ({
  ...group,
  projects: projects.filter((project) => !project.featured && project.category === group.category),
}));

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 grid gap-6 lg:grid-cols-[0.7fr_1fr]"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Selected work</p>
            <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">Selected engineering work</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] lg:pt-10">
            Professional product work, part-time client engagements, and personal projects across frontend applications, backend services, and developer tooling.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-2"
        >
          {featuredProjects.map((project) => {
            const tags = project.displayTags ?? project.tags.slice(0, 5);

            return (
              <motion.article
                key={project.title}
                variants={revealUp}
                className="group flex h-full flex-col overflow-hidden bg-[var(--surface)]"
              >
                {project.image ? (
                  <div className="relative h-64 overflow-hidden bg-[var(--background-raised)]">
                    <Image
                      src={project.image}
                      fill
                      alt=""
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className="flex h-52 flex-col justify-between border-b border-[var(--border)] bg-[var(--background-raised)] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Internal platform</p>
                    <div>
                      <p className="max-w-sm text-2xl font-semibold text-[var(--foreground)]">{project.title}</p>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Dashboard, analytics, workflow visibility</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--accent)]">{project.category}</span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                  {project.outcome && (
                    <p className="mt-4 border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--muted-strong)]">
                      {project.outcome}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-[var(--background-raised)] px-2.5 py-1 text-xs text-[var(--muted-strong)]">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4 pt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                    >
                      {project.linkLabel ?? 'Open project'}
                      <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    {project.github && project.github !== project.link && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
                      >
                        Source code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {projectGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-20"
          >
            <div className="mb-6 flex items-end justify-between gap-6">
              <h3 className="font-display text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">{group.title}</h3>
              <p className="hidden text-sm text-[var(--muted)] sm:block">{group.description}</p>
            </div>

            <div className="border-y border-[var(--border)]">
              {group.projects.map((project, index) => {
                const tags = project.displayTags ?? project.tags.slice(0, 4);

                return (
                  <article
                    key={project.title}
                    className="group grid gap-5 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-8"
                  >
                    <div className="relative h-24 overflow-hidden rounded-md border border-[var(--border)] bg-[var(--background-raised)]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          sizes="112px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="font-display flex h-full items-center justify-center text-sm text-[var(--muted)]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-display text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                        <Link href={`/work/${project.slug}`}>{project.title}</Link>
                      </h4>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                        {tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-xs text-[var(--muted-strong)]">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center justify-self-start gap-2 rounded-md text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)] md:justify-self-end"
                    >
                      View contribution
                      <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </article>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
