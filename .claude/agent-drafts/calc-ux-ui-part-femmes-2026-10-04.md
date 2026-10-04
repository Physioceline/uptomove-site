# UX/UI — Étape 2 : contrôle « part de femmes »

**Agent** : calc-ux-ui · **Date** : 4 octobre 2026 · **Mini-chantier** : `part-femmes` (sous-chantier de `refonte-charte`)
**Fichier lu** : `calculateur-tms-web.html` (version en cours, 2 833 lignes) : balisage l. 1126-1141, CSS l. 539-543, 575-577, JS `majFemmes` l. 2110-2119, écouteurs l. 2753-2755, validation l. 1778-1782, `recommencer` l. 2368.
**Périmètre** : structure et interaction. Textes : CR. Rendu : Design. Code : Dev. La valeur par défaut (47 %) relève de Données et n'est pas rediscutée ici.
**Limite** : je n'ai pas vu la capture de Céline et je n'ai pas ouvert la page dans un navigateur. Le débordement de la note est donc diagnostiqué à partir du code seulement (voir §4).

---

## 1. Constats sur l'état actuel

| # | Constat | Lignes |
|---|---|---|
| C1 | **Deux contrôles pour une seule valeur** : un champ numérique et un curseur côte à côte (`.calc-inline`, en `flex-wrap`). Rien n'indique lequel utiliser. Au clavier et au lecteur d'écran, cela fait deux arrêts de tabulation pour la même donnée. | 1129-1132 |
| C2 | **Le curseur ne dit pas ce qu'il mesure** : pas de libellés aux extrémités, pas de valeur sur le curseur. Son `aria-label` « Part de femmes, en % » ne donne aucun `aria-valuetext`, donc le lecteur d'écran annonce seulement « 37 ». | 1131 |
| C3 | **Un curseur natif a toujours une valeur** (50 au départ, l. 1131 et 2368). Le champ vide sert aujourd'hui d'état « non renseigné ». Si on ne garde que le curseur, il faut un autre moyen de distinguer « non touché » de « 50 % choisi ». | 1131, 1779-1780 |
| C4 | « Soit x % d'hommes » se trouve sous le contrôle, séparé de lui : la répartition ne se lit pas d'un coup d'œil. | 1133 |
| C5 | **Note sourcée longue au-dessus du contrôle**, entre le libellé et la saisie : elle repousse l'action et, reliée par `aria-describedby`, elle est lue en entier à chaque prise de focus. | 1128, 1130 |
| C6 | Cadre de focus épais et rectangulaire autour de tout le curseur : la règle globale `:focus-visible { outline: 3px … }` (l. 176) s'applique à la boîte de 44 px de haut de `.calc-range`, pas à la poignée. | 575, règle globale |

---

## 2. Décision : une seule barre de répartition Hommes | Femmes, sans boutons de choix rapide

**Contrôle retenu** : un curseur unique (`<input type="range">` natif, 0 à 100, pas de 1), présenté comme une **barre de répartition**. À gauche « Hommes » avec son pourcentage, à droite « Femmes » avec le sien, les deux valeurs **visibles en permanence**. Plus de champ numérique.

**Pourquoi un curseur natif plutôt qu'un composant sur mesure** : le clavier (flèches ±1, Page haut/bas ±10, Début/Fin), le tactile et l'annonce `role="slider"` sont fournis par le navigateur. Un composant à poignée écrit à la main devrait refaire tout cela et risquerait plus de défauts d'accessibilité.

**Pourquoi pas de choix rapides (« Surtout des hommes / Équilibré / Surtout des femmes »)** :
1. Chaque bouton devrait envoyer un nombre (par exemple 20, 50 ou 80 %). Ces valeurs seraient **inventées** et devraient passer par Données, ce qui ajoute trois hypothèses au registre pour un gain faible.
2. Des boutons à côté d'un curseur recréent le problème de doublon signalé par Céline (deux façons de faire la même chose).
3. Le curseur répond déjà au besoin de la personne qui ne connaît qu'un ordre de grandeur : elle le place « à peu près ». Et la personne qui ne sait pas du tout dispose de « Je ne connais pas la répartition ».

**Précision au doigt à 375 px** : la barre fait environ 300 px de large, soit à peu près 3 px par point de pourcentage. Atteindre exactement 37 % au doigt est délicat, mais un placement à quelques points près reste possible et les deux valeurs s'affichent en direct. **À confirmer par Données** : un écart de 2 ou 3 points sur la part de femmes change-t-il le résultat de façon visible ? Si oui, voir l'option B en §6.

---

## 3. Structure cible du bloc

Ordre du DOM, identique à toutes les largeurs :

