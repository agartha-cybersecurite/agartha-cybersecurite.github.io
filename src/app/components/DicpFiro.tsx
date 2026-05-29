import { motion } from 'motion/react';

const dicpItems = [
  {
    letter: 'D',
    label: 'Disponibilité',
    question: "Que se passe-t-il si l'application n'est plus accessible ?",
    examples: [
      "Si l'application est indisponible 1h, quel est l'impact ?",
      "Si elle est indisponible 24h, perdez-vous de l'argent ?",
      'Cela bloque-t-il une équipe, un service ou un processus ?',
    ],
  },
  {
    letter: 'I',
    label: 'Intégrité',
    question: 'Que se passe-t-il si les données sont altérées, fausses ou incohérentes ?',
    examples: [
      'Des décisions métier reposent-elles sur ces données ?',
      'Une erreur dans les données aurait-elle un impact financier ou légal ?',
      'Peut-on détecter une altération rapidement ?',
    ],
  },
  {
    letter: 'C',
    label: 'Confidentialité',
    question: 'Que se passe-t-il si des données sont exposées ou consultées sans autorisation ?',
    examples: [
      'Y a-t-il des données personnelles, sensibles ou contractuelles ?',
      'Une fuite entraînerait-elle une obligation de notification (RGPD) ?',
      "Quel serait l'impact réputationnel pour l'entreprise ?",
    ],
  },
  {
    letter: 'P',
    label: 'Preuve',
    question: "Que se passe-t-il si l'entreprise ne peut plus prouver une action, une décision ou un événement ?",
    examples: [
      "L'application trace-t-elle les actions utilisateurs ?",
      'Des logs sont-ils conservés et exploitables en cas de litige ?',
      'Y a-t-il des obligations légales ou contractuelles de traçabilité ?',
    ],
  },
];

const firoItems = [
  { letter: 'F', label: 'Finance', description: 'Pertes financières, coûts de correction, pénalités contractuelles.' },
  { letter: 'I', label: 'Image', description: 'Réputation, confiance client, atteinte à la marque.' },
  { letter: 'R', label: 'Réglementaire', description: 'Obligations légales, conformité, exigences contractuelles ou sectorielles.' },
  { letter: 'O', label: 'Organisationnel', description: "Blocage des équipes, continuité d'activité, impact sur les processus internes." },
];

const exampleScores = [3, 2, 1, 4];

const scoreThresholds = [
  { range: '1/1/1/1 ou max un 2', label: 'Conseil au projet', color: 'text-green-400 border-green-400/30 bg-green-400/5' },
  { range: "Plus d'un 2", label: 'Socle de base', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
  { range: 'Au moins un 4', label: 'Analyse de risque', color: 'text-red-400 border-red-400/30 bg-red-400/5' },
];

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
            Lors de la qualification, nous travaillons avec le métier pour mesurer l'impact réel qu'aurait un incident sur l'activité.
            L'objectif est de construire un accompagnement sur mesure, adapté à la criticité réelle de l'application — et non une analyse générique.
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
            <p className="mb-5 text-sm text-muted-foreground">Axes de sensibilité — questions concrètes posées avec le métier.</p>
            <div className="space-y-3">
              {dicpItems.map(item => (
                <div key={item.letter} className="border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                  <div className="flex gap-4 mb-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-mono text-sm font-medium text-primary">
                      {item.letter}
                    </div>
                    <div>
                      <div className="mb-0.5 text-sm font-medium text-foreground">{item.label}</div>
                      <div className="text-xs leading-relaxed text-muted-foreground">{item.question}</div>
                    </div>
                  </div>
                  <ul className="ml-12 space-y-1">
                    {item.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/30" />
                        {ex}
                      </li>
                    ))}
                  </ul>
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
            <p className="mb-5 text-sm text-muted-foreground">Dimensions d'impact — chaque axe DICP est évalué selon ces quatre dimensions.</p>
            <div className="space-y-3 mb-6">
              {firoItems.map(item => (
                <div key={item.letter} className="flex gap-4 border border-border bg-card p-4 hover:border-accent-cyan/30 transition-colors">
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

            {/* Score → Accompagnement */}
            <div className="border border-border bg-card p-5">
              <div className="mb-3 font-mono text-[0.65rem] tracking-wide uppercase text-muted-foreground">
                Score DICP → Niveau d'accompagnement
              </div>
              <div className="space-y-2">
                {scoreThresholds.map((t, i) => (
                  <div key={i} className={`flex items-center justify-between border px-3 py-2 text-xs ${t.color}`}>
                    <span className="font-mono">{t.range}</span>
                    <span className="font-medium">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Example table */}
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
              Chaque axe DICP est noté de 1 à 4 selon les quatre dimensions FIRO. Le score final = valeur FIRO la plus haute.
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
                      <span className={`inline-flex h-7 w-7 items-center justify-center border font-mono text-xs font-medium ${scoreClasses(score)}`}>
                        {score}
                      </span>
                    </td>
                  ))}
                  <td className="py-3 text-center">
                    <span className={`inline-flex h-7 items-center justify-center border px-3 font-mono text-xs font-medium ${scoreClasses(4)}`}>
                      4 — Critique
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            {Object.entries(scoreLabels).map(([score, label]) => (
              <span key={score} className={`flex items-center gap-1.5 border px-2.5 py-1 text-xs ${scoreClasses(parseInt(score))}`}>
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
