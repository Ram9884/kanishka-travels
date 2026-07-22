'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { Calendar, Car, Users, CheckCircle, Clock, ShieldCheck, Phone } from 'lucide-react';

interface BookingRecord {
  id: string;
  booking_reference: string;
  pickup_location: string;
  drop_location: string;
  pickup_date: string;
  status: string;
  created_at: string;
  assigned_to: string | null;
  passenger_count: number | null;
  notes: string | null;
}

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [assignText, setAssignText] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchAdminData();
  }, []);

  async function fetchAdminData() {
    const supabase = createClient();
    const { data } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setBookings(data as BookingRecord[]);
    }
    setLoading(false);
  }

  const handleUpdateStatus = async (bookingId: string, newStatus: string) => {
    const supabase = createClient();
    await supabase.from('bookings').update({ status: newStatus }).eq('id', bookingId);
    fetchAdminData();
  };

  const handleAssignVehicle = async (bookingId: string) => {
    const assigned = assignText[bookingId];
    if (!assigned) return;
    const supabase = createClient();
    await supabase.from('bookings').update({ assigned_to: assigned }).eq('id', bookingId);
    fetchAdminData();
  };

  const pendingCount = bookings.filter((b) => b.status === 'pending').length;
  const confirmedCount = bookings.filter((b) => b.status === 'confirmed').length;
  const completedCount = bookings.filter((b) => b.status === 'completed').length;

  return (
    <div className="space-y-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
          <p className="text-xs font-mono text-slate-400">Total Bookings</p>
          <p className="text-3xl font-bold font-serif text-white">{bookings.length}</p>
        </div>

        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
          <p className="text-xs font-mono text-amber-400">Pending Confirmation</p>
          <p className="text-3xl font-bold font-serif text-amber-300">{pendingCount}</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <p className="text-xs font-mono text-emerald-400">Confirmed Trips</p>
          <p className="text-3xl font-bold font-serif text-emerald-300">{confirmedCount}</p>
        </div>

        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-1">
          <p className="text-xs font-mono text-blue-400">Completed Trips</p>
          <p className="text-3xl font-bold font-serif text-blue-300">{completedCount}</p>
        </div>
      </div>

      {/* Booking Table */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold font-serif text-white">Booking Requests Desk</h2>
            <p className="text-xs text-slate-400">Assign vehicles & update status directly for S. Ramesh</p>
          </div>
        </div>

        {loading ? (
          <p className="text-xs font-mono text-slate-400">Loading requests...</p>
        ) : bookings.length === 0 ? (
          <p className="text-xs font-mono text-slate-400 py-8 text-center">No customer bookings submitted yet.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-4"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#F5D77F] bg-[#1E3A8A] px-2.5 py-1 rounded">
                      {booking.booking_reference}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full ${
                      booking.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300' :
                      booking.status === 'completed' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-amber-500/20 text-amber-300'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdateStatus(booking.id, 'confirmed')}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold cursor-pointer"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(booking.id, 'completed')}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(booking.id, 'cancelled')}
                      className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Pickup → Drop:</span>
                    <span className="text-white font-sans font-medium">{booking.pickup_location} → {booking.drop_location}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date & Passengers:</span>
                    <span className="text-white">{booking.pickup_date} ({booking.passenger_count || 4} passengers)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Assigned Vehicle / Driver:</span>
                    <span className="text-[#F5D77F]">{booking.assigned_to || 'Unassigned'}</span>
                  </div>
                </div>

                {/* Free text vehicle assignment */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60">
                  <input
                    type="text"
                    placeholder="Type vehicle registration / driver details (e.g. TN-10-AB-1234 Murugan)"
                    value={assignText[booking.id] || ''}
                    onChange={(e) => setAssignText({ ...assignText, [booking.id]: e.target.value })}
                    className="flex-1 rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-1.5 text-xs focus:border-[#A16207] focus:outline-none"
                  />
                  <button
                    onClick={() => handleAssignVehicle(booking.id)}
                    className="px-4 py-1.5 rounded-lg bg-[#A16207] hover:bg-[#855005] text-white text-xs font-semibold cursor-pointer"
                  >
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
