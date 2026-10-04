# Spec visuelle : calculateur TMS, chantier « refonte-charte »

**Agent Design (calc-design), 2026-10-04, branche prévue `calc/refonte-charte-2026-10`**
Fichier audité : `calculateur-tms-web.html` (1 613 lignes, `<style>` l.21-383).
Référence : `MEMO-SITE.md` §5 + jetons et composants du `<style>` de `index.html` (l.93-888, refonte du 22/09/2026). Pour le hero, j'ai aussi regardé le motif `.page-hero` des pages intérieures (`formations.html` l.52-72, `contact.html`, `apropos.html`).
Périmètre : le visuel uniquement. L'ordre des blocs relève d'UX/UI et les textes de CR. Les composants ci-dessous ne dépendent **pas** de leur position : chacun porte son propre fond, ses marges internes et ses règles de contraste, et peut se poser sur un fond blanc ou crème.
La skill `impeccable` n'est pas installée sur ce poste : l'audit a été fait à la main. Les contrastes ont été calculés avec la formule WCAG 2.x (luminance relative). Le rendu n'a **pas** été vérifié dans un navigateur (l'agent Design n'en a pas l'accès) : le contrôle à 375, 768 et 1280 px reste à faire par l'agent principal (§6).

---

## 0. En bref

1. Il faut remplacer le `:root` du calculateur par celui d'`index.html`, auquel on ajoute **3 jetons dérivés** (§2). Ensuite, on supprime toute couleur codée en dur.
2. Il faut supprimer les **ombres dures décalées** (`Npx Npx 0`) et les **bordures de 2,5 px navy**. On les remplace par les bordures 1 px `--line` et les ombres douces d'`index.html`.
3. **Josefin Slab** disparaît du calculateur. Titres et chiffres passent en Encode Sans Compressed 800, comme `.card-num`, `.b6-preview-amount` et `.indic-value` sur l'accueil.
4. Le **bouton principal** devient `.btn .btn-primary` (fond orange, texte navy). Le bouton PDF devient `.btn .btn-ghost` et « Recommencer » devient un lien texte. On garde **un seul** bouton orange par écran.
5. **Risque** : on abandonne le rouge. L'échelle devient orange / jaune / teal, toujours avec du texte navy. Une jauge à 3 segments évite que la couleur soit le seul signal (§4.10).
6. **Erreurs** : plus aucun `alert()`. On passe à une erreur en ligne avec un jeton `--orange-ink` `#A84B0F` (5,71:1 sur blanc), dérivé de l'orange de marque comme `--teal-dark` l'est du teal (§4.7).
7. **Nav et footer** : copie conforme d'`index.html` (balisage, CSS et JS), avec en plus `aria-current="page"` sur « Calculateur TMS ».
8. **PDF** : la palette RVB est alignée sur les jetons. Il n'y a plus de texte orange ni de texte blanc sur fond clair ou coloré, et l'encart ROI passe de teal à navy (§5).

---

## 1. Écarts constatés (classés du plus visible au moins visible)

