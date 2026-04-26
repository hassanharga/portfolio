'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

const skillCategories = [
  { key: 'productEngineering', data: skills.productEngineering },
  { key: 'backendSystems', data: skills.backendSystems },
  { key: 'dataInfrastructure', data: skills.dataInfrastructure },
  { key: 'engineeringLeadership', data: skills.engineeringLeadership },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Capabilities</p>
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">Where I create leverage</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">
            Recruiters and teams usually need more than a tool list. These are the practical areas where my stack shows up in production.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={revealUp}
              className="border-t border-[var(--border)] pt-6"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{category.data.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-7 text-[var(--muted)]">{category.data.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.data.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--muted-strong)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
