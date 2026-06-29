import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { AnimatedSection } from '../ui/AnimatedSection'

export function HeroSection() {
  return (
    <AnimatedSection id="home" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-16 shadow-[0_25px_100px_rgba(15,23,42,0.55)] sm:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.15),transparent_35%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-200">
            <Sparkles size={16} />
            Senior Frontend Engineer
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-7xl">
              Building scalable, high-performance interfaces for ambitious products.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              I’m Satyajeet Maurya — a senior frontend engineer crafting enterprise-grade digital experiences with React, TypeScript, Next.js, and modern architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/Satyajeet_Maurya_Senior_Frontend_Engineer.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="https://github.com/satyajeet03"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
            >
              <FaGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satyajeet-maurya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: 'Experience', value: '5+ years' },
              { label: 'Focus', value: 'Enterprise UX' },
              { label: 'Stack', value: 'React + TS' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-slate-50">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_80px_rgba(2,6,23,0.7)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Platform architecture</span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">
                  Live systems
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  ['Micro Frontend', 'Host + remote apps'],
                  ['Shared UI', 'Reusable component library'],
                  ['Performance', 'Code splitting & lazy loading'],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-slate-100">{title}</p>
                    <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
