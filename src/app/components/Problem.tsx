import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, Shield } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Risques invisibles',
    description: 'Vos applications accumulent des vulnérabilités sans que vous en ayez connaissance.'
  },
  {
    icon: TrendingUp,
    title: 'Conformité complexe',
    description: 'DORA, NIS2 : les exigences réglementaires s\'intensifient et nécessitent une réponse structurée.'
  },
  {
    icon: Shield,
    title: 'Priorisation difficile',
    description: 'Impossible de savoir par où commencer face à la multiplication des alertes sécurité.'
  }
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            La sécurité applicative est devenue un enjeu critique
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Les applications web, API et portails sont au cœur de votre activité. Leur sécurité ne peut plus être traitée comme une option.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <problem.icon className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />
              <h3 className="mb-4 text-lg sm:text-xl text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
