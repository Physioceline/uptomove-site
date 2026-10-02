# Spec Design — 3 demandes visuelles
**Date** : 2026-10-02 · **Agent** : Design · **Cibles** : `index.html` (bloc 5), `clients.html`
**Cadre** : charte `MEMO-SITE.md` §5. Aucune couleur ni police hors charte introduite.
**Note d'outillage** : skill `impeccable` non installée sur ce poste — audit mené à la main sur le CSS inline des deux pages.

---

## Rappel des jetons déjà en place (à réutiliser, ne rien réinventer)

`index.html` l.101-119 : `--navy:#1E2952` · `--orange:#FF914D` · `--yellow:#FFDE59` · `--cream:#F7F6F2` · `--line:#E8E6E0` · `--text:#374151` · `--muted:#6B7280` · `--teal:#2EC4B6` (fond sombre uniquement) · `--teal-dark:#12786F` (fond clair uniquement).

Motifs de composants existants mobilisés ci-dessous :
- carte blanche : `background:#fff; border:1px solid var(--line); border-radius:14px` (`.diff-card`, `index.html` l.443)
- tuile d'icône : `44×44; border-radius:10px`, SVG 22px, `viewBox 0 0 24 24`, `stroke-width:2`, `stroke-linecap/linejoin:round` (`.diff-icon`, l.444-445)
- chevron de dépliage : pastille ronde 28px, fond `#F7F6F2`, qui passe à `#FFDE59` au survol/focus et tourne 180° à l'ouverture (`.case-toggle-chevron`, `clients.html` l.137-139)
- focus clavier : `outline:3px solid #1E2952` (`.uc-item > summary:focus-visible`, `.case-media:focus-visible`)
- logo institutionnel : `height:Xpx; width:auto; display:block` — jamais de `width` + `height` conjoints en CSS (`.proof-qualiopi img`, l.345)

---

# DEMANDE 1 — Déclencheur « Voir le tableau comparatif »

## 1.1 Constats

| # | Constat | Référence |
|---|---|---|
| C1 | Le `<summary>` est une pilule `inline-flex`, blanche, bordure `--line` (gris très clair), rayon 100px, min-height 48px. Sur fond crème `#F7F6F2`, une bordure `#E8E6E0` donne un delta de luminance quasi nul : **le contour du bouton est pratiquement invisible**. C'est la cause première du « pas assez intuitif ». | `index.html` l.450-455 |
| C2 | `.table-wrap` est en `text-align:left` alors que la section parente est `.text-center`. La pilule n'est donc **pas centrée** : elle est collée au bord gauche d'un bloc de 860px lui-même centré dans 1200px — elle flotte sans ancrage visuel. | l.449 |
| C3 | Rien n'annonce le contenu. Le libellé « Voir le tableau comparatif » ne dit ni le volume (6 critères), ni la nature (comparaison point par point), ni la valeur pour un décideur. | l.1019 |
| C4 | Le chevron est un `::after` en caractère typographique `▾` hérité de la police courante, de même couleur que le texte. Il ne se détache pas et n'a pas d'état au survol. | l.457-458 |
| C5 | **Écart technique** : seul `list-style:none` + `::-webkit-details-marker` sont neutralisés. Il manque `::marker { content:'' }`, présent lui dans `clients.html` l.125. Risque de triangle natif résiduel sur Firefox/Safari. | l.456 |
| C6 | `.table-scroll` porte `tabindex="0"` (c'est une zone scrollable sur mobile) mais **aucun style `:focus-visible`** : au clavier, on tabule dans un vide visuel. | l.459, l.1020 |
| C7 | Aucune cohérence avec `clients.html`, où le même geste (« ouvrir le détail ») est traité par une barre pleine largeur `.case-toggle` + chevron jaune. Deux grammaires de dépliage pour un seul site. | `clients.html` l.126-139 |

## 1.2 Recommandation — on tranche

**Transformer la pilule en bloc « invitation à lire » pleine largeur du conteneur 860px, sans jamais virer au CTA commercial.**

Trois arbitrages explicites :

**a) Bloc pleine largeur plutôt que pilule → OUI.** Une pilule de 230px perdue sous trois cartes de 380px n'a aucune masse. Un bloc de 860px aligné sur le `.uc-solo` déjà utilisé plus haut lit immédiatement comme « quatrième élément » du bloc 5 et donne de la place à la ligne d'accroche. Le bloc reste à 860px (et non 1200px comme `.diff-grid`) : c'est une largeur de lecture, pas une grille, et le tableau qu'il ouvre en bénéficie.

