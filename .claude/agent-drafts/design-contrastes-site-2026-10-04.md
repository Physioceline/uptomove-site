# Design · Chantier « contrastes-site » · 2026-10-04

Agent Design du site. Spec de correction pour l'agent Dev. Aucun `.html` modifié.
Hors périmètre, non audités : `calculateur-tms-web.html`, `calculateur-tms.html`, `calculateur-tms copie.html`, `Sources/`.

## 0. Méthode

- Ratio de contraste WCAG 2.1 : (L1 + 0,05) / (L2 + 0,05), L = luminance relative sRGB. Source : W3C, *WCAG 2.1*, définitions « contrast ratio » et « relative luminance » (https://www.w3.org/TR/WCAG21/).
- Seuils : texte 4,5:1, grand texte (≥ 24 px, ou ≥ 18,66 px gras) 3:1 (critère 1.4.3) ; composants d'interface, dont la bordure d'un champ, 3:1 (critère 1.4.11).
- Couleurs `rgba()` : composées sur leur fond réel avant calcul (ex. blanc à 30 % sur navy = `#626986`).
- Calcul fait par script local (Python), valeurs arrondies au centième.
- Limite : les fonds vidéo (hero de `faq.html`, `partenaires.html`, `apropos.html`) ne sont pas mesurables statiquement. Je donne une fourchette.

## 1. Vérification des 5 constats remontés

| # | Constat remonté | Vérifié | Ratio mesuré | Remarque |
|---|---|---|---|---|
| 1 | `.tag-orange` d'`index.html` | ✓ | **1,89:1** (pastille sur section crème, l.974 et l.1100) | 2,08 annoncé = orange brut sur crème. Le fond teinté de la pastille baisse encore le ratio. |
| 2 | Ligne basse du footer `rgba(255,255,255,.3)`, « toutes les pages » | ✓ partiel | **2,60:1** | **Seul `index.html` est touché** (l.1341-1347). Les 30 autres pages avec footer utilisent `.footer-bottom` à `.5` (4,65:1 ✓). Les 5 pages légales n'ont pas de footer. |
| 3 | Bordures `#E8E6E0` des champs de `contact.html` et `formations.html` | ✓ | **1,25:1** sur blanc, **1,15:1** sur crème | Même défaut ailleurs : newsletter d'`index.html` (`var(--line)`), recherche et newsletter de `blog.html`. |
| 4 | Erreur newsletter `#EF4444` (index « l.~1449 ») | ✓ | **3,76:1** sur blanc | En réalité l.1460 et l.1464. Même défaut dans `blog.html` l.575 et l.579 (3,48:1 sur crème). |
| 5 | `--muted` `#6B7280` sur crème | ✓ | **4,47:1** | Sur blanc il passe (4,83:1). Le défaut apparaît là où le gris est posé sur crème : 1 sélecteur dans `index.html`, plus 7 pages qui l'écrivent en dur. |

## 2. Jetons utilisés (aucune couleur nouvelle)

| Jeton | Valeur | Origine | Ratios utiles |
|---|---|---|---|
| `--orange-ink` | `#A84B0F` | défini par le Design calculateur (orange de marque assombri, même teinte) | 5,71 blanc · 5,28 crème · 5,20 sur `#FFF2EA` (pastille orange sur blanc) · 4,84 sur `#F8EADE` (pastille orange sur crème) |
| `--field-line` | `#8389A0` | défini par le Design calculateur (= navy à 55 % sur blanc) | 3,47 blanc · 3,21 crème |
| `--text` | `#374151` | charte §5 | 10,31 blanc · 9,53 crème |
| `--teal-dark` | `#12786F` | déjà dans `index.html` l.107 | 5,33 blanc · 4,93 crème |
| `--navy` | `#1E2952` | charte §5 | 14,05 blanc |
| blanc 50 % sur navy | `rgba(255,255,255,0.5)` | déjà la valeur des 30 autres pages | 4,65:1 |

Mise en œuvre :
- `index.html` a un `:root` (l.100-112). Ajouter sous `--line` (l.112) :
  ```css
  --orange-ink:  #A84B0F;   /* texte orange / erreur sur fond clair : 5,71 blanc · 5,28 crème */
  --field-line:  #8389A0;   /* bordure de champ au repos : 3,47 blanc · 3,21 crème */
  ```
- Les autres pages n'ont pas de `:root` : écrire les hex en dur, comme le reste de leur CSS.
- À faire par l'agent principal : reporter ces deux jetons dans `MEMO-SITE.md` §5 (rôle « encre orange / erreur » et « bordure de champ »), puisqu'ils sortent du seul calculateur.

## 3. Spec de correction (pour Dev)

### A. Pastille orange (texte orange sur fond clair)

| Fichier | Ligne | Sélecteur | Avant → Après | Ratio obtenu |
|---|---|---|---|---|
| `index.html` | 152 | `.tag-orange` | `color: #FF914D` → `color: var(--orange-ink)` | 1,89 → **4,84** (crème) · 5,20 (blanc) |
| `formations.html` | 58 | `.tag-orange` | `color:#FF914D` → `color:#A84B0F` | 1,96 → **5,02** (fond `.16` sur blanc) |
| `formations.html` | 849 | `<span class="tag tag-orange" style="…">` | supprimer **uniquement** `color:#d9662a;` de l'attribut `style` (fond et bordure inline conservés) | 3,25 → **5,20** |

Fond et bordure des pastilles inchangés : le texte fonce, la pastille garde son aspect.

Même défaut, petite taille (13 px gras), 5 pages légales :

| Fichier | Ligne | Sélecteur | Avant → Après | Ratio |
|---|---|---|---|---|
| `conditions-utilisation.html` | 18 | `.legal-back` | `color:#FF914D` → `color:#A84B0F` | 2,06 → **5,28** (crème) |
| `mentions-legales.html` | 18 | `.legal-back` | idem | idem |
| `politique-cookies.html` | 18 | `.legal-back` | idem | idem |
| `vie-privee.html` | 18 | `.legal-back` | idem | idem |
| `plan-du-site.html` | 19 | `.legal-back` | idem | idem |

### B. Ligne basse du footer

| Fichier | Lignes | Élément | Avant → Après | Ratio |
|---|---|---|---|---|
| `index.html` | 1341 (`<p>` ©2026), 1343-1347 (5 liens) | attributs `style` | `color:rgba(255,255,255,0.3)` → `color:rgba(255,255,255,0.5)` (6 occurrences) | 2,60 → **4,65** |

Valeur identique à `.footer-bottom p` / `.footer-bottom a` des 30 autres pages : le footer de l'accueil s'aligne sur le reste du site. Ne pas toucher aux autres pages.

### C. Bordures de champs (critère 1.4.11)

| Fichier | Ligne | Sélecteur | Avant → Après | Ratio |
|---|---|---|---|---|
| `contact.html` | 105 | `.form-field input, .form-field select, .form-field textarea` | `border:1.5px solid #E8E6E0` → `border:1.5px solid #8389A0` | 1,15 → **3,21** (champ crème) · 3,47 contre la carte blanche |
| `contact.html` | 106 | `…:focus` | `border-color:#FF914D` → `border-color:#1E2952` (halo `box-shadow` orange conservé) | voir note |
| `formations.html` | 182 | `.form-field input` | `border:1.5px solid #E8E6E0` → `border:1.5px solid #8389A0` | 1,25 → **3,47** |
| `formations.html` | 183 | `.form-field input:focus` | `border-color:#FF914D` → `border-color:#1E2952` | voir note |
| `index.html` | 670 | `#newsletter-form input` | `border: 1.5px solid var(--line)` → `border: 1.5px solid var(--field-line)` | 1,25 → **3,47** |
| `blog.html` | 113 | `.blog-search-box input` | `border:1px solid #E8E6E0` → `border:1px solid #8389A0` | 1,25 → **3,47** contre le fond blanc du champ |
| `blog.html` | 539 | `<input>` newsletter, attribut `style` | `border:1.5px solid #E8E6E0` → `border:1.5px solid #8389A0` | 1,25 → **3,47** |
| `blog.html` | 541 | même `<input>`, `onblur` | `'#E8E6E0'` → `'#8389A0'` | (même état repos) |
| `blog.html` | 540 | même `<input>`, `onfocus` | `'#2EC4B6'` → `'#12786F'` | 2,0 → **5,33**, aligné sur `index.html` l.675 |

Note focus : avec une bordure de repos à `#8389A0`, une bordure de focus orange `#FF914D` (2,23:1) serait **plus claire** qu'au repos : le focus paraîtrait s'effacer. Le navy, avec le halo orange existant, reprend exactement le traitement du calculateur (`.calc-input:focus`). `index.html` l.675 (`--teal-dark`, 5,33:1) est déjà correct : on n'y touche pas.

Remarque `blog.html` l.113 : la recherche est posée sur `.bg-yellow-band` (`#FFDE59`). La bordure fait 3,47:1 contre l'intérieur blanc du champ (conforme), mais seulement 2,62:1 contre le jaune. Je recommande d'en rester là : passer en navy changerait l'aspect au-delà du nécessaire.

### D. Messages de la newsletter (erreur hors charte, états sur crème)

| Fichier | Ligne | Avant → Après | Fond | Ratio |
|---|---|---|---|---|
| `index.html` | 1460 | `msg.style.color = '#EF4444'` → `'#A84B0F'` | blanc | 3,76 → **5,71** |
| `index.html` | 1464 | idem | blanc | idem |
| `blog.html` | 575 | `'#EF4444'` → `'#A84B0F'` | crème | 3,48 → **5,28** |
| `blog.html` | 579 | idem | crème | idem |
| `blog.html` | 571 | succès `'#2EC4B6'` → `'#12786F'` | crème | 2,00 → **4,93** (aligné sur `index.html` l.1456) |
| `blog.html` | 563 | « Envoi en cours » `'#6B7280'` → `'#374151'` | crème | 4,47 → **9,53** (aligné sur `index.html` l.1448) |

`index.html` l.1448 (`#374151`) et l.1456 (`#12786F`) sont déjà conformes : on n'y touche pas.

### E. Gris `#6B7280` / `--muted` posé sur crème

Règle : là où le gris tombe sur crème, il passe à `#374151` (texte charte). Sur blanc, il reste tel quel (4,83:1 ✓). Quand un sélecteur sert sur les deux fonds, on ajoute une règle ciblée au lieu de modifier la règle de base.

| Fichier | Ligne | Sélecteur | Avant → Après | Ratio |
|---|---|---|---|---|
| `index.html` | après 507 | **ajout** `.comp-table tbody tr:nth-child(odd) td.td-other { color: var(--text); }` | lignes impaires sur crème (l.506) ; lignes paires blanches inchangées | 4,47 → **9,53** |
| `clients.html` | après 64 | **ajout** `.bg-cream .section-head p { color:#374151; }` | section crème l.666 ; section blanche l.684 inchangée | 4,47 → **9,53** |
| `formations.html` | après 80 | **ajout** `.bg-cream .section-head p { color:#374151; }` | section crème l.305 ; manutention (blanc) inchangée | 4,47 → **9,53** |
| `faq.html` | 131 | `.faq-category-head p` | `color:#6B7280` → `color:#374151` (toujours dans la section crème l.241) | 4,47 → **9,53** |
| `blog.html` | 530 | `<p>` de la newsletter, attribut `style` | `color:#6B7280` → `color:#374151` | 4,47 → **9,53** |
| `conditions-utilisation.html` | 21 | `.legal-dates` (body crème) | `color:#6B7280` → `color:#374151` | 4,47 → **9,53** |
| `vie-privee.html` | 21 | `.legal-dates` | idem | idem |
| `plan-du-site.html` | 29 | `ul ul li` | `color:#6B7280` → `color:#374151` | 4,47 → **9,53** |

Vérifiés sur fond blanc, donc **sans modification** : `index.html` `.bc-label`, `.card-source`, `.b6-preview-tag`, `.b6-preview-label`, `.testi-role` ; `apropos.html` `.feature-card p`, `.valeur-card p`, `.team-zone` ; `blog.html` `.article-card p`, `.blog-empty` ; `formations.html` `.conditions-bar p`, `.modal-sub`.

## 4. Responsive

Aucune taille, marge, graisse ni mise en page modifiée : seules les couleurs changent. Le comportement à 375 / 768 / 1280 px reste identique. Les règles ajoutées (E) ne dépendent d'aucune media query.

## 5. Contrôles pour Dev après intégration

```
grep -n "rgba(255,255,255,0.3)" index.html                  # → 0
grep -nE "#EF4444" index.html blog.html                      # → 0
grep -nE "\.tag-orange \{" index.html formations.html        # → couleur #A84B0F / var(--orange-ink)
grep -n "d9662a" formations.html                             # → 0
grep -n "legal-back {" *.html                                # → 5 × #A84B0F
grep -nE "border:1(\.5)?px solid #E8E6E0" contact.html formations.html blog.html   # → plus aucun champ (cartes et séparateurs restent en #E8E6E0, c'est voulu)
```
Les bordures décoratives (`.form-card`, `.article-card`, `.tag-row`, séparateurs) restent en `#E8E6E0` : ce ne sont pas des composants interactifs, le critère 1.4.11 ne s'y applique pas.

## 6. Bilan chiffré

- **15 fichiers** : `index.html`, `formations.html`, `contact.html`, `blog.html`, `clients.html`, `faq.html`, et les 5 pages légales (`conditions-utilisation`, `mentions-legales`, `politique-cookies`, `vie-privee`, `plan-du-site`). Pas de footer à corriger hors `index.html`.
- **~25 points d'intervention** : 2 jetons ajoutés (index), 9 sélecteurs CSS modifiés, 3 règles ajoutées, 6 styles inline du footer, et 3 attributs inline + 6 couleurs JS dans les newsletters.

## 7. Hors spec, à arbitrer par l'agent principal ou Céline

1. **`#9CA3AF`** (gris clair) : 39 occurrences sur le site, pour des dates, sources, notes et libellés (ex. `.prose p.source` des 23 articles de blog, `.art-date`, `.blog-count`, `.meta-txt`, `.form-note`, `.case-tab`). Il donne **2,54:1 sur blanc, 2,35:1 sur crème ✗**. C'est le défaut le plus répandu du site. Correction suggérée pour un chantier séparé : `#6B7280` sur blanc (4,83), `#374151` sur crème (9,53). Exception : le pictogramme décoratif `.blog-search-box::before`.
2. **Orange de marque `#FF914D` en texte sur fond clair**, en grand (accents de titres `<span style="color:#FF914D">`, `.card-num.c-orange` 48 px) : 2,06 à 2,23:1, sous le seuil de 3:1 du grand texte. C'est un choix identitaire fort ; le passer en `--orange-ink` changerait la marque visible. Décision de Céline.
3. **`.tag-orange-solid`** (`faq.html`, `partenaires.html` ; défini sans usage dans `apropos.html`) sur hero vidéo + voile navy 72 % : entre **2,28:1** (image claire) et **5,83:1** (image sombre). Le ratio dépend de l'image affichée. À vérifier visuellement ; si besoin, texte `#FFDE59` ou blanc.
4. `blog.html` l.154 `.newsletter p` : la classe ne semble pas utilisée (la section porte `id="newsletter"`). C'est probablement du code mort, à signaler à Dev.

## Compléments (retour de Dev)

### 1. `#d9662a` restant dans `formations.html`
Le contrôle `grep d9662a → 0` portait sur la seule ligne 849. Ces deux occurrences ont le même défaut et prennent la même correction :

| Ligne | Sélecteur | Avant → Après | Fond | Ratio |
|---|---|---|---|---|
| 102 | `.pill-orange` | `color:#d9662a` → `color:#A84B0F` | orange 12 % sur blanc (`#FFF2EA`) | 3,25 → **5,20** |
| 190 | `.form-status.error` | `color:#d9662a` → `color:#A84B0F` | modale blanche | 3,57 → **5,71** |

Après intégration, `grep -ni d9662a formations.html` doit renvoyer 0.

### 2. Liens dans le texte de `faq.html` et `formations.html`
Les articles de blog utilisent `.prose a { color:#FF914D; font-weight:700; text-decoration:underline; }`. On garde ce modèle (gras + souligné), mais l'orange brut n'atteint que 2,23:1 sur blanc. On prend donc la couleur selon le fond :

- `faq.html`, après l.122 : `.faq-item .faq-answer a { color:#A84B0F; font-weight:700; text-decoration:underline; text-underline-offset:2px; }` donne **5,71:1** sur la carte blanche.
- `formations.html`, après l.158 : `.cta-section p a { color:#1E2952; font-weight:700; text-decoration:underline; text-underline-offset:2px; }`. Le lien de la l.1422 est posé sur le dégradé orange→jaune, où `#A84B0F` ne donne que 2,56:1 ; le navy donne **6,30:1** sur l'orange et 10,60:1 sur le jaune.

Les deux sélecteurs ne touchent que le contenu : la nav et le footer restent inchangés. Ce ne sont que des couleurs, le responsive ne bouge pas.

À signaler : les liens `.prose a` des 23 articles de blog ont le même défaut (2,23:1). La correction serait `color:#A84B0F`, dans un chantier à arbitrer.
