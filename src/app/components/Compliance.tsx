import { motion } from 'motion/react';
import { FileCheck, Shield } from 'lucide-react';

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
          <div className="text-xs tracking-wide uppercase text-accent-cyan mb-4">Contexte réglementaire</div>
          <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            DORA & NIS2 : renforcer votre maîtrise des risques
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Agartha n'intervient pas comme cabinet juridique, mais comme partenaire technique pour identifier, documenter et réduire les risques de sécurité applicative.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <motion.div
            className="border border-border p-6 sm:p-8 lg:p-10 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-10 h-10 mb-6 text-primary" strokeWidth={1.5} />
            <h3 className="mb-4 text-xl sm:text-2xl text-foreground">DORA</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nous fournissons des éléments utiles dans un contexte DORA pour améliorer la visibilité sur les risques et structurer les actions de réduction des risques applicatifs.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Documentation des risques applicatifs et techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Preuves de contrôle sur les points critiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Plan d'action priorisé et appui technique à la remédiation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="border border-border p-6 sm:p-8 lg:p-10 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FileCheck className="w-10 h-10 mb-6 text-primary" strokeWidth={1.5} />
            <h3 className="mb-4 text-xl sm:text-2xl text-foreground">NIS2</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dans un cadre NIS2, nous vous aidons à renforcer les pratiques de sécurité applicative avec une approche opérationnelle orientée réduction des risques.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Cartographie des applications et flux exposés</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Évaluation des mesures en place et écarts de contrôle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Restitution exploitable pour vos équipes DSI et RSSI</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
