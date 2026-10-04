# Spec visuelle : barre de répartition femmes / hommes (mini-chantier « part-femmes »)

**Agent Design (calc-design), 2026-10-04, sous-chantier de `refonte-charte`**
Entrées : spec UX/UI `calc-ux-ui-part-femmes-2026-10-04.md` (option A : un seul curseur en barre de répartition, plus de champ numérique) et `calculateur-tms-web.html` dans sa version en cours (2 833 lignes : CSS l.533-577, balisage l.1126-1141).
Périmètre : le rendu uniquement. Les textes relèvent de CR, le comportement de Dev, la valeur 47 % de Données.
Les contrastes ont été calculés avec la formule WCAG 2.x. Le rendu du débordement a été mesuré avec Chrome sans interface (headless) à 500 px (sa largeur minimale), 768 px et 1280 px (§6). **375 px et Safari n'ont pas été testés en vrai** : le §5 donne la vérification à faire.

---

## 0. Point bloquant à arbitrer avant intégration (UX/UI)

**Avec « Hommes » à gauche et une valeur de curseur égale à la part de femmes, la barre affiche des longueurs fausses.**
Si 37 % de femmes : la poignée est à 37 % depuis la gauche, donc le segment de gauche (« Hommes ») mesure 37 % alors que les hommes sont 63 %. Une barre de répartition dont les longueurs contredisent les chiffres affichés est pire que pas de barre.

Deux solutions, et le CSS ci-dessous sert aux deux sans modification :

| | A1 (recommandée) | A2 |
|---|---|---|
| Ordre affiché | **Femmes \| Hommes** | Hommes \| Femmes (ordre de la spec UX) |
| Valeur du curseur | part de femmes (inchangée) | **part d'hommes** |
| Impact JS | aucun : `id="femmes"` et `$('femmes').value` restent valables | Dev ajoute `<input type="hidden" id="femmes">` alimenté par `100 - valeur` ; le curseur prend `id="hommes-curseur"` |
| Clavier | → = plus de femmes, le segment Femmes grandit | → = plus d'hommes, le segment Hommes grandit |
| Classe | `.calc-share` | `.calc-share .calc-share--hommes-gauche` |

L'option `direction: rtl` sur le curseur est écartée : le sens des flèches du clavier diffère selon les navigateurs.
Dans la suite, les exemples suivent **A1**.

---

## 1. Couleurs et contrastes

| Élément | Couleur | Contre blanc | Contre crème | Rôle |
|---|---|---|---|---|
| Segment Femmes | `--teal-dark` `#12786F` | 5,33:1 | 4,93:1 | discours positif de la charte, sûr sur fond clair |
| Segment Hommes | `--navy` `#1E2952` | 14,05:1 | 13,00:1 | |
| Piste « non renseigné » / « erreur » | `--field-line` `#8389A0` | 3,47:1 | 3,21:1 | même bordure que les champs |
| Bordure de poignée (renseigné) | `--navy` | 14,05:1 | | |
| Anneau de focus | `--navy` 3 px, séparé de la poignée par 2,5 px de blanc | 14,05:1 | | WCAG 2.4.7 / 1.4.11 |
| Bordure de poignée (erreur) | `--orange-ink` `#A84B0F` | 5,71:1 | | cohérent avec `.calc-error` |
| Pourcentage Femmes (texte) | `--teal-dark` | 5,33:1 | | |
| Pourcentage Hommes (texte) | `--navy` | 14,05:1 | | |

Chaque segment dépasse 3:1 contre le fond. **Entre eux, navy et teal foncé ne donnent que 2,64:1.** Ce n'est pas bloquant, pour trois raisons :
1. la frontière est toujours matérialisée par la poignée blanche ;
2. chaque segment est rattaché à son libellé par une pastille de la même couleur ;
3. les deux pourcentages sont écrits en clair au-dessus de la barre.

L'information ne repose donc pas sur la couleur seule (WCAG 1.4.1). Aucune paire de couleurs de la charte ne fait mieux sans passer par l'orange (2,23:1 sur blanc ✗) ou le jaune (1,33:1 ✗).
Le couple rose / bleu est volontairement évité : il est stéréotypé et hors charte.

---

## 2. Balisage cible (pour Dev, ordre UX/UI §3 conservé)

