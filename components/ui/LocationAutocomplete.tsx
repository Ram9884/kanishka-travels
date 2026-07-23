'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Navigation, Plane, Train, Building } from 'lucide-react';

const CHENNAI_LOCATIONS = [
  // Airports & Transit
  { name: 'Chennai International Airport (MAA)', type: 'Airport', icon: Plane },
  { name: 'Chennai Central Railway Station (MAS)', type: 'Station', icon: Train },
  { name: 'Chennai Egmore Railway Station (MS)', type: 'Station', icon: Train },
  { name: 'Koyambedu CMBT Bus Terminus', type: 'Station', icon: Navigation },

  // Local Chennai Areas & Suburbs
  { name: 'Iyyappanthangal, Chennai', type: 'Area', icon: MapPin },
  { name: 'Porur, Chennai', type: 'Area', icon: MapPin },
  { name: 'Anna Nagar, Chennai', type: 'Area', icon: MapPin },
  { name: 'T. Nagar (Thyagaraya Nagar), Chennai', type: 'Area', icon: MapPin },
  { name: 'Velachery, Chennai', type: 'Area', icon: MapPin },
  { name: 'Adyar, Chennai', type: 'Area', icon: MapPin },
  { name: 'OMR (Old Mahabalipuram Road) / IT Corridor', type: 'Area', icon: MapPin },
  { name: 'ECR (East Coast Road), Chennai', type: 'Area', icon: MapPin },
  { name: 'Guindy, Chennai', type: 'Area', icon: MapPin },
  { name: 'Vadapalani, Chennai', type: 'Area', icon: MapPin },
  { name: 'Nungambakkam, Chennai', type: 'Area', icon: MapPin },
  { name: 'Tambaram, Chennai', type: 'Area', icon: MapPin },
  { name: 'Chromepet, Chennai', type: 'Area', icon: MapPin },
  { name: 'Ambattur, Chennai', type: 'Area', icon: MapPin },
  { name: 'Koyambedu, Chennai', type: 'Area', icon: MapPin },
  { name: 'Mylapore, Chennai', type: 'Area', icon: MapPin },
  { name: 'Kodambakkam, Chennai', type: 'Area', icon: MapPin },
  { name: 'Sriperumbudur, Tamil Nadu', type: 'Industrial Area', icon: Building },

  // Outstation Cities & Pilgrimages
  { name: 'Tirupati, Andhra Pradesh', type: 'Pilgrimage Outstation', icon: Navigation },
  { name: 'Pondicherry (Puducherry)', type: 'Coastal Outstation', icon: Navigation },
  { name: 'Ooty (Nilgiris), Tamil Nadu', type: 'Hill Station Outstation', icon: Navigation },
  { name: 'Kodaikanal, Tamil Nadu', type: 'Hill Station Outstation', icon: Navigation },
  { name: 'Kanchipuram, Tamil Nadu', type: 'Temple Outstation', icon: Navigation },
  { name: 'Vellore (Golden Temple), Tamil Nadu', type: 'Temple Outstation', icon: Navigation },
  { name: 'Rameswaram, Tamil Nadu', type: 'Pilgrimage Outstation', icon: Navigation },
  { name: 'Kanyakumari, Tamil Nadu', type: 'Outstation', icon: Navigation },
  { name: 'Mahabalipuram (Mamallapuram)', type: 'Coastal Outstation', icon: Navigation },
  { name: 'Madurai, Tamil Nadu', type: 'Outstation', icon: Navigation },
  { name: 'Trichy (Tiruchirappalli)', type: 'Outstation', icon: Navigation },
  { name: 'Bangalore (Bengaluru), Karnataka', type: 'Outstation', icon: Navigation },
];

interface LocationAutocompleteProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

export default function LocationAutocomplete({
  value,
  onChange,
  placeholder = 'Type area or landmark (e.g. Porur, Airport, Tirupati)',
  name,
  required = false,
  className = '',
}: LocationAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof CHENNAI_LOCATIONS>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value || value.trim().length === 0) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const query = value.toLowerCase();
    const matches = CHENNAI_LOCATIONS.filter((loc) =>
      loc.name.toLowerCase().includes(query)
    ).slice(0, 6);

    setSuggestions(matches);
    setIsOpen(matches.length > 0);
  }, [value]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (locationName: string) => {
    onChange(locationName);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => value.trim().length > 0 && setIsOpen(suggestions.length > 0)}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        className={`w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none placeholder:text-slate-500 transition-colors ${className}`}
      />

      {/* Suggestion Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl bg-slate-900/95 border border-[#A16207]/50 shadow-2xl backdrop-blur-xl overflow-hidden max-h-60 overflow-y-auto">
          {suggestions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(item.name)}
                className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-[#1E3A8A]/50 transition-colors border-b border-slate-800/60 last:border-none cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#A16207] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs font-semibold text-white group-hover:text-[#F5D77F] transition-colors">
                    {item.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-slate-200">
                  {item.type}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
