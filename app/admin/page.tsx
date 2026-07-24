'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import WhatsAppButton from '@/components/WhatsAppButton';
import DriverManagement from '@/components/admin/DriverManagement';
import FleetManagement from '@/components/admin/FleetManagement';
import TariffManagement from '@/components/admin/TariffManagement';
import { logAdminAction } from '@/lib/auditLog';
import { Calendar, Car, Users, CheckCircle, Clock, ShieldCheck, Phone, DollarSign, UserCheck, Search, Filter } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'bookings' | 'drivers' | 'fleet' | 'tariffs'>('bookings');
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [assignText, setAssignText] = useState<{ [key: string]: string }>({});
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    const actionType = newStatus === 'confirmed' ? 'Booking Confirmed' : newStatus === 'cancelled' ? 'Booking Cancelled' : 'Booking Confirmed';
    logAdminAction(actionType, `Booking ${bookingId} status updated to ${newStatus}`);
    fetchAdminData();
  };

  const handleAssignVehicle = async (bookingId: string) => {
    const assigned = assignText[bookingId];
    if (!assigned) return;
    const supabase = createClient();
    await supabase.from('bookings').update({ assigned_to: assigned }).eq('id', bookingId);
    logAdminAction('Driver Assigned', `Assigned ${assigned} to booking ${bookingId}`);
    fetchAdminData();
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    const matchesQuery =
      searchQuery === '' ||
      b.booking_reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.pickup_location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.drop_location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  const pendingCount = bookings.filter((b) => b.status === 'pending').length;
  const confirmedCount = bookings.filter((b) => b.status === 'confirmed').length;
  const completedCount = bookings.filter((b) => b.status === 'completed').length;

  return (
    <div className="space-y-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="p-5 rounded-2xl glass-dark border border-white/10 space-y-1">
          <p className="text-xs font-mono text-slate-400">Total Booking Requests</p>
          <p className="text-3xl font-extrabold font-mono text-white">{bookings.length}</p>
        </div>

        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
          <p className="text-xs font-mono text-amber-400">Pending Confirmation</p>
          <p className="text-3xl font-extrabold font-mono text-amber-300">{pendingCount}</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <p className="text-xs font-mono text-emerald-400">Confirmed Trips</p>
          <p className="text-3xl font-extrabold font-mono text-emerald-300">{confirmedCount}</p>
        </div>

        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-1">
          <p className="text-xs font-mono text-blue-400">Completed Trips</p>
          <p className="text-3xl font-extrabold font-mono text-blue-300">{completedCount}</p>
        </div>
      </div>

      {/* Admin Tab Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {[
          { id: 'bookings', label: 'Booking Requests', icon: Calendar },
          { id: 'drivers', label: 'Driver Roster', icon: UserCheck },
          { id: 'fleet', label: 'Fleet & Vehicles', icon: Car },
          { id: 'tariffs', label: 'Tariff Matrix', icon: DollarSign },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 shadow-lg'
                  : 'glass-dark text-slate-300 hover:text-white hover:border-[#D4AF37]/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Bookings Management Desk */}
      {activeTab === 'bookings' && (
        <div className="rounded-2xl glass-dark border border-white/10 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Booking Requests Desk</h2>
              <p className="text-xs text-slate-400 mt-0.5">Assign vehicles & send driver dispatch details for S. Ramesh</p>
            </div>

            {/* Filter & Search */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search ref or route..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-[#D4AF37] focus:outline-none cursor-pointer font-mono"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {loading ? (
            <p className="text-xs font-mono text-slate-400">Loading requests...</p>
          ) : filteredBookings.length === 0 ? (
            <p className="text-xs font-mono text-slate-400 py-8 text-center">No matching customer bookings found.</p>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => {
                const whatsappMsg = `Hi! This is S. Ramesh from Kanishka Travels regarding your booking ref ${booking.booking_reference}. Trip from ${booking.pickup_location} to ${booking.drop_location} on ${booking.pickup_date} is CONFIRMED. Assigned vehicle/driver: ${booking.assigned_to || 'TN-10-AZ-1234 Murugan'}. Thank you!`;

                return (
                  <div
                    key={booking.id}
                    className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#F5D77F] bg-[#1E3A8A] px-2.5 py-1 rounded">
                          {booking.booking_reference}
                        </span>
                        <span className={`text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full ${
                          booking.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                          booking.status === 'completed' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                          'bg-amber-500/20 text-amber-300 border border-amber-500/40'
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

                    {/* Vehicle Assignment & Dispatch */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-slate-800">
                      <input
                        type="text"
                        placeholder="Type reg no. & driver details (e.g. TN-10-AZ-1234 Murugan)"
                        value={assignText[booking.id] || ''}
                        onChange={(e) => setAssignText({ ...assignText, [booking.id]: e.target.value })}
                        className="flex-1 rounded-lg bg-slate-950 border border-slate-700 text-white px-3 py-1.5 text-xs focus:border-[#D4AF37] focus:outline-none"
                      />
                      <button
                        onClick={() => handleAssignVehicle(booking.id)}
                        className="px-4 py-1.5 rounded-lg bg-[#A16207] hover:bg-[#855005] text-white text-xs font-semibold cursor-pointer"
                      >
                        Assign Details
                      </button>

                      <WhatsAppButton
                        variant="badge"
                        label="Send Customer Dispatch WhatsApp"
                        message={whatsappMsg}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Driver Roster */}
      {activeTab === 'drivers' && <DriverManagement />}

      {/* Tab 3: Fleet Management */}
      {activeTab === 'fleet' && <FleetManagement />}

      {/* Tab 4: Tariff Matrix */}
      {activeTab === 'tariffs' && <TariffManagement />}
    </div>
  );
}
