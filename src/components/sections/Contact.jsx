'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

// ─── Contact links ─────────────────────────────────────────────────────────────

const contactLinks = [
  {
    label: 'Email',
    value: 'dikshyak88@gmail.com',
    href: 'mailto:dikshyak88@gmail.com',
    note: 'Fastest response',
    accent: 'sky',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dikshya-khanal',
    href: 'https://www.linkedin.com/in/dikshya-khanal-608834217/',
    note: 'Connect professionally',
    accent: 'indigo',
  },
  {
    label: 'GitHub',
    value: 'github.com/deekxa',
    href: 'https://github.com/deekxa',
    note: 'See the code',
    accent: 'slate',
  },
  {
    label: 'Other Portfolio',
    value: 'dikshyakhanal.com.np',
    href: 'https://dikshyakhanal.com.np',
    // note: 'You are here',
    accent: 'emerald',
  },
];

const accentMap = {
  sky:     { dot: 'bg-sky-500',     text: 'text-sky-700',     hover: 'hover:border-sky-300 hover:bg-sky-50'     },
  indigo:  { dot: 'bg-indigo-500',  text: 'text-indigo-700',  hover: 'hover:border-indigo-300 hover:bg-indigo-50'  },
  slate:   { dot: 'bg-slate-500',   text: 'text-slate-700',   hover: 'hover:border-slate-300 hover:bg-slate-50'   },
  emerald: { dot: 'bg-emerald-500', text: 'text-emerald-700', hover: 'hover:border-emerald-300 hover:bg-emerald-50' },
};

// ─── Variants ─────────────────────────────────────────────────────────────────

const lineGrow = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.65, ease: 'easeOut' } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 16 } },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-150"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" className="w-3 h-3" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 12 4 10" />
    </svg>
  );
}

// ─── Copy button ──────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
      className="p-1.5 rounded-md text-slate-500 hover:text-slate-900
        hover:bg-slate-100 transition-all duration-150 shrink-0"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span key="check" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }}>
            <CheckIcon />
          </motion.span>
        ) : (
          <motion.span key="copy" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }}>
            <CopyIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export default function Contact() {
  // ── Form state ──
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '7159affe-6b2a-4c8b-a1e6-eb425e235dc2',
          subject: subject,
          message: message,
          name: 'Portfolio Visitor',
          email: 'visitor@portfolio.com',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setSubject('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100"
    >
      {/* Glows */}
      <div aria-hidden="true"
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(56,189,248,0.12),transparent)]" />
      <div aria-hidden="true"
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_35%_25%_at_15%_20%,rgba(99,102,241,0.1),transparent)]" />

      <div className="relative mx-auto max-w-4xl">

        {/* ── Eyebrow ── */}
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="h-px w-10 bg-linear-to-r from-transparent to-slate-400 origin-left"
              variants={lineGrow} initial="hidden" whileInView="visible" viewport={{ once: true }}
            />
            <motion.span
              className="text-[11px] tracking-[0.25em] uppercase text-slate-500 font-medium"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }} viewport={{ once: true }}
            >
              Contact
            </motion.span>
          </div>

          {/* ── Big heading ── */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 65, damping: 16, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 mb-4">
              Let&apos;s work
              <br />
              <span className="bg-linear-to-r from-sky-600 via-slate-900 to-indigo-600 bg-clip-text text-transparent">
                together.
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base max-w-md leading-relaxed">
              Open to frontend roles, freelance projects, and internship extensions.
              I respond within 24 hours usually much faster.
            </p>
          </motion.div>
        </ScrollAnimation>

        {/* ── Two-col layout ── */}
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16">

          {/* ── Left — contact links ── */}
          <motion.div
            className="flex flex-col gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp}
              className="text-[11px] tracking-[0.22em] uppercase text-slate-500 mb-2">
              Reach me on
            </motion.p>

            {contactLinks.map(({ label, value, href, note, accent }) => {
              const a = accentMap[accent];
              return (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`group flex items-start justify-between gap-3 px-4 py-3.5
                    rounded-xl border border-slate-300 bg-white/85
                    transition-all duration-200 ${a.hover}`}
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        {label}
                      </span>
                    </div>
                    <span className={`text-sm font-medium truncate pl-3.5 ${a.text}`}>
                      {value}
                    </span>
                    <span className="text-[11px] text-slate-500 pl-3.5">{note}</span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    <CopyButton text={value} />
                    <ArrowUpRight />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* ── Right — quick message panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <p className="text-[11px] tracking-[0.22em] uppercase text-slate-500 mb-0">
              Quick message
            </p>

            {/* ── Web3Forms form ── */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-xs text-slate-500 tracking-wide">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Frontend role opportunity"
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-slate-800
                    bg-white border border-slate-300
                    placeholder:text-slate-400
                    focus:outline-none focus:border-sky-400 focus:bg-white
                    transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs text-slate-500 tracking-wide">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Dikshya, I came across your portfolio and..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-slate-800
                    bg-white border border-slate-300
                    placeholder:text-slate-400 resize-none leading-relaxed
                    focus:outline-none focus:border-sky-400 focus:bg-white
                    transition-all duration-200"
                />
              </div>

              {/* Status banners */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                      bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                      bg-red-50 border border-red-200 text-red-700 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    Failed to send. Email directly at dikshyak88@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                className="w-full py-3 rounded-xl text-sm font-semibold
                  bg-sky-600 hover:bg-sky-500 text-white
                  transition-colors duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  'Sent ✓'
                ) : (
                  'Send message'
                )}
              </motion.button>

              <p className="text-[11px] text-slate-500 text-center">
             
              </p>
            </form>
          </motion.div>
        </div>

        {/* ── Bottom availability status ── */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-300 flex flex-col sm:flex-row
            items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm text-slate-700 font-medium">
              Available for work  immediately
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Nepal (UTC+5:45)</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span>Remote-ready</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span>Full-time or contract</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}