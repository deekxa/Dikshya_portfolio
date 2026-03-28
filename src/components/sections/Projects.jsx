'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

// ─── All 7 projects ───────────────────────────────────────────────────────────

const projects = [
  {
    title: 'ARIBT CMS',
    type: 'Educational Platform',
    role: 'Frontend Developer Intern',
    org: 'Abhyam Robotics Institution (ARIBT)',
    impact: 'Course management for 500+ active users',
    description:
      'Full educational platform management system with course enrollment, progress tracking, and analytics dashboard. Built at ARIBT as the primary intern project.',
    stack: ['React', 'JavaScript', 'Context API', 'REST APIs', 'Formik/Yup', 'JWT Auth'],
    highlights: [
      'JWT authentication & role-based authorization',
      'Real-time data sync with progress tracking',
      'Reusable component library with REST API integration',
      'Course management CRUD with filterable data tables',
    ],
    github: 'https://github.com/aman000712/AribtCms',
    tag: 'Professional',
  },
  {
    title: 'POS System',
    type: 'Restaurant / Retail POS',
    role: 'Frontend Developer',
    org: 'ARIBT',
    impact: '50+ concurrent transactions supported',
    description:
      'Restaurant and retail Point-of-Sale with JWT auth, role-based access, table ordering, inventory management, and a sales dashboard.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'JWT Auth'],
    highlights: [
      'Role-based authorization — admin, staff, manager',
      'Table ordering & ledger management',
      'Inventory tracking + sales analytics dashboard',
      '50+ concurrent transaction load tested',
    ],
    github: 'https://github.com/aman000712/Pos.git',
    tag: 'Professional',
  },
  {
    title: 'Consultancy Website',
    type: 'Corporate / Marketing Site',
    role: 'Frontend Developer',
    org: 'ARIBT',
    impact: 'Optimized Core Web Vitals — production live',
    description:
      'Full professional website with Framer Motion animations, case studies, testimonials, and SEO-optimized Next.js SSR. Mobile-first with strong performance scores.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SSR', 'SEO'],
    highlights: [
      'Server-side rendering (Next.js SSR) for SEO',
      'Framer Motion page transitions & scroll animations',
      'Mobile-first, optimized Core Web Vitals',
      'Case studies & testimonials sections',
    ],
    github: 'https://github.com/aman000712/Consultncyfront-end.git',
    tag: 'Professional',
  },
  {
    title: 'Consultancy CMS',
    type: 'Admin Dashboard',
    role: 'Frontend Developer',
    org: 'ARIBT',
    impact: '40% improvement in admin efficiency',
    description:
      'Admin dashboard for education consultancy with user management, content creation, and advanced form validation. Data tables with filtering, sorting, and pagination.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Formik', 'Yup'],
    highlights: [
      'User management with full CRUD',
      'Advanced form validation (Formik + Yup)',
      'Data tables — filter, sort, paginate',
      '40% improvement in admin workflow efficiency',
    ],
    github: 'https://github.com/aman000712/Consultancy-cms.git',
    tag: 'Professional',
  },
  {
    title: 'E-Commerce Bag Store',
    type: 'E-Commerce Platform',
    role: 'Solo Developer',
    org: null,
    impact: 'Full checkout & payment flow — live',
    description:
      'Modern e-commerce platform for handmade and designer bags. Secure checkout with payment processing, user accounts, cart, wishlist, and product catalog.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Payment Integration', 'Auth'],
    highlights: [
      'Secure checkout & payment processing',
      'Cart & wishlist management',
      'User authentication & account management',
      'Product catalog with filtering & search',
    ],
    github: 'https://github.com/deekxa/bag-selling_ecommerce.git',
    tag: 'Personal',
  },
  {
    title: 'Bamboo Craft',
    type: 'E-Commerce / Artisan Store',
    role: 'Solo Developer',
    org: null,
    impact: 'Full product catalog with cart & checkout',
    description:
      'E-commerce platform for bamboo and handcrafted products. Product browsing, cart management, and checkout flow built with a clean, responsive UI.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    highlights: [
      'Product catalog with category filtering',
      'Cart & checkout flow',
      'Responsive mobile-first design',
      'Clean artisan aesthetic UI',
    ],
    github: 'https://github.com/deekxa/bamboo-craft.git',
    tag: 'Personal',
  },
  {
    title: 'Portfolio Site - Built for Client',
    type: 'Developer Portfolio',
    role: 'Solo Developer',
    org: null,
    impact: 'Production-deployed personal portfolio site',
    description:
      'Professional portfolio website built for a developer. Showcases projects, skills, and contact — built with Next.js and Framer Motion animations.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Scroll-triggered animations with Framer Motion',
      'Projects & skills sections',
      'Responsive across all breakpoints',
      'Optimized performance & SEO',
    ],
    github: 'https://github.com/deekxa/AmanPortfolio.git',
    tag: 'Personal',
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 16, delay: i * 0.08 },
  }),
};

