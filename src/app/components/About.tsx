import { motion } from 'motion/react';

const badges = [
  'Développement fullstack',
  'DevOps / architecture',
  'Cybersécurité applicative',
  'Gouvernance cyber',
  'Analyse de risques',
  'Bug bounty',
  'CTF',
  'Contexte assurance / mutuelle'
];

export default function About() {
  return (
    <section id="a-propos" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">À propos</div>
            <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground sm:mb-8">
              Deux profils techniques, une approche projet et risque.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Agartha est portée par deux profils issus du développement fullstack, du DevOps, de
                l'architecture et de la cybersécurité applicative. Notre force : comprendre à la fois le code,
                l'infrastructure, les contraintes métier et les risques de sécurité.
              </p>
              <p>
                Nous intervenons avec une approche pragmatique : comprendre le contexte, qualifier les risques,
                produire des livrables exploitables et accompagner la décision.
              </p>
              <p>
                Basés à Niort, nous intervenons à distance ou sur site auprès des ESN, agences web, éditeurs SaaS,
                PME et acteurs du secteur assurance / mutuelle.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs tracking-wide uppercase text-muted-foreground">
              Compétences
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map(badge => (
                <span
                  key={badge}
                  className="border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 border border-border bg-card p-6">
              <div className="mb-3 font-mono text-xs tracking-wide uppercase text-muted-foreground">
                Cibles principales
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  'ESN autour de Niort, Poitiers, La Rochelle',
                  'Agences web livrant des applications clients',
                  'Éditeurs SaaS B2B',
                  'PME avec portail client, extranet, API ou application métier',
                  'Prestataires assurance / mutuelle',
                  'Organisations qui ont besoin d\'un avis sécurité avant livraison ou jalon projet'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
