# Calc-SEO — Mots-clés + audit du `<head>` — chantier « refonte-charte »

Date : 2026-10-04 · Agent : calc-seo (casquette 1 + audit) · Page : `calculateur-tms-web.html` (canonique `https://www.uptomove.fr/calculateur-tms-web`)
Aucun fichier du site modifié. Le `<head>` cible (§2.3) sera appliqué par calc-seo **après** intégration par Dev.

---

## 1. Plan de mots-clés (skill `seo-celine`)

### 1.1 Méthode de vérification (et ses limites)

- Recherches web ciblées le 2026-10-04 sur les formulations candidates (« calculer coût des TMS entreprise simulateur », « calcul coût absentéisme entreprise coûts cachés arrêt de travail », « coût des TMS » + « coûts indirects », « simulateur coût de l'absentéisme »), puis lecture des titres de pages qui ressortent.
- Constats observés dans les résultats :
  - « coût des TMS » / « combien coûtent les TMS à l'employeur » : formulation employée par des acteurs assurance/prévention (ex. [Verspieren](https://www.verspieren.com/fr/node/461), [Groupama](https://www.groupama.fr/assurance-professionnels/conseils/prevention-tms/)) et des documents publics ([INRS ED 6062](https://inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-6062.pdf), [réseau TMS PACA / DREETS](https://paca.dreets.gouv.fr/sites/paca.dreets.gouv.fr/IMG/pdf/presentation_reseau_tms_paca.pdf)).
  - « coût de l'absentéisme », « coût caché de l'absentéisme », « coûts directs / indirects » : formulations RH très présentes ([Culture RH](https://culture-rh.com/comment-calculer-cout-absenteisme-entreprise/), [Pluxee](https://www.pluxee.fr/blog/lutter-efficacement-contre-absenteisme-au-travail/)).
  - « simulateur » est surtout associé à l'absentéisme (ex. [Skello](https://www.skello.io/blog/taux-absenteisme), [SWICA](https://www.swica.ch/en/companies/ohm/overview/prevention-management/absenzenkostenberechnung)) ; **aucun outil « calculateur coût des TMS » francophone dédié n'est remonté** dans ces recherches → niche peu concurrencée (observation qualitative, non mesurée).
- **Limite** : je n'ai pas accès à un outil de volumes (Google Keyword Planner, Search Console du site). Aucun volume de recherche n'est avancé. Recommandation : vérifier dans Search Console (rapport Performances, page `/calculateur-tms-web`) les requêtes réelles qui génèrent déjà des impressions avant de figer le H1.

### 1.2 Plan

```
Mot-clé principal : coût des TMS en entreprise  (porté par la page outil avec le modificateur « calculateur »)
Mots-clés secondaires :
  - calculateur coûts cachés TMS  (expression de marque déjà installée, à conserver)
  - calculer le coût des TMS
  - coût de l'absentéisme lié aux TMS / arrêts de travail TMS
  - coûts directs et indirects des TMS
Longue traîne :
  - estimer le coût d'un arrêt de travail pour TMS
  - simulateur gratuit coût TMS entreprise
  - combien coûtent les TMS à l'employeur
Intention de recherche : décisionnelle / transactionnelle « outil » (le décideur veut chiffrer SA situation),
  avec une composante informationnelle secondaire (comprendre ce que recouvrent les coûts cachés).
```

### 1.3 Risque de cannibalisation (interprétation)

`blog-calculateur-cout-cache-tms.html` a pour title « Calculateur de coûts cachés des TMS : pourquoi l'utiliser ? » et vise donc la même expression. Recommandation : la **page outil** porte l'intention « calculer / outil » ; l'**article** garde l'angle « pourquoi / comment l'utiliser, que faire du résultat ». Ne pas modifier l'article dans ce chantier (hors périmètre calculateur, cf. `calculateur/CLAUDE.md` §2.9) ; à signaler à Céline pour un éventuel chantier site.

### 1.4 Emplacements recommandés (à transmettre à CR via l'agent principal)

| Emplacement | Recommandation |
|---|---|
| `<title>` | `Coût des TMS en entreprise : calculateur gratuit \| UP TO MOVE` (61 car.) |
| H1 (CR décide de la formulation finale) | **« Calculateur des coûts cachés des TMS en entreprise »** (50 car.). Le H1 actuel (« … des Troubles Musculo-Squelettiques dans votre entreprise ») est long ; « TMS » est le terme tapé par la cible. Le développé peut passer en sur-titre ou dans l'intro. |
| Intro (1-2 phrases sous le H1) | Contient « coût des TMS » + « arrêts de travail » + bénéfice « en 3 minutes » + gratuit. Le développé « troubles musculo-squelettiques » y a sa place une fois. |
| Intertitres d'étapes | Étape 2 : garder « absentéisme » ou « arrêts de travail » dans l'intitulé (ex. le sous-titre actuel « Vos données d'absentéisme » est bon). Écran de résultats : un intertitre contenant « coûts directs » / « coûts cachés » (selon la méthode validée par Données). |
| Bloc sous le calculateur | Court texte « Comment est calculée l'estimation ? » (méthode + renvoi à `SOURCES.md` côté page) : sert à la fois la confiance (E-E-A-T) et le champ sémantique « coûts directs / indirects ». |
| CTA résultats | Ancre vers formations / contact, cohérente avec l'intention décisionnelle. |

Rappel : le mot-clé sert la phrase, jamais l'inverse ; ton et style relèvent de CR (`redaction-celine`).

### 1.5 FAQ courte visible : oui, justifiée

Justification : la page actuelle est presque exclusivement un formulaire (peu de texte indexable hors libellés) ; les requêtes informationnelles voisines (« combien coûtent les TMS », « coûts indirects ») peuvent être captées par 3-5 questions courtes, et elles répondent aux objections d'un décideur avant de saisir ses données.
Limite à connaître : depuis août 2023, Google n'affiche plus les résultats enrichis FAQ que pour des sites gouvernementaux et de santé faisant autorité ([Google Search Central, 08/2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). Le `FAQPage` JSON-LD reste valide mais son bénéfice SERP est faible ; l'intérêt principal est le contenu visible.

Questions candidates (texte des réponses : CR ; tout chiffre : Données + `SOURCES.md`) :
1. Comment le coût des TMS est-il calculé par cet outil ? (méthode, sources, part d'hypothèses UP TO MOVE)
2. Quelle différence entre coûts directs et coûts cachés (indirects) des TMS ?
3. Le résultat est-il fiable pour mon entreprise ? (estimation, ordre de grandeur, pas un audit)
4. Mes données sont-elles enregistrées ? (renvoi Formspree / vie privée — à confirmer par Dev/Céline)
5. Que faire une fois le coût estimé ? (plan de prévention, formation, contact)

---

## 2. Audit du `<head>` actuel

### 2.1 Constat (relevé dans le fichier le 2026-10-04)

| Élément | Valeur actuelle | Statut |
|---|---|---|
| `<title>` | « Calculateur coûts cachés des Troubles Musculo-Squelettiques dans votre entreprise — UP TO MOVE » | **94 caractères** (mesuré) : tronqué en SERP. Confirmé (l'agent principal estimait ~85). |
| `meta description` | « Estimez en 3 minutes le cout reel des TMS … salaries exposes et leviers de prevention … » (148 car.) | **Accents absents confirmés** : cout, reel, salaries, exposes, prevention. |
| `robots` | `index, follow` | OK |
| `canonical` | `https://www.uptomove.fr/calculateur-tms-web` | OK |
| `og:title` / `twitter:title` | « Calculateur des couts caches des TMS en entreprise » | **Accents absents** (coûts, cachés). |
| `og:description` / `twitter:description` | « … le cout reel … decouvrez … » | **Accents absents** (coût, réel, découvrez). |
| `og:url` | `https://www.uptomove.fr/calculateur-tms-web.html` | **Confirmé : `.html` à retirer** (incohérent avec la canonique). |
| `og:image` / `twitter:image` | absents | **Confirmé.** `og-image-uptomove.png` existe (1200 × 405 px, mesuré) et est déjà utilisé par d'autres pages avec `og:image:width/height`. |
| `twitter:card` | `summary` | À passer en `summary_large_image` une fois l'image ajoutée. |
| `og:site_name`, `og:locale` | absents | À ajouter (`UP TO MOVE`, `fr_FR`). |
| JSON-LD | aucun | **Confirmé.** |
| Favicon / apple-touch-icon | présents | OK |
| Sitemap | `sitemap.xml` l. 29 : `https://www.uptomove.fr/calculateur-tms-web` | OK, aucune modification nécessaire. |
| Redirection | `vercel.json` : `/calculateur-tms` → `/calculateur-tms-web` (301) | OK |

Remarque image : 1200 × 405 est un ratio ~3:1, alors que le format recommandé pour les aperçus larges est proche de 1,91:1 (1200 × 630) ; l'image risque d'être recadrée sur certains réseaux. Une image dédiée « calculateur » en 1200 × 630 serait préférable → à proposer à Design (optionnel).

### 2.2 Points à vérifier après intégration Dev

- H1 unique (actuellement : un seul `<h1>` avec `style` inline, OK) ; pas de saut de niveau (aujourd'hui un `<h3>` « Recevez votre analyse TMS » sans `<h2>` intermédiaire visible dans le relevé → à signaler à UX/UI/Dev).
- `lang="fr"` sur `<html>`.
- FAQ visible présente ou non → conditionne le bloc `FAQPage` ci-dessous.

### 2.3 `<head>` cible (balisage SEO uniquement, à appliquer après Dev)

Les lignes techniques existantes (charset, viewport, favicon, polices, styles, jsPDF) sont conservées telles que Dev les livre.

```html
<title>Coût des TMS en entreprise : calculateur gratuit | UP TO MOVE</title>
<meta name="description" content="Estimez en 3 minutes le coût réel des TMS dans votre entreprise : arrêts de travail, coûts directs et cachés, leviers de prévention. Calculateur gratuit.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.uptomove.fr/calculateur-tms-web">

<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="UP TO MOVE">
<meta property="og:url" content="https://www.uptomove.fr/calculateur-tms-web">
<meta property="og:title" content="Calculateur des coûts cachés des TMS en entreprise">
<meta property="og:description" content="Estimez en 3 minutes le coût réel des TMS dans votre entreprise et repérez les leviers de prévention. Outil gratuit.">
<meta property="og:image" content="https://www.uptomove.fr/og-image-uptomove.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="405">
<meta property="og:image:alt" content="UP TO MOVE, prévention des TMS en entreprise">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Calculateur des coûts cachés des TMS en entreprise">
<meta name="twitter:description" content="Estimez en 3 minutes le coût réel des TMS dans votre entreprise et repérez les leviers de prévention. Outil gratuit.">
<meta name="twitter:image" content="https://www.uptomove.fr/og-image-uptomove.png">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://www.uptomove.fr/calculateur-tms-web#app",
      "name": "Calculateur des coûts cachés des TMS en entreprise",
      "url": "https://www.uptomove.fr/calculateur-tms-web",
      "description": "Outil gratuit pour estimer en 3 minutes le coût des troubles musculo-squelettiques (TMS) dans une entreprise : arrêts de travail, coûts directs et cachés, leviers de prévention.",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Tous (navigateur web)",
      "browserRequirements": "Nécessite JavaScript",
      "inLanguage": "fr-FR",
      "isAccessibleForFree": true,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "provider": {
        "@type": "ProfessionalService",
        "name": "UP TO MOVE",
        "url": "https://www.uptomove.fr/",
        "logo": "https://www.uptomove.fr/logo-uptomove-web.png"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.uptomove.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Calculateur TMS", "item": "https://www.uptomove.fr/calculateur-tms-web" }
      ]
    }
  ]
}
</script>

<!-- UNIQUEMENT si une FAQ visible existe sur la page : questions/réponses copiées mot pour mot depuis le texte visible validé par CR -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "[question 1 telle qu'affichée]", "acceptedAnswer": { "@type": "Answer", "text": "[réponse 1 telle qu'affichée]" } }
  ]
}
</script>
```

Notes :
- `price: "0"` est conforme au schéma `Offer` ; Google n'affiche toutefois un résultat enrichi « application logicielle » que si la page fournit aussi `aggregateRating` ou `review` ([Google Search Central — Software App](https://developers.google.com/search/docs/appearance/structured-data/software-app)). Pas d'avis à ce jour → **ne pas inventer de note** ; le balisage reste utile pour la compréhension de la page.
- `BreadcrumbList` : pertinent même sans fil d'Ariane visible (2 niveaux) ; si UX/UI ajoute un fil d'Ariane visible, les libellés devront être identiques.
- Le `provider` reprend nom, URL et logo déclarés dans le JSON-LD `ProfessionalService` de `index.html`.
- Valider après application : [Rich Results Test](https://search.google.com/test/rich-results) et [Schema Markup Validator](https://validator.schema.org/).

---

## 3. Maillage interne entrant

### 3.1 Existant (grep `href="…calculateur-tms-web"` sur les `*.html` de la racine)

- **Navigation + pied de page** : présent sur les 30+ pages du site (ancre « Calculateur TMS »), y compris `plan-du-site.html`.
- **Liens contextuels (dans le corps)** : seulement 2 pages.
  - `index.html` : 3 CTA (« Calculer mon coût → » l. 931 et 1356, « Faire le calcul → » l. 1172).
  - `blog-calculateur-cout-cache-tms.html` : lien in-texte « la page du calculateur » (l. 190) + CTA « Faire le calcul → » (l. 254).
- Archives `calculateur-tms.html` / `calculateur-tms copie.html` : liens absolus vers la page (hors périmètre).
- Pages liant à l'article `blog-calculateur-cout-cache-tms.html` (relais indirect) : `blog-arrets-maladie-plafonnes-septembre-2026.html`, `blog-argent-sur-votre-dos.html`, `blog.html`, `plan-du-site.html`.

### 3.2 Liens manquants proposés (non appliqués — chantier « site », à soumettre à Céline)

| Page source | Emplacement proposé | Ancre suggérée (CR valide) | Pourquoi |
|---|---|---|---|
| `blog-calculateur-cout-cache-tms.html` | l. 190 : ancre actuelle « la page du calculateur » | « calculateur des coûts cachés des TMS » | Ancre descriptive au lieu d'une ancre générique. |
| `blog-arrets-maladie-plafonnes-septembre-2026.html` | Paragraphe d'intro (l. 176, « concerne directement les entreprises confrontées à des arrêts… ») ou bloc CTA final (l. 230, aujourd'hui vers `contact` seulement) | « estimer le coût de vos arrêts de travail liés aux TMS » | Intention très proche (arrêts de travail → coût). Le CTA final pourrait proposer un 2e bouton calculateur. |
| `blog-rentree-2026-tms-ce-quil-faut-anticiper.html` | Section 3 « Les arrêts maladie plafonnés… » ou CTA final (l. 223) | « chiffrer le coût des TMS dans votre entreprise » | Article d'anticipation pour décideurs. |
| `faq.html` | Réponse « Pourquoi la prévention des TMS est-elle un enjeu majeur… » (l. 255, mentionne absentéisme et productivité) | « estimer ce coût pour votre entreprise » | Point d'entrée naturel ; ajouter aussi éventuellement une question « Combien coûtent les TMS à mon entreprise ? » qui renvoie vers l'outil. |
| `blog-argent-sur-votre-dos.html` | Bloc « Articles liés » (pointe déjà vers l'article calculateur) | Ajouter un lien direct « Calculateur des coûts cachés des TMS » | Raccourcir le chemin vers l'outil. |
| `blog-pst-5-2026-2030.html`, `blog-pst5-lancement-officiel-2026.html`, `blog-5-gestes-manageriaux-tms-rps.html`, `blog-ateliers-tms-conformes-tracables-2026.html` | CTA final ou paragraphe sur les enjeux pour l'entreprise | « mesurer le coût des TMS dans votre entreprise » | Articles à cible décideurs ; aujourd'hui seulement nav/footer. |
| `formations.html` | Avant le catalogue ou près du CTA devis | « Combien vous coûtent les TMS ? Faites le calcul » | Logique « je chiffre → je forme ». |

Constat annexe (hors périmètre, à signaler) : les intertitres CTA de fin d'article relevés (« Envie d'agir sur la prevention des TMS… » dans les deux articles ci-dessus) ont le même défaut d'accent (« prevention »).

Pas d'article dédié à « absentéisme » trouvé dans le blog (aucun fichier `blog-*absent*`) : piste éditoriale possible (« coût de l'absentéisme lié aux TMS »), à passer par `planning-celine`.

---

## 4. Synthèse pour l'agent principal

- Mot-clé principal : **coût des TMS en entreprise** (+ modificateur « calculateur »).
- H1 recommandé à CR : **Calculateur des coûts cachés des TMS en entreprise**.
- Title : `Coût des TMS en entreprise : calculateur gratuit | UP TO MOVE` (61 car.).
- Meta description (153 car.) : « Estimez en 3 minutes le coût réel des TMS dans votre entreprise : arrêts de travail, coûts directs et cachés, leviers de prévention. Calculateur gratuit. »
- FAQ visible courte : oui (5 questions candidates §1.5) ; `FAQPage` seulement si elle est visible.
- Tous les défauts signalés sur le `<head>` sont confirmés ; sitemap OK.
- Maillage : seuls `index.html` et l'article calculateur ont des liens contextuels ; 7 ajouts proposés (§3.2), à traiter en chantier site.
