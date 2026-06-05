import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import { yearOfExperience } from '@/data/content';
import WhatsAppButton from '@/components/WhatsAppButton';

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
  title: 'Hassan Mohamed | Senior Full Stack Developer',
  description: `Versatile and impact-driven Full Stack Developer with ${yearOfExperience}+ years of experience building scalable, secure, and high-performance web applications.`,
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Go', 'TypeScript'],
  authors: [{ name: 'Hassan Mohamed' }],
  openGraph: {
    title: 'Hassan Mohamed | Senior Full Stack Developer',
    description: `Versatile and impact-driven Full Stack Developer with ${yearOfExperience}+ years of experience building scalable, secure, and high-performance web applications.`,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
