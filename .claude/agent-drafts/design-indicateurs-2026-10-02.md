# Spec visuelle — Bloc « indicateurs de résultats » (index.html)

**Agent Design · 2026-10-02 · chantier `indicateurs`**
Cadre de référence : `MEMO-SITE.md` §5 (identité visuelle) + patterns existants du `<style>` de `index.html`.
Périmètre : le composant seul. L'emplacement est traité par UX/UI, les textes par CR.
Note : la skill `impeccable` n'est pas installée sur ce poste — audit mené à la main sur la feuille de style de `index.html`.

---

## 1. Décision n°1 — barre décorative, pas barre de progression

**Verdict : filet pleine largeur, décoratif, uniforme. Pas de barre de progression.**

Cinq arguments, du plus fort au plus faible :

1. **Le chiffre est déjà plus précis que la barre.** Une barre ne peut pas être « plus honnête » qu'un nombre exact (98,9 %). Elle ne peut qu'être moins précise. L'argument d'honnêteté, qui est le seul vrai argument pour la progression, ne tient pas ici.
2. **La plage 86–100 % rend la barre muette.** Sur une colonne de ~400 px, l'écart entre 86 % et 100 % fait 56 px. Six barres quasi identiques : le lecteur croit voir une égalité là où il y a 14 points d'écart. La barre dégrade l'information au lieu de la porter.
3. **Le risque de lecture « 14 % d'échec » est réel sur un bloc institutionnel.** Un acheteur ou un auditeur lit un vide comme un manque. Sur un bloc dont la fonction est la conformité Qualiopi, c'est le pire effet possible.
4. **Problème de contraste insoluble (WCAG 1.4.11).** Une barre qui porte de l'information est un objet graphique informatif : il lui faut ≥ 3:1 contre les couleurs adjacentes. Mesures faites :
   - orange `#FF914D` sur crème `#F7F6F2` = **2,06:1** → échec (c'est aussi pourquoi l'orange est interdit en texte sur fond clair) ;
   - piste (track) `#E8E6E0` sur crème = **1,15:1** → la piste est invisible, donc le remplissage n'est pas lisible ;
   - une piste assez foncée pour atteindre 3:1 sur crème transforme la barre en gros trait sombre et tue la lecture « jauge ».
   Il n'existe pas de combinaison dans la charte qui donne une barre de progression conforme **et** légère sur fond crème.
5. **Six barres empilées = un graphique.** Ça invite à comparer des indicateurs qui ne sont pas comparables entre eux (satisfaction, réussite, atteinte des objectifs ne sont pas mesurés sur les mêmes panels ni avec les mêmes questions).

**Conséquence de mise en œuvre, importante :** pour qu'aucun œil ne puisse lire le filet comme une jauge remplie à 100 %, il ne faut **pas** un élément `<span>` dans une piste. Le filet doit être un `border-bottom: 3px solid` posé sur la ligne elle-même :

- zéro markup supplémentaire ;
- **bouts carrés, pas de `border-radius`, pas de piste derrière** (une barre arrondie posée sur une piste crème se lit forcément comme une jauge à 100 %) ;
- invisible pour les lecteurs d'écran **par construction** — pas d'`aria-hidden` à poser, pas de `role` à gérer.

## 2. Décision n°2 — couleur des filets : les six en bleu marine

La référence de Céline mélange 2 filets brique et 4 bleus sans portée sémantique. **À ne pas reproduire.** Deux raisons :

- le ton brique n'existe pas dans la charte (`MEMO-SITE.md` §5) — il n'y a pas de substitut, l'orange `#FF914D` n'est pas un brique et ne tient pas le contraste ;
- surtout : une différence de couleur sans clé de lecture fait chercher une clé. Sur un bloc lu par un auditeur, deux indicateurs colorés autrement posent la question « pourquoi ceux-là ? ». Aucun des six n'a de statut particulier → aucun ne doit être coloré autrement.

Les six filets : `#1E2952`. Contrastes mesurés : **12,99:1 sur crème**, **14,05:1 sur blanc**. Largement au-delà du 3:1 exigé pour un objet graphique, même si celui-ci est ici purement décoratif.

La couleur de marque entre dans le bloc par **l'eyebrow déjà existant** (`.tag`), pas par les données. Recommandation : réutiliser `.tag-teal` (texte `--teal-dark` `#12786F` = 4,93:1 sur crème, 5,33:1 sur blanc) plutôt que `.tag-orange`, parce que `.tag-orange` est déjà la signature du bloc 3 « Le constat » (le problème) et que `.tag-teal` sert déjà au discours UP TO MOVE (« Notre réponse », bloc 4). Le libellé de la pastille est du ressort de CR.