**b) Ligne d'accroche sous le libellé → OUI, c'est le cœur de la réponse à Céline.** Le problème n'est pas « on ne voit pas que c'est cliquable », c'est « on ne sait pas ce qu'on y gagne ». Une sous-ligne qui énonce le volume et la nature du contenu transforme un bouton en promesse. **Texte à faire écrire par l'agent CR** — gabarit indicatif, 110-140 signes, 2 lignes max en desktop, mentionnant le chiffre 6 et au moins deux critères concrets (« profil des formateurs », « Passeport Prévention »). Ne pas livrer en l'état.

**c) Aperçu partiel, première ligne visible → NON. Rejeté, avec raisons.**
- Techniquement, cela suppose soit de sortir la 1ʳᵉ ligne du `<details>` (deux tableaux désolidarisés = structure de données cassée pour Google et pour les lecteurs d'écran), soit un `max-height` + `mask-image` sur le contenu replié (le `<details>` n'est alors plus réellement replié : perte de l'acquis « page courte » et du pliage natif).
- Sur mobile, le tableau est déjà en défilement horizontal (`min-width:560px`, l.702) : l'aperçu afficherait une ligne tronquée à droite, ce qui donne une impression de bug, pas de richesse.
- Le signal « il y a de la matière ici » est obtenu à 100 % par la sous-ligne (b), pour un dixième de la complexité et sans toucher au comportement natif.

**d) Registre couleur — garde-fou.** Fond blanc, tuile d'icône en lavis navy, chevron qui passe au jaune `#FFDE59`. **Aucun orange `#FF914D`** : l'orange est réservé aux CTA commerciaux de la page (`.btn-primary`, `.tag-orange`). Le jaune au survol est déjà, sur `clients.html`, le signal « ceci se déplie » — on l'importe tel quel, ce qui règle au passage le constat C7.

## 1.3 Spec CSS

Remplacer `.table-summary` (l.450-458) par :

```css
.table-summary {
  cursor: pointer; list-style: none;
  display: grid; grid-template-columns: 44px 1fr 28px;
  column-gap: 16px; row-gap: 4px; align-items: center;
  padding: 20px 24px;
  background: #fff; border: 1px solid var(--line); border-radius: 14px;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.table-summary::-webkit-details-marker { display: none; }
.table-summary::marker { content: ''; }      /* corrige C5 */

.table-summary-icon {
  grid-column: 1; grid-row: 1 / span 2; align-self: center;
  width: 44px; height: 44px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(30,41,82,0.08); color: var(--navy);
}
.table-summary-icon svg { width: 22px; height: 22px; }

.table-summary-label {
  grid-column: 2; grid-row: 1;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: 17px; color: var(--navy); line-height: 1.25;
}
.table-summary-sub {
  grid-column: 2; grid-row: 2;
  font-family: 'Nunito', sans-serif; font-weight: 400;
  font-size: 14.5px; color: var(--text); line-height: 1.55;
}
.table-summary-chevron {
  grid-column: 3; grid-row: 1 / span 2; align-self: center;
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #F7F6F2; color: var(--navy); font-size: 13px; flex-shrink: 0;
  transition: transform .25s ease, background .2s ease;
}
```

États :

```css
/* survol */
.table-summary:hover { border-color: rgba(30,41,82,0.32); box-shadow: 0 10px 24px rgba(30,41,82,0.07); }
.table-summary:hover .table-summary-chevron { background: var(--yellow); }

/* focus clavier */
.table-summary:focus-visible { outline: 3px solid var(--navy); outline-offset: 3px; }
.table-summary:focus-visible .table-summary-chevron { background: var(--yellow); }

/* ouvert : le déclencheur devient l'en-tête du tableau */
.table-wrap[open] .table-summary { border-radius: 14px 14px 0 0; }
.table-wrap[open] .table-summary-chevron { background: var(--yellow); transform: rotate(180deg); }
.table-scroll {
  margin-top: 0; background: #fff;
  border: 1px solid var(--line); border-top: none; border-radius: 0 0 14px 14px;
  padding: 18px;
}
.table-scroll:focus-visible { outline: 3px solid var(--navy); outline-offset: -3px; }  /* corrige C6 */
```

