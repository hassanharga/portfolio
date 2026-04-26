'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { heroContent } from '@/data/content';
import { revealTransition, revealUp, staggerContainer } from './animations';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:pt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--primary)]/40 to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={revealUp}
            className="mb-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--accent)]"
          >
            Available for senior full stack and backend roles
          </motion.span>

          <motion.h1
            variants={revealUp}
            className="max-w-4xl text-4xl font-semibold leading-[1.05] text-[var(--foreground)] sm:text-6xl lg:text-7xl"
          >
            {heroContent.name} builds product systems that survive real traffic.
          </motion.h1>

          <motion.h2
            variants={revealUp}
            className="mt-6 text-xl font-medium text-[var(--primary)] sm:text-2xl"
          >
            {heroContent.title}
          </motion.h2>

          <motion.p
            variants={revealUp}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg"
          >
            {heroContent.bio}
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {heroContent.proofPoints.map((point) => (
              <div key={point} className="border-t border-[var(--border)] pt-3 text-sm text-[var(--muted)]">
                <span className="text-[var(--foreground)]">{point}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={revealUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              className="rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Hassan
            </motion.a>
            <motion.a
              href="#portfolio"
              className="rounded-lg border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Review projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ ...revealTransition, delay: 0.28 }}
          className="relative mx-auto w-full max-w-sm lg:mr-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-[var(--border)]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface)]">
            <Image
              src="/images/avatar.png"
              alt="Hassan Mohamed"
              loading="eager"
              width={520}
              height={620}
              className="aspect-[4/5] w-full object-cover"
              priority
            />
            <div className="border-t border-[var(--border)] bg-[var(--background-raised)] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Current focus</p>
              <p className="mt-2 text-lg font-medium text-[var(--foreground)]">Full stack product engineering</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <a href="#skills" className="block text-[var(--muted)] transition-colors hover:text-[var(--primary)]">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
