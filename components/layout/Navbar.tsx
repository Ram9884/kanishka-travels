'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Crown, Menu, X, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    // Get current user
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
        setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'Customer');
      }
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user || null;
      setUser(currentUser);
      if (currentUser) {
        setUserName(currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Customer');
      } else {
        setUserName('');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#A16207]/25 bg-[#0F172A]/85 backdrop-blur-xl transition-all">
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#7A1F2B] p-0.5 border border-[#A16207]/50 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#A16207] group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-serif tracking-wider text-xl font-bold text-white block leading-none font-['Cinzel_Decorative',serif]">
                KANISHKA <span className="text-[#A16207]">TRAVELS</span>
              </span>
              <span className="text-[10px] text-[#F5D77F]/80 uppercase tracking-widest block mt-0.5 font-mono">
                Your Trip... Our Responsibility!
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
            <Link href="/" className="hover:text-[#A16207] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="hover:text-[#A16207] transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/fleet" className="hover:text-[#A16207] transition-colors cursor-pointer">
              Fleet
            </Link>
            <Link href="/about" className="hover:text-[#A16207] transition-colors cursor-pointer">
              About
            </Link>

            {/* Dedicated Book a Trip Link */}
            <Link href="/book" className="hover:text-[#A16207] transition-colors cursor-pointer font-semibold text-white">
              Book a Trip
            </Link>

            {/* Dedicated My Bookings Link */}
            <Link href="/my-bookings" className="text-[#F5D77F] hover:text-[#D4AF37] font-semibold transition-colors cursor-pointer">
              My Bookings
            </Link>
          </nav>

          {/* User Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/my-bookings"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  <User className="w-3.5 h-3.5 text-[#A16207]" />
                  <span className="max-w-[120px] truncate">{userName}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                  aria-label="Log Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white text-sm font-semibold shadow-md hover:brightness-110 transition-all cursor-pointer border border-amber-300/30"
              >
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#A16207]/20 bg-[#0F172A]/95 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              Home
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              Services
            </Link>
            <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              Fleet
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">
              About Us
            </Link>
            <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="py-2 font-semibold text-white">
              Book a Trip
            </Link>
            <Link href="/my-bookings" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#F5D77F] font-semibold">
              My Bookings
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-lg border border-rose-500/40 bg-rose-500/10 text-rose-300 font-semibold text-sm"
              >
                Log Out ({userName})
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-[#A16207] to-[#D4AF37] text-white font-semibold text-sm shadow-md"
              >
                Customer Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
