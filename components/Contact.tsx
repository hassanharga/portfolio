'use client';

import { SubmitEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { contact, getWhatsAppUrl } from '@/data/content';
import { revealUp } from './animations';

type FormStatus =
  | { type: 'idle'; message: '' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Contact request failed');
      }

      setStatus({ type: 'success', message: 'Message sent. I will reply as soon as possible.' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'The message could not be sent. Your details are still here, or you can use email or WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 grid gap-6 lg:grid-cols-[0.7fr_1fr]"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Contact</p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">Start a focused conversation</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] lg:pt-10">
            Best fit: senior full stack, backend-heavy product work, architecture support, and practical delivery leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Direct channels</h3>
              <div className="mt-6 space-y-5">
                <a href={`mailto:${contact.email}`} className="block text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]">
                  <span className="block text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Email</span>
                  <span className="mt-1 block text-base text-[var(--foreground)]">{contact.email}</span>
                </a>

                <a href={`tel:${contact.phone}`} className="block text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]">
                  <span className="block text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Phone</span>
                  <span className="mt-1 block text-base text-[var(--foreground)]">{contact.phone}</span>
                </a>

                <div>
                  <span className="block text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Location</span>
                  <span className="mt-1 block text-base text-[var(--foreground)]">{contact.location}</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--success)]"
            >
              <span className="text-sm uppercase tracking-[0.16em] text-[var(--success)]">Quick route</span>
              <span className="mt-3 block text-xl font-semibold text-[var(--foreground)]">Message on WhatsApp</span>
              <span className="mt-2 block text-sm leading-7 text-[var(--muted)]">
                Useful for scheduling and short role-fit conversations.
              </span>
            </a>

            <div className="flex gap-4">
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
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            onSubmit={handleSubmit}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--muted)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background-raised)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--primary)] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[var(--muted)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background-raised)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--primary)] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm text-[var(--muted)]">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background-raised)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--primary)] focus:outline-none"
                placeholder="Tell me about the role, project, or team need."
              />
            </div>

            {status.type !== 'idle' && (
              <p
                className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-[var(--success)]/40 bg-[var(--success)]/10 text-[var(--success)]'
                    : 'border-[var(--danger)]/40 bg-[var(--danger)]/10 text-[var(--danger)]'
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
              whileHover={{ y: isSubmitting ? 0 : -2 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
