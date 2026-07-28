'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useTheme } from '@/components/ThemeProvider';
import {
  Crown, Calendar, MapPin, Car, Clock, Plus,
  CheckCircle2, Loader2, ArrowRight, Sparkles,
  Package, User, CalendarDays,
} from 'lucide-react';

interface Booking {
  id: string;
  booking_reference: string;
  pickup_location: string;
  drop_location: string;
  pickup_date: string;
  pickup_time?: string;
  status: string;
  created_at: string;
  assigned_to: string | null;
  notes?: string;
}

function StatusBadge({ status }: { status: string }) {
  const cfg: Record<string, { label: string; dark: string; light: string; dot: string }> = {
    confirmed: {
      label: 'Confirmed',
      dark:  'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      light: 'bg-emerald-50   text-emerald-700 border-emerald-300/60',
      dot:   'bg-emerald-400',
    },
    completed: {
      label: 'Completed',
      dark:  'bg-blue-500/15 text-blue-300 border-blue-500/30',
      light: 'bg-blue-50    text-blue-700  border-blue-300/60',
      dot:   'bg-blue-400',
    },
    cancelled: {
      label: 'Cancelled',
      dark:  'bg-rose-500/15 text-rose-300 border-rose-500/30',
      light: 'bg-rose-50    text-rose-700  border-rose-300/60',
      dot:   'bg-rose-400',
    },
    pending: {
      label: 'Pending',
      dark:  'bg-amber-500/15 text-amber-300 border-amber-500/30',
      light: 'bg-amber-50    text-amber-700  border-amber-300/60',
      dot:   'bg-amber-400',
    },
  };
  const { theme } = useTheme();
  const c = cfg[status] ?? cfg.pending;

  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
      theme === 'dark' ? c.dark : c.light
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${c.dot}`} />
      {c.label}
    </span>
  );
}

function BookingCard({ booking, idx }: { booking: Booking; idx: number }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const formatDate = (d: string) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const waMsg = `Hi Ramesh, I am inquiring about my booking ref ${booking.booking_reference}.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.07, ease: 'easeOut' }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
        isLight
          ? 'bg-white border-[#B8860B]/20 shadow-[0_4px_20px_rgba(184,134,11,0.07)] hover:border-[#B8860B]/45 hover:shadow-[0_8px_32px_rgba(184,134,11,0.14)]'
          : 'bg-[#13131A]/90 border-[#D4AF37]/12 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/35 hover:shadow-[0_8px_36px_rgba(212,175,55,0.12)]'
      }`}
    >
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-5">

          {/* Left: Info */}
          <div className="flex-1 space-y-3.5 min-w-0">
            {/* Ref + Status row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-lg border ${
                isLight
                  ? 'bg-amber-50 border-[#B8860B]/30 text-[#78350F]'
                  : 'bg-[#D4AF37]/8 border-[#D4AF37]/25 text-[#F5D77F]'
              }`}>
                REF: {booking.booking_reference}
              </span>
              <StatusBadge status={booking.status} />
            </div>

            {/* Route */}
            <div className={`flex items-start gap-2.5 text-sm font-semibold ${
              isLight ? 'text-[#1A1108]' : 'text-[#F8F5EE]'
            }`}>
              <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${isLight ? 'text-[#B8860B]' : 'text-[#D4AF37]'}`} />
              <span className="leading-snug">
                {booking.pickup_location}
                <span className={`mx-2 font-normal ${isLight ? 'text-[#B8860B]/60' : 'text-[#D4AF37]/50'}`}>→</span>
                {booking.drop_location}
              </span>
            </div>

            {/* Meta row */}
            <div className={`flex flex-wrap items-center gap-4 text-[11px] font-mono ${
              isLight ? 'text-[#78350F]/65' : 'text-[#71717A]'
            }`}>
              <span className="flex items-center gap-1.5">
                <CalendarDays className={`w-3.5 h-3.5 ${isLight ? 'text-[#B8860B]/70' : 'text-[#D4AF37]/50'}`} />
                {formatDate(booking.pickup_date)}
                {booking.pickup_time && ` · ${booking.pickup_time}`}
              </span>
              {booking.assigned_to && (
                <span className={`flex items-center gap-1.5 font-semibold ${
                  isLight ? 'text-[#B8860B]' : 'text-[#F5D77F]'
                }`}>
                  <Car className="w-3.5 h-3.5" />
                  {booking.assigned_to}
                </span>
              )}
            </div>
          </div>

          {/* Right: WhatsApp CTA */}
          <div className="shrink-0 w-full md:w-auto">
            <WhatsAppButton
              variant="inline"
              label="Chat about trip"
              message={waMsg}
              className="w-full md:w-auto text-xs justify-center"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading]   = useState(true);
  const [userName, setUserName] = useState<string>('Customer');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    async function fetchBookings() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'Customer');
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('customer_id', user.id)
          .order('created_at', { ascending: false });

        if (!error && data) setBookings(data as Booking[]);
      }
      setLoading(false);
    }
    fetchBookings();
  }, []);

  return (
    <div className={`min-h-screen py-24 px-4 transition-colors duration-500 ${
      isLight ? 'bg-transparent' : 'bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto space-y-8">

        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`rounded-2xl border overflow-hidden ${
            isLight
              ? 'bg-white border-[#B8860B]/22 shadow-[0_6px_28px_rgba(184,134,11,0.09)]'
              : 'bg-[#13131A]/90 border-[#D4AF37]/15 shadow-[0_6px_30px_rgba(0,0,0,0.55)]'
          }`}
        >
          {/* Gold top bar */}
          <div className="h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="px-6 sm:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
            <div className="space-y-1.5">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest ${
                isLight
                  ? 'bg-amber-50 border-[#B8860B]/30 text-[#B8860B]'
                  : 'bg-[#D4AF37]/8 border-[#D4AF37]/25 text-[#D4AF37]'
              }`}>
                <Crown className="w-3 h-3" />
                Customer Portal
              </div>

              <h1 className={`font-serif text-2xl sm:text-3xl font-bold leading-tight ${
                isLight ? 'text-[#1A1108]' : 'text-[#F8F5EE]'
              }`}>
                Welcome back,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">
                  {userName}
                </span>
              </h1>

              <p className={`text-xs font-light ${isLight ? 'text-[#78350F]/65' : 'text-[#71717A]'}`}>
                Track your trip requests, view status updates and chat with Ramesh
              </p>
            </div>

            {/* New Booking CTA */}
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-[#0B0B0D] text-xs font-extrabold uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.30)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              New Booking
            </Link>
          </div>
        </motion.div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <Loader2 className={`w-8 h-8 animate-spin ${isLight ? 'text-[#B8860B]' : 'text-[#D4AF37]'}`} />
              <p className={`text-xs font-mono ${isLight ? 'text-[#78350F]/60' : 'text-[#71717A]'}`}>
                Loading your bookings…
              </p>
            </motion.div>
          ) : bookings.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl border text-center py-16 px-8 space-y-5 ${
                isLight
                  ? 'bg-white border-[#B8860B]/20 shadow-[0_4px_20px_rgba(184,134,11,0.07)]'
                  : 'bg-[#13131A]/90 border-[#D4AF37]/12 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Empty state icon */}
              <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center border ${
                isLight
                  ? 'bg-amber-50 border-[#B8860B]/25'
                  : 'bg-[#D4AF37]/8 border-[#D4AF37]/20'
              }`}>
                <Package className={`w-7 h-7 ${isLight ? 'text-[#B8860B]' : 'text-[#D4AF37]'}`} />
              </div>

              <div className="space-y-2">
                <h2 className={`text-xl font-serif font-bold ${isLight ? 'text-[#1A1108]' : 'text-[#F8F5EE]'}`}>
                  No Bookings Yet
                </h2>
                <p className={`text-xs max-w-xs mx-auto leading-relaxed ${isLight ? 'text-[#78350F]/65' : 'text-[#71717A]'}`}>
                  You haven&apos;t submitted any trip requests yet. Plan your first journey with Kanishka Travels.
                </p>
              </div>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-[#0B0B0D] text-xs font-extrabold uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.28)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.42)] hover:scale-[1.03] transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Book Your First Trip
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Count badge */}
              <div className={`flex items-center gap-2 text-[11px] font-mono ${
                isLight ? 'text-[#78350F]/60' : 'text-[#71717A]'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isLight ? 'text-[#B8860B]' : 'text-[#D4AF37]'}`} />
                {bookings.length} booking{bookings.length !== 1 ? 's' : ''} found
              </div>

              {bookings.map((booking, idx) => (
                <BookingCard key={booking.id} booking={booking} idx={idx} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer note ── */}
        {!loading && bookings.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-center text-[10px] font-mono pb-4 ${
              isLight ? 'text-[#92400E]/40' : 'text-[#52525B]'
            }`}
          >
            Booking confirmations are sent by S. Ramesh personally via WhatsApp
          </motion.p>
        )}
      </div>
    </div>
  );
}
