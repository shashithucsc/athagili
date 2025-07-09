import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Profile | Athagili',
  description: 'Complete your dating profile and find your perfect match',
  keywords: 'dating profile, complete profile, match, love, relationships',
};

export default function CompleteProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
