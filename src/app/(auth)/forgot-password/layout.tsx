import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password - Athagili',
  description: 'Reset your Athagili password and get back to finding your perfect match.',
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
