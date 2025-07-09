import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse & Like Users | Athagili',
  description: 'Discover amazing people and find your perfect match',
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