```html
<div class="calc-block calc-field calc-field--share" id="bloc-femmes">
  <label class="calc-label" for="femmes">…libellé CR…</label>

  <div class="calc-share" data-etat="vide">
    <div class="calc-share-readout" aria-hidden="true">
      <span class="calc-share-side calc-share-side--left">
        <span class="calc-share-name">Femmes</span>
        <span class="calc-share-val" data-share="left">—&nbsp;%</span>
      </span>
      <span class="calc-share-side calc-share-side--right">
        <span class="calc-share-val" data-share="right">—&nbsp;%</span>
        <span class="calc-share-name">Hommes</span>
      </span>
    </div>
    <input type="range" class="calc-share-range" id="femmes" min="0" max="100" step="1" value="50"
           aria-valuetext="…non renseigné (CR)…" aria-describedby="err-femmes aide-femmes">
  </div>

  <p class="calc-error" id="err-femmes" hidden></p>
  <label class="calc-choice calc-choice--compact">…Je ne connais pas la répartition…</label>
  <p class="calc-note" id="femmes-jnsp-actif" aria-live="polite" hidden>…</p>
  <p class="calc-note" id="aide-femmes">…note courte CR…</p>
</div>
```

Pilotage par le JS (Dev) :
- `data-etat` sur `.calc-share` prend une des valeurs `vide | ok | jnsp | erreur`.
- Variable CSS `--p` sur l'input, entre 0 et 1, mise à jour à chaque `input` : `curseur.style.setProperty('--p', curseur.value / 100)`. Seule la variable est écrite par le JS, aucune couleur.
- À `jnsp`, l'input reçoit aussi `disabled`.
- À `erreur`, l'input reçoit aussi `aria-invalid="true"`.

À supprimer : `.calc-inline`, `.calc-deduit`, `#femmes-deduit`, `.calc-range` (CSS l.575-578) et le champ numérique.

---

## 3. CSS prêt à intégrer

Il remplace les l.575-578 (`.calc-range`, `.calc-inline`, `.calc-deduit`).

