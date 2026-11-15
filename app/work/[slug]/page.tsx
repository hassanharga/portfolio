import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import InteriorHeader from '@/components/InteriorHeader';
import { projects } from '@/data/content';
import { getProjectBySlug, getProjectTags } from '@/data/discoverability';
import { siteConfig } from '@/data/site';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: `${project.title} | Work by ${siteConfig.name}`,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Work by ${siteConfig.name}`,
      description: project.description,
      url: `/work/${project.slug}`,
      type: 'article',
      images: project.image
        ? [
            {
              url: project.image,
              alt: `${project.title} project`,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);

  if (!project) {
    notFound();
  }

  const tags = getProjectTags(project);
  const projectUrl = `${siteConfig.url}/work/${project.slug}`;
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#work`,
    url: projectUrl,
    name: project.title,
    description: project.description,
    creator: {
      '@id': siteConfig.personId,
    },
    keywords: tags.join(', '),
    image: project.image ? `${siteConfig.url}${project.image}` : undefined,
    sameAs: project.link || undefined,
  };

  return (
    <>
      <InteriorHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />

        <article>
          <header className="px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <Link
                  href="/#portfolio"
                  className="mb-5 inline-flex text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                >
                  Back to selected work
                </Link>
                <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{project.category} project</p>
                <h1 className="font-display text-5xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--muted-strong)]">
                  {project.description}
                </p>
              </div>

              {project.image ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--surface)]">
                  <Image
                    src={project.image}
                    fill
                    alt={`${project.title} project`}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="rounded-3xl border border-[var(--border-strong)] bg-[var(--surface)] p-8 sm:p-10">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">{project.category} project</p>
                  <p className="font-display mt-6 text-3xl font-semibold text-[var(--foreground)]">{project.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    Public project details are limited to the work already described in this portfolio.
                  </p>
                </div>
              )}
            </div>
          </header>

          <section className="bg-[var(--background-raised)] px-4 py-24 sm:px-6" aria-labelledby="contribution-heading">
            <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">The work</p>
                <h2 id="contribution-heading" className="font-display mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">
                  Contribution and scope
                </h2>
              </div>
              <div className="border-y border-[var(--border)]">
                <section className="py-7" aria-labelledby="contribution-detail-heading">
                  <h3 id="contribution-detail-heading" className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    Contribution
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--foreground)]">{project.contribution}</p>
                </section>
                <section className="border-t border-[var(--border)] py-7" aria-labelledby="scope-heading">
                  <h3 id="scope-heading" className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    Project scope
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted-strong)]">{project.outcome}</p>
                </section>
              </div>
            </div>
          </section>

          <section className="px-4 py-24 sm:px-6" aria-labelledby="technology-heading">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Technology</p>
                <h2 id="technology-heading" className="font-display mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-5xl">
                  Tools used
                </h2>
              </div>
              <ul className="flex flex-wrap content-start gap-3">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted-strong)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <footer className="bg-[var(--background-raised)] px-4 py-20 sm:px-6">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 border-y border-[var(--border)] py-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary)]">Continue</p>
                <p className="font-display mt-3 max-w-2xl text-3xl font-semibold text-[var(--foreground)]">
                  Explore more work and the wider engineering path.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)]"
                  >
                    {project.linkLabel}
                  </a>
                )}
                <Link
                  href="/resume"
                  className="rounded-lg border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Read resume
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
