# Propositions de Thèmes Colorimétriques - Centre Équestre

Ce document propose 3 palettes de couleurs distinctes, conçues pour refléter différentes ambiances du monde équestre tout en respectant les normes d'accessibilité (WCAG) et de contraste.

---

## 🏗️ Principes UX Appliqués
- **Contraste Élevé** : Ratio minimal de 4.5:1 pour le texte corps et 3:1 pour les titres.
- **Hiérarchie Visuelle** : Utilisation d'une couleur d'accentuation (Primary) pour les appels à l'action (CTA).
- **Consistance** : Déclinaison en teintes claires (bg), moyennes (bordures) et foncées (texte).

---

## 🌿 Thème 1 : Terre & Tradition (Actuel)
*Une ambiance naturelle, authentique et chaleureuse, rappelant le cuir des selles et la forêt.*

| Élément | Couleur Hex | Usage UX |
| :--- | :--- | :--- |
| **Primaire** | `#F5AE19` (Or Cuir) | Boutons CTA, Icônes actives |
| **Secondaire** | `#1A3B2E` (Vert Forêt) | Navbar, Footer, Titres |
| **Accent** | `#8B5A2B` (Selle) | Éléments de décoration, Bordures |
| **Fond** | `#F5F5DC` (Beige Paille) | Arrière-plan principal (Doux pour les yeux) |
| **Texte** | `#2C2C2C` (Anthracite) | Lisibilité maximale sur fond beige |

---

## 🏛️ Thème 2 : Élégance Royale (Classique)
*Inspiré des concours de saut d'obstacles haut de gamme et du prestige équestre.*

| Élément | Couleur Hex | Usage UX |
| :--- | :--- | :--- |
| **Primaire** | `#BF9B30` (Or Prestige) | Boutons, Badges de niveau |
| **Secondaire** | `#1B263B` (Bleu Marine) | En-têtes, Sections foncées |
| **Accent** | `#E0E1DD` (Argent / Gris) | Bordures fines, Fonds secondaires |
| **Fond** | `#FFFFFF` (Blanc Pur) | Clarté et modernité |
| **Texte** | `#0D1B2A` (Bleu Nuit) | Contraste fort sur fond blanc |

---

## 🏔️ Thème 3 : Scandinave & Nature (Moderne)
*Une approche minimaliste, zen et épurée. Très tendance pour les sites vitrines modernes.*

| Élément | Couleur Hex | Usage UX |
| :--- | :--- | :--- |
| **Primaire** | `#7C9673` (Sauge Douce) | Accents naturels, CTA secondaires |
| **Secondaire** | `#4A4E69` (Ardoise) | Textes importants, Design structuré |
| **Accent** | `#C9ADA7` (Vieux Rose / Terre) | Micro-interactions |
| **Fond** | `#F2E9E4` (Sable Clair) | Atmosphère apaisante |
| **Texte** | `#22223B` (Encre Noir) | Profondeur et lisibilité |

---

## 🛠️ Guide d'intégration Tailwind
Pour changer de thème, il suffit de mettre à jour l'objet `colors` dans le fichier `tailwind.config.js` :

```javascript
// Exemple pour le Thème 2 (Royal)
colors: {
  primary: {
    500: '#BF9B30',
  },
  nature: {
    forest: '#1B263B',
    sand: '#E0E1DD',
  },
  neutral: {
    light: '#FFFFFF',
    dark: '#0D1B2A',
  }
}
```
