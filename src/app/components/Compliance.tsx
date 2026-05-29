import { motion } from 'motion/react';
import { GitBranch, Landmark, Network, Lock, RefreshCw, ClipboardList } from 'lucide-react';

const frameworks = [
  {
    icon: GitBranch,
    title: 'EBIOS Risk Manager',
    description: 'Approche structurée d\'analyse de risques et de scénarios.'
  },
  {
    icon: Landmark,
    title: 'DORA',
    description: 'Gestion des risques TIC, continuité, prestataires et exigences financières.'
  },
  {
    icon: Network,
    title: 'NIS2 / OSE',
    description: 'Préparation aux exigences de cybersécurité et analyse d\'écarts.'
  },
  {
    icon: Lock,
    title: 'RGPD',
    description: 'Prise en compte des données personnelles, risques et mesures associées.'
  },
  {
    icon: RefreshCw,
    title: 'PCA / PRA',
    description: 'Réflexion sur la continuité et la reprise d\'activité selon le niveau de criticité.'
  },
  {
    icon: ClipboardList,
    title: 'PAS',
    description: "Plan d'Assurance Sécurité pour cadrer les exigences et engagements projet."
  }
];

export default function Compliance() {
  return (
    <section id="conformite" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Conformité & référentiels</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Aligner la sécurité applicative avec vos exigences.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Agartha peut accompagner l'analyse des risques et la préparation aux exigences applicables selon le
            contexte. Notre intervention est orientée aide à la décision et analyse d'écarts — non certification
            réglementaire.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {frameworks.map((fw, index) => (
            <motion.div
              key={index}
              className="border border-border bg-card p-6 sm:p-7 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            >
              <fw.icon className="mb-5 h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mb-3 text-base sm:text-lg font-medium text-foreground">{fw.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{fw.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 border border-border/40 bg-card/40 p-5 sm:p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            Agartha n'intervient pas comme cabinet juridique ou organisme certificateur. Nos prestations sont
            orientées{' '}
            <span className="font-medium text-foreground">
              analyse d'écarts, préparation à l'exigence et aide à la décision
            </span>
            . La conformité réglementaire finale reste sous la responsabilité du client.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
