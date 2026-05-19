import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';

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
              Parlons de vos enjeux de sécurité
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg mb-12">
              Que vous ayez un projet en cours, une question sur DORA / NIS2 ou besoin d'un premier diagnostic, notre équipe est à votre écoute.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="mb-1 text-foreground">Email</div>
                  <a href="mailto:agartha.cybersecurite@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    agartha.cybersecurite@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="mb-1 text-foreground">Localisation</div>
                  <div className="text-muted-foreground">
                    Basés à Niort - interventions à distance ou sur site
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-foreground">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-foreground">Email professionnel</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="jean.dupont@entreprise.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-sm text-foreground">Entreprise</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre besoin..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-strong text-foreground hover:bg-primary transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
