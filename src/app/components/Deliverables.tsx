import { motion } from 'motion/react';
import { FileText, BarChart3, Megaphone, AlertOctagon, ShieldCheck, ListChecks, ClipboardList, ScanSearch } from 'lucide-react';

const deliverables = [
  {
    icon: FileText,
    title: 'Fiche projet',
    description: 'Contexte, interlocuteurs, jalons, périmètre et hypothèses.'
  },
  {
    icon: BarChart3,
    title: 'Score DICP/FIRO',
    description: 'Lecture de la criticité métier et des impacts potentiels.'
  },
  {
    icon: Megaphone,
    title: 'Synthèse dirigeant',
    description: 'Vision claire des enjeux, risques majeurs et décisions à prendre.'
  },
  {
    icon: AlertOctagon,
    title: 'Matrice de risques',
    description: 'Priorisation selon criticité, impact, probabilité et contexte métier.'
  },
  {
    icon: ShieldCheck,
    title: 'Avis sécurité',
    description: 'Décision formalisée : favorable, favorable avec réserves ou défavorable.'
  },
  {
    icon: ListChecks,
    title: "Plan d'action",
    description: "Corrections immédiates, chantiers court terme et améliorations structurelles."
  },
  {
    icon: ClipboardList,
    title: "Plan d'Assurance Sécurité",
    description: 'Cadre de sécurisation projet et suivi des engagements, si applicable.'
  },
  {
    icon: ScanSearch,
    title: 'Audit technique',
    description: 'Exposition, technologies, configurations, CVE potentielles et recommandations.'
  }
];

export default function Deliverables() {
  return (
    <section id="livrables" className="py-20 sm:py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Livrables</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Des livrables pensés pour décider et agir.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Chaque mission produit des documents opérationnels exploitables immédiatement par les équipes
            techniques et les décideurs. Les livrables varient selon le niveau d'accompagnement choisi.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              className="border border-border bg-background p-6 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
            >
              <item.icon className="mb-4 h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mb-2 text-base font-medium text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
