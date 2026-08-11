'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { Crown, Menu, X, User, LogOut, Calendar, Sun, Moon, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon, PRIMARY_NUMBER } from '@/components/WhatsAppButton';

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
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'VEHICLES', href: '/fleet' },
    { name: 'BOOK A TRIP', href: '/book' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0B0B0D]/90 backdrop-blur-2xl border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-white/90 backdrop-blur-2xl border-[#B8860B]/25 shadow-[0_10px_30px_rgba(184,134,11,0.10)]'
          : theme === 'dark'
            ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent border-transparent'
            : 'bg-white/55 backdrop-blur-xl border-[#B8860B]/15 shadow-[0_8px_28px_rgba(255,255,255,0.18)]'
      }`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-3.5 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Left Column: Brand Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer max-w-[220px] sm:max-w-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F5D77F] to-[#A16207] p-[1.5px] shadow-[0_4px_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className={`w-full h-full rounded-[9.5px] flex items-center justify-center ${
                  theme === 'dark' ? 'bg-[#0B0B0D]' : 'bg-white'
                }`}>
                  <Crown className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#F5D77F] group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="min-w-0">
                <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight group-hover:text-[#F5D77F] transition-colors block leading-none truncate ${
                  theme === 'dark' ? 'text-[#F8F5EE]' : 'text-[#1A1A1D]'
                }`}>
                  KANISHKA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A16207]">TRAVELS</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center Column: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[12px] xl:text-[13px] font-crown font-bold tracking-[0.12em] transition-all duration-300 py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#F5D77F]'
                      : theme === 'dark'
                        ? 'text-[#F8F5EE] hover:text-[#F5D77F]'
                        : 'text-[#1A1A1D] hover:text-[#B8860B]'
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
              className={`p-3 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F5D77F] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md ${
                theme === 'dark' ? 'bg-[#0B0B0D]/80' : 'bg-white/80'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F5D77F]" />
              ) : (
                <Moon className="w-4 h-4 text-[#B8860B]" />
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-2.5">
                {/* User name pill */}
                <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#1A1A1D]/90 border-[#D4AF37]/30 text-[#F8F5EE] backdrop-blur-sm'
                    : 'bg-amber-50/90 border-[#B8860B]/35 text-[#1A1108] shadow-[0_2px_12px_rgba(184,134,11,0.10)] backdrop-blur-sm'
                }`}>
                  <User className={`w-3.5 h-3.5 shrink-0 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#B8860B]'}`} />
                  <span className="max-w-[110px] truncate">{userName}</span>
                </div>

                {/* My Bookings */}
                <Link
                  href="/my-bookings"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold hover:scale-[1.03] transition-all duration-300 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-[#25262B]/90 border-[#D4AF37]/35 text-[#F5D77F] hover:border-[#D4AF37] hover:bg-[#D4AF37]/12 shadow-md backdrop-blur-sm'
                      : 'bg-white/90 border-[#B8860B]/35 text-[#78350F] hover:border-[#B8860B] hover:bg-amber-50 shadow-[0_2px_12px_rgba(184,134,11,0.12)] backdrop-blur-sm'
                  }`}
                >
                  <Calendar className={`w-3.5 h-3.5 shrink-0 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#B8860B]'}`} />
                  <span>My Bookings</span>
                </Link>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                    theme === 'dark'
                      ? 'text-[#71717A] border-transparent hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30'
                      : 'text-[#92400E]/60 border-[#B8860B]/20 bg-amber-50/60 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-300/60 shadow-sm'
                  }`}
                  aria-label="Sign Out"
                >
                  <LogOut className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                </button>
              </div>
            ) : (
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:scale-105 hover:shadow-[0_6px_30px_rgba(212,175,55,0.45)] transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>BOOK A CAB</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border border-[#D4AF37]/30 text-[#F5D77F] cursor-pointer ${
                theme === 'dark' ? 'bg-[#0B0B0D]/80' : 'bg-white/85'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-[#F5D77F]" /> : <Moon className="w-5 h-5 text-[#B8860B]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border border-[#D4AF37]/30 hover:text-[#F5D77F] cursor-pointer ${
                theme === 'dark' ? 'bg-[#1A1A1D] text-[#F8F5EE]' : 'bg-white/85 text-[#1A1A1D]'
              }`}
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
          className={`lg:hidden backdrop-blur-2xl border-b border-[#D4AF37]/30 px-5 sm:px-6 pt-4 pb-8 space-y-5 max-h-[85vh] overflow-y-auto ${
            theme === 'dark'
              ? 'bg-[#0B0B0D]/95'
              : 'bg-white/92'
          }`}
        >
          <nav className="flex flex-col gap-3 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-lg font-bold py-2.5 min-h-[44px] flex items-center justify-center rounded-xl transition-all ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-[#D4AF37]/15 text-[#F5D77F] border border-[#D4AF37]/40'
                        : 'bg-amber-100 text-[#78350F] border border-[#B8860B]/40'
                      : theme === 'dark'
                        ? 'text-[#F8F5EE] hover:text-[#F5D77F] hover:bg-white/5'
                        : 'text-[#1A1A1D] hover:text-[#B8860B] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            {/* Direct Contact Row in Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:+91${PRIMARY_NUMBER.slice(2)}`}
                className={`py-2.5 px-3 min-h-[44px] rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                  theme === 'dark'
                    ? 'bg-[#1A1A1D] border-[#D4AF37]/35 text-[#F5D77F] hover:bg-[#D4AF37]/15'
                    : 'bg-amber-50 border-[#B8860B]/35 text-[#78350F] hover:bg-amber-100'
                }`}
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Owner</span>
              </a>
              <a
                href={`https://wa.me/${PRIMARY_NUMBER}?text=${encodeURIComponent(
                  "Hi S. Ramesh, I'd like to enquire about booking a cab with Kanishka Travels."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 min-h-[44px] rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#25D366]/25 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {user ? (
              <div className="space-y-3">
                {/* Logged-in user info */}
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-[#1A1A1D]/80 border-[#D4AF37]/20'
                    : 'bg-amber-50/80 border-[#B8860B]/25'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    theme === 'dark' ? 'bg-[#D4AF37]/15' : 'bg-[#B8860B]/12'
                  }`}>
                    <User className={`w-4 h-4 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#B8860B]'}`} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-mono uppercase tracking-wider ${
                      theme === 'dark' ? 'text-[#71717A]' : 'text-[#92400E]/60'
                    }`}>Signed in as</p>
                    <p className={`text-sm font-bold truncate ${
                      theme === 'dark' ? 'text-[#F8F5EE]' : 'text-[#1A1108]'
                    }`}>{userName}</p>
                  </div>
                </div>

                <Link
                  href="/my-bookings"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-center py-3 min-h-[44px] rounded-xl font-bold text-xs border uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-[#25262B] border-[#D4AF37]/40 text-[#F5D77F] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]'
                      : 'bg-white border-[#B8860B]/40 text-[#78350F] hover:bg-amber-50 hover:border-[#B8860B]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  My Bookings Portal
                </Link>

                <button
                  onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                  className={`w-full text-center py-3 min-h-[44px] rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    theme === 'dark'
                      ? 'border-rose-500/35 bg-rose-500/8 text-rose-400 hover:bg-rose-500/15'
                      : 'border-rose-300/60 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:border-rose-400/70'
                  }`}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 min-h-[44px] flex items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#A16207] text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-lg hover:shadow-[0_6px_25px_rgba(212,175,55,0.40)] transition-all duration-300"
              >
                BOOK A CAB
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