Pas de `transform` sur le bloc au survol (contrairement aux `.btn`) : c'est un élément large, un décalage de 2px y est perçu comme un tremblement. Ombre + bordure + chevron jaune suffisent. Le `@media (prefers-reduced-motion)` déjà en place neutralise les transitions, le chevron bascule alors instantanément — comportement correct, rien à ajouter.

**Markup attendu** (pour Dev — le texte de la sous-ligne vient de CR) :

```html
<summary class="table-summary">
  <span class="table-summary-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="7" height="16" rx="1"></rect>
      <rect x="14" y="4" width="7" height="16" rx="1"></rect>
      <line x1="3" y1="9" x2="10" y2="9"></line>
      <line x1="14" y1="9" x2="21" y2="9"></line>
    </svg>
  </span>
  <span class="table-summary-label">Voir le tableau comparatif</span>
  <span class="table-summary-sub">[ligne d'accroche — agent CR]</span>
  <span class="table-summary-chevron" aria-hidden="true">&#9662;</span>
</summary>
```

Icône : deux colonnes avec filet d'en-tête = pictogramme de tableau comparatif. Même famille graphique que les trois `.diff-icon` (24×24, trait 2, bouts arrondis). Supprimer l'ancien `::after` `▾`, sinon double chevron.

Ne **pas** ajouter l'attribut `open` : le repli par défaut reste l'acquis.

## 1.4 Responsive

```css
/* ≤ 900 px */
.table-scroll { padding: 14px 0; }      /* le tableau affleure les bords du cadre :
                                           évite la perte du padding droit en défilement horizontal */

/* ≤ 599 px */
.table-summary { grid-template-columns: 40px 1fr 28px; column-gap: 12px; padding: 18px 18px; }
.table-summary-icon { width: 40px; height: 40px; grid-row: 1; }
.table-summary-icon svg { width: 20px; height: 20px; }
.table-summary-label { font-size: 16px; }
.table-summary-sub { grid-column: 1 / -1; grid-row: 2; font-size: 13.5px; margin-top: 6px; }
.table-summary-chevron { grid-row: 1; }
```

Sous 600px, la sous-ligne passe en pleine largeur sur une 2ᵉ rangée : en la laissant en colonne 2, il ne resterait que ~185px utiles sur un écran de 320px.
Zone cliquable : 18+22+6+2×19+18 ≈ 103px de haut, très au-dessus des 48px minimum. Chevron en `flex-shrink:0`, jamais écrasé. `.table-summary` n'est pas un `.btn`, la règle `.btn { width:100% }` de l.729 ne l'atteint pas.

## 1.5 Option (à trancher par l'orchestrateur, pas indispensable)

Puce de décompte « 6 critères » à droite du libellé, calquée sur `.pillar-label` mais en lavis navy :
`font-size:11.5px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding:4px 10px; border-radius:100px; background:rgba(30,41,82,0.07); color:var(--navy);`
Je ne la recommande pas en première intention : l'information passe déjà dans la sous-ligne, et une puce de plus charge un bloc qui doit rester calme.

---

# DEMANDE 2 — Logo « Mon Passeport Prévention » dans l'encart navy

## 2.1 Constats sur le fichier fourni

`logo-passeport-prevention.png`, 665×300, ratio 2,217.
Structure : « MON » et « PASSEPORT » en capitales blanches sur blocs orange pleins ; **« PRÉVENTION » à l'inverse, en capitales orange sur bande claire**. Les contre-formes de la composition (le décroché en escalier à droite de « MON », à gauche de « PASSEPORT ») sont en transparence.

**Point bloquant** : si la bande de « PRÉVENTION » est elle aussi transparente — ce que la structure du fichier laisse supposer — alors posé directement sur `#1E2952`, le dernier mot du logo devient de l'orange sur navy. Contraste ≈ 2,6:1, et surtout **l'apparence du logo officiel est altérée** : on lui substitue un fond qui n'est pas le sien. Pour un logo institutionnel, c'est la même interdiction que pour Qualiopi.

