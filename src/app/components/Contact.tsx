import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { FormEvent } from 'react';

const serviceOptions = [
  "Qualification d'accompagnement",
  'Avis sécurité projet',
  'Socle de base sécurité',
  'Analyse de risque renforcée',
  'Audit technique applicatif',
  'Accompagnement mensuel',
  'Autre'
];

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const name = data.get('name') as string;
  const company = data.get('company') as string;
  const email = data.get('email') as string;
  const service = data.get('service') as string;
  const message = data.get('message') as string;

  const subject = encodeURIComponent(`[Agartha] Demande — ${service || 'Autre'}`);
  const body = encodeURIComponent(
    `Nom : ${name}\nEntreprise : ${company}\nEmail : ${email}\nBesoin : ${service}\n\n${message}`
  );
  window.location.href = `mailto:agartha.cybersecurite@gmail.com?subject=${subject}&body=${body}`;
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Contact</div>
            <h2 className="mb-6 text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground sm:mb-8">
              Parlons de votre besoin sécurité.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg mb-10">
              Vous avez une application, une API, un portail client, un extranet ou un projet à livrer ? Nous
              pouvons vous aider à qualifier les risques et définir le bon niveau d'accompagnement.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="mb-1 text-sm font-medium text-foreground">Email</div>
                  <a
                    href="mailto:agartha.cybersecurite@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    agartha.cybersecurite@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="mb-1 text-sm font-medium text-foreground">Localisation</div>
                  <div className="text-sm text-muted-foreground">
                    Niort — interventions à distance ou sur site
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-foreground">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm text-foreground">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-foreground">
                  Email professionnel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="jean.dupont@entreprise.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm text-foreground">
                  Type de besoin
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled selected>
                    Choisissez un type de besoin…
                  </option>
                  {serviceOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Décrivez votre projet, votre contexte ou votre besoin…"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-primary-strong px-8 py-4 text-sm text-foreground transition-colors hover:bg-primary"
              >
                Envoyer un message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
