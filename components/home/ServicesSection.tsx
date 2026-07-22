'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Plane, Car, Navigation, Landmark, Building2, Users, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'airport',
    title: 'Airport Pickup & Drop',
    subtitle: 'Chennai International Airport (MAA)',
    description: 'On-time pickup and drop service for all flights. Flight tracking and luggage assistance.',
    icon: Plane,
    badge: '24/7 Available',
  },
  {
    id: 'local',
    title: 'Local Chennai Taxi',
    subtitle: 'City rides & Hourly Packages',
    description: 'Comfortable local travel across Chennai city — T. Nagar, Anna Nagar, OMR, Guindy, Marina.',
    icon: Car,
    badge: 'Hourly & Daily',
  },
  {
    id: 'outstation',
    title: 'Outstation Trips',
    subtitle: 'Tamil Nadu, AP, KA, Kerala',
    description: 'Reliable round-trip outstation travel with experienced highway drivers.',
    icon: Navigation,
    badge: 'Round-Trip Only',
  },
  {
    id: 'temple',
    title: 'Pilgrimage & Temple Tours',
    subtitle: 'Tirupati, Rameswaram, Kanchipuram',
    description: 'Customized temple tour packages with route planning and comfortable halts for families.',
    icon: Landmark,
    badge: 'Popular',
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    subtitle: 'Employee Transport & Executive Cabs',
    description: 'Monthly rentals and corporate travel arrangements for companies in Chennai & Sriperumbudur.',
    icon: Building2,
    badge: 'Monthly Rental',
  },
  {
    id: 'family',
    title: 'Family & Wedding Tours',
    subtitle: 'Group Travel & Tempo Vans',
    description: 'Spacious SUV and Tempo Traveller vehicles for wedding guests, family functions, and vacations.',
    icon: Users,
    badge: 'Large Fleet',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0F172A] relative text-white px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal yOffset={20}>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#A16207]">
              Tailored Travel Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Services Offered by Kanishka Travels
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Every trip is handled personally by S. Ramesh to ensure maximum safety, comfort, and punctuality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} yOffset={30} delay={index * 0.05}>
                <div className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#A16207]/60 p-7 transition-all duration-300 hover:bg-slate-800/80 flex flex-col justify-between h-full shadow-lg">
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/40 border border-[#A16207]/30 flex items-center justify-center text-[#A16207] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#A16207]/15 text-[#F5D77F] border border-[#A16207]/30">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors font-serif mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#A16207] font-mono mb-3">{service.subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <Link
                      href={`/book?service=${service.id}`}
                      className="text-xs font-semibold text-white group-hover:text-[#A16207] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <WhatsAppButton
                      variant="badge"
                      label="Enquire"
                      message={`Hi Ramesh, I'd like to enquire about ${service.title}.`}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
