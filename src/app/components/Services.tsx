import { motion } from 'motion/react';
import { ArrowRight, Search, MessageSquare, BarChart3, Zap } from 'lucide-react';

const services = [
  {
    icon: Search,
    number: '01',
    title: "Qualification d'accompagnement",
    dicp: null,
    billing: 'Entrée de toute prestation',
    billingDetail: 'Inclus dans l\'accompagnement',
    description:
      "Premier contact structuré : fiche projet, identification des interlocuteurs, compréhension des enjeux métier et scoring DICP/FIRO. Ce premier rendu détermine le niveau d'accompagnement adapté.",
    deliverables: [
      'Fiche projet (interlocuteurs, calendrier, criticité)',
      'Score DICP/FIRO',
      'Décision d\'accompagnement avec avis et commentaires',
    ],
    note: null,
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Conseil au projet',
    dipBadgeColor: 'text-green-400 border-green-400/40 bg-green-400/10',
    billing: '2 à 3 jours travaillés',
    billingDetail: 'Facturation à la journée',
    description:
      "Pour les projets peu critiques : suivi du projet, échanges verbaux, recommandations orales et regard sécurité ponctuel. Pas de rendu formel.",
    deliverables: [
      'Recommandations orales',
      'Échanges et conseils ponctuels',
    ],
    note: 'Avis sécurité : même prestation avec rendu formel (favorable / favorable avec réserves / défavorable). Facturation journée + rendu.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Socle de base',
    dipBadgeColor: 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10',
    billing: '~1 semaine',
    billingDetail: 'Facturation à la journée',
    description:
      "Dossier sécurité structuré pour une application sensible. Analyse des risques métier et techniques, matrice de risques, préconisations priorisées et plan d'actions.",
    deliverables: [
      'Introduction et contexte projet',
      'Analyse DICP/FIRO',
      'Risques identifiés avec matrice de criticité',
      'Préconisations',
      "Plan d'actions priorisé",
    ],
    note: null,
  },
  {
    icon: Zap,
    number: '04',
    title: 'Analyse de risque',
    dipBadgeColor: 'text-red-400 border-red-400/40 bg-red-400/10',
    billing: '~2 semaines',
    billingDetail: 'Facturation à la journée',
    description:
      "Analyse approfondie pour application critique ou contexte réglementaire. Conformités applicables, PCA/PRA, Plan d'Assurance Sécurité et audit technique de l'application.",
    deliverables: [
      'Analyse de risque complète',
      'Analyse d\'écarts (DORA, NIS2, RGPD, OSE…)',
      'Plan d\'Assurance Sécurité (PAS)',
      'Éléments PCA/PRA',
      'Audit technique applicatif',
      "Plan d'actions détaillé",
    ],
    note: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Services</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Un service, plusieurs niveaux de rendu.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Agartha propose un service central :{' '}
            <span className="font-medium text-foreground">
              diagnostic &amp; accompagnement sécurité applicative.
            </span>{' '}
            La qualification DICP/FIRO détermine le niveau d'intervention adapté à la criticité réelle du projet.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
            >
              <div className="flex-1 p-6 sm:p-7">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-3xl font-light text-border">{service.number}</span>
                </div>

                <h3 className="mb-2 text-base sm:text-lg text-foreground leading-snug">{service.title}</h3>

                {service.dicp && (
                  <span className={`mb-3 inline-block border px-2.5 py-0.5 font-mono text-[0.6rem] tracking-wide ${service.dipBadgeColor}`}>
                    {service.dicp}
                  </span>
                )}

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-primary">{service.billing}</span>
                  <span className="text-xs text-muted-foreground">{service.billingDetail}</span>
                </div>

                <p className="mb-5 text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <div>
                  <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                    {service.number === '02' ? 'Échanges' : 'Livrables'}
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.note && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs leading-relaxed text-muted-foreground/70">
                      <span className="text-foreground/60 font-medium">Variante — </span>
                      {service.note}
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-border p-4">
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary group-hover:text-primary/80"
                >
                  Qualifier mon projet
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-xs text-muted-foreground border-t border-border pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Des jours supplémentaires peuvent être facturés en cas de besoin : présence en comités de calendrier (C2I, CESI, CVASI, MEP), ateliers additionnels, retest ou livrables spécifiques.
        </motion.p>
      </div>
    </section>
  );
}
