# Spec UX/UI — Bloc « indicateurs de résultats » sur `index.html`

Agent UX/UI · 2 octobre 2026 · chantier `indicateurs`
Périmètre : structure, placement, hiérarchie, responsive. Aucun texte final, aucune couleur, aucune typo, aucun fichier modifié.

---

## 1. Décision de placement

**Les 6 indicateurs s'insèrent À L'INTÉRIEUR du bloc 7 « Ils nous font confiance », en tête de section, avant les deux témoignages.**

Pas de nouvelle section. La page reste à **8 sections** — l'acquis du raccourcissement est préservé structurellement, pas seulement en pixels.

### Pourquoi dans le bloc 7 et pas ailleurs

1. **C'est de la preuve, et le bloc 7 est le bloc de preuve.** Les témoignages sont de la preuve qualitative (ce que les clients disent), les indicateurs de la preuve quantitative (ce que les clients ont noté). Même nature, même fonction dans le parcours : rassurer un DRH juste avant le CTA final. Les éclater dans deux sections distinctes fabriquerait deux moments de preuve concurrents au lieu d'un seul, plus dense.
2. **Position dans le parcours.** Section 7 = fin de l'argumentaire, juste avant le CTA devis. Le décideur a vu le problème (3), la réponse (4), la différence (5), l'outil (6). Les indicateurs arrivent au moment où il se demande « est-ce que ça marche vraiment ? ». C'est la dernière objection avant la demande de devis.
3. **Économie verticale.** Une section autonome coûterait à elle seule `2 × var(--pad-xl)` = **+240 px** de padding desktop, plus un tag + H2 + chapô (~130 px), avant même le contenu : ~640 px au total. En sous-bloc : ~370 px (calcul en §3). L'intégration divise le coût par ~1,7.
4. **Cohérence Qualiopi.** Le n° de certification est déjà affiché en bloc 2. Les indicateurs sont la seconde moitié de la même obligation de transparence. Ils doivent être trouvables, mais ils n'ont pas à occuper un étage entier de la page d'accueil.

### Pourquoi en tête de section, avant les témoignages

- Lecture institutionnelle : un DRH/QHSE scanne les chiffres avant de lire des citations. Le dur d'abord, l'humain ensuite.
- Le lien `Voir nos interventions clients →` reste le **dernier élément** de la section, son rôle de sortie est intact. Insérer les indicateurs après lui le reléguerait au milieu du bloc.
- Les 6 tags secteurs + le lien forment un sous-ensemble « clients » cohérent avec les témoignages : on ne le coupe pas en deux.

*Alternative documentée (si Design juge la collision visuelle avec le bloc 6 trop forte, cf. §5) : placer le sous-bloc en fin de section, après le lien clients. Coût vertical identique. Ce n'est pas mon choix par défaut.*

### Placements écartés

| Placement | Pourquoi non |
|---|---|
| Après le bandeau de preuve (bloc 2) | Chiffres de performance servis avant que le problème soit posé : hors séquence argumentative. Et collision immédiate avec les 3 chiffres INRS du bloc 3, qui suit. |
| Dans le bloc 3 « Le constat » | Le pire des placements : chiffres-problème et chiffres-performance côte à côte, même registre visuel, sens inversés. Le lecteur ne sait plus ce que mesure quoi. |
| Dans le bloc 5 « Ce qui nous distingue » | Défendable sur le fond (preuve de la différence), mais section déjà la plus lourde de la page (3 cartes + tableau 6 critères replié + encart Passeport) et trop loin du CTA. |
| Section autonome 7bis | Coût vertical ~640 px et retour à 9 sections. Ne se justifierait que si Céline voulait une page « Nos résultats » dédiée — autre chantier. |

---

## 2. Collision de sens avec les 3 chiffres INRS du bloc 3

Le risque est réel : deux séries de chiffres sur une même page se neutralisent si rien ne les sépare. Quatre séparateurs, cumulés :

1. **Distance.** Bloc 3 et bloc 7 sont séparés par trois sections (réponse, différenciation, calculateur), soit ~3 500 à 4 000 px. Aucune co-visibilité possible, à aucun breakpoint. C'est le séparateur principal, et c'est une raison supplémentaire de ne pas remonter les indicateurs plus haut.
2. **Forme radicalement différente.** Bloc 3 : 3 cartes blanches, icône ronde, chiffre 48 px centré, phrase en dessous. Indicateurs : lignes libellé/valeur alignées, barre horizontale, aucune carte, aucune icône. Deux grammaires visuelles qui ne peuvent pas être confondues. **Contrainte pour Design : ne réutiliser ni `.card`, ni `.card-icon`, ni `.card-num` (48 px) pour ce bloc.** La valeur des indicateurs doit être nettement plus petite que les 48 px du bloc 3 — c'est ce qui dit au lecteur « autre registre ».
3. **Registre de source explicite.** Bloc 3 : `Source : INRS` sous chaque carte = données externes sur le marché. Indicateurs : mention de périmètre + période + méthode de mesure = données internes mesurées. **Contrainte pour CR : la mention de périmètre doit être lisible comme « nos chiffres, nos stagiaires », jamais comme un chiffre de secteur.**
4. **Direction de lecture inversée assumée.** Bloc 3 = ce que coûte l'inaction. Bloc 7 = ce que produit l'action. Les deux séries se répondent au lieu de se concurrencer, à condition que le lecteur les rencontre à 4 000 px d'écart.

