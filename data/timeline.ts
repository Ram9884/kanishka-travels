import { MapPin, Send, ShieldCheck, Sparkles, LucideIcon } from 'lucide-react';

export interface TimelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export const BOOKING_TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: 1,
    title: 'Choose Trip',
    subtitle: 'Route & Vehicle',
    description: 'Select your pickup location, destination, vehicle preference, and date of travel.',
    icon: MapPin,
  },
  {
    stepNumber: 2,
    title: 'Submit Request',
    subtitle: 'Instant Details',
    description: 'Fill in quick booking details or send an instant WhatsApp / call request.',
    icon: Send,
  },
  {
    stepNumber: 3,
    title: 'Owner Confirms',
    subtitle: 'Direct Guarantee',
    description: 'Ramesh directly verifies vehicle availability, pricing, and assigns a top-rated driver.',
    icon: ShieldCheck,
  },
  {
    stepNumber: 4,
    title: 'Travel Comfortably',
    subtitle: 'Hassle-Free Ride',
    description: 'Enjoy a clean, luxury vehicle with zero hidden charges and total peace of mind.',
    icon: Sparkles,
  },
];