## 3. Typographies et dimensions

**Pourquoi Nunito pour les libellés et non Encode Sans Compressed :** sur ce site, *tous* les micro-libellés en capitales espacées sont déjà en Nunito 700 (`.tag` l.146-151, `.bc-label` l.351-354, `.b6-preview-label` l.560, `.pillar-label` l.412-417). Encode Sans Compressed est une condensée : condensée + capitales + interlettrage large donne des lettres étroites séparées par de larges blancs, précisément le cas où la lecture décroche — et « MISE EN PRATIQUE DES ACQUIS » fait 26 caractères. Encode Sans Compressed reste sur **les valeurs** (comme `.card-num`, `.b6-preview-amount`), Nunito sur les libellés.

| Élément | Police | Graisse | Taille desktop | Taille ≤ 599 px | Couleur | Contraste crème / blanc |
|---|---|---|---|---|---|---|
| Libellé (capitales) | Nunito | 700 | 13 px · `letter-spacing: .08em` | 12,5 px · `.04em` | `#1E2952` | 12,99 / 14,05 |
| Valeur | Encode Sans Compressed | 800 | `clamp(26px, 2.6vw, 34px)` | 26 px | `#1E2952` | 12,99 / 14,05 |
| Signe `%` | Encode Sans Compressed | 700 | `0.52em` de la valeur | idem | `#1E2952` | idem |
| Mention de période | Nunito | 600 | 13 px, pas de capitales | 13 px | `#374151` | 9,53 / 10,30 |
| Note Qualiopi | Nunito | 400 | 13 px | 13 px | `#374151` | 9,53 / 10,30 |
| Filet | — | — | 3 px, bouts carrés | 3 px | `#1E2952` | 12,99 / 14,05 |

**Écart à signaler sur la charte existante :** `--muted` `#6B7280` donne **4,47:1 sur crème `#F7F6F2`** — sous le seuil de 4,5:1. C'est la couleur utilisée par `.card-source` (l.383) et `.bc-label` (l.351), qui apparaissent sur fond crème dans le bloc 3. Ce n'est pas mon chantier, mais **ne pas l'utiliser pour la mention de période ni pour la note Qualiopi** : `--text` `#374151` à la place. (Sur fond blanc, `--muted` passe à 4,83:1 et reste conforme — d'où l'importance ici, le bloc devant tenir sur les deux fonds.)

Le signe `%` : taille `0.52em`, graisse 700 contre 800 pour la valeur. Espace insécable **à taille pleine avant** le span, pour respecter la typographie française et rester cohérent avec `87&nbsp;%` (l.934) : `98,9&nbsp;<span class="indic-unit">%</span>`.

**Observation pour Céline / CR (pas une décision Design) :** la série mélange « 86,0 % » (décimale affichée) et « 90 % » / « 100 % » (sans). Le « ,0 » signale une précision de mesure, c'est défendable, mais l'alignement à droite rendra l'irrégularité visible. À trancher par Céline : soit on garde les décimales telles que les donne le bilan (traçabilité), soit on homogénéise.

## 4. Structure et espacements

Préfixe de classes : `indic-` (vérifié : aucune collision dans `index.html`, qui utilise déjà `bc-`, `b6-`, `uc-`, `diff-`, `testi-`).

Markup `<dl>` : il donne gratuitement l'association libellé → valeur aux lecteurs d'écran, sans aucun ARIA. Le reset global `* { margin: 0 }` (l.128) neutralise déjà la marge par défaut du `<dd>`.

```html
<div class="indic reveal">
  <!-- Eyebrow + titre + phrase de périmètre : wording CR, classes existantes .tag .tag-teal / h2 / .section-sub -->
  <p class="indic-scope"><!-- [CR] périmètre + année 2026 --></p>

  <dl class="indic-grid">
    <div class="indic-row">
      <dt class="indic-label">Taux de satisfaction</dt>
      <dd class="indic-value">98,9&nbsp;<span class="indic-unit">%</span></dd>
    </div>
    <div class="indic-row">
      <dt class="indic-label">Taux de réussite</dt>
      <dd class="indic-value">90&nbsp;<span class="indic-unit">%</span></dd>
    </div>
    <div class="indic-row">
      <dt class="indic-label">Atteinte des objectifs</dt>
      <dd class="indic-value">87,5&nbsp;<span class="indic-unit">%</span></dd>
    </div>
    <div class="indic-row">
      <dt class="indic-label">Animation des formations</dt>
      <dd class="indic-value">100&nbsp;<span class="indic-unit">%</span></dd>
    </div>
    <div class="indic-row">
      <dt class="indic-label">Pertinence des contenus</dt>
      <dd class="indic-value">100&nbsp;<span class="indic-unit">%</span></dd>
    </div>
    <div class="indic-row">
      <dt class="indic-label">Mise en pratique des acquis</dt>
      <dd class="indic-value">86,0&nbsp;<span class="indic-unit">%</span></dd>
    </div>
  </dl>

  <p class="indic-note">
    <!-- [CR] mention Qualiopi + n° F3740-1-I -->
    <a href="certificat-qualiopi-uptomove.pdf" target="_blank" rel="noopener">…</a>
  </p>
</div>
```

