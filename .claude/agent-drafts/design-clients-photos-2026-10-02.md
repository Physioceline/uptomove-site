# Spec visuelle — photos d'intervention en en-tête des études de cas (`clients.html`)

Agent Design · 2 octobre 2026 · chantier « photos visibles d'emblée »
Référence charte : `MEMO-SITE.md` §5. Structure arbitrée en amont (agent UX/UI) : non remise en cause.
Note : la skill `impeccable` n'est pas installée sur ce poste ; audit mené à la main sur le CSS existant (`clients.html` l. 84-122 et 172-195) et sur l'inspection visuelle des 11 photos.

---

## 0. Ce que j'ai vérifié par moi-même

J'ai ouvert les 11 photos. Elles ne sont pas homogènes et ça conditionne toute la spec :

| Fichier | Dimensions | Ratio | Sujet | Point sensible |
|---|---|---|---|---|
| `ratp-1.jpg` | 1000×750 | 4:3 | Siège conducteur + colonne vertébrale anatomique | Colonne à gauche-centre, volant à droite : ne pas rogner les côtés |
| `ratp-2.jpg` | 1000×750 | 4:3 | Salle de formation, formatrice + écran « PROGRAMME » + kakémono | Écran à droite (x 65-95 %) : tout rognage latéral coupe le message |
| `ratp-3.jpg` | 810×1080 | **3:4 portrait** | 5 agents dans un bus, squelette + livrets | Visages à 27-40 % de la hauteur |
| `chavigny-1.jpg` | 900×675 | 4:3 | Groupe autour d'une table, écran + kakémonos | Visages floutés (anonymisation) |
| `chavigny-2.jpg` | 900×675 | 4:3 | Groupe debout en exercice d'étirement | Têtes à 22 % de la hauteur, pieds en bas de cadre |
| `daiichi-1.jpg` | 1000×750 | 4:3 | Atelier en action, formatrice debout | — |
| `daiichi-2.jpg` | ~800×800 | **1:1 carré** | Écran « Économies gestuelles et posturales SÉDENTAIRE » | **Filigrane « ÉVÉNEMENTS » en haut à droite** (élément graphique étranger à la charte) |
| `daiichi-3.jpg` | 1000×1333 | **3:4 portrait** | Salle préparée, écran + 2 kakémonos | Contenu utile dans le tiers haut ; moitié basse = table vide |
| `daiichi-3-top.jpg` | 1000×667 | 3:2 | **Même photo déjà recadrée en paysage** | Fichier présent à la racine mais **jamais appelé dans le HTML** |
| `vsf-1.jpg` | 1000×750 | 4:3 | Échauffements, bras levés, écran « LES ÉCHAUFFEMENTS » | Mains levées à 30 % de la hauteur |
| `vsf-2.jpg` | 1000×1333 | **3:4 portrait** | Entrepôt, rayonnages, une personne (visage flouté) | **Aucune intervention visible** : c'est une photo de contexte, pas d'atelier |
| `vsf-3.jpg` | 1000×667 | 3:2 | Échauffement collectif sur le parking logistique | Beaucoup de ciel en haut |

Deux constats à faire remonter à Céline avant intégration, hors CSS :
- **`daiichi-2` porte un filigrane « ÉVÉNEMENTS »** (typo et parenthèses décoratives étrangères à la charte). Le recadrage proposé ci-dessous le fait disparaître mécaniquement — c'est un effet heureux, pas une solution : si la photo devait un jour être réutilisée ailleurs, il faudrait une version propre.
- **`vsf-2` ne montre pas d'intervention.** Dans un bandeau censé dire « voilà ce qu'on fait » au premier coup d'œil, c'est la plus faible des 11. Elle reste défendable en 3e position (illustration du terrain), jamais en 1re.

---

## 1. Bloc photos `.case-media` — spec complète

### 1.1 Principe

Un seul composant, `.case-media`, placé en contenu statique de `.case-study`, juste après `.case-header`. Une seule variante, `.case-media--2`, pour Chavigny. Aucun nouveau nom de classe au-delà de ces deux-là, aucune nouvelle couleur introduite.

