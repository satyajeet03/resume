import { motion } from 'framer-motion'
import { ArrowRight, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { socials } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const mailto = `mailto:satyajeetmaurya11@gmail.com?subject=Portfolio inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AReply to: ${encodeURIComponent(formData.email)}`
    window.location.href = mailto
  }

  return (
    <AnimatedSection id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something exceptional together."
        description="Open to senior frontend engineering roles, product partnerships, and high-impact collaboration."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_16px_50px_rgba(2,8,23,0.28)]"
        >
          <div className="rounded-[1.25rem] border border-sky-400/20 bg-sky-500/10 p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-sm text-sky-300">
              <Mail size={16} />
              Available for select opportunities
            </div>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I’m currently interested in senior frontend roles, product systems, and complex UI engineering where quality and craft make a real difference.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/50">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_16px_50px_rgba(2,8,23,0.28)]"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-sky-400/50"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/50"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="min-h-36 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/50"
                placeholder="Tell me about your product, team, or idea."
                required
              />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-400">
            <Send size={16} />
            Send message
            <ArrowRight size={16} />
          </button>
        </motion.form>
      </div>
    </AnimatedSection>
  )
}