---

## 3. Impact chiffré sur la longueur de page

### Desktop (≥ 900 px)

| Élément | Hauteur estimée |
|---|---|
| Marge de séparation avec le H2 de section | ~32 px |
| H3 du sous-bloc | ~40 px (titre + marge) |
| Ligne de mention période/périmètre | ~24 px |
| 3 rangées × (ligne libellé+valeur ~26 px + gouttière 8 px + barre 6 px + marge basse 20 px) | ~180 px |
| `<details>` méthodologie (replié) | ~56 px + 18 px de marge |
| Marge basse avant les témoignages | ~40 px |
| **Total** | **≈ 370 px** |

Page : **6 629 px → ≈ 7 000 px**, soit **+5,6 %**. Sous le seuil de 450 px fixé. **Pas de compensation nécessaire** : je l'assume tel quel, le gain de crédibilité vaut 370 px à cet endroit de la page.

Deux micro-compensations possibles si Céline veut rester sous 6 800 px — à ne faire que sur sa demande, elles touchent du contenu existant :
- ramener les 6 tags secteurs à 4 (gain nul en desktop, ~48 px en mobile où ils passent sur 2 rangées) ;
- replier le `<details>` méthodologie dans la même liste que le dépliable existant du bloc 3 — déconseillé, ça éloigne la méthode de ses chiffres.

### Mobile (< 600 px)

6 rangées empilées au lieu de 3 : ~340 à 400 px pour la grille selon les retours à la ligne des libellés, + H3 + mention + `<details>` + marges ≈ **+480 à 540 px**. C'est moins d'un écran de scroll, dans une section déjà longue : acceptable. Les mesures de §4 (libellés courts, valeur sur la même ligne) sont ce qui maintient ce chiffre sous 550 px — sans elles on monte facilement à 700 px.

---

## 4. Structure interne du bloc

### Squelette (ordre DOM = ordre de lecture)

```
SECTION 7 (existante, cream)  — ajouter id="resultats" sur la <section>
├── tag de section                      [CR : à élargir, ne peut plus dire « Témoignages » seul]
├── H2 de section                       [CR : doit couvrir résultats + témoignages]
│
├── ■ SOUS-BLOC INDICATEURS  (NOUVEAU)
│   ├── H3 — intitulé du bloc                     3 à 7 mots
│   ├── mention périmètre + période                1 ligne, ≤ 110 caractères
│   ├── grille 6 indicateurs
│   │   ├── colonne gauche (ordre DOM 1→3)   Satisfaction · Réussite · Atteinte des objectifs
│   │   └── colonne droite (ordre DOM 4→6)   Animation · Pertinence des contenus · Mise en pratique
│   │        chaque rangée = libellé (capitales, gauche) + valeur (droite) + barre pleine largeur dessous
│   └── <details> « Comment ces résultats sont mesurés »   60 à 100 mots, replié par défaut
│
├── témoignages (2 cartes)              inchangé
├── tags secteurs (6)                   inchangé
└── lien « Voir nos interventions clients → »   inchangé, reste le dernier élément
```

### Regroupement des 6 indicateurs (porteur de sens, pas décoratif)

- **Colonne gauche — résultats de l'action** : satisfaction 98,9 % · réussite 90 % · atteinte des objectifs 87,5 %.
- **Colonne droite — qualité de la prestation** : animation 100 % · pertinence des contenus 100 % · mise en pratique 86,0 %.

Les deux 100 % sont dans la même colonne : ils se soutiennent au lieu d'écraser leurs voisins. Et en mobile, l'empilement 1→6 conserve ce regroupement comme ordre de lecture.

### Desktop

