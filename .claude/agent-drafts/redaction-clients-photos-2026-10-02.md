# Rédaction — clients.html (photos visibles d'emblée)
Agent CR · 2 octobre 2026 · skill `redaction-celine` appliquée

Périmètre : trois textes courts uniquement. Aucun autre contenu de la page n'est touché.
Toutes les données reprises viennent du contenu déjà publié dans `clients.html` (lignes 317-371 pour Chavigny). Aucun chiffre ni fait ajouté.

---

## Texte 1 — libellé de la ligne de dépliement

Contraintes respectées : verbe à l'infinitif, 3 à 5 mots, ≤ 32 caractères, invariant (ouvert comme fermé), identique pour les 4 études de cas.

| # | Proposition | Mots | Caractères |
|---|---|---|---|
| A | **Lire le détail de l'intervention** | 5 | 32 |
| B | Voir le déroulé des ateliers | 5 | 28 |
| C | Voir objectifs et résultats | 4 | 27 |

**Recommandation : A — « Lire le détail de l'intervention »**

Pourquoi :
- « Lire » reste juste dans les deux états. « Voir » sonne faux quand le bloc est déjà ouvert (on a déjà vu), alors que l'invitation à lire tient toujours.
- « le détail de l'intervention » couvre les deux onglets (Objectif et Résultats) sans les nommer, donc le libellé ne mentira pas si le contenu d'un onglet évolue.
- Formulation valable pour les 4 cas, qui sont de natures différentes (2 journées RATP, tournée multi-sites Chavigny, trois ateliers Daiichi Sankyo, ateliers thématiques VSF).
- Juste sous une bande de photos, le mot « détail » marque bien la hiérarchie : les photos donnent le coup d'œil, le dépliement donne le fond.

Réserves sur les deux autres :
- B parle d'« ateliers », exact pour les 4 cas mais plus étroit que ce qui s'ouvre derrière (objectifs, résultats, effets observés).
- C est le plus court et le plus explicite sur les onglets, mais il se périme si les onglets changent de nom, et « Voir » pose le même problème à l'état ouvert.

Note d'accessibilité (pour l'agent Dev, hors de mon périmètre) : le libellé étant invariant, prévoir que l'état ouvert/fermé reste porté par le `<details>` natif et son chevron, pas par le texte.

---

## Texte 2 — fin du titre h3 de Groupe Chavigny

Modèle des trois autres : pastille + site + ville en orange.

**Recommandation :**

> **GROUPE CHAVIGNY** - AGENCES DU GROUPE - **6 DÉPARTEMENTS**

- Partie médiane (`- AGENCES DU GROUPE -`) : reprend exactement le vocabulaire déjà publié (« les différentes agences du groupe »), à la place du site unique des autres fiches.
- Partie orange (`6 DÉPARTEMENTS`) : dit l'étendue géographique sans recopier les six noms, et occupe la même fonction visuelle que « PARIS (75) » ou « RUEIL-MALMAISON (92) ». Le chiffre 6 se vérifie par simple comptage de la liste publiée.

**Variante** si un mot plus parlant est préféré pour la partie médiane :

> **GROUPE CHAVIGNY** - TOURNÉE DES AGENCES - **6 DÉPARTEMENTS**

À écarter : toute mention de régions (Centre-Val de Loire, Pays de la Loire, Île-de-France). C'est déductible des numéros de départements, mais ce n'est pas écrit sur la page, donc je ne l'intègre pas.

---

## Texte 3 — sous-titre de Groupe Chavigny

Même nature que « 2 journées pour la prévention des Troubles Musculo-Squelettiques » (RATP). Une phrase, 10 à 15 mots.

**Recommandation (13 mots) :**

> 2 semaines d'ateliers Économie Gestuelle et Posturale auprès de plus de 350 personnes.

**Variante 1 (14 mots)**, si l'accent doit porter sur la logistique de la tournée :

> Tournée de 2 semaines dans les agences du groupe, plus de 350 personnes formées.

**Variante 2 (11 mots)**, si la duplication du chiffre avec le bloc `+350 / personnes formées` du corps dérange :

> Ateliers Économie Gestuelle et Posturale menés dans les agences du groupe.

Point à arbitrer par l'agent principal : le chiffre « +350 personnes formées » existe déjà dans le corps replié (`.case-stat`). Le reprendre dans le sous-titre est à mon sens un gain, c'est l'argument le plus fort de cette fiche et il devient visible sans clic. Si la répétition est jugée gênante une fois les photos remontées, prendre la variante 2.

---

## Où faire réapparaître la liste des 6 départements

Recommandation : **dans le corps replié, juste sous la ligne « Tournée répartie sur 2 semaines dans les différentes agences du groupe »** (`.case-note`, ligne 332 actuelle), sous forme d'une ligne de même niveau typographique :

> Agences concernées : Eure et Loir (28), Indre et Loire (37), Loir et Cher (41), Maine et Loire (49), Sarthe (72), Essonne (91).

C'est l'emplacement logique : la note parle déjà de la tournée et des agences, la liste en est le prolongement direct. Elle quitte la zone de premier coup d'œil (où elle freinait la lecture) sans quitter la page, et reste indexable par Google puisque le contenu d'un `<details>` replié l'est.

Solution de repli, si cet emplacement est déjà chargé : la placer en fin de l'onglet « Résultats », avant la ligne de clôture « Une opération d'envergure réussie... ». Moins naturel, mais acceptable.
