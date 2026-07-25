'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import { 
  Crown, 
  User, 
  Phone, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles,
  Eye,
  EyeOff,
} from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

function SignupFormContent() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/my-bookings';

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      router.push(redirectPath);
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="auth-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Left Column: Brand Story Banner (5 cols) */}
        <div className="auth-left-banner lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Light Sheen */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Crown Logo Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl icon-container-gold flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Crown className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight auth-brand-title block leading-none">
                  Kanishka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">Travels</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest auth-gold-text block mt-1">
                  Customer Registration
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2 pt-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest auth-gold-text flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Join Kanishka Fleet
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-snug auth-heading">
                Create your personal travel account in seconds.
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light leading-relaxed auth-subtitle">
                Register once to manage all future outstation, airport, and local ride requests directly with proprietor S. Ramesh.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-3 pt-4">
              {[
                'Instant Ride Confirmation & Updates',
                'Zero Hidden Taxes or Advance Fees',
                'Personal Coordination with S. Ramesh',
              ].map((prop) => (
                <div key={prop} className="flex items-center gap-2.5 text-xs font-medium auth-body-text">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <span>{prop}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-8 border-t border-[#D4AF37]/20 text-[11px] font-mono relative z-10 flex items-center justify-between auth-footer-text">
            <span>Proprietor S. Ramesh</span>
            <span className="auth-gold-text font-semibold">Chennai · 24/7</span>
          </div>
        </div>

        {/* Right Column: Interactive Registration Portal (7 cols) */}
        <div className="auth-right-form lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6">
          {/* Header & Tab Switcher */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight auth-heading">
                Create Account
              </h1>
              <Link
                href={`/login${redirectPath ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`}
                className="text-xs font-mono text-[#D4AF37] dark:text-[#F5D77F] hover:underline transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Already Registered? Sign In</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-xs font-sans font-light auth-subtitle">
              Fill in your contact details to set up your Kanishka Travels portal.
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-200 text-xs flex items-center gap-3"
            >
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-widest auth-label font-semibold">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="S. Parthiban"
                  className="auth-input w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all font-sans"
                  required
                />
              </div>
            </div>

            {/* Mobile Phone */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-widest auth-label font-semibold">
                Mobile Phone Number
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="auth-input w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all font-sans"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-widest auth-label font-semibold">
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
                  placeholder="parthiban@example.com"
                  className="auth-input w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all font-sans"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-widest auth-label font-semibold">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="auth-input w-full pl-10 pr-12 py-3 rounded-xl text-sm focus:outline-none transition-all font-sans"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
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
              <span>{loading ? 'Registering Account...' : 'Register & Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick WhatsApp Support Link */}
          <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#A1A1AA]">
            <span>Need assistance creating an account?</span>
            <WhatsAppButton variant="badge" label="Direct Owner Assistance" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-xs font-mono text-[#D4AF37]">Loading Portal...</div>}>
      <SignupFormContent />
    </Suspense>
  );
}
