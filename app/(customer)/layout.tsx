import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JourneyLine from '@/components/motion/JourneyLine';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-100 relative">
      <Navbar />
      <JourneyLine />
      <main className="flex-1">{children}</main>
      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
}