```css
/* ── BLOC INDICATEURS — fonctionne sur .section-cream comme sur .section-white ── */
.indic { max-width: 880px; margin-inline: auto; text-align: left; }

.indic-scope {
  font-family: 'Nunito', sans-serif; font-weight: 600; font-size: 13px;
  color: var(--text); line-height: 1.6; margin: 0 0 22px;
}

.indic-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(40px, 6vw, 88px); row-gap: 0;
}

.indic-row {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 16px;
  padding: 26px 0 14px;
  border-bottom: 3px solid var(--navy);   /* le « filet » : décoratif, invisible pour l'AT */
}

.indic-label {
  flex: 1 1 auto; min-width: 0;
  font-family: 'Nunito', sans-serif; font-weight: 700;
  font-size: 13px; letter-spacing: .08em; text-transform: uppercase;
  color: var(--navy); line-height: 1.35;
}

.indic-value {
  flex: 0 0 auto; margin-left: auto; white-space: nowrap;
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: clamp(26px, 2.6vw, 34px); line-height: 1;
  color: var(--navy); font-variant-numeric: tabular-nums;
}
.indic-unit { font-size: .52em; font-weight: 700; }

.indic-note {
  font-family: 'Nunito', sans-serif; font-weight: 400; font-size: 13px;
  color: var(--text); line-height: 1.7; margin: 26px 0 0;
}
.indic-note a {
  color: var(--navy); font-weight: 700; display: inline-block; padding: 6px 0;
  text-decoration: underline; text-decoration-color: var(--orange);
  text-decoration-thickness: 2px; text-underline-offset: 4px;
}

/* ── Palier tablette / mobile ≤ 899 px : une colonne ── */
@media (max-width: 899px) {
  .indic-grid { grid-template-columns: 1fr; }
  .indic-row  { padding: 18px 0 12px; gap: 12px; }
}

/* ── Palier mobile ≤ 599 px ── */
@media (max-width: 599px) {
  .indic-label { font-size: 12.5px; letter-spacing: .04em; }
}
```

Notes de mise en œuvre pour Dev :

- **Fond : aucun.** Le bloc est transparent, sans carte, sans bordure, sans ombre. C'est ce qui le rend indifférent au fond crème ou blanc, et c'est aussi ce qui le distingue du bloc 3. **Ne pas lui donner `background: var(--cream)`** : sur section crème il serait invisible mais décalé, sur section blanche il se transformerait en carte, ce qui contredit toute la spec.
- `text-align: left` est explicite sur `.indic` : si UX/UI le place dans un `.section-inner.text-center` (cas de la plupart des blocs de la page), le centrage hérité casserait l'alignement libellé-gauche / valeur-droite.
- **Animation : `.reveal` sur `.indic`, pas `.stagger` sur `.indic-grid`.** `.stagger` (l.645-649) n'a de `transition-delay` que pour `nth-child(2)` à `(4)` : avec six lignes, les lignes 5 et 6 apparaîtraient sans délai, en même temps que la 1. Incohérent.
- **Pas de `:hover`.** Rien n'est cliquable dans la grille. Le `transform: scale(1.04)` de `.card` (l.371) est à ne pas reprendre : il signalerait de l'interactivité là où il n'y en a pas.
- Les filets des deux colonnes restent alignés horizontalement : les items de grille s'étirent à la hauteur de leur rangée (`align-items: stretch` par défaut), donc un libellé qui passerait sur deux lignes à gauche descendrait aussi le filet de droite. Aucun `height`, aucun `overflow: hidden`, aucun `white-space: nowrap` sur les libellés — c'est ce qui garantit la tenue à 200 % de zoom.
- Largeur de colonne vérifiée : 880 px − 88 px de gouttière = 396 px par colonne. Le libellé le plus long (« Mise en pratique des acquis », 26 caractères à 13 px + .08em) mesure ~237 px, la valeur la plus large ~76 px, soit ~329 px avec la gouttière interne. Aucun retour à la ligne au desktop.