- Grille 2 colonnes × 3 rangées, `grid-template-rows: repeat(3, auto); grid-auto-flow: column` pour que l'ordre DOM 1-6 remplisse colonne par colonne (haut→bas, puis colonne 2). L'ordre vocalisé par un lecteur d'écran reste 1-6 : cohérent avec l'ordre visuel.
- Largeur max du sous-bloc : **860 px centré**, aligné sur `.uc-list` déjà en place — évite d'inventer une 4ᵉ largeur de contenu sur la page.
- Gouttière entre colonnes : 48 à 64 px, pour que les deux colonnes se lisent comme deux listes et non comme un tableau à 4 cellules.
- Alignement : le bloc vit dans un `.section-inner.text-center`, mais ses rangées sont **alignées à gauche**. Dev devra neutraliser l'héritage `text-align:center` sur le sous-bloc (comme le fait déjà `.uc-list`).

### Mobile (< 900 px) — la vraie question

**6 barres l'une sous l'autre : oui, acceptable, à trois conditions.** Les alternatives sont pires :
- *Repliées dans un `<details>`* : non. Un indicateur Qualiopi replié perd sa fonction de preuve, et le pattern `<details>` du site est réservé au contenu secondaire ou long. On ne cache pas le meilleur chiffre de la page.
- *2 colonnes maintenues sous 900 px* : non. Un libellé en capitales dans 150 px passe sur 3 lignes ; on gagne de la hauteur sur le papier et on la reperd en retours à la ligne, avec une lisibilité dégradée.
- *6 tuiles chiffre+libellé sans barre* : abandonne le motif de référence voulu par Céline et casse la comparabilité d'un indicateur à l'autre.

Les 3 conditions :
1. **Libellé et valeur sur la même ligne de base**, libellé à gauche (flexible), valeur à droite (non compressible), barre en dessous sur toute la largeur. Jamais la valeur sous le libellé : ça double la hauteur du bloc.
2. **Libellés courts.** Contrainte CR : **24 caractères maximum**, pour tenir sur une ligne jusqu'à 360 px de large. « Mise en pratique des acquis » (27) et « Pertinence des contenus » (23) sont à retravailler/vérifier. La version longue peut vivre dans le `<details>` méthodologie.
3. **Largeur de rangée plafonnée à 640 px centré** en mono-colonne : au-delà (tablette 760-899 px), l'écart entre le libellé et sa valeur devient un trou et l'œil perd l'appariement.

- Passage à 1 colonne au **breakpoint 900 px**, comme toutes les autres grilles de la page (`.cards`, `.pillars`, `.diff-grid`, `.testi-grid`). Pas de breakpoint intermédiaire supplémentaire.
- Aucun élément interactif dans la grille → pas de contrainte de cible tactile 44 px. Si CR ajoute un lien dans la mention ou le `<details>`, le `<summary>` doit conserver les 56 px de hauteur minimale du pattern existant.

---

## 5. Lien ou CTA depuis ce bloc : non

**Aucun bouton, aucun lien fléché dans le sous-bloc indicateurs.** Raisons :

- La section se termine déjà par `Voir nos interventions clients →`, et le CTA final devis arrive juste après. En mobile, la barre `.sticky-mobile-cta` est en plus présente en permanence. Un quatrième appel à l'action dans le même écran dilue les trois autres.
- La seule question légitime que le bloc soulève (« ces chiffres mesurent quoi, sur quelle base ? ») se traite **sur place** par le `<details>` méthodologie, pas par un renvoi vers une autre page. C'est le rôle exact de ce dépliable : répondre sans allonger.
- Un lien vers `/formations` serait redondant : la nav sticky et le bloc 4 y mènent déjà.

En revanche, **ajouter `id="resultats"` sur la section** : Céline peut alors communiquer une URL directe (`https://www.uptomove.fr/#resultats`) dans un dossier d'audit ou une réponse à appel d'offres. Coût : zéro pixel. Pas de nouvelle entrée de menu — la nav est pleine et un item « Résultats » y serait hors échelle.

---

## 6. Points d'attention par agent

### Pour Design
- **Interdit de réutiliser** `.card` / `.card-icon` / `.card-num` (48 px) : c'est la grammaire du bloc 3 « constat ». La valeur des indicateurs doit être visiblement plus petite que 48 px (ordre de grandeur 22-28 px desktop), sans quoi la page affiche deux fois « les gros chiffres » et les deux séries se neutralisent.
- **Échelle des barres : 0 à 100 %, jamais tronquée.** Toutes les valeurs sont entre 86 et 100 % : les barres se ressembleront, et c'est l'information honnête. Démarrer l'axe à 80 % pour « creuser les écarts » serait un graphique mensonger — inacceptable sur un bloc à fonction de conformité. Si la faible discrimination visuelle gêne, supprimer la barre plutôt que fausser l'échelle.
- **Collision visuelle à surveiller** : le bloc 6 calculateur contient une jauge horizontale partiellement remplie (`.b6-preview-gauge`) et une valeur chiffrée. Le sous-bloc indicateurs arrive moins d'un écran plus bas. Différencier franchement le traitement (filet fin pleine largeur ≠ jauge épaisse arrondie) pour que personne ne lise les indicateurs comme une sortie du calculateur. C'est ce point, et lui seul, qui ferait basculer vers le placement alternatif (fin de section).
- **Ne pas remettre le logo Qualiopi** dans ce bloc : il est déjà en bloc 2 avec le n° de certification. Mention textuelle uniquement si CR en met une.
- Si une animation de remplissage des barres est utilisée : les barres doivent être **rendues remplies en CSS sans JS**, l'animation n'étant qu'un enrichissement, et `prefers-reduced-motion` respecté.
- Plancher de taille : libellés jamais sous 12 px (capitales + interlettrage), valeurs ≥ 20 px en desktop, ≥ 18 px en mobile.

