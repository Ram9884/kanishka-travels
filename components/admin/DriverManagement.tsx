'use client';

import React, { useState } from 'react';
import { UserCheck, Phone, ShieldCheck, Plus, Star, Award } from 'lucide-react';
import { INITIAL_DRIVERS, Driver } from '@/data/adminMock';

export default function DriverManagement() {
  const [drivers, setDrivers] = useState<Driver[]>(INITIAL_DRIVERS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [license, setLicense] = useState('');

  const handleAddDriver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const newDriver: Driver = {
      id: `drv-${Date.now()}`,
      name,
      phone,
      licenseNumber: license || 'TN-XX-2026-PENDING',
      status: 'Active',
      rating: 5.0,
      tripsCompleted: 0,
    };
    setDrivers([newDriver, ...drivers]);
    setName('');
    setPhone('');
    setLicense('');
    setShowAddForm(false);
  };

  const toggleStatus = (id: string) => {
    setDrivers(
      drivers.map((d) => {
        if (d.id !== id) return d;
        const nextStatus = d.status === 'Active' ? 'On-Trip' : d.status === 'On-Trip' ? 'Off-Duty' : 'Active';
        return { ...d, status: nextStatus };
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl glass-dark border border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
            <span>Driver Roster Management</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage background-verified highway chauffeurs and trip assignments.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>{showAddForm ? 'Cancel' : 'Add New Driver'}</span>
        </button>
      </div>

      {/* Add Driver Drawer Form */}
      {showAddForm && (
        <form onSubmit={handleAddDriver} className="p-6 rounded-2xl glass-dark border border-[#D4AF37]/40 space-y-4">
          <h3 className="text-sm font-bold text-[#F5D77F] uppercase tracking-wider font-mono">
            New Driver Registration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1">Driver Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                required
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1">Mobile Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                required
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1">Driving License No.</label>
              <input
                type="text"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                placeholder="TN-10-2020-1234567"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase cursor-pointer shadow-md"
          >
            Save Driver Profile
          </button>
        </form>
      )}

      {/* Driver Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {drivers.map((drv) => (
          <div
            key={drv.id}
            className="p-6 rounded-2xl glass-dark border border-white/10 hover:border-[#D4AF37]/50 shadow-xl transition-all duration-300 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[#F5D77F] text-xs font-mono font-bold">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span>{drv.rating}</span>
              </div>
              <button
                onClick={() => toggleStatus(drv.id)}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase cursor-pointer border ${
                  drv.status === 'Active'
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : drv.status === 'On-Trip'
                    ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                    : 'bg-slate-700 border-slate-600 text-slate-400'
                }`}
              >
                {drv.status}
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">{drv.name}</h3>
              <p className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-1">
                <Phone className="w-3 h-3 text-[#D4AF37]" />
                <span>{drv.phone}</span>
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 space-y-1 font-mono">
              <p><span className="text-slate-500">License:</span> {drv.licenseNumber}</p>
              <p><span className="text-slate-500">Trips Done:</span> {drv.tripsCompleted} rides</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
