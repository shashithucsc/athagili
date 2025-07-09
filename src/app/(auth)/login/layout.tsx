import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Athagili | Find Your Perfect Match',
  description: 'Sign in to your Athagili account and continue your journey to find love.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
