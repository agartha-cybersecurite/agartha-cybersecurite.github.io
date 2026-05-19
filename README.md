# Agartha — site vitrine

Site vitrine one-page d'Agartha, développé avec React, TypeScript, Vite et Tailwind CSS.

## Installation locale

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
npm run preview
```

## Déploiement GitHub Pages

Le projet contient un workflow GitHub Actions dans `.github/workflows/deploy.yml`.

À chaque push sur `main`, GitHub Actions :

1. installe les dépendances avec `npm ci` ;
2. configure automatiquement le `base path` Vite ;
3. génère le site statique dans `dist/` ;
4. publie `dist/` sur GitHub Pages.

### Activation côté GitHub

Dans le dépôt GitHub :

1. aller dans `Settings` ;
2. aller dans `Pages` ;
3. dans `Build and deployment`, choisir `GitHub Actions` comme source ;
4. pousser le code sur la branche `main`.

Si le dépôt s'appelle `agartha`, l'URL sera généralement :

```text
https://<username>.github.io/agartha/
```

Si le dépôt s'appelle `<username>.github.io`, l'URL sera :

```text
https://<username>.github.io/
```

## Build local avec le chemin GitHub Pages

Pour tester le rendu comme s'il était servi depuis `/agartha/` :

```bash
VITE_BASE_PATH=/agartha/ npm run build
npm run preview
```

Sous PowerShell :

```powershell
$env:VITE_BASE_PATH="/agartha/"; npm run build; npm run preview
```

## Notes

- Ne pas committer `node_modules/` ni `dist/`.
- Les assets du dossier `public/` sont compatibles avec un déploiement GitHub Pages en sous-chemin grâce à `VITE_BASE_PATH` et `%BASE_URL%`.
- Le formulaire de contact est statique pour le moment.
