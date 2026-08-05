export interface VehicleOptionInfo {
  name: string;
  type: string;
  capacity: string;
  features: string;
}

export interface RouteInfo {
  slug: string;
  title: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  description: string;
  longDescription: string;
  routeHighlights: string[];
  vehicleOptions: VehicleOptionInfo[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const ROUTES_DATA: Record<string, RouteInfo> = {
  'chennai-to-pondicherry-cab': {
    slug: 'chennai-to-pondicherry-cab',
    title: 'Chennai to Pondicherry Cab Rental | Luxury Outstation Taxi',
    origin: 'Chennai',
    destination: 'Pondicherry',
    distance: '155 km',
    duration: '3 hrs 30 mins',
    description:
      'Hassle-free outstation cab service from Chennai to Pondicherry via East Coast Road (ECR). Premium Innova Crysta, Hycross & Dzire rentals managed by Kanishka Travels.',
    longDescription:
      'Plan your trip to the French Quarter with Kanishka Travels. Our Chennai to Pondicherry cab service offers scenic ECR coastal driving with optional tourist stops at Mahabalipuram, Salt Pans, and Paradise Beach. Managed directly by S. Ramesh in Chennai with guaranteed clean AC vehicles and prompt door-step pickup.',
    routeHighlights: [
      'Scenic ECR Coastal Highway Route',
      'Optional Mahabalipuram Shore Temple detour',
      'Clean dual-AC Innova Crysta & Hycross options',
      'Prompt door-step pickup anywhere in Chennai',
      'Clear upfront toll & state permit estimate',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire / Etios', type: 'Sedan', capacity: '4 Passengers', features: 'Compact & Economic, Air Conditioned' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Executive Captain Seats, Dual AC' },
      { name: 'Innova Hycross Hybrid', type: 'Luxury MUV', capacity: '6 Passengers', features: 'Ultra-Comfort Hybrid, Climate Control' },
      { name: 'Tempo Traveller', type: 'Minibus', capacity: '12-14 Passengers', features: 'Group Tour Coach, High Luggage Capacity' },
    ],
    faqs: [
      {
        question: 'What is the travel distance and time from Chennai to Pondicherry?',
        answer: 'The travel distance is approximately 155 km via ECR Highway, taking around 3 hours and 30 minutes depending on traffic.',
      },
      {
        question: 'Are toll charges and state entry permits transparently communicated?',
        answer: 'Yes, S. Ramesh provides a clear transparent trip estimate breaking down driver bata, highway tolls, and Puducherry state permits upfront.',
      },
    ],
  },
  'chennai-to-tirupati-taxi': {
    slug: 'chennai-to-tirupati-taxi',
    title: 'Chennai to Tirupati Taxi Service | Special Pilgrimage Package',
    origin: 'Chennai',
    destination: 'Tirupati',
    distance: '135 km',
    duration: '3 hrs 15 mins',
    description:
      'Reliable 3 AM / 4 AM early morning pilgrimage cab service from Chennai to Tirupati Balaji Temple. Experienced mountain drivers and immaculate MUVs.',
    longDescription:
      'Experience a divine and comfortable pilgrimage journey with Kanishka Travels. We specialize in early morning 3 AM / 4 AM pickups from all locations in Chennai to Tirumala / Tirupati. Our drivers have extensive experience driving on the Tirumala ghat roads.',
    routeHighlights: [
      'Early morning 3 AM / 4 AM punctual pickups',
      'Ghat road experienced drivers for Tirumala hills',
      'Spacious MUVs ideal for extended family pilgrimages',
      'Zero advance payment guarantee',
      'Direct WhatsApp status & owner coordination',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire / Etios', type: 'Sedan', capacity: '4 Passengers', features: 'Quiet Comfortable Ride for Small Families' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'High Suspension Comfort for Pilgrimage Groups' },
      { name: 'Innova Hycross', type: 'Luxury MUV', capacity: '6 Passengers', features: 'VIP Comfort with Reclining Seating' },
      { name: 'Tempo Traveller', type: 'Minibus', capacity: '12-14 Passengers', features: 'Ideal for Extended Family & Devotee Groups' },
    ],
    faqs: [
      {
        question: 'How far in advance should I book for a weekend Tirupati trip?',
        answer: 'We recommend booking 2 to 3 days in advance to secure your preferred vehicle category (Innova Crysta or Hycross).',
      },
      {
        question: 'Do you assist with Andhra Pradesh state permit clearances?',
        answer: 'Yes, our driver handles AP border tax counter clearances and toll payments smoothly.',
      },
    ],
  },
  'chennai-airport-taxi': {
    slug: 'chennai-airport-taxi',
    title: 'Chennai Airport Taxi Service | 24/7 Guaranteed Pickup & Drop',
    origin: 'Chennai Airport (MAA)',
    destination: 'Anywhere in Chennai / Outstation',
    distance: 'On Demand',
    duration: '24/7 Availability',
    description:
      '100% punctual Chennai airport transfer service. Flight tracking, 3 AM early morning guarantee, and clean AC sedans & MUVs with zero flight delay penalty.',
    longDescription:
      'Avoid queue delays and last-minute cancellation stress at Chennai International Airport (MAA). Kanishka Travels provides dedicated airport pickup and drop services across Chennai and surrounding outstation cities. Your driver arrives early and shares live status updates.',
    routeHighlights: [
      '24/7 early morning & late night flight transfers',
      'Driver arrives 15 minutes before scheduled pickup',
      'Direct owner coordination via WhatsApp',
      'Luggage assistance & spacious boots',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire / Etios', type: 'Sedan', capacity: '4 Passengers', features: 'Quick Executive Airport Transfer' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Spacious Boot for Heavy Luggage' },
      { name: 'Tempo Traveller', type: 'Minibus', capacity: '12-14 Passengers', features: 'Delegation & Large Group Transfer' },
    ],
    faqs: [
      {
        question: 'What happens if my flight is delayed?',
        answer: 'We monitor live flight arrival times. Your assigned driver adjusts pickup timing accordingly without penalty.',
      },
    ],
  },
  'chennai-to-bangalore-cab': {
    slug: 'chennai-to-bangalore-cab',
    title: 'Chennai to Bangalore Taxi | Premium Outstation Chauffeur Drive',
    origin: 'Chennai',
    destination: 'Bangalore',
    distance: '345 km',
    duration: '6 hrs 30 mins',
    description:
      'Direct highway outstation taxi service from Chennai to Bangalore via NH48. Smooth expressway cruising with executive Innova Crysta and Hycross cabs.',
    longDescription:
      'Travel seamlessly between South India’s tech hubs. Kanishka Travels offers comfortable one-way and round-trip taxi options from Chennai to Bengaluru. Perfect for corporate delegates, family moves, and weekend visits.',
    routeHighlights: [
      'Smooth NH48 expressway driving experience',
      'Well-maintained high-speed highway vehicles',
      'Flexible breakfast & refreshment rest stops',
      'Karnataka border permit guidance',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire / Etios', type: 'Sedan', capacity: '4 Passengers', features: 'Economic Long Highway Cruiser' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Superior Long-Distance Ride Comfort' },
      { name: 'Innova Hycross', type: 'Luxury MUV', capacity: '6 Passengers', features: 'Executive Class Silent Cabin' },
    ],
    faqs: [
      {
        question: 'How long does a cab trip take from Chennai to Bangalore?',
        answer: 'It takes approximately 6.5 hours via the NH48 route depending on highway traffic and rest stops.',
      },
    ],
  },
  'chennai-to-vellore-taxi': {
    slug: 'chennai-to-vellore-taxi',
    title: 'Chennai to Vellore Taxi | CMC Hospital & Golden Temple Transfer',
    origin: 'Chennai',
    destination: 'Vellore',
    distance: '140 km',
    duration: '3 hrs',
    description:
      'Comfortable medical, temple, and corporate taxi service from Chennai to Vellore (CMC Hospital & Sripuram Golden Temple).',
    longDescription:
      'Direct taxi service from Chennai to Vellore caters specially to medical visitors visiting CMC Vellore as well as pilgrims visiting Sripuram Golden Temple. Clean seats, soft suspension, and patient-friendly smooth driving.',
    routeHighlights: [
      'Patient & senior-friendly smooth driving',
      'Direct drop-off at CMC Hospital or Sripuram Temple',
      'Flexible return wait times',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire / Etios', type: 'Sedan', capacity: '4 Passengers', features: 'Patient-Friendly Smooth Transport' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Spacious Seats & Reclining Backrests' },
    ],
    faqs: [
      {
        question: 'Do drivers wait in Vellore for same-day return trips?',
        answer: 'Yes, we provide flexible round-trip packages with affordable driver wait times included.',
      },
    ],
  },
  'chennai-to-mahabalipuram-cab': {
    slug: 'chennai-to-mahabalipuram-cab',
    title: 'Chennai to Mahabalipuram Cab | ECR Heritage Sightseeing Tour',
    origin: 'Chennai',
    destination: 'Mahabalipuram (Mamallapuram)',
    distance: '55 km',
    duration: '1 hr 15 mins',
    description:
      'Comfortable heritage tour cab service from Chennai to Mahabalipuram via ECR. Visit Shore Temple, Pancha Rathas, and Kovalam beach with private chauffeur.',
    longDescription:
      'Enjoy a relaxed coastal day trip along East Coast Road (ECR). Kanishka Travels provides private cab packages for families, couples, and international tourists exploring UNESCO heritage monuments in Mahabalipuram.',
    routeHighlights: [
      'Scenic ECR coastal drive',
      'Stopovers at Kovalam Beach & Crocodile Bank',
      'Punctual door-step pickup & return drop',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire / Etios', type: 'Sedan', capacity: '4 Passengers', features: 'Ideal Sightseeing Cab for Couples & Small Families' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Family Day Out Comfort Vehicle' },
    ],
    faqs: [
      {
        question: 'Can we customize stops along ECR road?',
        answer: 'Yes, our private chauffeurs cater to flexible itinerary stops including Kovalam beach and handicraft stores.',
      },
    ],
  },
  'chennai-to-coimbatore-cab': {
    slug: 'chennai-to-coimbatore-cab',
    title: 'Chennai to Coimbatore Taxi | Long-Distance Intercity Ride',
    origin: 'Chennai',
    destination: 'Coimbatore',
    distance: '505 km',
    duration: '8 hrs 30 mins',
    description:
      'Reliable long-distance intercity taxi service from Chennai to Coimbatore via Salem & Erode. Well-maintained Innova Crysta cabs.',
    longDescription:
      'Direct intercity outstation cabs connecting Chennai to Coimbatore, Isha Yoga Center, and Western Tamil Nadu. Safe night driving and experienced highway chauffeurs.',
    routeHighlights: [
      'Experienced twin-chauffeur options for long drives',
      'Continuous AC & plush seats',
      'Transparent highway toll breakdown',
    ],
    vehicleOptions: [
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Ultimate Long-Distance Comfort' },
      { name: 'Innova Hycross', type: 'Luxury MUV', capacity: '6 Passengers', features: 'Hybrid Eco Comfort Drive' },
    ],
    faqs: [
      {
        question: 'Is night driving available for Coimbatore trips?',
        answer: 'Yes, our certified highway chauffeurs operate 24/7 with zero safety compromise.',
      },
    ],
  },
  'chennai-local-taxi': {
    slug: 'chennai-local-taxi',
    title: 'Chennai Local City Cab Rental | Hourly & Full-Day Package',
    origin: 'Chennai',
    destination: 'Chennai City Wide',
    distance: 'Hourly / Daily',
    duration: 'Full Day Package',
    description:
      'Local city rental cabs in Chennai for shopping, business meetings, wedding functions, and temple visits across Porur, Anna Nagar, T. Nagar, and OMR.',
    longDescription:
      'Book a dedicated car with chauffeur for your local city errands in Chennai. Choose 8 Hrs / 80 Km or 12 Hrs / 120 Km packages with zero advance payment.',
    routeHighlights: [
      'Chauffeur-driven city mobility',
      'Flexible hourly and daily rental packages',
      'Zero advance payment required',
    ],
    vehicleOptions: [
      { name: 'Swift Dzire', type: 'Sedan', capacity: '4 Passengers', features: 'City Shopping & Meeting Travel' },
      { name: 'Innova Crysta', type: 'MUV', capacity: '6-7 Passengers', features: 'Family Function & Corporate Mobility' },
    ],
    faqs: [
      {
        question: 'What local rental packages are available?',
        answer: 'We offer flexible 8-hour / 80 km and 12-hour / 120 km city packages as well as custom hourly extensions.',
      },
    ],
  },
};
