'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/deekxa',
    icon: (
      <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dikshya-khanal-608834217/',
    icon: (
      <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:dikshyak88@gmail.com',
    icon: (
      <svg
        aria-hidden="true"
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
];

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-sky-300 bg-linear-to-r from-sky-100 to-indigo-100 px-3.5 py-2 text-xs font-medium text-sky-700 transition-all duration-200 hover:border-sky-400 hover:from-sky-200 hover:to-indigo-200 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <motion.span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
            initial={false}
            whileHover={{ translateX: '200%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          <motion.svg
            className="relative z-10 h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <polyline points="18 15 12 9 6 15" />
          </motion.svg>

          <span className="relative z-10 tracking-wide">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#060d18]">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_30%,rgba(56,189,248,0.07),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_85%_70%,rgba(99,102,241,0.05),transparent)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 pt-12 pb-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1"
          >
            <span className="text-base font-bold tracking-tight text-white">Dikshya Khanal</span>
            <span className="text-xs text-slate-400">Frontend Developer · Nepal</span>
          </motion.div>

          <motion.nav
            aria-label="Footer navigation"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-6"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs tracking-wide text-slate-400 transition-colors duration-150 hover:text-slate-200"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            {socialLinks.map(({ label, href, icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                className="rounded-lg p-2 text-slate-500 transition-colors duration-150 hover:bg-white/8 hover:text-slate-200"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="mb-6 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs text-slate-500"
          >
            © {year} Dikshya Khanal. <span className="text-slate-400">Built with Next.js, Tailwind CSS & Framer Motion.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            <BackToTop />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
