import { AgarthaLogo } from '../../components/AgarthaLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="mb-4 inline-flex" aria-label="Retour à l'accueil Agartha">
              <AgarthaLogo className="h-10 w-auto" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cybersécurité applicative pour organisations exigeantes.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="transition-colors hover:text-primary">Diagnostic technique</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Avis sécurité</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Accompagnement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm text-foreground">Conformité</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#conformite" className="transition-colors hover:text-primary">DORA</a></li>
              <li><a href="#conformite" className="transition-colors hover:text-primary">NIS2</a></li>
              <li><a href="#methode" className="transition-colors hover:text-primary">Méthodologie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="mailto:contact@agartha-cyber.fr" className="break-all transition-colors hover:text-primary">contact@agartha-cyber.fr</a></li>
              <li><a href="#contact" className="transition-colors hover:text-primary">Formulaire</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div>© 2026 Agartha. Tous droits réservés.</div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <a href="#" className="transition-colors hover:text-primary">Mentions légales</a>
            <a href="#" className="transition-colors hover:text-primary">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
