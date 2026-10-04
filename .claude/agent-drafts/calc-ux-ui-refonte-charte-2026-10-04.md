# UX/UI — Calculateur des coûts cachés des TMS : audit de structure et structure cible

**Agent** : calc-ux-ui · **Date** : 4 octobre 2026 · **Chantier** : `refonte-charte` (branche prévue `calc/refonte-charte-2026-10`)
**Fichier audité** : `calculateur-tms-web.html` (1 613 lignes, version du 27 août) · **Référence site** : `index.html` (refonte du 22 septembre)
**Périmètre** : structure, parcours, contrôles, validation, hiérarchie des résultats, CTA, accessibilité des interactions, responsive.
**Hors périmètre** : textes finaux (CR), couleurs/typos/composants (Design), chiffres et formules (Données), balisage `<head>` (SEO), code (Dev). Les intentions de libellés indiquées ici ne sont pas des textes.

**Statut** : proposition à faire valider par Céline avant Design, CR et Dev.

---

## 0. Méthode et limites

- La skill **`impeccable` n'est pas disponible dans cette session** (absente de la liste des skills et de `.claude/skills/`). Grille appliquée à la place : heuristiques de Nielsen, charge cognitive par étape, coût d'interaction (nombre de saisies/clics), états (vide, erreur, succès, chargement), critères WCAG 2.1 AA pertinents pour les interactions.
- Analyse fondée sur la lecture du code source (HTML, CSS inline, JS). **Aucun test en navigateur** n'a été fait : les comportements décrits sont déduits du code. Le bug de « Recommencer » (D10) est à confirmer par Dev en navigateur.
- Aucune donnée d'usage (taux d'abandon par étape, taux de soumission du formulaire PDF) n'est disponible : les priorités sont fondées sur les heuristiques, pas sur des mesures.

---

## 1. Constats

Légende : **D** = défaut (à corriger), **A** = amélioration (optionnelle). Priorité : P1 bloquant / P2 important / P3 confort.

### 1.1 Cohérence avec le site

| # | Constat | Lignes | Type |
|---|---|---|---|
| D1 | **Nav différente de `index.html`** : pas d'`aria-label="Navigation principale"` sur `<nav>`, lien logo sans `aria-label`, classes `nav-pill-yellow`/`nav-pill-orange` au lieu de `nav-calc`/`nav-cta`, pas de `.nav-overlay`, pas d'état `is-solid` au défilement, menu mobile piloté par `.open` (index : `.is-open` + `body.nav-open` + overlay). | 388-401, 1588-1608 ; index 893-907, 1391+ | D · P1 |
| D2 | **Footer différent** : titres de colonnes en `<h4>` (index : `<h3>`), lien « Certificat Qualiopi » sur `href="#"` (index : `certificat-qualiopi-uptomove.pdf`), bloc « Avec le soutien de CCI » présent ici et absent sous cette forme dans l'index, liens sociaux sans `aria-label` dans l'index (à arbitrer : c'est l'index qui est moins accessible sur ce point → à signaler au chantier site, pas à recopier tel quel). | 739-793 ; index 1283-1350 | D · P1 |
| D3 | Le hero (bandeau centré, H1 sur 3 lignes avec `<br>`) ne reprend aucun gabarit de l'index. | 404-410 | D · P2 |
| A1 | L'index possède déjà un composant **« Exemple de restitution »** (`.b6-preview`, montant, jauge de risque, 2 lignes). C'est l'aperçu de résultat que le hero du calculateur n'a pas : à réutiliser tel quel pour la continuité accueil → calculateur. | index 1167-1186 | A · P2 |
| A2 | La barre CTA sticky mobile de l'index (« Calculer mon coût ») ne doit **pas** être recopiée sur le calculateur (on y est déjà). | index 1353-1357 | Note |

### 1.2 Parcours et étapes

