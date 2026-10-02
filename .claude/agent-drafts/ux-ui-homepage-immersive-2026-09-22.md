# UX/UI — Refonte de l'architecture de la page d'accueil uptomove.fr

**Agent** : UX/UI · **Date** : 22 septembre 2026 · **Périmètre** : structure, hiérarchie de l'information, parcours, responsive.
**Hors périmètre** (ne pas lire ce document comme une validation sur ces points) : texte final (agent CR), couleurs/typo/composants visuels (agent Design), balises meta/JSON-LD/sitemap (agent SEO), écriture HTML (agent Dev).

**Statut** : proposition soumise à validation de Céline **avant** tout travail de design et de développement.

---

## 0. Méthode et limites

- Analyse fondée sur : le texte visible extrait de `index.html`, le markup du hero et de la feuille de style inline (`index-clean.html`, lignes 88-420 et 560-720), et la lecture ciblée de `formations.html`, `clients.html`, `faq.html`, `contact.html`, `apropos.html`.
- L'image de bannière (`Sources/bannière principale.jpg`) ne m'est pas accessible visuellement : je travaille à partir de la description factuelle transmise par l'agent principal (1376 × 768 px, 808 Ko, scène d'atelier en open space, sujet principal centré, zones haute et basse peu chargées).
- **Les volumes chiffrés de la section 6 sont des estimations**, calculées à partir du nombre de blocs et de la hauteur moyenne des sections existantes — pas des mesures prises dans un navigateur. À confirmer après intégration par l'agent Dev.

---

## 1. Audit de l'architecture actuelle

La home compte aujourd'hui **12 sections de contenu** (hors nav et footer) :

| # | Section | Volume | Diagnostic |
|---|---|---|---|
| 1 | Hero | eyebrow + H1 3 lignes + bloc dépliable QVCT ouvert + sous-titre ~40 mots + 2 CTA + flèche | Surchargé |
| 2 | Bandeau logos clients | 4 logos en carrousel | À conserver, à enrichir |
| 3 | Le constat — 3 chiffres | 3 cartes sourcées | Bon bloc, le garder |
| 4 | La solution — timeline 3 étapes | 3 blocs + 14 puces + stat −30 % | Trop long |
| 5 | Différenciation | 4 cartes + tableau 8 lignes + encart Passeport | Redondant avec 4 et 10 |
| 6 | Méthode 4 étapes | 4 blocs | Fusionnable avec 4 |
| 7 | Témoignages | 3 citations | Doublon avec `clients.html` |
| 8 | Vous vous reconnaissez ? | 6 cas | À compresser |
| 9 | Secteurs | 6 cartes | Doublon exact avec `clients.html` |
| 10 | Erreurs à éviter | 4 cartes | Redondant, contenu éditorial |
| 11 | Newsletter | 1 formulaire | Mal placé |
| 12 | CTA final devis | 1 bouton | À conserver |

### 1.1 Ce qui fait doublon **avec d'autres pages du site**

C'est le problème le plus coûteux, et il est invisible quand on regarde la home seule.

- **Secteurs (bloc 9)** : `clients.html` ligne 482 porte le H2 **« Nous intervenons dans tous les secteurs d'activité »** avec **exactement les six mêmes secteurs** (Industrie & Manutention, Bureaux & Services, Santé & Aide à la personne, BTP & Transport, Commerce & Distribution, Hôtellerie & Restauration). La home duplique une page entière de `clients.html` et lui retire sa raison d'être. À supprimer de la home.
- **Témoignages (bloc 7)** : `clients.html` ligne 500 porte le H2 « Ce qu'ils disent de nous » avec 3 témoignages — mais **ce ne sont pas les mêmes personnes** que sur la home (Alexandre M. / Sophie L. / Pierre D. côté home, Julien M. / Camille R. / Dr Sophie L. côté clients). Six témoignages non sourcés répartis sur deux pages : pour un DRH qui compare, c'est un signal de faiblesse, pas de preuve.
- **Définition « Qu'est-ce que la QVCT ? » (dans le hero)** : `faq.html` ligne 424 porte déjà la question « Qu'est-ce que la QVCT (Qualité de Vie et des Conditions de Travail) ? ». Occuper l'espace le plus précieux du site avec une définition déjà traitée ailleurs est un mauvais arbitrage.

### 1.2 Ce qui fait doublon **à l'intérieur de la home**

