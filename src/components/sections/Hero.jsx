'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion';
import Button from '@/components/ui/Button';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 60, damping: 14, delay: 0.15 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 16, delay: 0.3 },
  },
};

const statsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 14 },
  },
};

const pillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
  },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 180, damping: 14 },
  },
};

const nameVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.4 },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
};

const skills = [
  { label: 'React',         color: 'cyan'   },
  { label: 'Next.js',       color: 'slate'  },
  { label: 'TypeScript',    color: 'blue'   },
  { label: 'JavaScript',    color: 'yellow' },
  { label: 'Tailwind CSS',  color: 'teal'   },
  { label: 'Framer Motion', color: 'purple' },
  { label: 'Jest / RTL',    color: 'rose'   },
  { label: 'Playwright',    color: 'green'  },
  { label: 'Figma',         color: 'pink'   },
];

const skillColors = {
  cyan:   'border-cyan-400/30   bg-cyan-400/5   text-cyan-300/80   hover:bg-cyan-400/15   hover:border-cyan-400/60   hover:text-cyan-200',
  slate:  'border-slate-400/30  bg-slate-400/5  text-slate-300/80  hover:bg-slate-400/15  hover:border-slate-300/50  hover:text-slate-200',
  blue:   'border-blue-400/30   bg-blue-400/5   text-blue-300/80   hover:bg-blue-400/15   hover:border-blue-400/60   hover:text-blue-200',
  teal:   'border-teal-400/30   bg-teal-400/5   text-teal-300/80   hover:bg-teal-400/15   hover:border-teal-400/60   hover:text-teal-200',
  purple: 'border-purple-400/30 bg-purple-400/5 text-purple-300/80 hover:bg-purple-400/15 hover:border-purple-400/60 hover:text-purple-200',
  rose:   'border-rose-400/30   bg-rose-400/5   text-rose-300/80   hover:bg-rose-400/15   hover:border-rose-400/60   hover:text-rose-200',
  green:  'border-green-400/30  bg-green-400/5  text-green-300/80  hover:bg-green-400/15  hover:border-green-400/60  hover:text-green-200',
  pink:   'border-pink-400/30   bg-pink-400/5   text-pink-300/80   hover:bg-pink-400/15   hover:border-pink-400/60   hover:text-pink-200',
    yellow:   'border-pink-400/30   bg-pink-400/5   text-pink-300/80   hover:bg-pink-400/15   hover:border-pink-400/60   hover:text-pink-200',

};

const statsData = [
  { value: '1+ yr',    label: 'Production experience'   },
  { value: '5+',       label: 'E-commerce · CMS · POS'  },
  { value: 'QA',       label: 'Jest · Playwright · RTL' },
];

// ─── Particle Canvas ──────────────────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const particles = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 48; i++) {
      particles.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        vx:    (Math.random() - 0.5) * 0.28,
        vy:    (Math.random() - 0.5) * 0.28,
        r:     Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.3 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148,163,184,${0.07 * (1 - dist / 100)})`;
            ctx.lineWidth   = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40"
    />
  );
}

// ─── Floating Blob ────────────────────────────────────────────────────────────

function FloatingBlob({ className, delay = 0 }) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl -z-10 ${className}`}
      animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

// ─── Divider line ─────────────────────────────────────────────────────────────

