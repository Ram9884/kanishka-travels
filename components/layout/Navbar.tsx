'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { Crown, Menu, X, User, LogOut, Calendar, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  /* Track scroll position */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
        setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'Customer');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user || null;
      setUser(currentUser);
      if (currentUser) {
        setUserName(currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Customer');
      } else {
        setUserName('');
      }
    });

    return () => { subscription.unsubscribe(); };
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-[background,border-color,box-shadow] duration-500"
      style={{
        background: scrolled
          ? 'rgba(10, 17, 40, 0.82)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(161,98,7,0.22)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.45)' : 'none',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
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
            <Link href="/book" className="hover:text-[#A16207] transition-colors cursor-pointer font-semibold text-white">
              Book a Trip
            </Link>
            <Link href="/about" className="hover:text-[#A16207] transition-colors cursor-pointer">
              About
            </Link>
          </nav>

          {/* Auth & Theme */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              className="p-2.5 rounded-xl bg-white/8 border border-white/12 hover:border-[#A16207]/60 text-amber-400 hover:text-amber-300 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark'
                ? <Sun className="w-4 h-4 text-[#F5D77F]" />
                : <Moon className="w-4 h-4 text-[#1E3A8A]" />}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/8 border border-white/12 text-xs font-semibold text-slate-200">
                  <User className="w-3.5 h-3.5 text-[#A16207]" />
                  <span className="max-w-[120px] truncate">{userName}</span>
                </div>

                <Link
                  href="/my-bookings"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1E3A8A] border border-[#A16207]/40 text-xs font-bold text-[#F5D77F] hover:bg-[#152e72] transition-colors cursor-pointer shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#A16207]" />
                  <span>My Bookings</span>
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

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-amber-400 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark'
                ? <Sun className="w-5 h-5 text-[#F5D77F]" />
                : <Moon className="w-5 h-5 text-[#1E3A8A]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-[#A16207]/20 px-4 pt-2 pb-6 space-y-4"
          style={{
            background: 'rgba(10, 17, 40, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">Home</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">Services</Link>
            <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">Fleet</Link>
            <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="py-2 font-semibold text-white">Book a Trip</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#A16207]">About Us</Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            {user ? (
              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 px-1">
                  <User className="w-3.5 h-3.5 text-[#A16207]" />
                  <span>Logged in as <strong>{userName}</strong></span>
                </div>
                <Link
                  href="/my-bookings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-[#1E3A8A] text-[#F5D77F] font-semibold text-sm border border-[#A16207]/40 block"
                >
                  My Bookings Portal
                </Link>
                <button
                  onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                  className="w-full text-center py-2.5 rounded-lg border border-rose-500/40 bg-rose-500/10 text-rose-300 font-semibold text-sm"
                >
                  Log Out
                </button>
              </div>
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
    </motion.header>
  );
}