Trois sections disent la même chose sous trois formes.

- **Blocs 4 + 5 + 10** répètent le même argumentaire : kiné ≠ formateur généraliste, format 1 h, Qualiopi, Passeport Prévention. Le bloc 10 « Erreurs à éviter » est particulièrement redondant : sa carte 3 (« Confier la formation à un non-spécialiste ») redit la carte 1 du bloc 5, et sa carte 4 (« Ne pas documenter sa démarche ») redit l'encart Passeport du bloc 5.
- **Le chiffre −30 %** apparaît 3 fois (stat du bloc 4, carte 3 du bloc 5, ligne du tableau comparatif). Répété, il perd sa force au lieu de la gagner.
- **Qualiopi / Passeport Prévention** est mentionné 5 fois (bloc 5 carte 4, ligne de tableau, encart dédié, bloc 6 étape 4, bloc 10 carte 4).
- **Blocs 8 + 9 collés** : deux grilles de 6 éléments consécutives qui répondent à la même question du visiteur (« est-ce que ça me concerne ? »), l'une par symptôme, l'autre par métier. Sur mobile, cela produit **12 cartes empilées d'affilée**, soit environ 8 écrans de défilement sans un seul point d'action.

### 1.3 Ce qui dilue le parcours de conversion

- **Deux CTA dans le hero, puis plus rien pendant six sections.** Le prochain point d'action réel est le formulaire newsletter, à environ 8 écrans desktop du haut de page. Sur une page de cette longueur, c'est une perte sèche : le visiteur convaincu au bloc 5 n'a aucun endroit où cliquer.
- **Newsletter collée au CTA devis.** Deux demandes concurrentes à la suite. La newsletter est un engagement faible ; placée juste avant l'appel au devis, elle offre une porte de sortie à moindre effort et affaiblit l'objectif business de la page.
- **Le calculateur TMS — le vrai lead magnet** (formulaire Formspree dédié `mljrlnqe`, téléchargement de catalogue associé) n'existe sur la home que sous forme d'un bouton dans le hero et d'un lien jaune en nav. Il mérite un bloc à part entière au milieu du parcours.
- **Hero surchargé.** Eyebrow + H1 sur 3 lignes + bloc dépliable ouvert par défaut + sous-titre de 3 propositions enchaînées (~40 mots) + 2 CTA + flèche animée : six objets avant la première décision. Sur mobile (`h1` à 34 px, CTA empilés en colonne), le second CTA passe sous la ligne de flottaison.
- **Logo à 112 px de haut** dans la nav desktop (`.hero-logo`) : disproportionné pour une nav qui va devenir sticky et en overlay sur une image.

---

## 2. Architecture cible

Principe directeur : **un parcours en quatre temps** — *capter* (bannière) → *comprendre le problème* (constat) → *comprendre la réponse et la différence* (deux blocs) → *convertir* (trois points de sortie échelonnés).

On passe de **12 sections à 8**, avec un point d'action tous les 2 à 3 écrans.

---

### BLOC 0 — Navigation (sticky, en overlay sur la bannière)

