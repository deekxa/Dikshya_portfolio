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
  { label: 'Experience',   value: '1+ year, production apps'        },
  { label: 'Location',     value: 'Nepal — open to remote'          },
  { label: 'Availability', value: 'Immediately available'           },
  { label: 'Stack',        value: 'React · Next.js · TS · Tailwind' },
  { label: 'Testing',      value: 'Jest · RTL · Playwright'         },
  { label: 'English',      value: 'Proficient'                      },
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
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100"
      id="about"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_25%_60%,rgba(56,189,248,0.12),transparent)]" />

      <div className="mx-auto max-w-5xl">

        {/* ── Eyebrow ── */}
        <ScrollAnimation>
          <motion.div
            className="flex items-center gap-3 mb-16"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="h-px w-10 bg-gradient-to-r from-transparent to-slate-400 origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <span className="text-[11px] tracking-[0.25em] uppercase text-slate-500 font-medium">
              About
            </span>
          </motion.div>
        </ScrollAnimation>

        {/* ── Grid ── */}
        <div className="grid md:grid-cols-[340px_1fr] gap-12 md:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">

            {/* Photo */}
            <ScrollAnimation>
              <motion.div
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent pointer-events-none" />

                {/* Nameplate */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white/78 backdrop-blur-sm border-t border-slate-300/80">
                  <p className="text-sm font-semibold text-slate-900">Dikshya Khanal</p>
                  <p className="text-[11px] text-slate-600 tracking-wide">Frontend Developer · QA</p>
                </div>
              </motion.div>
            </ScrollAnimation>

            {/* Quick info */}
            <ScrollAnimation delay={100}>
              <motion.div
                className="flex flex-col divide-y divide-slate-300/80"
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {quickInfo.map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={listItem}
                    className="flex items-start justify-between gap-4 py-2.5 group"
                  >
                    <span className="text-[11px] uppercase tracking-widest text-slate-500 shrink-0 pt-[1px] w-24">
                      {label}
                    </span>
                    <span className="text-xs text-slate-700 text-right leading-snug group-hover:text-slate-900 transition-colors duration-200">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollAnimation>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-8 md:pt-1">

            {/* Heading */}
            <ScrollAnimation>
              <motion.h2
                className="text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-slate-900"
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Frontend dev who
                <br />
                <span className="bg-gradient-to-r from-sky-600 via-slate-900 to-indigo-600 bg-clip-text text-transparent">
                  ships and tests.
                </span>
              </motion.h2>
            </ScrollAnimation>

            {/* Bio */}
            <ScrollAnimation delay={80}>
              <motion.div
                className="flex flex-col gap-4 text-sm sm:text-base text-slate-700 leading-relaxed"
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p variants={listItem}>
                  I have{' '}
                  <span className="text-slate-900 font-medium">1+ year</span>{' '}
                  of professional experience building real products an
                  e-commerce platform, an educational CMS, and a POS system 
                  using{' '}
                  <span className="text-slate-900 font-medium">
                    React, Next.js, TypeScript, and Tailwind CSS.
                  </span>
                </motion.p>

                <motion.p variants={listItem}>
                  Most frontend devs skip testing. I don&apos;t. I write
                  unit tests with{' '}
                  <span className="text-sky-700">Jest + React Testing Library</span>{' '}
                  and end-to-end flows with{' '}
                  <span className="text-sky-700">Playwright</span>,
                  which means the features I ship stay working.
                </motion.p>

                <motion.p variants={listItem}>
                  I care about animation quality {' '}
                  <span className="text-indigo-700">Framer Motion</span>{' '}
                  is a core part of how I build UI, not an afterthought.
                  Interfaces I deliver feel polished, load fast, and don&apos;t
                  break on edge cases.
                </motion.p>
              </motion.div>
            </ScrollAnimation>

            {/* What I bring */}
            <ScrollAnimation delay={120}>
              <motion.div
                className="flex flex-col gap-3 pt-2"
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  variants={listItem}
                  className="text-[11px] tracking-[0.22em] uppercase text-slate-500 mb-1"
                >
                  What I bring to a team
                </motion.p>

                {[
                  'Production React & Next.js apps, not just side projects',
                  'Testing discipline  Jest, RTL, Playwright from day one',
                  'Framer Motion animations built into the component layer',
                  'Clean TypeScript with typed APIs and reusable component systems',
                  'Strong attention to UI detail  spacing, motion, edge cases',
                  'Communicates clearly, reviews PRs, works async without prompting',
                ].map((point) => (
                  <motion.div
                    key={point}
                    variants={listItem}
                    className="flex items-start gap-2.5"
                  >
                    <CheckIcon />
                    <span className="text-sm text-slate-700 leading-snug">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollAnimation>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-slate-300 via-slate-400/60 to-transparent origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* ── CTA row: Download CV + GitHub ── */}
            <ScrollAnimation delay={160}>
              <motion.div
                className="flex flex-wrap items-center gap-6"
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
                  className="inline-flex items-center gap-3 text-sm text-slate-600
                    hover:text-slate-900 transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <span className="h-px w-5 bg-slate-400 group-hover:w-7 group-hover:bg-sky-600
                    transition-all duration-300" />
                  <span className="tracking-wide">Download CV</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity"
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

                {/* Separator dot */}
                <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />

                {/* GitHub */}
                <motion.a
                  href="https://github.com/deekxa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-600
                    hover:text-slate-900 transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <span className="h-px w-5 bg-slate-400 group-hover:w-7 group-hover:bg-slate-700
                    transition-all duration-300" />
                  <span className="tracking-wide">GitHub</span>
                  <GitHubIcon />
                </motion.a>
              </motion.div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </section>
  );
}