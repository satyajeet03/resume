import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({
  id,
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: '-120px 0px -80px 0px' }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={`scroll-mt-24 md:scroll-mt-28 ${className}`}
    >
      {children}
    </motion.section>
  )
}
