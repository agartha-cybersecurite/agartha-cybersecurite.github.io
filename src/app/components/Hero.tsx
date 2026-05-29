import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const badges = ["DICP / FIRO", "Analyse de risques", "Avis sécurité", "Plan d'action"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-32">
      {/* Violet glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[min(90vw,900px)] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px] sm:blur-[140px]" />
        <div className="absolute right-1/4 top-1/3 h-[min(50vw,500px)] w-[min(50vw,500px)] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Slow-breathing secondary halo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute bottom-0 left-1/3 h-[min(60vw,600px)] w-[min(60vw,600px)] -translate-x-1/2 rounded-full bg-primary/4 blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-block border border-border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground sm:mb-8 sm:px-4 sm:text-xs">
            Cybersécurité applicative · Niort
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="mx-auto mb-6 max-w-4xl text-balance font-display text-[clamp(2.2rem,7.5vw,3.8rem)] font-medium leading-[1.05] tracking-tight text-foreground sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Sécurité applicative &{' '}
          <span className="text-primary">gouvernance cyber</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mb-4 max-w-3xl text-pretty text-base font-medium leading-relaxed text-foreground/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
        >
          Identifiez, qualifiez et réduisez vos risques applicatifs avant qu'ils ne deviennent des incidents.
        </motion.p>

        {/* Body text */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mb-12 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38 }}
        >
          Agartha accompagne les ESN, agences web, éditeurs SaaS et PME dans le cadrage sécurité de leurs
          applications, API, portails clients et projets métier. Notre approche relie les enjeux métier, les risques
          techniques et les décisions projet pour produire des livrables clairs, priorisés et exploitables.
        </motion.p>

        {/* Badges */}
        <motion.div
          className="mx-auto mb-10 flex flex-wrap justify-center gap-2 sm:mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
        >
          {badges.map(badge => (
            <span
              key={badge}
              className="border border-border/70 bg-background-secondary/60 px-3 py-1 font-mono text-[0.68rem] tracking-wide text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58 }}
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-primary-strong px-6 py-4 text-foreground transition-colors hover:bg-primary sm:px-8"
          >
            Planifier un échange
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#dicp-firo"
            className="border border-border px-6 py-4 text-center text-foreground transition-colors hover:border-primary/50 sm:px-8"
          >
            Comprendre notre approche
          </a>
        </motion.div>
      </div>
    </section>
  );
}
