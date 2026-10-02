# ÉTAT — Refonte du site UP TO MOVE

**Statut : tout est terminé en local, jamais poussé. Rien n'est en ligne.**

| Chantier | Date | Page |
|---|---|---|
| A. Refonte immersive de la page d'accueil | 22 septembre 2026 | `index.html` + 31 pages (contrastes) |
| B. Photos d'intervention visibles sur la page clients | 2 octobre 2026 | `clients.html` + 2 pages (teal) |
| C. Comparatif, logo Passeport, client Mutuale | 2 octobre 2026 | `index.html`, `clients.html`, `contact.html` |

Les trois chantiers ont été menés par les 5 agents du site (UX/UI, SEO, CR, Design, Dev).

---

# CHANTIER A — Page d'accueil immersive

---

## 1. Ce qui a été fait

La page d'accueil a été refondue autour d'une grande photo d'atelier en entreprise, avec des textes nettement allégés.

| Indicateur | Avant | Après |
|---|---|---|
| Sections de contenu | 12 | 8 (+ newsletter) |
| Mots visibles | ~1 450 | ~880 |
| Hauteur de page desktop | ~9 500-10 500 px | **6 629 px** (mesuré) |
| Poids de l'image d'accueil | 808 Ko | **86 Ko** (WebP) |

