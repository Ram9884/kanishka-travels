'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import LocationAutocomplete from '@/components/ui/LocationAutocomplete';
import {
  Navigation, Plane, Car, Landmark, Heart, CalendarDays,
  CheckCircle2, ShieldCheck, Phone, BadgeCheck, Crown,
  ArrowRight, ArrowLeft, Users, Briefcase, Wind,
  ChevronUp, ChevronDown, AlertCircle, MapPin,
} from 'lucide-react';
import { animate } from 'animejs';

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  { id: 'outstation', label: 'Outstation Trip', desc: 'TN · AP · Karnataka · Kerala', icon: Navigation },
  { id: 'airport',    label: 'Airport Transfer', desc: 'MAA Chennai International', icon: Plane },
  { id: 'local',      label: 'Local City Ride', desc: 'Hourly & Daily City Travel', icon: Car },
  { id: 'temple',     label: 'Temple Pilgrimage', desc: 'Tirupati · Rameswaram · Madurai', icon: Landmark },
  { id: 'wedding',    label: 'Wedding Travel', desc: 'Decorated Luxury Convoys', icon: Heart },
  { id: 'monthly',    label: 'Monthly Rental', desc: 'Dedicated Chauffeur Contract', icon: CalendarDays },
];

const VEHICLES = [
  {
    id: 'sedan', name: 'Maruti Swift Dzire', category: 'Premium Sedan',
    image: '/images/fleet/swift-dzire.jpg', seats: '4', luggage: '2 Bags',
    ac: 'Powerful AC', bestFor: 'City & Short Outstation', rate: '₹12/km',
  },
  {
    id: 'ertiga', name: 'Maruti Ertiga', category: 'Family MUV',
    image: '/images/fleet/kia-carens.jpg', seats: '6', luggage: '3 Bags',
    ac: 'Dual AC Vents', bestFor: 'Family Trips & City Tours', rate: '₹15/km',
  },
  {
    id: 'innova', name: 'Toyota Innova', category: 'Standard MUV',
    image: '/images/fleet/innova-hycross.jpg', seats: '7', luggage: '4 Bags',
    ac: 'Dual AC', bestFor: 'Long Highway & Groups', rate: '₹17/km',
  },
  {
    id: 'suv', name: 'Toyota Innova Crysta', category: 'Luxury MUV',
    image: '/images/fleet/innova-hycross.jpg', seats: '6–7', luggage: '4 Bags',
    ac: 'Dual-Zone Climate', bestFor: 'VIP & Corporate Travel', rate: '₹18/km', tag: 'Most Popular',
  },
  {
    id: 'tempo', name: 'Force Tempo Traveller', category: 'Luxury Minibus',
    image: '/images/fleet/tempo-traveller.jpg', seats: '12–14', luggage: '8+ Bags',
    ac: 'Dual Roof AC', bestFor: 'Group Pilgrimages & Offsites', rate: '₹28/km',
  },
];

const STEPS = [
  { num: '01', label: 'Service Type', sublabel: 'Choose your journey' },
  { num: '02', label: 'Plan Route',   sublabel: 'Pickup & destination' },
  { num: '03', label: 'Schedule',     sublabel: 'Date, time & guests' },
  { num: '04', label: 'Vehicle & Review', sublabel: 'Choose & confirm' },
];

const TRUST_ITEMS = [
  { icon: Phone,       label: 'Owner Coordination' },
  { icon: ShieldCheck, label: 'Transparent Pricing' },
  { icon: BadgeCheck,  label: 'No Advance Payment' },
  { icon: Crown,       label: '24 / 7 Assistance' },
];

const TIME_PRESETS = ['04:00', '05:00', '06:00', '08:00', '10:00', '12:00', '15:00', '18:00', '20:00'];

// ─── Animation Variants ───────────────────────────────────────────────────────

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: 'easeOut' as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -48 : 48,
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' as const },
  }),
};

// ─── Field Style ──────────────────────────────────────────────────────────────

const fieldCls =
  'w-full rounded-xl bg-[#0E0E10]/80 border border-[#D4AF37]/20 text-white px-4 py-3 text-sm placeholder:text-[#6B7280] focus:border-[#D4AF37]/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-200 backdrop-blur-sm booking-field';

// ─── Step 1 ────────────────────────────────────────────────────────────────

