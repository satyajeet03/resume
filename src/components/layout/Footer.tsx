import { ArrowUpRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { socials } from '../../data/content'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-50">Satyajeet Maurya</p>
          <p className="mt-2 text-sm text-slate-400">
            Designing and building premium frontend systems with speed, clarity, and deliberate craft.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((social) => {
            const Icon = social.label === 'GitHub' ? FaGithub : social.label === 'LinkedIn' ? FaLinkedin : Mail
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/50 hover:text-white"
              >
                <Icon size={16} />
                {social.label}
                <ArrowUpRight size={14} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
