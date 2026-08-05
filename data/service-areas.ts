export interface ServiceAreaInfo {
  slug: string;
  name: string;
  landmark: string;
  distanceToAirport: string;
  description: string;
  highlights: string[];
  vehicleTypes: string[];
  keywords: string[];
}

export const SERVICE_AREAS_DATA: Record<string, ServiceAreaInfo> = {
  'iyyappanthangal': {
    slug: 'iyyappanthangal',
    name: 'Iyyappanthangal',
    landmark: 'Mount-Poonamallee Road & SRMC Hospital Hub',
    distanceToAirport: '14 km (approx. 25 mins)',
    description:
      'Home base of Kanishka Travels operated personally by S. Ramesh. 24/7 instant pickup for Ramachandra Hospital, Porur, and Mount-Poonamallee belt outstation trips.',
    highlights: [
      'Direct headquarters & dispatch center',
      'SRMC & Ramachandra Hospital patient transfers',
      '24/7 instant airport & outstation cab availability',
      'Zero advance payment for local & outstation rides',
    ],
    vehicleTypes: ['Innova Crysta', 'Innova Hycross', 'Swift Dzire', 'Tempo Traveller'],
    keywords: [
      'Iyyappanthangal taxi service',
      'S Ramesh Kanishka Travels Iyyappanthangal',
      'SRMC Ramachandra hospital cab',
      'Mount Poonamallee outstation cab',
    ],
  },
  'porur': {
    slug: 'porur',
    name: 'Porur',
    landmark: 'Porur Junction & DLF IT Park',
    distanceToAirport: '12 km (approx. 22 mins)',
    description:
      'Fast 15-minute cab pickup across Porur Junction, DLF Cybercity, and Mount-Poonamallee Road. Specializing in corporate outstation travel and airport drops.',
    highlights: [
      '15-minute pickup guarantee in Porur DLF area',
      'Corporate executive outstation rides',
      'Early morning 3 AM airport drops',
    ],
    vehicleTypes: ['Innova Crysta', 'Toyota Etios', 'Kia Carens', 'Tempo Traveller'],
    keywords: [
      'Porur taxi service',
      'DLF IT Park outstation cab',
      'Porur to Tirupati cab',
      'Porur airport taxi',
    ],
  },
  'poonamallee': {
    slug: 'poonamallee',
    name: 'Poonamallee',
    landmark: 'Poonamallee Trunk Road & Bypass Interchange',
    distanceToAirport: '18 km (approx. 30 mins)',
    description:
      'Direct expressway access cab rentals from Poonamallee to Bengaluru Highway (NH48), Tirupati, and Vellore.',
    highlights: [
      'Highway exit location for fast outstation start',
      'Bengaluru & Vellore route specialists',
      'Spacious family MUVs for pilgrimage',
    ],
    vehicleTypes: ['Innova Crysta', 'Swift Dzire', 'Tempo Traveller'],
    keywords: [
      'Poonamallee cab booking',
      'Poonamallee to Tirupati taxi',
      'Poonamallee outstation cab',
    ],
  },
  'tambaram': {
    slug: 'tambaram',
    name: 'Tambaram',
    landmark: 'Tambaram Railway Junction & GST Road',
    distanceToAirport: '9 km (approx. 15 mins)',
    description:
      'Quick outstation & airport pickup along GST Road, Tambaram Sanatorium, and West Tambaram.',
    highlights: [
      'Close proximity to Chennai International Airport',
      'GST Road highway outstation departure',
      'Clean dual-AC vehicles',
    ],
    vehicleTypes: ['Innova Hycross', 'Innova Crysta', 'Swift Dzire'],
    keywords: [
      'Tambaram taxi service',
      'Tambaram airport drop cab',
      'Tambaram to Pondicherry taxi',
    ],
  },
  'velachery': {
    slug: 'velachery',
    name: 'Velachery',
    landmark: 'Velachery Main Road & Phoenix Marketcity',
    distanceToAirport: '10 km (approx. 20 mins)',
    description:
      'Dedicated outstation cabs and airport transfers for residents and IT professionals in Velachery and South Chennai.',
    highlights: [
      'Rapid pickup across Velachery Main Road',
      'Pondicherry ECR outstation departure',
      'Executive chauffeur service',
    ],
    vehicleTypes: ['Innova Crysta', 'Innova Hycross', 'Swift Dzire', 'Tempo Traveller'],
    keywords: [
      'Velachery outstation cab',
      'Velachery airport taxi',
      'Velachery to Pondicherry cab',
    ],
  },
  'omr': {
    slug: 'omr',
    name: 'OMR (Old Mahabalipuram Road)',
    landmark: 'IT Corridor, Sholinganallur & Perungudi',
    distanceToAirport: '16 km (approx. 30 mins)',
    description:
      'Premium chauffeur service along the IT Expressway (OMR), Taramani, Perungudi, Sholinganallur, and Navalur.',
    highlights: [
      'Corporate IT delegate mobility',
      'ECR coastal outstation connectivity',
      'GST invoice compliant corporate rentals',
    ],
    vehicleTypes: ['Innova Hycross', 'Innova Crysta', 'Kia Carens', 'Tempo Traveller'],
    keywords: [
      'OMR taxi service Chennai',
      'Sholinganallur outstation cab',
      'OMR to Pondicherry taxi',
      'IT Corridor cab rental',
    ],
  },
  'anna-nagar': {
    slug: 'anna-nagar',
    name: 'Anna Nagar',
    landmark: 'Anna Tower Park & Roundtana',
    distanceToAirport: '17 km (approx. 35 mins)',
    description:
      'Luxury outstation car rental and airport pickup service for residents across Anna Nagar East, West, and Shenoy Nagar.',
    highlights: [
      'Executive luxury MUV availability',
      'Family pilgrimage outstation packages',
      'Prompt door-step pickup',
    ],
    vehicleTypes: ['Innova Crysta', 'Innova Hycross', 'Swift Dzire', 'Executive Coach'],
    keywords: [
      'Anna Nagar taxi service',
      'Anna Nagar outstation cab',
      'Anna Nagar to Tirupati taxi',
    ],
  },
  't-nagar': {
    slug: 't-nagar',
    name: 'T. Nagar',
    landmark: 'Usman Road & Panagal Park',
    distanceToAirport: '13 km (approx. 25 mins)',
    description:
      'Reliable outstation cab booking and shopping tour transportation from T. Nagar, Pondy Bazaar, and Kodambakkam.',
    highlights: [
      'Central Chennai outstation dispatch',
      'Shopping & wedding convoy mobility',
      'Zero advance payment guarantee',
    ],
    vehicleTypes: ['Innova Crysta', 'Swift Dzire', 'Tempo Traveller'],
    keywords: [
      'T Nagar taxi service',
      'T Nagar outstation cab',
      'T Nagar to Pondicherry taxi',
    ],
  },
  'guindy': {
    slug: 'guindy',
    name: 'Guindy',
    landmark: 'Guindy Industrial Estate & Kathipara Flyover',
    distanceToAirport: '7 km (approx. 12 mins)',
    description:
      'Fastest airport transfers and outstation connections from Kathipara Junction, Olympia Tech Park, and Guindy.',
    highlights: [
      'Direct access to GST Road & Chennai Airport',
      '24/7 instant corporate & airport pickup',
      'Punctual chauffeur guarantee',
    ],
    vehicleTypes: ['Innova Crysta', 'Swift Dzire', 'Tempo Traveller'],
    keywords: [
      'Guindy taxi service',
      'Kathipara airport drop cab',
      'Olympia Tech Park outstation taxi',
    ],
  },
  'chromepet': {
    slug: 'chromepet',
    name: 'Chromepet',
    landmark: 'GST Road & MIT Campus',
    distanceToAirport: '6 km (approx. 10 mins)',
    description:
      'Ultra-fast 10-minute airport pickup and GST road highway outstation travel from Chromepet and Pallavaram.',
    highlights: [
      '10-minute airport pickup proximity',
      'GST Road outstation departure',
      'Experienced highway chauffeurs',
    ],
    vehicleTypes: ['Swift Dzire', 'Innova Crysta', 'Tempo Traveller'],
    keywords: [
      'Chromepet taxi service',
      'Chromepet airport cab',
      'Chromepet outstation taxi',
    ],
  },
  'koyambedu': {
    slug: 'koyambedu',
    name: 'Koyambedu',
    landmark: 'CMBT Bus Terminus & Metro Station',
    distanceToAirport: '15 km (approx. 28 mins)',
    description:
      'Direct intercity outstation cabs connecting Koyambedu CMBT Metro Hub to Tirupati, Pondicherry, Vellore, and Bengaluru.',
    highlights: [
      'CMBT & Metro Station pickup coordination',
      'Intercity highway route specialists',
      'Spacious luggage capacity',
    ],
    vehicleTypes: ['Innova Crysta', 'Swift Dzire', 'Tempo Traveller'],
    keywords: [
      'Koyambedu taxi service',
      'CMBT outstation cab',
      'Koyambedu to Tirupati taxi',
    ],
  },
};
