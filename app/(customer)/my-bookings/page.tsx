'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Crown, Calendar, MapPin, Car, Clock, ShieldAlert, Plus } from 'lucide-react';

interface Booking {
  id: string;
  booking_reference: string;
  pickup_location: string;
  drop_location: string;
  pickup_date: string;
  status: string;
  created_at: string;
  assigned_to: string | null;
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string>('Customer');

  useEffect(() => {
    async function fetchBookings() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUserName(user.user_metadata?.full_name || user.email || 'Customer');

        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('customer_id', user.id)
          .order('created_at', { ascending: false });

        if (!error && data) {
          setBookings(data as Booking[]);
        }
      }
      setLoading(false);
    }

    fetchBookings();
  }, []);

  return (
    <div className="min-h-[85vh] bg-[#0A1128] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A16207]">
              <Crown className="w-4 h-4 text-[#A16207]" />
              <span>Customer Portal</span>
            </div>
            <h1 className="text-3xl font-bold font-serif text-white mt-1">
              Welcome, {userName}
            </h1>
            <p className="text-xs text-slate-400">Track your trip requests and vehicle status</p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white text-xs font-bold shadow-lg hover:brightness-110 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Booking Request</span>
          </Link>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-16 text-slate-400 text-sm font-mono">
            Loading your bookings...
          </div>
        ) : bookings.length === 0 ? (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-12 text-center space-y-4">
            <Clock className="w-12 h-12 text-[#A16207] mx-auto" />
            <h2 className="text-xl font-serif font-bold text-white">No Bookings Found</h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              You haven&apos;t submitted any trip requests yet. Click below to start your booking with Kanishka Travels.
            </p>
            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3A8A] text-white text-xs font-semibold hover:bg-[#152e72] transition-colors"
              >
                <span>Book a Trip Now</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#A16207]/40 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#F5D77F] bg-[#1E3A8A]/40 px-2.5 py-1 rounded border border-[#A16207]/30">
                      REF: {booking.booking_reference}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full ${
                      booking.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      booking.status === 'completed' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A16207]" />
                    <span>{booking.pickup_location} → {booking.drop_location}</span>
                  </div>

                  <div className="text-xs text-slate-400 flex items-center gap-4 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> {booking.pickup_date}
                    </span>
                    {booking.assigned_to && (
                      <span className="flex items-center gap-1 text-[#F5D77F]">
                        <Car className="w-3.5 h-3.5" /> Assigned: {booking.assigned_to}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <WhatsAppButton
                    variant="inline"
                    label="Chat about this trip"
                    message={`Hi Ramesh, I am inquiring about my booking ref ${booking.booking_reference}.`}
                    className="w-full md:w-auto text-xs justify-center"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