Second point : l'orange du logo officiel (≈ `#E8762F`, dense et rougi) **n'est pas** `#FF914D`. Les juxtaposer sur un même fond créerait un « presque pareil » qui lit comme une erreur d'impression.

## 2.2 Recommandation — plaque blanche, colonne de droite

**Le logo est posé sur une plaque blanche arrondie, dans une deuxième colonne à droite du texte en desktop.**

Cette plaque règle d'un coup les trois problèmes :
1. elle restitue au logo le fond clair que sa composition suppose, sans le retoucher, le détourer ni le recolorer ;
2. elle isole l'orange officiel de la charte — aucune adjacence directe entre `#E8762F` et `#FF914D` ;
3. elle ne concurrence pas le badge jaune : le badge est une pilule translucide fine en haut à gauche (`rgba(255,222,89,0.16)` + filet `0.45`, l.480), la plaque est un bloc opaque en bas à droite. Poids différents, positions opposées, aucune compétition.

**Rejeté explicitement** : le filigrane (opacité réduite ou fondu dans le dégradé navy) = altération d'un logo institutionnel, interdit. Le logo au-dessus du titre = il vole la primeur au badge « Nouveau · Obligatoire 2026 » qui doit rester l'entrée de lecture. Le logo détouré sans plaque = voir 2.1.

**Garde-fou** : ne rien ajouter d'orange `#FF914D` à l'intérieur de `.passeport`. L'encart doit rester navy + blanc + jaune + la plaque.

## 2.3 Spec CSS

Encapsuler les trois enfants actuels (`.passeport-badge`, `h3`, `p`) dans un `.passeport-text`, puis ajouter la plaque en dernier dans le DOM.

```css
.passeport {
  background: linear-gradient(135deg,#1E2952 60%,#2a3870);
  border-radius: 20px; padding: 36px 40px; margin-top: 40px;
  position: relative; overflow: hidden; text-align: left;
  display: flex; align-items: center; gap: 36px;          /* ajouté */
}
.passeport-text { flex: 1 1 auto; min-width: 0; }
.passeport p { margin-bottom: 0; }                         /* le <p> ferme la colonne */

.passeport-logo {
  flex: 0 0 auto;
  background: #fff; border-radius: 12px;
  padding: 16px 20px;
  display: flex; align-items: center; justify-content: center;
}
.passeport-logo img { height: 80px; width: auto; max-width: 100%; display: block; }
```

Rendu desktop : logo 80 × 177px, plaque ≈ 217 × 112px. Lisibilité des trois lignes de capitales très grasses : largement suffisante à cette taille. On reste dans la même famille d'échelle que le logo Qualiopi du bandeau de preuve (`height:56px`, l.345) sans le dépasser abusivement — le Passeport est un dispositif, pas une certification de l'organisme.

Pas d'ombre portée, pas d'état `:hover`, rayon 12px (et non 8px comme les `.btn`, ni 100px comme les pilules) : la plaque ne doit pas être prise pour un bouton.

**Markup attendu** :

```html
<div class="passeport-logo">
  <img src="logo-passeport-prevention.png" width="665" height="300"
       loading="lazy" decoding="async"
       alt="Logo officiel du dispositif Mon Passeport Prévention">
</div>
```

- `width`/`height` natifs obligatoires (réservation de place, pas de saut de mise en page).
- `height` en CSS + `width:auto` : **jamais** les deux dimensions imposées, aucune déformation possible.
- Si l'orchestrateur décide d'en faire un lien, il ne peut pointer que vers la page officielle du dispositif, en `target="_blank" rel="noopener"`. C'est un arbitrage UX, pas Design.
- Le `alt` ci-dessus est un gabarit : à valider par CR/SEO.

## 2.4 Responsive

```css
/* ≤ 900 px — déjà : .passeport { padding: 30px 26px } */
.passeport { flex-direction: column; align-items: flex-start; gap: 24px; }
.passeport-logo { padding: 14px 18px; }
.passeport-logo img { height: 64px; }

/* ≤ 599 px — déjà : .passeport { padding: 26px 22px } */
.passeport-logo { padding: 12px 16px; }
.passeport-logo img { height: 56px; }
```

