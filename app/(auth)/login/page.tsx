'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import {
  Crown,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  KeyRound,
} from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

function LoginFormContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/my-bookings';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      setError('Please enter both your email address and password.');
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (signInError) {
        console.error('Login error:', signInError);
        setError(signInError.message || 'Invalid email address or password.');
        setLoading(false);
        return;
      }

      // Trigger owner notification email
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      void fetch(`${appUrl}/api/notify/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'login',
          data: {
            email: cleanEmail,
            full_name: data.user?.user_metadata?.full_name || 'Customer',
            phone: data.user?.user_metadata?.phone || '',
          },
        }),
      }).catch(console.error);

      router.push(redirectPath);
      router.refresh();
    } catch (err: any) {
      setError(err?.message || 'Failed to sign in. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="auth-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-[#D4AF37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Left Column: Brand Story Banner (5 cols) */}
        <div className="auth-left-banner lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0F0F14] via-[#14141C] to-[#0A0A0D]">
          {/* Subtle Ambient Light Sheen */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Crown Logo Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl icon-container-gold flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Crown className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight auth-brand-title block leading-none text-white">
                  Kanishka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Travels</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest auth-gold-text block mt-1">
                  Customer Portal
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2 pt-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest auth-gold-text flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Secure Portal Access
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-snug auth-heading text-white">
                Welcome back to your travel dashboard.
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light leading-relaxed auth-subtitle text-[#A1A1AA]">
                Sign in with your email address and password to view active bookings, request custom tour packages, or connect directly with S. Ramesh.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-3 pt-4">
              {[
                'Instant Booking Confirmation & Updates',
                'Direct Ride Coordination by S. Ramesh',
                'Zero Advance Payment Required',
              ].map((prop) => (
                <div key={prop} className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <span>{prop}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-8 border-t border-[#D4AF37]/20 text-[11px] font-mono relative z-10 flex items-center justify-between auth-footer-text text-[#71717A]">
            <span>Proprietor S. Ramesh</span>
            <span className="auth-gold-text font-semibold text-[#F5D77F]">Chennai · 24/7</span>
          </div>
        </div>

        {/* Right Column: Email & Password Form (7 cols) */}
        <div className="auth-right-form lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-b from-[#13131A] to-[#0D0D12]">
          {/* Header */}
          <div className="space-y-2 border-b border-[#D4AF37]/20 pb-3">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight auth-heading text-white">
              Customer Sign In
            </h1>
            <p className="text-xs font-sans font-light auth-subtitle text-[#A1A1AA]">
              Enter your account email address and password to log in.
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2.5"
            >
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-widest auth-label font-semibold text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="auth-input w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all font-sans bg-[#1A1A24] border border-[#D4AF37]/30 text-white placeholder-slate-500"
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-mono uppercase tracking-widest auth-label font-semibold text-slate-300">
                  Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="auth-input w-full pl-10 pr-12 py-3 rounded-xl text-sm focus:outline-none transition-all font-mono bg-[#1A1A24] border border-[#D4AF37]/30 text-white placeholder-slate-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50 mt-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>{loading ? 'Signing In...' : 'Sign In to Portal'}</span>
            </button>
          </form>

          {/* Quick WhatsApp Support Link */}
          <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#A1A1AA]">
            <WhatsAppButton variant="badge" label="Direct Owner Assistance" />
            <Link
              href={`/signup${redirectPath ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`}
              className="text-xs font-mono text-[#D4AF37] hover:underline transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Don&apos;t have an account? Register</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-xs font-mono text-[#D4AF37]">Loading Portal...</div>}>
      <LoginFormContent />
    </Suspense>
  );
}
