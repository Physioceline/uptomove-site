# Plan de mots-clés — Page d'accueil uptomove.fr (refonte immersive)

Agent : SEO · Date : 22/09/2026 · Périmètre : mots-clés uniquement (aucun fichier modifié)
Page concernée : `index.html` → URL canonique `https://www.uptomove.fr/`

---

## 0. Avertissement méthodologique (transparence)

Aucun outil de recherche web ni d'API de volumétrie (Search Console, Ads Keyword Planner, Semrush) n'était accessible dans ce run. **Aucun volume de recherche n'est donc avancé dans ce document** — les expressions proposées sont construites à partir de :

- la terminologie réglementaire et métier réellement en vigueur (TMS, QVCT, DUERP, Passeport Prévention, Art. L.4121-1, Qualiopi) telle qu'elle figure déjà dans les contenus du site ;
- le vocabulaire des personas visées tel qu'il apparaît dans les témoignages et cas d'usage de la home actuelle (DRH, responsable QVCT, médecin du travail) ;
- la cohérence avec les titres/H1 des autres pages du site (vérifiés dans les fichiers).

**Seule donnée de performance vérifiable localement** (`seo-performance-log.csv`, une seule ligne d'historique) :
`2026-08-23 — 0 clic, 41 impressions, CTR 0 %, position moyenne 21,4`.
→ Interprétation (à étiqueter comme telle) : le site est visible mais en 2ᵉ/3ᵉ page, sans clic. Une seule mesure ne constitue pas une tendance. Toute conclusion sur « ce qui marche » aujourd'hui serait une extrapolation. **Je ne sais pas** quelles requêtes génèrent ces 41 impressions — l'information est dans Search Console (rapport Performances > Requêtes), pas dans le dépôt.

---

## 1. Plan de mots-clés — page d'accueil

```
Mot-clé principal : formation prévention TMS en entreprise

Mots-clés secondaires :
  - prévention des troubles musculo-squelettiques au travail
  - kinésithérapeute en entreprise
  - formation gestes et postures (Qualiopi)
  - QVCT et santé au travail

Longue traîne :
  - former ses salariés à la prévention des TMS en 1 heure
  - organisme de formation TMS certifié Qualiopi Passeport Prévention
  - obligation employeur prévention des risques professionnels Art. L.4121-1
  - formation TMS postes sédentaires / travail sur écran
  - formation manutention et port de charges pour opérateurs

Intention de recherche : décisionnelle dominante (recherche d'un prestataire),
avec une entrée comparative secondaire (« kiné vs formateur généraliste »,
« quelle formation TMS choisir »).
```

### Pourquoi ce mot-clé principal

« Formation prévention TMS en entreprise » est la seule formulation qui réunit les trois composantes de la requête d'un décideur : **le format acheté** (formation), **le problème** (TMS), **le contexte** (entreprise). Un DRH ne tape pas « économie gestuelle et posturale » ni « prévention primaire des affections périarticulaires » — ce sont des termes de spécialiste, à garder dans le corps de texte pour la profondeur sémantique, jamais en mot-clé de tête.

### Répartition attendue

| Mot-clé | Où il doit vivre |
|---|---|
| formation prévention TMS en entreprise | `<title>`, H1 (ou H1 + sous-titre immédiat), première phrase de contenu |
| prévention des troubles musculo-squelettiques | meta description, 1 H2, forme longue au moins 1 fois dans la page |
| kinésithérapeute en entreprise | sous-titre du hero ou H2 « notre différence » |
| gestes et postures / économie gestuelle | H2 ou H3 de la section approche |
| QVCT, DUERP, Art. L.4121-1, Passeport Prévention | section conformité (H3 + corps), jamais en H1 |
| secteurs (industrie, bureau, santé, BTP, commerce, hôtellerie) | H3 de la section sectorielle — ce sont les portes d'entrée longue traîne |

**Règle de rédaction à transmettre à l'agent CR** : le mot-clé sert la phrase, jamais l'inverse. Aucun empilement. Une seule occurrence naturelle du mot-clé principal dans le H1 suffit — la répétition mécanique ne fait rien gagner et abîme le ton.

---

## 2. Diagnostic du positionnement actuel

### H1 actuel

> « Protéger vos équipes, c'est aussi protéger votre entreprise. »

**Constat factuel** : ce H1 ne contient aucun terme métier recherché. Ni « TMS », ni « troubles musculo-squelettiques », ni « formation », ni « prévention », ni « kinésithérapeute ». Il pourrait servir d'accroche à une mutuelle, un cabinet d'assurance, un éditeur de logiciel RH ou une société de sécurité privée.

Le H1 est, après le `<title>`, le signal de pertinence le plus fort d'une page. Aujourd'hui il est dépensé entièrement en émotionnel. Le seul rattrapage vient du `<title>` et du bloc dépliant « Qu'est-ce que la QVCT ? » placé juste dessous — c'est peu pour la page la plus importante du site.

**Nuance honnête** : ce H1 est bon en conversion. Il parle au lecteur, il pose l'enjeu business en une ligne. L'objectif n'est pas de le supprimer, c'est de **lui ajouter le mot manquant** ou de le faire suivre immédiatement d'un sous-titre porteur.

### `<title>` actuel

> `Formation Prévention TMS en Entreprise | UP TO MOVE` — 51 caractères

**Évaluation : bon, à conserver quasiment tel quel.** Longueur maîtrisée, mot-clé principal en tête, marque en fin. Rien à corriger sur le fond.

Deux réserves :
1. Les majuscules à chaque mot (« Prévention TMS en Entreprise ») sont une convention anglophone. Sans impact sur le classement, effet visuel légèrement « plaqué » dans les résultats français.
2. **Risque de cannibalisation réel** avec `formations.html`, dont le `<title>` est `Formations — Prévention TMS en entreprise | UP TO MOVE`. Les deux pages visent presque exactement la même requête. Google devra choisir laquelle afficher, et il ne choisira pas forcément la bonne. → Recommandation : la home garde « formation prévention TMS en entreprise » (intention prestataire/marque), la page formations bascule vers une promesse de catalogue (« catalogue de formations », « postes sédentaires », « manutention », « gestes et postures »). À traiter dans la phase balisage, pas maintenant.

### Meta description actuelle

> « Formations courtes de prévention des Troubles Musculo-Squelettiques, animées par des kinésithérapeutes dans vos locaux. Certifié Qualiopi, partout en France. » — ~156 caractères

**Évaluation : correcte, perfectible.** Elle est descriptive et bien calibrée en longueur, mais entièrement déclarative : aucun verbe d'action adressé au lecteur, aucun élément qui déclenche le clic (durée, devis, gratuité). Sur une page à CTR 0 %, c'est précisément le levier à travailler — la description n'influence pas le classement, elle influence le clic.

### Autres constats relevés dans le `<head>` (à traiter en phase balisage)

- `og:image` et `twitter:image` pointent vers `https://uptomove-site.vercel.app/og-image-uptomove.png` au lieu du domaine canonique `https://www.uptomove.fr/`. Incohérence de domaine.
- Les URLs du JSON-LD `makesOffer` contiennent `.html` (`formations.html#sedentaires`), alors que la convention du site (cleanUrls + canonical) est sans extension.
- **Adresse à arbitrer par Céline** : le JSON-LD et le footer indiquent `41 rue Juge, 75015 Paris`, alors que le contexte projet mentionne `9 rue Léon Vaudoyer, 75007 Paris`. Je ne sais pas laquelle est la bonne. Une adresse incohérente entre le JSON-LD, le footer et la fiche Google Business Profile dégrade le référencement local. **À confirmer avant toute correction.**
- `<meta name="keywords">` : balise ignorée par Google depuis 2009 (annonce officielle Google Search Central). Sans effet, positif ou négatif. Peut rester ou disparaître, c'est indifférent.
- Aucun schéma `FAQPage` ni `Service` détaillé n'est présent sur la home alors que le contenu s'y prête (section « Vous vous reconnaissez ? »). Opportunité pour la phase balisage.

---

## 3. Recommandations H1 / H2 pour la home immersive

### Ce qui doit impérativement rester dans le H1

Trois éléments, non négociables :

1. **« TMS » ou « troubles musculo-squelettiques »** — c'est le mot que la cible tape. Sans lui, le H1 ne qualifie rien.
2. **« entreprise », « équipes » ou « salariés »** — le marqueur B2B qui écarte les requêtes patients.
3. **Un verbe d'action orienté employeur** (protéger, prévenir, former) — c'est ce qui fait tenir l'accroche sur une bannière photo.

« Formation » est souhaitable mais peut se reporter sur le sous-titre si la phrase devient trop lourde : le mot est déjà porté par le `<title>`.

### Trois pistes de H1 (à faire passer par l'agent CR — je ne rédige pas le texte final)

| Piste | Formulation indicative | Couverture mot-clé | Tenue sur bannière |
|---|---|---|---|
| A — continuité | « Prévenir les TMS en entreprise, c'est protéger vos équipes. » | principal partiel + B2B | courte, lisible |
| B — frontale | « Formation prévention des TMS en entreprise » | mot-clé principal complet | très courte, mais sèche sur une photo |
| C — hybride (recommandée) | H1 « Protégez vos équipes des troubles musculo-squelettiques. » + sous-titre non-titre juste dessous portant « formation », « kinésithérapeutes », « 1 heure », « vos locaux » | forme longue en H1, forme courte et contexte en sous-titre | rythme conservé, densité reportée |

**Recommandation : piste C.** Elle place la forme longue « troubles musculo-squelettiques » dans le H1 (Google associe très bien forme longue et sigle, mais l'inverse n'est pas garanti sur une page où le sigle n'apparaîtrait qu'une fois), garde la tonalité protectrice actuelle, et reporte la densité métier sur un sous-titre en `<p>` — qui n'a pas besoin d'être un titre pour être indexé.

**Point technique déterminant pour une bannière photo** : le H1 doit être du **texte HTML superposé en CSS** à l'image, jamais du texte incrusté dans le fichier image. Un H1 gravé dans un JPEG est invisible pour Google. Si la contrainte graphique impose de l'incruster, l'effet SEO serait équivalent à une page sans H1. C'est le risque n° 1 de ce type de refonte.

### Ce qui peut se reporter sur le sous-titre ou les H2

Sans perte : « formation », « kinésithérapeutes diplômés d'État », « 1 heure », « dans vos locaux », « Qualiopi », « partout en France », « QVCT », « gestes et postures », « Passeport Prévention », les six secteurs. Aucun de ces termes n'a besoin du H1 pour être pris en compte — ils ont besoin d'exister en texte réel dans la page.

### H2 à conserver comme ancrages sémantiques

Une page allégée a d'autant plus besoin que ses rares H2 soient utiles. Les quatre à préserver en priorité :

1. Un H2 « coût / constat » portant « Troubles Musculo-Squelettiques » + « première cause de maladie professionnelle » — c'est le H2 qui porte les statistiques sourcées.
2. Un H2 « kinésithérapeutes au service des entreprises » — le différenciateur, et le mot-clé secondaire n° 2.
3. Un H2 sectoriel (« tous les secteurs d'activité ») — la porte d'entrée longue traîne.
4. Un H2 conformité intégrant Passeport Prévention / obligation employeur — mot-clé réglementaire 2026, faible concurrence, forte intention.

---

## 4. Risque SEO du raccourcissement — analyse factuelle

**Le volume de texte actuel** : environ 1 600 mots sur la page (nav et footer inclus), 10 H2 et 31 H3.

### Ce qui est factuellement établi

- Google n'a **jamais publié de nombre minimum de mots** pour qu'une page soit indexée ou bien classée. John Mueller (Google Search Central) l'a répété publiquement à plusieurs reprises : le nombre de mots n'est pas un facteur de classement. Une home courte peut très bien se positionner.
- En revanche, une page ne peut se positionner que sur des requêtes pour lesquelles elle contient des éléments pertinents. **Moins de contenu = moins de surfaces de correspondance.** Ce n'est pas une pénalité, c'est une réduction mécanique du nombre de requêtes sur lesquelles la page est éligible.
- Le contenu replié dans `<details>/<summary>` **est indexé normalement** depuis le passage à l'index mobile-first (position officielle Google Search Central). Le pattern déjà utilisé sur le site reste donc une solution valide pour alléger visuellement sans perdre de texte indexable. C'est le meilleur compromis disponible ici.
- Le texte incrusté dans une image n'est pas indexé comme du texte.

### Ce qui relève de l'interprétation (étiqueté comme tel)

Le risque réel de cette refonte n'est pas « la page sera trop courte ». Il est plus précis :

1. **Perte des points d'entrée longue traîne** si les six blocs sectoriels et les six cas d'usage disparaissent purement et simplement. Ce sont aujourd'hui les seuls endroits de la home où figurent « aide à domicile », « mise en rayon », « port de plateaux », « travail sur écran », « absentéisme ». Ces formulations sont peu concurrentielles et proches de l'achat.
2. **Perte de maillage interne** : la section sectorielle porte six liens sortants. Les supprimer redistribue moins de signal vers les pages profondes.
3. **Perte des signaux E-E-A-T** si les statistiques sourcées (INRS, Assurance Maladie), les témoignages nominatifs et la mention Qualiopi + n° de certification quittent la page. Pour un organisme de formation, ce sont des marqueurs de fiabilité que Google exploite via les Quality Rater Guidelines.

### Le point qui désamorce le risque

**Déplacer n'est pas supprimer.** Si le contenu retiré de la home migre vers une page dédiée réellement liée depuis la home (et ajoutée au sitemap), le site ne perd rien — il gagne même en clarté d'intention par page. Le risque n'existe que si le contenu est **effacé**.

Recommandation à transmettre à l'agent UX/UI : pour chaque bloc retiré de la home, une décision explicite entre « déplacé vers X » et « supprimé ». Aucun bloc ne doit sortir par défaut.

---

## 5. Proposition de `<title>` et `<meta name="description">`

### `<title>` — recommandation principale

```
Formation prévention TMS en entreprise | UP TO MOVE
```
51 caractères. Volontairement identique au titre actuel, hors casse. Il est déjà bien construit : le changer sans donnée de performance serait perdre un repère de mesure sans raison. La casse passe en minuscules (convention française), le reste ne bouge pas.

### Variante à tester ultérieurement (si le CTR reste nul sur plusieurs semaines)

```
Prévention des TMS en entreprise par des kinésithérapeutes
```
57 caractères. Déplace la promesse sur le différenciateur au lieu du format. À n'envisager qu'après une période de mesure d'au moins 4 à 6 semaines sur le titre actuel — changer deux variables en même temps rend le résultat illisible.

### `<meta name="description">` — recommandation

```
Formez vos salariés à la prévention des troubles musculo-squelettiques en 1h, dans vos locaux, par des kinésithérapeutes. Qualiopi, devis gratuit sous 48h.
```
154 caractères. Différences avec l'actuelle : verbe d'action à l'impératif adressé au décideur, durée « 1h » (le différenciateur le plus concret), forme longue « troubles musculo-squelettiques » en complément du sigle présent dans le `<title>`, et un motif de clic en fin (« devis gratuit sous 48h »).

### og / twitter

`og:title`, `og:description`, `twitter:title`, `twitter:description` doivent reprendre **exactement** le nouveau title et la nouvelle description. Corriger au passage le domaine de `og:image` (`www.uptomove.fr` au lieu de `uptomove-site.vercel.app`). À exécuter en phase balisage.

---

## 6. Contenus à ne pas perdre — liste nominative pour arbitrage UX/UI

Par ordre décroissant de valeur SEO estimée.

| # | Bloc de la home actuelle | Valeur SEO | Verdict |
|---|---|---|---|
| 1 | **Section sectorielle** (Industrie & Manutention, Bureaux, Santé & Aide à la personne, BTP & Transport, Commerce & Distribution, Hôtellerie & Restauration) | 6 portes d'entrée longue traîne + 6 liens internes | **À conserver sur la home**, même condensée (vignettes courtes). Si elle doit partir, elle exige une page « Secteurs » dédiée liée depuis la home. Ne jamais supprimer. |
| 2 | **« Vous vous reconnaissez ? »** (6 cas d'usage : douleurs dos/épaules, absentéisme, obligation légale, travail sur écran, charges lourdes, Passeport Prévention) | Correspondance directe avec des requêtes-problème de DRH | **À conserver**, éventuellement replié en `<details>` (reste indexable). Sinon migration vers la FAQ. |
| 3 | **Passeport Prévention** (bloc dédié + ligne du tableau comparatif + cas d'usage) | Mot-clé réglementaire 2026, faible concurrence, forte intention, différenciateur commercial | **À conserver impérativement**, au minimum un paragraphe + lien. C'est le contenu le plus rentable de la page. |
| 4 | **Les trois statistiques sourcées** (87 % des MP sont des TMS, 2,2 Md€/an, 80 % évitables — INRS / Assurance Maladie) | E-E-A-T, contenu citable, ancrage sémantique du H2 « constat » | **À conserver** avec les mentions de sources visibles. Les sources affichées font partie du signal. |
| 5 | **Conformité réglementaire** (Qualiopi, Art. L.4121-1, DUERP) | Requêtes d'obligation employeur, très qualifiées | À conserver, même en une ligne. Le n° de certification Qualiopi doit rester quelque part sur le site. |
| 6 | **Tableau comparatif « UP TO MOVE vs formateurs généralistes »** | Intention comparative, contenu unique | Conservable replié. Migration acceptable vers `formations.html` ou la FAQ. |
| 7 | **Témoignages nominatifs** (DRH, Responsable QVCT, Médecin du travail) | E-E-A-T, preuve sociale | Migration vers `clients.html` acceptable — à condition que la home garde un lien visible vers cette page. |
| 8 | **« Les erreurs à éviter »** (4 blocs) | Valeur informationnelle, mais recoupe le blog | Le plus déplaçable. Candidat naturel à un article de blog ou à la FAQ. |
| 9 | **Méthode en 4 étapes** | Faible valeur SEO, forte valeur conversion | Arbitrage UX, pas SEO. |

**Résumé pour l'arbitrage** : les blocs 1 à 5 sont ceux dont la disparition pure et simple coûterait réellement en visibilité. Les blocs 6 à 9 peuvent migrer sans dommage, à condition d'être liés depuis la home.

---

## 7. Passage de relais

- **Agent CR** : ce plan est à intégrer dans la rédaction via `redaction-celine`. Le mot-clé sert la phrase, jamais l'inverse — aucune répétition mécanique.
- **Agent UX/UI** : section 6 à arbitrer bloc par bloc (déplacé vers X / supprimé), jamais de suppression par défaut.
- **Agent Dev** : le H1 et le sous-titre doivent être du texte HTML superposé en CSS sur la bannière, jamais incrustés dans l'image.
- **Phase balisage SEO (ultérieure)** : title, description, og/twitter, correction du domaine `og:image`, URLs du JSON-LD sans `.html`, arbitrage de l'adresse postale, ajout éventuel d'un schéma `FAQPage`, régénération du `sitemap.xml`.
