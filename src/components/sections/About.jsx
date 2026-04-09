'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 16, delay },
  },
});

const staggerList = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.25 },
  },
};

const listItem = {
  hidden:  { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

const imageReveal = {
  hidden:  { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 16, delay: 0.1 },
  },
};

const lineGrow = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.65, ease: 'easeOut', delay: 0.15 },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickInfo = [
  { label: 'Experience',   value: '1+ yr · 3 production apps'            },
  { label: 'Location',     value: 'Nepal - open to remote'               },
  { label: 'Availability', value: 'Immediately available'                },
  { label: 'Stack',        value: 'React · Next.js · TS · JS · Tailwind' },
  { label: 'Testing',      value: 'Jest · RTL · Playwright'              },
  { label: 'English',      value: 'Proficient'                           },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-[3px]"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="2.5 8.5 6 12 13.5 4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100"
      id="about"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_25%_60%,rgba(56,189,248,0.12),transparent)]" />

      <div className="mx-auto max-w-5xl">

        {/* ── Eyebrow — centered ── */}
        <ScrollAnimation>
          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-slate-400 origin-right"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <span className="text-sm sm:text-base tracking-[0.35em] uppercase text-slate-500 font-semibold">
              About
            </span>
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-transparent to-slate-400 origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </motion.div>
        </ScrollAnimation>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-14 items-start">

          {/* ══════════════ LEFT COLUMN ══════════════ */}
          <div className="flex flex-col gap-5">

            {/* Photo */}
            <ScrollAnimation>
              <motion.div
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden
                           border border-slate-200 shadow-sm"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.012 }}
                transition={{ type: 'spring', stiffness: 100, damping: 22 }}
              >
                <Image
                  src="/images/diks.jpg"
                  alt="Dikshya Khanal — Frontend Developer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-700 ease-in-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Nameplate */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3
                                bg-white/85 backdrop-blur-sm border-t border-white/60">
                  <p className="text-sm font-semibold text-slate-900 leading-tight">
                    Dikshya Khanal
                  </p>
                  <p className="text-[11px] text-slate-500 tracking-wide mt-0.5">
                    Frontend Developer · QA
                  </p>
                </div>
              </motion.div>
            </ScrollAnimation>

            {/* ── CTA row ── */}
            <ScrollAnimation delay={160}>
              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5"
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Download CV */}
                <motion.a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Dikshya Khanal's CV"
                  className="inline-flex items-center gap-3 text-sm text-slate-500
                    hover:text-slate-900 transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <span className="h-px w-5 bg-slate-300 group-hover:w-7 group-hover:bg-sky-500
                    transition-all duration-300" />
                  <span className="tracking-wide">Download CV</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </motion.a>

                <span className="hidden sm:inline-flex w-1 h-1 rounded-full bg-slate-300 shrink-0" aria-hidden="true" />

                {/* GitHub */}
                <motion.a
                  href="https://github.com/deekxa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dikshya Khanal on GitHub"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-500
                    hover:text-slate-900 transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <span className="h-px w-5 bg-slate-300 group-hover:w-7 group-hover:bg-slate-700
                    transition-all duration-300" />
                  <span className="tracking-wide">GitHub</span>
                  <GitHubIcon />
                </motion.a>

              </motion.div>
            </ScrollAnimation>

          </div>

          {/* ══════════════ RIGHT COLUMN ══════════════ */}
          <div className="flex flex-col gap-7">

            {/* Bio */}
            <ScrollAnimation delay={80}>
              <motion.div
                className="flex flex-col gap-5 text-[15px] text-slate-600 leading-[1.75]"
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p variants={listItem}>
                  I&apos;ve worked on real projects like an e-commerce platform, an
                  educational CMS, and a POS system using React, Next.js,
                  TypeScript, JavaScript, and Tailwind CSS.
                </motion.p>

                <motion.p variants={listItem}>
                  I also focus on testing. I write unit tests with Jest and
                  React Testing Library, and I use Playwright for end-to-end
                  testing. This helps make sure features keep working even after
                  changes.
                </motion.p>

                <motion.p variants={listItem}>
                  I pay attention to UI details and animations. I use Framer
                  Motion to add smooth interactions, and I try to keep
                  interfaces fast, clean, and consistent across devices.
                </motion.p>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation delay={120}>
              <motion.div
                className="flex flex-col gap-2.5"
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  variants={listItem}
                  className="text-[10px] tracking-[0.22em] uppercase text-slate-400 mb-1"
                >
                 
                </motion.p>

                {quickInfo.map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={listItem}
                    className="flex items-start gap-2.5"
                  >
                    <CheckIcon />
                    <span className="text-[13px] text-slate-600 leading-snug">
                      <span className="text-slate-800 font-medium">{label}:</span> {value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollAnimation>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-slate-200 via-slate-300/60 to-transparent origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

          </div>
        </div>
      </div>
    </section>
  );
}