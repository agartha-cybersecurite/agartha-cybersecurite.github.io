import { motion } from 'motion/react';
import { FileText, BarChart3, CheckCircle2 } from 'lucide-react';

const deliverables = [
  {
    icon: FileText,
    title: 'Rapport d\'audit détaillé',
    items: ['Inventaire des vulnérabilités', 'Analyse d\'impact métier', 'Preuves techniques documentées']
  },
  {
    icon: BarChart3,
    title: 'Cartographie des risques',
    items: ['Scoring CVSS', 'Matrice de criticité', 'Vue par application et par type']
  },
  {
    icon: CheckCircle2,
    title: 'Plan de remediation',
    items: ['Actions priorisées', 'Recommandations techniques', 'Suivi des corrections']
  }
];

export default function Deliverables() {
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
          <div className="text-xs tracking-wide uppercase text-accent-cyan mb-4">Livrables</div>
          <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Des livrables actionnables
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg mt-6">
            Chaque mission donne lieu à des documents opérationnels, exploitables immédiatement par vos équipes techniques et vos décideurs.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              className="border border-border p-6 sm:p-8 bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <deliverable.icon className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />
              <h3 className="mb-6 text-lg sm:text-xl text-foreground">{deliverable.title}</h3>
              <ul className="space-y-3">
                {deliverable.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
