import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const baseRates = [
  { label: 'Taux horaire', value: '90 € HT / heure' },
  { label: 'Taux journalier', value: '700 € HT / jour' },
  { label: 'Demi-journée', value: '350 € HT' },
  { label: 'Réunion / comité additionnel', value: '120 € HT / heure' },
];

const pricingRows = [
  {
    service: "Qualification d'accompagnement",
    breakdown: '4h à 8h de cadrage',
    livrable: 'Inclus',
    price: '1 200 € HT',
    badge: 'Entrée',
    formats: [
      { label: 'Courte', price: '750 € HT' },
      { label: 'Standard', price: '1 200 € HT' },
      { label: 'Complexe', price: '1 600 € HT' },
    ],
  },
  {
    service: 'Conseil au projet',
    breakdown: '2 à 3 jours × 700 €',
    livrable: 'Aucun (optionnel)',
    price: 'À partir de 1 400 € HT',
    badge: 'Léger',
    formats: [
      { label: '2 jours', price: '1 400 € HT' },
      { label: '3 jours', price: '2 100 € HT' },
      { label: 'Jour supplémentaire', price: '700 € HT' },
    ],
  },
  {
    service: 'Avis sécurité projet',
    breakdown: '2–3 jours × 700 € + 700 € livrable',
    livrable: '700 € HT',
    price: 'À partir de 3 000 € HT',
    badge: 'Décision',
    formats: [
      { label: '2j + livrable (min)', price: '2 100 € HT' },
      { label: '3j + livrable (cible)', price: '3 000 € HT' },
      { label: 'Version complexe', price: '3 500 – 4 500 € HT' },
    ],
  },
  {
    service: 'Socle de base sécurité',
    breakdown: '5 jours × 700 € + 1 200 € livrable',
    livrable: '1 200 € HT',
    price: '4 700 € HT',
    badge: 'Structuré',
    formats: [
      { label: '5j + dossier structuré', price: '4 700 € HT' },
      { label: 'Fourchette acceptable', price: '4 000 – 5 500 € HT' },
    ],
  },
  {
    service: 'Analyse de risque renforcée',
    breakdown: '10–15 jours × 700 € + livrables',
    livrable: 'Inclus dans le périmètre',
    price: 'À partir de 11 000 € HT',
    badge: 'Renforcé',
    formats: [
      { label: 'Standard — 10 jours', price: '9 000 € HT' },
      { label: 'Renforcée — 12 jours', price: '11 000 € HT' },
      { label: 'Complète — 15 jours', price: '13 500 – 15 000 € HT' },
    ],
  },
  {
    service: 'Audit technique applicatif',
    breakdown: '3 à 5 jours × 700 €',
    livrable: 'Inclus',
    price: 'À partir de 3 500 € HT',
    badge: 'Technique',
    formats: [
      { label: 'Flash exposition', price: '2 500 € HT' },
      { label: 'Standard', price: '3 500 – 4 500 € HT' },
      { label: '+ restitution détaillée', price: '5 000 – 6 000 € HT' },
    ],
  },
  {
    service: 'Accompagnement mensuel',
    breakdown: '1 à 6 jours × 700 € / mois',
    livrable: 'CR mensuel inclus',
    price: 'À partir de 700 € HT / mois',
    badge: 'Suivi',
    formats: [
      { label: 'Léger — 1j / mois', price: '700 € HT / mois' },
      { label: 'Standard — 2j / mois', price: '1 400 € HT / mois' },
      { label: 'Projet — 4j / mois', price: '2 800 € HT / mois' },
      { label: 'Renforcé — 6j / mois', price: '4 200 € HT / mois' },
    ],
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
            Temps d'intervention + forfait livrable.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            La facturation repose sur une logique mixte : <span className="text-foreground/80 font-medium">temps d'intervention</span> (ateliers, analyses, échanges, restitution) + <span className="text-foreground/80 font-medium">forfait de production du livrable</span> (rédaction, structuration, matrice, plan d'action). Le devis détaillé est fourni après le premier échange.
          </p>
        </motion.div>

        {/* Base rates */}
        <motion.div
          className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {baseRates.map((rate, i) => (
            <div key={i} className="border border-border bg-card p-4">
              <div className="mb-1 font-mono text-[0.6rem] uppercase tracking-wide text-muted-foreground">
                {rate.label}
              </div>
              <div className="text-sm font-medium text-primary">{rate.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Services pricing table */}
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
                <th className="px-5 py-4 text-left font-mono text-xs tracking-wide uppercase text-muted-foreground">
                  Service
                </th>
                <th className="hidden px-5 py-4 text-left font-mono text-xs tracking-wide uppercase text-muted-foreground lg:table-cell">
                  Composition
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs tracking-wide uppercase text-muted-foreground sm:px-5">
                  Prix de référence
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pricingRows.map((row, index) => (
                <tr key={index} className="group transition-colors hover:bg-background/40">
                  <td className="px-5 py-4 align-top">
                    <div className="font-medium text-foreground leading-snug">{row.service}</div>
                    <div className="mt-1 lg:hidden font-mono text-[0.6rem] tracking-wide text-muted-foreground/60">
                      {row.breakdown}
                    </div>
                    {/* Formats sub-rows, visible on hover or always */}
                    <div className="mt-2 space-y-0.5">
                      {row.formats.map((f, fi) => (
                        <div key={fi} className="flex items-center justify-between gap-4 text-xs text-muted-foreground/60 sm:hidden">
                          <span>{f.label}</span>
                          <span className="font-mono whitespace-nowrap">{f.price}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="hidden px-5 py-4 align-top lg:table-cell">
                    <div className="font-mono text-[0.65rem] tracking-wide text-muted-foreground/70 leading-relaxed">
                      {row.breakdown}
                    </div>
                    <div className="mt-2 space-y-0.5">
                      {row.formats.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-3 text-xs text-muted-foreground/50">
                          <span className="shrink-0">—</span>
                          <span>{f.label}</span>
                          <span className="ml-auto font-mono whitespace-nowrap text-muted-foreground/70">{f.price}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right align-top sm:px-5">
                    <span className="font-medium text-primary whitespace-nowrap">{row.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-6 border border-border/40 bg-background/40 px-5 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs text-muted-foreground">
            Les prix sont indicatifs et hors taxes. Ils peuvent varier selon la complexité, le nombre d'applications, les interlocuteurs, le niveau de documentation et les exigences réglementaires.
            Les réunions, comités ou ateliers supplémentaires non prévus au devis initial sont facturés au taux en vigueur. Les frais de déplacement sont facturés en supplément pour les interventions sur site.
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
            Devis détaillé fourni après cadrage initial.
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