```
<div class="calc-block calc-field" id="bloc-femmes">
  1. <label for="femmes">               Libellé de la question
  2. Lecture de la répartition (aria-hidden="true", purement visuelle)
       [Hommes  63 %]  ················  [37 %  Femmes]
  3. <input type="range" id="femmes">   La barre (seul élément focusable du contrôle)
  4. <p id="err-femmes">                Erreur (masquée par défaut)
  5. Case « Je ne connais pas la répartition »
  6. <p id="femmes-jnsp-actif">         Valeur par défaut utilisée (si case cochée)
  7. <p id="aide-femmes">               Note sourcée, raccourcie, en bas du bloc
</div>
```

### 3.1 Le curseur (`#femmes`)
- `min="0" max="100" step="1"`. La valeur envoyée au calcul reste la **part de femmes de 0 à 100**. L'extrémité gauche correspond à 0 % de femmes (100 % d'hommes), la droite à 100 % de femmes.
- `aria-valuetext` mis à jour à chaque `input`, sur le modèle « 37 % de femmes, 63 % d'hommes ». Sans ce texte, le lecteur d'écran ne lit qu'un nombre.
- `aria-describedby="err-femmes aide-femmes"` (l'erreur d'abord, la note ensuite). La note étant raccourcie (§3.5), la lecture reste supportable.
- Pas d'`aria-live` sur la lecture visuelle : le lecteur d'écran annonce déjà la nouvelle valeur du slider (via `aria-valuetext`). Une seconde annonce ferait doublon.

### 3.2 État « non renseigné » (C3)
- Au départ, le curseur est **non touché** : la poignée est au milieu mais en style neutre ou estompé (Design), et les deux valeurs affichent un tiret (« Hommes — % · — % Femmes »). `aria-valuetext` : intention « non renseigné, déplacez le curseur ».
- Le curseur devient **renseigné** au premier `input`, ou au premier `pointerdown` ou `keydown` sur lui. Cliquer sur la poignée sans la bouger suffit donc à valider 50 %.
- Validation au clic sur « Continuer » : si le curseur n'est pas renseigné et la case pas cochée → erreur en ligne (même mécanique que l'actuelle `erreur.femmes.vide`, l. 1780 et 1858), avec le focus mis sur le curseur.
- Restauration depuis `sessionStorage` : une valeur sauvegardée vaut « renseigné ».

### 3.3 Lecture de la répartition (C2, C4)
- Une ligne au-dessus de la barre : « Hommes » + pourcentage, calé à gauche ; pourcentage + « Femmes », calé à droite. Les deux chiffres sont dans une taille lisible et sont mis à jour en direct.
- Elle remplace la ligne « Soit x % d'hommes » (`#femmes-deduit`), qui est supprimée.
- Elle est `aria-hidden="true"`, puisque `aria-valuetext` porte la même information pour le lecteur d'écran.

### 3.4 « Je ne connais pas la répartition » (inchangé sur le fond)
- Case cochée → curseur `disabled`, **poignée placée sur la valeur par défaut** (47 %, fournie par Données) en style désactivé, et lecture « Hommes 53 % · 47 % Femmes » complétée d'une mention « moyenne utilisée » (intention). L'utilisateur voit ainsi exactement ce qui entre dans le calcul.
- Case décochée → retour à la valeur précédente de l'utilisateur, ou à l'état non renseigné s'il n'avait rien choisi.
- `#femmes-jnsp-actif` est conservé (en `aria-live="polite"`), placé juste sous la case.

### 3.5 Note sourcée (C5)
- Elle passe **en bas du bloc**, après la case : le parcours devient question → réponse, puis contexte pour qui veut le lire.
- Elle est **raccourcie** à une phrase sur le pourquoi de la question. Le détail chiffré et la source complète restent dans la section « Comment est calculé ce résultat » (l. 1447 et 1460), où ils figurent déjà. CR rédige la version courte ; Données confirme ce qui peut être conservé.
- Option écartée : la cacher dans un `<details>` « Pourquoi cette question ? ». Cela ajoute un clic pour une phrase.

---

## 4. Débordement du texte d'aide (bug)

Je ne peux pas l'identifier avec certitude sans navigateur. Ce que montre le code :
- `.calc-note` est en `display:flex` (l. 539), avec une icône SVG et un `<span>` de texte comme enfants. Le `<span>` n'a ni `flex: 1` ni `min-width: 0`.
- `.calc-field` est en `flex-direction: column` (l. 533).

**Pour Dev** : à reproduire à 375 et 768 px. Piste la plus probable : ajouter `min-width: 0; flex: 1 1 auto;` au `<span>` de `.calc-note`. Vérifier aussi qu'aucun ancêtre ne fixe une largeur en dur. Le correctif doit s'appliquer à **toutes** les `.calc-note` (âge, postes, etc.), pas seulement à celle-ci.

