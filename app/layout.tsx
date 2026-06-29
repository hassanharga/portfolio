import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import { yearOfExperience, contact } from '@/data/content';
import WhatsAppButton from '@/components/WhatsAppButton';

const SITE_URL = 'https://hassanharga.vercel.app';

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

const description = `Hassan Mohamed — Senior Full Stack Developer with ${yearOfExperience}+ years building scalable web applications in Node.js, React, Next.js, and Go. Based in Egypt, working remotely.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Hassan Mohamed | Senior Full Stack Developer',
  description,
  keywords: [
    'Hassan Mohamed',
    'Hassan Mohamed developer',
    'Hassan Mohamed full stack',
    'Hassan Mohamed Egypt',
    'Hassan Harga',
    'Senior Full Stack Developer',
    'Full Stack Developer',
    'Full Stack Developer Egypt',
    'Node.js developer',
    'React developer',
    'Angular developer',
    'Next.js developer',
    'Go developer',
    'TypeScript developer',
    'Backend developer',
    'Frontend developer',
    'Microservices',
    'AWS developer',
    'Remote developer',
  ],
  authors: [{ name: 'Hassan Mohamed' }],
  creator: 'Hassan Mohamed',
  publisher: 'Hassan Mohamed',
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
    title: 'Hassan Mohamed | Senior Full Stack Developer',
    description,
    url: SITE_URL,
    siteName: 'Hassan Mohamed — Senior Full Stack Developer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassan Mohamed | Senior Full Stack Developer',
    description,
    creator: '@hassanharga',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Hassan Mohamed',
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      jobTitle: 'Senior Full Stack Developer',
      email: `mailto:${contact.email}`,
      telephone: contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressRegion: contact.location,
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
      url: SITE_URL,
      name: 'Hassan Mohamed — Senior Full Stack Developer',
      inLanguage: 'en',
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
      </body>
    </html>
  );
}
