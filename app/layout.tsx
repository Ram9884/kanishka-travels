import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kanishka Travels | Taxi, Outstation & Tour Rentals in Chennai',
  description: 'Book airport taxis, local rides, outstation round-trips, and temple tours in Chennai with Kanishka Travels. Managed personally by S. Ramesh in Iyyappanthangal.',
  keywords: ['Kanishka Travels', 'Chennai Taxi', 'Outstation Car Rental', 'Airport Taxi Chennai', 'Innova Crysta Rental', 'Tempo Traveller Chennai', 'S Ramesh Travels'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full bg-[#0A1128] text-slate-100 font-sans selection:bg-[#A16207] selection:text-white">
        {children}
      </body>
    </html>
  );
}
