'use client';

import React, { useState } from 'react';
import { Car, Plus, Shield, Settings, CheckCircle2, Wrench } from 'lucide-react';
import { INITIAL_FLEET, FleetItem } from '@/data/adminMock';

export default function FleetManagement() {
  const [fleet, setFleet] = useState<FleetItem[]>(INITIAL_FLEET);
  const [showAddForm, setShowAddForm] = useState(false);
  const [model, setModel] = useState('');
  const [category, setCategory] = useState('Luxury MUV');
  const [regNumber, setRegNumber] = useState('');
  const [ratePerKm, setRatePerKm] = useState(18);

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || !regNumber) return;
    const newVehicle: FleetItem = {
      id: `veh-${Date.now()}`,
      model,
      category,
      regNumber,
      status: 'Available',
      ratePerKm: Number(ratePerKm),
    };
    setFleet([newVehicle, ...fleet]);
    setModel('');
    setRegNumber('');
    setShowAddForm(false);
  };

  const toggleStatus = (id: string) => {
    setFleet(
      fleet.map((v) => {
        if (v.id !== id) return v;
        const nextStatus = v.status === 'Available' ? 'On-Trip' : v.status === 'On-Trip' ? 'Maintenance' : 'Available';
        return { ...v, status: nextStatus };
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl glass-dark border border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Car className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
            <span>Vehicle Fleet & Registration Tracking</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Track vehicle registration numbers, maintenance status, and base per-km tariffs.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>{showAddForm ? 'Cancel' : 'Add New Vehicle'}</span>
        </button>
      </div>

      {/* Add Vehicle Form */}
      {showAddForm && (
        <form onSubmit={handleAddVehicle} className="p-6 rounded-2xl glass-dark border border-[#D4AF37]/40 space-y-4">
          <h3 className="text-sm font-bold text-[#F5D77F] uppercase tracking-wider font-mono">
            New Vehicle Entry
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1">Vehicle Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. Toyota Innova Hycross"
                required
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none cursor-pointer"
              >
                <option value="Luxury MUV">Luxury MUV</option>
                <option value="Hybrid MUV">Hybrid MUV</option>
                <option value="Premium MUV">Premium MUV</option>
                <option value="Premium Sedan">Premium Sedan</option>
                <option value="Executive Sedan">Executive Sedan</option>
                <option value="Luxury Minibus">Luxury Minibus</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 mb-1">Reg Number (e.g. TN-10-XX-1234)</label>
              <input
                type="text"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                placeholder="TN-10-AZ-1234"
                required
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1">Tariff Rate (₹ / km)</label>
              <input
                type="number"
                value={ratePerKm}
                onChange={(e) => setRatePerKm(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase cursor-pointer shadow-md"
          >
            Save Vehicle Entry
          </button>
        </form>
      )}

      {/* Fleet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((v) => (
          <div
            key={v.id}
            className="p-6 rounded-2xl glass-dark border border-white/10 hover:border-[#D4AF37]/50 shadow-xl transition-all duration-300 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                {v.category}
              </span>
              <button
                onClick={() => toggleStatus(v.id)}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase cursor-pointer border ${
                  v.status === 'Available'
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : v.status === 'On-Trip'
                    ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                    : 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                }`}
              >
                {v.status}
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">{v.model}</h3>
              <p className="text-sm font-mono text-[#F5D77F] font-bold mt-1">
                {v.regNumber}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Base Tariff Rate:</span>
              <span className="text-white font-bold text-sm">₹{v.ratePerKm} / km</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
