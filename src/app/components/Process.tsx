import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const tracks = [
  {
    id: 'conseil',
    label: 'Conseil au projet',
    badge: 'Léger',
    badgeColor: 'text-green-400 border-green-400/40 bg-green-400/10',
    description: 'Échanges verbaux, regard sécurité ponctuel, recommandations orales. Pas de rendu formel, sauf avis sécurité sur demande.',
  },
  {
    id: 'socle',
    label: 'Socle de base',
    badge: 'Standard',
    badgeColor: 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10',
    description: 'Dossier sécurité structuré : contexte, DICP, risques, matrice, préconisations, plan d\'actions.',
  },
  {
    id: 'analyse',
    label: 'Analyse de risque',
    badge: 'Renforcé',
    badgeColor: 'text-red-400 border-red-400/40 bg-red-400/10',
    description: 'Analyse complète : conformités applicables (DORA, NIS2, RGPD), PCA/PRA, Plan d\'Assurance Sécurité, audit technique.',
  },
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
            Du premier contact à la fin d'accompagnement.
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          {/* Row 1 : Échange → Qualification */}
          <motion.div
            className="flex flex-col items-center gap-0 w-full sm:flex-row sm:items-stretch sm:justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProcessBox
              number="01"
              title="Échange découverte"
              description="Premier contact : contexte du projet, interlocuteurs, enjeux, contraintes et jalons."
            />
            <ArrowConnector />
            <ProcessBox
              number="02"
              title="Qualification d'accompagnement"
              description="Construction de la fiche projet et scoring DICP/FIRO avec le métier. Le score détermine le niveau d'accompagnement."
              highlight
            />
          </motion.div>

          <motion.div
            className="flex justify-center py-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ArrowDown className="h-5 w-5 text-primary/50" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            className="mb-4 font-mono text-[0.65rem] tracking-widest uppercase text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            Décision d'accompagnement
          </motion.div>

          {/* 3 tracks */}
          <div className="grid w-full gap-4 sm:grid-cols-3 mb-4">
            {tracks.map((track, i) => (
              <motion.div
                key={track.id}
                className="flex flex-col border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <span className="font-mono text-xs text-muted-foreground">{`0${i + 3}`}</span>
                  <span className={`border px-2 py-0.5 font-mono text-[0.6rem] tracking-wide ${track.badgeColor}`}>
                    {track.badge}
                  </span>
                </div>
                <div className="mb-1 text-sm font-medium text-foreground">{track.label}</div>
                <div className="mb-3 font-mono text-[0.6rem] tracking-wide text-primary">{track.dicp}</div>
                <p className="text-xs leading-relaxed text-muted-foreground">{track.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Avis sécurité note */}
          <motion.div
            className="mb-4 w-full border border-border/50 bg-background/40 px-5 py-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">Avis sécurité :</span>{' '}
              variante du conseil au projet avec rendu formel — décision favorable, favorable avec réserves ou défavorable. Facturation journée + rendu.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center py-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <ArrowDown className="h-5 w-5 text-primary/50" strokeWidth={1.5} />
          </motion.div>

          {/* Row 2 : Recette → Accompagnement terminé */}
          <motion.div
            className="flex flex-col items-center gap-0 w-full sm:flex-row sm:items-stretch sm:justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <ProcessBox
              number="06"
              title="Recette"
              description="Restitution des livrables, explication des risques, priorisation des actions et accompagnement à l'arbitrage."
            />
            <ArrowConnector />
            <ProcessBox
              number="07"
              title="Accompagnement terminé"
              description="Clôture formelle. Suivi de remédiation, retest ou accompagnement mensuel optionnel selon le contexte."
              end
            />
          </motion.div>
        </div>

        <motion.p
          className="mt-8 text-xs text-muted-foreground border-t border-border pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Des jours supplémentaires peuvent être facturés si nécessaire : présence en comité de calendrier (C2I, CESI, CVASI, MEP), ateliers additionnels ou retest.
        </motion.p>
      </div>
    </section>
  );
}

function ProcessBox({
  number,
  title,
  description,
  highlight,
  end,
}: {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
  end?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col border p-5 sm:w-72 sm:shrink-0 transition-colors ${
        end
          ? 'border-primary/30 bg-primary/5'
          : highlight
          ? 'border-primary/40 bg-card'
          : 'border-border bg-card hover:border-primary/30'
      }`}
    >
      <span className="mb-3 font-mono text-xs text-muted-foreground">{number}</span>
      <div className="mb-2 text-sm font-medium text-foreground leading-snug">{title}</div>
      <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="flex items-center justify-center py-3 sm:py-0 sm:px-2">
      <ArrowDown className="h-4 w-4 text-primary/40 sm:hidden" strokeWidth={1.5} />
      <ArrowRight className="hidden h-4 w-4 text-primary/40 sm:block" strokeWidth={1.5} />
    </div>
  );
}