### 1.2 Ratio : uniforme, **4 / 3**, à tous les paliers

C'est le point à trancher et je tranche : **ratio uniforme obligatoire**, et ce ratio doit être **4:3**.

- Un bandeau de 3 vignettes côte à côte sous un titre centré ne tolère pas des hauteurs différentes : la moindre irrégularité se lit comme un bug, pas comme une respiration. « Laisser respirer les portraits » dans une rangée horizontale produit un peigne.
- 4:3 parce que **6 photos sur 11 sont déjà en 4:3** : elles ne subissent alors *aucun* recadrage. Le 3:2 (autre candidat naturel) leur rognerait 11 % de hauteur sans contrepartie.
- 4:3 est aussi le plus clément pour les portraits : il en conserve une bande de **56 %** de la hauteur, contre 50 % en 3:2.
- Hauteur obtenue sur desktop : **≈ 173 px**, soit le gabarit actuel (180 px) à 7 px près. Aucune rupture de rythme avec le reste de la page.

Implémentation : `aspect-ratio: 4 / 3` sur l'`<img>`, **pas** de `height` fixe. La hauteur suit la largeur à tous les paliers, ce qui évite d'avoir à maintenir trois valeurs.

### 1.3 Dimensions par palier

Tout est piloté par une variable de gouttière, pour que la variante 2 photos reste exacte sans valeur magique.

| Palier | Colonnes | Gouttière `--case-gap` | Largeur de vignette | Hauteur (4:3) |
|---|---|---|---|---|
| **Desktop ≥ 901 px** | 3 | 16 px | ≈ 231 px | **≈ 173 px** |
| **Tablette 601-900 px** | 3 | 12 px | 192 px | **144 px** |
| **Mobile ≤ 600 px** | scroller, items à 78 % | 12 px | ≈ 232 px (écran 390) | **≈ 174 px** |

Sur tablette, la demande était « ~140 px ». En fluide pur, 3 colonnes à 4:3 donnent 120 px à 601 px de large et 186 px à 900 px — trop variable. Je cale donc le bloc à `max-width: 600px; margin-inline: auto` entre 601 et 900 px : colonnes de 192 px, **hauteur 144 px**, cible atteinte, 3 colonnes conservées, ratio conservé. Le bloc est un peu plus étroit que le texte au-dessus : avec une carte centrée, ça se lit comme un resserrement volontaire.

### 1.4 Traitement de bord

- **Rayon** : `12 px` — valeur déjà en place sur les vignettes actuelles et sur `.logo-chip` (l. 70). On ne change pas.
- **Liseré** : `border: 1px solid #E8E6E0` (jeton `--line` du site). Nécessaire, pas décoratif : `daiichi-3` (plafond blanc), `vsf-3` (ciel gris pâle) et `daiichi-2` (mur clair) se dissolvent sinon dans le fond blanc de la carte. Le `box-sizing: border-box` global (l. 15) absorbe le pixel.
- **Ombre portée** : **non**. La carte `.case-study` porte déjà la hiérarchie d'élévation ; 11 ombres sur une page en ajouteraient du bruit sans information.
- **Pas d'état de survol, pas de `cursor:pointer`, pas de `transform`.** Les photos sortent du `<summary>` : elles ne sont plus cliquables. Leur donner une réaction au survol créerait une fausse affordance — c'est exactement le piège que l'arbitrage cherchait à éviter.

### 1.5 Articulation avec le logo et le titre

L'en-tête devient une pile verticale centrée, en entonnoir : logo (signe) → nom (identité) → sous-titre (promesse) → photos (preuve). Rythme proposé :

```
.case-logo        56 px de haut, margin-bottom 20 px   (26 px aujourd'hui)
.case-pill        inchangé
.case-title-row   margin-bottom 10 px                  (inchangé)
.case-subtitle    margin-bottom 22 px                  (26 px aujourd'hui, l. 110)
.case-media       margin-top 0
```

