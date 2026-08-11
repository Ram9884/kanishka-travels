import { 
  Plane, 
  Navigation, 
  Briefcase, 
  Landmark, 
  Heart, 
  CalendarDays,
  LucideIcon
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  icon: LucideIcon;
  badge?: string;
}

export const PREMIUM_SERVICES: ServiceItem[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'Punctual 24/7 airport pickups and drops at Chennai International Airport (MAA) with flight tracking.',
    iconName: 'Plane',
    icon: Plane,
    badge: '24/7 Available',
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Trips',
    description: 'Custom round-trips and one-way travel across Tamil Nadu, Puducherry, Andhra, and Karnataka.',
    iconName: 'Navigation',
    icon: Navigation,
    badge: 'Popular',
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Executive mobility, delegate transfers, and monthly corporate fleet management with GST billing.',
    iconName: 'Briefcase',
    icon: Briefcase,
  },
  {
    id: 'temple-tours',
    title: 'Temple Tours',
    description: 'Special pilgrimage packages to Tirupati, Kanchipuram, Rameswaram, and Madurai with VIP darshan guidance.',
    iconName: 'Landmark',
    icon: Landmark,
    badge: 'Special Package',
  },
  {
    id: 'wedding-travel',
    title: 'Wedding Travel',
    description: 'Decorated luxury sedans and fleet coordination for bride, groom, and wedding guests.',
    iconName: 'Heart',
    icon: Heart,
  },
  {
    id: 'monthly-rentals',
    title: 'Monthly Rentals',
    description: 'Flexible long-term car rentals with dedicated professional chauffeurs for personal or business use.',
    iconName: 'CalendarDays',
    icon: CalendarDays,
  },
];
