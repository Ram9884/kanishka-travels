import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Kanishka Travels | Taxi, Outstation Car Rental & Tour Operator in Chennai',
  description: 'Book airport taxis, local Chennai rides, outstation round-trips, and temple packages with Kanishka Travels. Managed personally by S. Ramesh in Iyyappanthangal, Chennai.',
  keywords: [
    'Kanishka Travels',
    'Kanishka Travels Chennai',
    'S Ramesh Taxi Chennai',
    'Iyyappanthangal Taxi',
    'Outstation Taxi Chennai',
    'Airport Pickup Drop Chennai',
    'Innova Crysta Rental Chennai',
    'Tempo Traveller Chennai',
  ],
  authors: [{ name: 'S. Ramesh' }],
  openGraph: {
    title: 'Kanishka Travels | Your Trip... Our Responsibility!',
    description: 'Chennai taxi & tour business operated personally by S. Ramesh in Iyyappanthangal.',
    url: 'https://kanishkatravels.com',
    siteName: 'Kanishka Travels',
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'Kanishka Travels',
  description: 'Taxi, outstation car rental, and tour operator in Iyyappanthangal, Chennai.',
  url: 'https://kanishkatravels.com',
  telephone: '+919677384267',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Chennai, Tamil Nadu, India',
  },
  provider: {
    '@type': 'LocalBusiness',
    name: 'Kanishka Travels',
    founder: 'S. Ramesh',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Iyyappanthangal',
      addressRegion: 'Chennai, Tamil Nadu',
      addressCountry: 'IN',
    },
    telephone: '+919677384267',
    priceRange: '$$',
  },
  slogan: 'Your Trip... Our Responsibility!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#0A1128] text-slate-100 font-sans selection:bg-[#A16207] selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