```css
/* ── Barre de répartition (part-femmes) ─────────────────────── */
.calc-field--share { max-width: 480px; }        /* barre, note, case et erreur sur la même largeur */

.calc-share {
  --share-left:  var(--teal-dark);              /* A1 : Femmes à gauche */
  --share-right: var(--navy);
  --thumb-line:  var(--navy);
  display: flex; flex-direction: column; gap: 6px;
  margin-top: 4px;
}
.calc-share--hommes-gauche {                     /* A2 */
  --share-left:  var(--navy);
  --share-right: var(--teal-dark);
}

/* Lecture aux extrémités */
.calc-share-readout { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; }
.calc-share-side { display: inline-flex; align-items: baseline; gap: 8px; min-width: 0; }
.calc-share-side--right { justify-content: flex-end; text-align: right; }
.calc-share-name {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 13px;
  letter-spacing: .06em; text-transform: uppercase; color: var(--text);   /* 10,31:1 */
}
.calc-share-side--left  .calc-share-name::before,
.calc-share-side--right .calc-share-name::after {             /* pastille = clé de couleur du segment */
  content: ''; width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0;
}
.calc-share-side--left  .calc-share-name::before { background: var(--share-left); }
.calc-share-side--right .calc-share-name::after  { background: var(--share-right); }
.calc-share-val {
  font-family: 'Encode Sans Compressed', sans-serif; font-weight: 800;
  font-size: 26px; line-height: 1; letter-spacing: -.3px;
  font-variant-numeric: tabular-nums; white-space: nowrap;
}
.calc-share-side--left  .calc-share-val { color: var(--share-left); }
.calc-share-side--right .calc-share-val { color: var(--share-right); }

/* Curseur : remise à zéro */
.calc-share-range {
  -webkit-appearance: none; appearance: none;
  width: 100%; height: 44px; margin: 0; padding: 0;
  background: transparent; cursor: pointer; touch-action: manipulation;
  --cut: calc(22px + (100% - 44px) * var(--p, .5));  /* centre exact de la poignée */
}
.calc-share-range:focus { outline: none; }
.calc-share-range:focus-visible { outline: none; }    /* annule la règle globale l.176 : l'anneau est sur la poignée */

/* Piste — WebKit / Blink */
.calc-share-range::-webkit-slider-runnable-track {
  height: 10px; border-radius: 100px;
  background: linear-gradient(to right,
    var(--share-left) 0 var(--cut), var(--share-right) var(--cut) 100%);
}
/* Piste — Firefox (le segment gauche est dessiné par ::-moz-range-progress) */
.calc-share-range::-moz-range-track    { height: 10px; border-radius: 100px; background: var(--share-right); border: 0; }
.calc-share-range::-moz-range-progress { height: 10px; border-radius: 100px; background: var(--share-left); }
.calc-share-range::-moz-focus-outer    { border: 0; }

/* Poignée : zone active de 44 × 44 px, disque visible de 32 px dessiné en dégradé radial,
   ce qui permet de placer l'anneau de focus DANS la zone de 44 px, autour du disque. */
.calc-share-range::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 44px; height: 44px; margin-top: -17px;           /* (10 - 44) / 2 */
  border: 0; border-radius: 50%;
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, transparent 16.5px);
  cursor: grab;
}
.calc-share-range::-moz-range-thumb {
  width: 44px; height: 44px; border: 0; border-radius: 50%;
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, transparent 16.5px);
  cursor: grab;
}

/* Survol : halo navy léger */
.calc-share-range:hover::-webkit-slider-thumb {
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, rgba(30,41,82,.10) 16.5px 22px, transparent 22px);
}
.calc-share-range:hover::-moz-range-thumb {
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, rgba(30,41,82,.10) 16.5px 22px, transparent 22px);
}
/* Glissé en cours : halo orange de marque (même valeur que le focus des champs) */
.calc-share-range:active::-webkit-slider-thumb {
  cursor: grabbing;
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, rgba(255,145,77,.35) 16.5px 22px, transparent 22px);
}
.calc-share-range:active::-moz-range-thumb {
  cursor: grabbing;
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, rgba(255,145,77,.35) 16.5px 22px, transparent 22px);
}
/* Focus clavier : anneau navy de 3 px, séparé du disque par 2,5 px de blanc */
.calc-share-range:focus-visible::-webkit-slider-thumb {
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, #fff 16.5px 18.5px, var(--navy) 19px 21.5px, transparent 22px);
}
.calc-share-range:focus-visible::-moz-range-thumb {
  background: radial-gradient(circle, #fff 0 13px, var(--thumb-line) 13.5px 16px, #fff 16.5px 18.5px, var(--navy) 19px 21.5px, transparent 22px);
}

/* ── États ─────────────────────────────────────────────────────── */
/* Non renseigné : piste unie, poignée neutre au centre, tirets */
.calc-share[data-etat="vide"] { --share-left: var(--field-line); --share-right: var(--field-line); --thumb-line: var(--field-line); }
.calc-share[data-etat="vide"] .calc-share-val,
.calc-share[data-etat="erreur"] .calc-share-val { color: var(--muted); }               /* 4,83:1 sur blanc */
.calc-share[data-etat="vide"] .calc-share-name::before,
.calc-share[data-etat="vide"] .calc-share-name::after { opacity: .35; }

/* Erreur : piste neutre, poignée cerclée d'orange-ink, liseré sur la piste */
.calc-share[data-etat="erreur"] { --share-left: var(--field-line); --share-right: var(--field-line); --thumb-line: var(--orange-ink); }
.calc-share[data-etat="erreur"] .calc-share-range::-webkit-slider-runnable-track { box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--orange-ink); }
.calc-share[data-etat="erreur"] .calc-share-range::-moz-range-track             { box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--orange-ink); }

/* « Je ne connais pas » : grisé, poignée sur 47 % (valeur posée par le JS), lecture conservée */
.calc-share[data-etat="jnsp"] { --share-left: #A0C9C5; --share-right: #A5A9BA; --thumb-line: var(--field-line); }  /* teal foncé et navy à 40 % */
.calc-share[data-etat="jnsp"] .calc-share-val { color: var(--text); }                   /* la valeur utilisée reste lisible : 10,31:1 */
.calc-share-range:disabled { cursor: not-allowed; }
.calc-share-range:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
  background: radial-gradient(circle, var(--grey-bg) 0 13px, var(--field-line) 13.5px 16px, transparent 16.5px);
}
.calc-share-range:disabled::-moz-range-thumb {
  cursor: not-allowed;
  background: radial-gradient(circle, var(--grey-bg) 0 13px, var(--field-line) 13.5px 16px, transparent 16.5px);
}

/* Contrastes forcés (Windows) : les dégradés disparaissent, on redonne des couleurs système */
@media (forced-colors: active) {
  .calc-share-range::-webkit-slider-runnable-track { background: GrayText; }
  .calc-share-range::-moz-range-track { background: GrayText; }
  .calc-share-range::-moz-range-progress { background: Highlight; }
  .calc-share-range::-webkit-slider-thumb { background: radial-gradient(circle, CanvasText 0 16px, transparent 16.5px); }
  .calc-share-range::-moz-range-thumb { background: radial-gradient(circle, CanvasText 0 16px, transparent 16.5px); }
  .calc-share-range:focus-visible { outline: 3px solid Highlight; outline-offset: 2px; }
  .calc-share-name::before, .calc-share-name::after { forced-color-adjust: none; }
}

/* ── Mobile ────────────────────────────────────────────────────── */
@media (max-width: 599px) {
  .calc-field--share { max-width: none; }
  .calc-share-val { font-size: 24px; }
}
@media (max-width: 379px) {                         /* 320-379 px : nom au-dessus du chiffre */
  .calc-share-side { flex-direction: column; align-items: flex-start; gap: 4px; }
  .calc-share-side--right { align-items: flex-end; }
  .calc-share-side--right .calc-share-name { flex-direction: row-reverse; }
}
```

