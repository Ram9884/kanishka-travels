export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  tripType: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Karthik Subramanian',
    role: 'IT Project Lead',
    location: 'Velachery, Chennai',
    tripType: 'Pilgrimage Outstation',
    rating: 5,
    date: 'March 2026',
    review: 'S. Ramesh personally organized our family Tirupati trip. Driver arrived sharp at 4 AM in a spotless Innova Crysta. Zero toll confusion, courteous driver, and super smooth driving through the hills!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
  {
    id: '2',
    name: 'Priya & Anand Ramachandran',
    role: 'NRI Family',
    location: 'Singapore / Adyar',
    tripType: 'Coastal Outstation Tour',
    rating: 5,
    date: 'February 2026',
    review: 'Booked Kanishka Travels for a 3-day ECR & Pondicherry vacation. The Innova Hycross was immaculate with excellent AC. Ramesh sir kept checking in to make sure we were comfortable. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
  {
    id: '3',
    name: 'Dr. Vigneshwaran S.',
    role: 'Consultant Surgeon',
    location: 'Anna Nagar, Chennai',
    tripType: 'Airport Chauffeur Transfer',
    rating: 5,
    date: 'January 2026',
    review: 'Needed a reliable 3:30 AM airport pickup for an international flight. Etios arrived 10 minutes early. Professional driver who knew the fastest route even with roadworks. Truly 100% punctual.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
  {
    id: '4',
    name: 'Meenakshi Sundaram',
    role: 'Event Director',
    location: 'T. Nagar, Chennai',
    tripType: 'Executive Fleet Service',
    rating: 5,
    date: 'December 2025',
    review: 'Coordinated wedding travel for 30+ outstation guests. Ramesh managed all vehicle timings effortlessly. All cars were clean, drivers polite, and billing completely transparent without hidden extras.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
];