const lineGrow = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.65, ease: 'easeOut' } },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function GithubIcon() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const isPro = project.tag === 'Professional';

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group flex flex-col rounded-xl border border-slate-300
        bg-white/90 hover:bg-white hover:border-slate-400
        transition-colors duration-200 overflow-hidden"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3">
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5
                rounded-full border ${
                  isPro
                    ? 'text-sky-700 border-sky-300 bg-sky-100'
                    : 'text-indigo-700 border-indigo-300 bg-indigo-100'
                }`}
            >
              {project.tag}
            </span>
            <span className="text-[11px] text-slate-500">{project.type}</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 leading-tight">{project.title}</h3>
          <p className="text-xs text-slate-600">
            {project.role}{project.org ? ` · ${project.org}` : ''}
          </p>
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub for ${project.title}`}
            className="shrink-0 p-2 rounded-lg text-slate-500 hover:text-slate-900
              hover:bg-slate-100 transition-colors duration-150 mt-0.5"
          >
            <GithubIcon />
          </a>
        )}
      </div>

      {/* Impact */}
      <div className="px-5 pb-3">
        <p className="text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
          {project.impact}
        </p>
      </div>

      {/* Description */}
      <div className="px-5 pb-4">
        <p className="text-sm text-slate-700 leading-relaxed">{project.description}</p>
      </div>

      {/* Stack */}
      <div className="px-5 pb-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[11px] text-slate-700 border border-slate-300
              rounded-md bg-slate-100 leading-none"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expand toggle */}
      <div className="border-t border-slate-200 mt-auto">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-3
            text-xs text-slate-600 hover:text-slate-900 transition-colors duration-150"
          aria-expanded={open}
        >
          <span className="tracking-wide">{open ? 'Hide details' : 'Show highlights'}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <ChevronDown />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="highlights"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="px-5 pb-4 flex flex-col gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1 h-1 rounded-full bg-sky-500 shrink-0 mt-1.75" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tag === filter);

  const counts = {
    All: projects.length,
    Professional: projects.filter((p) => p.tag === 'Professional').length,
    Personal: projects.filter((p) => p.tag === 'Personal').length,
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100"
    >
      {/* Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_55%_40%_at_80%_20%,rgba(56,189,248,0.12),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_40%_30%_at_15%_80%,rgba(99,102,241,0.10),transparent)]"
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-px w-10 bg-linear-to-r from-transparent to-slate-400 origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.span
              className="text-[11px] tracking-[0.25em] uppercase text-slate-500 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.span>
          </div>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-[2.6rem] font-bold leading-[1.12] tracking-tight text-slate-900 mb-2">
              Things I&apos;ve{' '}
              <span className="bg-linear-to-r from-sky-600 via-slate-900 to-indigo-600 bg-clip-text text-transparent">
                actually built.
              </span>
            </h2>
            <p className="text-sm text-slate-700 max-w-lg">
              4 professional projects from ARIBT + 3 personal projects.
              All have real GitHub repos- no mock demos.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex items-center gap-2 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            {['All', 'Professional', 'Personal'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-150 ${
                  filter === f
                    ? 'bg-sky-100 text-sky-700 border-sky-300'
                    : 'text-slate-600 border-slate-300 hover:text-slate-900 hover:border-slate-400'
                }`}
              >
                {f}
                <span className="ml-1.5 text-[10px] opacity-60">{counts[f]}</span>
              </button>
            ))}
          </motion.div>
        </ScrollAnimation>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/deekxa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl
              text-sm text-slate-700 border border-slate-300
              hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100
              transition-all duration-200"
          >
            <GithubIcon />
            <span>See all repos on GitHub</span>
            <ExternalIcon />
          </a>
        </motion.div>

      </div>
    </section>
  );
}