## 5. Comportement mobile, en détail

- **Bascule à 899 px** (le breakpoint déjà en place sur la page) : une seule colonne. Pas de breakpoint intermédiaire nécessaire — à deux colonnes sous 900 px, les libellés passeraient tous sur deux lignes.
- **Le pourcentage reste à droite, toujours.** `margin-left: auto` sur `.indic-value` le colle au bord droit de la ligne, quelle que soit la longueur du libellé. Le filet continue de souligner l'ensemble libellé + valeur, ce qui maintient leur lien visuel sans tableau ni puce.
- **Filet de sécurité automatique pour les très petits écrans**, sans media query : `flex-wrap: wrap` sur `.indic-row` + `white-space: nowrap` sur la valeur. Tant que libellé et valeur tiennent côte à côte, ils y restent ; si la place manque vraiment, la valeur descend d'une ligne **et reste alignée à droite** grâce au `margin-left: auto`. Le nombre, lui, ne se coupe jamais.
- Calculs à 375 px : gouttière `clamp(20px, 5vw, 64px)` = 20 px, donc 335 px utiles. Valeur à 26 px ≈ 78 px, gouttière 12 px → ~245 px pour le libellé ; « MISE EN PRATIQUE DES ACQUIS » à 12,5 px / .04em ≈ 215 px. **Tient sur une ligne.** À 320 px (235 px pour le libellé moins la valeur → ~190 px), il passe sur deux lignes proprement grâce à `line-height: 1.35`, ou la valeur descend : les deux dégradations sont acceptables et lisibles.
- **Pourquoi ne pas descendre sous 12,5 px :** ce bloc est lu par des acheteurs et des auditeurs, souvent sur mobile. Des capitales espacées sous 12 px deviennent pénibles. Mieux vaut un libellé sur deux lignes qu'un libellé minuscule sur une.
- **Hauteur totale mobile** : ~56 px par ligne × 6 ≈ 340 px + périmètre + note. Compact, pas de scroll interminable.
- **Zones cliquables** : rien n'est cliquable dans la grille, le minimum de 44 px ne s'applique donc pas aux lignes. En revanche le lien « certificat » de `.indic-note` reçoit `padding: 6px 0` + `display: inline-block` (pattern `.link-arrow`, l.587-592). Si UX/UI ou CR ajoutent un vrai bouton sous le bloc, il doit passer par `.btn` existant (déjà `min-height: 52px`, et `width: 100%` sous 600 px, l.776).
- **Mobile paysage** (`max-height: 500px`, l.800-824) : rien à prévoir, le bloc est en flux normal et suit la largeur disponible.

## 6. Différenciation avec le bloc 3 (« Le constat »)

C'est le point de vigilance le plus important : deux séries de grands pourcentages sur une même page. L'un décrit un **problème** (externe, sourcé INRS), l'autre une **performance** (interne, certifiée). Sept différences cumulées, aucune ambiguïté possible :

| | Bloc 3 « Le constat » (l.924-963) | Bloc indicateurs |
|---|---|---|
| Conteneur | carte blanche, bord `--line`, rayon 14 px, `:hover` scale + ombre | aucun : transparent, pas de bord, pas d'ombre, pas de `:hover` |
| Icône | oui, cercle 48 px teinté | **aucune** |
| Alignement | centré | libellé à gauche / valeur à droite |
| Valeur | 48 px Encode 800 | 34 px Encode 800 (max) |
| Couleur des valeurs | trois couleurs (`.c-orange`, `.c-teal`, `.c-navy`) | **une seule**, bleu marine |
| Libellé | phrase en bas de casse, 15 px, **sous** le chiffre | capitales espacées 13 px, **avant** le chiffre |
| Trame | 3 cartes de front | 6 lignes en 2 × 3, filets horizontaux |
| Attribution | `.card-source` « Source : INRS » | mention Qualiopi + n° de certification |

Les trois différenciateurs décisifs : **pas d'icône, pas de carte, une seule couleur**. Et la valeur plafonnée à 34 px empêche toute confusion de rang avec les 48 px du constat. À respecter impérativement : **ne pas réutiliser `.card`, `.card-num`, `.card-icon`, `.card-label`, `.card-source`** dans ce bloc, même par commodité.

## 7. Accessibilité — récapitulatif