| # | Constat | Lignes | Type |
|---|---|---|---|
| D4 | **Étape 1 surchargée** : 2 champs + 3 blocs de répartition en % (2 + 4 + 4 = 10 champs %) = **12 saisies** sur un seul écran, dont 3 contraintes « doit faire 100 % ». Sur mobile, environ 4 à 5 écrans de défilement avant « Continuer ». | 424-562 | D · P1 |
| D5 | **Étape 3 vide de saisie** : « Votre rapport offert » ne demande rien, elle liste des promesses et ajoute un clic (« Voir mon rapport »). Le bouton de l'étape 2 dit déjà « Calculer mes coûts cachés » : l'étape 3 contredit cette promesse. | 630, 634-655 | D · P1 |
| D6 | **Promesse non tenue** : l'étape 3 annonce « Détail : arrêts directs / productivité / coûts indirects » et « Votre score de risque vs. moyennes du secteur ». Les résultats à l'écran n'affichent **ni la décomposition** (calculée : `cArrets`, `cAbs`, `cIndir`, l. 1024-1026, mais seulement dans le PDF) **ni aucune comparaison sectorielle** (rien dans le calcul). | 645-650, 658-689 | D · P1 (→ CR, Données) |
| D7 | **Valeurs par défaut silencieuses** : si sexe et âge restent vides, le script injecte 50/50 et 20/40/35/5 sans prévenir, alors que les libellés portent « * » (obligatoire). L'utilisateur ne sait pas que le résultat repose sur des valeurs qu'il n'a pas saisies. Ces valeurs ne figurent pas dans `SOURCES.md`. Même chose : effectif par défaut 50 et part de femmes 50 % dans `calcAndShow` (l. 1010, 1014). | 942-944, 954-955, 1010, 1014 | D · P1 (→ Données) |
| D8 | **Signaux faibles marqués « * » mais facultatifs** dans le code (« signauxSel optionnel »). | 581, 991-992 | D · P2 |
| D9 | Durée moyenne d'arrêt exigée même si le nombre d'arrêts vaut 0. | 576-577, 985 | D · P2 |
| D10 | **« Recommencer le calcul » probablement cassé** : `restart()` exécute `document.getElementById('fonction').value=''` hors `try` ; l'élément `#fonction` n'existe pas → erreur JS, `goStep(1)` n'est jamais atteint. À confirmer en navigateur. | 1512-1526 | D · P1 (→ Dev) |
| D11 | Le bouton « Retour » du navigateur quitte la page et **perd toutes les saisies** (aucun historique par étape, aucune persistance). | 909-913 | D · P2 |
| D12 | « Demander un devis » ouvre `contact` dans un **nouvel onglet sans avertissement** ; les liens des cartes formations aussi (et pointent vers `formations.html#…` au lieu de l'URL propre `formations#…`). | 685, 1071-1072, 1063 | D · P3 |

### 1.3 Contrôles et accessibilité des interactions

| # | Constat | Lignes | Type |
|---|---|---|---|
| D13 | **Validations par `alert()`** (7 occurrences sur le parcours, + 3 dans PDF/export), messages techniques (« H/F: 40+50=90 doit faire 100 »). L'utilisateur doit mémoriser l'erreur, fermer, chercher le champ. | 935, 948, 959, 974, 977, 986, 989, 1165, 1241, 1243 | D · P1 |
| D14 | **Libellés non associés** : tous les `<label>` du calculateur sont sans `for` (secteur, effectif, arrêts, durée) ; les champs % ont tous le même libellé « % » ; les groupes (sexe, âge, postes) ne sont pas des `<fieldset>/<legend>`. Un lecteur d'écran annonce « % , zone d'édition » dix fois. | 430, 446, 451-527, 534-555, 572, 576 | D · P1 |
| D15 | **Signaux faibles et plan de prévention en `<div onclick>`** : pas de focus clavier, pas de rôle, pas d'état coché annoncé. Inutilisables au clavier et au lecteur d'écran. | 584-607, 615-626 | D · P1 |
| D16 | **Focus invisible** : `outline:none` sur les champs (l. 180) et sur les champs % avec une bordure blanche sur fond clair (l. 215). | 179-180, 215 | D · P1 (→ Design pour le rendu) |
| D17 | Champs % de 30 px de haut (cible < 44 px) ; bouton de fermeture de la modale 32 px. | 210-213, 356 | D · P2 |
| D18 | Totaux « Répartition : x % » et messages sans `aria-live` ; la barre de progression (3 `div` vides) n'a aucune alternative textuelle. | 417-421, 475, 523, 558, 609 | D · P2 |
| D19 | **Modale de téléchargement** sans `role="dialog"`, `aria-modal`, ni titre relié ; pas de piège de focus, pas de fermeture par Échap, pas de retour du focus au bouton d'origine. | 693-737, 1172-1180 | D · P1 |
| D20 | Pas de gestion du focus au changement d'étape : `scrollTo(0)` ramène en haut de page (au-dessus du hero), le focus reste sur un bouton masqué. | 909-913 | D · P2 |
| D21 | Classe `has-tooltip` sur la métrique de coût sans infobulle. | 664 | D · P3 |

### 1.4 Résultats et conversion

| # | Constat | Lignes | Type |
|---|---|---|---|
| D22 | **Hiérarchie plate** : le coût annuel est dans une tuile de même taille que « jours perdus » et « salariés exposés ». Le chiffre-clé ne domine pas. | 663-670 | D · P2 |
| D23 | **Aucun bloc « méthode et sources »** : une seule ligne de disclaimer générique en bas (« données INRS et de l'Assurance Maladie »), qui attribue l'ensemble à deux sources alors que `SOURCES.md` classe les 16 paramètres « à vérifier » ou « hypothèse ». | 683, 688 | D · P1 (→ Données, CR) |
| D24 | **Trois CTA de poids voisin empilés** (devis, PDF, recommencer) sans hiérarchie claire, après 4 blocs de contenu. | 685-687 | D · P2 |
| D25 | **Formulaire PDF à 6 champs obligatoires** (prénom, nom, fonction, entreprise, email, téléphone) dans une modale, pour un document dont le contenu est déjà affiché à l'écran. Coût d'interaction élevé, notamment le téléphone. | 698-735 | D · P1 (arbitrage Céline) |
| D26 | Messages d'erreur du formulaire PDF corrects (en ligne, `form-status`) mais sans `aria-live` ; échec de chargement de jsPDF signalé par `alert()`. | 734, 1243 | D · P2 |

### 1.5 Code mort (à signaler à Dev, sans effet visible)

Bloc de variables et `togglePoste` dupliqués (l. 797-815 et 818-836) ; `selDouleur` (l. 919, cible des `id` inexistants) ; `updateArrets` vide (l. 982) ; `URL_SED`/`URL_MAN` inutilisées (l. 1066-1067) ; `saveLead` jamais appelée (l. 1002) ; `exportLeads` + bouton d'export sur `#export` (l. 1563-1585), qui n'exporte que le `localStorage` du visiteur lui-même. À supprimer lors de la refonte (décision Céline pour l'export, voir Q6).

---

## 2. Décisions structurantes

1. **Garder 3 étapes, mais 3 vraies étapes de saisie.** On supprime l'étape « rapport offert » (D5) et on dédouble l'étape 1 surchargée (D4). Le parcours devient : *1. Votre entreprise* → *2. Vos équipes* → *3. Absentéisme et prévention* → *Résultats*. Mêmes données d'entrée qu'aujourd'hui, mieux réparties (4 à 6 saisies par écran au lieu de 12).
2. **Rendre visibles les valeurs par défaut** au lieu de les injecter en silence (D7) : mode « Je ne connais pas la répartition » explicite pour le sexe et l'âge, et pour la durée moyenne d'arrêt. La valeur par défaut est fournie et sourcée par Données, affichée à l'utilisateur et reprise dans le résultat (« estimé avec une répartition par défaut »).
3. **Pas de curseurs pour les répartitions liées** (âge, postes) : quatre curseurs qui doivent totaliser 100 % sont plus difficiles à régler qu'un champ, au doigt comme au clavier. Curseur autorisé uniquement pour la part de femmes (une seule valeur, l'autre se déduit).
4. **Les résultats s'affichent directement** après l'étape 3, sans formulaire. Le PDF reste derrière le formulaire Formspree (`mljrlnqe`, noms de champs inchangés), mais en **panneau dans la page** (plus de modale) et avec moins de champs obligatoires (options en §5, à arbitrer par Céline).
5. **Hiérarchie des résultats** : coût annuel dominant + niveau de risque → décomposition (enfin affichée) → ce que vous pouvez faire → gain estimé → actions. Toute mention « estimation » et le lien vers la méthode sont collés au chiffre.
6. **Section « Comment est calculé ce résultat » permanente**, repliable, placée sous le calculateur (lisible avant et après le calcul) ; FAQ courte en option, sous la méthode, conditionnée à l'avis SEO.
7. **Nav, footer et hero alignés sur `index.html`** (copie conforme nav/footer ; hero sur le gabarit texte + aperçu `.b6-preview`).
8. **Zéro `alert()`** : erreurs en ligne, résumé d'erreurs en tête d'étape, annonces `aria-live`.

---

## 3. Squelette cible de la page

```
[Lien d'évitement → #calculateur]                      (A, voir note 3.0)
NAV — copie conforme index.html + aria-current="page"
HERO — texte + aperçu « Exemple de restitution »
<main id="calculateur">
  BLOC CALCULATEUR (carte)
    Stepper : 1 Entreprise · 2 Équipes · 3 Absentéisme · Résultats
    Résumé d'erreurs (masqué si aucune erreur)
    Étape 1 / Étape 2 / Étape 3 / Résultats (une seule visible)
  BLOC « Comment est calculé ce résultat » (<details>, fermé)
  BLOC FAQ courte (<details> × 4 à 6) — si SEO le justifie
  BLOC SORTIE — formations · contact · article de blog
</main>
FOOTER — copie conforme index.html
```

### 3.0 Lien d'évitement (A · P3)
Premier élément focusable : « aller au calculateur » vers `#calculateur`. L'index n'en a pas : **à signaler au chantier site** pour cohérence (on peut l'ajouter ici sans attendre, il est invisible hors focus).

### 3.1 Nav (D1 · P1)
- Copie conforme du bloc `index.html` l. 893-907 (balisage, classes, overlay, comportement `is-solid` au défilement, script hamburger `is-open`/`body.nav-open`), **plus** `aria-current="page"` sur « Calculateur TMS ».
- La nav de l'index devient sticky : Dev doit compenser sa hauteur (`--nav-h`) lors des défilements vers une étape (`scroll-margin-top`).

### 3.2 Hero (D3, A1 · P2)
| Élément | Rôle | Note |
|---|---|---|
| Surtitre | Situer l'outil (gratuit, prévention TMS) | CR |
| H1 | Promesse de l'outil, une seule idée | CR + SEO (mot-clé) ; pas de `<br>` imposé |
| Sous-titre | Durée + ce qu'on obtient | La durée annoncée (« 3 minutes ») doit rester vraie après refonte : à remesurer |
| 3 réassurances courtes | Lever les freins avant de commencer | Intentions : *résultat immédiat sans inscription* ; *données calculées dans votre navigateur* (vrai : le calcul est local, rien n'est envoyé avant le formulaire PDF — à reformuler par CR, à confirmer par Dev) ; *méthode et sources consultables* (ancre vers §3.5) |
| CTA principal | Ancre vers `#calculateur` (focus sur le titre de l'étape 1) | Un seul CTA |
| Aperçu de restitution | Montrer ce qu'on obtient | Réutiliser `.b6-preview` de l'index, `aria-hidden="true"`, étiqueté « exemple ». **Les valeurs d'exemple de l'index (128 400 €, 32 jours, « Élevé ») doivent être cohérentes avec le modèle** : à faire vérifier par Données (un jeu d'entrées réel qui produit ces sorties), sinon les deux pages changent ensemble (chantier site pour l'index). |

### 3.3 Bloc calculateur

#### Stepper (D18, D20)
- Liste ordonnée de 4 items : 3 étapes + « Résultats ». Item courant : `aria-current="step"`. Texte visible « Étape 2 sur 3 » au-dessus du titre d'étape.
- Étapes déjà validées : cliquables (retour direct) ; étapes futures : non cliquables.
- Au changement d'étape : focus sur le titre d'étape (`<h2 tabindex="-1">`), défilement jusqu'au haut de la carte (pas jusqu'au haut de la page), sans animation si `prefers-reduced-motion`.
- `history.pushState` à chaque étape : le bouton Retour du navigateur revient à l'étape précédente (D11).

#### Navigation entre étapes
- En bas de chaque étape : bouton principal « Continuer » (étapes 1-2) / « Calculer » (étape 3).
- « Retour » : lien-bouton secondaire en haut de l'étape (position actuelle conservée), présent aux étapes 2, 3 et Résultats (« Modifier mes réponses » → étape 3).
- **Conservation des saisies** : déjà assurée entre étapes (DOM masqué). Ajouter une persistance `sessionStorage` des réponses et du dernier résultat (A · P2) pour survivre à un rechargement ou à un aller-retour vers `contact`. Rien n'est envoyé ; à effacer par « Recommencer ».

#### Étape 1 — Votre entreprise (3 questions)

| Ordre | Donnée | Contrôle | Obligatoire | Défaut | Validation |
|---|---|---|---|---|---|
| 1.1 | Secteur d'activité | `<select>` natif, `<label for>` (9 options actuelles conservées) | Oui | Aucun | À la sortie du champ et au clic « Continuer » |
| 1.2 | Effectif total | `<input type="number" inputmode="numeric" min="1" step="1">`, `<label for>`, aide « effectif total, tous sites » (intention) | Oui | Aucun (supprimer le repli silencieux à 50, l. 1010) | Entier ≥ 1 |
| 1.3 | Types de postes | **`<fieldset>` + cases à cocher** (4 types, libellé + description) : « quels types de postes existent chez vous ? ». Si **une seule** case cochée → 100 % implicite, aucun champ %. Si **plusieurs** → apparition d'un champ % par type coché (`<label for>` propre : « Part des postes sédentaires, en % »), **pré-rempli par répartition égale**, avec compteur « Total : x % · reste y % » en `aria-live="polite"` | Oui (≥ 1 case) | Répartition égale entre les types cochés, signalée comme modifiable | Total = 100 % si ≥ 2 types ; message en ligne sous le compteur |

Justification 1.3 : dans la majorité des cas probables (entreprise tertiaire, entrepôt), un seul type domine et la question se règle en un clic. Le mécanisme case + % existait déjà dans le code (`togglePoste`, l. 809) mais n'est plus branché. La répartition égale par défaut influence le calcul : **à soumettre à Données** (acceptable ou non comme hypothèse affichée).

#### Étape 2 — Vos équipes (2 questions, toutes deux avec « Je ne sais pas »)

| Ordre | Donnée | Contrôle | Obligatoire | Défaut | Validation |
|---|---|---|---|---|---|
| 2.1 | Part de femmes dans l'effectif | **Un seul champ** % (`type="number"`, 0-100) couplé à un curseur `<input type="range">` synchronisé ; affichage déduit « soit x % d'hommes » (lecture seule, `aria-live`). Case « Je ne connais pas la répartition » qui désactive le champ et affiche la valeur par défaut utilisée | Oui, ou case cochée | Valeur fournie et sourcée par **Données** (aujourd'hui 50 %, non sourcée) | 0 à 100 entier |
| 2.2 | Répartition par âge (4 tranches) | `<fieldset>` + 4 champs % avec `<label for>` explicite (« Part des 30-44 ans, en % »), compteur « Total / reste » en `aria-live`. Case « Je ne connais pas la répartition » qui désactive les 4 champs et affiche la répartition par défaut | Oui, ou case cochée | Répartition fournie et sourcée par **Données** (aujourd'hui 20/40/35/5, non sourcée) | Total = 100 % |

- Les mentions « INRS : … » sous les questions (l. 452, 480) restent des **aides contextuelles** (pourquoi on demande) ; leur contenu dépend de Données (S09, S10 « à vérifier »). Elles doivent être reliées au champ par `aria-describedby`.
- **Option à évaluer par Données (non retenue par défaut)** : remplacer les 4 tranches par une seule question « part des 45 ans et plus ». Gain de charge important, mais change les entrées du modèle (coefficients S10) : ne se décide pas en UX.
- Le libellé « 65 ans et + (âge légal de départ) » (l. 514) contient une affirmation factuelle à vérifier par Données/CR.

#### Étape 3 — Absentéisme et prévention (4 questions)

| Ordre | Donnée | Contrôle | Obligatoire | Défaut | Validation |
|---|---|---|---|---|---|
| 3.1 | Nombre d'arrêts liés aux TMS, 12 derniers mois | `type="number" min="0"`, `<label for>`, aide « une estimation suffit » (intention) | Oui | Aucun | Entier ≥ 0. Avertissement non bloquant si arrêts > effectif (seuil à confirmer par Données) |
| 3.2 | Durée moyenne d'un arrêt (jours) | `type="number" min="1"` + case « Je ne sais pas » → valeur par défaut affichée | Oui si 3.1 > 0 ; **masqué et ignoré si 3.1 = 0** (D9) | Valeur sourcée par **Données** (aucune aujourd'hui) | Entier ≥ 1 |
| 3.3 | Signaux faibles observés | `<fieldset>` + **4 vraies cases à cocher** (`<input type="checkbox">` dans un `<label>` couvrant toute la carte, ≥ 44 px) ; « Aucun signal observé » exclusif (cocher décoche les autres, et inversement, avec annonce `aria-live`) | **Facultatif**, affiché comme tel (retirer l'astérisque, D8) | Aucun coché = « non » (comportement actuel, à expliciter dans la méthode) | Aucune |
| 3.4 | Plan de prévention en place | `<fieldset>` + **3 boutons radio natifs** stylés en cartes (`<label>` couvrant la carte) | Oui | Aucun | Choix requis |

Bouton « Calculer » → Résultats directement (suppression de l'ancienne étape 3).

#### Validation et erreurs (toutes étapes, D13)
- **Quand** : au clic sur « Continuer/Calculer » pour toute l'étape ; puis, une fois un champ en erreur, revalidation à chaque saisie pour faire disparaître le message dès correction. Pas de message d'erreur sur un champ jamais touché avant le premier clic.
- **Où** : message sous le champ (ou sous le compteur pour une répartition), relié par `aria-describedby`, champ marqué `aria-invalid="true"`. Si ≥ 2 erreurs : **résumé en tête d'étape** (`role="alert"`, liste de liens vers chaque champ), focus déplacé sur ce résumé ; si 1 erreur : focus sur le champ.
- **Contenu** (intention, CR écrit) : dire quoi faire, pas ce qui est faux (« indiquez… », « il reste x % à répartir »).
- Champs numériques : refuser les non-chiffres à la saisie comme aujourd'hui (`clampInput`), mais **ne pas réécrire la valeur pendant la frappe** (l'actuel `syncGenre` sur `oninput` réécrit l'autre champ à chaque touche, ce qui est correct pour 2 valeurs mais déroutant si on efface).

#### Résultats (D6, D22, D24)

Ordre de lecture (identique à toutes les largeurs) :

| # | Bloc | Contenu structurel | Notes |
|---|---|---|---|
| R1 | **Synthèse** | Titre d'étape ; **coût annuel estimé** (chiffre dominant, seul de son niveau) ; badge de niveau de risque (texte + forme, pas seulement couleur) ; rappel du contexte (secteur, effectif) ; mention « estimation indicative » **collée au chiffre** ; lien « Comment est calculé ce résultat » (ouvre et fait défiler vers §3.5) ; si une valeur par défaut a été utilisée, une ligne le signale (« calculé avec la répartition par âge par défaut ») avec lien « modifier » vers l'étape concernée | Annonce `aria-live="polite"` du coût et du niveau à l'arrivée sur les résultats |
| R2 | **Décomposition** | 3 composantes du coût (arrêts / absentéisme-productivité / coûts indirects) sous forme de liste ou barre empilée avec valeurs ; puis 2 indicateurs secondaires : jours perdus/an, salariés potentiellement exposés | Les 3 composantes existent déjà dans le calcul. Libellés et définitions : CR + Données |
| R3 | **Ce que vous pouvez faire** | Encadré recommandation selon le niveau de risque (contenu actuel `ctaMap`) + **4 cartes formations** (logique `getFormations` inchangée), liens vers `formations#…` dans le même onglet | Chiffre « −30 % de douleurs » (S16) à valider par Données avant toute reprise |
| R4 | **Gain estimé d'une démarche** | ROI (×) et économie annuelle, avec **étiquette d'hypothèse visible** et renvoi à la méthode | S12/S13 : l'actuelle attribution « données INRS » est à vérifier ; si non sourcé, ce bloc est étiqueté « hypothèse UP TO MOVE » ou retiré (décision Données/Céline) |
| R5 | **Actions** | 1 CTA principal **« Demander un devis »** (vers `contact`, même onglet) ; 1 CTA secondaire **« Recevoir le rapport PDF »** (déplie R6) ; liens tertiaires « Modifier mes réponses » et « Recommencer » | Un seul bouton plein. « Recommencer » efface aussi la persistance `sessionStorage` |
| R6 | **Panneau PDF** (déplié sous R5) | Formulaire en ligne (plus de modale, D19 disparaît) : champs selon l'option retenue en §5 ; mention de consentement + lien `vie-privee` ; bouton d'envoi | États : voir §5 |
| — | (supprimé) | Disclaimer d'une ligne en bas | Remplacé par R1 (mention collée au chiffre) + §3.5 |

Note de comparaison sectorielle : la promesse « votre score vs. moyennes du secteur » est **retirée** sauf si Données fournit des moyennes sectorielles sourcées ; dans ce cas, un bloc R1-bis « Repère sectoriel » s'insère entre R1 et R2.

### 3.4 Changement de contexte
- Arrivée depuis l'accueil (« Calculer mon coût » / « Faire le calcul »), le blog ou la nav : l'utilisateur atterrit sur le hero ; une ancre `#calculateur` doit aussi fonctionner pour les liens profonds (blog → directement l'étape 1). → **Signal au chantier site** : les liens de l'index et de `blog-calculateur-cout-cache-tms.html` pourraient pointer vers `calculateur-tms-web#calculateur` (décision des agents du site).

### 3.5 Bloc « Comment est calculé ce résultat » (D23)
- `<section>` avec son propre `<h2>`, contenu dans un `<details>` **fermé par défaut** ; `id` stable pour l'ancre depuis le hero et R1. Ouvrir le `<details>` par script quand on suit le lien depuis R1.
- Structure interne (contenu : Données ; texte : CR) :
  1. Principe en 3-4 lignes (ce que l'outil estime, ce qu'il n'estime pas).
  2. Les 3 composantes du coût : pour chacune, formule en clair et données utilisées.
  3. **Tableau des paramètres** : paramètre · valeur · source (lien) · statut (*sourcé* / *hypothèse UP TO MOVE*), aligné sur `SOURCES.md`. Tableau dans un conteneur à défilement horizontal focusable sur mobile (même motif que `.table-scroll` de l'index, l. 1131).
  4. Valeurs par défaut utilisées quand l'utilisateur répond « Je ne sais pas ».
  5. Limites de l'estimation.
  6. Date de dernière mise à jour des données.
- Le PDF doit reprendre une version courte de ce bloc (voir notes Dev/Données) : la ligne actuelle « Source INRS : coût moyen arrêt TMS entre 6 000 et 25 000 € » (l. 1358) est à vérifier par Données.

### 3.6 FAQ courte (conditionnelle)
- Emplacement : après §3.5, avant le bloc de sortie. 4 à 6 questions maximum en `<details>`, un `<h2>` de section. **Ne pas dupliquer** la méthode (§3.5) ni `faq.html`.
- Intentions de questions possibles (à confirmer par SEO, rédigées par CR) : quelles données faut-il avoir sous la main ; les données saisies sont-elles conservées ; quelle fiabilité ; que faire après le calcul ; que contient le rapport PDF.
- Si SEO ne la justifie pas : bloc supprimé sans impact sur le reste du squelette.

### 3.7 Bloc de sortie
- Court bandeau final pour éviter l'impasse (l'utilisateur qui n'a pas calculé ou qui a fini) : lien vers `formations`, `contact`, et l'article `blog-calculateur-cout-cache-tms`. Réutiliser si possible le gabarit `cta-final` de l'index (l. 1260) : décision Design.
- Ne pas répéter le CTA « Calculer » (on y est).

### 3.8 Footer (D2)
Copie conforme de `index.html` l. 1283-1350 (titres en `<h3>`, lien Qualiopi vers le PDF). Le bloc « Avec le soutien de CCI » n'est conservé que s'il existe dans l'index (à vérifier par Design : l'index contient une image en base64 dans la colonne logo, l. 1290, à identifier).

---

## 4. Accessibilité des interactions (récapitulatif pour Dev)

- Tous les champs : `<label for>` unique et explicite ; groupes en `<fieldset>/<legend>` ; aides reliées par `aria-describedby`.
- Cases et radios **natives** (pas de `div onclick`), zone cliquable = la carte entière (`<label>` englobant), hauteur ≥ 44 px ; état coché visible autrement que par la couleur (Design).
- Focus visible partout (suppression des `outline:none` l. 180 et 215) ; rendu : Design.
- Ordre de tabulation = ordre visuel ; aucun `tabindex` positif.
- `aria-live="polite"` : compteurs de répartition, part d'hommes déduite, coût et niveau de risque à l'arrivée des résultats, états du formulaire PDF. `role="alert"` : résumé d'erreurs.
- Stepper : `aria-current="step"` ; texte « Étape x sur 3 ».
- Focus déplacé sur le titre d'étape à chaque changement ; sur le panneau PDF à son ouverture ; sur le message de succès/erreur après envoi.
- Liens ouvrant un nouvel onglet : supprimés du parcours ; s'il en reste (PDF Qualiopi du footer), l'indiquer (CR).
- `prefers-reduced-motion` : pas de défilement animé.

---

## 5. Formulaire de téléchargement du rapport (D25) — à arbitrer par Céline

Constat : le rapport PDF reprend des résultats déjà visibles à l'écran. Sa valeur pour l'utilisateur est la **conservation et le partage interne** (envoyer au DG, au CSE) ; sa valeur pour UP TO MOVE est le **contact qualifié**. Chaque champ obligatoire ajouté réduit le nombre de rapports demandés ; le téléphone est en général le champ le plus dissuasif (pas de mesure disponible ici : principe général de coût d'interaction, à vérifier sur les statistiques Formspree si Céline les a).

| Option | Obligatoires | Facultatifs | Ce qu'on perd |
|---|---|---|---|
| A — minimale | Email pro | Entreprise | Qualification faible |
| **B — recommandée** | Email pro, Entreprise | Prénom, Fonction (liste courte : DRH/RH, QHSE, Direction, CSE, Autre — intention, libellés CR), Téléphone | Téléphone non garanti |
| C — actuelle | 6 champs | — | Volume de rapports |

- Noms de champs Formspree **inchangés** (`prenom`, `nom`, `fonction`, `entreprise`, `email`, `telephone`, `_subject`, `cout_estime`, `secteur`) : un champ facultatif vide reste compatible. Endpoint `mljrlnqe` inchangé.
- Option complémentaire (Céline) : ajouter en champs cachés `effectif` et `risque` pour qualifier le lead sans rien demander de plus (données d'entreprise, non personnelles).
- « Entreprise » sert au titre et au nom du fichier PDF (l. 1286, 1504) : s'il est facultatif, Dev garde le repli actuel (`entreprise`).
- **États** :
  - *repos* : bouton « Recevoir le rapport » actif ;
  - *validation* : erreurs en ligne comme §3.3 (email pro au format valide) ;
  - *envoi* : bouton désactivé + `aria-busy`, libellé d'attente ;
  - *succès* : message en `aria-live`, téléchargement lancé, **lien « télécharger à nouveau »** (le PDF peut être bloqué par le navigateur) ; le panneau reste ouvert (pas de fermeture automatique à 2 s comme aujourd'hui, l. 1222) ;
  - *erreur réseau* : message en ligne, saisies conservées, contact email en repli ;
  - *jsPDF non chargé* : message en ligne (plus d'`alert()`), le formulaire a quand même été envoyé → le dire, et proposer l'envoi par email (décision Céline : est-ce que quelqu'un envoie le rapport à la main ?).

---

## 6. Responsive

| Zone | 375 px | 768 px | 1280 px |
|---|---|---|---|
| Nav | Hamburger + overlay (index ≤ 900 px) | Idem (≤ 900 px) | Liens en ligne, sticky `is-solid` |
| Hero | 1 colonne : surtitre, H1, sous-titre, réassurances (liste verticale), CTA pleine largeur, puis aperçu compact | 1 colonne, aperçu sous le CTA, largeur limitée et centré | 2 colonnes : texte / aperçu (comme `.b6-inner` de l'index) |
| Stepper | Texte « Étape x sur 3 » + barre segmentée ; libellés des étapes masqués visuellement (gardés pour lecteurs d'écran) | 4 libellés visibles sur une ligne | Idem 768 |
| Carte calculateur | Pleine largeur avec gouttière 16-20 px ; 1 champ par ligne ; cartes de choix empilées ; champs % alignés à droite de leur libellé si la place le permet, sinon sous le libellé ; bouton principal pleine largeur | Largeur de lecture limitée (env. 640-720 px, Design) centrée ; radios « plan de prévention » sur 3 colonnes ou 1 selon longueur des libellés | Idem 768 (pas de 2 colonnes de champs : un formulaire d'estimation se lit mieux en une colonne) |
| Résultats R1 | Chiffre dominant pleine largeur, badge dessous | Idem | Chiffre + badge côte à côte possible |
| R2 | Composantes empilées ; 2 indicateurs secondaires sur 2 colonnes (pas 3 avec orphelin, cf. l. 366) | 3 composantes sur une ligne | Idem |
| R3 formations | 1 carte par ligne | 2 colonnes | 2 colonnes |
| R5 actions | Empilées : devis, PDF, puis liens tertiaires | Devis + PDF côte à côte | Idem |
| Méthode | Tableau en défilement horizontal focusable | Tableau complet si la largeur suffit | Tableau complet |
| Footer | Selon index (1 colonne ≤ 480 px) | 2 colonnes | 4 colonnes |

---

## 7. Notes par agent

### Design
- Reprendre jetons, composants et gabarits de `index.html` : nav, footer, boutons (`btn-primary`, `btn-ghost`, `btn-yellow`), `.b6-preview`, `.table-scroll`, `cta-final`, `<details>` (`uc-item`).
- À dessiner : stepper (4 états : à venir, courant, fait, erreur) ; cartes case/radio natives (repos, survol, focus, coché, désactivé, erreur) ; champ % avec compteur « total/reste » (neutre, incomplet, complet, dépassé) ; état « Je ne sais pas » (champ désactivé + valeur par défaut lisible) ; résumé d'erreurs ; hiérarchie R1 (un seul chiffre dominant) ; badge de risque non dépendant de la couleur ; panneau PDF déplié.
- Focus visible obligatoire ; cibles ≥ 44 px ; aides « INRS » actuellement en `#FF914D` sur fond clair (l. 452, 480) : contraste à vérifier.

### CR (rédaction)
- À écrire : titres et sous-titres des 3 étapes, libellés explicites de chaque champ % (pas « % »), aides, libellés « Je ne sais pas », messages d'erreur orientés action, textes R1-R6, réassurances du hero, intro et titres du bloc méthode, questions FAQ (si retenue), mentions de consentement.
- Supprimer ou réécrire les promesses non tenues (D6) et le disclaimer générique (D23).
- Libellé « 65 ans et + (âge légal de départ) » à vérifier avec Données.

### Données & méthode
- Fournir et sourcer : valeurs par défaut sexe, âge, durée moyenne d'arrêt (aujourd'hui 50/50 et 20/40/35/5 injectées sans source, aucune pour la durée) ; dire si la répartition égale entre types de postes cochés est acceptable comme hypothèse affichée.
- Statuer sur : la comparaison sectorielle (R1-bis) ; le bloc ROI (S12, S13) ; S16 ; la ligne PDF « 6 000 et 25 000 € » ; le seuil d'avertissement arrêts/effectif ; l'option « part des 45 ans et plus ».
- Vérifier la cohérence des valeurs d'exemple de `.b6-preview` (index) avec le modèle.
- Fournir le contenu du tableau de §3.5 (paramètre, valeur, source, statut, date).

### SEO
- Dire si la FAQ (§3.6) se justifie et sur quelles requêtes ; le bloc méthode est un contenu indexable (texte présent dans le DOM même replié).
- Hiérarchie de titres cible : 1 `<h1>` (hero) ; `<h2>` : titre d'étape courante, « Comment est calculé ce résultat », FAQ, bloc de sortie ; `<h3>` : sous-blocs de résultats.
- Incohérence repérée en passant : `og:url` pointe vers `…/calculateur-tms-web.html` alors que le canonique est sans `.html` (l. 9 et 15).

### Dev
- Supprimer tous les `alert()` du parcours ; implémenter validation §3.3, focus §4, `pushState` par étape, persistance `sessionStorage`.
- **Corriger `restart()`** (l. 1522, `#fonction` inexistant) et vérifier le bouton « Recommencer » en navigateur.
- Remplacer les `div onclick` (l. 584-626) par des contrôles natifs ; remplacer la modale par un panneau en ligne.
- Nettoyer le code mort (§1.5). Liens formations : URL propres `formations#…`, même onglet.
- Garder `PARAMS`, la logique de calcul et `getFormations` inchangés tant que Données n'a pas livré.
- Le PDF doit refléter : la décomposition, les valeurs par défaut utilisées, une version courte de la méthode (contenu Données/CR).

---

## 8. Questions pour Céline

1. **Découpage** : d'accord pour garder 3 étapes en remplaçant l'étape « rapport offert » par un dédoublement de l'étape 1 (Entreprise / Équipes / Absentéisme), avec résultats affichés directement ?
2. **Formulaire PDF** : option A, B (recommandée) ou C ? Le téléphone doit-il rester obligatoire ?
3. Accepte-t-on d'ajouter `effectif` et `risque` en champs cachés dans les envois Formspree ?
4. Avez-vous des statistiques Formspree (nombre de rapports demandés par mois) pour mesurer l'effet du changement ?
5. Si le PDF ne peut pas se générer chez le visiteur, quelqu'un lui envoie-t-il le rapport à la main ? (conditionne le message d'erreur)
6. Le bouton caché d'export de leads (`#export`) ne sert plus (rien n'est enregistré) : d'accord pour le supprimer ?
7. Le bloc ROI doit-il rester si Données ne peut pas sourcer le « −30 % » ? (affiché comme hypothèse UP TO MOVE, ou retiré)
