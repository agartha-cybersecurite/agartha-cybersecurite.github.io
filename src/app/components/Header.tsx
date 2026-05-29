import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AgarthaLogo } from '../../components/AgarthaLogo';

const navLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Livrables', href: '#livrables' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
        <a href="#" className="flex min-w-0 items-center" aria-label="Retour à l'accueil Agartha">
          <AgarthaLogo className="h-9 w-auto sm:h-11 lg:h-13" />
        </a>

        <nav className="hidden items-center gap-4 xl:flex xl:gap-6" aria-label="Navigation principale">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden shrink-0 bg-primary-strong px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary sm:block sm:px-5 lg:px-6 lg:py-2.5"
          >
            Demander un échange
          </a>
          <button
            className="flex items-center justify-center p-2 text-muted-foreground hover:text-foreground xl:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background/96 backdrop-blur-md xl:hidden">
          <nav
            className="mx-auto max-w-7xl divide-y divide-border/30 px-4 sm:px-6"
            aria-label="Navigation mobile"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="py-4">
              <a
                href="#contact"
                className="block w-full bg-primary-strong px-4 py-3 text-center text-sm text-foreground hover:bg-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Demander un échange
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
