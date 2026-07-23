export interface FAQItem {
  id: string;
  category: 'Booking' | 'Cancellation' | 'Airport Pickup' | 'Payments' | 'Driver Details' | 'Vehicle Availability' | 'Corporate' | 'Family Trips';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Booking',
    question: 'How do I book a cab with Kanishka Travels?',
    answer: 'Booking is simple and direct. You can fill out our online booking request form, send a quick message on WhatsApp (+91 98400 00000), or call S. Ramesh directly. Every booking is confirmed immediately with vehicle & driver assignment.',
  },
  {
    id: 'faq-2',
    category: 'Cancellation',
    question: 'What is your cancellation & rescheduling policy?',
    answer: 'We understand travel plans can change. Cancellations made up to 12 hours before pickup are completely free with full refund of advance payments. Rescheduling is always free subject to vehicle availability.',
  },
  {
    id: 'faq-3',
    category: 'Airport Pickup',
    question: 'How do early morning 3 AM / 4 AM airport pickups work?',
    answer: 'We guarantee 100% punctuality for early morning airport transfers. Your driver will arrive 10-15 minutes prior to pickup time and share live GPS location via WhatsApp.',
  },
  {
    id: 'faq-4',
    category: 'Payments',
    question: 'Are there any hidden charges (tolls, state permits, driver bata)?',
    answer: 'Zero hidden charges. All trip quotes provided by S. Ramesh explicitly break down base fare, toll estimates, state entry permits (for Andhra/Karnataka/Pondicherry), and driver bata upfront before you start.',
  },
  {
    id: 'faq-5',
    category: 'Driver Details',
    question: 'When will I receive driver and vehicle details?',
    answer: 'You will receive the driver name, verified phone number, vehicle registration number, and vehicle model via SMS and WhatsApp 2 to 4 hours prior to your scheduled pickup time.',
  },
  {
    id: 'faq-6',
    category: 'Vehicle Availability',
    question: 'Can I request a specific vehicle model like Innova Hycross or Dzire?',
    answer: 'Yes! We guarantee the exact vehicle category and model requested (e.g. Innova Crysta, Innova Hycross, Kia Carens, Swift Dzire, Etios, or Tempo Traveller) without last-minute downgrades.',
  },
  {
    id: 'faq-7',
    category: 'Corporate',
    question: 'Do you provide corporate monthly rentals and GST invoices?',
    answer: 'Yes, we specialize in corporate mobility and executive delegate transfers. We provide official GST-compliant tax invoices and customized monthly billing agreements for companies.',
  },
  {
    id: 'faq-8',
    category: 'Family Trips',
    question: 'Are vehicles suitable for long outstation family pilgrimages & hill trips?',
    answer: 'All our MUVs (Innova Crysta/Hycross, Kia Carens) and Tempo Travellers are equipped with dual/triple AC, spacious luggage boots, clean interiors, and experienced highway drivers trained in hill-terrain driving (Ooty, Kodaikanal, Yercaud).',
  },
];
