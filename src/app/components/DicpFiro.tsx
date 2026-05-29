import { motion } from 'motion/react';

const dicpItems = [
  {
    letter: 'D',
    label: 'Disponibilité',
    question: "Que se passe-t-il si l'application n'est plus accessible ?"
  },
  {
    letter: 'I',
    label: 'Intégrité',
    question: 'Que se passe-t-il si les données sont altérées, fausses ou incohérentes ?'
  },
  {
    letter: 'C',
    label: 'Confidentialité',
    question: 'Que se passe-t-il si des données sont exposées ou consultées sans autorisation ?'
  },
  {
    letter: 'P',
    label: 'Preuve',
    question: "Que se passe-t-il si l'entreprise ne peut plus prouver une action, une décision ou un événement ?"
  }
];

const firoItems = [
  { letter: 'F', label: 'Finance', description: 'Pertes financières, coûts de correction, pénalités.' },
  { letter: 'I', label: 'Image', description: 'Réputation, confiance client, atteinte à la marque.' },
  { letter: 'R', label: 'Réglementaire', description: 'Obligations légales, contractuelles ou sectorielles.' },
  { letter: 'O', label: 'Organisationnel', description: "Blocage des équipes, continuité d'activité, processus internes." }
];

const exampleScores = [3, 2, 1, 4];

function scoreClasses(score: number) {
  if (score >= 4) return 'text-red-400 bg-red-400/10 border-red-400/30';
  if (score >= 3) return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
  if (score >= 2) return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
  return 'text-green-400 bg-green-400/10 border-green-400/30';
}

const scoreLabels: Record<number, string> = { 1: 'Faible', 2: 'Modéré', 3: 'Grave', 4: 'Critique' };

export default function DicpFiro() {
  return (
    <section id="dicp-firo" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Qualification de sensibilité</div>
          <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Qualifier la sensibilité métier avec{' '}
            <span className="text-primary">DICP / FIRO</span>.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            La qualification DICP/FIRO permet d'évaluer la sensibilité d'une application avant d'engager une analyse
            technique ou une analyse de risque plus approfondie.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-10">
          {/* DICP */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">DICP</div>
            <p className="mb-5 text-sm text-muted-foreground">Axes de sensibilité du système d'information.</p>
            <div className="space-y-3">
              {dicpItems.map(item => (
                <div
                  key={item.letter}
                  className="flex gap-4 border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-mono text-sm font-medium text-primary">
                    {item.letter}
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-foreground">{item.label}</div>
                    <div className="text-xs leading-relaxed text-muted-foreground">{item.question}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FIRO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2 font-mono text-sm tracking-widest uppercase text-accent-cyan">FIRO</div>
            <p className="mb-5 text-sm text-muted-foreground">Dimensions d'impact sur l'organisation.</p>
            <div className="space-y-3">
              {firoItems.map(item => (
                <div
                  key={item.letter}
                  className="flex gap-4 border border-border bg-card p-4 hover:border-accent-cyan/30 transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent-cyan/30 bg-accent-cyan/10 font-mono text-sm font-medium text-accent-cyan">
                    {item.letter}
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-foreground">{item.label}</div>
                    <div className="text-xs leading-relaxed text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Example grid */}
        <motion.div
          className="border border-border bg-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5">
            <div className="mb-1 font-mono text-xs tracking-wide uppercase text-muted-foreground">
              Exemple — Axe Disponibilité
            </div>
            <p className="text-sm text-muted-foreground">
              Pour chaque axe DICP, les impacts FIRO sont notés de 1 à 4. Le score final de l'axe correspond à
              l'impact FIRO le plus élevé. Ce score oriente le niveau d'accompagnement recommandé.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left font-mono text-xs tracking-wide text-muted-foreground">Axe DICP</th>
                  {firoItems.map(f => (
                    <th key={f.letter} className="pb-3 text-center font-mono text-xs tracking-wide text-muted-foreground">
                      {f.label}
                    </th>
                  ))}
                  <th className="pb-3 text-center font-mono text-xs tracking-wide text-primary">Score final</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Disponibilité</td>
                  {exampleScores.map((score, i) => (
                    <td key={i} className="py-3 text-center">
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center border font-mono text-xs font-medium ${scoreClasses(score)}`}
                      >
                        {score}
                      </span>
                    </td>
                  ))}
                  <td className="py-3 text-center">
                    <span
                      className={`inline-flex h-7 items-center justify-center border px-3 font-mono text-xs font-medium ${scoreClasses(4)}`}
                    >
                      4 — Critique
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            {Object.entries(scoreLabels).map(([score, label]) => (
              <span
                key={score}
                className={`flex items-center gap-1.5 border px-2.5 py-1 text-xs ${scoreClasses(parseInt(score))}`}
              >
                <span className="font-mono font-medium">{score}</span>
                <span>—</span>
                <span>{label}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