**32 fichiers modifiés** : `index.html` (refonte complète), `partenaires.html` (correction d'une image de partage), et 30 autres pages qui reçoivent uniquement la correction de contraste des boutons orange.

---

## 2. La nouvelle architecture de la home

| # | Bloc | Ce qui a changé |
|---|---|---|
| 0 | Navigation | **Sortie du hero** et rendue vraiment sticky ; elle se solidifie en bleu marine au défilement. Logo ramené de 112 px à 64 px. |
| 1 | **Hero asymétrique** | Texte à gauche sur fond crème, photo en débord à droite. Nouveau H1, sous-titre raccourci, 2 boutons. |
| 2 | Bandeau de preuve | Logos clients + **ajout du logo Qualiopi** et de son n° F3740-1-I. |
| 3 | Le constat | Les 3 chiffres INRS conservés avec leurs sources. Le dépliable « TMS, QVCT : de quoi parle-t-on ? » descend ici depuis le hero. |
| 4 | Notre réponse | **Fusion de 3 anciennes sections** : 3 piliers + frise 4 étapes + 4 cas d'usage repliés. |
| 5 | Notre différence | **Fusion de 2 sections** : 3 cartes + tableau comparatif replié + encart Passeport Prévention. |
| 6 | **Calculateur TMS** | **Nouveau bloc** — seul ajout du chantier. Aperçu construit en HTML/CSS, lien vers le calculateur. |
| 7 | Ils nous font confiance | 2 témoignages + ligne de 6 tags secteurs vers `clients`. |
| 8 | CTA devis final | Conservé, devenu la dernière demande de la page. |
| — | Newsletter | Descendue en bande fine **après** le CTA devis, pour ne plus lui faire concurrence. |

**Sorti de la home** (rien n'est perdu, tout existait déjà ailleurs) : la grille des 6 cartes sectorielles (doublon exact de `clients.html`), le 3ᵉ témoignage (Pierre D.), la section « Les erreurs à éviter », la flèche « Découvrir ».

---

## 3. Les textes

Nouveau H1 : **« Protégez vos équipes des troubles musculo-squelettiques. »** — « vos équipes » est souligné en orange.
L'ancien H1 ne contenait aucun mot-clé métier.

Sous-titre : « Des kinésithérapeutes viennent former vos salariés dans vos locaux, en une heure, aux gestes qui préservent leur dos et leurs articulations. »

Tous les textes sont passés par la skill `redaction-celine`. Le détail bloc par bloc est dans `.claude/agent-drafts/redaction-homepage-immersive-2026-09-22.md`.

**Trois décisions de véracité prises pendant le chantier :**
- Le « −30 % » est désormais celui de **l'absentéisme lié aux TMS, sourcé INRS** (l'ancienne version « −30 % de douleurs déclarées » n'avait pas de source). Il n'apparaît plus qu'**une seule fois** sur la page, contre 3 avant.
- Passeport Prévention : la page dit que **UP TO MOVE remet un certificat**, que l'employeur ou le salarié reporte ensuite. Elle ne dit pas qu'UP TO MOVE déclare les sessions — ce n'est pas la pratique réelle.
- Adresse : **41 rue Juge, 75015 Paris** fait foi. Le `CLAUDE.md` global a été corrigé en conséquence.

---

## 4. Corrections d'accessibilité (au-delà de la home)

Trois échecs de contraste mesurés selon WCAG AA (seuil 4,5:1) ont été corrigés :

| Élément | Avant | Après |
|---|---|---|
| Texte des boutons orange | blanc, **2,23:1** | bleu marine, **6,30:1** — appliqué sur **tout le site** |
| Sources INRS sous les chiffres | `#bbb`, **1,92:1** | `#6B7280`, 4,83:1 |
| Label du bandeau logos | `#9CA3AF`, 2,54:1 | `#6B7280`, 4,83:1 |

Autres corrections : paragraphes passés en graisse 400 (au lieu de 300, illisible), espaces insécables ajoutées devant `? : ! ;` et dans les guillemets, contenu qui reste visible même si le JavaScript ne s'exécute pas.

**La couleur teal `#2EC4B6` a été régularisée** : elle n'était pas dans la charte mais était utilisée 97 fois sur 14 pages. Règle désormais en vigueur — `#2EC4B6` pour les aplats décoratifs uniquement (toujours avec du texte bleu marine dessus), `#12786F` dès qu'il s'agit de texte. Appliqué dans `index.html`.

---

## 5. SEO

- `<title>` : `Formation prévention TMS en entreprise | UP TO MOVE` (casse française)
- Meta description réécrite, avec un motif de clic (« devis gratuit sous 48h »)
- `og:image` / `twitter:image` corrigés : ils pointaient vers `uptomove-site.vercel.app` au lieu du domaine réel (aussi corrigé sur `partenaires.html`)
- URLs du JSON-LD nettoyées de leur `.html`
- **`sitemap.xml` : rien à régénérer**, aucune URL créée ni supprimée
- Pas de schéma `FAQPage` ajouté sur la home : les 4 cas d'usage sont des affirmations, pas des questions, et Google réserve les rich results FAQ aux sites publics et de santé depuis 2023. `faq.html` en porte déjà un, sur de vraies questions.

---

## 6. À FAIRE — reprise du travail

### a) Mettre en ligne (rien n'est poussé)

```bash
cd /Users/celineschneider/Documents/Claude/Site && git add -A && git commit -m "Refonte immersive de la page d'accueil : bannière, architecture en 8 blocs, textes allégés, contrastes AA" && git push origin main
```

Puis, dans Search Console : **Inspection de l'URL** → `https://www.uptomove.fr/` → **Demander une indexation**. Le titre et le contenu ont beaucoup changé, sans cela Google peut afficher l'ancien extrait pendant des semaines. Resoumettre le sitemap est inutile.

### b) Décisions qui t'attendent

1. **Chiffres de l'aperçu du calculateur** (bloc 6) : « 128 400 € », « 32 jours / an », « Manutention » ont été écrits par l'agent Dev, jamais validés. Le bloc porte la mention « Exemple de restitution », donc rien de trompeur, mais à relire.
2. **Mentions légales** : `mentions-legales.html` déclare le siège social au *9 rue Léon Vaudoyer, 75007*. À confirmer — un siège social peut légitimement différer de l'adresse affichée. Deux autres écarts dans cette page : forme juridique **SARL** (vs SELARL dans le `CLAUDE.md`) et SIRET **917 607 301 00020** (vs 00012).
3. **Barre CTA sticky mobile** : elle pointe vers le calculateur. L'agent UX recommandait de la basculer vers le devis.
4. **Fichier `main`** (0 octet) à la racine : créé par accident, peut être supprimé.

### c) Chantiers identifiés, non engagés

- **Cannibalisation `index` / `formations.html`** : les deux visent presque la même requête. Recommandation SEO : basculer le title de `formations.html` vers `Formations TMS : postes sédentaires et manutention`, réécrire sa description, et **lui ajouter les balises Open Graph qui sont totalement absentes** (un partage LinkedIn de cette page n'a aujourd'hui ni titre ni visuel maîtrisés).
- **Teal** : 18 usages « texte » restent à basculer en `#12786F` sur les autres pages (`apropos` 6, `blog` 4, `partenaires` 2, `faq` 2, `formations` 1, `clients` 2, `plan-du-site` 1). Plus `#6FE3D8`, autre teal hors charte, dans `clients.html` et `partenaires.html`.
- **`og-image-uptomove.png`** fait 1200 × 405 px. LinkedIn et X attendent du 1200 × 630 : l'image est probablement rognée au partage.
- **Menu mobile sans JavaScript** : le panneau hamburger ne s'ouvre pas si le JS échoue. Les liens restent accessibles par le footer. Corriger demanderait de choisir une mise en page de repli.
- **Article de blog « 4 erreurs qui laissent les TMS s'installer »** : la section sortie de la home ferait un bon article.
- **`AGENTS.md`** décrit toujours un projet Next.js qui n'existe pas. À supprimer ou réécrire.

---

---

# CHANTIER B — Photos d'intervention sur la page clients

**Demande de Céline** : « Dans la partie des clients je veux que les photos soient dans le bloc de présentation des équipes, afin qu'au premier coup d'œil on voie bien les interventions. »

## B1. Ce qui a changé

Sur les 4 études de cas (RATP, Groupe Chavigny, Daiichi Sankyo, Groupe VSF), l'ordre est désormais :

> logo → titre → ce qui a été fait → **les photos d'intervention** → ligne « Lire le détail de l'intervention »

Les photos étaient auparavant tout en bas du contenu replié : personne ne les voyait sans cliquer.

**Pourquoi les photos ne sont pas *dans* la zone cliquable** : chaque photo serait devenue un bouton qui replie la fiche, et un lecteur d'écran aurait lu les descriptions des 3 photos bout à bout comme nom de bouton. Logo, titre, sous-titre et photos sont donc devenus du contenu fixe, et la zone de dépliement s'est réduite à une ligne avec un vrai libellé. Effet de bord bénéfique : avant, tout l'en-tête était cliquable sans que rien ne l'indique.

**Sur mobile**, les photos défilent horizontalement (`scroll-snap`, sans JavaScript), avec le bord de la suivante qui dépasse pour inviter au geste. En empilement vertical, elles auraient ajouté ~2 500 px avant chaque fiche ; le scroller en économise environ 1 600, soit deux écrans de téléphone.

**Format** : ratio 4:3 uniforme, 230 × 173 px en desktop, 192 × 144 en tablette (le multi-colonnes y est désormais conservé, il tombait à 1 colonne dès 900 px), 231 × 173 en mobile.

**Chavigny** garde ses 2 photos au même gabarit que les cartes à 3 photos, centrées sur les deux tiers de la rangée.

## B2. Corrections faites au passage

- **La fiche Groupe Chavigny était construite différemment des trois autres** : pas de titre `h3`, et la liste brute des 6 départements à la place du sous-titre. Elle est normalisée — titre « GROUPE CHAVIGNY - AGENCES DU GROUPE - 6 DÉPARTEMENTS », sous-titre « 2 semaines d'ateliers Économie Gestuelle et Posturale auprès de plus de 350 personnes. » La liste des départements est descendue dans le détail replié.
- **Le « +350 personnes formées » était enterré dans le contenu replié.** Il est maintenant lisible dans le sous-titre. Le gros chiffre reste dans le détail : Chavigny est la seule des 4 fiches à avoir une statistique, le remonter en gros aurait déséquilibré les quatre.
- **Photos optimisées : 1 707 Ko → 763 Ko** (WebP + repli JPEG, chargement différé). Les originaux pleine résolution restent dans `Sources/`.
- **`daiichi-3-top.jpg`** remplace `daiichi-3` : ce recadrage dormait dans le dépôt sans être référencé nulle part, et c'est celui qui cadre correctement l'écran et les kakémonos. `daiichi-3.jpg` / `.webp` sont **conservés** (décision de Céline) même s'ils ne servent plus.
- **Trois contrastes insuffisants corrigés** : le « +350 » en teal clair était à **2,17:1**, `.case-note` à 3,35:1, `.testi-icon` idem — tous passés en `#12786F`.
- **`prefers-reduced-motion` ajouté** : `clients.html` était la seule page du site sans ce réglage (il désactive les animations pour les personnes sensibles au mouvement).
- Ancres `#case-*` : l'atterrissage tombait sous la nav collante en mobile, corrigé.

## B3. Doctrine couleur du teal — état arrêté

Trois nuances de teal coexistaient sur le site, **aucune n'étant dans la charte**. La règle désormais en vigueur dépend du fond, pas du rôle :

| Valeur | Usage | Mesure |
|---|---|---|
| `#2EC4B6` teal clair | texte ou aplat **sur fond sombre** | 6,48:1 sur navy — mais seulement 2,17:1 sur fond clair |
| `#12786F` teal foncé | texte ou icône **sur fond clair** | 4,5 à 4,9:1 — mais 1,95:1 sur fond sombre |

`#6FE3D8` (3ᵉ nuance) a été **supprimé de tous ses usages en couleur de texte** : `.tag-teal` sur `clients`, `apropos` et `formations`, plus « prévention TMS » dans le bandeau clients. Il ne subsiste que comme étape de trois dégradés décoratifs (`apropos.html:229`, `partenaires.html:121`, `faq.html:133`) — les aplatir changerait l'aspect de trois pages, ce n'est pas fait.

⚠️ **Piège à connaître** : la règle n'est pas « clair = décor, foncé = texte ». Les deux valeurs sont des couleurs de texte valides, chacune sur le fond opposé. Appliquer l'une sur le mauvais fond donne un texte illisible.

## B4. Restant à faire sur cette page

- **`formations.html` ligne 308** : un tag inline en `#189d91` sur fond crème donne **2,84:1**, en échec (seuil 4,5:1 pour du texte de 11 px). Le tag équivalent de `clients.html:612` utilise `#12786F` et passe à 4,52:1. Correction d'une ligne, pas encore faite — décision visuelle non soumise à Céline.
- **`apropos.html` ligne 52** : la règle `.tag-teal` y est déclarée mais la classe n'est utilisée nulle part dans la page. CSS mort, à retirer un jour.
- **`daiichi-2`** porte un filigrane « ÉVÉNEMENTS » dans le fichier source. Le cadrage 4:3 le fait sortir du champ, mais le fichier reste non propre.
- **Vidéo du hero de `clients.html`** (`autoplay loop`) : non neutralisée sous `prefers-reduced-motion`, cela demanderait du JavaScript.

---

---

# CHANTIER C — Comparatif, Passeport Prévention et client Mutuale

**Quatre demandes de Céline**, traitées ensemble le 2 octobre 2026.

## C1. Le tableau comparatif était invisible (`index.html`)

Demande : « il faudrait mettre "voir le tableau comparatif" plus en avant, ce n'est pas assez intuitif ».

**La cause réelle** n'était pas celle qu'on croyait : le déclencheur était une petite pilule à **bordure gris très clair sur fond crème**, donc au contour presque invisible, et elle n'était même pas centrée.

Elle devient un **bloc blanc pleine largeur** : tuile d'icône, libellé, ligne d'accroche, chevron. Aucun orange — c'est une invitation à lire, pas un appel à l'action commercial.

Le libellé change : **« Comparer avec un formateur généraliste »** au lieu de « Voir le tableau comparatif ». L'ancien ne disait pas comparatif *avec qui*, alors que c'est tout l'enjeu pour un décideur qui compare des devis. Accroche : « 6 critères passés en revue, du profil des formateurs au Passeport Prévention. »

Le tableau reste **replié par défaut** (indexé par Google, page courte). Deux bugs corrigés au passage : le triangle natif du dépliant restait visible sur Firefox et Safari, et la zone de défilement du tableau n'avait pas d'indicateur de focus clavier.

## C2. Logo officiel « Mon Passeport Prévention » (`index.html`)

Ajouté dans l'encart navy, fichier `logo-passeport-prevention.png`.

⚠️ **Piège évité** : le mot « PRÉVENTION » de ce logo est en orange sur fond transparent. Posé nu sur le bleu marine, ce mot serait devenu orange sur bleu — **l'apparence du logo officiel aurait été altérée**, ce qui est interdit, au même titre que pour Qualiopi. Il est donc posé sur une **plaque blanche** qui lui rend son fond et isole son orange de celui de la charte. Ni filigrane, ni détourage, ni recoloration.

## C3. Logo Mutuale dans la bande défilante — 3 pages

`logo-mutuale.png` ajouté sur **`index.html`, `clients.html` et `contact.html`**.

⚠️ **Point à connaître pour toute future modification de cette bande** : c'est un carrousel à boucle sans couture, chaque logo y figure **en deux exemplaires** (un jeu + son clone, animation `translateX(-50%)`). Ajouter un logo dans un seul jeu fait sauter la boucle. Vérifié : 10 images au total, soit 5 logos × 2.

Le fichier d'origine avait **37 % de marges transparentes** : le logo serait apparu à 35 px de haut contre 55 px pour ses voisins. Il a été recadré au plus près (250 × 240, encre pleine cadre).

**Limite acceptée** : le logo Mutuale est quasi carré (ratio 1,04) alors que RATP, Chavigny et Daiichi sont très horizontaux (2,5 à 3,5). Il occupe donc ~57 px de large contre ~140 px pour RATP. C'est la forme du logo, pas un défaut d'intégration.

## C4. 5ᵉ étude de cas — Groupe Mutuale MFOS (`clients.html`)

Placée **en dernier**, après VSF. L'ordre existant se lit comme une décroissance d'ampleur ; Mutuale (3 centres, une photo) s'y inscrit naturellement. Aucun sommaire ni lien d'ancre n'imposait d'ordre.

- Titre : `GROUPE MUTUALE MFOS - 3 CENTRES DENTAIRES - LOIR-ET-CHER (41)`
- Sous-titre : « Programme de prévention des TMS auprès des professionnels de la santé bucco-dentaire. »
- **98,9 % / taux de satisfaction** en bloc statistique dans le détail, juste au-dessus des onglets
- Une seule photo (`mutuale-1`), traitée en `.case-media--1` : cadre unique 4:3 à la largeur de la rangée Chavigny (476 × 357). En mobile, la rangée défilante est neutralisée, la photo prend toute la largeur utile.

**Décisions prises avec Céline sur le texte :**
- Accords passés au **masculin générique** (son texte était au féminin, ce n'était pas volontaire)
- Le support s'appelle **« guide de la mobilité générale »** — nom du catalogue, qui fait foi. `index.html` disait « Guide de mobilité », corrigé.
- Le **98,9 % placé dans le détail et non dans le sous-titre** : les quatre autres sous-titres décrivent ce qui a été fait, jamais une performance. Dans le détail, le chiffre est lu à quelques lignes de la phrase expliquant la mesure par QCM, ce qui le rend vérifiable plutôt que déclaratif.

⚠️ **Point de vigilance sur le 98,9 %** : c'est le **premier chiffre de performance publié du site** (aucune autre page n'affiche de taux de satisfaction). La donnée vient de Céline et n'est pas vérifiable depuis le dépôt. Pour qu'elle tienne devant un acheteur public ou un audit Qualiopi, son périmètre devrait être documenté quelque part (période, nombre de sessions, nombre de répondants). Le libellé reste volontairement « taux de satisfaction » sans préciser de qui, faute de source.

## C5. Restant à traiter sur ces pages

- **Le QCM n'est mentionné nulle part ailleurs sur le site** (ni `formations.html`, ni `faq.html`). C'est pourtant un marqueur de sérieux et de conformité Qualiopi : un visiteur qui lit la fiche Mutuale puis va sur Formations ne retrouvera pas ce dispositif.
- **Graphie du département** : la fiche Mutuale écrit « Loir-et-Cher (41) » (graphie officielle), celle de Chavigny « Loir et Cher (41) » sans traits d'union, sur la même page.
- **La carte secteur « Santé & Aide à la personne »** ne cite pas les cabinets dentaires alors qu'il y a maintenant une référence client dans ce domaine.
- **Doublon d'`alt` dans la bande défilante** de `clients.html` et `contact.html` : le second jeu de logos reprend les mêmes textes alternatifs, donc un lecteur d'écran annonce chaque client deux fois. Défaut préexistant (`index.html` est propre sur ce point, ses clones portent `aria-hidden`).
- **Les 5 `.case-logo`** n'ont aucun attribut de dimensions — à traiter sur les 5 d'un coup si on veut supprimer le décalage au chargement.
- **`.tag-orange`** : contraste ≈ 2,2:1, en échec. Concerne tout le site.

---

## 7. Où retrouver le détail

### Chantier A — page d'accueil
| Document | Contenu |
|---|---|
| `.claude/agent-drafts/ux-ui-homepage-immersive-2026-09-22.md` | Architecture, audit des doublons, comportement responsive |
| `.claude/agent-drafts/seo-homepage-immersive-2026-09-22.md` | Plan de mots-clés, analyse du risque de raccourcissement |
| `.claude/agent-drafts/redaction-homepage-immersive-2026-09-22.md` | Tous les textes, bloc par bloc |
| `.claude/agent-drafts/design-homepage-immersive-2026-09-22.md` | Spec visuelle complète (838 lignes), mesures de contraste |

### Chantier B — page clients
| Document | Contenu |
|---|---|
| `.claude/agent-drafts/ux-ui-clients-photos-2026-10-02.md` | Placement des photos, arbitrage `<summary>`, scroller mobile |
| `.claude/agent-drafts/redaction-clients-photos-2026-10-02.md` | Libellé de dépliement, textes Chavigny |
| `.claude/agent-drafts/design-clients-photos-2026-10-02.md` | Spec des vignettes, cadrages, mesures de contraste teal |

### Chantier C — comparatif, Passeport, Mutuale
| Document | Contenu |
|---|---|
| `.claude/agent-drafts/design-comparatif-passeport-mutuale-2026-10-02.md` | Bloc comparatif, plaque blanche du logo Passeport, cas à une photo |
| `.claude/agent-drafts/redaction-clients-mutuale-2026-10-02.md` | Fiche Mutuale complète, libellés du comparatif, textes alternatifs |

**Assets créés** :
- `hero-atelier-tms-1376.webp` / `.jpg` et `hero-atelier-tms-900.webp` / `.jpg`, depuis `Sources/bannière principale.jpg`
- 12 photos d'études de cas en `.webp` + `.jpg` optimisés (`ratp-*`, `chavigny-*`, `daiichi-*`, `daiichi-3-top`, `vsf-*`)
- `mutuale-1.webp` / `.jpg` (2,5 Mo → 49 Ko), `logo-mutuale.png` (recadré), `logo-passeport-prevention.png`

**Fichiers sources d'origine conservés à la racine, désormais inutilisés** : `MUTUALE.png`, `passeport prévention.png`, `Mutuale photo.JPG`. Ils ne sont référencés nulle part — à supprimer un jour si tu veux alléger le dépôt, mais ils partiront dans le commit tant qu'ils sont là.

**Pour revenir en arrière sur une page** : `git checkout index.html` ou `git checkout clients.html` (tant que rien n'est commité).

**Prévisualisation locale** : une config `.claude/launch.json` a été ajoutée pour servir le site en local pendant les recettes. Elle pointe vers un script temporaire et **n'a pas vocation à être commitée** — à retirer avant le push si tu ne veux pas la garder.
