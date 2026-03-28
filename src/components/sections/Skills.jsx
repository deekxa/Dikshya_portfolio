'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

// ─── Skills data — Frontend specialist + QA ───────────────────────────────────

const skillGroups = [
  {
    category: 'React Ecosystem',
    note: 'Core speciality — daily production use',
    accent: 'sky',
    skills: [
      'React 18',
      'React Hooks',
      'Custom Hooks',
      'Context API',
      'React Router',
      'React Query',
      'Server Components',
      'Suspense & Lazy',
      'React Portal',
      'Error Boundaries',
    ],
  },
  {
    category: 'Next.js & SSR',
    note: 'App Router, SEO, performance',
    accent: 'sky',
    skills: [
      'Next.js 14',
      'App Router',
      'Server Actions',
      'Dynamic Routing',
      'SSR / SSG / ISR',
      'Metadata API',
      'Image Optimization',
      'Route Handlers',
      'Middleware',
      'Core Web Vitals',
    ],
  },
  {
    category: 'Languages',
    note: 'Typed, modern, standards-compliant',
    accent: 'indigo',
    skills: [
      'TypeScript',
      'JavaScript (ES2023)',
      'HTML5 Semantic',
      'CSS3',
      'JSX / TSX',
      'JSON',
    ],
  },
  {
    category: 'Styling & Animation',
    note: 'Pixel-perfect, motion-quality UI',
    accent: 'indigo',
    skills: [
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'CSS Animations',
      'CSS Variables',
      'Responsive Design',
      'shadcn/ui',
      'Radix UI',
      'CSS Grid & Flexbox',
      'Dark Mode',
    ],
  },
  {
    category: 'Testing & QA',
    note: 'What most frontend devs skip',
    accent: 'emerald',
    skills: [
      'Jest',
      'React Testing Library',
      'Playwright',
      'Unit Testing',
      'Integration Testing',
      'E2E Testing',
      'Mock Service Worker',
      'Test Coverage',
      'CI/CD Testing',
      'Accessibility Testing',
    ],
  },
  {
    category: 'State Management',
    note: 'Right tool for right scale',
    accent: 'indigo',
    skills: [
      'Redux Toolkit',
      'Zustand',
      'Jotai',
      'React Query',
      'SWR',
      'Context API',
    ],
  },
  {
    category: 'Performance & SEO',
    note: 'Ships fast, ranks well',
    accent: 'sky',
    skills: [
      'Core Web Vitals',
      'Lazy Loading',
      'Code Splitting',
      'Bundle Optimization',
      'SEO Meta Tags',
      'Open Graph',
      'Structured Data',
      'Lighthouse',
      'Web Accessibility (a11y)',
      'WCAG 2.1 AA',
    ],
  },
  {
    category: 'Tooling & DX',
    note: 'Shipping in real teams',
    accent: 'slate',
    skills: [
      'Git & GitHub',
      'Vite',
      'Webpack',
      'ESLint',
      'Prettier',
      'Husky',
      'VS Code',
      'npm / pnpm / yarn',
      'Vercel',
      'Netlify',
    ],
  },
  {
    category: 'APIs & Integration',
    note: 'Frontend-side only',
    accent: 'sky',
    skills: [
      'REST API consumption',
      'Axios',
      'Fetch API',
      'GraphQL (client)',
      'WebSockets (client)',
      'Stripe (frontend)',
      'Auth0 / NextAuth',
      'Cloudinary',
    ],
  },
];

const accentMap = {
  sky:     { dot: 'bg-sky-400',     badge: 'bg-sky-400/10 text-sky-300 border-sky-400/20',         note: 'text-sky-500'     },
  indigo:  { dot: 'bg-indigo-400',  badge: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20', note: 'text-indigo-500'  },
  emerald: { dot: 'bg-emerald-400', badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20', note: 'text-emerald-500' },
  slate:   { dot: 'bg-slate-400',   badge: 'bg-slate-400/10 text-slate-300 border-slate-400/20',   note: 'text-slate-400'   },
};

// ─── Variants ─────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 65, damping: 16, delay: i * 0.07 },
  }),
};

const badgeVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
};

const badgeItem = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

const lineGrow = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.65, ease: 'easeOut', delay: 0.1 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#060d18] py-24 sm:py-32 px-4 overflow-hidden"
    >
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_80%_20%,rgba(56,189,248,0.07),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_80%,rgba(99,102,241,0.06),transparent)]" />

      <div className="relative mx-auto max-w-5xl">

        {/* ── Eyebrow ── */}
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-px w-10 bg-linear-to-r from-transparent to-slate-500 origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.span
              className="text-[11px] tracking-[0.25em] uppercase text-slate-400 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Skills
            </motion.span>
          </div>

          {/* Heading */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-[2.6rem] font-bold leading-[1.12] tracking-tight text-white mb-3">
              Frontend-first.{' '}
              <span className="bg-linear-to-r from-sky-200 via-white to-indigo-300 bg-clip-text text-transparent">
                Tested by default.
              </span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              My speciality is React + Next.js  clean, typed, accessible, and animated.
              Every feature I ship has tests. Not because someone asked, but because that&apos;s how I work.
            </p>
          </motion.div>
        </ScrollAnimation>

        {/* ── Skill grid — masonry-feel with auto-fill ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const a = accentMap[group.accent];
            return (
              <motion.div
                key={group.category}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 200, damping: 18 } }}
                className="flex flex-col gap-4 p-5 rounded-xl
                  bg-white/3 border border-white/[0.07]
                  hover:border-white/13 hover:bg-white/5
                  transition-colors duration-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                      <h3 className="text-sm font-semibold text-white leading-tight">
                        {group.category}
                      </h3>
                    </div>
                    <p className={`text-[11px] tracking-wide pl-3.5 ${a.note}`}>
                      {group.note}
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-600 font-mono shrink-0 pt-0.5 select-none">
                    {group.skills.length}
                  </span>
                </div>

                {/* Badges */}
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeItem}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md border
                        leading-none tracking-wide ${a.badge}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Honest signal ── */}
        <motion.p
          className="mt-10 text-xs text-slate-600 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Specialist in Frontend · React · Next.js · TypeScript · Testing — no backend.
        </motion.p>

      </div>
    </section>
  );
}