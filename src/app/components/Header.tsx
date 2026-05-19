import { AgarthaLogo } from '../../components/AgarthaLogo';

export default function Header() {
  return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
          <a href="#" className="flex min-w-0 items-center" aria-label="Retour à l'accueil Agartha">
            <AgarthaLogo className="h-9 w-auto sm:h-11 lg:h-13" />
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Navigation principale">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#methode" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Méthode
            </a>
            <a href="#conformite" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Conformité
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <a
              href="#contact"
              className="shrink-0 bg-primary-strong px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary sm:px-5 lg:px-6 lg:py-2.5"
          >
            <span className="hidden sm:inline">Nous contacter</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </header>
  );
}