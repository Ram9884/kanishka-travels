export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  startingPrice: string;
  travelTime: string;
  featured?: boolean;
  aspectRatio?: 'tall' | 'wide' | 'standard';
}

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'tirupati',
    name: 'Tirupati Pilgrimage',
    subtitle: 'Sacred Hill Temple',
    description: 'Seamless round-trip packages from Chennai with priority darshan guidance & comfortable AC travel.',
    image: '/images/destinations/tirupati.png',
    startingPrice: '₹4,500',
    travelTime: '3.5 Hours',
    featured: true,
    aspectRatio: 'tall',
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry Coastal Gateway',
    subtitle: 'French Riviera of the East',
    description: 'Explore the French Quarter, serene beaches, and Auroville with luxury chauffeur-driven cars.',
    image: '/images/destinations/pondicherry.png',
    startingPrice: '₹3,800',
    travelTime: '2.5 Hours',
    aspectRatio: 'standard',
  },
  {
    id: 'ooty',
    name: 'Ooty & Nilgiris Escape',
    subtitle: 'Queen of Hill Stations',
    description: 'Breathtaking mountain drives through tea plantations with experienced hill-terrain drivers.',
    image: '/images/destinations/ooty.png',
    startingPrice: '₹9,500',
    travelTime: '7.5 Hours',
    featured: true,
    aspectRatio: 'wide',
  },
];