Le logo étant **dernier dans le DOM**, le passage en colonne le place naturellement sous le paragraphe, aligné à gauche : il se lit comme un cachet de fin de bloc. Hiérarchie préservée (badge → titre → texte → logo).

Vérification du point le plus serré : écran 320px → gouttière `--gutter` 20px de chaque côté, encart `padding:22px` → 236px disponibles. Plaque à `height:56px` = 124 + 32 = 156px de large. Marge confortable, et `max-width:100%` sécurise le cas limite.

`.passeport` conserve `overflow:hidden` : aucun risque de débordement de la plaque hors des angles arrondis.

---

# DEMANDE 3 — Étude de cas Mutuale, une seule photo

## 3.1 Constats

Géométrie actuelle (`clients.html` l.84, 109-120) : `.case-study` max-width 820px, `--case-pad:48px` → **rangée utile de 724px**. À 3 colonnes et `gap:16px`, chaque vignette fait **230,67 × 173px** (4:3). `.case-media--2` reprend la même largeur de colonne et occupe deux tiers de rangée (477px), centrée.

La règle implicite déjà posée par Chavigny est donc : **moins de photos → rangée plus étroite, hauteur de rangée inchangée (173px)**.

Appliquer strictement cette règle à une photo unique donnerait une vignette de 230 × 173px seule dans une carte de 724px, soit 494px de vide. C'est précisément le « pauvre » que Céline veut éviter. Avec une seule photo, on ne peut pas conserver à la fois la largeur de colonne et la hauteur de rangée — il faut arbitrer.

Autre constat : l'image source est en portrait 820×1093, alors que les quatre autres fiches sont en paysage 820×615.

## 3.2 Recommandation — on tranche

**Cadre unique, deux tiers de rangée (strictement la largeur de la rangée Chavigny), en ratio 4:3.**

Soit **477 × 358px** en desktop.

Arbitrage, argumenté :
- **On conserve la largeur, on lâche la hauteur.** La largeur est ce qui crée le rythme vertical de la page : les bords gauche et droit de la photo Mutuale s'alignent exactement sur ceux de la rangée Chavigny, à tous les points de rupture, puisqu'on réutilise la formule `--case-row` existante — aucun nombre magique nouveau. L'œil, qui descend la page, retrouve un alignement connu.
- **Le ratio 4:3 est non négociable** : c'est la signature des cinq fiches. Une photo unique dans un ratio différent se verrait immédiatement comme un accident.
- **Le recadrage paysage améliore cette photo**, il ne la mutile pas. Le tiers bas du cliché n'est que sol gris, embase du fauteuil et coin de tabouret. Un recadrage 4:3 conserve 615px sur 1093 (56 % de la hauteur) et peut cadrer exactement sur la bande utile : écran mural, kakémono, dossier du fauteuil, colonne vertébrale.
- Surface occupée : 477 × 358 = 171 k px² contre 125 k px² pour une rangée de trois. Plus présent, mais du même ordre — la fiche Mutuale ne devient pas la vedette de la page.

