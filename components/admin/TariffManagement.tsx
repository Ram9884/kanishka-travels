'use client';

import React, { useState } from 'react';
import { DollarSign, Save, ShieldCheck, Info } from 'lucide-react';
import { INITIAL_TARIFFS, TariffRate } from '@/data/adminMock';

export default function TariffManagement() {
  const [tariffs, setTariffs] = useState<TariffRate[]>(INITIAL_TARIFFS);
  const [savedMsg, setSavedMsg] = useState(false);

  const updateTariffField = (id: string, field: keyof TariffRate, val: number) => {
    setTariffs(
      tariffs.map((t) => (t.id === id ? { ...t, [field]: val } : t))
    );
  };

  const handleSave = () => {
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl glass-dark border border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
            <span>Tariff & Pricing Rate Matrix</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure outstation per-km rates, driver bata, night allowances, and minimum daily distance limits.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Save className="w-4 h-4" />
          <span>Save Tariff Rates</span>
        </button>
      </div>

      {savedMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Tariff matrix successfully saved and applied to booking estimates!</span>
        </div>
      )}

      {/* Tariff Rates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tariffs.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl glass-dark border border-white/10 hover:border-[#D4AF37]/50 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">{t.category}</h3>
              <span className="text-xs font-mono text-[#F5D77F] bg-[#1E3A8A] px-2.5 py-1 rounded font-bold">
                ₹{t.baseRatePerKm} / km
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <label className="block text-slate-400 mb-1">Base Rate (₹ / km):</label>
                <input
                  type="number"
                  value={t.baseRatePerKm}
                  onChange={(e) => updateTariffField(t.id, 'baseRatePerKm', Number(e.target.value))}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-1.5 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Driver Bata (₹ / day):</label>
                <input
                  type="number"
                  value={t.driverBataPerDay}
                  onChange={(e) => updateTariffField(t.id, 'driverBataPerDay', Number(e.target.value))}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-1.5 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Night Allowance (₹):</label>
                <input
                  type="number"
                  value={t.nightAllowance}
                  onChange={(e) => updateTariffField(t.id, 'nightAllowance', Number(e.target.value))}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-1.5 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Min Km / Day:</label>
                <input
                  type="number"
                  value={t.minKmPerDay}
                  onChange={(e) => updateTariffField(t.id, 'minKmPerDay', Number(e.target.value))}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white px-3 py-1.5 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
