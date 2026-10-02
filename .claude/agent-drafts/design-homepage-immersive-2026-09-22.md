# Spec visuelle — Refonte page d'accueil uptomove.fr

**Agent Design · 22 septembre 2026**
Référence non négociable : `MEMO-SITE.md` §5 (Identité visuelle).
Fichier cible (Dev uniquement) : `index.html`.
Hors périmètre : `calculateur-tms.html`, `calculateur-tms-web.html`, `calculateur-tms copie.html`.

---

## 0. Ce qu'il faut lire en premier (3 points bloquants)

Trois constats conditionnent tout le reste de cette spec. Ils sont détaillés plus bas mais doivent être arbitrés avant implémentation.

**0.1 — La nav sticky ne peut pas fonctionner dans la structure actuelle.**
`<nav class="hero-nav">` est enfant de `<section class="hero">`, qui porte `overflow: hidden` (l.96). Un ancêtre en `overflow: hidden` crée un conteneur de défilement qui neutralise `position: sticky`. La règle sticky n'est d'ailleurs appliquée qu'en `@media (max-width: 900px)` (l.341) — en desktop la nav ne colle pas du tout.
→ **Correction structurelle requise** : sortir `<nav>` de `<section class="hero">` et la placer en frère direct dans `<body>`, avant le hero, en `position: sticky; top: 0; z-index: 400`. Sans ça, la spec nav §2 est inapplicable.

**0.2 — Le texte blanc sur orange `#FF914D` est à 2,23:1.**
Tous les boutons `.btn-orange` du site (texte blanc, Encode 700, 14 px) échouent au seuil AA de 4,5:1, et même au seuil 3:1 du grand texte. Idem `.btn-teal` (blanc sur `#2EC4B6`) à 2,17:1, et la pastille eyebrow du hero à 2,17:1.
→ **Correction : le texte des boutons orange passe en `#1E2952`** (6,30:1). Les deux couleurs sont dans la charte, aucune dérive. C'est un changement visible sur tout le site — décision de Céline.

**0.3 — Le teal `#2EC4B6` est hors charte mais présent 97 fois sur 14 fichiers.**
Ce n'est pas un accident isolé, c'est la 3e couleur de fait du site. Deux options en §7, avec recommandation.

---

## 1. Hero asymétrique immersif

### 1.1 Principe

L'effet d'immersion recherché ne vient pas de la taille de l'image mais de **quatre dispositifs combinés** :

1. **Débord franc à droite** — la colonne image n'a aucune marge droite, elle est coupée par le bord de l'écran. C'est ce qui fait « on entre dans une scène » plutôt que « on regarde une vignette ».
2. **Fondu de raccord à gauche** — la photo ne s'arrête pas sur une arête nette côté texte, elle se dissout dans le crème `#F7F6F2`. Le hero devient un plan continu, pas deux blocs juxtaposés.
3. **Débordement vertical vers le bas** — l'image dépasse de 32 px sous la limite du hero et chevauche le bandeau de preuve blanc.
4. **Ombre portée vers la gauche** — la photo est posée *devant* le plan crème, pas à côté.

L'image n'est jamais rendue au-delà de **760 px de large** (plafond recommandé) ; **900 px est le plafond absolu** au-delà duquel la netteté n'est plus garantie avec une source de 1376 px.

**Justification du 760 px** : sur un écran à DPR 2 (majorité des portables récents), une largeur CSS de 760 px demande 1520 px de pixels physiques, soit un agrandissement de 1,10× de la source (1376 px) — imperceptible. À 900 px CSS, on demande 1800 px, soit 1,31× — le flou devient visible sur les visages. Le plafond doit donc être `min(45vw, 760px)` et non `min(45vw, 900px)`.

### 1.2 Structure DOM attendue

```
<nav class="site-nav">…</nav>            ← sorti du hero (cf. §0.1)
<section class="hero">
  <div class="hero-grid">
    <div class="hero-text">              ← colonne gauche
      <span class="hero-eyebrow">…</span>
      <h1 class="hero-title">…</h1>
      <p class="hero-sub">…</p>
      <div class="hero-ctas">…</div>
    </div>
    <div class="hero-visual">            ← colonne droite
      <picture><img class="hero-img" …></picture>
      <span class="hero-dot" aria-hidden="true"></span>
    </div>
  </div>
</section>
```

Rien d'autre dans le hero. Le `<details>` « Qu'est-ce que la QVCT ? » et la flèche « Découvrir » sont retirés (cf. §8).

### 1.3 Paliers responsive

| Palier | Mise en page | Colonnes | Hauteur zone hero | Image |
|---|---|---|---|---|
| **≥ 1200 px** | asymétrique, débord droit | `minmax(0,1fr)` / `minmax(0, min(45vw, 760px))` | `min-height: clamp(520px, 60vh, 640px)` | `height:100%`, débord bas 32 px |
| **900–1199 px** | asymétrique, débord droit | `minmax(0,1fr)` / `minmax(0, 42vw)` | `min-height: 470px` | `height:100%`, débord bas 24 px |
| **600–899 px** | **empilé** (décision tranchée, cf. ci-dessous) | 1 colonne | auto | bandeau full-bleed, `height: clamp(260px, 34vw, 340px)` |
| **< 600 px** | empilé | 1 colonne | auto | bandeau full-bleed, `height: clamp(180px, 32vh, 260px)` |
| **paysage, hauteur < 500 px** | asymétrique compact 58/42 | `1fr` / `42vw` | `min-height: auto` | `height: 100%`, radius `20px 0 0 20px` |

