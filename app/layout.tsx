import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hassan Mohamed | Senior Full Stack Developer',
  description:
    'Versatile and impact-driven Full Stack Developer with 6+ years of experience building scalable, secure, and high-performance web applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Go', 'TypeScript'],
  authors: [{ name: 'Hassan Mohamed' }],
  openGraph: {
    title: 'Hassan Mohamed | Senior Full Stack Developer',
    description:
      'Versatile and impact-driven Full Stack Developer with 6+ years of experience building scalable, secure, and high-performance web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
