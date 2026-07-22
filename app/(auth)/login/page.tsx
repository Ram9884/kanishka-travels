'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Crown, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    } else {
      router.push('/my-bookings');
      router.refresh();
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#0A1128] text-white px-4 py-12">
      <div className="max-w-md w-full rounded-2xl bg-slate-900/90 border border-[#A16207]/40 p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-center space-y-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#7A1F2B] p-0.5 border border-[#A16207]/50 mx-auto flex items-center justify-center">
            <Crown className="w-6 h-6 text-[#A16207]" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-white">Customer Login</h1>
          <p className="text-xs text-slate-400">Log in to view your bookings or request a new trip</p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#A16207]" /> Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="customer@example.com"
              className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none placeholder:text-slate-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#A16207]" /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 text-sm focus:border-[#A16207] focus:outline-none placeholder:text-slate-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-semibold text-sm shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{loading ? 'Logging in...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
          <span>Don&apos;t have an account? </span>
          <Link href="/signup" className="text-[#F5D77F] font-semibold hover:underline">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
