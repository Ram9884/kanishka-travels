import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#F8F5EE] relative overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">{children}</main>
      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
}
