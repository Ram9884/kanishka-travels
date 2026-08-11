import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kanishka Travels | Chennai Taxi & Outstation Cab Service',
  description: 'Kanishka Travels is a Chennai-based taxi service offering local, airport and outstation travel, including one-way and round trips, corporate travel and tours. Personally managed by S. Ramesh.',
  keywords: ['Kanishka Travels', 'Chennai Taxi', 'Outstation Cab Chennai', 'Airport Taxi Chennai', 'One Way Cab Chennai', 'Innova Crysta Rental', 'Tempo Traveller Chennai', 'S Ramesh Travels', 'Chennai to Bangalore Cab'],
  metadataBase: new URL('https://kanishkatravels.in'),
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Kanishka Travels | Chennai Taxi & Outstation Cab Service',
    description: 'Kanishka Travels is a Chennai-based taxi service offering local, airport and outstation travel, including one-way and round trips, corporate travel and tours.',
    url: 'https://kanishkatravels.in',
    siteName: 'Kanishka Travels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kanishka Travels | Chennai Taxi & Outstation Cab Service',
    description: 'Chennai-based taxi service for local, airport and outstation travel. One-way & round trips, corporate travel and tours.',
  },
  alternates: {
    canonical: 'https://kanishkatravels.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full bg-[#0A1128] text-slate-100 font-sans selection:bg-[#A16207] selection:text-white">
        {children}
      </body>
    </html>
  );
}
