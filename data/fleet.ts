export interface Vehicle {
  id: string;
  name: string;
  category: 'Luxury MUV' | 'Standard MUV' | 'Family MUV' | 'Executive Sedan' | 'Luxury Minibus' | 'Premium Sedan';
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
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    category: 'Premium Sedan',
    image: '/images/fleet/swift-dzire.jpg',
    passengers: '4 Seats',
    luggage: '2 Bags',
    ac: 'Powerful AC',
    bestFor: 'City Commutes & Quick Outstation Rides',
    ratePerKm: '₹12 / km',
    tag: 'Budget Luxury',
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    category: 'Family MUV',
    image: '/images/fleet/kia-carens.jpg',
    passengers: '6 Seats',
    luggage: '3 Bags',
    ac: 'Dual AC Vents',
    bestFor: 'Economical Family Trips & City Tours',
    ratePerKm: '₹15 / km',
    tag: 'Family Favorite',
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    category: 'Executive Sedan',
    image: '/images/fleet/swift-dzire.jpg',
    passengers: '4 Seats',
    luggage: '3 Bags (Spacious Boot)',
    ac: 'Chilling AC',
    bestFor: 'Airport Drops & Smooth Outstation Trips',
    ratePerKm: '₹13 / km',
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    category: 'Standard MUV',
    image: '/images/fleet/innova-hycross.jpg',
    passengers: '7 Seats',
    luggage: '4 Bags',
    ac: 'Dual AC Compressor',
    bestFor: 'Long Highway Drives & Group Outings',
    ratePerKm: '₹17 / km',
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Luxury MUV',
    image: '/images/fleet/innova-hycross.jpg',
    passengers: '6 - 7 Seats',
    luggage: '4 Bags',
    ac: 'Dual-Zone Climate Control',
    bestFor: 'VIP Outstation Family Trips & Corporate Delegations',
    ratePerKm: '₹18 / km',
    tag: 'Most Popular',
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller',
    category: 'Luxury Minibus',
    image: '/images/fleet/tempo-traveller.jpg',
    passengers: '12 - 14 Seats',
    luggage: '8+ Bags',
    ac: 'Dual Roof AC',
    bestFor: 'Group Pilgrimages & Family Excursions',
    ratePerKm: '₹28 / km',
    tag: 'Group Travel',
  },
  {
    id: 'mini-bus',
    name: 'Executive Mini Bus',
    category: 'Luxury Minibus',
    image: '/images/fleet/tempo-traveller.jpg',
    passengers: '21 - 26 Seats',
    luggage: '12+ Bags',
    ac: 'High Capacity Climate System',
    bestFor: 'Wedding Guests, School Tours & Large Delegations',
    ratePerKm: '₹34 / km',
    tag: 'Grand Groups',
  },
];
