export interface GalleryItem {
  id: string;
  title: string;
  category: 'Airport Transfer' | 'Family Vacation' | 'Wedding Travel' | 'Corporate Delegation' | 'Group Tour' | 'Hill Station';
  image: string;
  location: string;
  aspect: 'tall' | 'wide' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Seamless 4 AM Airport Pickup',
    category: 'Airport Transfer',
    image: '/images/gallery/airport.jpg',
    location: 'Chennai International Airport (MAA)',
    aspect: 'wide',
  },
  {
    id: '2',
    title: 'Ooty Family Vacation Drive',
    category: 'Family Vacation',
    image: '/images/gallery/family.jpg',
    location: 'Nilgiris, Ooty',
    aspect: 'tall',
  },
  {
    id: '3',
    title: 'Luxury Wedding Convoy',
    category: 'Wedding Travel',
    image: '/images/fleet/innova-hycross.jpg',
    location: 'T. Nagar, Chennai',
    aspect: 'square',
  },
  {
    id: '4',
    title: 'Corporate Executive Delegation',
    category: 'Corporate Delegation',
    image: '/images/fleet/kia-carens.jpg',
    location: 'OMR IT Corridor, Chennai',
    aspect: 'square',
  },
  {
    id: '5',
    title: '18-Pack Pilgrimage Group Trip',
    category: 'Group Tour',
    image: '/images/fleet/tempo-traveller.jpg',
    location: 'Tirupati Hill Shrine',
    aspect: 'wide',
  },
  {
    id: '6',
    title: 'Misty Mountain Highway Drive',
    category: 'Hill Station',
    image: '/images/destinations/kodaikanal.jpg',
    location: 'Kodaikanal Lake Road',
    aspect: 'tall',
  },
];
