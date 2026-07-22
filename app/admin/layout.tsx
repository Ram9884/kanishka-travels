import React from 'react';
import Link from 'next/link';
import { Crown, LayoutDashboard, Car, Calendar, Users, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A1128] text-slate-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-[#A16207]">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-white text-base block">KANISHKA</span>
              <span className="text-[10px] text-[#A16207] font-mono uppercase">Admin Desk (S. Ramesh)</span>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-medium font-mono">
            <Link href="/admin" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#1E3A8A] text-white">
              <LayoutDashboard className="w-4 h-4 text-[#A16207]" />
              <span>Dashboard Overview</span>
            </Link>
            <Link href="/admin/bookings" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
              <Calendar className="w-4 h-4" />
              <span>Bookings Management</span>
            </Link>
            <Link href="/admin/fleet" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
              <Car className="w-4 h-4" />
              <span>Vehicle Management</span>
            </Link>
            <Link href="/admin/customers" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
              <Users className="w-4 h-4" />
              <span>Customer Records</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <Link href="/" className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 font-mono">
            <span>← Exit to Public Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