function Step1({
  serviceType, setServiceType, onNext,
}: {
  serviceType: string;
  setServiceType: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="booking-step-title font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
          What kind of journey are you planning?
        </h2>
        <p className="booking-step-subtitle mt-1.5 text-sm text-[#F8F5EE]/55 font-light">
          Select the service that best describes your trip.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SERVICES.map(({ id, label, desc, icon: Icon }, idx) => {
          const active = serviceType === id;
          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => setServiceType(id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.35 }}
              className={`relative p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 group overflow-hidden ${
                active
                  ? 'border-[#D4AF37]/80 bg-[#D4AF37]/10 shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                  : 'border-[#D4AF37]/15 bg-[#0E0E10]/60 hover:border-[#D4AF37]/40 hover:bg-[#1A1A1D]/80'
              }`}
            >
              {active && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent pointer-events-none" />
              )}
              <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center transition-colors duration-300 ${
                active ? 'bg-[#D4AF37]/25 text-[#F5D77F]' : 'bg-[#1A1A1D] text-[#D4AF37]/60 group-hover:text-[#D4AF37]'
              }`}>
                <Icon className="w-4 h-4" strokeWidth={1.8} />
              </div>
              <p className={`text-xs font-bold leading-snug transition-colors duration-200 ${active ? 'text-[#F5D77F]' : 'text-white/90'}`}>
                {label}
              </p>
              <p className="text-[10px] text-[#A1A1AA] mt-0.5 leading-snug">{desc}</p>
              {active && (
                <div className="absolute top-2.5 right-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="pt-2 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!serviceType}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] text-[#0E0E10] font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 2 ────────────────────────────────────────────────────────────────

function Step2({
  pickupLocation, setPickupLocation, dropLocation, setDropLocation, onNext, onBack,
}: {
  pickupLocation: string; setPickupLocation: (v: string) => void;
  dropLocation: string; setDropLocation: (v: string) => void;
  onNext: () => void; onBack: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="booking-step-title font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
          Where would you like to travel?
        </h2>
        <p className="booking-step-subtitle mt-1.5 text-sm text-[#F8F5EE]/55 font-light">
          Enter your pickup and drop location below.
        </p>
      </div>

      {/* Route visual */}
      <div className="relative space-y-0">
        {/* Pickup */}
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          </div>
          <div className="pl-9">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-1">
              Pickup Location
            </label>
            <LocationAutocomplete
              value={pickupLocation}
              onChange={setPickupLocation}
              placeholder="Type your pickup area (e.g. Porur, Airport, Anna Nagar)"
              required
            />
          </div>
        </div>

        {/* Animated connector */}
        <div className="flex items-center pl-3 py-2">
          <div className="flex flex-col items-center gap-[3px]">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-[2px] h-[5px] bg-[#D4AF37]/40 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, delay: i * 0.18, repeat: Infinity }}
              />
            ))}
          </div>
          <div className="ml-6 text-[10px] font-mono text-[#D4AF37]/40 uppercase tracking-widest">
            Route
          </div>
        </div>

        {/* Drop */}
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10">
            <div className="w-2.5 h-2.5 rounded-sm rotate-45 border-2 border-[#D4AF37] bg-transparent" />
          </div>
          <div className="pl-9">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-1">
              Destination
            </label>
            <LocationAutocomplete
              value={dropLocation}
              onChange={setDropLocation}
              placeholder="Type your destination (e.g. Ooty, Tirupati, Pondicherry)"
              required
            />
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D4AF37]/20 text-[#F8F5EE]/60 hover:text-white hover:border-[#D4AF37]/40 text-xs font-medium transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!pickupLocation || !dropLocation}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] text-[#0E0E10] font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
        >
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 3 ────────────────────────────────────────────────────────────────

function Step3({
  serviceType, pickupDate, setPickupDate, pickupTime, setPickupTime,
  returnDate, setReturnDate, passengerCount, setPassengerCount, onNext, onBack,
}: {
  serviceType: string; pickupDate: string; setPickupDate: (v: string) => void;
  pickupTime: string; setPickupTime: (v: string) => void;
  returnDate: string; setReturnDate: (v: string) => void;
  passengerCount: number; setPassengerCount: (v: number) => void;
  onNext: () => void; onBack: () => void;
}) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="booking-step-title font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
          When are you travelling?
        </h2>
        <p className="booking-step-subtitle mt-1.5 text-sm text-[#F8F5EE]/55 font-light">
          Set your travel date, departure time, and passenger count.
        </p>
      </div>

      <div className="space-y-4">
        {/* Date */}
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-2">
            Pickup Date
          </label>
          <input
            type="date"
            value={pickupDate}
            min={today}
            onChange={(e) => setPickupDate(e.target.value)}
            className={fieldCls}
            required
          />
        </div>

        {/* Return date (outstation only) */}
        {serviceType === 'outstation' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-2">
              Return Date <span className="text-[#D4AF37]/40 normal-case">(outstation trips are round-trip)</span>
            </label>
            <input
              type="date"
              value={returnDate}
              min={pickupDate || today}
              onChange={(e) => setReturnDate(e.target.value)}
              className={fieldCls}
              required
            />
          </motion.div>
        )}

        {/* Time presets */}
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-2">
            Departure Time
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {TIME_PRESETS.map((t) => {
              const [h] = t.split(':').map(Number);
              const label = h < 12 ? `${h === 0 ? 12 : h} AM` : `${h === 12 ? 12 : h - 12} PM`;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setPickupTime(t)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium border cursor-pointer transition-all duration-200 ${
                    pickupTime === t
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37]/70 text-[#F5D77F]'
                      : 'bg-[#0E0E10]/60 border-[#D4AF37]/15 text-[#A1A1AA] hover:border-[#D4AF37]/35 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className={fieldCls}
          />
        </div>

        {/* Passenger stepper */}
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-2">
            Passengers
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
              className="w-10 h-10 rounded-xl border border-[#D4AF37]/25 bg-[#0E0E10]/80 text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 transition-all duration-200 cursor-pointer flex items-center justify-center"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="flex-1 text-center">
              <span className="font-serif text-4xl font-bold text-white">{passengerCount}</span>
              <p className="text-[10px] text-[#A1A1AA] mt-0.5">{passengerCount === 1 ? 'Passenger' : 'Passengers'}</p>
            </div>
            <button
              type="button"
              onClick={() => setPassengerCount(Math.min(26, passengerCount + 1))}
              className="w-10 h-10 rounded-xl border border-[#D4AF37]/25 bg-[#0E0E10]/80 text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 transition-all duration-200 cursor-pointer flex items-center justify-center"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D4AF37]/20 text-[#F8F5EE]/60 hover:text-white hover:border-[#D4AF37]/40 text-xs font-medium transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!pickupDate || (serviceType === 'outstation' && !returnDate)}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] text-[#0E0E10] font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
        >
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 4 ────────────────────────────────────────────────────────────────

function Step4({
  serviceType, pickupLocation, dropLocation, pickupDate, pickupTime,
  returnDate, passengerCount, vehiclePreference, setVehiclePreference,
  notes, setNotes, loading, onBack,
}: {
  serviceType: string; pickupLocation: string; dropLocation: string;
  pickupDate: string; pickupTime: string; returnDate: string;
  passengerCount: number; vehiclePreference: string;
  setVehiclePreference: (v: string) => void; notes: string;
  setNotes: (v: string) => void; loading: boolean; onBack: () => void;
}) {
  const serviceName = SERVICES.find((s) => s.id === serviceType)?.label ?? serviceType;
  const selectedVehicle = VEHICLES.find((v) => v.id === vehiclePreference);

  const formatDate = (d: string) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatTime = (t: string) => {
    if (!t) return '—';
    const [h, m] = t.split(':').map(Number);
    const ampm = h < 12 ? 'AM' : 'PM';
    return `${h === 0 ? 12 : h > 12 ? h - 12 : h}:${String(m).padStart(2, '0')} ${ampm}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="booking-step-title font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
          Choose your vehicle & confirm
        </h2>
        <p className="booking-step-subtitle mt-1.5 text-sm text-[#F8F5EE]/55 font-light">
          Select the vehicle that fits your journey best.
        </p>
      </div>

      {/* Vehicle cards */}
      <div className="space-y-3">
        {VEHICLES.map((v) => {
          const active = vehiclePreference === v.id;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => setVehiclePreference(v.id)}
              className={`w-full flex items-center gap-4 p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                active
                  ? 'border-[#D4AF37]/80 bg-[#D4AF37]/10 shadow-[0_0_25px_rgba(212,175,55,0.15)]'
                  : 'border-[#D4AF37]/15 bg-[#0E0E10]/60 hover:border-[#D4AF37]/35 hover:bg-[#1A1A1D]/60'
              }`}
            >
              {/* Vehicle image */}
              <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-[#0B0B0D]">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className={`text-sm font-bold truncate transition-colors duration-200 ${active ? 'text-[#F5D77F]' : 'text-white'}`}>
                    {v.name}
                  </p>
                  {v.tag && (
                    <span className="shrink-0 text-[9px] px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#0B0B0D] font-extrabold uppercase tracking-wider">
                      {v.tag}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[#A1A1AA]">{v.category}</p>
                <div className="flex flex-wrap gap-3 mt-1.5">
                  {[
                    { icon: Users, val: v.seats + ' Seats' },
                    { icon: Briefcase, val: v.luggage },
                    { icon: Wind, val: v.ac },
                  ].map(({ icon: Icon, val }) => (
                    <span key={val} className="inline-flex items-center gap-1 text-[10px] text-[#A1A1AA]">
                      <Icon className="w-3 h-3 text-[#D4AF37]/60" strokeWidth={2} />
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rate + check */}
              <div className="shrink-0 flex flex-col items-end gap-2">
                <span className="text-xs font-bold font-mono text-[#D4AF37]">{v.rate}</span>
                {active && <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-2">
          Special Requirements <span className="text-[#D4AF37]/35 normal-case">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Flight number, extra luggage, elderly passengers needing frequent halts…"
          rows={3}
          className={`${fieldCls} resize-none`}
        />
      </div>

      {/* Journey summary card */}
      <div className="booking-summary-card rounded-2xl bg-[#0B0B0D]/90 border border-[#D4AF37]/20 overflow-hidden">
        <div className="px-5 py-3 border-b border-[#D4AF37]/10 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/80">Journey Summary</span>
        </div>
        <div className="divide-y divide-[#D4AF37]/8">
          {[
            { label: 'Service', value: serviceName },
            { label: 'Pickup', value: pickupLocation || '—' },
            { label: 'Destination', value: dropLocation || '—' },
            { label: 'Date', value: formatDate(pickupDate) },
            { label: 'Time', value: formatTime(pickupTime) },
            ...(serviceType === 'outstation' ? [{ label: 'Return', value: formatDate(returnDate) }] : []),
            { label: 'Passengers', value: String(passengerCount) },
            { label: 'Vehicle', value: selectedVehicle?.name ?? '—' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between px-5 py-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA]">{label}</span>
              <span className="text-xs font-semibold text-white text-right max-w-[55%] truncate">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust block */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: ShieldCheck, label: 'No Advance Payment' },
          { icon: CheckCircle2, label: 'Owner Confirmation' },
          { icon: BadgeCheck, label: 'Transparent Pricing' },
          { icon: Phone, label: 'WhatsApp Support' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0E0E10]/60 border border-[#D4AF37]/10">
            <Icon className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" strokeWidth={2} />
            <span className="text-[10px] text-[#F8F5EE]/65 font-medium">{label}</span>
          </div>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D4AF37]/20 text-[#F8F5EE]/60 hover:text-white hover:border-[#D4AF37]/40 text-xs font-medium transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
        <button
          type="submit"
          disabled={loading || !vehiclePreference}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-[#0E0E10] font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
        >
          <span>{loading ? 'Submitting…' : 'Confirm Booking Request'}</span>
          <CheckCircle2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen({
  bookingRef, serviceType, pickupLocation, dropLocation, pickupDate, pickupTime,
}: {
  bookingRef: string; serviceType: string; pickupLocation: string; dropLocation: string;
  pickupDate: string; pickupTime: string;
}) {
  const router = useRouter();
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // anime.js: draw the success ring and pop the check icon
    animate('.success-ring', {
      strokeDashoffset: [251, 0],
      duration: 1000,
      ease: 'outQuart',
    });
    animate('.success-icon-wrap', {
      scale: [0.4, 1],
      opacity: [0, 1],
      duration: 500,
      delay: 700,
      ease: 'outBack(1.8)',
    });
    const contentEls = document.querySelectorAll('.success-content > *');
    contentEls.forEach((el, i) => {
      animate(el as HTMLElement, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 850 + i * 80,
        ease: 'outCubic',
      });
    });
  }, []);

  const serviceName = SERVICES.find((s) => s.id === serviceType)?.label ?? serviceType;
  const waMsg = `Hi S. Ramesh, I submitted a booking request on Kanishka Travels. Ref: ${bookingRef} | Service: ${serviceName} | From: ${pickupLocation} → ${dropLocation} | Date: ${pickupDate} at ${pickupTime}. Please confirm.`;

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-transparent">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Animated success ring */}
        <div className="flex items-center justify-center">
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              {/* Track */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="4" />
              {/* Animated ring */}
              <circle
                ref={ringRef}
                className="success-ring"
                cx="50" cy="50" r="40" fill="none"
                stroke="url(#goldGrad)" strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="251"
                strokeDashoffset="251"
                style={{ strokeDashoffset: 251 }}
              />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#F5D77F" />
                </linearGradient>
              </defs>
            </svg>
            {/* Check icon */}
            <div className="success-icon-wrap absolute inset-0 flex items-center justify-center opacity-0">
              <CheckCircle2 className="w-12 h-12 text-[#D4AF37]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="success-content space-y-5">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Booking Request Received
            </h1>
            <p className="mt-2 text-sm text-[#F8F5EE]/60 leading-relaxed">
              S. Ramesh will personally review your request and reach out to confirm the vehicle, driver, and pricing.
            </p>
          </div>

          {/* Reference badge */}
          <div className="inline-block px-5 py-2.5 rounded-full bg-[#1A1A1D] border border-[#D4AF37]/40 font-mono text-[#F5D77F] text-sm font-bold">
            Ref: {bookingRef}
          </div>

          {/* Route summary */}
          <div className="rounded-2xl bg-[#0B0B0D]/90 border border-[#D4AF37]/15 p-5 text-left space-y-2.5">
            {[
              { label: 'Service', val: serviceName },
              { label: 'Pickup', val: pickupLocation },
              { label: 'Destination', val: dropLocation },
              { label: 'Date', val: `${pickupDate} · ${pickupTime}` },
            ].map(({ label, val }) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-widest text-[#A1A1AA]">{label}</span>
                <span className="font-semibold text-white text-right max-w-[60%] truncate">{val}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <WhatsAppButton
              variant="inline"
              label="WhatsApp Confirmation with Ramesh"
              message={waMsg}
              className="w-full py-3.5 text-sm justify-center"
            />
            <button
              onClick={() => router.push('/my-bookings')}
              className="w-full text-xs text-[#A1A1AA] hover:text-white underline cursor-pointer transition-colors duration-200"
            >
              View My Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Wizard ──────────────────────────────────────────────────────────────

function BookingWizardContent() {
  const router   = useRouter();
  const params   = useSearchParams();

  const [step, setStep]     = useState(1);
  const [direction, setDir] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState<string | null>(null);
  const [successBookingRef, setSuccessRef] = useState<string | null>(null);
  const [customerId, setCustomerId] = useState<string | null>(null);

  // Form state
  const [serviceType,       setServiceType]       = useState(params?.get('service')  || 'outstation');
  const [pickupLocation,    setPickupLocation]     = useState(params?.get('pickup')   || '');
  const [dropLocation,      setDropLocation]       = useState(params?.get('drop')     || '');
  const [pickupDate,        setPickupDate]         = useState(params?.get('date')     || '');
  const [pickupTime,        setPickupTime]         = useState('06:00');
  const [returnDate,        setReturnDate]         = useState('');
  const [passengerCount,    setPassengerCount]     = useState(4);
  const [vehiclePreference, setVehiclePreference]  = useState(params?.get('vehicle') || '');
  const [notes,             setNotes]              = useState('');

  useEffect(() => {
    async function checkAuth() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/login?redirect=/book');
      else setCustomerId(user.id);
    }
    checkAuth();
  }, [router]);

  const goTo = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerId) { setError('You must be logged in to submit a booking.'); return; }
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const vehicleName = VEHICLES.find((v) => v.id === vehiclePreference)?.name ?? vehiclePreference;
    const fullNotes   = `Vehicle Preference: ${vehicleName}${notes ? `\n${notes}` : ''}`;
    const { data, error: err } = await supabase
      .from('bookings')
      .insert([{
        customer_id:       customerId,
        pickup_location:   pickupLocation,
        drop_location:     dropLocation,
        pickup_date:       pickupDate,
        pickup_time:       pickupTime,
        return_date:       serviceType === 'outstation' ? returnDate : null,
        passenger_count:   passengerCount,
        notes:             fullNotes,
        status:            'pending',
      }])
      .select('booking_reference')
      .single();

    if (err)   { setError(err.message); setLoading(false); }
    else if (data) { setSuccessRef(data.booking_reference); setLoading(false); }
  };

  if (successBookingRef) {
    return (
      <SuccessScreen
        bookingRef={successBookingRef}
        serviceType={serviceType}
        pickupLocation={pickupLocation}
        dropLocation={dropLocation}
        pickupDate={pickupDate}
        pickupTime={pickupTime}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-transparent pt-20">
      {/* ─── Left Panel ─────────────────────────────── */}
      <aside className="hidden lg:block lg:w-[28%] xl:w-[25%] sticky top-35 h-fit ml-[120px] px-8 py-10 rounded-2xl bg-[#0B0B0D]/90 border border-[#D4AF37]/15 backdrop-blur-xl shadow-2xl">
        {/* Step tracker */}
        <div className="space-y-0">
          {STEPS.map((s, idx) => {
            const num      = idx + 1;
            const done     = step > num;
            const active   = step === num;
            return (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4 py-3 transition-all duration-300">
                  {/* Node */}
                  <div className="relative flex flex-col items-center shrink-0 mt-0.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold font-mono border-2 transition-all duration-400 ${
                      done
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0D]'
                        : active
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#1A1A1D] border-[#D4AF37]/20 text-[#A1A1AA]'
                    }`}>
                      {done ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                    </div>
                    {/* Connector */}
                    {idx < 3 && (
                      <div className={`w-[1px] h-6 mt-1 rounded-full transition-colors duration-500 ${
                        done ? 'bg-[#D4AF37]/50' : 'bg-[#D4AF37]/12'
                      }`} />
                    )}
                  </div>
                  {/* Label */}
                  <div className="pt-1 pb-3">
                    <p className={`text-sm font-semibold transition-colors duration-300 ${
                      active ? 'text-[#F5D77F]' : done ? 'text-white/80' : 'text-[#6B7280]'
                    }`}>
                      {s.label}
                    </p>
                    <p className={`text-[11px] transition-colors duration-300 ${
                      active ? 'text-[#D4AF37]/70' : 'text-[#4B5563]'
                    }`}>
                      {s.sublabel}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* ─── Right Panel ────────────────────────────── */}
      <div className="flex-1 flex flex-col">
        {/* Mobile step bar */}
        <div className="lg:hidden sticky top-20 z-30 bg-[#0B0B0D]/95 border-b border-[#D4AF37]/15 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 flex gap-1.5">
              {STEPS.map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-1 rounded-full transition-all duration-400 ${
                    step > idx + 1 ? 'bg-[#D4AF37]' : step === idx + 1 ? 'bg-[#D4AF37]/60' : 'bg-[#D4AF37]/12'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono text-[#D4AF37] shrink-0">{step} / 4</span>
          </div>
          <p className="text-xs font-semibold text-white">{STEPS[step - 1].label}</p>
        </div>

        {/* Form panel */}
        <div className="flex-1 flex items-start justify-center px-4 sm:px-8 lg:px-16 py-12 lg:py-16 overflow-y-auto">
          <div className="w-full max-w-xl">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {step === 1 && (
                    <Step1
                      serviceType={serviceType}
                      setServiceType={setServiceType}
                      onNext={() => goTo(2)}
                    />
                  )}
                  {step === 2 && (
                    <Step2
                      pickupLocation={pickupLocation}
                      setPickupLocation={setPickupLocation}
                      dropLocation={dropLocation}
                      setDropLocation={setDropLocation}
                      onNext={() => goTo(3)}
                      onBack={() => goTo(1)}
                    />
                  )}
                  {step === 3 && (
                    <Step3
                      serviceType={serviceType}
                      pickupDate={pickupDate}
                      setPickupDate={setPickupDate}
                      pickupTime={pickupTime}
                      setPickupTime={setPickupTime}
                      returnDate={returnDate}
                      setReturnDate={setReturnDate}
                      passengerCount={passengerCount}
                      setPassengerCount={setPassengerCount}
                      onNext={() => goTo(4)}
                      onBack={() => goTo(2)}
                    />
                  )}
                  {step === 4 && (
                    <Step4
                      serviceType={serviceType}
                      pickupLocation={pickupLocation}
                      dropLocation={dropLocation}
                      pickupDate={pickupDate}
                      pickupTime={pickupTime}
                      returnDate={returnDate}
                      passengerCount={passengerCount}
                      vehiclePreference={vehiclePreference}
                      setVehiclePreference={setVehiclePreference}
                      notes={notes}
                      setNotes={setNotes}
                      loading={loading}
                      onBack={() => goTo(3)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37] animate-spin" />
        </div>
      }
    >
      <BookingWizardContent />
    </Suspense>
  );
}