Les deux resserrements (26→20 et 26→22) rapprochent la preuve photo de la promesse écrite : aujourd'hui le `margin-bottom:26px` du sous-titre était suivi d'un `margin-top:32px` sur les photos, soit 58 px de vide. Sous les photos, avant la ligne de dépliement : 32 px (voir §4).

### 1.6 Ordre d'affichage recommandé

La 1re photo est la seule entièrement visible sur mobile et la première lue partout. Elle doit porter l'intervention, pas le décor. Recommandation (arbitrage final à Céline si elle préfère un autre récit) :

- **RATP** : `ratp-2` (salle, formatrice, écran PROGRAMME) → `ratp-3` (groupe + squelette) → `ratp-1` (siège + colonne). `ratp-1` est la plus belle image mais la seule où l'on ne voit personne.
- **Chavigny** : `chavigny-2` (groupe en mouvement) → `chavigny-1`.
- **Daiichi** : `daiichi-1` (atelier en action) → `daiichi-2` (écran EGP) → `daiichi-3-top` (salle préparée).
- **VSF** : `vsf-1` (échauffements) → `vsf-3` (échauffement collectif extérieur) → `vsf-2` (entrepôt).

---

## 2. Le cadrage — règle d'`object-position`

### 2.1 La règle

> **Fenêtre 4:3, `object-fit: cover`, `object-position: center` partout. Une seule exception, et elle disparaît si l'on utilise `daiichi-3-top.jpg`.**

Vérification photo par photo, avec la fenêtre 4:3 :

| Source | Recadrage subi | Verdict |
|---|---|---|
| 6 photos en 4:3 (`ratp-1`, `ratp-2`, `chavigny-1`, `chavigny-2`, `daiichi-1`, `vsf-1`) | **aucun** | `center` |
| `vsf-3` (3:2) | −5,5 % de largeur de chaque côté | `center` : les personnes en bord de cadre restent entières |
| `daiichi-2` (1:1) | −12,5 % de hauteur en haut et en bas | `center` : **supprime le filigrane « ÉVÉNEMENTS »** (situé à 3-8 % de la hauteur) et garde l'écran |
| `ratp-3` (3:4) | bande conservée : 22 % → 78 % de la hauteur | `center` : hauts de têtes à 27 % → 54 px d'air au-dessus ; livrets et bassin du squelette dans le cadre ; seuls les pieds sautent |
| `vsf-2` (3:4) | bande 22 % → 78 % | `center` : rayonnages, personne (58-68 %) et hauts de caisses conservés |
| `daiichi-3` (3:4) | bande 22 % → 78 % | **échec** : l'écran et le haut des kakémonos (19-30 %) sont coupés, il ne reste qu'une table vide |

### 2.2 Le cas `daiichi-3` : deux options, je recommande la première

1. **Utiliser `daiichi-3-top.jpg`** (déjà présent à la racine, 1000×667, c'est exactement le recadrage haut qui manquait). Aucune règle CSS particulière, `object-position: center` reste universel. **À vérifier avec l'agent Dev** : ce fichier faisait-il partie des 11 photos optimisées en WebP ? Si non, il faut l'optimiser au même format (largeur 820, WebP + repli JPEG) avant intégration.
2. Si l'optimisation de `daiichi-3-top` n'est pas faisable tout de suite : garder `daiichi-3.jpg` avec **une seule surcharge** `object-position: center 32%` (bande 14 % → 70 % : écran, deux kakémonos et documents dans le cadre).

### 2.3 Règle générale pour les photos à venir

Fenêtre 4:3, `center` par défaut. On ne surcharge `object-position` que si le sujet utile est dans le **tiers haut** d'une photo portrait (cas d'un écran, d'un kakémono, d'un tableau) — valeur alors entre 28 % et 35 %. Jamais de surcharge horizontale : aucune de ces photos ne supporte un rognage latéral.

### 2.4 Faut-il laisser respirer les portraits ? Non

