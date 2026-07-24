'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { Crown, Menu, X, User, LogOut, Calendar, Sun, Moon, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<unknown>(null);
  const [userName, setUserName] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  /* Track scroll position */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Book a Trip', href: '/book' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0B0B0D]/90 backdrop-blur-2xl border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-white/90 backdrop-blur-2xl border-[#B8860B]/25 shadow-[0_10px_30px_rgba(184,134,11,0.10)]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent border-transparent'
      }`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Left Column: Brand Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F5D77F] to-[#A16207] p-[1.5px] shadow-[0_4px_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0B0B0D] rounded-[9.5px] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#F5D77F] group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#F8F5EE] group-hover:text-[#F5D77F] transition-colors block leading-none">
                  KANISHKA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">TRAVELS</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center Column: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs sm:text-sm font-semibold transition-all duration-300 py-1 ${
                    isActive
                      ? 'text-[#F5D77F]'
                      : 'text-[#F8F5EE] hover:text-[#F5D77F]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Column: Action Bar */}
          <div className="hidden lg:flex items-center justify-end gap-4 flex-1">
            {/* Theme Toggle Pill */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              className="p-3 rounded-xl bg-[#0B0B0D]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F5D77F] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F5D77F]" />
              ) : (
                <Moon className="w-4 h-4 text-[#B8860B]" />
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A1A1D] border border-[#D4AF37]/30 text-xs font-semibold text-[#F8F5EE]">
                  <User className="w-4 h-4 text-[#D4AF37]" />
                  <span className="max-w-[130px] truncate">{userName}</span>
                </div>

                <Link
                  href="/my-bookings"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25262B] border border-[#D4AF37]/40 text-xs font-bold text-[#F5D77F] hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>My Bookings</span>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30 transition-all duration-300 cursor-pointer"
                  aria-label="Log Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Chauffeur</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[#0B0B0D]/80 border border-[#D4AF37]/30 text-[#F5D77F] cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-[#F5D77F]" /> : <Moon className="w-5 h-5 text-[#B8860B]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#D4AF37]/30 text-[#F8F5EE] hover:text-[#F5D77F] cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Luxury Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0B0B0D]/95 backdrop-blur-2xl border-b border-[#D4AF37]/30 px-6 pt-4 pb-8 space-y-5"
        >
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl font-bold text-[#F8F5EE] hover:text-[#F5D77F] py-1 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            {user ? (
              <div className="space-y-3 text-center">
                <div className="text-xs text-[#A1A1AA] font-mono flex items-center justify-center gap-2">
                  <User className="w-4 h-4 text-[#D4AF37]" />
                  <span>Logged in as <strong className="text-[#F8F5EE]">{userName}</strong></span>
                </div>
                <Link
                  href="/my-bookings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-[#25262B] text-[#F5D77F] font-bold text-sm border border-[#D4AF37]/40 block uppercase tracking-wider"
                >
                  My Bookings Portal
                </Link>
                <button
                  onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                  className="w-full text-center py-3 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-300 font-bold text-sm block uppercase tracking-wider"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-lg"
              >
                Reserve Chauffeur
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
