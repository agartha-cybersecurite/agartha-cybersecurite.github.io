import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Radar, ShieldCheck } from 'lucide-react';
import { AgarthaSymbol } from '../../components/AgarthaLogo';
import AnimatedNetwork from './AnimatedNetwork';

const orbitItems = [
  { label: 'API', className: 'left-4 top-8 sm:left-8 sm:top-10' },
  { label: 'DORA', className: 'right-5 top-20 sm:right-10 sm:top-24' },
  { label: 'NIS2', className: 'bottom-10 left-8 sm:bottom-14 sm:left-12' },
  { label: 'CVSS', className: 'bottom-16 right-6 sm:bottom-20 sm:right-12' }
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-32">
      {/* Subtle violet glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[min(80vw,800px)] w-[min(80vw,800px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px] sm:blur-[120px]" />
      </div>

      {/* Abstract grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated mapping lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block border border-border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-muted-foreground sm:mb-8 sm:px-4 sm:text-xs">
            Cybersécurité Applicative
          </div>
        </motion.div>

        <motion.h1
          className="mx-auto mb-6 max-w-5xl text-balance font-display text-[clamp(2.4rem,9vw,4rem)] font-medium leading-[1.05] tracking-tight text-foreground sm:mb-8 lg:leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cartographier, analyser et sécuriser vos risques applicatifs
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Agartha accompagne les organisations dans l'identification, la documentation et la réduction des risques de sécurité sur leurs applications critiques.
        </motion.p>

        <motion.div
          className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-primary-strong px-6 py-4 text-foreground transition-colors hover:bg-primary sm:px-8"
          >
            Demander un diagnostic
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="border border-border px-6 py-4 text-foreground transition-colors hover:border-primary/50 sm:px-8"
          >
            <div className="mb-3 flex items-center justify-between text-sm text-foreground">
              <span className="flex items-center gap-2"><Radar className="h-4 w-4 text-accent-cyan" /> Scan applicatif</span>
              <span className="font-mono text-accent-cyan">live</span>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Cartographie des actifs critiques</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Priorisation des remédiations</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