Deux raisons concrètes, en plus de l'argument de rythme :
- Les 3 portraits racontent tous leur histoire dans leur bande centrale haute (visages, squelette, écran). Le bas de cadre est du sol, de la table ou des chaussures. Les afficher en entier, c'est donner de la surface à ce qui ne dit rien.
- `chavigny-1`, `chavigny-2` et `vsf-2` ont des **visages floutés**. Plus la vignette est grande, plus le floutage se voit. Rester à 144-175 px de haut maintient ces photos dans un registre où l'anonymisation ne saute pas aux yeux. C'est un argument de plus pour ne pas agrandir les portraits.

---

## 3. Chavigny et ses 2 photos

**Tranché : 2 vignettes au même gabarit que les cartes à 3 photos, centrées, avec de l'air de part et d'autre.** Pas de 2 colonnes pleine largeur, pas de trou dans une grille de 3.

Pourquoi :
- **2 colonnes pleine largeur** donneraient des vignettes de 354×265 px, soit une rangée **50 % plus haute** que celle des trois autres cartes. En faisant défiler les 4 études de cas, c'est Chavigny qui paraîtrait anormal — exactement l'effet qu'on veut éviter.
- **Grille de 3 avec une case vide** : avec une mise en page centrée, un vide à droite se lit comme une image qui n'a pas chargé.
- **2 vignettes centrées au même gabarit** : la carte garde la même hauteur de bandeau que les autres, le centrage reprend celui du logo, du titre et du sous-titre au-dessus. Rien ne signale un manque, parce que rien n'est aligné sur une grille de 3.

Largeur du bloc = deux tiers de la rangée, soit, sans valeur en dur :

```
max-width: calc((100% - 2 * var(--case-gap)) / 3 * 2 + var(--case-gap));
margin-inline: auto;
```

(= 477 px sur desktop, 396 px sur tablette). Sur mobile, la contrainte saute : le scroller reprend la main et Chavigny fonctionne à l'identique, avec 2 items dont le second dépasse.

Note pour Céline : la seule vraie solution à ce déséquilibre serait une 3e photo Chavigny. Il n'y en a pas dans `Sources/`. La spec ci-dessus la rendrait d'ailleurs indolore à ajouter (il suffirait de retirer la classe `--2`).

---

## 4. La ligne de dépliement `.case-toggle`

Elle remplace la pastille ronde isolée `.case-toggle-icon` (l. 117-119). Le modèle existe déjà sur le site : `.uc-item > summary` sur `index.html` (l. 385-406) — ligne pleine largeur, libellé à gauche, pastille ronde en bout, changement de fond à l'ouverture. **On dérive de ce patron plutôt que d'en inventer un.**

### 4.1 Géométrie

Ligne **pleine largeur de la carte**, débordant le padding latéral pour que le fond de survol atteigne les bords : c'est ce qui la fait lire comme une commande et non comme une phrase. Pour que les marges négatives restent synchronisées avec le padding de la carte aux deux paliers, introduire une variable :

```
.case-study { --case-pad: 48px; padding: 52px var(--case-pad); }
@media (max-width:900px) { .case-study { --case-pad: 22px; padding: 36px var(--case-pad); } }

.case-toggle {
  display:flex; align-items:center; justify-content:center; gap:10px;
  min-height:52px; padding:16px var(--case-pad);
  margin:32px calc(-1 * var(--case-pad)) -52px;   /* colle la ligne au bord bas de la carte */
  border-top:1px solid #E8E6E0;                   /* le séparateur remonte ici */
  border-radius:0 0 19px 19px;                    /* 20px de la carte − 1px de bordure */
  font-family:'Encode Sans Compressed', sans-serif;
  font-weight:700; font-size:15px; letter-spacing:.2px;
  color:#1E2952; cursor:pointer;
  transition:background .2s ease;
}
.case-details[open] .case-toggle { margin-bottom:0; border-radius:0; }
@media (max-width:900px) { .case-toggle { margin-bottom:-36px; } }
```

Si cette ligne pleine largeur pose problème à l'intégration, repli acceptable : garder `.case-toggle` dans le padding de la carte (`margin:32px 0 0; padding:14px 20px;`), le séparateur reste correct, seule la zone de survol est moins généreuse.

