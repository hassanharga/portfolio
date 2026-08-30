import WhatsAppButton from '@/components/WhatsAppButton';
import { contact } from '@/data/content';
import { siteConfig } from '@/data/site';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} | ${siteConfig.title}`,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': siteConfig.personId,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/avatar.png`,
      jobTitle: siteConfig.title,
      description: siteConfig.description,
      email: `mailto:${contact.email}`,
      telephone: contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
      },
      sameAs: [contact.linkedin, contact.github],
      knowsAbout: [
        'Node.js',
        'React',
        'Next.js',
        'Angular',
        'Go',
        'TypeScript',
        'Microservices',
        'AWS',
        'PostgreSQL',
        'MongoDB',
        'Docker',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': siteConfig.websiteId,
      url: siteConfig.url,
      name: `${siteConfig.name} | ${siteConfig.title}`,
      inLanguage: siteConfig.language,
      publisher: {
        '@id': siteConfig.personId,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
