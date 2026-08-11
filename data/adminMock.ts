export interface Driver {
  id: string;
  name: string;
  phone: string;
  licenseNumber: string;
  status: 'Active' | 'On-Trip' | 'Off-Duty';
  rating: number;
  tripsCompleted: number;
}

export interface FleetItem {
  id: string;
  model: string;
  category: string;
  regNumber: string;
  status: 'Available' | 'On-Trip' | 'Maintenance';
  ratePerKm: number;
  driverId?: string;
}

export interface TariffRate {
  id: string;
  category: string;
  baseRatePerKm: number;
  driverBataPerDay: number;
  nightAllowance: number;
  minKmPerDay: number;
}

export const INITIAL_DRIVERS: Driver[] = [
  {
    id: 'drv-1',
    name: 'Murugan K.',
    phone: '+91 98412 34567',
    licenseNumber: 'TN-07-2015-0012345',
    status: 'Active',
    rating: 4.9,
    tripsCompleted: 420,
  },
  {
    id: 'drv-2',
    name: 'Senthil Kumar',
    phone: '+91 97901 23456',
    licenseNumber: 'TN-10-2018-0098765',
    status: 'On-Trip',
    rating: 4.8,
    tripsCompleted: 310,
  },
  {
    id: 'drv-3',
    name: 'Rajesh V.',
    phone: '+91 94440 98765',
    licenseNumber: 'TN-09-2012-0054321',
    status: 'Active',
    rating: 5.0,
    tripsCompleted: 550,
  },
  {
    id: 'drv-4',
    name: 'Saravanan M.',
    phone: '+91 98840 11223',
    licenseNumber: 'TN-22-2019-0077889',
    status: 'Off-Duty',
    rating: 4.7,
    tripsCompleted: 180,
  },
];

export const INITIAL_FLEET: FleetItem[] = [
  {
    id: 'veh-1',
    model: 'Toyota Innova Crysta',
    category: 'Luxury MUV',
    regNumber: 'TN-10-AZ-1234',
    status: 'Available',
    ratePerKm: 18,
    driverId: 'drv-1',
  },
  {
    id: 'veh-2',
    model: 'Toyota Innova Hycross',
    category: 'Hybrid MUV',
    regNumber: 'TN-10-BC-5678',
    status: 'On-Trip',
    ratePerKm: 22,
    driverId: 'drv-2',
  },
  {
    id: 'veh-3',
    model: 'Kia Carens',
    category: 'Premium MUV',
    regNumber: 'TN-10-CD-9012',
    status: 'Available',
    ratePerKm: 16,
    driverId: 'drv-3',
  },
  {
    id: 'veh-4',
    model: 'Maruti Swift Dzire',
    category: 'Premium Sedan',
    regNumber: 'TN-10-EF-3456',
    status: 'Available',
    ratePerKm: 12,
  },
  {
    id: 'veh-5',
    model: 'Force Tempo Traveller',
    category: 'Luxury Minibus',
    regNumber: 'TN-10-GH-7890',
    status: 'Maintenance',
    ratePerKm: 28,
  },
];

export const INITIAL_TARIFFS: TariffRate[] = [
  {
    id: 'tar-1',
    category: 'Sedan (Dzire / Etios)',
    baseRatePerKm: 12,
    driverBataPerDay: 500,
    nightAllowance: 300,
    minKmPerDay: 250,
  },
  {
    id: 'tar-2',
    category: 'Luxury MUV (Innova Crysta)',
    baseRatePerKm: 18,
    driverBataPerDay: 600,
    nightAllowance: 400,
    minKmPerDay: 250,
  },
  {
    id: 'tar-3',
    category: 'Hybrid MUV (Innova Hycross)',
    baseRatePerKm: 22,
    driverBataPerDay: 700,
    nightAllowance: 400,
    minKmPerDay: 300,
  },
  {
    id: 'tar-4',
    category: 'Minibus (Tempo Traveller)',
    baseRatePerKm: 28,
    driverBataPerDay: 1000,
    nightAllowance: 500,
    minKmPerDay: 300,
  },
];