**Tablette 600–899 px — arbitrage : empilement.**
À 700 px de viewport, une colonne texte à 55 % ne fait que 385 px. Un H1 français de 7-9 mots y tiendrait sur 4 lignes, ce qui rompt la contrainte « 2 lignes maximum » posée par Céline. L'empilement conserve une ligne de force horizontale et une colonne texte pleine largeur (max 640 px, centrée).
En empilement tablette, l'image reste **full-bleed horizontalement** (`margin: 0 calc(-1 * var(--gutter))`) avec `border-radius: 0 0 28px 28px`. À 899 px elle est rendue à 899 px CSS : c'est au-dessus du plafond recommandé, mais sur un recadrage de bandeau (l'image est *downscalée* en hauteur de 768 → 340 px), l'agrandissement effectif reste ~1,3× à DPR 2 et reste acceptable sur un bandeau. À ne pas reproduire ailleurs.

**Paysage < 500 px de haut** — trois corrections spécifiques :
- `nav.site-nav { position: static; }` — rendre les 60 px de hauteur mangés par la barre collante.
- `body { padding-bottom: 0; } .sticky-mobile-cta { display: none; }` — le CTA collant bas mange 25 % de la hauteur utile.
- H1 26 px / sous-titre 14 px / boutons en ligne, `min-height: 44 px`. **C'est le seul endroit où la cible tactile descend sous 48 px** ; c'est un compromis assumé en paysage, où la hauteur disponible est la contrainte dominante. À noter dans le suivi.

### 1.4 Colonne gauche — gouttières et alignement

```css
.hero-grid {
  display: grid;
  align-items: stretch;
  grid-template-columns: minmax(0,1fr) minmax(0, min(45vw, 760px));
  column-gap: clamp(32px, 4vw, 64px);
}
.hero-text {
  max-width: 640px;
  justify-self: end;                /* le texte reste collé à la photo */
  padding-block: clamp(56px, 6vw, 88px);
  padding-inline-start: var(--gutter);
}
```

Le `justify-self: end` combiné à `max-width: 640px` empêche la colonne texte de s'étirer indéfiniment sur écran très large tout en conservant le rapport visuel 55/45.

### 1.5 Traitement de l'image

```css
.hero-visual {
  position: relative;
  align-self: stretch;
  margin-bottom: -32px;             /* débord bas, chevauche le bandeau de preuve */
  border-radius: 32px 0 0 0;        /* arrondi haut-gauche uniquement */
  overflow: hidden;
  box-shadow: -32px 28px 72px rgba(30,41,82,0.14);
  z-index: 2;
}
.hero-img {
  display: block;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: 45% 42%;         /* garde la kiné et le t-shirt orange dans le cadre */
}
/* Fondu de raccord côté crème */
.hero-visual::after {
  content: '';
  position: absolute; inset: 0;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #F7F6F2 0%,
    rgba(247,246,242,0.72) 12%,
    rgba(247,246,242,0.22) 28%,
    rgba(247,246,242,0) 44%
  );
}
/* Pastille de marque, à cheval sur l'arête gauche */
.hero-dot {
  position: absolute; left: 0; bottom: 84px;
  width: 96px; height: 96px; border-radius: 50%;
  background: #FFDE59;
  transform: translateX(-50%);
  z-index: 3;
}
```

Notes :
- Le fondu et la pastille jaune sont les **deux seuls ajouts graphiques**. Ne pas cumuler avec un liseré orange sur l'arête : fondre et trancher sont deux intentions contradictoires, le fondu l'emporte pour l'immersion.
- La pastille jaune reprend le vocabulaire du `.hero-glow` existant (cercle décoratif) tout en le ramenant dans la charte — l'actuel est teal.
- Le débord bas `-32px` suppose `position: relative; z-index: 1` sur le bandeau de preuve. Si Dev constate une fragilité (Safari, conteneurs de peinture), c'est le dispositif **dégradable** : le supprimer coûte peu, les trois autres tiennent seuls.
- Le hero ne doit **pas** porter `overflow: hidden` (cf. §0.1). Utiliser `overflow-x: clip` sur `body`, pas `hidden`.

### 1.6 Assets image à produire

L'image est très probablement l'élément LCP de la page. À traiter en conséquence.

| Fichier | Dimensions | Usage |
|---|---|---|
| `hero-atelier-760.webp` | 760 × 848 (recadrage ~9:10) | desktop 1× |
| `hero-atelier-1376.webp` | 1376 × 768 (source) | desktop 2× / tablette |
| `hero-atelier-mobile-900.webp` | 900 × 640 | bandeau mobile/tablette 2× |
| déclinaisons `.jpg` | idem | repli `<picture>` |

- `<picture>` + `srcset`/`sizes`, `fetchpriority="high"`, `decoding="async"`, **pas de `loading="lazy"`**.
- `width` et `height` explicites sur `<img>` (évite le CLS).
- `<link rel="preload" as="image" imagesrcset="…">` dans le `<head>`.
- `alt` descriptif rédigé par l'agent CR (ce n'est pas du texte décoratif : la photo porte la preuve « kiné en entreprise »).
- Cible de poids : ≤ 140 Ko par variante en WebP qualité 78. La source fait 808 Ko, c'est trop pour un LCP.

### 1.7 Typographie du hero

**H1 — `Encode Sans Compressed`, `font-weight: 800`, `color: #1E2952`**

| Palier | Taille | Interlignage | Letter-spacing |
|---|---|---|---|
| ≥ 1200 px | 54 px | 1,06 | −1,4 px |
| 900–1199 px | 44 px | 1,08 | −1,1 px |
| 600–899 px | 40 px | 1,10 | −0,9 px |
| < 600 px | 32 px | 1,12 | −0,6 px |
| < 380 px | 28 px | 1,14 | −0,4 px |
| paysage < 500 px | 26 px | 1,12 | −0,4 px |

Le 76 px actuel est calibré pour une colonne de 780 px centrée ; dans une colonne de 640 px il produirait un H1 de 4 lignes. 54 px est le maximum compatible avec « 2 lignes ».

**Mot accentué dans le H1 — ne pas utiliser `color: #FF914D`.**
`#FF914D` sur `#F7F6F2` = **2,11:1**. Échec AA même au seuil « grand texte » (3:1). La règle actuelle `.hero h1 .accent { color: #FF914D }` est donc un écart d'accessibilité, pas un écart de charte.
→ Remplacer par un **soulignement orange**, pattern déjà en place sur le site (`.nav-dropdown-panel a`, l.135) :
```css
.hero-title .accent {
  color: #1E2952;
  text-decoration: underline;
  text-decoration-color: #FF914D;
  text-decoration-thickness: 6px;
  text-underline-offset: 8px;
  text-decoration-skip-ink: none;
}
```
À < 600 px : épaisseur 4 px, offset 5 px.

**Sous-titre — `Nunito 400`, `color: #374151`**

| Palier | Taille | Interlignage | Largeur |
|---|---|---|---|
| ≥ 900 px | 18 px | 1,65 | `max-width: 34ch` |
| 600–899 px | 17 px | 1,65 | `max-width: 38ch` |
| < 600 px | 16 px | 1,60 | 100 % |

Marge : `margin: 20px 0 32px`.
L'existant utilise `#6B7280` en `font-weight: 300` : c'est 4,57:1 sur crème (limite) et le 300 à 16-18 px est visuellement anémique. `#374151` est la couleur de paragraphe de la charte et donne **9,81:1**.

**Contrainte à transmettre à l'agent CR** : en mobile, le sous-titre doit tenir en **2 lignes maximum**, soit ~14-18 mots à 16 px sur 320 px utiles. Au-delà, le CTA principal passe sous la ligne de flottaison (calcul en §1.9).

**Pastille eyebrow**

```css
.hero-eyebrow {
  display: inline-flex; align-items: center;
  min-height: 28px; padding: 7px 16px;
  border-radius: 100px;
  font-family: 'Nunito', sans-serif;
  font-weight: 700; font-size: 11.5px;
  letter-spacing: 0.1em; text-transform: uppercase;
  margin-bottom: 22px;
  /* Option A (recommandée, cf. §7) */
  background: #2EC4B6; color: #1E2952;   /* 6,48:1 */
  /* Option B : background: #1E2952; color: #fff;  (13,3:1) */
}
```
**Supprimer `.hero-eyebrow-dot`** : la pastille intérieure est en `#2EC4B6` sur un fond `#2EC4B6` (l.144 et l.149) — elle est strictement invisible depuis sa création.

### 1.8 Boutons du hero — spec complète

**Base commune**
```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: 'Encode Sans Compressed', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 0.01em;
  min-height: 52px; padding: 15px 28px;
  border-radius: 12px; border: 2px solid transparent;
  text-decoration: none; cursor: pointer;
  transition: background-color .2s ease, color .2s ease,
              transform .15s ease, box-shadow .2s ease;
}
@media (max-width: 599px) { .btn { font-size: 16px; min-height: 52px; width: 100%; } }
```
Le site mélange aujourd'hui des rayons de 7, 8, 14 et 100 px sans logique. Échelle proposée : **8 px** contrôles fins · **12 px** boutons · **14 px** cartes · **20 px** grands panneaux · **100 px** pastilles.

