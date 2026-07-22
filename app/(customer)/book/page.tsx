'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Crown, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

function BookingWizardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successBookingRef, setSuccessBookingRef] = useState<string | null>(null);
  const [customerId, setCustomerId] = useState<string | null>(null);

  // Form State
  const [serviceType, setServiceType] = useState(searchParams?.get('service') || 'outstation');
  const [pickupLocation, setPickupLocation] = useState(searchParams?.get('pickup') || '');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(searchParams?.get('date') || '');
  const [pickupTime, setPickupTime] = useState('06:00');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(4);
  const [vehiclePreference, setVehiclePreference] = useState(searchParams?.get('vehicle') || 'sedan');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    async function checkAuth() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login?redirect=/book');
      } else {
        setCustomerId(user.id);
      }
    }
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerId) {
      setError('You must be logged in to submit a booking.');
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data, error: insertError } = await supabase
      .from('bookings')
      .insert([
        {
          customer_id: customerId,
          pickup_location: pickupLocation,
          drop_location: dropLocation,
          pickup_date: pickupDate,
          pickup_time: pickupTime,
          return_date: serviceType === 'outstation' ? returnDate : null,
          passenger_count: passengerCount,
          notes,
          status: 'pending',
        },
      ])
      .select('booking_reference')
      .single();

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else if (data) {
      setSuccessBookingRef(data.booking_reference);
      setLoading(false);
    }
  };

  if (successBookingRef) {
    const successMsg = `Hi S. Ramesh, I just submitted a booking request on Kanishka Travels website. Ref: ${successBookingRef}, Service: ${serviceType}, Pickup: ${pickupLocation}, Drop: ${dropLocation}, Date: ${pickupDate}. Please confirm.`;

    return (
      <div className="min-h-[85vh] flex items-center justify-center bg-[#0A1128] text-white px-4 py-12">
        <div className="max-w-xl w-full rounded-2xl bg-slate-900 border border-[#A16207]/40 p-8 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="text-3xl font-bold font-serif text-white">Booking Request Received!</h1>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1E3A8A] text-[#F5D77F] font-mono text-sm font-bold border border-[#A16207]/40">
            Booking Ref: {successBookingRef}
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            Your trip request is saved. S. Ramesh will review your details and contact you shortly to confirm driver and vehicle assignment.
          </p>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left text-xs text-slate-300 space-y-2 font-mono">
            <p><strong className="text-white">Pickup:</strong> {pickupLocation}</p>
            <p><strong className="text-white">Drop:</strong> {dropLocation}</p>
            <p><strong className="text-white">Date:</strong> {pickupDate} ({pickupTime})</p>
            {serviceType === 'outstation' && <p><strong className="text-white">Return Date (Round-Trip):</strong> {returnDate}</p>}
          </div>

          <div className="pt-2 space-y-3">
            <WhatsAppButton
              variant="inline"
              label="Instant WhatsApp Confirmation with Ramesh"
              message={successMsg}
              className="w-full py-3.5 text-sm justify-center"
            />
            <button
              onClick={() => router.push('/my-bookings')}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Go to My Bookings Portal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] bg-[#0A1128] text-white py-12 px-4">
      <div className="max-w-3xl mx-auto rounded-2xl bg-slate-900 border border-[#A16207]/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A16207]/15 border border-[#A16207]/40 text-[#F5D77F] text-xs font-mono">
            <Crown className="w-4 h-4 text-[#A16207]" />
            <span>Kanishka Travels Booking Wizard</span>
          </div>
          <h1 className="text-3xl font-bold font-serif text-white">Book Your Trip</h1>
          <p className="text-xs text-slate-400">Step {step} of 3: {step === 1 ? 'Service & Route' : step === 2 ? 'Schedule & Passengers' : 'Vehicle Preference & Review'}</p>
        </div>

        {/* Step Progress Indicator */}
        <div className="grid grid-cols-3 gap-2 border-b border-slate-800 pb-6">
          <div className={`h-1.5 rounded-full transition-all ${step >= 1 ? 'bg-[#A16207]' : 'bg-slate-800'}`}></div>
          <div className={`h-1.5 rounded-full transition-all ${step >= 2 ? 'bg-[#A16207]' : 'bg-slate-800'}`}></div>
          <div className={`h-1.5 rounded-full transition-all ${step >= 3 ? 'bg-[#A16207]' : 'bg-slate-800'}`}></div>
        </div>

        {error && (
          <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Service & Route */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">Service Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'outstation', label: 'Outstation Trip (Round-Trip Only)', desc: 'Outside Chennai to TN, AP, KA, KL' },
                    { id: 'airport', label: 'Airport Pickup & Drop', desc: 'MAA Chennai Airport' },
                    { id: 'local', label: 'Local Chennai Taxi', desc: 'Daily / Hourly city rides' },
                    { id: 'temple', label: 'Temple / Pilgrimage Package', desc: 'Tirupati, Rameswaram, etc.' },
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceType(srv.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceType === srv.id
                          ? 'bg-[#1E3A8A] border-[#A16207] text-white shadow-lg'
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <p className="font-semibold text-sm">{srv.label}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{srv.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Pickup Location</label>
                <input
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="e.g. Iyyappanthangal, Porur, Airport"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Destination / Drop Location</label>
                <input
                  type="text"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder="e.g. Tirupati, Pondicherry, T. Nagar"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none"
                  required
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!pickupLocation || !dropLocation}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-semibold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  <span>Next: Date & Passengers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Dates & Passengers */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Pickup Date</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none cursor-pointer"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Pickup Time</label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none cursor-pointer"
                    required
                  />
                </div>
              </div>

              {serviceType === 'outstation' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Return Date <span className="text-[#F5D77F] font-mono text-[10px]">(Outstation trips are strictly round-trip)</span>
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none cursor-pointer"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Passenger Count</label>
                <select
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(Number(e.target.value))}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!pickupDate}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-semibold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  <span>Next: Vehicle Preference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Vehicle Preference & Submit */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">Vehicle Type Preference</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'sedan', name: 'Maruti Dzire', capacity: 'Sedan (4 Seater)' },
                    { id: 'suv', name: 'Innova Crysta', capacity: 'SUV (7 Seater)' },
                    { id: 'tempo', name: 'Tempo Traveller', capacity: 'Van (12+ Seater)' },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVehiclePreference(v.id)}
                      className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        vehiclePreference === v.id
                          ? 'bg-[#1E3A8A] border-[#A16207] text-white shadow-lg'
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <p className="font-bold text-xs">{v.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{v.capacity}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Additional Notes / Special Requirements</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Flight number, extra luggage space, elderly passengers needing halts"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-xs focus:border-[#A16207] focus:outline-none h-20"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1.5 font-mono">
                <p className="text-white font-bold font-sans">Summary Review:</p>
                <p>• Service: <span className="text-[#F5D77F] uppercase">{serviceType}</span></p>
                <p>• Route: <span className="text-white">{pickupLocation}</span> to <span className="text-white">{dropLocation}</span></p>
                <p>• Date: <span className="text-white">{pickupDate} ({pickupTime})</span></p>
                <p>• Vehicle: <span className="text-white uppercase">{vehiclePreference}</span></p>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50 border border-amber-300/40"
                >
                  <span>{loading ? 'Submitting Request...' : 'Submit Booking Request'}</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="pt-2 text-center border-t border-slate-800">
          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>No online payment gateway required. S. Ramesh will confirm pricing directly.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[80vh] flex items-center justify-center text-slate-400 font-mono text-xs">
        Loading booking wizard...
      </div>
    }>
      <BookingWizardContent />
    </Suspense>
  );
}