Notes d'intégration :
- **Les sélecteurs WebKit et Firefox ne doivent jamais être regroupés** dans une même règle (`a::-webkit-…, a::-moz-…`) : un navigateur abandonne toute la règle s'il ne reconnaît pas l'un des deux. C'est pour cela que chaque bloc est doublé ci-dessus.
- `--cut` aligne exactement la frontière des couleurs sur le centre de la poignée, y compris aux extrémités, où l'écart serait sinon de 22 px. Firefox fait cet alignement nativement avec `::-moz-range-progress`.
- Le bord droit de `::-moz-range-progress` est arrondi, mais il reste toujours sous la poignée et ne se voit donc pas.
- Aucune transition sur la poignée : rien à neutraliser pour `prefers-reduced-motion`.

---

## 4. Tableau des états

| État | `data-etat` | Piste | Poignée (disque de 32 px) | Lecture | Autre |
|---|---|---|---|---|---|
| Non renseigné | `vide` | unie `--field-line` | blanche, bord `--field-line`, au centre | « — % » en `--muted`, pastilles estompées | `aria-valuetext` « non renseigné… » (CR) |
| Renseigné | `ok` | teal foncé \| navy, coupure sous la poignée | blanche, bord navy 3 px | chiffres en couleur du segment, 26 px | |
| Survol | — | idem | + halo navy à 10 % jusqu'à 44 px | | |
| Glissé | — | idem | + halo orange à 35 % | | curseur `grabbing` |
| Focus clavier | — | idem | + anneau navy de 3 px à 2,5 px du disque, **dans** la zone de 44 px | | plus de cadre rectangulaire sur l'input |
| Erreur | `erreur` | unie `--field-line` + liseré `--orange-ink` à 2 px | bord `--orange-ink` | « — % » | `.calc-error` dessous, `aria-invalid` |
| « Je ne connais pas » | `jnsp` + `disabled` | teal foncé et navy à 40 % | grise, bord `--field-line`, à 47 % | « 47 % » / « 53 % » en `--text` | `#femmes-jnsp-actif` affiché dessous |

Les éléments désactivés ne sont pas soumis au seuil de contraste. La valeur réellement utilisée par le calcul reste toutefois écrite en `--text` (10,31:1).

---

## 5. Rendu à 375 px (calcul, à confirmer à l'écran)

Largeur utile de la carte à 375 px : 375 − 2 × 20 (marge latérale `--gutter`) − 2 × 18 (marge interne de `.calc-card` sous 600 px) − 2 (bordures) = **297 px**.