---

## 5. Notes par agent

### CR — intentions de libellés (aucun texte final ici)
- Libellé de la question : nommer la **répartition hommes / femmes** de l'effectif plutôt que « part de femmes en % », puisque le contrôle montre désormais les deux.
- Extrémités : « Hommes » et « Femmes », sans ajout.
- `aria-valuetext` : modèle « {f} % de femmes, {h} % d'hommes » ; état non renseigné : intention « non renseigné ».
- Erreur si non renseigné : dire quoi faire (« déplacez le curseur ou cochez… »). Remplace `erreur.femmes.vide` ; `erreur.femmes.invalide` devient inutile.
- Mention quand la case est cochée : « moyenne utilisée » et la valeur.
- Note sourcée : une phrase, centrée sur le pourquoi.
- Clés à supprimer : `etape2.femmes.deduit` (l. 1849).

### Design
- **Barre** : la piste doit montrer la répartition, avec la partie gauche (hommes) et la partie droite (femmes) de part et d'autre de la poignée. Couleurs au choix de Design, mais les deux zones doivent rester distinctes autrement que par la couleur : la lecture chiffrée aux extrémités suffit.
- **Poignée** : 44 × 44 px minimum en zone tactile (la partie visible peut être plus petite si la zone active reste à 44 px).
- **Focus (C6)** : supprimer le cadre rectangulaire sur la boîte de l'input et tracer un **anneau autour de la poignée** (`::-webkit-slider-thumb`, `::-moz-range-thumb` sous `:focus-visible`). Il doit rester visible : contraste ≥ 3:1 avec le fond.
- **États à dessiner** : non renseigné (poignée neutre, tirets), renseigné, focus, désactivé (case cochée, poignée à 47 %), erreur (bordure ou marque d'erreur sur le bloc, cohérente avec `.calc-error`).
- **Lecture Hommes / Femmes** : chiffres plus gros que le libellé de la question, sur une ligne même à 375 px (deux mots courts plus deux nombres, donc ça tient).
- **Largeur** : barre à 100 % de la colonne du formulaire sur mobile ; plafonnée sur desktop (l'actuel `max-width: 420px` peut rester), avec la lecture alignée sur la même largeur.

### Dev
- Supprimer `<input type="number" id="femmes">` et `.calc-inline`. **Renommer le curseur en `id="femmes"`** pour que `collecter()` (l. 1998), la validation (l. 1778-1782), `CHAMPS_SAUVES` et le calcul (l. 1814) continuent de lire `$('femmes').value` sans autre changement.
- Ajouter un état « renseigné », par exemple `data-touche` sur l'input. La validation « vide » teste cet état au lieu de la valeur. `collecter()` renvoie `''` si non renseigné, afin que `lireEntier` produise `null` comme aujourd'hui.
- `majFemmes()` : met à jour la lecture visuelle et `aria-valuetext`, et gère l'état désactivé (poignée à la valeur par défaut, lue depuis la même constante que `resultat.defaut.femmes`, pas en dur). Le retour à la valeur précédente au décochage demande de mémoriser cette valeur.
- `recommencer()` (l. 2368) : remettre l'état « non renseigné », pas seulement `value = 50`.
- Supprimer l'écouteur du champ numérique (l. 2753) et `#femmes-deduit`.
- Corriger `.calc-note` (§4) pour toute la page.
- Tester : clavier (Tab, flèches, Page haut/bas, Début/Fin), VoiceOver iOS (balayage vertical sur le slider), NVDA ou VoiceOver macOS (annonce de `aria-valuetext`), tactile à 375 px, restauration depuis `sessionStorage`, case cochée puis décochée.

### Données
- Confirmer qu'un écart de 2 à 3 points sur la part de femmes ne change pas le résultat de façon notable. Cela détermine si le curseur seul suffit (option A) ou s'il faut l'option B.
- Indiquer ce que la note courte peut garder (55 % des TMS reconnus / 47 % des salariés, données 2023).

---

## 6. Option B (seulement si Données juge la précision au point près nécessaire)

On garde la même barre, mais le pourcentage « Femmes » affiché à droite devient un **petit champ numérique éditable**, intégré visuellement à la lecture. Il s'agit alors d'un seul composant, avec deux façons de saisir, reliées et lisibles ensemble. Coût : un second arrêt de tabulation, avec le libellé « Part de femmes, en % ». À n'adopter que si la précision au doigt pose réellement problème. Elle n'est pas recommandée par défaut, parce qu'elle réintroduit en partie le doublon.
