import { motion } from 'motion/react';
import { AlertTriangle, EyeOff, HelpCircle, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Criticité mal évaluée',
    description:
      'Le risque technique est difficile à prioriser sans comprendre l\'impact métier réel de l\'application.'
  },
  {
    icon: EyeOff,
    title: 'Exposition peu visible',
    description:
      "Domaines, API, dépendances, configurations et composants peuvent augmenter la surface d'attaque sans que l'équipe en ait conscience."
  },
  {
    icon: HelpCircle,
    title: 'Décisions projet difficiles',
    description:
      'Sans avis sécurité clair, les arbitrages avant livraison ou mise en production deviennent incertains pour toutes les parties prenantes.'
  },
  {
    icon: FileX,
    title: "Plans d'action peu exploitables",
    description:
      "Un constat de risque n'a de valeur que s'il est transformé en actions concrètes, priorisées et compréhensibles par les équipes."
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
            Une application peut fonctionner…{' '}
            <span className="text-muted-foreground">tout en exposant l'entreprise.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une application peut être livrée dans les délais, répondre au besoin métier et pourtant présenter des
            risques mal identifiés : exposition technique, dépendances obsolètes, données sensibles, absence de
            traçabilité, manque de priorisation ou flou sur les impacts métier.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="border border-border bg-card p-6 sm:p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <problem.icon className="mb-5 h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mb-3 text-lg sm:text-xl text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
