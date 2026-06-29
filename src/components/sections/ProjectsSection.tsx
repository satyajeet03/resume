import { motion } from 'framer-motion'
import { ArrowUpRight, Layers3 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured projects"
        title="High-impact work with thoughtful product execution."
        description="Each engagement focuses on clean architecture, delightful UX, and performance under production demand."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.32)]"
          >
            {/* <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-300">
                  Featured
                </span>
                <Layers3 size={18} className="text-slate-400" />
              </div>
              <div className="mt-8 h-32 rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_44%)]" />
            </div> */}

            <div className="mt-6 flex-1">
              <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Highlights</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Tech</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Architecture</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.architecture.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm leading-7 text-slate-400">
                <span className="font-semibold text-slate-100">Challenge:</span> {project.challenge}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/50 hover:text-white">
                  <FaGithub size={15} />
                  GitHub
                </a>
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/50 hover:text-white">
                  <ArrowUpRight size={15} />
                  Live demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
