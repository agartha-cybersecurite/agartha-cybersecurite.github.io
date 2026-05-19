import { motion } from 'motion/react';
import { CheckCircle2, Radar, ShieldCheck } from 'lucide-react';
import { AgarthaSymbol } from '../../components/AgarthaLogo';

const orbitItems = [
  { label: 'API', className: 'left-4 top-8 sm:left-8 sm:top-10' },
  { label: 'DORA', className: 'right-5 top-20 sm:right-10 sm:top-24' },
  { label: 'NIS2', className: 'bottom-10 left-8 sm:bottom-14 sm:left-12' },
  { label: 'CVSS', className: 'bottom-16 right-6 sm:bottom-20 sm:right-12' }
];

export default function HeroOrbitVisual() {
  return (
    <motion.div
      className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block"
      initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full border border-primary/20 bg-primary/5 shadow-[0_0_80px_rgba(139,92,246,0.14)]" />
      <motion.div
        className="absolute inset-16 rounded-full border border-accent-cyan/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-28 rounded-full border border-dashed border-primary/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/85 shadow-2xl shadow-primary/20 backdrop-blur"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <AgarthaSymbol className="h-20 w-20" />
      </motion.div>

      {orbitItems.map((item, index) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.className} rounded-full border border-border bg-background/75 px-4 py-2 font-mono text-xs text-foreground shadow-lg shadow-primary/10 backdrop-blur`}
          animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
          transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {item.label}
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-4 left-1/2 w-72 -translate-x-1/2 border border-border bg-background/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div className="mb-3 flex items-center justify-between text-sm text-foreground">
          <span className="flex items-center gap-2">
            <Radar className="h-4 w-4 text-accent-cyan" />
            Scan applicatif
          </span>
          <span className="font-mono text-accent-cyan">live</span>
        </div>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Cartographie des actifs critiques
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Priorisation des remédiations
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
