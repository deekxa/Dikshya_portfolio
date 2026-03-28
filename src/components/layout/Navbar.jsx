'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/#hero',     label: 'Home'     },
  { href: '/#about',    label: 'About'    },
  { href: '/#skills',   label: 'Skills'   },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact',  label: 'Contact'  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState('/#hero');
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const navRef = useRef(null);

  // ── Scroll → glass ────────────────────────────────────────────────────────
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // ── Active section detection ──────────────────────────────────────────────
  useEffect(() => {
    if (pathname !== '/') { setActiveHref(''); return; }

    const detect = () => {
      const offset = window.scrollY + 120;
      let current = '/#home';
      for (const link of navLinks) {
        const el = document.getElementById(link.href.replace('/#', ''));
        if (el && el.offsetTop <= offset) current = link.href;
      }
      setActiveHref(current);
    };

    detect();
    window.addEventListener('scroll', detect, { passive: true });
    window.addEventListener('resize', detect);
    window.addEventListener('hashchange', detect);
    return () => {
      window.removeEventListener('scroll', detect);
      window.removeEventListener('resize', detect);
      window.removeEventListener('hashchange', detect);
    };
  }, [pathname]);

  // ── Close on outside click ────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href) => pathname === '/' && activeHref === href;

  return (
    <header ref={navRef} className="fixed top-0 inset-x-0 z-50">

      {/* ── Main bar ── */}
      <nav
        aria-label="Main navigation"
        className={`relative transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-b border-slate-300/80 shadow-[0_4px_24px_rgba(15,23,42,0.08)]'
            : 'bg-slate-50/70 backdrop-blur-md border-b border-slate-200/70'
        }`}
      >
        {/* Sky top hairline on scroll */}
        {scrolled && (
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r
            from-transparent via-sky-300/50 to-transparent pointer-events-none" />
        )}

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link
              href="/#home"
              onClick={() => setActiveHref('/#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center
                bg-sky-50 border border-sky-200
                group-hover:bg-sky-100 group-hover:border-sky-300
                transition-all duration-200">
                <span className="text-sky-600 font-bold text-sm leading-none select-none">
                  DK
                </span>
              </div>
              <span className="text-sm font-semibold tracking-tight
                text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                Dikshya Khanal
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <ul className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveHref(link.href)}
                      className={`relative px-3.5 py-2 text-xs font-medium tracking-wide
                        rounded-lg block transition-colors duration-150 ${
                          active
                            ? 'text-sky-600'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
                        }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-sky-50 border border-sky-200"
                          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Right — CTA + hamburger ── */}
            <div className="flex items-center gap-2.5">

              {/* Available pill — desktop */}
              <a
                href="/#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5
                  rounded-full text-xs font-semibold
                  bg-sky-50 border border-sky-200 text-sky-700
                  hover:bg-sky-100 hover:border-sky-300
                  transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </a>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMenuOpen((p) => !p)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden p-2 rounded-lg text-slate-500
                  hover:text-slate-800 hover:bg-slate-100
                  active:scale-95 transition-all duration-150"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={1.8}
                  strokeLinecap="round" strokeLinejoin="round">
                  {menuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <>
                      <line x1="4" y1="7"  x2="20" y2="7"  />
                      <line x1="4" y1="12" x2="15" y2="12" />
                      <line x1="4" y1="17" x2="20" y2="17" />
                    </>
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{   opacity: 0, y: -8,  scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="md:hidden mx-3 mt-1 rounded-2xl overflow-hidden
              bg-white/96 backdrop-blur-xl
              border border-slate-300/80
              shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
          >
            {/* Subtle sky glow at top */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none
              bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(56,189,248,0.06),transparent)]" />

            <ul className="relative flex flex-col p-2">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => { setActiveHref(link.href); setMenuOpen(false); }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl
                        text-sm font-medium transition-all duration-150 ${
                          active
                            ? 'text-sky-600 bg-sky-50'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        active ? 'bg-sky-500' : 'bg-slate-300'
                      }`} />
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}

              {/* CTA row */}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                className="pt-2 mt-1 border-t border-slate-100"
              >
                <a
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2
                    mx-2 mb-1 py-2.5 rounded-xl text-sm font-semibold
                    bg-sky-600 text-white
                    hover:bg-sky-500 transition-all duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                  Available — Let&apos;s talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}