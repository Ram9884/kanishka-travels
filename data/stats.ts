export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const MILESTONE_STATS: StatItem[] = [
  {
    id: 'travellers',
    value: 15000,
    suffix: '+',
    label: 'Happy Travellers',
    description: 'Families & executives served across South India',
  },
  {
    id: 'years',
    value: 12,
    suffix: '+ Yrs',
    label: 'Industry Experience',
    description: 'Personalized service since 2012 by S. Ramesh',
  },
  {
    id: 'rating',
    value: 4.9,
    suffix: '★',
    label: 'Google Review Rating',
    description: 'Verified 5-star customer feedback score',
  },
  {
    id: 'corporate',
    value: 120,
    suffix: '+',
    label: 'Corporate Clients',
    description: 'Trusted monthly partners & IT firm delegators',
  },
  {
    id: 'drivers',
    value: 100,
    suffix: '%',
    label: 'Verified Chauffeurs',
    description: 'Background checked highway professionals',
  },
];