### 4.2 Contenu et états

Structure : `[ libellé texte ] [ pastille ronde 28 px avec chevron ▾ ]`, l'ensemble centré, dans la continuité du centrage de la carte.

| État | Fond de la ligne | Texte | Pastille | Chevron |
|---|---|---|---|---|
| **Repos** | transparent | `#1E2952` | `#F7F6F2` | `#1E2952`, 0° |
| **Survol / `:hover`** | `#F7F6F2` | `#1E2952` | `#FFDE59` | `#1E2952`, 0° |
| **Focus clavier** | `#F7F6F2` | `#1E2952` | `#FFDE59` | `#1E2952` | + `outline:3px solid #1E2952; outline-offset:-3px` sur `.case-details > summary:focus-visible` (jeton identique à `index.html` l. 137 et 406 ; décalage négatif parce que la ligne touche le bord de la carte) |
| **Ouvert `[open]`** | `#F7F6F2` | `#1E2952` | `#FFDE59` | `#1E2952`, **rotation 180°** |

Le jaune au survol et à l'ouverture reprend exactement le comportement actuel (l. 118-119) : on ne change pas le langage, on l'élargit à toute la ligne.

Transition du chevron : `transform .25s ease` (valeur déjà en place l. 117).

### 4.3 Deux libellés à demander à l'agent CR

Le libellé change entre l'état fermé et l'état ouvert. Mécanisme sans JS :

```html
<span class="case-toggle-label" data-state="closed">[libellé fermé]</span>
<span class="case-toggle-label" data-state="open">[libellé ouvert]</span>
```
```css
.case-details .case-toggle-label[data-state="open"]   { display:none; }
.case-details[open] .case-toggle-label[data-state="open"]   { display:inline; }
.case-details[open] .case-toggle-label[data-state="closed"] { display:none; }
```

**À transmettre à l'agent CR** : il faut **deux** libellés de 3 à 5 mots (fermé / ouvert), pas un seul. Si CR n'en fournit qu'un, le mécanisme ci-dessus se réduit à un seul `<span>` sans dommage.

### 4.4 Nom accessible : à ne pas oublier

Le `<h3>` sortant du `<summary>`, le nom accessible du bouton de dépliement se réduit au libellé — **identique pour les 4 cartes**. Un lecteur d'écran listant les éléments interactifs entendra quatre fois la même chose. Ajouter dans le `<summary>`, après le libellé :

```html
<span class="visually-hidden"> — RATP, Centre Bus Belliard</span>
```

en réutilisant la classe `.visually-hidden` déjà employée sur `index.html` (l. 1126) — à remonter en règle CSS plutôt qu'en style inline à cette occasion.

---

## 5. Le scroller mobile ≤ 600 px

### 5.1 Base

```css
@media (max-width: 600px) {
  .case-media, .case-media--2 {
    display:flex; gap:var(--case-gap);          /* 12px */
    max-width:none;                              /* annule la contrainte Chavigny */
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    scroll-padding-inline:var(--case-pad);
    overscroll-behavior-x:contain;
    margin-inline:calc(-1 * var(--case-pad));    /* pleine largeur de carte */
    padding-inline:var(--case-pad);
    padding-bottom:10px;                         /* place pour la barre */
    -webkit-overflow-scrolling:touch;
  }
  .case-media > img { flex:0 0 78%; scroll-snap-align:start; }
}
```

Le débord pleine largeur est important : la première photo s'aligne sur le texte, mais la bande peut courir jusqu'au bord de la carte. Une rangée qui s'arrête proprement à 22 px du bord ne donne pas envie d'être poussée.

Hauteur obtenue : sur un écran de 390 px, largeur utile 298 px → item 232 px → **174 px de haut**. Sur un écran de 360 px → 161 px. C'est la cible « ~160 px » demandée, atteinte sans hauteur codée en dur.

### 5.2 Indicateur de défilement

