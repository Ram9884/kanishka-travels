'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Navigation, Plane, Train, Building, Mountain, Waves, Camera } from 'lucide-react';

const ALL_LOCATIONS = [
  // Airports & Transit
  { name: 'Chennai International Airport (MAA)', type: 'Airport', icon: Plane },
  { name: 'Coimbatore Airport (CJB)', type: 'Airport', icon: Plane },
  { name: 'Madurai Airport (IXM)', type: 'Airport', icon: Plane },
  { name: 'Trichy Airport (TRZ)', type: 'Airport', icon: Plane },
  { name: 'Chennai Central Railway Station', type: 'Station', icon: Train },
  { name: 'Chennai Egmore Railway Station', type: 'Station', icon: Train },
  { name: 'Koyambedu CMBT Bus Terminus', type: 'Bus Stand', icon: Navigation },

  // Chennai Areas
  { name: 'Iyyappanthangal, Chennai', type: 'Area', icon: MapPin },
  { name: 'Porur, Chennai', type: 'Area', icon: MapPin },
  { name: 'Anna Nagar, Chennai', type: 'Area', icon: MapPin },
  { name: 'T. Nagar, Chennai', type: 'Area', icon: MapPin },
  { name: 'Velachery, Chennai', type: 'Area', icon: MapPin },
  { name: 'Adyar, Chennai', type: 'Area', icon: MapPin },
  { name: 'Guindy, Chennai', type: 'Area', icon: MapPin },
  { name: 'Nungambakkam, Chennai', type: 'Area', icon: MapPin },
  { name: 'Tambaram, Chennai', type: 'Area', icon: MapPin },
  { name: 'Chromepet, Chennai', type: 'Area', icon: MapPin },
  { name: 'Ambattur, Chennai', type: 'Area', icon: MapPin },
  { name: 'Mylapore, Chennai', type: 'Area', icon: MapPin },
  { name: 'Kodambakkam, Chennai', type: 'Area', icon: MapPin },
  { name: 'Vadapalani, Chennai', type: 'Area', icon: MapPin },
  { name: 'Koyambedu, Chennai', type: 'Area', icon: MapPin },
  { name: 'Perambur, Chennai', type: 'Area', icon: MapPin },
  { name: 'Avadi, Chennai', type: 'Area', icon: MapPin },
  { name: 'Poonamallee, Chennai', type: 'Area', icon: MapPin },
  { name: 'Sholinganallur, Chennai', type: 'Area', icon: MapPin },
  { name: 'Pallavaram, Chennai', type: 'Area', icon: MapPin },
  { name: 'OMR / IT Corridor, Chennai', type: 'Area', icon: Building },
  { name: 'ECR (East Coast Road), Chennai', type: 'Area', icon: MapPin },
  { name: 'Sriperumbudur, Chennai', type: 'Industrial Area', icon: Building },

  // TN Districts & Cities (all 38)
  { name: 'Ariyalur, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Chengalpattu, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Coimbatore, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Cuddalore, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Dharmapuri, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Dindigul, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Erode, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Kallakurichi, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Kancheepuram, Tamil Nadu', type: 'Temple City', icon: Navigation },
  { name: 'Kanyakumari, Tamil Nadu', type: 'Tourist City', icon: Camera },
  { name: 'Karur, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Krishnagiri, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Madurai, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Mayiladuthurai, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Nagapattinam, Tamil Nadu', type: 'Coastal District', icon: Waves },
  { name: 'Namakkal, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Nilgiris (Ooty), Tamil Nadu', type: 'Hill Station', icon: Mountain },
  { name: 'Perambalur, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Pudukkottai, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Ramanathapuram, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Ranipet, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Salem, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Sivaganga, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Tenkasi, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Thanjavur (Tanjore), Tamil Nadu', type: 'Heritage City', icon: Camera },
  { name: 'Theni, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Thoothukudi (Tuticorin), Tamil Nadu', type: 'Port City', icon: Waves },
  { name: 'Tiruchirappalli (Trichy), Tamil Nadu', type: 'City', icon: Building },
  { name: 'Tirunelveli, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Tiruppur, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Tiruvallur, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Tiruvannamalai, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Tiruvarur, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Vellore, Tamil Nadu', type: 'City', icon: Building },
  { name: 'Viluppuram, Tamil Nadu', type: 'District', icon: MapPin },
  { name: 'Virudhunagar, Tamil Nadu', type: 'District', icon: MapPin },

  // TN Tourist & Pilgrimage Spots
  { name: 'Mahabalipuram (Mamallapuram)', type: 'Coastal Heritage', icon: Camera },
  { name: 'Pondicherry (Puducherry)', type: 'Coastal City', icon: Waves },
  { name: 'Rameswaram, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Kodaikanal, Tamil Nadu', type: 'Hill Station', icon: Mountain },
  { name: 'Yercaud, Tamil Nadu', type: 'Hill Station', icon: Mountain },
  { name: 'Valparai, Tamil Nadu', type: 'Hill Station', icon: Mountain },
  { name: 'Mudumalai, Tamil Nadu', type: 'Wildlife Park', icon: Camera },
  { name: 'Hogenakkal Falls, Tamil Nadu', type: 'Waterfall', icon: Waves },
  { name: 'Courtallam (Kutralam) Falls, Tamil Nadu', type: 'Waterfall', icon: Waves },
  { name: 'Palani, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Chidambaram, Tamil Nadu', type: 'Temple Town', icon: Navigation },
  { name: 'Kumbakonam, Tamil Nadu', type: 'Temple Town', icon: Navigation },
  { name: 'Swamimalai, Tamil Nadu', type: 'Temple Town', icon: Navigation },
  { name: 'Velankanni, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Tiruvannamalai, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Tiruttani, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Thiruparankundram, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Golden Temple, Vellore', type: 'Temple', icon: Navigation },
  { name: 'Papanasam, Tamil Nadu', type: 'Pilgrimage', icon: Navigation },
  { name: 'Pichavaram Mangrove Forest', type: 'Nature', icon: Camera },

  // Andhra Pradesh
  { name: 'Tirupati, Andhra Pradesh', type: 'Pilgrimage', icon: Navigation },
  { name: 'Tirumala, Andhra Pradesh', type: 'Pilgrimage', icon: Navigation },
  { name: 'Vijayawada, Andhra Pradesh', type: 'City', icon: Building },
  { name: 'Visakhapatnam (Vizag), AP', type: 'City', icon: Building },
  { name: 'Nellore, Andhra Pradesh', type: 'City', icon: Building },
  { name: 'Srikalahasti, Andhra Pradesh', type: 'Pilgrimage', icon: Navigation },
  { name: 'Kurnool, Andhra Pradesh', type: 'City', icon: Building },

  // Karnataka
  { name: 'Bengaluru (Bangalore), Karnataka', type: 'City', icon: Building },
  { name: 'Mysuru (Mysore), Karnataka', type: 'Heritage City', icon: Camera },
  { name: 'Mangaluru (Mangalore), Karnataka', type: 'City', icon: Building },
  { name: 'Hampi (Hospet), Karnataka', type: 'Heritage', icon: Camera },
  { name: 'Coorg (Kodagu), Karnataka', type: 'Hill Station', icon: Mountain },
  { name: 'Chikmagalur, Karnataka', type: 'Hill Station', icon: Mountain },
  { name: 'Udupi, Karnataka', type: 'Pilgrimage', icon: Navigation },
  { name: 'Hubli, Karnataka', type: 'City', icon: Building },

  // Kerala
  { name: 'Thiruvananthapuram, Kerala', type: 'Capital City', icon: Building },
  { name: 'Kochi (Cochin), Kerala', type: 'City', icon: Building },
  { name: 'Munnar, Kerala', type: 'Hill Station', icon: Mountain },
  { name: 'Alleppey (Alappuzha), Kerala', type: 'Backwaters', icon: Waves },
  { name: 'Thrissur, Kerala', type: 'City', icon: Building },
  { name: 'Kozhikode (Calicut), Kerala', type: 'City', icon: Building },
  { name: 'Thekkady (Periyar), Kerala', type: 'Wildlife', icon: Camera },
  { name: 'Wayanad, Kerala', type: 'Hill Station', icon: Mountain },
  { name: 'Guruvayur, Kerala', type: 'Pilgrimage', icon: Navigation },
  { name: 'Palakkad, Kerala', type: 'City', icon: Building },
  { name: 'Kollam, Kerala', type: 'City', icon: Building },
  { name: 'Sabarimala, Kerala', type: 'Pilgrimage', icon: Navigation },
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
  placeholder = 'Type city, district or landmark',
  name,
  required = false,
  className = '',
}: LocationAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof ALL_LOCATIONS>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value || value.trim().length === 0) {
      requestAnimationFrame(() => {
        setSuggestions([]);
        setIsOpen(false);
      });
      return;
    }

    const query = value.toLowerCase();
    const matches = ALL_LOCATIONS.filter((loc) =>
      loc.name.toLowerCase().includes(query)
    ).slice(0, 8);

    requestAnimationFrame(() => {
      setSuggestions(matches);
      setIsOpen(matches.length > 0);
    });
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
        className={`booking-field w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 ${className}`}
      />

      {/* Suggestion Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="location-dropdown absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden max-h-72 overflow-y-auto">
          {suggestions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(item.name)}
                className="location-dropdown-item w-full text-left px-4 py-3 flex items-center justify-between transition-colors border-b last:border-none cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#A16207] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="location-item-name text-xs font-semibold transition-colors">
                    {item.name}
                  </span>
                </div>
                <span className="location-item-tag text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ml-2">
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
