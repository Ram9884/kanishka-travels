'use client';

import { useEffect } from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[RUNTIME ERROR BOUNDARY]', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A1128] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl glass-dark border border-white/10 p-8 text-center space-y-5 shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
        <p className="text-xs text-slate-300 leading-relaxed font-mono">
          An unexpected error occurred. Our monitoring team has been notified.
        </p>

        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A16207] text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Page</span>
        </button>
      </div>
    </div>
  );
}
