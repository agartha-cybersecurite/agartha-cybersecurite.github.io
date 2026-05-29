import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Qualifier',
    description:
      "Comprendre le projet, les interlocuteurs, les données, les jalons et la criticité métier."
  },
  {
    number: '02',
    title: 'Évaluer',
    description:
      "Analyser la sensibilité DICP/FIRO et les impacts potentiels sur l'activité."
  },
  {
    number: '03',
    title: 'Analyser',
    description:
      "Observer l'exposition technique, les configurations, la gouvernance et les signaux de risque."
  },
  {
    number: '04',
    title: 'Prioriser',
    description:
      "Produire une matrice de risques, des recommandations et un plan d'action exploitable."
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
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Notre approche</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Une méthode progressive, adaptée à la criticité de votre application.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Agartha commence par qualifier le contexte métier avant de recommander le bon niveau
            d'accompagnement. L'objectif est d'éviter les analyses génériques et de concentrer l'effort sur les
            vrais risques.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="relative">
          {/* Horizontal connector (large screens) */}
          <div className="absolute left-[2.5rem] right-[2.5rem] top-[2.75rem] hidden h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="border border-border bg-background p-6 sm:p-8 hover:border-primary/50 transition-colors h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10">
                      <span className="font-mono text-xs text-primary">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg sm:text-xl text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
