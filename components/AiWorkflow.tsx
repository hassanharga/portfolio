'use client';

import { motion } from 'framer-motion';
import { aiWorkflow } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

export default function AiWorkflow() {
  return (
    <section id="ai-workflow" className="px-4 py-24 sm:px-6">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--surface)] p-8 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--primary)] opacity-[0.12] blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">
              <span className="h-px w-8 bg-[var(--primary)]" />
              {aiWorkflow.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.05] text-[var(--foreground)] sm:text-4xl">
              {aiWorkflow.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)]">{aiWorkflow.intro}</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3"
        >
          {aiWorkflow.tools.map((tool, index) => (
            <motion.div key={tool.name} variants={revealUp} className="group bg-[var(--surface)] p-6 transition-colors hover:bg-[var(--surface-hover)]">
              <span className="font-display text-sm font-medium text-[var(--primary)]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="font-display mt-4 text-xl font-semibold text-[var(--foreground)]">{tool.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{tool.use}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {aiWorkflow.principles.map((principle) => (
            <span key={principle} className="inline-flex items-center gap-2 text-sm text-[var(--muted-strong)]">
              <svg className="h-4 w-4 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {principle}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
