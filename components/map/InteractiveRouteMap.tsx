'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Clock, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CityNode {
  id: string;
  name: string;
  category: 'Hub' | 'Hill Station' | 'Pilgrimage' | 'Coastal';
  x: number; // percentage in SVG viewport
  y: number;
  travelTime: string;
  popularVehicle: string;
  startingPrice: string;
  description: string;
}

const CITIES: CityNode[] = [
  {
    id: 'chennai',
    name: 'Chennai (Base Hub)',
    category: 'Hub',
    x: 78,
    y: 22,
    travelTime: 'Origin Point',
    popularVehicle: 'Innova Crysta / Hycross / Dzire',
    startingPrice: 'Base Location',
    description: 'Our primary fleet depot in Iyyappanthangal serving MAA Airport and all South India routes.',
  },
  {
    id: 'tirupati',
    name: 'Tirupati Shrine',
    category: 'Pilgrimage',
    x: 75,
    y: 12,
    travelTime: '3.5 Hours',
    popularVehicle: 'Toyota Innova Crysta',
    startingPrice: '₹4,500',
    description: 'Priority darshan assistance, hill climbing experienced drivers, zero toll confusion.',
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    category: 'Coastal',
    x: 74,
    y: 40,
    travelTime: '2.5 Hours',
    popularVehicle: 'Maruti Swift Dzire / Etios',
    startingPrice: '₹3,800',
    description: 'Scenic East Coast Road (ECR) drive with French Quarter & Auroville stops.',
  },
  {
    id: 'salem',
    name: 'Salem',
    category: 'Hub',
    x: 48,
    y: 42,
    travelTime: '5 Hours',
    popularVehicle: 'Kia Carens',
    startingPrice: '₹6,500',
    description: 'Transit hub connecting Chennai to Yercaud coffee hills and western Tamil Nadu.',
  },
  {
    id: 'yercaud',
    name: 'Yercaud Hills',
    category: 'Hill Station',
    x: 52,
    y: 38,
    travelTime: '6 Hours',
    popularVehicle: 'Innova Crysta',
    startingPrice: '₹7,200',
    description: 'Jewel of the Shevaroys with serene lake views and coffee estate hairpin drives.',
  },
  {
    id: 'trichy',
    name: 'Trichy (Tiruchirappalli)',
    category: 'Hub',
    x: 56,
    y: 58,
    travelTime: '5.5 Hours',
    popularVehicle: 'Toyota Etios',
    startingPrice: '₹7,000',
    description: 'Famous Rockfort Temple & Srirangam pilgrimage connections.',
  },
  {
    id: 'madurai',
    name: 'Madurai',
    category: 'Hub',
    x: 48,
    y: 75,
    travelTime: '6.5 Hours',
    popularVehicle: 'Tempo Traveller / Innova',
    startingPrice: '₹8,200',
    description: 'Meenakshi Amman Temple & cultural gateway to southern Tamil Nadu.',
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore',
    category: 'Hub',
    x: 28,
    y: 52,
    travelTime: '7 Hours',
    popularVehicle: 'Innova Hycross',
    startingPrice: '₹9,000',
    description: 'Industrial hub & gateway to Ooty and Nilgiri tea estates.',
  },
  {
    id: 'ooty',
    name: 'Ooty (Nilgiris)',
    category: 'Hill Station',
    x: 22,
    y: 46,
    travelTime: '7.5 Hours',
    popularVehicle: 'Innova Crysta / Hycross',
    startingPrice: '₹9,500',
    description: 'Queen of Hill Stations with 36 hairpin bend expert hill drivers.',
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    category: 'Hill Station',
    x: 35,
    y: 68,
    travelTime: '8 Hours',
    popularVehicle: 'Innova Hycross / Carens',
    startingPrice: '₹11,000',
    description: 'Princess of Hill Stations with misty pine forests and lake tours.',
  },
];

export default function InteractiveRouteMap() {
  const [activeCity, setActiveCity] = useState<CityNode>(CITIES[0]);

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#0A1128] via-[#0D1535] to-[#0A1128] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            <span>Interactive Route Explorer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            South India <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Route Network</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Hover or tap any destination marker below to explore routes, estimated travel times, and vehicle options from Chennai.
          </motion.p>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Vector SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative w-full aspect-[4/3] rounded-2xl glass-dark border border-white/10 p-6 overflow-hidden shadow-2xl flex items-center justify-center"
          >
            {/* SVG Vector Background */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.1)]"
            >
              {/* Animated Connection Lines from Chennai (78, 22) */}
              {CITIES.filter((c) => c.id !== 'chennai').map((city) => (
                <g key={city.id}>
                  <line
                    x1="78"
                    y1="22"
                    x2={city.x}
                    y2={city.y}
                    stroke={activeCity.id === city.id ? '#D4AF37' : 'rgba(212, 175, 55, 0.25)'}
                    strokeWidth={activeCity.id === city.id ? '0.8' : '0.4'}
                    strokeDasharray={activeCity.id === city.id ? 'none' : '1.5,1.5'}
                    className="transition-all duration-300"
                  />
                </g>
              ))}

              {/* City Nodes */}
              {CITIES.map((city) => {
                const isActive = activeCity.id === city.id;
                const isChennai = city.id === 'chennai';

                return (
                  <g
                    key={city.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveCity(city)}
                    onMouseEnter={() => setActiveCity(city)}
                  >
                    {/* Glowing Pulse Ring for Active Node */}
                    {isActive && (
                      <circle
                        key={`pulse-${city.id}`}
                        cx={city.x}
                        cy={city.y}
                        r="4"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Outer Circle */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={isChennai ? '2.8' : '2'}
                      fill={isActive ? '#D4AF37' : isChennai ? '#F5D77F' : '#0F172A'}
                      stroke={isActive ? '#F5D77F' : '#D4AF37'}
                      strokeWidth="0.6"
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Inner Point */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="0.8"
                      fill={isActive ? '#0A1128' : '#D4AF37'}
                    />

                    {/* City Label */}
                    <text
                      x={city.x}
                      y={city.y - 3.5}
                      textAnchor="middle"
                      fill={isActive ? '#F5D77F' : '#CBD5E1'}
                      fontSize="2.5"
                      fontWeight={isActive ? 'bold' : 'normal'}
                      className="transition-colors duration-300 pointer-events-none font-sans"
                    >
                      {city.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* Right Column: Interactive Destination Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl glass-dark border border-[#D4AF37]/50 shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F5D77F] text-xs font-semibold">
                    {activeCity.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{activeCity.travelTime}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
                    <span>{activeCity.name}</span>
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {activeCity.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Popular Vehicle:</span>
                    <span className="text-white font-semibold">{activeCity.popularVehicle}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Est. Starting Fare:</span>
                    <span className="text-[#F5D77F] font-mono font-bold text-sm">
                      {activeCity.startingPrice}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/book?destination=${activeCity.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
                  >
                    <span>Book Route to {activeCity.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
