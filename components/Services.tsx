'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

export default function Services() {
  return (
    <section id="services" className="bg-[var(--background-raised)] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">What I can own</p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">Senior engineering outcomes</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
            Useful for teams that need someone who can move across product UI, API design, deployment, and codebase quality without losing delivery speed.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-[var(--border)]"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={revealUp}
              className="group grid gap-4 border-b border-[var(--border)] py-8 transition-colors hover:bg-[var(--surface)]/40 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-10 sm:px-4"
            >
              <span className="font-display text-2xl font-medium text-[var(--muted)] transition-colors group-hover:text-[var(--primary)] sm:text-3xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:items-baseline lg:gap-10">
                <h3 className="font-display text-2xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)] sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-base leading-8 text-[var(--muted)]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
