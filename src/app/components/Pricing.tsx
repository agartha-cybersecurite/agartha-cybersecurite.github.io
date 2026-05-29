import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const pricingRows = [
  { service: "Qualification d'accompagnement", price: "À partir de 1 200 € HT", badge: "Entrée" },
  { service: "Conseil au projet", price: "À partir de 1 400 € HT", badge: "Léger" },
  { service: "Avis sécurité projet", price: "À partir de 3 000 € HT", badge: "Décision" },
  { service: "Audit technique applicatif", price: "À partir de 3 500 € HT", badge: "Technique" },
  { service: "Socle de base sécurité", price: "À partir de 4 700 € HT", badge: "Structuré" },
  { service: "Analyse de risque renforcée", price: "À partir de 11 000 € HT", badge: "Renforcé" },
  { service: "Accompagnement mensuel", price: "À partir de 1 400 € HT / mois", badge: "Suivi" }
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
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Tarifs indicatifs</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Des formats adaptés à la criticité et au niveau d'accompagnement.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Les tarifs sont indicatifs et peuvent varier selon le nombre d'applications, la complexité technique,
            les interlocuteurs, le niveau de documentation disponible, les exigences réglementaires et les
            livrables attendus.
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
                  Service
                </th>
                <th className="hidden px-6 py-4 text-center font-mono text-xs tracking-wide uppercase text-muted-foreground sm:table-cell">
                  Niveau
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs tracking-wide uppercase text-muted-foreground sm:px-6">
                  Tarif indicatif
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pricingRows.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-background/40">
                  <td className="px-6 py-4 text-foreground font-medium leading-snug">
                    {row.service}
                  </td>
                  <td className="hidden px-6 py-4 text-center sm:table-cell">
                    <span className="inline-block border border-border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wide text-muted-foreground">
                      {row.badge}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-primary sm:px-6 whitespace-nowrap">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-muted-foreground">
            Tous les tarifs sont exprimés hors taxes. Un devis détaillé est fourni après cadrage.
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