Les numéros de ligne renvoient à `calculateur-tms-web.html`. Pour les contrastes, « ✗ » veut dire sous le seuil AA (4,5:1 pour un texte normal, 3:1 pour un grand texte ou un composant d'interface).

### 1.1 Identité générale

| # | Où | Constat | Charte / index.html |
|---|---|---|---|
| E1 | `.card` l.148-155, `.btn-main` l.244-249, `.btn-dl` l.252-257, `.cta-box` l.312, `.roi-box` l.316, `.modal-box` l.355 | Bordure `2.5px solid navy` + ombre dure décalée `box-shadow: 3-5px 3-5px 0 orange/navy`. Ce style « néo-brutaliste » n'existe nulle part sur le site. **C'est l'écart le plus visible.** | Cartes : `border:1px solid var(--line)`, `border-radius:14px`, ombre douce seulement au survol (`.card:hover` l.371 : `0 16px 40px rgba(30,41,82,.12)`). Boutons : `0 8px 20px rgba(255,145,77,.28)` (l.178). |
| E2 | l.31 `body` | Fond `#f4f2ee` (hors charte) et texte courant **navy**. | `body` : `background: var(--grey-bg)` `#EFEFEF`, `color: var(--text)` `#374151` (l.130-133). Navy est réservé aux titres. |
| E3 | `.hero h1` l.80-87, `.stat .sv` l.137-141, `.metric .mv` l.291, `.roi-val` l.318, `.modal-box h3` l.357 | **Josefin Slab** sur le H1, tous les chiffres et le titre de la modale. | H1 et chiffres en Encode Sans Compressed 800 (`.hero-title` l.314, `.card-num` l.378, `.b6-preview-amount` l.561). Josefin Slab n'a aucune occurrence dans `index.html`. Je ne vois aucun accent ponctuel qui la justifie ici. |
| E4 | `.btn-main` l.244 | Bouton principal **navy + texte jaune**. | `.btn-primary` : orange + texte navy (l.176-181). |
| E5 | `.btn-dl` l.252, `.roi-box` l.316, `.pb.done` l.160, `.pct-ok` l.223, `.fc-t` l.304, `.b-low` l.297, `.form-status.success` l.361 | **Teal clair `#2EC4B6`** en aplat ou en texte sur fond clair. Le texte teal sur blanc donne **2,17:1 ✗**. | `--teal` est réservé aux fonds sombres et `--teal-dark` `#12786F` sert sur fond clair (5,33:1 sur blanc) : commentaire du jeton, `index.html` l.106-107. |
| E6 | `.b-high` l.295, `.pct-ko` l.224, `.form-status.error` l.362, PDF `rc.high` l.1252 | **Rouges `#e74c3c` / `#c0392b`**, absents de la charte. | Voir l'échelle de risque §4.10 et la couleur d'erreur §4.7. |
| E7 | Nav l.34-66 et l.388-401 | La nav n'est **pas** celle d'`index.html` : logo `.nav-logo` à **112 px** (64 px sur l'accueil), classes `nav-pill-yellow` / `nav-pill-orange` au lieu de `.nav-calc` / `.nav-cta`, « Contact » en **texte blanc sur orange (2,23:1 ✗)**, nav non sticky au-dessus de 900 px, pas d'état `is-solid`, menu mobile sur fond blanc au lieu du panneau navy plein écran, pas de `.nav-overlay`, pas de fermeture par Échap, pas d'`aria-label` sur `<nav>`. | `index.html` l.199-270 (CSS), l.709-752 (mobile), l.893-907 (HTML), l.1381-1425 (JS). |
| E8 | Footer l.322-343 et l.739-793 | Ce n'est pas une copie conforme : grille `1.4fr 1fr 1fr 1fr` / 1200 px (contre `220px 1fr 1fr 1fr` / 960 px sur l'accueil), titres `h4` (`h3` sur l'accueil), réseaux sociaux en contour (pastille `rgba(255,255,255,.1)` sur l'accueil), libellé « Avec le soutien de » en plus, lien « Certificat Qualiopi » vers `#` au lieu du PDF, opacités différentes. | `index.html` l.1283-1352. |
| E9 | `.hero-tag` l.74-79 | Pastille **texte blanc sur orange : 2,23:1 ✗**, avec Nunito 900. | `.hero-eyebrow` (l.306-313) : fond teal, texte navy (6,48:1), Nunito 700. |
| E10 | Partout | Graisse Nunito **900**, absente de la charte. Le calculateur l'importe (l.20, `wght@…;900`) et l'emploie environ 40 fois. | Nunito 300-800 (`MEMO-SITE.md` §5). Libellés en 700, titres de carte en Encode Sans Compressed. |

### 1.2 Contrastes en échec (texte)

| Sélecteur | Couleurs | Ratio |
|---|---|---|
| `.step-label` l.164, `.formations-title` l.300, `.fc-link` l.309, notes INRS en ligne l.452 et l.480 | `#FF914D` sur blanc | 2,23 ✗ |
| `.fc-o` l.303 | `#FF914D` sur `#fff0e6` | 2,08 ✗ |
| `.fc-t` l.304 | `#2EC4B6` sur `#e8faf8` | ≈ 2,0 ✗ |
| `.pct-hint` l.216-221 (état neutre) | `#aaa` sur `#fff5ef` | ≈ 2,2 ✗ |
| `.poste-pct` l.212 (valeur saisie, état non sélectionné) | `#aaa` sur blanc | 2,32 ✗ |
| `.poste-row.sel .poste-pct-wrap label` l.207 | blanc sur orange | 2,23 ✗ |
| `.pr-sub` en inline `color:#888` l.485, 505, 515, `.back` l.258-262, aide l.582 | `#888` sur blanc / `#fafaf7` | 3,54 ✗ |
| `.disclaimer` l.320, `.form-note` l.359 | `#9bb0a8` sur blanc | 2,29 ✗ |
| `.b-med` l.296 | `#b7720a` sur `#fffae8` | 3,70 ✗ |
| `.b-low` l.297 | `#0e8a7a` sur `#e8faf8` | 3,94 ✗ |
| `.form-status.success` l.361 | `#2EC4B6` sur blanc | 2,17 ✗ |
| PDF : badge de risque l.1293 | blanc sur orange / teal | 2,23 / 2,17 ✗ |
| PDF : titres de section l.1332, 1385, 1420 | orange sur blanc | 2,23 ✗ |

### 1.3 Contrastes en échec (composants d'interface, seuil 3:1, WCAG 1.4.11)

| Sélecteur | Couleurs | Ratio |
|---|---|---|
| Bordure des champs `.field input` l.173, `.poste-row` l.188, `.ro` l.229 | `#ccc` sur blanc | 1,61 ✗ |
| Piste de progression `.pb` l.159 | `#e0d8cc` sur blanc | ≈ 1,3 ✗ |
| Focus des champs l.179-181 | bordure orange sur blanc | 2,23 ✗ (indicateur de focus trop faible) |
| `.poste-pct:focus` l.215 | `rgba(255,255,255,.6)` sur blanc | ≈ 1 ✗ (focus invisible) |

### 1.4 Code et dette visuelle

- **Styles inline** à supprimer : l.406, 447, 452, 453, 454, 464, 475, 480-523 (sept attributs `style`), 529-558, 573, 577, 582, 609, 623, 654, 664, 747, 1047 (gabarit HTML des formations entièrement en inline), 1580 (bouton d'export).
- **`alert()`** à remplacer (l.935, 948, 959, 974, 977, 986, 989, 1165, 1241, 1243) : voir §4.7 et §4.15.
- **CSS orphelin**, sans balisage correspondant : `.hero-amorce`, `.amorce-*`, `@keyframes bounce` (l.93-118), `.stats-section`, `.stats`, `.stat` (l.120-142), `.gate-form` (l.281-286), `.has-tooltip`. À supprimer si UX/UI ne les réactive pas.
- Bloc JS **dupliqué** (l.797-816 = l.818-837). Ce n'est pas du visuel, je le signale pour Dev.
- Champs **sans `<label for>`** dans les étapes 1 et 2 (l.430, 446, 451, 479, 527, 572, 576, 581, 613). Les `<label>%</label>` des répartitions ne sont pas associés à leur champ. Cela relève d'UX/UI et de Dev, mais conditionne le style `.field-label` ci-dessous.
- Les cartes de choix (`.poste-row`, `.ro`) sont des `<div onclick>` : pas de focus clavier, pas de rôle. La spec §4.6 suppose de vrais `<input type="checkbox|radio">` habillés.

---

## 2. Jetons : `:root` complet à intégrer

Il remplace le `:root` des l.23-30. Les lignes au-dessus du commentaire « Ajouts calculateur » sont **recopiées à l'identique** d'`index.html` l.100-125.

```css
:root {
  --navy:        #1E2952;
  --orange:      #FF914D;
  --orange-dark: #E87A35;   /* état survol uniquement */
  --yellow:      #FFDE59;
  --yellow-dark: #FFD42E;   /* état survol uniquement */
  --teal:        #2EC4B6;   /* SUR FOND SOMBRE uniquement */
  --teal-dark:   #12786F;   /* texte ou icône SUR FOND CLAIR */
  --cream:       #F7F6F2;
  --grey-bg:     #EFEFEF;
  --text:        #374151;
  --muted:       #6B7280;   /* sur blanc seulement : 4,83:1 ; sur crème 4,47:1 = ✗ */
  --line:        #E8E6E0;   /* filet décoratif, jamais bordure de champ */

  --pad-xl: clamp(88px, 8vw, 120px);
  --pad-l:  clamp(72px, 6.5vw, 96px);
  --pad-m:  clamp(56px, 5vw, 80px);
  --pad-s:  36px;
  --gutter:  clamp(20px, 5vw, 64px);
  --content: 1120px;
  --nav-h:   88px;

  /* ── Ajouts calculateur (dérivés de la charte, à valider) ── */
  --orange-ink:  #A84B0F;   /* même teinte que --orange (23°), assombrie : texte/bordure d'erreur
                               sur fond clair. 5,71:1 blanc · 5,28:1 crème. Rôle équivalent à --teal-dark. */
  --field-line:  #8389A0;   /* = navy à 55 % sur blanc. Bordure de champ au repos.
                               3,47:1 blanc · 3,21:1 crème (WCAG 1.4.11 ≥ 3:1). */
  --orange-tint: #FFF2EA;   /* = orange à 12 % sur blanc (même valeur que le fond de .tag-orange). Fond d'état sélectionné / erreur. */
  --teal-tint:   #E6F8F6;   /* = teal à 12 % sur blanc (même valeur que .tag-teal / .pillar-label). Fond d'état validé. */

  --calc-form:    760px;    /* largeur max de la carte d'étape */
  --calc-results: 960px;    /* largeur max de la zone de résultats */
}
@media (max-width: 599px) {
  :root { --pad-xl: 56px; --pad-l: 48px; --pad-m: 44px; --pad-s: 28px; }
}
```

**Pourquoi trois jetons de plus ?**
- `--orange-ink` : la charte n'a aucune couleur d'erreur. Le site emploie `#EF4444` pour l'erreur de la newsletter (`index.html` l.1449), un rouge hors charte qui ne donne que ≈ 3,8:1 sur blanc ✗. Un orange assombri de même teinte reste dans la famille de marque, passe AA et se distingue nettement du navy et du teal foncé. Dans l'échelle de risque, il ne sert **que** pour les erreurs de saisie, pas pour le niveau « élevé » (on évite ainsi la confusion « erreur » / « risque »).
- `--field-line` : `--line` (1,25:1 sur blanc) ne suffit pas pour délimiter un champ. `contact.html` et `formations.html` font la même erreur (`#E8E6E0`), qu'il faudrait corriger dans un chantier site.
- `--orange-tint` / `--teal-tint` : valeurs déjà présentes sur l'accueil sous forme `rgba()`. On les nomme pour éviter les hex dispersés.

À faire valider par Céline ou l'agent principal : l'ajout de `--orange-ink` à la charte (§5 de `MEMO-SITE.md`). Si c'est refusé, le repli est le suivant : texte d'erreur en `--navy` gras précédé d'une pastille « ! » orange à texte navy (6,30:1), bordure du champ en erreur `--navy` 2 px. Ce repli est moins lisible, car on distingue mal l'erreur du focus.

### Polices

Il faut reprendre exactement l'import d'`index.html` l.33 (Nunito **sans le 900**). Si aucun autre élément de la page n'emploie Josefin Slab après la refonte, on peut retirer `family=Josefin+Slab:wght@700&` de l'URL : une police de moins à charger.

```html
<link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Compressed:wght@700;800;900&family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Toute `font-weight:900` appliquée à Nunito passe à 800 (titres de carte) ou 700 (libellés).

---

## 3. Base, nav, footer, boutons, utilitaires : repris d'index.html

À copier **tels quels** depuis `index.html` (sans renommer) :

| Bloc | Lignes `index.html` |
|---|---|
| Base (`*`, `html`, `body`, `img`, `a`, `:focus-visible`) | 127-137 |
| `.section`, `.section-inner`, `.section-cream`, `.section-white`, `.text-center`, `.tag`, `.tag-teal`, `.section h2`, `.section-sub` | 139-164 (**sans** `.tag-orange` : voir la note ci-dessous) |
| `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-yellow`, `.btn-navy` | 166-195 |
| Nav complète (desktop, `is-solid`, dropdown) | 199-270 |
| Accordéon `.table-wrap` / `.table-summary` (pour l'encart méthode) | 449-495 |
| `.link-arrow` | 587-592 |
| `.footer-grid` | 680 |
| Paliers ≤ 1199 px, ≤ 899 px, < 600 px, paysage, mouvement réduit | 698-887, **en ne gardant que** les règles nav, `.btn`, `.footer-grid`, `.table-summary` et `prefers-reduced-motion` |
| HTML nav + `.nav-overlay` | 893-907 |
| HTML footer | 1283-1352 |
| JS nav (`is-solid`, ouverture/fermeture, Échap, overlay, resize) | 1381-1425 |

Ajustements propres au calculateur :

```css
/* Page courante dans la nav : la pastille jaune est déjà distinctive ;
   on ajoute un repère non colorimétrique, visible aussi sur la nav navy (is-solid). */
.site-nav-links .nav-calc[aria-current="page"] { box-shadow: inset 0 0 0 2px var(--navy); }
```

```html
<li><a href="calculateur-tms-web" class="nav-calc" aria-current="page">Calculateur TMS</a></li>
```

**Note sur `.tag-orange` :** sur l'accueil, `.tag-orange` met du texte `#FF914D` sur sa propre teinte (2,08:1 ✗). Il ne faut pas le reprendre dans le calculateur. Dans un chantier site, il faudrait le corriger aussi sur `index.html`.
**Note sur le footer :** la copie conforme reprend aussi la ligne du bas en `rgba(255,255,255,.3)` sur navy (2,60:1 ✗, `index.html` l.1340-1347). Cela ne peut se corriger que dans un chantier site, sur toutes les pages à la fois (à signaler à Céline). Je ne propose pas de diverger dans le calculateur seul.

---

## 4. Composants du calculateur

Convention : préfixe `calc-` pour tout composant propre au calculateur. On ne s'appuie sur aucun sélecteur de parenté entre blocs (pas de `.hero + .card`, pas de `:first-child` structurel), donc chaque bloc peut changer de place.

### 4.1 Hero (motif `.page-hero` des pages intérieures, valeurs de l'accueil)

Le fond navy est maintenu. C'est le motif des pages intérieures (`formations`, `clients`, `contact`, `apropos`), et il prolonge le bloc 6 navy de l'accueil qui envoie vers le calculateur.

```css
.calc-hero {
  background: var(--navy); color: #fff;
  padding: var(--pad-l) var(--gutter);
  position: relative; overflow: hidden;
}
.calc-hero::before {                      /* écho du bloc 6 de l'accueil (.b6-calc::before) */
  content: ''; position: absolute; top: -140px; right: -120px;
  width: 420px; height: 420px; border-radius: 50%;
  background: var(--orange); opacity: .10; pointer-events: none;
}
.calc-hero-inner { position: relative; z-index: 1; max-width: var(--content); margin-inline: auto; }
.calc-hero .hero-eyebrow {                /* = index.html l.306-313 */
  display: inline-flex; align-items: center;
  min-height: 28px; padding: 7px 16px; border-radius: 100px;
  background: var(--teal); color: var(--navy);           /* 6,48:1 */
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 11.5px;
  letter-spacing: .1em; text-transform: uppercase; margin-bottom: 22px;
}
.calc-hero h1 {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: clamp(32px, 4.2vw, 52px); line-height: 1.08; letter-spacing: -1.2px;
  color: #fff; max-width: 20ch; margin: 0 0 18px;
}
.calc-hero h1 .accent { color: var(--yellow); }                 /* 10,6:1 sur navy */
.calc-hero-sub {
  font-size: 18px; line-height: 1.65; font-weight: 400;
  color: rgba(255,255,255,.82); max-width: 52ch; margin: 0;     /* 9,88:1 */
}
.calc-hero-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; list-style: none; }
.calc-hero-meta li {
  display: inline-flex; align-items: center; gap: 8px;
  min-height: 36px; padding: 8px 16px; border-radius: 100px;
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18);
  font-size: 13.5px; font-weight: 700; color: #fff;
}
.calc-hero-meta svg { width: 16px; height: 16px; color: var(--yellow); flex-shrink: 0; }

@media (max-width: 899px) {
  .calc-hero { text-align: left; }
  .calc-hero::before { width: 260px; height: 260px; top: -110px; right: -110px; }
}
@media (max-width: 599px) {
  .calc-hero h1 { font-size: 30px; line-height: 1.12; letter-spacing: -.6px; }
  .calc-hero-sub { font-size: 16px; }
}
@media (max-width: 379px) { .calc-hero h1 { font-size: 27px; } }
```

- Ne pas reprendre `.page-hero-meta .meta-teal` / `.meta-orange` des pages intérieures (texte blanc sur teal ou orange : ✗).
- Le hero n'a plus de `text-align:center` : l'accueil et les pages intérieures sont alignés à gauche. Si UX/UI veut un hero centré, il suffit d'ajouter `.text-center` sur `.calc-hero-inner` et `margin-inline:auto` sur le h1 et le sous-titre.
- Le `<br>` dans le H1 (l.406) est à supprimer. `max-width:20ch` gère la césure.

### 4.2 Section outil et carte d'étape

```css
.calc-section { background: var(--cream); padding: var(--pad-m) var(--gutter); }
.calc-section--white { background: #fff; }
.calc-section--overlap { padding-top: 0; }                       /* option : la carte chevauche le hero */
.calc-section--overlap .calc-card { margin-top: -56px; position: relative; z-index: 2; }

.calc-card {
  max-width: var(--calc-form); margin-inline: auto;
  background: #fff; border: 1px solid var(--line); border-radius: 20px;
  box-shadow: 0 20px 48px rgba(30,41,82,.10);
  padding: clamp(24px, 4vw, 44px);
}
.calc-card--wide { max-width: var(--calc-results); }

.calc-step-eyebrow { /* = .tag .tag-teal (index l.146-153) : à appliquer en classes, pas en copie */ }
.calc-step-title {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: clamp(24px, 2.6vw, 30px); line-height: 1.15; letter-spacing: -.5px;
  color: var(--navy); margin: 0 0 10px;
}
.calc-step-sub { font-size: 16px; line-height: 1.65; color: var(--text); max-width: 60ch; margin: 0 0 32px; }
.calc-block + .calc-block { margin-top: 28px; }                  /* espacement vertical entre questions */
.calc-divider { border: 0; border-top: 1px solid var(--line); margin: 32px 0; }

@media (max-width: 599px) {
  .calc-card { border-radius: 16px; padding: 22px 18px; }
  .calc-section--overlap .calc-card { margin-top: -32px; }
}
```

- L'eyebrow d'étape (« Étape 1 sur 3, Profil entreprise ») : `<span class="tag tag-teal">`. Texte `--teal-dark` sur `--teal-tint` = 4,85:1. Ne plus utiliser d'orange en texte.
- Le titre d'étape est un vrai `<h2>` (aujourd'hui `<div class="step-title">`).
- Sur la carte blanche, `--muted` est autorisé (4,83:1). **Hors carte**, sur crème, utiliser `--text`.

### 4.3 Progression (stepper)

Il remplace les trois barres `.pb`. Les pastilles numérotées reprennent `.step-num` de l'accueil (l.428-436), en plus petit.

```html
<ol class="calc-progress" aria-label="Progression">
  <li class="is-done"><span class="calc-progress-dot" aria-hidden="true">1</span><span class="calc-progress-label">Profil</span></li>
  <li class="is-current" aria-current="step"><span class="calc-progress-dot" aria-hidden="true">2</span><span class="calc-progress-label">Sinistralité</span></li>
  <li><span class="calc-progress-dot" aria-hidden="true">3</span><span class="calc-progress-label">Résultats</span></li>
</ol>
```
(Les libellés sont fournis par CR. Le nombre d'étapes est libre : le composant s'adapte de 2 à 5.)

```css
.calc-progress {
  list-style: none; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr;
  gap: 8px; margin: 0 0 32px; counter-reset: none;
}
.calc-progress li { position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
.calc-progress li + li::before {                                  /* connecteur */
  content: ''; position: absolute; top: 15px; right: calc(50% + 22px); left: calc(-50% + 22px);
  height: 2px; background: var(--line);
}
.calc-progress li.is-done + li::before,
.calc-progress li.is-done + li.is-current::before { background: var(--teal-dark); }
.calc-progress-dot {
  width: 32px; height: 32px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 14px;
  background: #fff; color: var(--text); border: 2px solid var(--field-line);   /* 3,47:1 */
}
.calc-progress li.is-current .calc-progress-dot { background: var(--orange); border-color: var(--orange); color: var(--navy); }  /* 6,30:1 */
.calc-progress li.is-done .calc-progress-dot {
  background: var(--teal-dark); border-color: var(--teal-dark); color: #fff;  /* 5,33:1 */
  font-size: 0;                                                   /* le chiffre est remplacé par une coche */
}
.calc-progress li.is-done .calc-progress-dot::after {
  content: ''; width: 12px; height: 7px; border: solid #fff; border-width: 0 0 2.5px 2.5px;
  transform: translateY(-1px) rotate(-45deg);
}
.calc-progress-label { font-size: 13px; font-weight: 700; color: var(--text); line-height: 1.3; }
.calc-progress li.is-current .calc-progress-label { color: var(--navy); }

@media (max-width: 599px) {
  .calc-progress-label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
  .calc-progress { margin-bottom: 24px; }
}
```
Sur mobile, les libellés sont masqués visuellement mais restent lisibles par les lecteurs d'écran. L'eyebrow `.tag-teal` (« Étape 2 sur 3 ») donne l'information en clair.

### 4.4 Champs (texte, nombre, liste)

```css
.calc-field { display: flex; flex-direction: column; gap: 8px; }
.calc-label {
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 15px;
  color: var(--navy); line-height: 1.4;
}
.calc-label .req { color: var(--orange-ink); margin-left: 2px; }   /* astérisque : 5,71:1 */
.calc-hint { font-size: 14px; line-height: 1.55; color: var(--text); margin: -2px 0 2px; }
.calc-note {                                         /* info sourcée sous un libellé (ex. INRS) */
  display: flex; gap: 8px; align-items: flex-start;
  font-size: 13.5px; line-height: 1.5; color: var(--text);
}
.calc-note svg { width: 16px; height: 16px; flex-shrink: 0; margin-top: 2px; color: var(--teal-dark); }

.calc-input, .calc-select {
  width: 100%; min-height: 52px; padding: 13px 16px;
  font-family: 'Nunito', sans-serif; font-weight: 600; font-size: 16px;   /* 16 px : pas de zoom iOS */
  color: var(--navy); background: #fff;
  border: 1.5px solid var(--field-line); border-radius: 12px;
  transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
  -webkit-appearance: none; appearance: none; touch-action: manipulation;
}
.calc-input::placeholder { color: var(--muted); opacity: 1; }      /* 4,83:1 */
.calc-input:hover, .calc-select:hover { border-color: var(--navy); }
.calc-input:focus, .calc-select:focus {
  outline: none; border-color: var(--navy);
  box-shadow: 0 0 0 4px rgba(255,145,77,.35);                     /* halo orange de marque, bordure navy = contraste */
}
.calc-input[aria-invalid="true"], .calc-select[aria-invalid="true"] {
  border-color: var(--orange-ink); box-shadow: inset 0 0 0 1px var(--orange-ink);  /* 2,5 px perçus sans saut de mise en page */
}
.calc-input[aria-invalid="true"]:focus { box-shadow: inset 0 0 0 1px var(--orange-ink), 0 0 0 4px rgba(168,75,15,.22); }
.calc-input:disabled, .calc-select:disabled {
  background: var(--grey-bg); color: var(--muted); border-color: var(--line); cursor: not-allowed;
}
.calc-input--narrow { max-width: 200px; }                        /* remplace style="width:50%" */
.calc-select {
  padding-right: 44px; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1l6 6 6-6' fill='none' stroke='%231E2952' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 16px center;
}
.calc-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 599px) { .calc-grid2 { grid-template-columns: 1fr; } .calc-input--narrow { max-width: none; } }

/* masque des flèches des champs nombre : conserver l.346-349 */
```

Récapitulatif des états d'un champ :

| État | Bordure | Fond | Autre |
|---|---|---|---|
| Repos | 1,5 px `--field-line` (3,47:1) | blanc | texte navy 600 |
| Survol | `--navy` | blanc | |
| Focus | `--navy` + halo 4 px `rgba(255,145,77,.35)` | blanc | pas d'`outline` natif : le halo et la bordure navy le remplacent |
| Erreur | `--orange-ink` 2,5 px perçus | blanc | message `.calc-error` dessous + `aria-invalid` + `aria-describedby` |
| Désactivé | `--line` | `--grey-bg` | texte `--muted` |

### 4.5 Répartitions en %

Utilisé pour les répartitions hommes/femmes, par âge et par type de poste. Une ligne = un libellé + un champ suffixé « % ». Un total s'affiche dessous.

```html
<fieldset class="calc-split" aria-describedby="age-total">
  <legend class="calc-label">…</legend>
  <div class="calc-split-row">
    <label for="age-1" class="calc-split-label">16-29 ans<span class="calc-split-sub">…</span></label>
    <div class="calc-split-input"><input id="age-1" class="calc-input" inputmode="numeric" …><span aria-hidden="true">%</span></div>
  </div>
  …
  <p class="calc-split-total" id="age-total" data-state="ko" aria-live="polite">…</p>
</fieldset>
```

```css
.calc-split { border: 0; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
.calc-split > legend { margin-bottom: 8px; padding: 0; }
.calc-split-row {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 10px 10px 10px 18px; min-height: 64px;
  background: #fff; border: 1px solid var(--line); border-radius: 12px;
  transition: border-color .2s ease, background-color .2s ease;
}
.calc-split-row:focus-within { border-color: var(--navy); }
.calc-split-row.has-value { background: var(--cream); }          /* repère discret de ligne remplie */
.calc-split-label { flex: 1; min-width: 0; font-weight: 700; font-size: 15px; color: var(--navy); line-height: 1.35; cursor: pointer; }
.calc-split-sub { display: block; font-weight: 400; font-size: 13.5px; color: var(--text); margin-top: 2px; }
.calc-split-input { position: relative; flex: 0 0 104px; }
.calc-split-input .calc-input {
  min-height: 44px; padding: 8px 34px 8px 12px; text-align: right;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 18px;
  font-variant-numeric: tabular-nums;
}
.calc-split-input > span {
  position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
  font-weight: 700; font-size: 15px; color: var(--text); pointer-events: none;
}

/* Total : 3 états, toujours avec icône + texte (jamais la couleur seule) */
.calc-split-total {
  display: flex; align-items: center; gap: 10px; margin-top: 4px;
  min-height: 44px; padding: 10px 16px; border-radius: 10px;
  font-size: 14.5px; font-weight: 700; line-height: 1.4;
  background: var(--cream); color: var(--text); border: 1px solid var(--line);
}
.calc-split-total strong { font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 17px; font-variant-numeric: tabular-nums; }
.calc-split-total::before {
  content: ''; width: 20px; height: 20px; flex-shrink: 0; border-radius: 50%;
  background: var(--field-line);
}
.calc-split-total[data-state="ok"] { background: var(--teal-tint); border-color: var(--teal-dark); color: var(--teal-dark); }  /* 4,85:1 */
.calc-split-total[data-state="ok"]::before {
  background: var(--teal-dark) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='9' viewBox='0 0 12 9'%3E%3Cpath d='M1 4.5l3.2 3L11 1' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/12px no-repeat;
}
.calc-split-total[data-state="ko"] { background: var(--orange-tint); border-color: var(--orange-ink); color: var(--orange-ink); }  /* ≈ 5,4:1 */
.calc-split-total[data-state="ko"]::before {
  background: var(--orange-ink); content: '!'; color: #fff;      /* blanc sur orange-ink : 5,71:1 */
  display: flex; align-items: center; justify-content: center;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 13px;
}
@media (max-width: 379px) {
  .calc-split-row { padding-left: 14px; gap: 10px; }
  .calc-split-input { flex-basis: 92px; }
}
```

L'état `ko` ne s'affiche **qu'après** une première sortie de champ (`blur`) ou une tentative de « Continuer ». Pendant la frappe, le total reste à l'état neutre. Sinon, l'interface « crie » à chaque chiffre tapé. C'est à confirmer avec UX/UI.

### 4.6 Choix multiples (cases à cocher) et choix unique (radios) en cartes

Le même composant sert aux deux (`type="checkbox"` pour les signaux faibles, `type="radio"` pour le plan de prévention). Le balisage suppose de vrais inputs, visuellement masqués.

```html
<fieldset class="calc-choices calc-choices--2col">
  <legend class="calc-label">…</legend>
  <label class="calc-choice">
    <input type="checkbox" name="signaux" value="a" class="calc-choice-input">
    <span class="calc-choice-mark" aria-hidden="true"></span>
    <span class="calc-choice-text"><span class="calc-choice-title">…</span><span class="calc-choice-sub">…</span></span>
  </label>
  …
</fieldset>
```

```css
.calc-choices { border: 0; padding: 0; margin: 0; display: grid; gap: 10px; min-width: 0; }
.calc-choices > legend { margin-bottom: 10px; padding: 0; }
.calc-choices--2col { grid-template-columns: 1fr 1fr; }
.calc-choices--2col > .calc-choice--full { grid-column: 1 / -1; }   /* remplace style="grid-column:1/-1" */

.calc-choice {
  position: relative; display: flex; align-items: flex-start; gap: 14px;
  min-height: 56px; padding: 16px 18px;
  background: #fff; border: 1.5px solid var(--field-line); border-radius: 12px;
  cursor: pointer;
  transition: border-color .2s ease, background-color .2s ease, box-shadow .2s ease;
}
.calc-choice-input { position: absolute; opacity: 0; width: 1px; height: 1px; pointer-events: none; }
.calc-choice-mark {
  flex-shrink: 0; width: 22px; height: 22px; margin-top: 1px;
  border: 2px solid var(--field-line); border-radius: 6px; background: #fff;
  display: flex; align-items: center; justify-content: center;
  transition: background-color .15s ease, border-color .15s ease;
}
.calc-choice-input[type="radio"] + .calc-choice-mark { border-radius: 50%; }
.calc-choice-text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.calc-choice-title { font-weight: 700; font-size: 15px; color: var(--navy); line-height: 1.4; }
.calc-choice-sub { font-weight: 400; font-size: 13.5px; color: var(--text); line-height: 1.5; }

.calc-choice:hover { border-color: var(--navy); }
.calc-choice:has(.calc-choice-input:focus-visible) { outline: 3px solid var(--navy); outline-offset: 3px; }
.calc-choice:has(.calc-choice-input:checked) {
  border-color: var(--navy); background: var(--orange-tint);
  box-shadow: inset 0 0 0 1px var(--navy);                       /* 2,5 px perçus */
}
.calc-choice-input:checked + .calc-choice-mark { background: var(--orange); border-color: var(--navy); }
.calc-choice-input[type="checkbox"]:checked + .calc-choice-mark::after {
  content: ''; width: 10px; height: 6px; border: solid var(--navy); border-width: 0 0 2.5px 2.5px;
  transform: translateY(-1px) rotate(-45deg);
}
.calc-choice-input[type="radio"]:checked + .calc-choice-mark::after {
  content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--navy);
}
.calc-choice-input:disabled ~ * { opacity: .5; }
.calc-choice:has(.calc-choice-input:disabled) { cursor: not-allowed; background: var(--grey-bg); border-color: var(--line); }
.calc-choices[aria-invalid="true"] .calc-choice { border-color: var(--orange-ink); }

@media (max-width: 599px) { .calc-choices--2col { grid-template-columns: 1fr; } }
```

- L'état sélectionné ne repose pas sur la couleur : il y a la coche ou le point, la bordure plus épaisse et `:checked` côté lecteur d'écran.
- `:has()` est pris en charge par Safari 15.4+, Chrome 105+ et Firefox 121+. Si Dev veut couvrir plus large, il peut doubler avec une classe `.is-checked` posée en JS (même CSS).
- La case orange avec coche navy reprend l'association de `.btn-primary` (orange + navy, 6,30:1).

### 4.7 Erreurs en ligne et récapitulatif

```css
.calc-error {
  display: flex; align-items: flex-start; gap: 8px; margin-top: 2px;
  font-size: 14px; font-weight: 700; line-height: 1.45; color: var(--orange-ink);   /* 5,71:1 */
}
.calc-error::before {
  content: '!'; flex-shrink: 0; width: 18px; height: 18px; margin-top: 1px; border-radius: 50%;
  background: var(--orange-ink); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 12px;
}
.calc-error[hidden] { display: none; }

/* Récapitulatif en tête d'étape après clic sur « Continuer » si plusieurs erreurs */
.calc-alert {
  display: flex; gap: 14px; align-items: flex-start;
  padding: 16px 18px; margin: 0 0 24px; border-radius: 12px;
  background: var(--orange-tint); border: 1px solid rgba(168,75,15,.35); border-left: 4px solid var(--orange-ink);
  color: var(--navy); font-size: 15px; line-height: 1.55;          /* 12,81:1 */
}
.calc-alert-title { font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 16px; color: var(--navy); margin: 0 0 4px; }
.calc-alert ul { margin: 6px 0 0 18px; }
.calc-alert a { color: var(--navy); font-weight: 700; text-decoration: underline; text-decoration-color: var(--orange-ink); text-underline-offset: 3px; }
.calc-alert:focus { outline: 3px solid var(--navy); outline-offset: 3px; }   /* reçoit le focus (tabindex="-1") */

/* Message général (PDF indisponible, envoi Formspree échoué…) : même composant, variante info */
.calc-alert--info { background: var(--cream); border-color: var(--line); border-left-color: var(--navy); }
```

Vigilance pour Dev : chaque `.calc-error` est relié à son champ par `aria-describedby`, et le champ reçoit `aria-invalid="true"`. Le récapitulatif `.calc-alert` reçoit le focus et liste des liens d'ancre vers les champs. Les textes sont fournis par CR.

### 4.8 Boutons et actions

On n'invente aucun bouton : on réutilise `.btn` (l.167-175) et ses variantes.

| Usage | Classe | Rendu |
|---|---|---|
| Action principale de l'étape (« Continuer », « Calculer », « Voir mon rapport ») | `.btn .btn-primary` | orange, texte navy (6,30:1), ombre douce orange |
| Action principale des résultats (« Demander un devis ») | `.btn .btn-primary` | la seule action orange de l'écran de résultats |
| Télécharger le PDF | `.btn .btn-ghost` + icône | contour navy, survol fond navy et texte blanc |
| Soumettre la modale | `.btn .btn-primary` pleine largeur | |
| Recommencer, retour à l'étape précédente | `.calc-link-btn` (ci-dessous) | lien texte navy souligné orange, dérivé de `.link-arrow` |
| Bouton sur fond navy (encart CTA, si UX/UI en place un) | `.btn .btn-yellow` | jaune, texte navy (10,6:1), `focus-visible` blanc |

```css
.calc-actions { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 36px; flex-wrap: wrap; }
.calc-actions--end { justify-content: flex-end; }
.calc-actions--stack { flex-direction: column; align-items: stretch; }  /* résultats : boutons empilés */
.calc-actions .btn svg { width: 18px; height: 18px; flex-shrink: 0; }

.calc-link-btn {                                     /* « ← Retour », « Recommencer le calcul » */
  display: inline-flex; align-items: center; gap: 6px;
  min-height: 44px; padding: 8px 2px; background: none; border: 0; cursor: pointer;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 700; font-size: 15px; color: var(--navy);
  text-decoration: underline; text-decoration-color: var(--orange);
  text-decoration-thickness: 2px; text-underline-offset: 6px;
}
.calc-link-btn:hover { text-decoration-color: var(--navy); }

/* États absents d'index.html, à ajouter */
.btn[disabled], .btn[aria-disabled="true"] {
  opacity: .55; cursor: not-allowed; transform: none !important; box-shadow: none !important;
}
.btn.is-loading { position: relative; color: transparent !important; pointer-events: none; }
.btn.is-loading::after {
  content: ''; position: absolute; width: 20px; height: 20px; border-radius: 50%;
  border: 2.5px solid var(--navy); border-right-color: transparent;
  animation: calc-spin .7s linear infinite;
}
@keyframes calc-spin { to { transform: rotate(360deg); } }

@media (max-width: 599px) {
  .calc-actions { flex-direction: column-reverse; align-items: stretch; }   /* principal en haut, retour en bas */
  .calc-actions .calc-link-btn { align-self: center; }
}
```

- Au-dessus de 600 px, les boutons ne sont **plus** en `width:100%` : largeur au contenu, principal à droite et retour à gauche. En dessous de 600 px, `.btn{width:100%}` vient d'`index.html` l.823.
- Les flèches « → » des libellés relèvent de CR. Côté visuel, le site emploie `&rarr;` dans le texte du bouton (`index.html` l.1355), ce qui est cohérent.
- L'icône « ⬇ » (caractère emoji, rendu variable selon le système) est remplacée par un SVG inline de 18 px `stroke="currentColor"`.

### 4.9 Cartes de chiffres clés

Le motif dérive de `.card` / `.card-num` (l.366-383) et de `.b6-preview-amount` (l.561). Le chiffre principal reprend le soulignement orange du titre d'accueil (`.hero-title .accent`, l.319-324). C'est la signature visuelle du site.

```html
<div class="calc-metrics">
  <div class="calc-metric calc-metric--main">
    <span class="calc-metric-label">…</span>
    <span class="calc-metric-value"><span class="calc-metric-accent">48 200</span>&nbsp;<span class="calc-metric-unit">€</span></span>
    <span class="calc-metric-note">…</span>
  </div>
  <div class="calc-metric">…</div>
  <div class="calc-metric">…</div>
</div>
```

```css
.calc-metrics { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
.calc-metric {
  display: flex; flex-direction: column; gap: 10px;
  background: #fff; border: 1px solid var(--line); border-radius: 14px;
  padding: 24px 24px 22px;
}
.calc-metric--main { grid-column: 1 / -1; padding: 28px 28px 26px; }
.calc-metric-label {                                     /* = .b6-preview-label, couleur --text pour tenir sur crème */
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 12.5px;
  letter-spacing: .06em; text-transform: uppercase; color: var(--text); line-height: 1.4;
}
.calc-metric-value {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: clamp(30px, 3.4vw, 40px); line-height: 1; letter-spacing: -.5px;
  color: var(--navy); font-variant-numeric: tabular-nums;
}
.calc-metric--main .calc-metric-value { font-size: clamp(40px, 5.2vw, 60px); letter-spacing: -1.2px; }
.calc-metric-accent {
  text-decoration: underline; text-decoration-color: var(--orange);
  text-decoration-thickness: 5px; text-underline-offset: 8px; text-decoration-skip-ink: none;
}
.calc-metric-unit { font-size: .55em; font-weight: 700; }
.calc-metric-note { font-size: 13.5px; color: var(--text); line-height: 1.55; }
.calc-metric-note a { color: var(--navy); font-weight: 700; }

@media (max-width: 599px) {
  .calc-metrics { grid-template-columns: 1fr; gap: 12px; }
  .calc-metric, .calc-metric--main { padding: 20px; }
  .calc-metric--main .calc-metric-value { font-size: 40px; }
  .calc-metric-accent { text-decoration-thickness: 4px; text-underline-offset: 6px; }
}
```

- Pourquoi plus de cartes navy à chiffres jaunes ? Sur le site, les chiffres sont toujours en navy sur fond clair (`.card-num`, `.indic-value`, `.b6-preview-amount`). Le navy plein est réservé aux **blocs d'appel** (bloc 6, passeport). Avec trois cartes navy suivies d'un encart navy, on perd la hiérarchie.
- Les astérisques de renvoi (`*`, `**`) se placent dans `.calc-metric-note`, ou sur la valeur via `<sup>` à 0,5 em, en navy.
- Si UX/UI met trois chiffres de même rang, il suffit de retirer `--main` et de passer la grille à `repeat(3, …)` au-dessus de 900 px.

### 4.10 Badge de niveau de risque

**Échelle proposée (sans rouge) :**

| Niveau | Fond | Texte | Contraste | Segments pleins | Justification |
|---|---|---|---|---|---|
| Élevé | `--orange` `#FF914D` | `--navy` | 6,30:1 | 3/3 | couleur la plus chaude et la plus saturée de la charte : c'est l'alerte. L'accueil l'utilise déjà pour la jauge de risque (`.b6-preview-risk`, `.b6-preview-gauge`, l.562-564) |
| Modéré | `--yellow` `#FFDE59` | `--navy` | 10,60:1 | 2/3 | vigilance, cran intermédiaire |
| Maîtrisé | `--teal-tint` `#E6F8F6` + bordure `--teal-dark` | `--teal-dark` | 4,85:1 | 1/3 | teal = discours positif UP TO MOVE (« Notre réponse »), version sûre sur fond clair |

Pourquoi pas de rouge : la charte n'en contient pas, l'orange plein joue déjà le rôle d'alerte sur l'accueil, et les deux rouges actuels échouent ou frôlent le seuil (texte `#c0392b` sur `#fff0f0` : 4,91:1, mais bordure `#e74c3c` hors charte). L'orange (élevé) et le jaune (modéré) se distinguent mal pour certaines dyschromatopsies (1,68:1 entre eux). C'est pourquoi le **libellé** et la **jauge à 3 segments** portent l'information, conformément au critère WCAG 1.4.1.

```html
<p class="calc-risk" data-level="high">
  <span class="calc-risk-meter" aria-hidden="true"><i></i><i></i><i></i></span>
  <span class="calc-risk-label">Risque élevé</span>
</p>
```

```css
.calc-risk {
  display: inline-flex; align-items: center; gap: 10px;
  min-height: 36px; padding: 7px 16px 7px 12px; border-radius: 100px;
  font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 14px; line-height: 1.2;
  border: 1.5px solid transparent;
}
.calc-risk-meter { display: inline-flex; align-items: flex-end; gap: 3px; height: 16px; }
.calc-risk-meter i { display: block; width: 5px; border-radius: 2px; background: currentColor; opacity: .25; }
.calc-risk-meter i:nth-child(1) { height: 7px; }
.calc-risk-meter i:nth-child(2) { height: 11px; }
.calc-risk-meter i:nth-child(3) { height: 16px; }

.calc-risk[data-level="high"] { background: var(--orange); color: var(--navy); }
.calc-risk[data-level="high"] .calc-risk-meter i { opacity: 1; }

.calc-risk[data-level="med"]  { background: var(--yellow); color: var(--navy); }
.calc-risk[data-level="med"] .calc-risk-meter i:nth-child(-n+2) { opacity: 1; }

.calc-risk[data-level="low"]  { background: var(--teal-tint); color: var(--teal-dark); border-color: var(--teal-dark); }
.calc-risk[data-level="low"] .calc-risk-meter i:nth-child(1) { opacity: 1; }

/* Variante sur fond navy (si UX/UI pose le badge dans un bloc sombre) */
.calc-risk--on-dark[data-level="low"] { background: var(--teal); color: var(--navy); border-color: var(--teal); }  /* 6,48:1 */
```

Dev doit remplacer `b-high` / `b-med` / `b-low` par `data-level="high|med|low"` (mêmes clés que la variable JS `risque`).

### 4.11 Cartes de formations recommandées

Le motif dérive de `.diff-card` / `.pillar` (l.411-447) et de `.pillar-label` pour l'étiquette de durée.

```html
<ul class="calc-reco-list">
  <li class="calc-reco">
    <span class="calc-reco-tag" data-tone="orange">1h</span>
    <h4 class="calc-reco-title">…</h4>
    <p class="calc-reco-desc">…</p>
    <a class="calc-reco-link" href="…">Voir la formation <span aria-hidden="true">&rarr;</span></a>
  </li>
</ul>
```

```css
.calc-reco-list { list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
.calc-reco {
  display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
  background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 24px 24px 22px;
  transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}
.calc-reco:hover { border-color: rgba(30,41,82,.32); box-shadow: 0 10px 24px rgba(30,41,82,.07); }   /* = .table-summary:hover */
.calc-reco-tag {                                        /* = .pillar-label */
  display: inline-flex; align-items: center; padding: 5px 12px; border-radius: 100px;
  font-size: 11.5px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
}
.calc-reco-tag[data-tone="orange"] { background: var(--orange-tint); color: var(--navy); }     /* 12,81:1 */
.calc-reco-tag[data-tone="teal"]   { background: var(--teal-tint);   color: var(--teal-dark); } /* 4,85:1 */
.calc-reco-tag[data-tone="navy"]   { background: rgba(30,41,82,.08); color: var(--navy); }
.calc-reco-title {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 17px;
  color: var(--navy); line-height: 1.3; margin: 0;
}
.calc-reco-desc { font-size: 14.5px; color: var(--text); line-height: 1.65; margin: 0; flex: 1; }
.calc-reco-link {                                       /* = .link-arrow, sans la marge haute */
  margin-top: 4px; padding: 6px 0;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 700; font-size: 15px; color: var(--navy);
  text-decoration: underline; text-decoration-color: var(--orange);
  text-decoration-thickness: 2px; text-underline-offset: 6px;
}
.calc-reco-link:hover { text-decoration-color: var(--navy); }
@media (max-width: 899px) { .calc-reco-list { grid-template-columns: 1fr; } }
```

- Le JS associe `color:'fc-o'|'fc-t'|'fc-n'` (l.1085-1097). Il faut lire `data-tone="orange"|"teal"|"navy"`. Je recommande toutefois d'attribuer la couleur selon une **règle** (par exemple orange = formation socle, teal = analyse de poste, navy = complément) et non au hasard, sinon on cherche une clé de lecture qui n'existe pas. La règle elle-même relève d'UX/UI et de Céline.
- Le titre de la liste (« Formations recommandées… ») devient un `<h3 class="calc-section-title">` (§4.14), et non plus un petit libellé orange.

### 4.12 Encart ROI

Le motif dérive de `.passeport` (l.509-530), le bloc navy à dégradé de l'accueil.

```css
.calc-roi {
  background: linear-gradient(135deg, #1E2952 60%, #2a3870);
  border-radius: 20px; padding: 32px 36px; color: #fff;
  position: relative; overflow: hidden;
}
.calc-roi-badge {                                         /* = .passeport-badge */
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(255,222,89,.16); border: 1px solid rgba(255,222,89,.45); color: var(--yellow);
  font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: 5px 12px; border-radius: 100px; margin-bottom: 14px;
}
.calc-roi-value {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; line-height: 1.05;
  color: #fff; margin: 0 0 10px;
}
.calc-roi-mult { font-size: clamp(44px, 5vw, 60px); color: var(--yellow); letter-spacing: -1px; }   /* 10,6:1 */
.calc-roi-eco  { font-size: clamp(20px, 2.2vw, 26px); }
.calc-roi-sub  { font-size: 15px; line-height: 1.7; color: rgba(255,255,255,.82); max-width: 62ch; margin: 0; }  /* 9,88:1 */
.calc-roi-sub a { color: #fff; text-decoration-color: var(--yellow); }
.calc-roi :focus-visible { outline-color: var(--yellow); }
@media (max-width: 599px) { .calc-roi { padding: 26px 22px; border-radius: 16px; } .calc-roi-mult { font-size: 44px; } }
```

Le JS (l.1057) concatène aujourd'hui « ×3,2 — économie… » dans un seul nœud. Il faut le scinder en deux spans (`.calc-roi-mult`, `.calc-roi-eco`) pour la hiérarchie. Le format du texte relève de CR.

### 4.13 Encart d'appel (« Solution UP TO MOVE », aujourd'hui `.cta-box`)

Il se distingue de l'encart ROI navy par le dégradé de `.cta-final` (l.642-656).

```css
.calc-cta {
  background: linear-gradient(100deg, #FF914D 0%, #FFDE59 100%);
  border-radius: 20px; padding: 32px 36px; color: var(--navy);
}
.calc-cta-eyebrow { display: block; font-size: 11.5px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--navy); margin-bottom: 12px; }
.calc-cta-title { font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: clamp(22px, 2.4vw, 28px); line-height: 1.2; color: var(--navy); margin: 0 0 10px; }
.calc-cta-text { font-size: 16px; line-height: 1.7; color: var(--navy); max-width: 60ch; margin: 0 0 24px; }   /* 6,30:1 au pire (orange) */
.calc-cta .btn-navy:focus-visible { outline-color: var(--navy); }
@media (max-width: 599px) { .calc-cta { padding: 26px 22px; border-radius: 16px; } }
```
Sur ce fond, le bouton est `.btn .btn-navy` (blanc sur navy, 14,05:1), puisqu'un bouton orange sur un fond orange-jaune serait invisible. Si l'encart n'a pas de bouton (le devis étant porté par `.calc-actions`), on supprime simplement la marge basse du texte.

### 4.14 Titres de section dans les résultats, liste de valeur, mention légale

```css
.calc-section-title {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: clamp(20px, 2vw, 24px); line-height: 1.25; color: var(--navy); margin: 0 0 16px;
}
.calc-results > * + * { margin-top: 32px; }                      /* rythme indépendant de l'ordre */

/* Liste « dans votre rapport » (ex-.gate-value), si UX/UI la conserve */
.calc-checklist { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 22px 24px; background: var(--cream); border-radius: 14px; }
.calc-checklist li { display: flex; gap: 12px; align-items: flex-start; font-size: 15px; line-height: 1.6; color: var(--text); }
.calc-checklist li::before {
  content: ''; flex-shrink: 0; width: 20px; height: 20px; margin-top: 2px; border-radius: 50%;
  background: var(--teal-dark) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='8' viewBox='0 0 12 9'%3E%3Cpath d='M1 4.5l3.2 3L11 1' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/11px no-repeat;
}

/* Mention « estimations indicatives » (ex-.disclaimer, 2,29:1 ✗) */
.calc-disclaimer { font-size: 13px; line-height: 1.6; color: var(--text); margin-top: 24px; }
```

### 4.15 Encart méthode et sources (repliable)

On réutilise **sans modification** `.table-wrap` / `.table-summary` d'`index.html` l.449-495, avec une icône « livre » ou « info » dans `.table-summary-icon`. On n'ajoute que le contenu :

```css
.calc-method { padding: 22px 24px 26px; }                         /* à placer dans .table-scroll à la place du tableau */
.calc-method h4 { font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800; font-size: 15.5px; color: var(--navy); margin: 18px 0 6px; }
.calc-method h4:first-child { margin-top: 0; }
.calc-method p, .calc-method li { font-size: 14.5px; line-height: 1.7; color: var(--text); }
.calc-method ol, .calc-method ul { margin: 6px 0 0 20px; display: flex; flex-direction: column; gap: 6px; }
.calc-method a { color: var(--navy); font-weight: 700; text-decoration: underline; text-decoration-color: var(--orange); text-decoration-thickness: 2px; text-underline-offset: 4px; overflow-wrap: anywhere; }
.calc-method .calc-tag-hyp {                       /* étiquette « hypothèse UP TO MOVE » (règle n° 4 de calculateur/CLAUDE.md) */
  display: inline-flex; padding: 2px 8px; border-radius: 6px; margin-left: 6px; vertical-align: 1px;
  font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  background: rgba(30,41,82,.08); color: var(--navy);
}
.calc-method .calc-tag-src { /* même gabarit */ background: var(--teal-tint); color: var(--teal-dark); }
```

Le même gabarit d'étiquette (`.calc-tag-hyp` / `.calc-tag-src`) peut servir ailleurs sur la page, par exemple à côté d'un chiffre affiché, pour distinguer « sourcé » de « hypothèse ».

Dans `.table-scroll`, `padding:18px` est remplacé par `padding:0` pour cet usage : la classe `.calc-method` porte les marges. Sous 900 px, la règle `overflow-x:auto` d'index (l.793) est sans effet ici (pas de tableau).

### 4.16 Modale de téléchargement

```css
.calc-modal-overlay {
  position: fixed; inset: 0; z-index: 500;                         /* > nav (400) et > menu mobile */
  display: none; align-items: center; justify-content: center; padding: 16px;
  background: rgba(30,41,82,.72); backdrop-filter: blur(3px);
}
.calc-modal-overlay.is-open { display: flex; }
.calc-modal {
  position: relative; width: 100%; max-width: 560px; max-height: calc(100dvh - 32px); overflow-y: auto;
  background: #fff; border-radius: 20px; padding: 36px 36px 28px;
  box-shadow: 0 30px 70px rgba(30,41,82,.35);                        /* = .b6-preview */
}
.calc-modal-title {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: 26px; line-height: 1.15; letter-spacing: -.5px; color: var(--navy);
  margin: 0 48px 8px 0;                                              /* place pour la croix */
}
.calc-modal-sub { font-size: 15.5px; line-height: 1.6; color: var(--text); margin: 0 0 24px; }
.calc-modal form { display: flex; flex-direction: column; gap: 16px; }
.calc-modal-close {
  position: absolute; top: 16px; right: 16px; width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--cream); color: var(--navy); border: 0; cursor: pointer;
  transition: background-color .2s ease;
}
.calc-modal-close:hover, .calc-modal-close:focus-visible { background: var(--yellow); }   /* = .table-summary-chevron */
.calc-modal-close svg { width: 18px; height: 18px; }
.calc-modal-note { font-size: 13px; line-height: 1.55; color: var(--muted); margin: 4px 0 0; }   /* sur blanc : 4,83:1 */
.calc-modal-note a { color: var(--navy); }
.calc-form-status { display: none; align-items: center; gap: 8px; font-size: 14.5px; font-weight: 700; line-height: 1.45; }
.calc-form-status.is-success { display: flex; color: var(--teal-dark); }      /* 5,33:1 */
.calc-form-status.is-error   { display: flex; color: var(--orange-ink); }     /* 5,71:1 */
body.modal-open { overflow: hidden; }

@media (max-width: 599px) {
  .calc-modal-overlay { align-items: flex-end; padding: 0; }
  .calc-modal {
    max-width: none; border-radius: 20px 20px 0 0;
    padding: 28px 20px calc(20px + env(safe-area-inset-bottom));
    max-height: 92dvh;
  }
  .calc-modal-title { font-size: 22px; }
}
@media (prefers-reduced-motion: no-preference) {
  .calc-modal-overlay.is-open .calc-modal { animation: calc-modal-in .28s cubic-bezier(.22,1,.36,1); }
  @keyframes calc-modal-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
}
```

- Les champs de la modale reprennent `.calc-field` / `.calc-input` / `.calc-grid2` (§4.4). Ainsi la modale et les étapes ont exactement le même champ.
- Le caractère « ✕ » est remplacé par un SVG (croix de deux traits, `stroke-width:2`, `currentColor`).
- Prévoir `role="dialog"`, `aria-modal="true"` et `aria-labelledby` vers le titre, un piège de focus, la fermeture par Échap et le retour du focus sur le bouton PDF. C'est pour Dev ; le visuel n'en dépend pas.
- Le `z-index` actuel (200) passe **sous** la nav sticky d'index (400). Il faut 500.

---

## 5. Rapport PDF (jsPDF)

### 5.1 Palette RVB

Elle remplace les constantes des l.1252-1255. Toutes les couleurs grises « à l'œil » sont supprimées.

```js
var NAVY=[30,41,82], ORANGE=[255,145,77], YELLOW=[255,222,89],
    TEAL=[46,196,182],          // UNIQUEMENT sur fond NAVY
    TEAL_DARK=[18,120,111],     // texte/icône teal sur fond clair
    ORANGE_INK=[168,75,15],     // rarement : texte orange sur fond clair (non utilisé par défaut)
    CREAM=[247,246,242],        // remplace CREAM [248,246,240] ET LIGHTBG
    ORANGE_TINT=[255,242,234], TEAL_TINT=[230,248,246],
    LINE=[232,230,224],         // remplace BORDERC [225,218,196]
    TEXT=[55,65,81],            // remplace GRAYTXT [90,96,112] et [90,90,90]
    MUTED=[107,114,128],        // remplace [136,136,136] et [160,160,160] (sur blanc uniquement)
    WHITE=[255,255,255],
    ON_NAVY_82=[214,216,224],   // blanc 82 % sur navy : remplace [190,196,220] / [210,214,232]
    ON_NAVY_60=[165,169,186];   // blanc 60 % sur navy (6,01:1) : remplace [150,158,190]
var RISK = {                     // fond, texte
  high:{bg:ORANGE, fg:NAVY},     // 6,30:1
  med: {bg:YELLOW, fg:NAVY},     // 10,6:1
  low: {bg:TEAL,   fg:NAVY}      // 6,48:1 — le badge est posé sur le bandeau NAVY
};
```

### 5.2 Corrections par bloc

| Bloc (lignes) | Aujourd'hui | Spec |
|---|---|---|
| Bandeau titre l.1266-1299 | navy, sous-titre « RAPPORT… » en TEAL, entreprise en YELLOW, badge texte **blanc** sur couleur ✗ | Fond navy conservé. Titre 18 pt bold blanc (au lieu de 15,5). Libellé « RAPPORT… » TEAL 8,5 pt avec `doc.setCharSpace(0.6)` (TEAL sur navy autorisé). Entreprise YELLOW 13 pt. Badge : `RISK[c.risque].bg` / `.fg`. On ajoute trois petits segments à gauche du libellé (rect 1,2 × 2,5 / 3,5 / 5 mm, pleins = NAVY, vides = NAVY non dessinés) pour reprendre la jauge du web. |
| Liseré tricolore l.1296-1299 et l.1484-1487 | orange / jaune / **teal** | On le remplace par le **dégradé orange→jaune** du site (`.cta-final`). jsPDF ne gère pas de dégradé natif : on dessine 40 bandes interpolées (code §5.3). Sur les pages 2 et suivantes (fond clair), cela supprime aussi le teal posé sur clair. |
| Métriques l.1302-1316 | 3 cartes navy, valeurs jaunes | Calqué sur §4.9 : **coût** en carte pleine largeur CREAM, label TEXT 7,5 pt bold majuscules, valeur NAVY 24 pt bold, filet ORANGE 1,2 mm sous la valeur (largeur = largeur du texte), comme le soulignement du web. **Jours perdus / exposés** : deux cartes CREAM demi-largeur, valeur NAVY 16 pt. |
| Note astérisques l.1318-1327 | fond [255,248,232], barre orange, texte [90,90,90] | Fond ORANGE_TINT, barre gauche ORANGE 1,2 mm (décorative, conservée), texte TEXT 7,8 pt. |
| Titres de section l.1332, 1385, 1420 | texte ORANGE ✗ + filet orange | Texte **NAVY** bold 10,5 pt, `setCharSpace(0.4)`. Filet ORANGE 0,6 mm conservé dessous, réduit à 24 mm de large (accent, pas une règle pleine page). |
| Détail du coût l.1341-1356 | CREAM, séparateurs BORDERC | CREAM, séparateurs LINE, libellés TEXT, montants NAVY. Ligne TOTAL : fond ORANGE_TINT sur toute la largeur de la ligne, NAVY bold 11 pt. |
| Source sous le détail l.1357 | [160,160,160] 7,5 pt | MUTED 7,5 pt (4,83:1 sur blanc). |
| ROI l.1362-1373 | aplat **TEAL** sur page blanche + contour navy (règle teal enfreinte, reste de l'ombre dure) | Aplat **NAVY**, pas de contour, rayon 3 mm. Libellé YELLOW 8 pt bold majuscules, multiplicateur YELLOW 22 pt bold, économie WHITE 13 pt bold sur la même ligne, phrase de base ON_NAVY_82 8 pt. |
| Formations l.1376-1415 | carte CREAM, étiquette durée texte ORANGE sur [255,240,230] ✗, lien ORANGE ✗ | Carte blanche avec contour LINE 0,3 mm (`setDrawColor`), rayon 2,5. Étiquette selon `data-tone` : ORANGE_TINT + NAVY / TEAL_TINT + TEAL_DARK / [233,234,238] + NAVY (11,69:1). Titre NAVY 10 pt bold, description TEXT 8,5 pt. Lien « Voir la formation » NAVY 8,5 pt bold + soulignement ORANGE 0,5 mm (`doc.line` sous le texte). |
| Profil entreprise l.1418-1471 | libellés [136,136,136] sur CREAM (3,3:1 ✗) | Libellés TEXT 7 pt bold majuscules (9,5:1 sur CREAM), valeurs NAVY 9 pt bold. |
| En-tête pages 2 et suivantes l.1478-1488 | LIGHTBG + liseré tricolore | CREAM + dégradé orange→jaune 0,7 mm. |
| Pied de page l.1490-1501 | navy, URL TEAL, texte [190,196,220] / [150,158,190] | Navy conservé. URL TEAL (autorisé sur navy), coordonnées ON_NAVY_82, « © » ON_NAVY_60 (6,01:1). Les valeurs actuelles passent déjà AA ([190,196,220] = 8,11:1 ; [150,158,190] = 5,31:1). Le changement sert seulement à les aligner sur deux jetons nommés. |

### 5.3 Dégradé de marque (utilitaire)

```js
function brandStripe(y, h){
  var N=40, w=PW/N;
  for(var i=0;i<N;i++){
    var t=i/(N-1);
    doc.setFillColor(
      Math.round(ORANGE[0]+(YELLOW[0]-ORANGE[0])*t),
      Math.round(ORANGE[1]+(YELLOW[1]-ORANGE[1])*t),
      Math.round(ORANGE[2]+(YELLOW[2]-ORANGE[2])*t));
    doc.rect(i*w, y, w+0.2, h, 'F');   // +0,2 mm : évite les liserés blancs à l'anti-crénelage
  }
}
```

### 5.4 Hiérarchie typographique PDF

jsPDF n'offre que Helvetica en standard. Embarquer Encode Sans Compressed et Nunito (TTF en base64, `addFileToVFS` + `addFont`) est possible mais alourdit la page d'environ 150 à 300 Ko. **Ce n'est pas recommandé** : Helvetica bold condensée par la taille suffit. Voici l'échelle :

| Rôle | Taille | Graisse | Couleur |
|---|---|---|---|
| Titre du rapport | 18 pt | bold | WHITE (sur navy) |
| Chiffre principal | 24 pt | bold | NAVY |
| Multiplicateur ROI | 22 pt | bold | YELLOW (sur navy) |
| Titre de section | 10,5 pt, `charSpace 0.4` | bold | NAVY |
| Chiffre secondaire | 16 pt | bold | NAVY |
| Titre de carte | 10 pt | bold | NAVY |
| Corps | 8,5-9 pt | normal | TEXT |
| Libellé en majuscules | 7-7,5 pt | bold | TEXT |
| Notes, sources | 7,5 pt (minimum 7) | normal | MUTED |

### 5.5 À signaler (hors Design)

- Les liens PDF des formations pointent vers `https://uptomove-site.vercel.app/…` (l.1411). Il faudrait `https://www.uptomove.fr/…`, sans `.html` (cf. `URL_SED` / `URL_MAN` l.1066-1067). C'est pour Dev.
- Le pied de page PDF contient un numéro de téléphone mobile (l.1497). Ce texte relève de CR et de Céline, je le signale seulement.

---

## 6. Responsive : points de contrôle (375 / 768 / 1280 px)

Je n'ai pas pu faire de vérification dans un navigateur. Voici ce qu'il faut contrôler une fois la page intégrée :

| Largeur | Attendu |
|---|---|
| **1280** | Nav à 88 px avec logo à 64 px, puis à 68 px et logo à 48 px en `is-solid`. Carte d'étape à 760 px centrée, résultats à 960 px. Métriques : coût pleine largeur + 2 colonnes. Formations sur 2 colonnes. Boutons à largeur de contenu, principal à droite. Modale centrée à 560 px. |
| **768** (≤ 899) | Hamburger, panneau navy plein écran + overlay. Hero aligné à gauche, h1 vers 32 px. Choix en 2 colonnes conservés. Formations sur 1 colonne. Footer sur 1 colonne (règle d'index l.786). |
| **375** (< 600) | Carte à 16 px de rayon et 22 × 18 px de marge interne. Tous les `.calc-grid2`, choix et métriques en 1 colonne. Libellés du stepper masqués. Boutons pleine largeur, principal au-dessus et lien retour centré dessous. Modale en feuille basse (bottom sheet). Champ % de 104 px qui ne déborde pas avec un libellé de 2 lignes (« 65 ans et + (âge légal de départ) »). **Aucun défilement horizontal.** |
| 360 et 320 | Contrôler `.calc-split-row` (règle ≤ 379 px) et le h1 à 27 px. |
| Mouvement réduit | Pas de transform au survol, pas d'animation d'ouverture de la modale ni de spinner rotatif (la règle globale d'index l.874-887 les neutralise). |

---

## 7. Points de vigilance pour Dev

1. **Ordre d'intégration** : (a) `:root` + base + polices, (b) nav, footer et JS nav copiés d'index, (c) composants `calc-*`, (d) suppression de l'ancien CSS (l.22-383) **en bloc**, sans mélanger les deux systèmes, (e) PDF.
2. **Plus aucune couleur codée en dur** dans le HTML ou le JS de la page (sauf le PDF, qui ne peut pas lire les variables CSS : on utilise les constantes du §5.1). Contrôle conseillé : `grep -nE '#[0-9a-fA-F]{3,6}' calculateur-tms-web.html` ne doit plus remonter que le `:root`, les data-URI SVG et le PDF.
3. **Plus aucun attribut `style=`** (§1.4), y compris dans les gabarits JS (`formationsHTML` l.1044-1049, s'il sert encore).
4. **`#2EC4B6` n'apparaît que** dans `--teal`, `.hero-eyebrow`, `.calc-risk--on-dark` et le PDF sur navy. Toute autre occurrence est une erreur.
5. **Plus aucun `box-shadow` sans flou** : `grep -nE 'box-shadow:\s*-?[0-9]+px -?[0-9]+px 0 ' calculateur-tms-web.html` doit rester vide. Seuls sont admis les halos `0 0 0 Npx` (focus) et les `inset`.
6. Les classes d'état sont pilotées par le JS : `.is-done`, `.is-current` (stepper), `data-state` (total %), `data-level` (risque), `data-tone` (formations), `.is-open` (modale), `aria-invalid` (erreurs). Il ne faut pas réintroduire `sel`, `pb`, `b-high`, `fc-o`…
7. `:has()` (cartes de choix) : à doubler d'une classe `.is-checked` en JS si l'on veut couvrir Firefox avant la version 121.
8. **Ombres hors survol** : seules la carte d'étape (`.calc-card`), la modale et les boutons ont une ombre au repos. Les cartes de résultats n'en ont qu'au survol, comme sur l'accueil.
9. **Bouton d'export des leads** (`#export`, l.1577-1581) : bouton interne, à styler simplement avec `.btn .btn-navy` en `position:fixed`, sans couleur codée en dur.

## 8. À arbitrer par l'agent principal ou Céline

- Valider l'ajout de `--orange-ink` `#A84B0F` et de `--field-line` `#8389A0` à la charte (`MEMO-SITE.md` §5). Le repli possible est décrit au §2.
- Valider l'échelle de risque **orange / jaune / teal** sans rouge (§4.10).
- Hors chantier calculateur, pour les agents du site : `.tag-orange` d'`index.html` (texte orange 2,08:1 ✗), ligne basse du footer à `rgba(255,255,255,.3)` (2,60:1 ✗) sur toutes les pages, bordures de champs `#E8E6E0` dans `contact.html` et `formations.html` (1,25:1 ✗), erreur newsletter en `#EF4444` (index l.1449), et `--muted` utilisé sur crème (4,47:1 ✗, déjà signalé le 2026-10-02).