**Primaire — orange, vers le calculateur**

| État | Fond | Texte | Reste |
|---|---|---|---|
| repos | `#FF914D` | `#1E2952` (6,30:1) | `box-shadow: 0 8px 20px rgba(255,145,77,0.28)` |
| survol | `#E87A35` | `#1E2952` (4,86:1) | `transform: translateY(-2px)` · ombre `0 12px 26px rgba(255,145,77,0.34)` |
| actif | `#E87A35` | `#1E2952` | `transform: translateY(0)` · ombre `0 4px 12px` |
| focus clavier | `#FF914D` | `#1E2952` | `outline: 3px solid #1E2952; outline-offset: 3px` |

`#E87A35` est un assombrissement du `#FF914D` de la charte, pas une couleur nouvelle : c'est une variante d'état, à documenter comme telle.

**Secondaire — fantôme navy, vers les formations**

| État | Fond | Texte | Bordure |
|---|---|---|---|
| repos | transparent | `#1E2952` (13,3:1) | `2px solid #1E2952` |
| survol | `#1E2952` | `#ffffff` (13,3:1) | `2px solid #1E2952` · `translateY(-2px)` |
| actif | `#1E2952` | `#ffffff` | `translateY(0)` |
| focus clavier | comme repos | `#1E2952` | `outline: 3px solid #1E2952; outline-offset: 3px` |

**`.btn-teal` est supprimée.** Blanc sur `#2EC4B6` = 2,17:1 ; et le hero n'a pas besoin de trois couleurs de bouton.

**Règle sitewide d'anneau de focus** (à appliquer partout) :
- fond clair → `outline: 3px solid #1E2952; outline-offset: 3px`
- fond foncé → `outline: 3px solid #FFDE59; outline-offset: 3px`
- exception : bouton jaune sur fond navy → `outline: 3px solid #ffffff`
Ne jamais utiliser `outline: none` sans remplacement. Utiliser `:focus-visible`, pas `:focus`.

### 1.9 Vérification « CTA visible sans défiler » en mobile

Écran de référence : iPhone SE / Android d'entrée de gamme, 375 × 667, surface utile ≈ 560 px après barres navigateur.

| Élément | Hauteur |
|---|---|
| barre de nav | 60 px |
| image bandeau (`32vh` ≈) | 190 px |
| eyebrow + marge | 40 px |
| H1 (32 px × 2 lignes) | 72 px |
| sous-titre (16 px × 2 lignes) + marges | 84 px |
| bouton primaire | 52 px |
| **Total** | **498 px** ≤ 560 ✓ |

**Écart assumé par rapport à la consigne initiale.** La consigne demandait un ratio image `4:5`. À 375 px de large, `4:5` donne 469 px de hauteur, soit 84 % de la surface utile — le CTA principal se retrouverait à ~780 px du haut, largement sous la ligne de flottaison. Les deux exigences sont incompatibles.
→ Spec retenue : `height: clamp(180px, 32vh, 260px)` avec `object-position: center 38%`. Le cadrage reste « portrait doux » (≈ 5:4 à 375 px) et préserve les visages.
Si Céline tient au `4:5`, il faut accepter que le CTA ne soit plus visible sans défiler sur les écrans de moins de 700 px de haut. À arbitrer.

Mobile : image en full-bleed (`margin-inline: calc(-1 * var(--gutter))`), `border-radius: 0 0 24px 24px`, pas d'ombre, pas de fondu latéral, pas de pastille jaune (elle déborderait hors écran).

---

## 2. Nav sticky

### 2.1 Hauteur du logo

Le `112 px` actuel en desktop (l.108) est disproportionné : il impose une barre de ~150 px de haut, soit un quart de la hauteur utile d'un portable 13″. Le logo fait 700 × 428 px (ratio 1,64).

| Palier | Repos | Solidifiée |
|---|---|---|
| ≥ 1200 px | **64 px** | **48 px** |
| 900–1199 px | 56 px | 46 px |
| 600–899 px | 52 px | 44 px |
| < 600 px | 44 px | 44 px |
| **plancher absolu** | — | **40 px** |

`transition: height .25s ease` sur `.site-logo`.

**Point à vérifier par Dev** (je ne peux pas inspecter le rendu du PNG) : à 44 px de haut, la hauteur d'x du wordmark « UP TO MOVE » dans la pilule doit rester **≥ 10 px**. Si le PNG comporte des marges transparentes autour de la pilule, une partie des 44 px est perdue.
→ Dans ce cas, produire un dérivé `logo-uptomove-nav.png` **strictement rogné sur la pilule** (aucune recoloration, aucune déformation, ratio d'origine conservé) et l'utiliser uniquement dans la nav. Idéalement, une version **SVG** du wordmark, qui résoudrait le problème définitivement et allégerait la page.
Ne jamais corriger le problème en étirant le logo : la charte interdit toute déformation.

### 2.2 État repos (haut de page)

```css
.site-nav {
  position: sticky; top: 0; z-index: 400;
  display: flex; align-items: center; justify-content: space-between;
  gap: 24px;
  height: 88px;
  padding-inline: var(--gutter);
  background: #F7F6F2;
  transition: background-color .28s ease, height .28s ease, box-shadow .28s ease;
}
.site-nav a { font-family:'Nunito',sans-serif; font-weight:700; font-size:14.5px; color:#1E2952; text-decoration:none; }
.site-nav a:hover { color:#FF914D; }
```
Pas d'ombre, pas de bordure : sur le crème du hero, la barre doit disparaître dans le fond.
`#FF914D` au survol sur `#F7F6F2` = 2,11:1. Acceptable pour un **changement d'état au survol** (l'information n'est pas portée uniquement par la couleur, le lien reste lisible avant et pendant), mais ajouter un `text-decoration: underline; text-decoration-color: #FF914D; text-decoration-thickness: 2px; text-underline-offset: 6px` et **conserver `color: #1E2952`**. C'est plus robuste et cohérent avec le pattern déjà utilisé dans le menu déroulant.

### 2.3 État solidifié (`scrollY > 20`)

```css
.site-nav.is-solid {
  height: 68px;
  background: #1E2952;
  box-shadow: 0 6px 24px rgba(30,41,82,0.18);
}
.site-nav.is-solid a { color: #ffffff; }              /* 13,3:1 */
.site-nav.is-solid a:hover { text-decoration-color: #FFDE59; }
.site-nav.is-solid .nav-toggle span { background: #ffffff; }
```
- Lien **Calculateur TMS** : inchangé dans les deux états — fond `#FFDE59`, texte `#1E2952` (**10,60:1**, la meilleure combinaison de la charte). C'est le repère chromatique du calculateur dans tout le site, il ne bouge pas.
- CTA **Contact** : fond `#FF914D`, texte `#1E2952` (6,30:1). Corrige le blanc actuel à 2,23:1 (l.116). Note : `font-weight: 500 !important` sur `.hero-nav-cta` contredit la charte (boutons en Encode Sans Compressed 700) — à passer en 700.
- **Logo sur fond navy** : le PNG est à fond transparent, la pilule dégradé orange→jaune ressort correctement sur `#1E2952`. **Dev doit vérifier l'absence de liseré blanc résiduel** dans le PNG (halo d'anti-aliasing sur fond blanc) ; si liseré, re-exporter depuis la source.
- Le seuil `scrollY > 20` est bon. Ajouter `will-change: height` est inutile ; en revanche, passer le listener de scroll en `{ passive: true }`.

