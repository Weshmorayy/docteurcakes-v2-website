# Guide Architecture & Code — Docteur Cakes v2

## 1. Organisation des Dossiers

```
src/
├── app/                  ← Next.js App Router
│   ├── layout.tsx        ← Polices Google, JSON-LD Schema.org, Navbar & Footer
│   ├── page.tsx          ← Accueil avec Hero Instantané, Parallaxe, Mosaïque, Parfums
│   ├── catalogue/        ← Catalogue complet avec filtres et fiches détaillées
│   ├── mariage/          ← Showcase Wedding Cakes & Dot traditionnelle
│   ├── sitemap.ts        ← Sitemap dynamique
│   └── robots.ts         ← Robots.txt
├── components/
│   ├── layout/           ← Navbar transparente/opaque, Footer Dark & Gold, WhatsApp direct
│   └── sections/         ← Sections modulaires et réutilisables
├── config/
│   └── site.ts           ← Source unique de données métier
├── lib/
│   ├── utils.ts          ← Classes & formatteurs de devises FCFA
│   ├── seo.ts            ← Helper metadata
│   └── whatsapp.ts       ← Générateur d'URL WhatsApp avec message de commande pré-rempli
└── types/                ← Définitions TypeScript complètes
```

## 2. Commandes de Build

- Dev : `npm run dev`
- Build Statique : `NEXT_OUTPUT=export npm run build`
- Build Standalone : `npm run build`
