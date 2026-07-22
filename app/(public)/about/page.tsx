import React from 'react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Crown, MapPin, Phone, ShieldCheck, HeartHandshake, Car, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us | Kanishka Travels — S. Ramesh',
  description: 'Learn about Kanishka Travels, Chennai’s trusted taxi & tour operator run personally by S. Ramesh in Iyyappanthangal.',
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono">
          <Crown className="w-4 h-4 text-[#A16207]" />
          <span>Iyyappanthangal, Chennai</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white">
          About Kanishka Travels
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-sans">
          Founded and personally operated by <strong className="text-white">S. Ramesh</strong>, Kanishka Travels is built on a simple promise: <em className="text-[#F5D77F] font-serif font-medium">&quot;Your Trip... Our Responsibility!&quot;</em>
        </p>
      </div>

      {/* Main Story & Values Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl font-bold font-serif text-white">
            Personal Attention to Every Booking
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            In an era of automated cab apps and faceless call centers, Kanishka Travels preserves the personal relationship between a travel provider and a customer.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you need a 4 AM airport drop from Porur, an outstation trip to Tirupati with elderly parents, or a 14-seater Tempo Traveller for a family wedding, S. Ramesh personally logs, coordinates, and confirms every vehicle assignment.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-[#A16207] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">Zero Hidden Costs</h3>
                <p className="text-xs text-slate-400">All trip details, toll terms, and driver bata are clearly communicated before departure.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <Car className="w-5 h-5 text-[#A16207] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">Clean & Verified Fleet</h3>
                <p className="text-xs text-slate-400">Maruti Dzire Sedans, Toyota Innova Crysta SUVs, and Tempo Travellers sanitized before every ride.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <HeartHandshake className="w-5 h-5 text-[#A16207] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">24/7 Phone & WhatsApp Support</h3>
                <p className="text-xs text-slate-400">Reach S. Ramesh directly anytime during your trip for assistance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-[#A16207]/40 p-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-[#A16207]">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-white">Proprietor: S. Ramesh</h3>
              <p className="text-xs text-[#A16207] font-mono">Kanishka Travels • Chennai</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#A16207]" />
              <span>Office: Iyyappanthangal, Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#A16207]" />
              <span>Primary: +91 96773 84267 | Secondary: +91 98845 17451</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton variant="inline" label="Chat with S. Ramesh" className="flex-1 justify-center" />
            <CallButton variant="primary" label="Call Now" className="flex-1 justify-center" />
          </div>

          <div className="text-center pt-2">
            <Link
              href="/book"
              className="inline-block text-xs text-[#F5D77F] font-semibold hover:underline"
            >
              Book a trip online →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
