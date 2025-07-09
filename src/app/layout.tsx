import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Athagili - Find Your Perfect Match',
  description: 'The premier dating platform for meaningful connections and lasting relationships.',
  keywords: 'dating, relationships, love, matches, Sri Lanka',
  authors: [{ name: 'Athagili Team' }],
  openGraph: {
    title: 'Athagili - Find Your Perfect Match',
    description: 'The premier dating platform for meaningful connections and lasting relationships.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athagili - Find Your Perfect Match',
    description: 'The premier dating platform for meaningful connections and lasting relationships.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1f2937',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