- **Barre** : 297 px de large. La poignée parcourt 297 − 44 = 253 px, soit environ 2,5 px par point de pourcentage. On peut donc viser une valeur à quelques points près au doigt, comme UX/UI l'a noté.
- **Lecture** : chaque côté prend environ 16 px (pastille + espacement) + environ 55 px (« FEMMES » en 13 px) + 8 px + environ 50 px (« 100 % » en Encode Sans Compressed 24 px), soit environ 130 px. Les deux côtés font environ 260 px, ce qui **tient sur une ligne** dans 297 px.
- **Sous 380 px** (320 px : environ 242 px utiles), les deux côtés ne tiennent plus en ligne. La règle ≤ 379 px empile alors le nom au-dessus du chiffre de chaque côté, sur environ 75 px de large.
- **Zone tactile** : poignée de 44 × 44 px, et input de 44 px de haut sur toute la largeur (un toucher sur la piste déplace la poignée, comportement natif).
- **À vérifier dans le navigateur** : Safari iOS (poignée bien centrée sur la piste avec `margin-top:-17px`), Firefox Android (segment `progress`), VoiceOver (lecture de `aria-valuetext` au balayage vertical).

---

## 6. `.calc-note` : diagnostic du débordement et correctif

### Ce que j'ai mesuré

Le calculateur actuel a été mesuré avec Chrome sans interface, en affichant les étapes et les notes masquées :

| Largeur | `#aide-femmes` | `<span>` de la note | Défilement horizontal de la page |
|---|---|---|---|
| 500 px (minimum de Chrome sans interface) | 412 px, `scrollWidth` = `clientWidth` | 388 px, sans dépassement | non |
| 768 px | 628 px, sans dépassement | 604 px | non |

**Il n'y a pas de dépassement horizontal réel dans Chrome.** Le code montre en revanche deux causes probables du « débordement » que Céline a perçu :

1. **La note dépasse visuellement le contrôle.** Elle occupe toute la colonne (628 px à 768 px, 672 px à 1280 px, soit environ 95 caractères par ligne), alors que le curseur est plafonné à 420 px (`.calc-range { max-width: 420px }`, l.575). Elle se trouve en plus entre le libellé et le contrôle (l.1128). Le texte « sort » donc du bloc auquel il se rapporte.
2. **Le champ et le curseur passent sur deux lignes à 768 px.** `.calc-inline` est en `flex-wrap` (l.577), et 200 px (champ, `.calc-input--narrow`) + 16 px (espacement) + 420 px (curseur) = 636 px, plus que les 628 px disponibles. Mesure : `#femmes` occupe x = 70→270, et `#femmes-curseur` revient à la ligne en x = 70→490. Le bloc paraît alors désarticulé.

Une troisième cause est **possible mais non vérifiée** (Safari) : le `<span>` de texte de `.calc-note` est un élément flex sans `min-width: 0`. Sa largeur minimale vaut donc celle de son plus long mot. Avec une URL ou une chaîne sans espace (source longue, par exemple), il peut dépasser.

### Correctif (à appliquer à toutes les `.calc-note` de la page)

Il remplace les l.539-543 :

```css
.calc-note {
  display: flex; gap: 8px; align-items: flex-start;
  max-width: 62ch;                                  /* longueur de ligne lisible, comme .section-sub */
  font-size: 13.5px; line-height: 1.5; color: var(--text);
}
.calc-note > span { flex: 1 1 auto; min-width: 0; overflow-wrap: anywhere; }   /* plus de dépassement possible */
.calc-note svg { width: 16px; height: 16px; flex-shrink: 0; margin-top: 2px; color: var(--teal-dark); }
```

Pour ce bloc précis, `.calc-field--share { max-width: 480px }` (§3) cale la note, la case et l'erreur sur la largeur de la barre. Avec la note déplacée en bas du bloc (UX/UI §3.5), les causes 1 et 2 disparaissent.

---

## 7. Points de vigilance pour Dev

1. Arbitrage du §0 **avant** d'écrire le JS (A1 recommandée).
2. Initialiser `--p` et `data-etat` au chargement, à la restauration depuis `sessionStorage` et dans `recommencer()`. Sans `--p`, la valeur par défaut CSS (0,5) s'applique, ce qui convient à l'état `vide`.
3. À `jnsp` : positionner `value` sur la constante de la valeur par défaut (Données), mettre à jour `--p` et la lecture, puis poser `disabled`. Au décochage, restaurer la valeur et l'état précédents (`ok` ou `vide`).
4. Passer de `erreur` à `ok` dès le premier `input` ou `pointerdown` sur le curseur, et masquer `#err-femmes`.
5. Contrôle : `grep -n "calc-range\|calc-inline\|calc-deduit\|femmes-deduit" calculateur-tms-web.html` ne doit plus rien remonter.