### 2.4 Panneau hamburger ouvert (< 900 px)

```css
.nav-panel {
  position: fixed; inset: 60px 0 0 0;         /* sous la barre */
  background: #1E2952;
  padding: 16px var(--gutter) calc(24px + env(safe-area-inset-bottom));
  overflow-y: auto;
  display: flex; flex-direction: column; gap: 4px;
}
.nav-panel a {
  display: flex; align-items: center;
  min-height: 52px; padding: 14px 8px;
  font-size: 16px; color: #ffffff;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.nav-panel .nav-dropdown-panel a { padding-left: 24px; font-size: 15px; }
```
- Fond **navy** plutôt que le blanc actuel : c'est le même état visuel que la nav solidifiée, une seule décision chromatique au lieu de deux.
- Le sous-menu « À propos » est déjà en `#1E2952` (l.133) ; sur panneau navy il devient un simple retrait de 24 px avec un fond `rgba(255,255,255,0.06)`, ce qui supprime les trois surcharges `!important` des l.361-363.
- Les deux CTA (Calculateur jaune, Contact orange) passent en **pleine largeur, empilés, en bas du panneau**, `min-height: 52px`, séparés de 12 px.
- Bouton hamburger : zone de frappe **48 × 48 px** (`padding: 12px`), barres 24 × 2,5 px. `aria-expanded` déjà en place, le conserver.
- À l'ouverture : overlay `rgba(30,41,82,0.45)` sur le contenu derrière + `body { overflow: hidden }` + piège de focus + fermeture sur `Escape`.
- Le logo reste visible dans la barre pendant l'ouverture, à 44 px.

---

## 3. Bloc 6 — Calculateur TMS (composant nouveau)

### 3.1 Parti pris

C'est **le seul bloc sombre du corps de page**. Il se distingue par la valeur (navy dans une page claire), pas par une couleur nouvelle. Trois conséquences :
- Le bouton jaune `#FFDE59` y atteint son contraste maximal et devient l'élément le plus saillant de la page après le hero.
- La section « Notre méthode » actuelle (vidéo + overlay teal/navy, l.882-887) doit **repasser en fond clair** dans la nouvelle architecture — la frise 4 étapes du bloc 4 sera claire (cf. §4.3). Deux blocs sombres rapprochés annuleraient l'effet.
- On **n'utilise pas** le dégradé orange→jaune ici : il est réservé au CTA final (bloc 8). Deux temps forts chromatiques identiques à trois sections d'écart se neutralisent.

### 3.2 Spec

```css
.b6-calc {
  background: #1E2952;
  padding: var(--pad-l) var(--gutter);
  position: relative; overflow: hidden;
}
.b6-calc::before {                        /* halo décoratif, remplace l'ancien halo teal */
  content: ''; position: absolute;
  top: -140px; right: -120px;
  width: 420px; height: 420px; border-radius: 50%;
  background: #FF914D; opacity: .10;
  pointer-events: none;
}
.b6-inner {
  position: relative; z-index: 1;
  max-width: 1080px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 4vw, 56px); align-items: center;
}
```

| Élément | Spec |
|---|---|
| Pastille de section | `background: rgba(255,222,89,0.16)` · `border: 1px solid rgba(255,222,89,0.45)` · `color: #FFDE59` (10,6:1) · Nunito 700 11,5 px · uppercase · ls 0,12em · radius 100px |
| H2 | Encode Sans Compressed 800 · `clamp(28px, 3vw, 36px)` · lh 1,12 · ls −0,8px · `#ffffff` (13,3:1) |
| Phrase | Nunito 400 · 17 px · lh 1,65 · `rgba(255,255,255,0.82)` (≈ 9,8:1) · `max-width: 44ch` |
| Bouton | cf. ci-dessous |

**Bouton jaune — contrôle de contraste fait**
`#1E2952` sur `#FFDE59` = **10,60:1**. C'est le meilleur couple de la charte, très au-dessus du seuil AA. Le jaune n'est traître que dans l'autre sens : `#FFDE59` **en texte sur blanc** = 1,33:1, à ne jamais faire.

| État | Fond | Texte | Reste |
|---|---|---|---|
| repos | `#FFDE59` | `#1E2952` (10,60:1) | Encode 700 16 px · `min-height: 54px` · padding 17/30 · radius 12px · `box-shadow: 0 10px 26px rgba(255,222,89,0.22)` |
| survol | `#FFD42E` | `#1E2952` (9,84:1) | `translateY(-2px)` · ombre `0 14px 32px rgba(255,222,89,0.28)` |
| actif | `#FFD42E` | `#1E2952` | `translateY(0)` |
| focus clavier | `#FFDE59` | `#1E2952` | `outline: 3px solid #ffffff; outline-offset: 3px` |

**Un seul CTA dans ce bloc.** Pas de lien texte secondaire à côté.

### 3.3 Visuel d'aperçu

```css
.b6-preview {
  max-width: 520px; width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 30px 70px rgba(0,0,0,0.35);
  transform: rotate(-1.5deg);
  transition: transform .3s ease;
}
.b6-calc:hover .b6-preview { transform: rotate(0deg); }
```
- Contenu : capture d'écran réelle de l'interface du calculateur (pas une illustration inventée). Exporter à 1040 px de large, servir en `srcset` 520/1040.
- `loading="lazy"`, `width`/`height` explicites, `alt` descriptif (agent CR).
- **Ne pas** encadrer dans un mockup de navigateur ou de téléphone : le site n'utilise ce vocabulaire nulle part ailleurs.
- Le `rotate(-1.5deg)` est neutralisé en `prefers-reduced-motion` et sous 900 px.

### 3.4 Mobile

- 1 colonne, texte d'abord, visuel ensuite (`max-width: 420px`, centré, `rotate(0)`).
- `padding: var(--pad-l) var(--gutter)` avec `--pad-l: 48px`.
- Bouton pleine largeur.

---

## 4. Composants qui changent de forme

### 4.1 Ligne de tags secteurs (bloc 7)

Base : `.tag-pill` des articles de blog (`blog-*.html`, l.87) — `11,5px / 700 / #1E2952 / fond blanc / bordure #E8E6E0 / radius 100px`. Version **cliquable**, donc agrandie pour la cible tactile.

```css
.sector-row {
  display: flex; flex-wrap: wrap; gap: 10px;
  justify-content: center;
  margin-top: 40px;
}
.sector-pill {
  display: inline-flex; align-items: center;
  min-height: 44px; padding: 11px 20px;
  border-radius: 100px;
  background: #ffffff; border: 1px solid #E8E6E0;
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 14px;
  color: #1E2952; text-decoration: none;
  transition: background-color .2s ease, border-color .2s ease, transform .15s ease;
}
.sector-pill:hover { background:#1E2952; border-color:#1E2952; color:#fff; transform: translateY(-2px); }
.sector-pill:focus-visible { outline: 3px solid #1E2952; outline-offset: 2px; }
@media (max-width: 899px) { .sector-pill { min-height: 48px; padding: 13px 18px; } }
```

