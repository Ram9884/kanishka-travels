import React from 'react';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'My Bookings | Kanishka Travels Customer Portal',
  description: 'View and manage your active and past cab booking requests with Kanishka Travels.',
  path: '/my-bookings',
  noIndex: true, // User-authenticated page - set noindex directive
});

export default function MyBookingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
