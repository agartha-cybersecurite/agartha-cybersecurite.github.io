# Agartha — Brand assets

Assets prêts à déposer dans le dossier `public/` du projet.

## Fichiers principaux

- `favicon.svg` : favicon vectoriel principal.
- `favicon.ico` : fallback multi-tailles pour navigateurs.
- `apple-touch-icon.png` : icône iOS 180x180.
- `icon-192.png` et `icon-512.png` : icônes PWA / manifest.
- `logo-agartha-horizontal.svg` : logo horizontal pour header.
- `logo-agartha-title.svg` : version titre compacte avec baseline.
- `logo-agartha-title-full.svg` : version titre avec baseline complète.
- `agartha-symbol.svg` : symbole seul, transparent.
- `agartha-wordmark.svg` : mot-symbole seul.
- `og-agartha.png` : image Open Graph pour partage social.
- `head-snippet.html` : balises à copier dans `index.html`.
- `agartha-brand.css` : variables couleur/polices proposées.

## Intégration rapide

1. Copie le contenu de ce dossier `public/` dans le dossier `public/` du projet.
2. Dans `index.html`, remplace les balises `<title>` et favicon par le contenu de `head-snippet.html`.
3. Pour le header, utilise par exemple :

```html
<img src="/logo-agartha-horizontal.svg" alt="Agartha" />
```

ou, pour un hero :

```html
<img src="/logo-agartha-title.svg" alt="Agartha — Sécurité applicative" />
```

## Palette

- Noir profond : `#050509`
- Panneau sombre : `#0B0B0F`
- Blanc cassé : `#F2F2F7`
- Gris lavande : `#B9B3D6`
- Violet Agartha : `#7C5CFF`
- Bordure sombre : `#2A2238`

## Note

Les SVG utilisent une pile de polices web : `Space Grotesk`, `Sora`, `Outfit`, puis fallback système. Pour un rendu identique partout, charge `Space Grotesk` dans ton projet ou convertis le logo final en tracés depuis Figma.