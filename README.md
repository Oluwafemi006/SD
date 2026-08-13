# SD International Group

Portfolio institutionnel construit avec Next.js, TypeScript et Tailwind CSS.

Prérequis : Node.js 20.9 ou plus récent.

## Démarrage

```bash
npm install
npm run dev
```

Le serveur de développement utilise Webpack et un cache isolé dans `.next-webpack` pour éviter les incohérences de manifeste observées avec le cache Turbopack. Le build de production conserve le bundler par défaut de Next.js.

Copier `.env.example` vers `.env.local`, renseigner le domaine public et connecter `CONTACT_WEBHOOK_URL` à l'endpoint sécurisé qui transmettra les demandes à l'entreprise. Les coordonnées temporaires se trouvent dans `data/site.ts`.
