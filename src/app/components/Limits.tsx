import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

const doItems = [
  "Analyse de risques applicatifs",
  "Qualification DICP/FIRO",
  "Avis sécurité projet",
  "Diagnostic technique",
  "Analyse d'exposition",
  "Plan d'action priorisé",
  "Accompagnement sécurité projet",
  "Préparation à audit, contrôle ou mise en conformité"
];

const dontItems = [
  "Certification réglementaire",
  "Garantie d'absence de vulnérabilités",
  "Contrôle officiel réalisé par une autorité",
  "Prestation qualifiée ANSSI, sauf mention contraire explicite",
  "Avis juridique définitif",
  "Pentest complet si non prévu au périmètre"
];

export default function Limits() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Périmètre</div>
          <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Un cadre clair dès le départ.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-10">
          {/* Ce que nous faisons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground">Ce que nous faisons</h3>
            </div>
            <div className="border border-border bg-card p-6">
              <ul className="space-y-3">
                {doItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ce que nous ne prétendons pas faire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground">Ce que nous ne prétendons pas faire</h3>
            </div>
            <div className="border border-border bg-card p-6">
              <ul className="space-y-3">
                {dontItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border border-border/50 bg-card/50 p-5 sm:p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Note importante —</span>{' '}
            Les livrables Agartha constituent des supports d'analyse, d'aide à la décision et de priorisation. La
            responsabilité finale des arbitrages, de la conformité et des décisions de mise en production reste portée
            par le client.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
