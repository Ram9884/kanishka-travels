import HeroSection from '@/components/home/HeroSection';
import PopularDestinations from '@/components/home/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kanishka Travels',
  alternateName: 'Kanishka Travels Chennai',
  url: 'https://kanishkatravels.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kanishkatravels.in/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const taxiServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TaxiService', 'LocalBusiness'],
  name: 'Kanishka Travels',
  alternateName: 'Kanishka Travels Chennai',
  description: 'Kanishka Travels is a Chennai-based taxi service offering local, airport and outstation travel, including one-way and round trips, corporate travel and tours.',
  url: 'https://kanishkatravels.in',
  telephone: '+91-9884588664',
  email: 'kanishkaoct2011@gmail.com',
  logo: 'https://kanishkatravels.in/icon.png',
  image: 'https://kanishkatravels.in/icon.png',
  founder: {
    '@type': 'Person',
    name: 'S. Ramesh',
  },
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Iyyappanthangal',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600056',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0275,
    longitude: 80.1565,
  },
  areaServed: [
    { '@type': 'City', name: 'Chennai', sameAs: 'https://www.wikidata.org/wiki/Q1352' },
    { '@type': 'State', name: 'Tamil Nadu', sameAs: 'https://www.wikidata.org/wiki/Q1445' },
  ],
  serviceType: ['Airport Transfer', 'Outstation Cab', 'Local Taxi', 'Corporate Travel', 'Temple Tours'],
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://wa.me/919884588664',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceJsonLd) }}
      />
      <HeroSection />
      <PopularDestinations />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
