import { motion } from 'motion/react';

const credibilityBlocks = [
  'Expérience développement fullstack',
  'Culture DevOps & architecture',
  'Cybersécurité applicative & gouvernance',
  'Connaissance des environnements assurance / mutuelle'
];

export default function About() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">À propos</div>
            <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground sm:mb-8">
              Une expertise au service de votre sécurité
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Agartha est une jeune entreprise de cybersécurité applicative basée à Niort, créée pour accompagner les PME, éditeurs SaaS, ESN, DSI, RSSI et acteurs de l'assurance dans la réduction des risques applicatifs.
              </p>
              <p>
                Notre approche combine rigueur technique, compréhension des enjeux métier et pragmatisme opérationnel. Nous ne nous contentons pas d'identifier les vulnérabilités : nous vous aidons à structurer des actions concrètes et mesurables.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {credibilityBlocks.map((block) => (
              <div key={block} className="border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors">
                <div className="mb-4 text-lg sm:text-xl text-primary" style={{ fontWeight: 400 }}>Expertise</div>
                <div className="text-muted-foreground">{block}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
