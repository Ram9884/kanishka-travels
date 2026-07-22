import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1128] text-slate-100 relative">
      <Navbar />
      <main className="flex-1">{children}</main>
      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
}
