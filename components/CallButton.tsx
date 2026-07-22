'use client';

import { Phone } from 'lucide-react';

type CallButtonProps = {
  phone?: string;
  label?: string;
  variant?: 'primary' | 'outline' | 'icon';
  className?: string;
};

export default function CallButton({
  phone = '9677384267',
  label = 'Call S. Ramesh',
  variant = 'outline',
  className = '',
}: CallButtonProps) {
  const telUrl = `tel:+91${phone}`;

  if (variant === 'icon') {
    return (
      <a
        href={telUrl}
        aria-label="Call S. Ramesh"
        className={`inline-flex items-center justify-center p-2 rounded-full text-[#A16207] hover:bg-[#A16207]/10 transition-colors cursor-pointer ${className}`}
      >
        <Phone className="w-5 h-5" />
      </a>
    );
  }

  if (variant === 'primary') {
    return (
      <a
        href={telUrl}
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] px-5 py-2.5 text-white font-medium hover:bg-[#152e72] transition-colors cursor-pointer shadow-md ${className}`}
      >
        <Phone className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={telUrl}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-[#A16207]/40 bg-[#A16207]/10 px-4 py-2 text-[#A16207] font-medium hover:bg-[#A16207]/20 transition-colors cursor-pointer ${className}`}
    >
      <Phone className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}
