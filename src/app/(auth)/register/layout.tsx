import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Athagili - Find Your Perfect Match',
  description: 'Create your Athagili account and start your journey to find love and meaningful connections.',
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
