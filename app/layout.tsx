import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Kanishka Travels | Luxury Outstation Cabs & Taxi Service in Chennai',
  description: 'Book Innova Crysta, Hycross, Swift Dzire & Tempo Traveller with Kanishka Travels. Managed personally by proprietor S. Ramesh in Iyyappanthangal, Chennai.',
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
  metadataBase: new URL('https://kanishkatravels.com'),
  alternates: {
    canonical: 'https://kanishkatravels.com',
  },
  openGraph: {
    title: 'Kanishka Travels | Your Trip... Our Responsibility!',
    description: 'Chennai taxi & tour business operated personally by S. Ramesh in Iyyappanthangal.',
    url: 'https://kanishkatravels.com',
    siteName: 'Kanishka Travels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishka Travels | Luxury Cabs & Outstation Travel',
    description: 'Managed personally by proprietor S. Ramesh in Iyyappanthangal, Chennai.',
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': 'https://kanishkatravels.com/#taxiservice',
    name: 'Kanishka Travels',
    description: 'Taxi, outstation car rental, and tour operator in Iyyappanthangal, Chennai.',
    url: 'https://kanishkatravels.com',
    telephone: '+919677384267',
    priceRange: '$$',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Chennai, Tamil Nadu, India',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Kanishka Travels',
      founder: 'S. Ramesh',
      telephone: '+919677384267',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Iyyappanthangal',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600056',
        addressCountry: 'IN',
      },
    },
    slogan: 'Your Trip... Our Responsibility!',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://kanishkatravels.com/#organization',
    name: 'Kanishka Travels',
    url: 'https://kanishkatravels.com',
    logo: 'https://kanishkatravels.com/favicon.ico',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919677384267',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'ta'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://kanishkatravels.com/#website',
    url: 'https://kanishkatravels.com',
    name: 'Kanishka Travels',
    description: 'Luxury Outstation Cabs & Airport Taxi Services in Chennai',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kanishkatravels.com' },
      { '@type': 'ListItem', position: 2, name: 'Featured Vehicles', item: 'https://kanishkatravels.com/fleet' },
      { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kanishkatravels.com/services' },
      { '@type': 'ListItem', position: 4, name: 'Book Your Trip', item: 'https://kanishkatravels.com/book' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I book a cab with Kanishka Travels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can fill out our online booking request form or call S. Ramesh directly at +91 96773 84267. Every booking is confirmed immediately with vehicle & driver assignment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there any hidden charges like tolls or driver bata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zero hidden charges. All trip quotes provided by S. Ramesh explicitly break down base fare, toll estimates, state entry permits, and driver bata upfront.',
        },
      },
    ],
  },
];

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body className="min-h-full bg-[#0A1128] text-slate-100 font-sans selection:bg-[#A16207] selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
