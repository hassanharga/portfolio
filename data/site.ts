const siteUrl = 'https://hassanharga.vercel.app';

export const siteConfig = {
  url: siteUrl,
  name: 'Hassan Mohamed',
  title: 'Senior Full-Stack Engineer',
  positioning: 'Senior full-stack engineer',
  description:
    'Hassan Mohamed is a senior full-stack engineer building product systems with Node.js, TypeScript, React, Next.js, and Go.',
  locale: 'en_US',
  language: 'en',
  personId: `${siteUrl}/#person`,
  websiteId: `${siteUrl}/#website`,
} as const;