**Écartées** : vignette seule au gabarit standard (230px → l'effet « pauvre » recherché par la demande) ; cadre paysage pleine largeur de carte 724px en 16:9 (ne conserverait que 42 % de la hauteur source, et une fiche à une photo deviendrait la plus imposante des cinq — contresens) ; conservation du portrait natif (romprait le ratio commun et créerait une colonne de 600px de haut sur mobile).

## 3.3 Cadrage

```css
.case-media--1 img { object-position: center 20%; }
```

Calcul : recadrage 4:3 d'une source 820×1093 → bande de 615px conservée, débord de 478px. `object-position: center 20%` place la bande sur y ≈ 96 → 711. Elle contient l'écran mural (y ≈ 200-360), le kakémono violet, le dossier du fauteuil et la colonne vertébrale (y ≈ 370-700), et évacue le sol. **Plage acceptable : 15 % à 25 %**, à caler à l'œil ; au-delà de 30 % la mention « atelier » du bas de l'écran commence à être rognée, en deçà de 10 % on reprend du faux plafond et des néons.

## 3.4 Spec CSS

```css
/* Une seule photo : cadre unique, largeur deux tiers (= rangée Chavigny) */
.case-media--1 {
  grid-template-columns: 1fr;
  width: calc((var(--case-row) - 2 * var(--case-gap)) / 3 * 2 + var(--case-gap));
}
.case-media--1 img { object-position: center 20%; }
```

Hérite de `.case-media` : `aspect-ratio:4/3`, `object-fit:cover`, `border:1px solid #E8E6E0`, `border-radius:12px`. Aucun autre style à écrire.

Rendus : **477 × 358px** desktop (`--case-row-max:100%`) · **396 × 297px** tablette 601-900px (`--case-row-max:600px`, `--case-gap:12px`).

**Markup attendu** :

```html
<div class="case-media case-media--1">
  <picture>
    <source type="image/webp" srcset="mutuale-1.webp">
    <img src="mutuale-1.jpg" width="820" height="1093" loading="lazy" decoding="async"
         alt="[descriptif de la photo — agent CR]">
  </picture>
</div>
```

**Accessibilité — à ne pas rater** : supprimer `tabindex="0"`, `role="group"` et `aria-label` sur `.case-media--1`. Ces attributs n'existent sur les quatre autres fiches que parce que le conteneur devient une zone à défilement sur mobile. Avec une photo unique, il ne défile plus : les laisser créerait une **tabulation clavier dans le vide**. L'information passe intégralement par le `alt` de l'image (rédigé par CR).

Les fichiers `mutuale-1.jpg` et `mutuale-1.webp` sont bien présents à la racine — rien à produire.

## 3.5 Responsive mobile (≤ 600 px)

Le bloc `@media (max-width: 600px)` l.223-236 transforme `.case-media` en rangée flex à `scroll-snap`, vignettes à `flex:0 0 78%`, avec débordement négatif des marges. **Tout cela est contre-productif pour une photo unique** : on obtiendrait un cadre à 78 % de la largeur avec 22 % de vide à droite, un conteneur scrollable qui ne scrolle pas et une barre de défilement fantôme.

Neutraliser, à placer **après** le bloc l.223-236 :

```css
@media (max-width: 600px) {
  .case-media--1 {
    display: block; width: auto;
    overflow: visible; scroll-snap-type: none;
    margin-inline: 0; padding-inline: 0; padding-bottom: 0;
  }
  .case-media--1 > picture { flex: none; display: block; }
}
```

La photo occupe alors toute la largeur utile de la carte (≈ 283px sur un écran de 375px, soit 283 × 212px en 4:3), sans débordement ni défilement. Vérifier à 320px : ≈ 232 × 174px, lisible, l'écran mural et la colonne vertébrale restent identifiables au cadrage 20 %.

Ajouter aussi, par cohérence avec la règle `prefers-reduced-motion` l.248 : rien à faire, `.case-media--1` n'ayant plus de `scroll-snap-type`, la surcharge existante est sans effet.

## 3.6 Deux remarques pour l'orchestrateur

1. **La fiche n'est pas pauvre pour autant.** Elle conserve le logo client (`logo-mutuale.png`, présent à la racine ; `.case-logo` à `height:56px`), la pilule jaune, le sous-titre et la barre `.case-toggle` pleine largeur. La richesse perçue ne repose pas uniquement sur le nombre de photos.
2. **Légende sous la photo** : techniquement simple (`.case-media-note`, Nunito 13px, `--muted`, centré, `margin-top:10px`). Mais une légende sur la seule fiche Mutuale créerait une asymétrie plus voyante que le vide qu'elle comble. **Si on l'adopte, c'est pour les cinq fiches ou aucune**, et c'est alors un chantier CR à part entière. Je ne la recommande pas dans le cadre de cette demande.

---

## Observation annexe (hors périmètre des trois demandes, non bloquante)

`.tag-orange` (`index.html` l.152) applique `color:#FF914D` sur un fond `rgba(255,145,77,0.12)` posé sur le crème `#F7F6F2` : contraste réel ≈ 2,2:1, sous le seuil WCAG AA même pour du grand texte. L'étiquette « Notre différence » du bloc 5 est concernée, comme toutes les autres `.tag-orange` du site. Correctif conforme à la doctrine couleur de Céline (la règle dépend du fond) : passer le texte en `var(--navy)` en conservant le lavis orange en fond, ou reprendre le motif `.tag-teal` déjà présent l.153 qui, lui, utilise bien une variante foncée sur fond clair. À traiter dans un chantier dédié, site entier, pas ici.