- **Rôle** : accès permanent aux 6 destinations, et ancrage de marque sur l'image.
- **Contenu** : logo + Formations · Clients · À propos (`<details>` déroulant : Qui sommes-nous, FAQ, Nos alliés) · Blog · **Calculateur TMS** (pastille jaune) · **Contact** (bouton orange). Arborescence **inchangée** — elle fonctionne et elle est cohérente sur tout le site.
- **Changement** : la nav n'est plus posée sur un fond crème, elle est **en overlay transparent par-dessus l'image**, en `position: sticky; top: 0` dès le desktop (aujourd'hui le sticky n'est activé qu'en dessous de 900 px, ligne 341). Elle se **solidifie au scroll** (fond `#1E2952` opaque + ombre) au-delà de ~80 px — le mécanisme existe déjà, classe `.hero-nav.scrolled` (ligne 319) pilotée en JS (ligne 502) ; il suffit de lui ajouter un fond.
- **Un seul état de couleur de texte** : liens blancs en overlay comme en état solidifié (le fond passe de transparent à bleu marine, jamais à clair). C'est ce qui évite les bugs de lisibilité au moment de la transition.
- **Hauteur** : ~72 px desktop / ~64 px mobile. **Logo ramené à 56-64 px desktop et 44-48 px mobile** (contre 112/60 aujourd'hui).
- **Point d'attention Design** : le logo est un wordmark en pilule dégradé orange→jaune sur fond transparent. Posé sur une photo claire (parquet, baies vitrées), sa lisibilité n'est pas garantie. Le voile assombrissant décrit au bloc 1 est la condition pour que ça tienne.

---

### BLOC 1 — Bannière immersive (hero)

- **Rôle** : donner en une seconde le sujet (un atelier de prévention, en entreprise, animé par une professionnelle), poser la promesse, et proposer une première action.
- **Statut** : **refonte complète**.

**Structure verticale, de haut en bas :**

1. Image de bannière en fond, `object-fit: cover`, pleine largeur.
2. Voile dégradé par-dessus (scrim) — **non négociable**, c'est lui qui rend le texte lisible. Direction : sombre en haut (pour la nav), clair au milieu (l'image respire), re-sombre en bas (pour le texte et les CTA). Valeur de départ à proposer au Design : `linear-gradient(180deg, rgba(30,41,82,0.72) 0%, rgba(30,41,82,0.18) 42%, rgba(30,41,82,0.68) 100%)`.
3. Bloc texte, aligné à gauche, calé dans le tiers bas de l'image, largeur max 640 px :
   - **Eyebrow** — pastille conservée telle quelle (fond teal `#2EC4B6`, texte blanc) : elle ressort naturellement sur photo. 6-9 mots.
   - **H1** — **court, 5-9 mots, 2 lignes maximum**. Aujourd'hui : 3 lignes. Sur une photo, 3 lignes de 76 px écrasent l'image.
   - **Sous-titre** — **1 phrase, 18-25 mots maximum** (contre ~40 aujourd'hui). Doit porter les trois différenciateurs : kinésithérapeutes / 1 heure / dans vos locaux.
   - **2 CTA, pas 3.** Primaire orange `#FF914D` → **calculateur TMS**. Secondaire en bouton fantôme (bordure blanche, fond transparent) → **formations**. Justification du primaire : pour un DRH en découverte, le calculateur est une offre à faible friction et à valeur immédiate, avec capture d'email à la clé ; le devis est un engagement de fin de parcours, il a son bloc dédié en bas de page et son bouton permanent en nav.
4. *(rien d'autre)*

**Ce que devient le bloc dépliable « Qu'est-ce que la QVCT ? » :** il **sort du hero** et descend dans le bloc 3 (Le constat), en `<details>` **fermé par défaut**. Quatre raisons : il est aujourd'hui ouvert par défaut et repousse les CTA ; un encadré gris à liseré orange chargé de texte détruit l'immersion d'une photo plein cadre ; c'est du contenu pédagogique, pas du contenu de conversion ; et la même définition existe déjà sur `faq.html`. Replié, il reste **indexable par Google** — c'est la convention déjà actée au §6 de `MEMO-SITE.md`.

**Ce que devient la flèche « Découvrir » :** **supprimée**, desktop et mobile. Elle est remplacée par un indice de continuité plus efficace et sans bruit visuel : en calant le hero à **88vh**, les 12vh restants laissent volontairement apparaître le haut du bandeau logos blanc en bas de l'écran. Le visiteur voit qu'il y a autre chose en dessous sans qu'on ait besoin de le lui dire.

**Hauteurs par palier :**

| Palier | Hauteur hero | Traitement |
|---|---|---|
| Desktop ≥ 1200 px | `min-height: 88vh`, plafonné à `max-height: 780px` | Full-bleed, texte en overlay à gauche |
| Laptop 900-1199 px | `min-height: 80vh` | Idem, texte max 560 px |
| Tablette 600-899 px | `min-height: 72vh` | Texte en overlay, **centré**, CTA côte à côte |
| Mobile < 600 px | voir §3 | Image + texte empilés |
| Mobile paysage (hauteur < 500 px) | `min-height: auto` + padding vertical 32 px | Cas à traiter explicitement, sinon le H1 et les CTA ne tiennent pas |

**Contrainte technique de l'image — à arbitrer par Céline :**
Le fichier source ne fait que **1376 px de large**. En full-bleed sur un écran 1920 px, il est agrandi ×1,4 ; sur un 2560 px, ×1,9 — avec un flou visible sur les visages.

- **Recommandation principale** : garder le full-bleed (c'est la demande) **et fournir une source d'au moins 2400 px de large** (nouvelle génération, nouvelle prise de vue, ou upscale IA). Le voile assombrissant masque une partie de la perte de netteté, pas toute.
- **Repli si aucune source plus large n'est disponible** : passer en **hero asymétrique 55/45** — texte à gauche sur fond crème `#F7F6F2`, image en débord à droite. L'image n'est alors jamais affichée à plus de ~900 px de large, donc elle reste nette. L'immersion est moindre, la qualité est sauve.

---

### BLOC 2 — Bandeau de preuve (logos clients + Qualiopi)

- **Rôle** : valider la promesse du hero dans la seconde qui suit, avant tout argumentaire.
- **Statut** : **conservé et enrichi**.
- **Position** : immédiatement sous le hero, et **volontairement à cheval sur la ligne de flottaison** (le hero à 88vh laisse dépasser son bord supérieur). Fond blanc : la rupture de contraste avec la photo crée une respiration.
- **Contenu** : label « Ils nous font confiance » + carrousel des 4 logos clients (mécanisme existant `.bc-track`, conservé) + séparateur + **logo Qualiopi avec le numéro de certification**.
- **Changement** : l'ajout de Qualiopi en haut de page. Pour un DRH ou un responsable formation, c'est le signal de confiance numéro un — et il n'apparaît aujourd'hui qu'en footer.
- **Mobile** : le label actuel (`white-space: nowrap`, `padding: 0 48px`) mange la largeur. Passer à label centré au-dessus, carrousel en dessous, logos à 40 px de haut.
- **Accessibilité** : l'animation doit s'arrêter sous `prefers-reduced-motion: reduce`.

---

### BLOC 3 — Le constat (3 chiffres)

- **Rôle** : installer l'enjeu et le coût. C'est le meilleur bloc de la page actuelle.
- **Statut** : **conservé, légèrement raccourci**.
- **Contenu** : tag + H2 + sous-titre **ramené à 1 phrase de 20-25 mots** (contre 3 lignes aujourd'hui) + les 3 cartes chiffrées avec leurs sources (87 % / 2,2 Md€ / 80 %). **Les sources affichées restent obligatoires.**
- **Ajout** : le `<details>` **« TMS, QVCT : de quoi parle-t-on ? »**, fermé, sous les 3 cartes — il récupère la définition sortie du hero, augmentée de la définition des TMS. Terminé par un lien texte vers `faq`. C'est le bon moment pédagogique : le lecteur vient de lire « 87 % des maladies professionnelles ».
- **CTA** : aucun (bloc de mise en tension, pas de sortie).

---

### BLOC 4 — Notre réponse (fusion des blocs 4 + 6 + 8)

- **Rôle** : répondre à « concrètement, vous faites quoi, et comment ça se passe chez moi ? ».
- **Statut** : **fusion de trois sections en une** — c'est le principal gain de la refonte.

**Structure interne :**

1. Tag + H2 + sous-titre (1 phrase).
2. **3 piliers en cartes** (ex-timeline du bloc 4) : Notre approche / Ce que vos équipes apprennent / Nos ateliers. **3 puces maximum par carte**, contre 4 à 5 aujourd'hui — on passe de 14 puces à 9.
3. **Frise « comment ça se passe » — 4 étapes** (ex-bloc 6), en version compacte : 4 pastilles numérotées sur une ligne en desktop, empilées en mobile. Chaque étape = **un titre de 2-4 mots + une ligne de 6-10 mots**. Plus de H3 individuels pour chaque étape (on descend de 4 H3 à 0, la frise étant un seul objet).
4. **Accordéon « Votre situation »** (ex-bloc 8), en `<details>` **fermés**, **4 cas au lieu de 6** — les quatre vrais déclencheurs d'achat : douleurs déclarées, absentéisme, obligation légale, Passeport Prévention. Les deux cas restants (« équipes sur écran », « port de charges ») sont de simples renvois vers les deux formations existantes : **à déplacer vers `formations.html`**, où ils servent d'aiguillage sédentaire / manutention.
5. **CTA** : un seul, secondaire → `Découvrir nos formations`.
- **Gain** : trois sections et environ 4 écrans mobiles économisés, sans perdre un seul argument.

---

### BLOC 5 — Ce qui nous distingue (fusion des blocs 5 + 10)

- **Rôle** : lever l'objection « pourquoi vous plutôt qu'un organisme de formation classique ? ».
- **Statut** : **conservé, resserré, absorbe le bloc 10**.

**Structure interne :**

1. Tag + H2 + sous-titre (1 phrase).
2. **3 cartes au lieu de 4** : expertise clinique / intervention sur le poste réel / conformité et traçabilité. La carte « 1 heure, résultats mesurables » est **absorbée** : le format 1 h est déjà dans le hero, le sous-titre et le bloc 4 ; le −30 % ne doit apparaître **qu'une seule fois sur la page**, et sa place est ici.
3. **`<details>` « Voir le tableau comparatif complet »**, fermé — **conservé**, c'est un excellent outil pour un acheteur en comparaison, et il est indexable replié. **Réduit de 8 à 6 lignes** : retirer « Résultats mesurables » et « Conformité Art. L.4121-1 », déjà portées par les cartes.
4. **Encart Passeport Prévention** — conservé avec son badge « Nouveau · Obligatoire 2026 ». Argument réglementaire fort et daté, il doit rester visible.
- **Ce qui disparaît** : le bloc 10 « Erreurs à éviter » (4 cartes). Deux de ses quatre cartes redisent le contenu de ce bloc. **Recommandation : le transformer en article de blog** (« 4 erreurs qui laissent les TMS s'installer dans une entreprise ») — c'est un contenu éditorial à part entière, qui alimenterait le maillage interne et le cluster « prévention ». Si Céline tient à le garder sur la home, le replier en `<details>` en fin de ce bloc, jamais en 4 cartes ouvertes.
- **CTA** : aucun (le bloc 6 suit immédiatement).

---

### BLOC 6 — Calculateur TMS (nouveau bloc de conversion mi-parcours)

- **Rôle** : donner un point de sortie **utile** au milieu de la page, au visiteur convaincu mais pas encore prêt à demander un devis. C'est le seul ajout net de cette architecture.
- **Statut** : **nouveau**.
- **Contenu** : H2 court + 1 phrase (ce que l'outil calcule et en combien de temps) + un visuel d'aperçu du calculateur (capture ou illustration) + **1 seul CTA**, en jaune `#FFDE59` — la couleur déjà associée au calculateur dans la nav.
- **Justification** : le calculateur est le lead magnet du site (formulaire Formspree dédié + téléchargement de catalogue). Aujourd'hui il ne vit sur la home que dans un bouton de hero. Placé ici, il transforme une page longue en entonnoir à deux vitesses.
- **Réserve de périmètre** : ce bloc **renvoie** vers `calculateur-tms-web` par un lien. Aucun agent ne touche au fichier du calculateur lui-même.

---

### BLOC 7 — Ils nous font confiance (remplace les blocs 7 + 9)

- **Rôle** : preuve sociale de fin de parcours, et passerelle vers `clients.html`.
- **Statut** : **fortement raccourci**.
- **Contenu** : tag + H2 + **2 témoignages** (pas 3) + une **ligne de tags de secteurs cliquables** (Industrie · Bureaux · Santé · BTP · Commerce · Hôtellerie) pointant vers `clients` + un lien texte « Voir tous nos clients et témoignages → ».
- **Ce qui disparaît** : la grille des 6 cartes secteurs (doublon exact avec `clients.html`) et le 3ᵉ témoignage.
- **Point d'attention pour Céline (règle de vérité du `CLAUDE.md`)** : six témoignages non attribuables répartis sur deux pages posent un problème de crédibilité autant que de véracité. Deux options : soit ces témoignages sont réels et on **consolide toutes les citations sur `clients.html`** en n'en gardant que 2 en extrait sur la home, soit ils ne sont pas attribuables et il faut les remplacer par des éléments factuels (logos, nombre d'interventions, Qualiopi). À trancher par Céline avant intervention de l'agent CR.

---

### BLOC 8 — CTA final (devis)

- **Rôle** : l'objectif business de la page.
- **Statut** : **conservé, renforcé par ce qui l'entoure**.
- **Contenu** : tag + H2 + 1 phrase (devis gratuit sous 48 h, intervention partout en France) + **1 seul bouton** orange → `contact`.
- **Changement** : la newsletter ne le précède plus. Il devient la dernière et unique demande de la page.

---

### FOOTER

- **Statut** : conservé, **la newsletter y est intégrée**.
- **Changement** : le formulaire newsletter (ex-bloc 11) descend en bande fine juste au-dessus du footer, ou en colonne du footer. Il reste par ailleurs à sa place sur `blog.html`. Objectif : qu'il ne concurrence plus le CTA devis.
- **Deux incohérences factuelles repérées dans le footer actuel** (hors de mon périmètre, à transmettre à Céline / agent CR) : l'adresse affichée est **41 rue Juge, 75015 Paris** alors que `CLAUDE.md` indique **9 rue Léon Vaudoyer, 75007 Paris** ; et l'email affiché est **info@uptomove.fr** alors que `CLAUDE.md` indique **celine@uptomove.fr**.

---

## 3. Comportement mobile et tablette du hero (détaillé)

### Mobile < 600 px — **recommandation : image et texte empilés (« split »)**

```
┌──────────────────────────┐
│ NAV sticky (64px)        │  fond #1E2952 opaque dès le départ
├──────────────────────────┤
│                          │
│   IMAGE (ratio ~4:5)     │  hauteur ~44-48vh, object-position: center 40%
│                          │
├──────────────────────────┤
│ [eyebrow]                │  fond crème #F7F6F2
│ H1 (2 lignes, 30-34px)   │
│ Sous-titre (2-3 lignes)  │
│ [CTA primaire orange]    │  pleine largeur ← visible sans scroller
│ [CTA secondaire]         │  pleine largeur
└──────────────────────────┘
```

**Pourquoi l'empilement plutôt que l'overlay sur mobile :**
1. **Lisibilité garantie.** En overlay, le texte tombe sur un recadrage serré et imprévisible de la photo ; il faudrait un voile si dense que l'image n'est plus vraiment visible — on perd l'immersion qu'on cherchait.
2. **La ligne de flottaison tient.** Bilan de hauteur sur un écran de 660 px utiles : nav 64 + image ~300 + eyebrow 24 + H1 ~100 + sous-titre ~60 + CTA primaire ~50 = **~598 px**. Le CTA principal est visible sans défilement. En overlay plein écran, le second CTA passe systématiquement dessous.
3. **L'image reste nette.** 1376 px de source pour un écran de 390 px en densité ×3 (1170 px) : la qualité passe sans agrandissement — contrairement au desktop.
4. Aucun risque de contraste imprévisible sur les zones surexposées (baies vitrées).

**Variante « overlay plein écran » (si Céline veut absolument le même effet qu'en desktop)** : possible avec `min-height: 76svh`, voile bas renforcé à `rgba(30,41,82,0.82)`, H1 à 30 px maximum, sous-titre ramené à **une ligne de 10-12 mots**, et **un seul CTA visible** (le second passant en lien texte souligné). C'est un arbitrage assumé : plus d'impact visuel, moins de message et un CTA de moins.

**Recadrage** : `object-position: center 40%` — la kinésithérapeute est au centre du cadre, un crop centré la conserve ; le décalage vertical à 40 % garde les visages et les bras levés et coupe un peu de parquet. Les personnes des bords gauche et droit sont coupées : c'est acceptable, elles ne portent pas le message.
**Idéalement** : ne pas se contenter de `object-fit` — exporter une **version mobile recadrée en 4:5** servie par un `<picture>` / `media`. Cela évite aussi de faire télécharger 808 Ko à un mobile.

**Ordre et taille des CTA en mobile** : primaire orange en premier, secondaire dessous, **tous deux en pleine largeur** (le CSS le fait déjà, ligne 372-373). **Zone tactile de 48 px minimum** : le padding actuel (`14px 24px`, police 14 px ≈ 45 px de haut) est à porter à 16 px de padding vertical en mobile.

### Tablette 600-899 px

- Nav déjà en hamburger (breakpoint 900 px existant, à conserver).
- **Overlay maintenu**, hero à `min-height: 72vh`, bloc texte **centré** et non plus aligné à gauche, largeur max 560 px.
- CTA **côte à côte** au-dessus de 640 px de large, empilés en dessous.
- `object-position: center 45%`.

### Points techniques transverses

- Utiliser **`svh` / `dvh` plutôt que `vh`** sur mobile, sinon la barre d'URL de Safari provoque un saut de hauteur au premier scroll.
- **Mobile paysage** (hauteur < 500 px) : forcer `min-height: auto` avec padding vertical, sinon le H1 et les CTA ne tiennent pas.
- **Barre CTA sticky mobile** : la classe `.sticky-mobile-cta` existe déjà (ligne 179, masquée). Recommandation : la conserver, **ne l'afficher qu'une fois le hero sorti du viewport** (sinon elle recouvre les CTA du hero et répète le même message), et la faire pointer sur **« Demander un devis »**. Le calculateur est déjà servi par la pastille jaune en nav et par le bloc 6 : on obtient ainsi trois destinations distinctes bien réparties.

---

## 4. Comparaison chiffrée avant / après

> Estimations calculées à partir du nombre de blocs et de la hauteur moyenne des sections actuelles. À confirmer en navigateur après intégration.

| Indicateur | Avant | Après | Écart |
|---|---|---|---|
| Sections de contenu | 12 | **8** | −33 % |
| Titres H2 | 9 | **6** | −33 % |
| Titres H3 | ~30 | **~14** | −53 % |
| Unités de contenu (cartes, étapes, lignes de tableau, citations) | ~41 | **~21** | −49 % |
| Mots visibles (hors footer) | ~1 450 | **~900** (cible) | −38 % |
| Longueur de page desktop | ~9 500-10 500 px (11-12 écrans) | **~6 000-6 800 px (7 écrans)** | −35 % |
| Longueur de page mobile | ~14 000-16 000 px (20+ écrans) | **~9 000-10 000 px (13 écrans)** | −37 % |
| Points d'action cliquables | ~13 | **8** | −38 % |
| Destinations de conversion distinctes | 5 | **3** (calculateur, formations, devis) | clarifié |
| Écrans consécutifs sans point d'action | jusqu'à 6 sections | **2 à 3 max** | — |

---

## 5. Points d'attention par agent

### Pour l'agent **Design**

1. **Le voile sur l'image est structurel, pas décoratif.** Sans lui, ni la nav ni le H1 ne sont lisibles. Contraste à vérifier au ratio **4,5:1 minimum** sur les zones les plus claires de la photo (baies vitrées derrière la kinésithérapeute).
2. **Lisibilité du logo sur photo** : wordmark en pilule dégradé orange→jaune sur fond transparent, posé sur parquet clair. À valider, éventuellement avec une variante monochrome blanche pour l'état overlay.
3. **Logo ramené à 56-64 px** en nav desktop (contre 112 px). C'est une contrainte structurelle liée à la nav sticky, pas une préférence esthétique.
4. Le hero passe sur fond photo : les couleurs de texte du hero basculent en **blanc**, en rupture avec le reste du site qui est en `#1E2952` sur crème. Vérifier que la transition hero → bandeau blanc → constat crème reste cohérente.
5. Traiter les **états de la nav** : overlay transparent, solidifiée au scroll, panneau hamburger ouvert.
6. **`prefers-reduced-motion`** : la home cumule déjà des animations d'apparition (ligne 510), un rebond de flèche et un carrousel de logos. Avec une image plein écran en plus, prévoir la version sans mouvement.
7. Palette et typographies **inchangées** (`MEMO-SITE.md` §5) : la refonte est structurelle, pas une refonte de charte.

### Pour l'agent **CR (rédaction)**

1. **Aucun texte n'est rédigé dans ce document** — uniquement la nature et la longueur cible de chaque bloc.
2. **Longueurs cibles strictes** : H1 **5-9 mots sur 2 lignes maximum** ; sous-titre hero **1 phrase de 18-25 mots** ; sous-titres de section **1 phrase de 20-25 mots** ; puces des 3 piliers **3 maximum par carte** ; étapes de la frise **titre de 2-4 mots + ligne de 6-10 mots**.
3. **Le −30 % ne doit apparaître qu'une fois sur la page** (bloc 5). Idem pour Qualiopi et le Passeport Prévention : une mention argumentée dans le bloc 5, pas cinq mentions dispersées.
4. **Chiffres sourcés obligatoires** (87 % / 2,2 Md€ / 80 % — INRS, Assurance Maladie), sources affichées, conformément au `CLAUDE.md`.
5. **Question ouverte à trancher avec l'agent SEO** : le H1 actuel (« Protéger vos équipes, c'est aussi protéger votre entreprise. ») ne contient aucun mot-clé. Arbitrage à faire entre impact émotionnel et présence de « prévention des TMS » / « troubles musculo-squelettiques ».
6. **Texte alternatif de la bannière** à rédiger — descriptif et utile au SEO image, du type « kinésithérapeute animant un atelier de prévention des TMS auprès de salariés en open space ».
7. **À vérifier auprès de Céline avant rédaction** : l'authenticité et l'attribution des témoignages (cf. bloc 7), l'adresse postale et l'email du footer.
8. Rappel : tout texte passe par la skill `redaction-celine`.

### Pour l'agent **Dev**

1. **Ne jamais toucher** à `calculateur-tms.html`, `calculateur-tms-web.html`, `calculateur-tms copie.html` — le bloc 6 est un simple lien sortant.
2. **`svh`/`dvh` et non `vh`** sur les hauteurs de hero en mobile.
3. **Média query mobile paysage** (`max-height: 500px and orientation: landscape`) à traiter explicitement.
4. **Optimisation de l'image** : conversion **WebP** (808 Ko en JPG, cible ~200-250 Ko), `loading="eager"` + `fetchpriority="high"` (c'est le LCP de la page), `width`/`height` déclarés pour éviter le décalage de mise en page, et `<picture>` avec une **source mobile recadrée 4:5 exportée à part**.
5. **Réutiliser l'existant** plutôt que réécrire : `.hero-nav.scrolled` (ligne 319) et son JS (ligne 502), le carrousel `.bc-track`, le pattern `<details>/<summary>`, le breakpoint 900 px et le hamburger. Breakpoints proposés : **1200 / 900 (existant) / 600 / 480 (existant)**.
6. **Barre CTA sticky mobile** : `.sticky-mobile-cta` existe déjà (ligne 179) ; l'activer seulement après la sortie du hero du viewport.
7. **Nav sticky en overlay** : gérer le `z-index` par rapport au panneau déroulant « À propos » (`.nav-dropdown-panel`, z-index 80) et au menu hamburger (z-index 300).
8. **Ordre du DOM = ordre de lecture** dans le hero mobile (image, puis eyebrow, H1, sous-titre, CTA) — pas de réordonnancement par `order` CSS, qui casserait la navigation au clavier et au lecteur d'écran.
9. `<h1>` en **vrai texte**, jamais de texte incrusté dans l'image.
10. Le contenu replié des `<details>` reste dans le DOM : ne pas le charger en JS, il doit rester indexable.

### Pour l'agent **SEO** (pour information, après intégration)

Le déplacement de contenu vers `clients.html` (secteurs, témoignages), `formations.html` (2 cas d'usage) et le blog (les 4 erreurs) modifie la répartition des mots-clés sur le site et le maillage interne. La réduction d'environ 550 mots sur la home est à arbitrer au regard du positionnement actuel — les contenus ne sont pas supprimés, ils sont redistribués sur des pages qui les portent mieux.

---

## 6. Récapitulatif des déplacements de contenu

| Contenu actuel de la home | Destination | Motif |
|---|---|---|
| Définition QVCT (hero) | **Bloc 3 de la home**, en `<details>` fermé + lien vers `faq` | Libère le hero ; déjà traité sur `faq.html` |
| Méthode 4 étapes (bloc 6) | **Fusionné** dans le bloc 4 en frise compacte | Même sujet que « notre réponse » |
| 2 cas sur 6 de « Vous vous reconnaissez ? » (écran, charges lourdes) | **`formations.html`** | Ce sont des aiguillages vers les deux formations existantes |
| 4 autres cas | **Bloc 4 de la home**, en accordéon fermé | Déclencheurs d'achat, à conserver mais repliés |
| Erreurs à éviter (4 cartes) | **Nouvel article de blog** | Contenu éditorial ; 2 cartes sur 4 redisent le bloc 5 |
| Secteurs (6 cartes) | **Supprimé** — existe déjà à l'identique sur `clients.html` | Doublon exact (même H2, mêmes 6 secteurs) |
| Témoignages (3) | **`clients.html`** (consolidation), 2 en extrait sur la home | Doublon fonctionnel ; crédibilité à consolider |
| Newsletter | **Footer** (+ reste sur `blog.html`) | Ne doit plus concurrencer le CTA devis |
| Flèche « Découvrir » | **Supprimée** | Remplacée par le débord volontaire du bandeau logos |
| — | **Nouveau bloc calculateur mi-page** | Seul ajout : point de conversion intermédiaire |

---

*Document produit par l'agent UX/UI. Aucun fichier `.html`, `.css` ou `.js` n'a été modifié. Aucune commande git n'a été exécutée.*
