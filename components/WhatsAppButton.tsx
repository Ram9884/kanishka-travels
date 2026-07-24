'use client';

import { trackEvent } from '@/lib/analytics';

type WhatsAppButtonProps = {
  phone?: string;
  message?: string;
  variant?: 'floating' | 'inline' | 'icon' | 'badge';
  label?: string;
  className?: string;
};

const PRIMARY_NUMBER = '919677384267';
const SECONDARY_NUMBER = '919884517451';

export default function WhatsAppButton({
  phone = PRIMARY_NUMBER,
  message = "Hi, I'd like to enquire about a booking with Kanishka Travels.",
  variant = 'inline',
  label = 'Chat on WhatsApp',
  className = '',
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackEvent('whatsapp_click', { phone, variant });
  };

  if (variant === 'floating') {
    return (
      <a
        href={url}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#128C7E] px-4 py-2.5 text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30 backdrop-blur-md"
        aria-label="Chat with S. Ramesh on WhatsApp"
      >
        <WhatsAppIcon className="w-4.5 h-4.5" />
        <span className="hidden sm:inline font-serif font-bold text-xs tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          Chat with S. Ramesh
        </span>
      </a>
    );
  }

  if (variant === 'icon') {
    return (
      <a
        href={url}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`inline-flex items-center justify-center p-2 rounded-full hover:bg-emerald-500/10 transition-colors cursor-pointer ${className}`}
      >
        <WhatsAppIcon className="w-6 h-6 text-[#25D366] hover:opacity-90" />
      </a>
    );
  }

  if (variant === 'badge') {
    return (
      <a
        href={url}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 px-3.5 py-1.5 text-xs text-[#25D366] font-semibold hover:bg-[#25D366]/25 transition-all cursor-pointer ${className}`}
      >
        <WhatsAppIcon className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-2.5 text-white font-medium hover:bg-[#1ebe57] transition-all shadow-md hover:shadow-lg cursor-pointer ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.9 14.02c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.93-4.3-5.08-4.5-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.04-2.49c.27-.3.6-.37.79-.37s.4 0 .57.01c.19.01.44-.07.68.52.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.09.2-.14.33-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.25.09 1.6.75 1.88.89.28.14.46.21.53.33.07.12.07.7-.18 1.4z" />
    </svg>
  );
}

export { PRIMARY_NUMBER, SECONDARY_NUMBER };
