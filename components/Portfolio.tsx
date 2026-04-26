'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

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
            <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">Proof over templates</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] lg:pt-10">
            A focused sample of product and platform work across mobility, telecom, tourism, commerce, and backend API design.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {orderedProjects.map((project, index) => {
            const tags = project.displayTags ?? project.tags.slice(0, 5);

            return (
              <motion.article
                key={project.title}
                variants={revealUp}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--primary)]/70"
              >
                {project.image ? (
                  <div className="relative h-52 overflow-hidden bg-[var(--background-raised)]">
                    <Image
                      loading={index < 2 ? 'eager' : 'lazy'}
                      src={project.image}
                      fill
                      alt={`${project.title} project visual`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
                    <h3 className="text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--accent)]">
                        Featured
                      </span>
                    )}
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
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>
    </section>
  );
}
