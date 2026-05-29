import { motion } from 'motion/react';
import { ArrowRight, Search, FileText, Shield, BarChart3, Zap, ScanSearch, CalendarDays } from 'lucide-react';

const services = [
  {
    icon: Search,
    number: '01',
    title: "Qualification d'accompagnement",
    price: 'À partir de 1 200 € HT',
    description:
      "Cadrer le projet, identifier les interlocuteurs, comprendre les enjeux métier et qualifier la sensibilité DICP/FIRO.",
    deliverables: [
      "Fiche projet",
      "Synthèse DICP/FIRO",
      "Recommandation du niveau d'accompagnement"
    ]
  },
  {
    icon: FileText,
    number: '02',
    title: 'Conseil au projet',
    price: 'À partir de 1 400 € HT',
    description:
      "Accompagnement léger pour projets peu critiques : échanges, recommandations orales, aide à la priorisation et regard sécurité ponctuel.",
    deliverables: [
      "Recommandations orales",
      "Compte rendu court en option"
    ]
  },
  {
    icon: Shield,
    number: '03',
    title: 'Avis sécurité projet',
    price: 'À partir de 3 000 € HT',
    description:
      "Formaliser une décision avant livraison, jalon projet ou mise en production : favorable, favorable avec réserves ou défavorable.",
    deliverables: [
      "Avis sécurité",
      "Réserves principales",
      "Conditions de mise en production",
      "Recommandations prioritaires"
    ]
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Socle de base sécurité',
    price: 'À partir de 4 700 € HT',
    description:
      "Produire un dossier sécurité structuré pour une application sensible : contexte, DICP, risques, matrice, préconisations et plan d'action.",
    deliverables: [
      "Dossier sécurité",
      "Matrice de risques",
      "Plan d'action priorisé"
    ]
  },
  {
    icon: Zap,
    number: '05',
    title: 'Analyse de risque renforcée',
    price: 'À partir de 11 000 € HT',
    description:
      "Analyse approfondie pour application critique ou contexte réglementaire : risques, conformité applicable, PCA/PRA, Plan d'Assurance Sécurité, audit technique et plan d'action détaillé.",
    deliverables: [
      "Analyse de risque complète",
      "Analyse d'écarts",
      "Plan d'Assurance Sécurité",
      "Éléments PCA/PRA si inclus",
      "Audit technique si inclus",
      "Plan d'action détaillé"
    ]
  },
  {
    icon: ScanSearch,
    number: '06',
    title: 'Audit technique applicatif',
    price: 'À partir de 3 500 € HT',
    description:
      "Évaluer l'exposition et l'hygiène sécurité d'une application sans se positionner comme un pentest intrusif.",
    deliverables: [
      "Cartographie d'exposition",
      "Analyse TLS, headers, cookies, CORS, CSP",
      "Vulnérabilités connues potentielles",
      "Recommandations techniques"
    ]
  },
  {
    icon: CalendarDays,
    number: '07',
    title: 'Accompagnement mensuel',
    price: 'À partir de 1 400 € HT / mois',
    description:
      "Suivi régulier des risques applicatifs, des corrections, des décisions projet et des jalons sécurité.",
    deliverables: [
      "Point mensuel",
      "Suivi des risques",
      "Plan d'action mis à jour",
      "Compte rendu synthétique"
    ]
  }
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
            Un service principal, plusieurs niveaux de rendu.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Agartha propose un service central :{' '}
            <span className="font-medium text-foreground">
              Diagnostic &amp; accompagnement sécurité applicative.
            </span>{' '}
            Selon la criticité, l'exposition et le contexte projet, ce service se décline en plusieurs niveaux
            d'intervention.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            >
              <div className="flex-1 p-6 sm:p-7">
                <div className="mb-5 flex items-start justify-between">
                  <service.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-3xl font-light text-border">{service.number}</span>
                </div>
                <h3 className="mb-2 text-base sm:text-lg text-foreground leading-snug">{service.title}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{service.price}</p>
                <p className="mb-5 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <div>
                  <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                    Livrables
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
      </div>
    </section>
  );
}