- **La section 7 doit être sur fond crème `#F7F6F2`** pour que les pastilles blanches se détachent. Sur fond blanc elles disparaîtraient. C'est cohérent avec la trame du §5.
- Pas de séparateur `·` en caractère entre les secteurs : il serait vocalisé par les lecteurs d'écran. Les pastilles se suffisent.
- Sémantique : `<nav aria-label="Secteurs d'activité">` + `<ul>` de liens, pas une suite de `<span>`.
- `flex-wrap` plutôt que défilement horizontal : aucun contenu caché, 6 pastilles tiennent sur 2-3 lignes à 360 px.

### 4.2 Accordéon de cas d'usage (bloc 4)

**Réutiliser à l'identique le pattern `.faq-item` de `faq.html` (l.111-125).** C'est le pattern canonique du site pour les `<details>` de contenu ; `.case-details` de `clients.html` est une variante « carte-étude de cas » qui ne convient pas ici.

```css
.uc-list { display: flex; flex-direction: column; gap: 12px; max-width: 860px; margin: 0 auto; }
.uc-item { background:#fff; border:1px solid #E8E6E0; border-radius:14px; overflow:hidden; }
.uc-item > summary {
  cursor: pointer; list-style: none;
  display: flex; align-items: center;
  min-height: 56px; padding: 18px 60px 18px 22px;
  position: relative;
  font-family:'Encode Sans Compressed',sans-serif; font-weight:800; font-size:15.5px;
  color:#1E2952; line-height:1.4;
}
.uc-item > summary::-webkit-details-marker { display: none; }
.uc-item > summary::after {
  content:'+'; position:absolute; right:22px; top:50%; transform:translateY(-50%);
  width:28px; height:28px; border-radius:50%;
  background:#F7F6F2; color:#1E2952;               /* 9,81:1 */
  display:flex; align-items:center; justify-content:center;
  font-size:18px; font-weight:700;
}
.uc-item[open] > summary::after {
  content:'–'; background:#FF914D; color:#1E2952;  /* 6,30:1 */
}
.uc-item[open] > summary { border-bottom: 1px solid #E8E6E0; }
.uc-item .uc-body { padding: 18px 22px 24px; color:#374151; font-size:15px; line-height:1.75; }
.uc-item > summary:focus-visible { outline: 3px solid #1E2952; outline-offset: -3px; }
```

**Correction apportée au pattern d'origine** : la FAQ actuelle met le `+` en `#FF914D` sur `#F7F6F2` = **2,11:1**. Ce glyphe porte l'état ouvert/fermé, il doit être lisible. La spec ci-dessus le passe en navy au repos et inverse au `[open]`. **À répercuter aussi dans `faq.html`** (hors périmètre de ce chantier, à planifier).