function FadeLine() {
  return (
    <motion.div
      className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-slate-600 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 24 });

  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 500], [0, -70]);
  const blobY2 = useTransform(scrollY, [0, 500], [0, 55]);

  useEffect(() => { setIsClient(true); }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const name = 'Dikshya Khanal';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
      id="home"
      onMouseMove={isClient ? handleMouseMove : undefined}
    >
      {/* ── Base background ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-[#090d14] to-slate-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      />

      {/* ── Subtle top radial glow ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(56,189,248,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(99,102,241,0.07),transparent)]" />

      {/* ── Scanline texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.018]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.06) 2px,rgba(255,255,255,0.06) 4px)',
        }}
      />

      {/* ── Particles ── */}
      <ParticleCanvas />

      {/* ── Parallax blobs ── */}
      <motion.div style={{ y: blobY1 }}>
        <FloatingBlob className="-right-28 top-12 h-80 w-80 bg-indigo-500/10" delay={0} />
      </motion.div>
      <motion.div style={{ y: blobY2 }}>
        <FloatingBlob className="-left-28 bottom-12 h-64 w-64 bg-sky-500/10" delay={1.8} />
      </motion.div>
      <FloatingBlob className="left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 bg-violet-500/6" delay={3.5} />

      {/* ── Mouse glow ── */}
      {isClient && (
        <motion.div
          className="pointer-events-none absolute h-80 w-80 rounded-full bg-sky-500/6 blur-3xl -z-10"
          style={{ left: smoothX, top: smoothY, translateX: '-50%', translateY: '-50%' }}
        />
      )}

      <ScrollAnimation>
        <motion.div
          className="text-center max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ perspective: 900 }}
          whileHover={{ rotateX: 0.8, rotateY: -0.8 }}
          transition={{ type: 'spring', stiffness: 45, damping: 22 }}
        >
          {/* ── Availability badge ── */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[11px] sm:text-xs tracking-widest uppercase text-emerald-400/80 mb-8 backdrop-blur-sm cursor-default"
            variants={badgeVariants}
            whileHover={{ scale: 1.04 }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Open to Frontend &amp; QA roles
          </motion.div>

          {/* ── Name ── */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
            <motion.span
              className="inline-block"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: 600 }}
            >
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={charVariant}
                  className="inline-block bg-linear-to-br from-slate-100 via-sky-200 to-indigo-300 bg-clip-text text-transparent"
                  style={{ transformOrigin: 'bottom center' }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.12 } }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* ── Role line ── */}
          <p className="text-base sm:text-lg md:text-xl mb-2 flex flex-wrap gap-x-2 gap-y-1 justify-center items-center font-light min-h-[1.8rem]">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-medium">
              Frontend Developer building scalable React &amp; Next.js applications
            </span>
          </p>

          <FadeLine />

          {/* ── Skill pills ── */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            variants={pillsContainer}
            initial="hidden"
            animate="visible"
          >
            {skills.map((s) => (
              <motion.span
                key={s.label}
                variants={pillItem}
                whileHover={{ y: -2, scale: 1.06 }}
                className={`px-3 py-[5px] text-[11px] tracking-wide font-medium rounded-full border backdrop-blur-sm cursor-default transition-all duration-200 ${skillColors[s.color]}`}
              >
                {s.label}
              </motion.span>
            ))}
          </motion.div>

          {/* ── Description ── */}
          <motion.p
            className="text-sm sm:text-base text-slate-500 mb-10 max-w-xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            1+ year experience developing CMS, POS systems and e-commerce platforms with focus on performance and clean UI.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-14 px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Button href="/#projects">View projects →</Button>
            <Button href="/#contact" variant="secondary">Get in touch</Button>
          </motion.div>

          {/* ── Featured Project ── */}
          <motion.div
            className="mt-12 max-w-md mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase text-slate-600 mb-3">
              Featured Project
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-3 hover:border-sky-500/40 transition">
              <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-slate-800/60">
                <img
                  src="/images/images.jpg"
                  alt="POS System"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex justify-between items-center mt-3 gap-3">
                <p className="text-sm text-slate-300">
                  POS System
                </p>

                <div className="flex gap-2 shrink-0">
                  <a
                    href="https://github.com/aman000712/Pos.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            className="flex flex-wrap items-stretch justify-center gap-3"
            variants={statsContainer}
            initial="hidden"
            animate="visible"
          >
            {statsData.map((stat) => (
              <motion.div
                key={stat.value}
                variants={statItem}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="group px-6 py-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm text-center min-w-[120px] cursor-default hover:border-slate-700 transition-colors duration-300"
              >
                <p className="text-lg font-semibold text-slate-200 group-hover:text-sky-300 transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-slate-600 mt-1 group-hover:text-slate-500 transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Scroll hint ── */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              className="h-10 w-px bg-linear-to-b from-slate-700 to-transparent"
              animate={{ scaleY: [1, 0.3, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-[10px] tracking-[0.3em] uppercase text-slate-700">scroll</span>
          </motion.div>

        </motion.div>
      </ScrollAnimation>
    </section>
  );
}