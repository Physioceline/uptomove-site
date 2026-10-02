# Spec UX/UI — Remontée des photos d'intervention dans les études de cas (`clients.html`)

Agent UX/UI · 2 octobre 2026 · Chantier : demande directe de Céline
Périmètre : structure et hiérarchie uniquement. Aucun texte final, aucune couleur, aucun fichier modifié.

> Demande de Céline : « Dans la partie des clients je veux que les photos soient dans le bloc de présentation des équipes, afin qu'au premier coup d'œil on voie bien les interventions. »

---

## 1. Décision centrale : les photos sortent du `<details>`

**Recommandation : les photos ne vont NI dans le `<summary>`, NI dans le `<details>`. Elles deviennent un bloc statique de `.case-study`, placé entre le bloc d'identification et le bloc dépliable.**

### Pourquoi pas dans le `<summary>`

Deux conséquences du comportement natif de `details`/`summary` (HTML Living Standard pour l'activation, calcul du nom accessible « accname » pour la seconde) rendent cette option mauvaise :

1. **Toute la surface du `<summary>` est la cible du toggle.** Cliquer sur une photo replierait la fiche. C'est exactement l'inverse du geste attendu : la réaction naturelle face à une photo de terrain est de cliquer dessus pour la voir en plus grand, pas pour fermer le contenu. Anti-pattern classique (action destructrice déclenchée par le geste le plus probable).
2. **Le nom accessible du `<summary>` est calculé à partir de tout son contenu descendant**, y compris les `alt` des images. Avec 3 photos, le bouton de dépliement s'annoncerait au lecteur d'écran comme un bloc de ~300 caractères (« RATP, RATP - CENTRE BUS BELLIARD - PARIS 75, 2 journées pour la prévention…, Modèle anatomique de colonne vertébrale utilisé en sensibilisation TMS — RATP Centre Bus Belliard, Atelier de sensibilisation… »). Inutilisable. La seule parade serait de vider les `alt`, ce qui sacrifierait l'accessibilité **et** le référencement image — mauvais échange.

### Pourquoi pas « après `</summary>`, dans `<details>` »

Techniquement impossible : tout ce qui suit `</summary>` à l'intérieur de `<details>` est masqué à l'état fermé. Cette piste n'existe pas.

### Pourquoi pas après `</details>` (en bas de la carte)

C'est faisable et toujours visible, mais ça ne répond pas à la demande : à l'état déplié, les photos se retrouvent rejetées sous 400 à 700 px de texte d'objectifs et de résultats. On perd l'effet « on voit l'intervention au premier coup d'œil » dès que le visiteur s'intéresse à un cas.

### Pourquoi pas avant le logo (tout en haut de la carte)

Impact visuel maximal, mais le visiteur voit une bande de photos sans savoir chez qui. Sur une page de preuve B2B, le logo client porte autant de valeur que la photo : il faut d'abord savoir **qui**, ensuite voir **la réalité de l'intervention**.

### Conséquence : le bloc d'identification sort aussi du `<summary>`

Pour insérer les photos entre l'identification et le dépliable, logo + titre + sous-titre doivent devenir statiques. Le `<summary>` est réduit à une **ligne de déclenchement fine** (libellé court + chevron). Trois bénéfices collatéraux :

- la zone cliquable devient explicite et prévisible (aujourd'hui, un bloc de 200 px de haut est cliquable sans que rien ne l'indique vraiment) ;
- le nom accessible du bouton devient court et clair ;
- le `<details>` reste le pattern natif acté dans `MEMO-SITE.md` §6, sans JS supplémentaire.

---

## 2. Squelette HTML cible (structure seule, sans style ni texte final)

Identique pour les 4 cas. Exemple RATP :

```html
<section class="bg-cream" id="case-ratp">
  <div class="wrap">
    <div class="case-study">

      <!-- 1. IDENTIFICATION — statique, non cliquable : QUI / OÙ / QUOI -->
      <div class="case-header">
        <img src="logo-ratp.png" alt="RATP" class="case-logo">
        <h3 class="case-title-row">
          <span class="case-pill">RATP</span> - CENTRE BUS BELLIARD -
          <span class="case-title-orange">PARIS (75)</span>
        </h3>
        <p class="case-subtitle"><!-- sous-titre existant, inchangé --></p>
      </div>

      <!-- 2. PREUVE VISUELLE — statique, toujours visible -->
      <div class="case-gallery case-gallery-3"
           role="group"
           tabindex="0"
           aria-label="Photos de l'intervention RATP — Centre Bus Belliard">
        <img src="ratp-1.jpg" alt="…" loading="lazy" width="…" height="…">
        <img src="ratp-2.jpg" alt="…" loading="lazy" width="…" height="…">
        <img src="ratp-3.jpg" alt="…" loading="lazy" width="…" height="…">
      </div>

      <!-- 3. DÉTAIL — repliable, fermé par défaut -->
      <details class="case-details">
        <summary class="case-summary">
          <span class="case-summary-label"><!-- libellé, cf. §5 --></span>
          <span class="case-toggle-icon" aria-hidden="true">&#9662;</span>
        </summary>
        <div class="case-body">
          <!-- Chavigny uniquement : .case-link / .case-stat / .case-stat-label / .case-note -->
          <div class="case-tabs"><!-- Objectif / Résultats, inchangé --></div>
          <div class="case-panel active" id="objectif-ratp"><!-- inchangé --></div>
          <div class="case-panel" id="resultats-ratp"><!-- inchangé --></div>
          <!-- .case-photos-3 SUPPRIMÉ d'ici : remonté en bloc 2 -->
        </div>
      </details>

    </div>
  </div>
</section>
```

Points invariants : les ancres `#case-ratp`, `#case-chavigny`, `#case-daiichi`, `#case-vsf` sont conservées (des liens internes peuvent les cibler). Un lien profond vers une ancre continue d'ouvrir la page sur la carte fermée — comportement inchangé, mais désormais le visiteur voit les photos immédiatement. Les `id` des panneaux d'onglets et le JS existant ne bougent pas.

---

## 3. Ordre de lecture retenu

| # | Bloc | Question du visiteur (DRH / QHSE / Directeur) |
|---|---|---|
| 1 | Logo client | « Chez qui ? » — crédibilité immédiate, nom connu |
| 2 | Titre (pastille + site + ville) | « Où exactement ? » — ancrage géographique, preuve que c'est un vrai site |
| 3 | Sous-titre | « Quoi ? » — nature et volume de l'intervention en une ligne |
| 4 | **Photos** | « Est-ce que c'est réel ? » — preuve de terrain, c'est le nouveau cœur du bloc |
| 5 | Ligne de dépliement (libellé + chevron) | « Je veux les détails » — engagement volontaire |

La bande de logos défilante en haut de page (`.bc-track`) répond déjà à « ils leur font confiance ». Les photos apportent la couche que les logos ne peuvent pas apporter : **la réalité physique de l'intervention**. C'est pour ça qu'elles se placent après l'identification et pas avant : logo = signature, photo = preuve. La preuve vient valider la signature, pas la précéder.

Variante écartée : photos entre titre et sous-titre. Ça coupe le fil « qui/où/quoi » en deux et le sous-titre, qui porte le volume de l'intervention (« 2 journées », « trois ateliers »), se retrouve orphelin sous les images.

---

## 4. Comportement responsive (réponse à la contrainte de longueur)

Trois régimes. C'est la partie la plus importante de la spec : sans traitement mobile spécifique, la demande produirait une page inutilisable au téléphone.

### Desktop — ≥ 901 px : grille, inchangée dans son principe

- 3 colonnes (RATP, Daiichi, VSF) / 2 colonnes (Chavigny), vignettes `height:180px`, `object-fit:cover`, `gap:16px`.
- On réutilise le rendu actuel de `.case-photos-3` / `.case-photos`, simplement déplacé. Aucun nouveau langage visuel à inventer.
- Les 3 photos sont vues simultanément : l'effet « coup d'œil » est obtenu sans aucun geste.

### Tablette — 601 à 900 px : grille conservée, hauteur réduite

- On **garde** le multi-colonnes (3 ou 2 selon le cas) au lieu de passer à 1 colonne comme aujourd'hui.
- Hauteur de vignette réduite à ~140 px, `gap` 12 px.
- Vérification de largeur : à 768 px de viewport, section `padding:24px` + carte `padding:22px` → largeur utile ≈ 676 px → 3 colonnes de ~217 px pour 140 px de haut (ratio ≈ 1,55:1, format paysage confortable pour des photos de salle). Ça tient.
- Aucun geste requis, tout est visible, coût vertical ~140 px.

### Mobile — ≤ 600 px : rangée horizontale à défilement avec accroche

- `overflow-x:auto` + `scroll-snap-type: x mandatory`, `scroll-snap-align: start` sur chaque image, `-webkit-overflow-scrolling: touch`.
- **Largeur d'item ≈ 78 % de la largeur utile** (ex. `flex: 0 0 78%`), hauteur ~160 px.
- Le 78 % est le point clé : il laisse dépasser le bord de la photo suivante. C'est ce qui signale qu'il y a d'autres photos. Un carrousel à 100 % de largeur ressemble à une image unique et personne ne swipe — anti-pattern à éviter absolument.
- `scroll-padding`/`padding-inline` sur le conteneur pour que la première et la dernière photo s'alignent proprement sur les marges de la carte.
- **Zéro JS.** Pas de flèches, pas de points de pagination, pas de lightbox : défilement natif uniquement. Cohérent avec un site statique sans dépendance.
- Accessibilité du scroller : `role="group"` + `aria-label` décrivant le client, et `tabindex="0"` pour que le conteneur soit atteignable et défilable au clavier dans tous les navigateurs. Coût : 1 arrêt de tabulation supplémentaire par carte (4 au total sur la page) — acceptable, et il est annoncé correctement grâce à l'`aria-label`.
- Masquer la barre de défilement est tolérable **uniquement** parce que l'accroche à 78 % assure la découvrabilité ; sinon, la garder visible.

### Pourquoi le scroller plutôt que les alternatives mobiles

| Option mobile | Coût vertical / carte | Verdict |
|---|---|---|
| 1 colonne empilée (comportement actuel de `.case-photos-3`) | ~570 px | Rejeté. Il faudrait traverser 3 photos pour atteindre le bouton de dépliement, et 4 cartes deviendraient un tunnel. |
| Grille 2 colonnes miniatures | ~230 px (3 photos → 2 lignes bancales) | Rejeté. Vignettes ~150 px de large : les visages et le matériel ne sont plus lisibles, la preuve se perd. Et la 3ᵉ photo seule sur sa ligne casse le rythme. |
| 1 photo mise en avant + les autres repliées | ~160 px | Rejeté. Il faudrait désigner « la » meilleure photo cas par cas (choix éditorial fragile) et les deux autres retomberaient dans du contenu masqué — on recréerait le problème qu'on corrige. |
| **Rangée horizontale à défilement (retenu)** | **~160 px** | Les 3 photos restent accessibles, lisibles en grand, en un seul geste horizontal, sans allonger la page. |

### Repli acceptable si Dev veut limiter le CSS

Un seul palier à 900 px (grille au-dessus, scroller en dessous) est acceptable : on perd seulement le confort de la tablette portrait, qui basculerait sur le scroller. À ne retenir que si l'ajout d'un palier à 600 px pose problème. Le palier 900 px de la nav n'est pas touché dans les deux cas.

---

## 5. Libellé de dépliement

Aujourd'hui : pastille ronde `▾` de 34 px, sans texte. Avec une bande de photos juste au-dessus, cette pastille devient invisible — elle sera lue comme une décoration de fin de bloc, pas comme une commande. **Elle doit devenir explicite.**

Prescriptions (le texte final revient à l'agent CR) :

- **Nature** : libellé verbal d'action, à l'infinitif, qui nomme ce qu'on va obtenir (le détail de l'intervention : objectif + résultats). Pas de « Lire la suite » ni de « En savoir plus » — formules vagues qui n'annoncent rien.
- **Longueur** : 3 à 5 mots, **≤ 32 caractères**, pour tenir sur une seule ligne à côté du chevron dès 360 px de large.
- **Un seul libellé invariant** pour les états fermé et ouvert, le chevron pivoté (`[open]`) portant déjà l'information d'état. Évite de dupliquer deux `<span>` et d'introduire un changement de texte au clic.
- **Identique sur les 4 cas**, au mot près : c'est un élément d'interface, pas du contenu éditorial.
- Mise en forme attendue : ligne unique, libellé + chevron, centrée comme le reste de la carte, hauteur de zone cliquable ≥ 44 px (cible tactile).
- Ne pas ajouter d'`aria-expanded` : `details`/`summary` l'expose nativement.

---

## 6. Impact sur la longueur de page

Méthode : addition des hauteurs de boîtes déclarées dans la feuille de style de `clients.html` (paddings de `section` et de `.case-study`, hauteurs de `.case-logo`, `.case-toggle-icon`, vignettes, marges), avec estimation du nombre de lignes du titre et du sous-titre selon la largeur. Valeurs **approximatives (± 15 %)** : les hauteurs de texte dépendent du rendu réel des polices, non mesurable sans ouvrir la page dans un navigateur. À confirmer par Dev après intégration.

### Desktop (état fermé, 4 cartes)

| | Avant | Après |
|---|---|---|
| Par carte (section comprise) | ≈ 510 px | ≈ 755 px |
| Les 4 cartes | ≈ 2 050 px | ≈ 3 030 px |
| Delta | — | **≈ +980 px** |

Décomposition de l'ajout par carte : vignettes 180 px + marge haute ~24 px + séparateur/marge basse ~28 px + passage de la pastille seule à une ligne libellée ~+14 px.
Lecture : environ un écran de défilement supplémentaire sur toute la page. Acceptable pour une page dont la fonction est précisément la preuve.

### Mobile (état fermé, 4 cartes, viewport 390 px)

| | Avant | Après — empilement naïf (rejeté) | Après — scroller (retenu) |
|---|---|---|---|
| Par carte | ≈ 490 px | ≈ 1 115 px | ≈ 710 px |
| Les 4 cartes | ≈ 1 970 px | ≈ 4 460 px | ≈ 2 840 px |
| Delta | — | **≈ +2 490 px** | **≈ +870 px** |

Le choix du scroller économise **≈ 1 600 px**, soit environ 2 écrans de téléphone, par rapport au comportement 1 colonne actuel appliqué tel quel. Sans ce traitement, la demande produirait une page où passer d'un client au suivant demande 3 à 4 balayages — et c'est au téléphone que la page sera le plus consultée (lien envoyé, scan LinkedIn).

---

## 7. Traitement des 4 cas : oui, tous les 4

**Appliquer le même traitement aux 4 études de cas, sans exception.** Raisons :

- La cohérence structurelle entre blocs comparables est la base de la lisibilité d'une page de références. Une carte sur quatre qui se comporte autrement serait lue comme une anomalie, voire comme un cas « moins important ».
- Si un seul cas affichait ses photos, le visiteur en déduirait que les trois autres n'en ont pas — alors qu'elles sont juste cachées. Perte de preuve.

**Chavigny et ses 2 photos** : on conserve son rendu 2 colonnes sur desktop (`.case-gallery` au lieu de `.case-gallery-3`) — 2 vignettes de ~360 px de large à 180 px de haut, c'est un rendu valide, pas un rendu dégradé. Sur mobile, le scroller fonctionne identiquement avec 2 items. Aucune adaptation spécifique nécessaire. Si Céline dispose d'une 3ᵉ photo Chavigny, l'uniformisation à 3 colonnes partout rendrait le rythme de page plus régulier — c'est un plus, pas un prérequis.

---

## 8. Deux correctifs structurels adjacents (à arbitrer par Céline)

Repérés en lisant le fichier, liés au même bloc. Hors demande littérale, je ne les intègre pas d'autorité.

**(a) Chavigny n'a pas de `<h3>`.** Les cas RATP, Daiichi et VSF ont un `h3.case-title-row`. Chavigny utilise un `div.case-pill` + un `p.case-location` : sa carte n'a aucun titre dans la hiérarchie de la page. Trou dans le plan de titres, pénalisant pour les lecteurs d'écran qui naviguent par titres. **Recommandation : normaliser Chavigny en `h3.case-title-row`.** La liste des six départements est trop longue pour un titre : il faut une formulation courte (nom du groupe + mention territoriale synthétique), la liste complète restant en dessous. → Nécessite un texte de l'agent CR.

**(b) Le chiffre « +350 personnes formées » de Chavigny est caché dans la partie repliée.** C'est la statistique la plus convaincante de la page, invisible par défaut. Dans la logique « on voit l'intervention au premier coup d'œil », sa place est dans le bloc d'identification, entre le sous-titre et les photos : chiffre + photo = preuve complète. Les trois autres cas n'ont pas d'équivalent chiffré ; il faudrait soit accepter l'asymétrie, soit créer un emplacement « chiffre clé » rempli au cas par cas quand la donnée existe. **Je ne propose aucun chiffre pour les trois autres cas — seule Céline détient ces données, et il est hors de question de les inventer.** À arbitrer avec elle.

---

## 9. Points d'attention pour l'agent Design

1. **Le bloc photos devient le centre de gravité visuel de la carte.** Il faut que le regard tombe dessus après le logo, sans que la bande écrase le titre. Arbitrer le rythme vertical : marge au-dessus des photos plus serrée que celle en dessous, pour rattacher visuellement les photos au bloc d'identification et détacher la ligne de dépliement.
2. **Le séparateur se déplace.** Aujourd'hui `.case-body` porte un `border-top` qui marque la frontière replié/déplié. Dans la nouvelle structure, la frontière pertinente est **au-dessus de la ligne de dépliement** (après les photos), pas sous le `<summary>`. À repositionner, sinon la ligne de dépliement flotte sans appartenance.
3. **La ligne de dépliement doit se lire comme une commande.** Le chevron seul, perdu après une bande de photos, ne suffit plus. Traiter la ligne comme un élément interactif identifiable (fond, bordure, soulignement — au choix de Design), avec un état de survol sur la ligne entière et une hauteur ≥ 44 px.
4. **La zone de survol se rétrécit fortement** : `.case-details:hover .case-toggle-icon` ne s'activera plus que sur la ligne fine, plus sur toute la fiche. C'est un gain de prévisibilité, mais ça demande un état de survol nettement plus visible qu'aujourd'hui.
5. **Homogénéité des photos.** Elles passent du statut « illustration de fin de dossier » à « preuve en vitrine ». 11 photos désormais visibles côte à côte : les écarts de cadrage, d'exposition et de dominante se verront. `object-fit:cover` à hauteur fixe est conservé et suffit pour l'alignement ; vérifier que le recadrage automatique ne coupe pas des visages ni le matériel pédagogique (squelette, écran « Programme », livrets) — c'est précisément ce qui porte la preuve. Ajuster `object-position` photo par photo si besoin.
6. **Pas de légende sous chaque photo.** Ça rallongerait la carte de 3 lignes de texte et ferait redondance avec le sous-titre. Si une légende est jugée indispensable, une seule ligne sous la rangée entière, jamais une par image.
7. **Pas de lightbox, pas de zoom au clic.** Nouveau pattern JS absent du site, et surcharge interactive dans une carte qui a déjà un dépliable et des onglets. Les photos sont des preuves à voir, pas une galerie à explorer.
8. **Animation `.fade-up`** : ne pas placer les photos dans un élément animé distinct qui retarderait leur apparition. La preuve doit être là au moment où la carte entre dans l'écran.

## 10. Points d'attention pour l'agent Dev

1. **Sélecteur devenu mort** : la règle `.case-details .case-subtitle, .case-details .case-location { margin-bottom:6px; }` (vers la ligne 116) ne matchera plus, sous-titre et localisation sortant du `<details>`. À re-cibler sur `.case-header`. Même vigilance pour toute règle descendante de `.case-details` visant le logo, la pastille ou le titre.
2. **Chargement des images** : à l'état fermé, les images d'un `<details>` peuvent ne pas être téléchargées par le navigateur. En les rendant visibles, on ajoute 11 images au chargement réel de la page. `loading="lazy"` obligatoire sur les 11 (la première carte est largement sous la ligne de flottaison, aucune n'a besoin d'être eager).
3. **Attributs `width`/`height`** (ou `aspect-ratio` CSS) obligatoires sur chaque `<img>` pour éviter le décalage de mise en page pendant le chargement — d'autant plus critique que les photos sont désormais au-dessus d'une zone cliquable.
4. **Poids des fichiers** : merci de relever la taille réelle de `ratp-1..3.jpg`, `chavigny-1..2.jpg`, `daiichi-1..3.jpg`, `vsf-1..3.jpg` et de la signaler. Au-delà de ~250–300 Ko par photo, un redimensionnement est nécessaire avant publication (11 photos visibles, consultation mobile en 4G). Une version WebP est un plus, comme ce qui a été fait pour le hero (`hero-atelier-tms-*.webp`).
5. **Scroller mobile sans JS** : `overflow-x:auto` + `scroll-snap`. Vérifier qu'il ne provoque pas de débordement horizontal de la page entière (`overflow-x` du `body`), piège classique.
6. **Zones tactiles** : ligne de dépliement ≥ 44 px de haut. Les photos ne doivent recevoir aucun gestionnaire de clic.
7. **Classes** : préférer de nouveaux noms (`.case-header`, `.case-gallery`, `.case-gallery-3`, `.case-summary-label`) plutôt que de détourner `.case-photos` / `.case-photos-3`, dont le comportement responsive change complètement (1 colonne → scroller). Si les anciennes classes ne sont plus utilisées nulle part ailleurs sur le site, le signaler plutôt que de les supprimer sans validation.
8. **Validation responsive exigée avant livraison** (CLAUDE.md, règle 9) : 390 px, 768 px, 1024 px et 1440 px. Points à vérifier explicitement : accroche de la photo suivante bien visible à 390 px ; 3 colonnes qui tiennent sans écrasement à 768 px ; libellé de dépliement sur une seule ligne à 360 px ; aucun débordement horizontal ; `<details>` toujours fonctionnel au clavier.
9. **À ne pas toucher** : `calculateur-tms*.html`, les ancres de section, les `id` de panneaux d'onglets, le JS des onglets, la bande de logos défilante.

## 11. Pour l'agent SEO (information, pas de demande)

Aucune URL créée, aucune balise de tête modifiée. Les `alt` des 11 photos sont conservés tels quels. Effet de bord favorable : le contenu images passe de masqué par défaut à visible par défaut, ce qui ne peut que servir l'indexation image. Rien à régénérer côté sitemap.