- 4 items, **tous fermés au chargement** (conforme à l'architecture validée).
- Sur fond blanc (section 4), les cartes blanches à bordure `#E8E6E0` restent lisibles — c'est le traitement déjà utilisé pour `.card`.
- Ne pas appliquer le `transform: translateY(-4px)` au survol sous 900 px (comportement déjà géré dans `faq.html` l.182, à reproduire).

### 4.3 Frise 4 étapes (bloc 4)

Passe d'un fond vidéo/overlay sombre à un fond clair (cf. §3.1).

```css
.steps { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; position:relative; max-width:960px; margin:0 auto 48px; }
.steps::before { content:''; position:absolute; left:22px; right:22px; top:22px; height:2px; background:#E8E6E0; z-index:0; }
.step-num {
  position:relative; z-index:1;
  width:44px; height:44px; border-radius:50%;
  background:#1E2952; color:#fff;
  display:flex; align-items:center; justify-content:center;
  font-family:'Encode Sans Compressed',sans-serif; font-weight:800; font-size:16px;
  margin-bottom:14px;
}
.step-title { font-family:'Encode Sans Compressed',sans-serif; font-weight:700; font-size:15px; color:#1E2952; margin-bottom:6px; }
.step-text  { font-size:14px; color:#374151; line-height:1.65; }
@media (max-width:899px) {
  .steps { grid-template-columns:1fr; gap:20px; }
  .steps::before { left:22px; right:auto; top:22px; bottom:22px; width:2px; height:auto; }
}
```
La pastille numérotée peut recevoir un accent orange pour la dernière étape (`background:#FF914D; color:#1E2952`) afin de marquer l'aboutissement — optionnel.

---

## 5. Rythme vertical et trame de fonds

### 5.1 Diagnostic de l'existant

Dix sections utilisent exactement `padding: 100px 64px` (l.220, 685, 764, 882, 939, 971, 1034, 1108) plus deux à `80px 52px` (l.1156, 1220). Résultat : **aucune hiérarchie d'importance** entre une section majeure et une bande d'appui, et un `padding` latéral fixe qui saute brutalement à `24px !important` sous 900 px (l.328) sans palier intermédiaire.

Sur 8 sections au lieu de 12, une alternance blanc/crème **stricte** deviendrait un damier mécanique. Elle ne tient plus telle quelle.

### 5.2 Jetons à introduire

Le site n'utilise aucune variable CSS. Les introduire est la condition d'une trame tenable.

```css
:root {
  /* couleurs — charte MEMO-SITE §5 */
  --navy:   #1E2952;
  --orange: #FF914D;
  --orange-dark: #E87A35;   /* état survol uniquement */
  --yellow: #FFDE59;
  --yellow-dark: #FFD42E;   /* état survol uniquement */
  --cream:  #F7F6F2;
  --grey-bg:#EFEFEF;
  --text:   #374151;
  --line:   #E8E6E0;

  /* espacements verticaux */
  --pad-xl: clamp(88px, 8vw, 120px);
  --pad-l:  clamp(72px, 6.5vw, 96px);
  --pad-m:  clamp(56px, 5vw, 80px);
  --pad-s:  36px;

  /* gouttière latérale, continue au lieu du saut 64→24 */
  --gutter: clamp(20px, 5vw, 64px);
  --content: 1120px;
}
@media (max-width: 599px) {
  :root { --pad-xl: 56px; --pad-l: 48px; --pad-m: 44px; --pad-s: 28px; }
}
```
Toute section : `padding: var(--pad-X) var(--gutter);` et conteneur interne `max-width: var(--content); margin-inline: auto;`.

### 5.3 Trame proposée, de haut en bas

| # | Section | Fond | Espacement | Séparateur |
|---|---|---|---|---|
| 0 | Nav sticky | `#F7F6F2` → `#1E2952` au scroll | h. 88 → 68 px | ombre en état solidifié |
| 1 | Hero | `#F7F6F2` | `--pad-l` (le visuel porte le volume) | — |
| 2 | Bandeau de preuve | `#ffffff` | `--pad-s` | `border-top` + `border-bottom` `1px #E8E6E0` |
| 3 | Le constat | `#F7F6F2` | `--pad-xl` | — |
| 4 | Notre réponse | `#ffffff` | `--pad-xl` | — |
| 5 | Ce qui nous distingue | `#F7F6F2` | `--pad-xl` | — |
| 6 | **Calculateur** | `#1E2952` | `--pad-l` | — |
| 7 | Ils nous font confiance | `#F7F6F2` | `--pad-l` | — |
| 8 | CTA final devis | `linear-gradient(100deg,#FF914D 0%,#FFDE59 100%)` | `--pad-m` | — |
| — | Bande newsletter | `#ffffff` | `--pad-m` | `border-bottom: 1px solid #E8E6E0` |
| — | Footer | `#1E2952` | 64/32 px (inchangé) | — |

Lecture : le crème domine (sections 1, 3, 5, 7), le blanc sert de respiration (2, 4, newsletter), le navy marque **un seul** temps fort dans le corps (6), le dégradé clôt (8). La rupture de l'alternance entre 5 et 7 (crème / crème) est tenue par le navy intercalé en 6 — c'est voulu.

**Règle de bordure** : `border-top: 1px solid #E8E6E0` **uniquement entre deux sections de même valeur claire** (blanc↔blanc, crème↔crème). Entre crème et blanc, le changement de valeur suffit. Aujourd'hui les `border-top` sont posées sans règle (l.764, 939, 1156).

**Position de la newsletter** : la placer **après** le CTA final en bande fine blanche (comme dans le tableau) plutôt qu'en colonne de footer. Raison visuelle : un champ de saisie sur fond navy demande un traitement de formulaire inversé (bordures claires, placeholder à contraste suffisant) qui n'existe nulle part ailleurs sur le site. Une bande blanche réutilise le style de champ déjà en place. Si Céline préfère la colonne de footer, il faudra une spec de champ sur fond sombre en plus.

**Rappel** : `body { background: #EFEFEF }` n'est jamais visible puisque chaque section porte son fond. Le conserver quand même (évite le flash blanc au chargement et en surdéfilement iOS).

---

## 6. Accessibilité

### 6.1 Contrastes — mesures effectuées

Calculs selon WCAG 2.1 (luminance relative, seuil AA 4,5:1 pour le texte courant, 3:1 pour ≥ 24 px gras).

**Échecs constatés dans l'existant**

| Combinaison | Ratio | Où | Correction |
|---|---|---|---|
| `#fff` sur `#FF914D` | **2,23:1** | `.btn-orange` l.188, `.hero-nav-cta` l.116, tous les CTA du site | texte → `#1E2952` (6,30:1) |
| `#fff` sur `#2EC4B6` | **2,17:1** | `.btn-teal` l.195, `.hero-eyebrow` l.144, pastilles l.891 | supprimer `.btn-teal` ; eyebrow → texte `#1E2952` (6,48:1) |
| `#2EC4B6` sur `#fff` | **2,17:1** | `.c-teal` l.258, accents typographiques l.597, 690, 691, 779 | → `#12786F` (5,04:1 sur crème, 5,33:1 en inverse) ou navy |
| `#FF914D` sur `#F7F6F2` | **2,11:1** | `.hero h1 .accent` l.155, `.faq-item summary::after` | soulignement au lieu de la couleur ; glyphe `+` en navy |
| `#bbb` sur `#fff` | **1,92:1** | `.card-source` l.261 — les mentions de sources INRS | → `#6B7280` (4,83:1) |
| `#9CA3AF` sur `#fff` | **2,54:1** | `.bc-label` l.615 « Ils nous font confiance » | → `#6B7280` (4,83:1) |
| `rgba(30,41,82,0.4)` sur crème | **2,35:1** | label « Découvrir » l.606 | supprimé avec la flèche |
| `#6B7280` sur `#F7F6F2` | **4,57:1** | `.hero-sub`, `.constat-sub`, `.card-label` | limite ; → `#374151` (9,81:1), couleur de la charte |

**Couples validés de la spec**

| Combinaison | Ratio | Usage |
|---|---|---|
| `#1E2952` sur `#FFDE59` | **10,60:1** | bouton calculateur, lien nav calculateur |
| `#1E2952` sur `#F7F6F2` | **13,29:1** | H1, H2, liens nav au repos |
| `#ffffff` sur `#1E2952` | **13,29:1** | nav solidifiée, panneau mobile, H2 bloc 6 |
| `#FFDE59` sur `#1E2952` | **10,60:1** | pastille bloc 6, encart Passeport, anneau de focus |
| `#374151` sur `#F7F6F2` | **9,81:1** | tous les paragraphes |
| `#1E2952` sur `#FF914D` | **6,30:1** | texte des boutons orange |
| `#1E2952` sur `#2EC4B6` | **6,48:1** | pastille eyebrow (si option A) |
| `#1E2952` sur `#E87A35` | **4,86:1** | boutons orange au survol |

### 6.2 Cibles tactiles

Minimum **48 × 48 px** en dessous de 900 px, avec ≥ 8 px entre cibles adjacentes :
- boutons `.btn` : `min-height: 52px`, pleine largeur
- liens du panneau nav : `min-height: 52px`
- bouton hamburger : `48 × 48` (`padding: 12px` autour de barres de 24 px)
- pastilles secteurs : `min-height: 48px`
- `summary` des accordéons : `min-height: 56px`, toute la ligne cliquable
- liens de footer : `padding-block: 10px` pour atteindre 44 px minimum
- logo cliquable : 44 px de haut minimum
- **Unique exception** : paysage < 500 px de haut, 44 px (cf. §1.3)

### 6.3 `prefers-reduced-motion`

La home cumule : apparitions `fade-up` / `stagger` / `fade-left` / `fade-right`, animations `.b4-card-anim` et `.b4-passeport-anim`, rebond `@keyframes bounce`, carrousel `bc-scroll` en boucle infinie, `scroll-behavior: smooth`, survols `scale(1.04)`. Aucune de ces animations n'est aujourd'hui conditionnée.

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
  .fade-up, .fade-left, .fade-right,
  .stagger > *, .b4-card-anim, .b4-passeport-anim {
    opacity: 1 !important; transform: none !important;
  }
  .card:hover, .b6-card:hover, .b7-card:hover, .sector-pill:hover { transform: none !important; }
  .b6-preview { transform: none !important; }
  .bc-track {
    animation: none !important;
    width: auto; flex-wrap: wrap; justify-content: center; gap: 40px;
  }
  .bc-track > .bc-clone { display: none; }   /* masquer le 2e jeu de logos */
}
```

**Côté JS, deux corrections indispensables** (le CSS seul ne suffit pas) :
1. Le script du hero (l.510-519) écrit `style.opacity = '0'` **en ligne** sur 5 éléments. L'encadrer :
   `const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;` et ne rien faire si `reduce`.
2. Le carrousel doit fonctionner **sans son doublon** en reduced-motion. Marquer le second jeu de logos `class="bc-clone" aria-hidden="true"` (utile aussi pour les lecteurs d'écran, qui annoncent aujourd'hui les 4 clients deux fois).

### 6.4 Carrousel de logos — autres points

- `12s linear infinite` (l.621) pour 8 logos est déjà rapide. Avec l'ajout de Qualiopi on passe à 10 images : **porter la durée à 30s**. Un logo client doit rester lisible le temps d'être identifié.
- `.bc-track:hover { animation-play-state: paused }` ne couvre pas le clavier → ajouter `.bc-track:focus-within`.
- Les logos clients doivent avoir un `alt` = nom de l'entreprise (déjà le cas) ; les clones, `alt=""` + `aria-hidden="true"`.

### 6.5 Logo Qualiopi dans le bandeau de preuve

Contrainte de charte : le logo Qualiopi officiel ne doit **jamais** être déformé, recoloré, ni recadré.

- **Hors du carrousel**, dans un bloc fixe à droite, séparé par un `.bc-sep`. Raison : un logo de certification ne doit pas défiler hors champ, et le numéro doit rester lisible.
- `height: 56px` desktop / `44px` mobile, `width: auto` — **ne jamais poser de `width` fixe**.
- À côté, sur deux lignes : `Certifié Qualiopi` (Nunito 700, 12 px, `#1E2952`) et `N° F3740-1-I` (Nunito 600, 11,5 px, `#374151`, 9,8:1 sur blanc).
- **Fond blanc obligatoire** — le logo Qualiopi ne doit pas être posé sur crème ni sur navy. Le bloc 2 est blanc, c'est cohérent.
- La mention légale complète (« La certification qualité a été délivrée au titre de la catégorie d'action suivante : ACTIONS DE FORMATION ») reste en footer, pas dans le bandeau.
- Sous 900 px : le bloc Qualiopi passe **au-dessus** du carrousel, centré, avec 20 px de marge basse.

---

## 7. Audit de conformité à la charte

### 7.1 Couleurs hors charte relevées dans l'existant

| Couleur | Occurrences | Où | Statut |
|---|---|---|---|
| `#2EC4B6` | **97 sur 14 fichiers** (28 dans `index.html`) | pastilles, bouton secondaire, chiffres de cartes, timeline, halos, icônes, accents typo, focus de champ, message de succès | hors charte — arbitrage §7.2 |
| `rgba(18,120,110)` = `#12786F` | 1 | overlay vidéo l.887 | variante foncée du teal, déjà dans le code |
| `#6FE3D8` | 1 | `.tag-teal` dans `clients.html` l.56 | hors charte, teal clair supplémentaire |
| `#EF4444` (rouge) | plusieurs | cartes « erreurs » bloc 8 actuel | hors charte — à supprimer avec le bloc, la nouvelle architecture ne le reprend pas |
| `#6B7280` | très nombreuses | tous les paragraphes | **écart silencieux** : la charte dit `#374151` |
| `#9CA3AF`, `#4B5563`, `#bbb` | plusieurs | labels, sources, réponses FAQ | gris improvisés, hors charte |

### 7.2 Le teal `#2EC4B6` — deux options

**Constat factuel.** Le teal est présent 97 fois dans 14 fichiers `.html` : `index.html` (28), `apropos.html` (7), `blog.html` (6), `calculateur-tms.html` (6, hors périmètre), `partenaires.html` (4), `faq.html` (3), `formations.html` (3), `clients.html` (2), `contact.html` (1), `plan-du-site.html` (1), plus les fichiers Sources. Ce n'est pas une dérive locale de la home : c'est une troisième couleur installée dans tout le site, jamais consignée dans le mémo.

**Option A — Régulariser (ajouter à la charte), en deux valeurs.**
Ajouter à `MEMO-SITE.md` §5 :
- `#2EC4B6` — *teal clair* : **aplats décoratifs et fonds de pastille uniquement**, toujours avec un texte `#1E2952` par-dessus. **Interdit comme couleur de texte.**
- `#12786F` — *teal foncé* : **seule valeur autorisée pour du texte, une icône ou un trait sur fond clair** (5,04:1 sur crème). Cette valeur existe déjà dans le code (overlay vidéo l.887), rien à inventer.

*Coût* : mise à jour du mémo + remplacement des ~25 usages « texte » de `#2EC4B6` par `#12786F` dans `index.html`, à répercuter progressivement sur les autres pages. Aucune régression visuelle notable.

**Option B — Éliminer.**
Remplacer tous les usages par du `#1E2952` (structure, timeline, icônes) et du `#FF914D` (accents), le `#FFDE59` restant réservé au calculateur.

*Coût* : ~97 remplacements sur 13 fichiers, chacun à arbitrer individuellement (navy ou orange selon le rôle), risque de régression visuelle sur des pages hors périmètre de ce chantier. La home se retrouve sur deux couleurs d'accent seulement, avec un risque de monotonie orange/navy sur 8 sections.

**Recommandation : Option A.** Trois raisons factuelles :
1. L'élimination est un chantier sitewide sans rapport avec le périmètre « refonte de la home », et un chantier partiel laisserait le site incohérent entre pages.
2. Le teal porte un rôle sémantique (registre santé/soin) qui complète l'orange (action commerciale) et le navy (institutionnel). Le supprimer appauvrit la palette au moment où la page passe à 8 sections et a besoin de repères visuels distincts.
3. **Le vrai problème n'est pas la couleur, c'est son usage.** Les échecs mesurés (2,17:1) viennent tous de l'emploi du teal clair *en texte* ou *sous un texte blanc*. L'encadrer en deux valeurs corrige l'accessibilité sans toucher à la palette.

**C'est une décision de marque : Céline tranche.** Cette spec est écrite pour l'option A (eyebrow `#2EC4B6` + texte navy) ; si l'option B est retenue, l'eyebrow passe en `#1E2952` / texte blanc et le reste de la spec est inchangé — aucune autre dépendance au teal.

### 7.3 Typographies

Conformité globale bonne : Encode Sans Compressed sur tous les titres et boutons, Nunito en corps. Trois écarts :
- `.hero-nav-cta { font-weight: 500 !important }` (l.117) — un bouton en Encode 500, alors que la charte impose 700-900. La police n'accepte d'ailleurs que 700/800/900 dans l'import (l.32) : le 500 est synthétisé par le navigateur, rendu approximatif. **À corriger en 700.**
- `font-weight: 300` généralisé sur les paragraphes (l.181, 237, 691, 893, 1226). La charte autorise 300-800, mais 300 à 15-16 px sur fond clair est anémique et aggrave le déficit de contraste. **Passer les paragraphes en 400**, réserver 300 aux textes ≥ 20 px.
- `Josefin Slab` : absente de `index.html`, importée quand même (l.32). Conforme à la charte (« accents ponctuels »), mais c'est une requête de police inutile sur la home. Envisager de la retirer de l'import de cette page.

### 7.4 Logo

- `logo-uptomove-web.png` utilisé correctement (ratio respecté, `width: auto`), mais à 112 px de haut en desktop — cf. §2.1.
- Pas de version SVG. Recommandation : en produire une, la nav est le seul endroit du site où le logo est affiché à trois tailles différentes.
- `logo-qualiopi.png` : absent de la home aujourd'hui, ajouté en bloc 2 — spec §6.5.
- `logo-cci-paris.png` : en footer, non modifié par ce chantier. Vérifier qu'il porte bien `width: auto` et un `alt` explicite.

---

## 8. Ce qu'il faut supprimer ou corriger dans le CSS existant

### 8.1 À supprimer (règles devenues sans objet)

| Ligne | Règle | Raison |
|---|---|---|
| l.98-103 | `.hero-glow` | cercle teal décoratif, remplacé par `.hero-dot` jaune |
| l.149 | `.hero-eyebrow-dot` | **invisible depuis toujours** : `#2EC4B6` sur fond `#2EC4B6` |
| l.156-170 | `.hero-definition`, `.hero-def-icon`, `.hero-def-text` | le `<details>` QVCT quitte le hero → réutiliser `.faq-item` dans le bloc 3 |
| l.193-199 | `.btn-teal` | 2,17:1, remplacée par le bouton fantôme navy |
| l.200-215 | `.hero-scroll`, `-label`, `-circle`, `@keyframes bounce` | la flèche « Découvrir » quitte le hero |
| l.606 | flèche « Découvrir » en styles inline | duplique les règles ci-dessus, label à 2,35:1 |
| l.140-141 | `.hero-content { align-items:center }` / `.hero-body { max-width:780px }` | incompatibles avec l'asymétrique |
| l.369, 410 | `.hero h1 { font-size: 34px / 28px }` | remplacés par l'échelle du §1.7 |

### 8.2 À corriger

| Ligne | Problème | Correction |
|---|---|---|
| l.96 | `.hero { overflow: hidden }` + nav enfant du hero | **casse `position: sticky`** — sortir la nav du hero, retirer `overflow: hidden` |
| l.87, 89 | `html`/`body` en `overflow-x: hidden` | passer `body` en `overflow-x: clip` : `hidden` crée un conteneur de défilement qui perturbe `sticky` |
| l.108 | `.hero-logo { height: 112px }` | → 64 px repos / 48 px solidifiée |
| l.116-117 | `.hero-nav-cta` blanc sur orange, weight 500 | texte `#1E2952`, weight 700 |
| l.150-153 | `.hero h1 { font-size: 76px }` | → échelle §1.7 |
| l.155 | `.accent { color: #FF914D }` | → soulignement orange, texte navy |
| l.180-183 | `.hero-sub` en `#6B7280` / 300 | → `#374151` / 400 / 18 px |
| l.188 | `.btn-orange { color: #fff }` | → `#1E2952` |
| l.261 | `.card-source { color: #bbb }` (1,92:1) | → `#6B7280` |
| l.615 | `.bc-label { color: #9CA3AF }` (2,54:1) | → `#6B7280` |
| l.621 | `bc-scroll 12s` | → 30s avec 10 logos |
| l.319-321 | `.hero-nav.scrolled` ne change que l'ombre | ajouter fond navy, hauteur, couleur des liens (§2.3) |
| l.328-334 | saut de gouttière `64px → 24px !important` | → `--gutter: clamp(20px, 5vw, 64px)`, continu |
| l.361-363 | 3 `!important` sur le sous-menu mobile | disparaissent avec le panneau navy (§2.4) |
| l.389 | `table { white-space: nowrap }` sous 900 px | ajouter `tabindex="0"`, `role="region"`, `aria-label`, et un masque dégradé à droite pour signaler le défilement |
| l.400-406 | `.sticky-mobile-cta` toujours affiché | ne l'afficher qu'après la sortie du hero (`IntersectionObserver`), sinon double CTA ; le masquer en paysage < 500 px |
| l.429-432 | `@media (min-width: 769px)` sur les témoignages | seul breakpoint à 769 px du fichier — aligner sur 900 px |

### 8.3 Dette structurelle à traiter pendant le chantier

C'est le point le plus lourd pour cette refonte.

1. **Six blocs `<style>` séparés** (l.85-262, 264-322, 324-433, 525-556, 1287-1313, 1349-…), sans ordre logique, avec des règles orphelines (`.stat-finale:hover` en l.88, avant même `body`). À fusionner en un seul bloc organisé par section.
2. **Surcharges par sélecteurs d'attribut sur les styles inline** :
   - `[style*="grid-template-columns"]` (l.337)
   - `[style*="background:#F7F6F2; border-radius:14px"]` (l.540)
   - `[style*="border-left:4px solid #EF4444"]` (l.549)
   - `[style*="font-size:44px"]` etc. (l.379-382)
   - `document.querySelector('[style*="grid-template-columns:1fr 1fr"][style*="margin-bottom:64px"]')` (l.1318)

   Ces sélecteurs cassent **silencieusement** dès qu'on retouche un espace dans un attribut `style`. Avec une refonte qui réécrit la moitié des styles inline, ils sont garantis de rompre. **Ils doivent être remplacés par des classes nommées avant toute autre modification.** C'est le prérequis technique du chantier.
3. **Styles inline massifs dans le corps** : chaque section porte sa mise en forme en attribut `style`, ce qui rend impossible toute règle responsive propre et explique le recours aux sélecteurs d'attribut ci-dessus. La refonte est l'occasion de basculer les 8 sections sur des classes.

---

## 9. Points à arbitrer par Céline

1. **Texte des boutons orange en navy** au lieu de blanc (§0.2). Corrige un échec de contraste à 2,23:1, mais change l'apparence de tous les CTA du site.
2. **Teal : option A (régulariser en deux valeurs) ou option B (éliminer)** — §7.2. Recommandation : option A.
3. **Ratio de l'image en mobile** : `clamp(180px, 32vh, 260px)` (CTA visible sans défiler) ou `4:5` comme initialement prévu (CTA sous la ligne de flottaison) — §1.9. Recommandation : le premier.
4. **Place du formulaire newsletter** : bande blanche après le CTA final (recommandé) ou colonne de footer sur navy (demande une spec de champ sur fond sombre) — §5.3.
5. **Orange en CTA primaire du hero vers le calculateur, alors que le jaune est la couleur du calculateur.** Tenable si on lit le jaune comme l'identité de la *section* calculateur (bloc 6 et nav) et l'orange comme l'action primaire de la page. À surveiller à la première maquette : si le hero semble renvoyer ailleurs que là où il renvoie, basculer le CTA primaire du hero vers le devis et laisser le calculateur au bloc 6.

---

## 10. Éléments à transmettre aux autres agents

**À l'agent CR** (via l'orchestrateur) :
- H1 : 2 lignes maximum, calibré pour 54 px en desktop dans une colonne de 640 px. Un mot ou groupe court recevra le soulignement orange.
- Sous-titre : 18-25 mots en desktop, mais **14-18 mots maximum** pour la version mobile (contrainte de ligne de flottaison, §1.9).
- `alt` de l'image du hero : à rédiger, c'est du contenu de preuve.
- `alt` du visuel d'aperçu du calculateur.
- Libellés des 6 pastilles secteurs : 1 mot chacun de préférence, 2 au maximum.

**À l'agent Dev** :
- §0.1 (sortir la nav du hero) et §8.3 point 2 (remplacer les sélecteurs d'attribut par des classes) sont des **prérequis** : à faire avant le reste.
- Assets image à produire : §1.6.
- Capture d'écran du calculateur à produire : §3.3 — depuis `calculateur-tms-web.html`, en lecture seule, **sans modifier le fichier**.
- Vérifier la lisibilité du wordmark à 44 px et l'absence de liseré blanc sur le PNG du logo : §2.1 et §2.3.
