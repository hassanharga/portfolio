'use client';

import { motion } from 'framer-motion';
import { education, experience, yearOfExperience } from '@/data/content';
import { revealUp, staggerContainer } from './animations';

export default function Resume() {
  return (
    <section id="resume" className="bg-[var(--background-raised)] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 grid gap-6 lg:grid-cols-[0.7fr_1fr]"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Experience</p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">{yearOfExperience}+ years of delivery</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] lg:pt-10">
            A backend-leaning full stack path across startups, agencies, telecom, and marketplace products.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="divide-y divide-[var(--border)] border-y border-[var(--border)]"
        >
          {experience.map((exp) => (
            <motion.article
              key={exp.id}
              variants={revealUp}
              className="grid gap-5 py-8 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div>
                <p className="text-sm font-medium text-[var(--primary)]">{exp.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{exp.role}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {exp.company} · {exp.location}
                </p>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--muted-strong)]">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">Education</h3>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {education.map((edu) => (
              <div key={`${edu.degree}-${edu.school}`} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-medium text-[var(--primary)]">{edu.period}</p>
                <h4 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{edu.degree}</h4>
                <p className="mt-1 text-sm text-[var(--muted)]">{edu.school}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
