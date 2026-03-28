'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

// ─── Experience data (accurate from CV) ───────────────────────────────────────

const experiences = [
  {
    position: 'Frontend Developer Intern',
    company: 'Abhyam Robotics Institution of Business and Technology (ARIBT)',
    location: 'Butwal, Nepal',
    period: 'Jun 2023 – Jun 2024',
    duration: '~1 Year',
    type: 'Internship',
    url: 'https://e-aribt.com/',
    summary:
      'Built and shipped production-grade frontend systems used by 500+ active users. Sole frontend developer on 4 real products — CMS, POS, marketing site, and admin dashboard.',
    achievements: [
      'Developed responsive admin dashboards using React & JavaScript for 500+ active users',
      'Implemented JWT authentication, Context API state management, and custom React hooks',
      'Built course management systems with real-time data sync and form validation (Formik/Yup)',
      'Created reusable component libraries with REST API integration',
      'Delivered 4 production projects: Educational CMS, POS System, Consultancy Website, Admin Dashboard',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'JWT', 'Context API', 'Formik'],
    highlight: '4 production projects · 500+ users',
  },
  {
    position: 'Frontend Developer Intern',
    company: 'Hub IT Group Pvt Ltd',
    location: 'Nepal',
    period: '2022 – 2023',
    duration: 'Training → Internship',
    type: 'Training + Internship',
    url: null,
    summary:
      'Started with structured frontend development training, then transitioned to an internship role. Gained foundational hands-on experience in React, responsive design, and professional development workflows.',
    achievements: [
      'Completed structured training program in frontend development fundamentals',
      'Transitioned from trainee to intern — applied skills on real projects',
      'Practiced responsive layouts, component architecture, and Git workflows',
      'Built foundation in React and modern JavaScript (ES6+)',
    ],
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
    highlight: 'Training → Intern progression',
  },
  {
    position: 'Web Development Training',
    company: 'Butwal Multiple Campus',
    location: 'Butwal, Nepal',
    period: '2021 – 2022',
    duration: 'Certification',
    type: 'Training',
    url: null,
    summary:
      'Formal web development training as part of B.Sc. IT coursework. Covered core frontend fundamentals and introduced real-world development practices.',
    achievements: [
      'Completed web development training certification',
      'Covered HTML, CSS, JavaScript fundamentals',
      'Introduction to modern frontend tooling',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    highlight: 'Certification completed',
  },
];

// ─── Type badge colors ─────────────────────────────────────────────────────────

const typeColors = {
  'Internship':           'text-sky-400 border-sky-400/30 bg-sky-400/10',
  'Training + Internship':'text-indigo-400 border-indigo-400/30 bg-indigo-400/10',
  'Training':             'text-slate-400 border-slate-500/30 bg-slate-500/10',
};

// ─── Variants ─────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 16, delay: i * 0.12 },
  }),
};

const lineGrow = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.65, ease: 'easeOut' } },
};

const timelineScale = {
  hidden:  { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronDown() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="w-3 h-3" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({ job, index, isLast }) {
  const [open, setOpen] = useState(index === 0); // first card open by default

  return (
    <div className="relative flex gap-5 sm:gap-7">

      {/* ── Timeline column ── */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <motion.div
          className={`w-3 h-3 rounded-full border-2 mt-1.5 shrink-0 ${
            index === 0
              ? 'bg-sky-400 border-sky-400'
              : 'bg-transparent border-slate-600'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, delay: index * 0.12 }}
          viewport={{ once: true }}
        />
        {/* Connector line */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2 bg-gradient-to-b from-slate-700 to-transparent"
            variants={timelineScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 mb-8 rounded-xl border border-white/[0.07]
          bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.05]
          transition-colors duration-200 overflow-hidden"
      >
        {/* Card top */}
        <div className="px-5 pt-5 pb-4">

          {/* Badges row */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5
              rounded-full border ${typeColors[job.type] || typeColors['Training']}`}>
              {job.type}
            </span>
            <span className="text-[11px] text-slate-500">{job.duration}</span>
            <span className="text-[11px] text-slate-600">·</span>
            <span className="text-[11px] text-slate-500">{job.location}</span>
          </div>

          {/* Position + company */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white leading-tight mb-0.5">
                {job.position}
              </h3>
              <div className="flex items-center gap-1.5">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-400 hover:text-sky-300 transition-colors
                      duration-150 flex items-center gap-1"
                  >
                    {job.company}
                    <ExternalIcon />
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">{job.company}</span>
                )}
              </div>
            </div>

            {/* Period */}
            <div className="text-right shrink-0">
              <p className="text-[11px] text-slate-500 font-mono leading-tight">{job.period}</p>
            </div>
          </div>

          {/* Highlight pill */}
          <div className="mt-3">
            <p className="text-[11px] font-medium text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              {job.highlight}
            </p>
          </div>

          {/* Summary */}
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {job.summary}
          </p>

          {/* Stack pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] text-slate-400 border border-white/[0.08]
                  rounded-md bg-white/[0.03] leading-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expand toggle */}
        <div className="border-t border-white/[0.06]">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-5 py-3
              text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150"
            aria-expanded={open}
          >
            <span className="tracking-wide">
              {open ? 'Hide achievements' : 'Show achievements'}
            </span>
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
                key="achievements"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="px-5 pb-4 flex flex-col gap-2">
                  {job.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-sky-400 shrink-0 mt-[7px]" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#060d18] py-24 sm:py-32 px-4 overflow-hidden"
    >
      {/* Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_50%_40%_at_20%_30%,rgba(56,189,248,0.07),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_40%_30%_at_85%_70%,rgba(99,102,241,0.05),transparent)]" />

      <div className="relative mx-auto max-w-3xl">

        {/* Header */}
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-px w-10 bg-gradient-to-r from-transparent to-slate-500 origin-left"
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
              Experience
            </motion.span>
          </div>

          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-[2.6rem] font-bold leading-[1.12] tracking-tight text-white mb-2">
              Where I&apos;ve{' '}
              <span className="bg-gradient-to-r from-sky-200 via-white to-indigo-300 bg-clip-text text-transparent">
                worked & trained.
              </span>
            </h2>
            <p className="text-sm text-slate-400 max-w-lg">
              1+ year of professional internship experience building production apps,
              backed by formal training in frontend development.
            </p>
          </motion.div>
        </ScrollAnimation>

        {/* Timeline */}
        <div>
          {experiences.map((job, i) => (
            <ExperienceCard
              key={job.company + i}
              job={job}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}