import { AgarthaLogo } from '../../components/AgarthaLogo';

const navLinks = [
  { label: 'Méthode', href: '#methode' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="mb-4 inline-flex" aria-label="Retour à l'accueil Agartha">
              <AgarthaLogo className="h-10 w-auto" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sécurité applicative &amp; gouvernance cyber.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/70">
              Niort — interventions à distance ou sur site
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="transition-colors hover:text-primary">Avis sécurité projet</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Socle de base sécurité</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Analyse de risque renforcée</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Audit technique applicatif</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Accompagnement mensuel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:agartha.cybersecurite@gmail.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  agartha.cybersecurite@gmail.com
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-primary">
                  Demander un échange
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-4">
          <p className="text-xs text-muted-foreground/60 max-w-3xl leading-relaxed">
            Les prestations Agartha ne constituent pas une certification réglementaire ni une prestation qualifiée
            ANSSI, sauf mention explicite au devis. Les livrables sont des supports d'aide à la décision et de
            priorisation.
          </p>
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <div>© 2026 Agartha. Tous droits réservés.</div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <a href="#" className="text-xs transition-colors hover:text-primary">Mentions légales</a>
              <a href="#" className="text-xs transition-colors hover:text-primary">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
