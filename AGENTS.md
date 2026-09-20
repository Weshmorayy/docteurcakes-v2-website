# AGENTS.md — Règles Spécifiques : Pâtisserie Docteur Cakes v2

> Projet : `docteurcakes-v2-website`  
> Client : Pâtisserie Docteur Cakes (Abidjan Cocody, Côte d'Ivoire)  
> Stack : Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion  

---

## 1. Identité & Contraintes Visuelles

- **Palette** : Noir profond (`#0D0B09`), Blanc pur (`#FFFFFF`), Or (`#D4AF37` / `#C99700`).
- **Gâteaux d'abord** : Le hero présente instantanément les gâteaux en haute définition sans scroll.
- **Zéro Cliché IA** : Pas de 3 cartes identiques, pas de gradients violets, pas de FAQ en accordéon générique, pas de faux chiffres.
- **Données réelles** : Tous les prix en FCFA, numéros réels (+225 07 49 91 13 90), 14 parfums réels, zones réelles (Cocody, Abidjan, Intérieur).
- **Source unique de vérité** : Tout provient de `src/config/site.ts`.

---

## 2. Déploiement & Compatibilité

- Compatible Export Statique (`output: 'export'`) et Standalone Docker / Coolify.
- `lucide-react` pour les icônes.
- Toutes les images avec balise `next/image` et `alt` descriptifs.