**Le dépassement à 78 % suffit comme affordance principale** : un fragment de photo coupé net au bord droit est le signal le plus lisible qui soit, et il est gratuit. Je ne recommande **pas** de dégradé ni de masque sur les bords : ils assombrissent une photo, c'est-à-dire exactement ce que ce chantier cherche à mettre en avant, et en CSS pur ils restent visibles même arrivé en fin de course — un indicateur qui ment.

Un complément utile en revanche, parce qu'il dit *combien* il reste : **conserver et styler la barre de défilement** plutôt que la masquer.

```css
.case-media { scrollbar-width:thin; scrollbar-color:rgba(30,41,82,.35) #EFEFEF; }
.case-media::-webkit-scrollbar { height:4px; }
.case-media::-webkit-scrollbar-track { background:#EFEFEF; border-radius:100px; }
.case-media::-webkit-scrollbar-thumb { background:rgba(30,41,82,.35); border-radius:100px; }
```

Navy translucide et gris clair : deux jetons de la charte, aucune couleur nouvelle. Sur iOS la barre reste éphémère (comportement système, non contournable sans JS) — d'où l'importance du dépassement à 78 % comme signal premier.

### 5.3 `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  .case-media { scroll-snap-type:x proximity; scroll-behavior:auto; }
  .case-toggle, .case-toggle-chevron { transition:none; }
  .fade-up { transition:none; opacity:1; transform:none; }
}
```

Trois points :
- `mandatory` → `proximity` : l'accrochage impératif peut repositionner la vue sans que l'utilisateur l'ait demandé, c'est précisément ce qui gêne les personnes sensibles au mouvement. On garde l'aide au cadrage sans l'imposer.
- `scroll-behavior:auto` : la page déclare `scroll-behavior:smooth` sur `html` (l. 16), qui se propage. À neutraliser ici.
- **`clients.html` n'a aucune règle `prefers-reduced-motion` aujourd'hui**, contrairement aux 20 pages de blog (l. 118 de chacune) et à `index.html`. Les `.fade-up` (l. 169-170) et la vidéo de hero en `autoplay loop` s'exécutent sans garde. C'est un écart à corriger à l'occasion de ce chantier.

### 5.4 Clavier

Un conteneur en `overflow` n'est pas focusable au clavier dans toutes les versions de Chrome et Safari. Pour garantir l'accès :

```html
<div class="case-media" tabindex="0" role="group" aria-label="Photos de l'intervention RATP">
```
```css
.case-media:focus-visible { outline:3px solid #1E2952; outline-offset:3px; }
```

`role="group"` + `aria-label` donnent un nom au point d'arrêt (sinon on tabule sur un élément muet). À confirmer avec l'agent Dev, qui tranchera sur le balisage.

---

## 6. Audit de conformité à la charte

### 6.1 Ce que je propose n'introduit aucune couleur nouvelle

Palette utilisée par `.case-media` et `.case-toggle` : `#1E2952`, `#FFDE59`, `#F7F6F2`, `#E8E6E0`, `#EFEFEF`. Typographies : Encode Sans Compressed 700 pour le libellé de dépliement (règle « boutons » de la charte), Nunito ailleurs. Aucun Josefin Slab ajouté — il reste cantonné à `.case-link` (l. 88), usage ponctuel conforme.

### 6.2 Application de la règle teal validée

Rappel de la règle : **`#2EC4B6` = aplats décoratifs avec texte navy dessus ; `#12786F` dès qu'il s'agit de texte ou d'icône sur fond clair.** Mesures de contraste (WCAG 2.1, calcul sur blanc `#FFFFFF`) :

| Sélecteur | Ligne | Couleur | Contraste sur blanc | Verdict |
|---|---|---|---|---|
| `.case-note` | 92 | `#189d91` sur blanc, 14,5 px gras | **3,35:1** | **Échec** (seuil 4,5:1) → `#12786F` (**5,33:1**) |
| `.case-stat` | 90 | `#2EC4B6` sur blanc, 46 px | **2,17:1** | **Échec**, y compris au seuil « grand texte » 3:1 → `#12786F` |
| `.testi-icon` | 129 | `#189d91`, icône sur blanc | 3,35:1 | Passe le seuil 3:1 des éléments graphiques, mais **hors règle** → `#12786F` par cohérence |
| `.tag-teal` surchargé | 499 | `#189d91` sur `rgba(46,196,182,.12)` quasi blanc | ≈ 3,3:1 | **Échec** → `#12786F` |
| `.tag-teal` | 56 | `#6FE3D8` sur navy (hero) | 9,1:1 | Passe. Mais `#6FE3D8` **n'existe pas dans la charte** → voir ci-dessous |
| `h1` hero | 222 | `#2EC4B6` sur navy | 6,5:1 | **Passe — à conserver tel quel** |
| `<strong>` hero | 223 | `#6FE3D8` sur navy | 9,1:1 | Passe, même réserve que l. 56 |

Deux précisions qui comptent pour ne pas appliquer la règle à l'aveugle :

- **La règle vaut sur fond clair.** Sur le hero navy, remplacer `#2EC4B6` par `#12786F` ferait tomber le contraste à **2,64:1** — on casserait la lisibilité en croyant appliquer la charte. Lignes 222 et 223 : ne pas y toucher.
- **`#6FE3D8` est une troisième valeur teal non documentée.** Elle n'est utilisée que sur fond navy, où elle fonctionne. Deux sorties possibles, à arbitrer par Céline : soit on la documente comme variante « teal clair, fond sombre uniquement » dans `MEMO-SITE.md` §5 (la plus honnête, elle est déjà en place), soit on la remplace par `#FFDE59` ou blanc. Hors périmètre de ce chantier, mais à ne pas laisser passer indéfiniment : la page comporte aujourd'hui **trois** valeurs teal pour deux rôles.

### 6.3 Autres écarts relevés sur la page

- **Chavigny n'a pas de `<h3>`** : sa carte utilise `<div class="case-pill">` (l. 324) là où les 3 autres ont `<h3 class="case-title-row">` (l. 276, 380, 433). Conséquence visuelle : sa pastille fait 22 px / padding 10-30 px, les autres 19 px / 8-22 px (l. 108). Les 4 en-têtes ne sont pas au même gabarit. Avec l'en-tête désormais statique et exposé, l'écart se verra. À harmoniser sur le patron `.case-title-row`.
- **`.case-logo` à 56 px** : vérifier à l'intégration que les 4 logos clients (`logo-ratp.png`, `logo-chavigny.png`, `logo-daiichi-sankyo.png`, `logo-groupe-vsf.png`) gardent leurs proportions — `height:56px; width:auto` (l. 85) est correct, rien à changer, juste à ne pas remplacer par une valeur fixe en largeur lors du remaniement.
- **Ancres sous la nav collante** : `section[id^="case-"] { scroll-margin-top:32px }` (l. 19), alors que la nav devient `position:sticky` sous 900 px (l. 173) avec un logo de 112 px, soit ~140 px de haut. Les liens d'ancre des logos clients font donc atterrir le titre de la carte **sous** la barre de navigation sur mobile. À porter à ~150 px sous 900 px. Bug préexistant, mais ce chantier rend le haut de carte plus important qu'avant.

### 6.4 Accessibilité — récapitulatif

| Exigence | Statut dans la spec |
|---|---|
| Contraste texte ≥ 4,5:1 | Ligne de dépliement : `#1E2952` sur `#F7F6F2` = **14,5:1**. Corrections teal listées en 6.2. |
| Zone cliquable ≥ 48 px en mobile | `.case-toggle` : `min-height:52px`, pleine largeur de carte. ✔ |
| Focus visible | `outline:3px solid #1E2952` sur le `summary` et sur le scroller, jeton identique à `index.html`. ✔ |
| Scroller utilisable au clavier | `tabindex="0"` + `role="group"` + `aria-label` + style de focus. ✔ |
| Mouvement | Bloc `prefers-reduced-motion` à créer (§5.3), aujourd'hui absent de la page. |
| Photos | Les 11 `alt` existants sont descriptifs et spécifiques : à conserver tels quels. Les photos étant décoratives au sens strict (la carte dit déjà tout), ils restent utiles car ils décrivent des situations réelles — ne pas les vider. |

---

## 7. Ce qu'il faut supprimer ou corriger dans le CSS existant

| Ligne | Règle | Action |
|---|---|---|
| 103-104 | `.case-photos` / `.case-photos img` | **Supprimer** — remplacé par `.case-media--2` |
| 105-106 | `.case-photos-3` / `.case-photos-3 img` | **Supprimer** — remplacé par `.case-media` |
| 110 | `.case-subtitle { margin-bottom:26px }` | **26 px → 22 px** (§1.5) |
| 116 | `.case-details .case-subtitle, .case-details .case-location` | **Mort** — sous-titre et lieu quittent le `<details>`. Supprimer. |
| 117 | `.case-toggle-icon { … margin:16px auto 0 }` | **Refondre** en `.case-toggle-chevron` : garder `width/height:28px`, `border-radius:50%`, `background:#F7F6F2`, `color:#1E2952`, `transition:transform .25s ease, background .2s ease` ; **retirer** `margin:16px auto 0` (la pastille est désormais en ligne) ; passer de 34 px à 28 px (alignement sur `.uc-item` d'`index.html`, et une pastille de 34 px dans une ligne de 52 px est trop lourde) |
| 118-119 | `.case-details:hover` / `[open] .case-toggle-icon` | **Réécrire** sur `.case-toggle` (§4.2). Attention : le `:hover` actuel porte sur tout le `<details>`, donc le survol du corps déplié allume la pastille. À restreindre à `.case-toggle:hover`. |
| 120 | `.case-body { border-top:1px solid #E8E6E0; margin-top:28px; padding-top:28px }` | **Retirer `border-top`** (remonte sur `.case-toggle`) et **retirer `margin-top:28px`** (la ligne fournit la séparation). Garder `padding-top:28px`. |
| 190 | `.case-photos, .case-photos-3 { grid-template-columns:1fr }` dans `@media (max-width:900px)` | **Supprimer** — c'est exactement la chute à 1 colonne que le chantier élimine. Le nouveau palier 600 px la remplace. |
| 19 | `section[id^="case-"] { scroll-margin-top:32px }` | **Ajouter** une surcharge ~150 px sous 900 px (§6.3) |
| 169-170 | `.fade-up` | **Ajouter** la garde `prefers-reduced-motion` (§5.3) |
| 84 / 189 | `.case-study { padding:52px 48px }` / `padding:36px 22px` | **Introduire `--case-pad`** (§4.1) pour que la ligne pleine largeur reste synchronisée |

Nouveau palier à créer : `@media (max-width:600px)` (§5.1), **placé après** le bloc `max-width:900px` existant pour que la cascade joue dans le bon sens.

### Points à confirmer avec l'agent Dev

1. **Les WebP n'existent pas encore à la racine** : seuls `hero-atelier-tms-900.webp` et `-1376.webp` sont présents. Les 11 versions optimisées annoncées doivent être déposées avant de référencer un `<source type="image/webp">`, sinon on casse l'affichage.
2. **Patron `<picture>`** : reprendre à l'identique celui de `index.html` (l. 811-821) — `<source type="image/webp" srcset…>` + `<img>` JPEG de repli avec `width`, `height`, `decoding="async"`. Ici `loading="lazy"` (et non `fetchpriority="high"` : ces photos ne sont pas le LCP).
3. **`width` et `height` obligatoires** sur chaque `<img>` : le bloc passe au-dessus de contenu, un décalage de mise en page (CLS) serait visible. Avec `aspect-ratio: 4/3` en CSS, l'attribut sert de filet.
4. **`daiichi-3-top.jpg`** : fichier non référencé aujourd'hui. Soit il devient la source du 3e visuel Daiichi (recommandé, §2.2), soit il reste du poids mort — sa suppression éventuelle relève de Céline (règle 7).
