import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const pricingRows = [
  {
    service: "Qualification d'accompagnement",
    duration: '~1 jour',
    badge: 'Entrée',
    badgeColor: null,
    note: 'Inclus dans l\'accompagnement',
  },
  {
    service: 'Conseil au projet',
    duration: '2 à 3 jours',
    badge: 'DICP ≤ 1/1/1/1',
    badgeColor: 'text-green-400 border-green-400/30',
    note: null,
  },
  {
    service: 'Avis sécurité',
    duration: '2 à 3 jours + rendu',
    badge: 'DICP ≤ 1/1/1/1',
    badgeColor: 'text-green-400 border-green-400/30',
    note: 'Variante du conseil avec livrable formel',
  },
  {
    service: 'Socle de base',
    duration: '~1 semaine',
    badge: 'DICP > un 2',
    badgeColor: 'text-yellow-400 border-yellow-400/30',
    note: null,
  },
  {
    service: 'Analyse de risque',
    duration: '~2 semaines',
    badge: 'DICP ≥ un 4',
    badgeColor: 'text-red-400 border-red-400/30',
    note: 'PCA/PRA, PAS et audit technique inclus',
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 sm:py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Tarification</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Facturation à la journée, calibrée sur la criticité.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Le volume de jours dépend du niveau d'accompagnement déterminé lors de la qualification DICP/FIRO.
            Les durées indiquées sont des estimations. Le taux journalier et le devis détaillé sont fournis après le premier échange.
          </p>
        </motion.div>

        <motion.div
          className="border border-border bg-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left font-mono text-xs tracking-wide uppercase text-muted-foreground">
                  Niveau d'accompagnement
                </th>
                <th className="hidden px-6 py-4 text-center font-mono text-xs tracking-wide uppercase text-muted-foreground sm:table-cell">
                  Criticité DICP
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs tracking-wide uppercase text-muted-foreground sm:px-6">
                  Charge estimée
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pricingRows.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-background/40">
                  <td className="px-6 py-4 leading-snug">
                    <div className="font-medium text-foreground">{row.service}</div>
                    {row.note && (
                      <div className="mt-0.5 text-xs text-muted-foreground/70">{row.note}</div>
                    )}
                  </td>
                  <td className="hidden px-6 py-4 text-center sm:table-cell">
                    <span className={`inline-block border px-2.5 py-0.5 font-mono text-[0.6rem] tracking-wide ${row.badgeColor ?? 'text-muted-foreground border-border'}`}>
                      {row.badge}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-primary sm:px-6 whitespace-nowrap">
                    {row.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-6 border border-border/50 bg-background/40 px-5 py-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-muted-foreground">
            Des jours supplémentaires peuvent s'ajouter : présence en comités de calendrier (C2I, CESI, CVASI, MEP), ateliers additionnels, livrables spécifiques ou retests.
            Les livrables tiers (PAS, audit technique, PCA/PRA) peuvent être inclus dans l'analyse de risque ou facturés séparément selon le périmètre défini au devis.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-muted-foreground">
            Taux journalier et devis fournis après cadrage initial.
          </p>
          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-2 bg-primary-strong px-5 py-3 text-sm text-foreground transition-colors hover:bg-primary"
          >
            Demander un cadrage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
