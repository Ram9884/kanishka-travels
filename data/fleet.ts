export interface Vehicle {
  id: string;
  name: string;
  category: 'Luxury MUV' | 'Premium MUV' | 'Executive Sedan' | 'Luxury Minibus' | 'Premium Sedan';
  image: string;
  passengers: string;
  luggage: string;
  ac: string;
  bestFor: string;
  ratePerKm: string;
  tag?: string;
}

export const FEATURED_VEHICLES: Vehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Luxury MUV',
    image: '/images/fleet/innova-hycross.jpg',
    passengers: '6 - 7 Seats',
    luggage: '4 Bags',
    ac: 'Dual-Zone Climate Control',
    bestFor: 'Outstation Family Trips & Corporate Travel',
    ratePerKm: '₹18 / km',
    tag: 'Most Popular',
  },
  {
    id: 'innova-hycross',
    name: 'Toyota Innova Hycross',
    category: 'Luxury MUV',
    image: '/images/fleet/innova-hycross.jpg',
    passengers: '7 Seats',
    luggage: '4 Bags',
    ac: 'Tri-Zone Climate Control',
    bestFor: 'Ultra-Luxury Long Distance Journeys',
    ratePerKm: '₹22 / km',
    tag: 'Hybrid Luxury',
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    category: 'Premium MUV',
    image: '/images/fleet/kia-carens.jpg',
    passengers: '6 - 7 Seats',
    luggage: '3 Bags',
    ac: 'Roof AC Vents (All Rows)',
    bestFor: 'Comfortable Group & Pilgrimage Tours',
    ratePerKm: '₹16 / km',
    tag: 'Modern Comfort',
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    category: 'Premium Sedan',
    image: '/images/fleet/swift-dzire.jpg',
    passengers: '4 Seats',
    luggage: '2 Bags',
    ac: 'Powerful AC',
    bestFor: 'City Commutes & Fast Outstation Rides',
    ratePerKm: '₹12 / km',
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    category: 'Premium Sedan',
    image: '/images/fleet/swift-dzire.jpg',
    passengers: '4 Seats',
    luggage: '3 Bags (Spacious Boot)',
    ac: 'Chilling AC',
    bestFor: 'Airport Pickups & Outstation Travel',
    ratePerKm: '₹13 / km',
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller',
    category: 'Luxury Minibus',
    image: '/images/fleet/tempo-traveller.jpg',
    passengers: '12 - 26 Seats',
    luggage: '8+ Bags',
    ac: 'Dual AC Compressor',
    bestFor: 'Large Group Excursions & Weddings',
    ratePerKm: '₹28 / km',
    tag: 'Group Travel',
  },
];
