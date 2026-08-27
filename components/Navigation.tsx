'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, cvUrl } from '@/data/content';
import { revealTransition } from './animations';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ y: -72, opacity: 0, filter: 'blur(8px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={revealTransition}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-[var(--border)] bg-[var(--background)]' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            className="rounded-md border border-[var(--border-strong)] px-3 py-1.5 text-sm font-bold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            HM
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[var(--border-strong)] px-4 py-1.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-[var(--foreground)] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, gridTemplateRows: '0fr' }}
            animate={{ opacity: 1, gridTemplateRows: '1fr' }}
            exit={{ opacity: 0, gridTemplateRows: '0fr' }}
            className="grid border-b border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <div className="overflow-hidden">
              <div className="space-y-3 px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
