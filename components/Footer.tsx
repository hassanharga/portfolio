'use client';

import { heroContent } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-[var(--muted)]">
            © {currentYear} {heroContent.name}.
          </p>
          <p className="text-xs text-[var(--muted)]">Senior Full Stack Developer</p>
        </div>
      </div>
    </footer>
  );
}