### Pour CR
- À produire : un H3 (3-7 mots), une ligne de mention périmètre + période (≤ 110 caractères, doit contenir « toutes formations confondues » et l'année 2026), **6 libellés de 24 caractères maximum**, et le contenu du `<details>` méthodologie (60-100 mots) + son `<summary>`.
- Le tag et le H2 de section doivent être élargis : « Témoignages » / « Ils nous font confiance » ne couvrent plus seuls une section qui ouvre sur des indicateurs chiffrés. Rester dans le même registre sobre, ne pas transformer le H2 en slogan.
- **Deux points factuels à faire valider par Céline avant rédaction** (règles de vérité de `CLAUDE.md` : ne rien inventer) :
  - la **base de calcul** (nombre de stagiaires ou de questionnaires sur 2026) et le **moment de mesure** (à chaud / à froid). Un bloc d'indicateurs sans base déclarée se lit comme un argument marketing, pas comme une donnée. Si le chiffre n'est pas disponible, ne pas le combler par une formule vague.
  - la **définition du « taux de réussite » 90 %** : réussite de quoi, pour des actions de formation sans examen ? C'est la ligne qu'un auditeur ou un DRH questionnera en premier. Sa définition a sa place dans le `<details>`.
- Le `<details>` est le seul endroit où les libellés longs et les définitions peuvent respirer : y renvoyer tout ce qui ne tient pas en 24 caractères.

### Pour Dev
- **Aucune nouvelle `<section>`.** Le sous-bloc s'insère dans la `<section class="section section-cream">` existante (bloc 7), immédiatement après le `<h2>`, avant `.testi-grid`. Ajouter `id="resultats"` sur cette `<section>`.
- Hiérarchie des titres : le sous-bloc porte un **H3** sous le H2 existant. Ne pas introduire de H3 sur les témoignages (coût vertical inutile) ; le H2 reste leur titre direct.
- Sémantique : paires libellé/valeur → `<dl>` avec `<dt>`/`<dd>`, ou liste de rangées. **Les barres sont décoratives** (`aria-hidden="true"` ou pseudo-élément) : la valeur est déjà donnée en texte, pas de `role="progressbar"` ni d'ARIA redondante.
- Grille desktop : `grid-template-rows: repeat(3, auto); grid-auto-flow: column`, max-width 860 px, `text-align:left` à rétablir (le parent est `.text-center`).
- Responsive : bascule 1 colonne à **900 px** (même media query que `.cards`/`.testi-grid`), rangées plafonnées à 640 px centré sous 900 px, libellé+valeur maintenus sur une même ligne (`display:flex; justify-content:space-between` avec le libellé en `flex:1; min-width:0` et la valeur en `flex-shrink:0`).
- `<details>` : reprendre le pattern `.uc-item` / `.uc-list` déjà en place dans le bloc 3 (`summary` min-height 56 px, marqueur natif masqué) plutôt que d'en créer un nouveau.
- Vérifier aux trois paliers existants : ≥ 900 px, 600-899 px, < 600 px, plus le palier 379 px et le mode paysage `max-height:500px`. Point de contrôle à 360 px : aucun libellé ne doit passer sur 3 lignes, aucune valeur ne doit se retrouver seule sur une ligne.

---

## 7. Suite possible (hors périmètre de ce chantier)

Ces indicateurs n'existent nulle part ailleurs sur le site (vérifié : aucun taux de satisfaction ni indicateur de résultat dans `formations.html`, `apropos.html`, `clients.html`, `faq.html`). Une fois le bloc en place sur l'accueil, à arbitrer par Céline : le reprendre sur `formations.html`, qui est la page attendue par un auditeur ou un acheteur de formation. À traiter comme un chantier distinct — ce n'est pas une copie mécanique, le niveau de détail attendu y est plus fin (résultats par action de formation).
