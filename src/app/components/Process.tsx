import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Échange découverte',
    description: 'Comprendre votre contexte, vos applications, vos enjeux et vos contraintes.'
  },
  {
    number: '02',
    title: 'Qualification',
    description:
      'Formaliser la fiche projet, les interlocuteurs, les données, les jalons et la criticité DICP/FIRO.'
  },
  {
    number: '03',
    title: 'Recommandation',
    description:
      "Déterminer le niveau d'accompagnement adapté : conseil, avis, socle de base, analyse renforcée ou suivi mensuel."
  },
  {
    number: '04',
    title: 'Analyse',
    description:
      "Étudier les risques métier, l'exposition technique, les mesures existantes et les points d'attention."
  },
  {
    number: '05',
    title: 'Formalisation',
    description:
      "Produire des livrables clairs : synthèse, matrice de risques, recommandations, plan d'action."
  },
  {
    number: '06',
    title: 'Restitution',
    description:
      "Partager les constats, expliquer les risques, prioriser les actions et aider à l'arbitrage."
  },
  {
    number: '07',
    title: 'Suivi',
    description:
      'Accompagner la remédiation, organiser un retest ou mettre en place un suivi mensuel.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Process client</div>
          <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Du premier échange au plan d'action.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line (visible sm+) */}
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-primary/50 via-primary/15 to-transparent sm:block sm:left-6" />

          <div className="space-y-4 sm:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-0 sm:gap-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                {/* Step number badge */}
                <div className="relative hidden sm:flex shrink-0 flex-col items-center pb-4">
                  <div className="z-10 flex h-12 w-12 items-center justify-center border border-primary/40 bg-background font-mono text-sm text-primary">
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <div className="mb-4 flex-1 border border-border bg-background p-5 sm:mb-4 sm:p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 font-mono text-xs text-muted-foreground sm:hidden">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-2 text-base sm:text-lg text-foreground font-medium">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