- **Tous les contrastes mesurés sont ≥ 4,5:1** sur fond crème `#F7F6F2` comme sur fond blanc (tableau §3). Le plus serré est l'eyebrow `.tag-teal` à 4,93:1 sur crème.
- **Le chiffre est le seul porteur d'information.** Le filet est un `border-bottom` : il n'existe pas dans l'arbre d'accessibilité, il n'y a donc rien à annoncer, rien à masquer, aucun risque de double énonciation.
- **Pas de `role="progressbar"`, pas d'`aria-valuenow`.** Ces attributs décrivent un état en cours de progression ; les indicateurs sont des résultats consolidés. Les poser serait un contresens sémantique et déclencherait des annonces du type « barre de progression 86 ». Le `<dl>` suffit : un lecteur d'écran restitue « Mise en pratique des acquis, 86,0 % ».
- **Daltonisme / absence de couleur : aucun encodage par la couleur n'existe.** Les six filets sont identiques, les six valeurs sont de la même couleur. Il n'y a rien à décoder. C'est l'argument le plus fort en faveur du monochrome du §2 : une version bicolore aurait obligé à fournir une clé de lecture non chromatique.
- **Ordre de lecture = ordre du DOM** (grille en flux par rangées, aucun `order`, aucun `grid-auto-flow: column`) : ce qui est lu à l'écran correspond à ce qui est annoncé, au desktop comme en une colonne.
- **Zoom 200 %** : passage automatique en une colonne au breakpoint 899 px, aucune hauteur fixe, aucun débordement masqué → rien n'est tronqué.
- `prefers-reduced-motion` (l.827+) neutralise déjà les transitions `.reveal` globalement, rien à ajouter.

## 8. Mention de période et mention Qualiopi

**Période — au-dessus de la grille, pas en dessous.** Un acheteur ou un auditeur doit connaître le périmètre (année 2026, toutes formations confondues) *avant* de lire les chiffres : une note de bas de bloc est lue après, ou pas du tout, et un chiffre sans périmètre est un chiffre non opposable. Classe `.indic-scope`, Nunito 600, 13 px, `#374151` (9,53:1 sur crème), **pas en capitales** : c'est une phrase, pas une étiquette — la mettre en capitales espacées l'assimilerait aux libellés des lignes. Marge basse 22 px.
Si CR préfère intégrer le périmètre à la fin du chapeau `.section-sub` du bloc, c'est acceptable à une condition : qu'il reste au-dessus de la grille. Dans ce cas `.indic-scope` est supprimée.

**Qualiopi — mention texte, pas de second logo.** Le logo `logo-qualiopi.png` est déjà présent sur la même page dans le bandeau de preuve `.proof-qualiopi` (l.344-348, hauteur 56 px), plus un lien vers le certificat en footer (l.1252). Un troisième rappel du logo sur une seule page dilue le signal au lieu de le renforcer, et multiplie les occasions de déformation. Recommandation : `.indic-note` sous la grille — texte 13 px `#374151`, mention de la certification et du **n° F3740-1-I** en taille pleine (ni italique, ni réduite : c'est un élément de traçabilité), et lien vers `certificat-qualiopi-uptomove.pdf` déjà en ligne et déjà utilisé par `apropos.html` (l.322), `contact.html` (l.234) et le footer de `index.html`. Souligné orange 2 px / offset 4 px, soit le pattern `.link-arrow` du site.

**Si Céline veut malgré tout le logo dans le bloc**, spec contraignante : `height: 44px; width: auto;` — jamais de couple largeur + hauteur fixé, jamais de recadrage, jamais de changement de couleur ; `alt` strictement identique à celui déjà utilisé partout sur le site, « Qualiopi — processus certifié — République française » ; posé à gauche de la note en `display: flex; align-items: center; gap: 14px;` comme `.proof-qualiopi` ; et passage en colonne sous 600 px.

---

## Synthèse des points à trancher par Céline

1. Homogénéité des décimales : garder « 86,0 % » ou aligner sur « 86 % » (§3).
2. Logo Qualiopi dans le bloc ou mention texte + lien vers le certificat (recommandation : mention texte) (§8).

## Écarts à la charte relevés en chemin (hors chantier)

- `--muted` `#6B7280` sur fond crème `#F7F6F2` = **4,47:1**, soit juste sous 4,5:1. Concerne `.card-source` (l.383) et `.bc-label` (l.351) quand ils sont posés sur une section crème — notamment les mentions « Source : INRS » du bloc 3, qui est en `.section-cream`. Correctif possible : `#5B6472` ou plus foncé, ou `--text` directement. À arbitrer dans un chantier dédié, sans rapport avec ce composant.
