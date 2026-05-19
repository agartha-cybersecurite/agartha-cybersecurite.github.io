import { motion } from 'motion/react';

const steps = [
  {
    phase: 'Étape 1',
    title: 'Cadrer',
    description: 'Définition du périmètre, des actifs critiques et des objectifs sécurité en lien avec vos enjeux métier.'
  },
  {
    phase: 'Étape 2',
    title: 'Analyser',
    description: 'Analyse technique des applications, API et environnements pour identifier les risques applicatifs et les écarts de contrôle.'
  },
  {
    phase: 'Étape 3',
    title: 'Prioriser',
    description: 'Classement des risques selon leur criticité afin de concentrer les efforts sur les actions à plus fort impact.'
  },
  {
    phase: 'Étape 4',
    title: 'Restituer',
    description: 'Remise d\'une synthèse exploitable avec plan d\'action priorisé et recommandations techniques adaptées à vos équipes.'
  }
];

export default function Method() {
  return (
    <section id="methode" className="py-20 sm:py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Notre méthode</div>
          <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Une approche méthodique et pragmatique
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="border border-border p-6 sm:p-8 lg:p-10 bg-background">
                <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-3">{step.phase}</div>
                <h3 className="mb-4 text-xl sm:text-2xl text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
