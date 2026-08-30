import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/#portfolio', label: 'Work' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

export default function InteriorHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-[var(--primary)] px-4 py-2 font-medium text-[var(--background)] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link
          href="/"
          aria-label="Hassan Mohamed home"
          className="w-fit rounded-md border border-[var(--border-strong)] px-3 py-1.5 text-sm font-bold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
        >
          HM
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:justify-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
