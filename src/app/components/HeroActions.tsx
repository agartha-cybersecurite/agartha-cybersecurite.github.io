import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroActions() {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4 lg:mx-0 lg:justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <a
        href="#contact"
        className="group flex items-center justify-center gap-2 bg-primary-strong px-6 py-4 text-foreground transition-colors hover:bg-primary sm:px-8"
      >
        <span>Demander un diagnostic</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>

      <a
        href="#services"
        className="border border-border bg-background/40 px-6 py-4 text-center text-foreground backdrop-blur transition-colors hover:border-primary/50 sm:px-8"
      >
        Découvrir nos services
      </a>
    </motion.div>
  );
}
