'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  server: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
};

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
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">Senior engineering outcomes</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
            Useful for teams that need someone who can move across product UI, API design, deployment, and codebase quality without losing delivery speed.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={revealUp}
              className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--primary)]/70"
            >
              <div className="mb-6 text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-1">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
