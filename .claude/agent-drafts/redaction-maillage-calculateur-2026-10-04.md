# CR — Maillage interne vers le calculateur TMS — chantier « maillage-calculateur »

Date : 2026-10-04 · Agent : CR (rédaction) · Skill `redaction-celine` appliquée
Source des emplacements : `calc-seo-keywords-refonte-charte-2026-10-04.md` §3.2 (transmis par l'agent principal).
Aucun fichier `.html` modifié. Lien à poser partout : `href="calculateur-tms-web"` (relatif, sans `.html`).
Convention : le texte entre [crochets] est l'ancre du lien. Le reste du paragraphe est à conserver tel quel, sauf mention contraire.

Cadre de fond respecté : le calculateur part des arrêts de travail déclarés et donne un ordre de grandeur indicatif du coût annuel, un niveau de risque et un repère sectoriel (Assurance Maladie, données 2024). Aucun chiffre ajouté, aucune autre promesse. Les ancres sont toutes différentes d'une page à l'autre.

---

## 1. Ancres et phrases à insérer

### 1.1 `blog-calculateur-cout-cache-tms.html`, l. 190 (ancre seule)

Remplacer uniquement l'ancre « la page du calculateur » (le reste de la ligne est inchangé, l'article fera l'objet d'un chantier séparé).

- Avant : `accessible directement sur <a href="calculateur-tms-web">la page du calculateur</a>, qui se complète…`
- Après : accessible directement sur la page du [calculateur des coûts cachés des TMS], qui se complète…

### 1.2 `blog-arrets-maladie-plafonnes-septembre-2026.html`, l. 208 (Conclusion)

Ajouter une phrase à la fin du paragraphe de conclusion, après « …plutôt que dans la seule gestion des arrêts. » et avant `</p>`.

Texte à ajouter :
> Pour situer le poids de ces arrêts dans votre propre structure, vous pouvez [estimer le coût de vos arrêts de travail liés aux TMS] et obtenir un ordre de grandeur indicatif, avec un repère sectoriel issu des données 2024 de l'Assurance Maladie.

Option (décision UX/UI, non rédactionnelle) : second bouton dans le bloc CTA final l. 232, libellé « Estimer mon coût TMS → ».

### 1.3 `blog-rentree-2026-tms-ce-quil-faut-anticiper.html`, l. 192-196 (liste « Ce que cela signifie concrètement… »)

Ajouter un 4e `<li>` après le 3e (« Le lien avec le médecin du travail… », l. 195), avant `</ul>` (l. 196). Même construction que les items existants (intitulé en gras + question).

> **Le coût des TMS** est-il évalué, même en ordre de grandeur ? À partir de vos arrêts de travail déclarés, vous pouvez [chiffrer le coût des TMS dans votre entreprise] et le comparer au repère de votre secteur.

### 1.4 `faq.html`, l. 255 (réponse « Pourquoi la prévention des TMS est-elle un enjeu majeur en entreprise ? »)

Ajouter une phrase à la fin de la réponse, après « …une meilleure performance de l'entreprise. » et avant `</p>`.

> Pour [estimer ce coût pour votre entreprise], notre calculateur part de vos arrêts de travail déclarés et vous donne un ordre de grandeur indicatif.

**Attention Dev / SEO** : cette réponse est dupliquée dans le JSON-LD `FAQPage` (l. 23). Ajouter la même phrase, sans balise `<a>`, à la fin du champ `"text"` pour que le balisage reste identique au texte visible.

Option (si UX/UI valide l'ajout d'une question, emplacement à décider par UX/UI) :
- Question : Combien coûtent les TMS à mon entreprise ?
- Réponse : Notre [calculateur des coûts liés aux TMS] part des arrêts de travail déclarés dans votre entreprise. Il vous donne un ordre de grandeur indicatif du coût annuel, un niveau de risque et un repère sectoriel établi à partir des données 2024 de l'Assurance Maladie. Il s'agit d'une estimation et non d'un audit.
- Si cette question est ajoutée, SEO doit l'ajouter au JSON-LD `FAQPage` (texte identique, sans lien).

### 1.5 `blog-argent-sur-votre-dos.html`, l. 194-198 (bloc « Articles liés »)

Ajouter un `<li>` après la ligne `blog-calculateur-cout-cache-tms` (l. 197), avant `</ul>` (l. 198) :

> [Calculateur TMS : le coût des arrêts dans votre entreprise]

(lien vers `calculateur-tms-web`, même format que les autres items de la liste)

### 1.6 `blog-pst-5-2026-2030.html`, l. 202 (puce « TMS : » de « Ce que cela signifie concrètement pour votre entreprise »)

Ajouter une phrase à la fin de la puce, après « …vous place en avance de phase. » et avant `</li>`.

> Pour savoir par où commencer, vous pouvez [mesurer le coût des TMS dans votre entreprise] à partir de vos arrêts de travail déclarés.

### 1.7 `blog-pst5-lancement-officiel-2026.html`, l. 195 (« Ce que cela signifie pour votre entreprise »)

Ajouter une phrase à la fin du paragraphe, après « …plutôt que d'attendre la publication du détail opérationnel du plan. » et avant `</p>`.

> Un premier repère utile consiste à [évaluer ce que coûtent aujourd'hui les TMS à votre entreprise], en ordre de grandeur, à partir de vos arrêts de travail déclarés.

### 1.8 `blog-5-gestes-manageriaux-tms-rps.html`, l. 209 (Conclusion)

Ajouter une phrase à la fin du paragraphe, après « …d'une posture managériale consciente et formée. » et avant `</p>`.

> Pour défendre cette démarche en interne, il peut être utile d'[estimer le coût annuel des arrêts liés aux TMS] dans votre entreprise et de le situer par rapport à votre secteur.

(L'apostrophe de « d' » reste hors du lien : `d'<a href="calculateur-tms-web">estimer le coût annuel des arrêts liés aux TMS</a>`.)

### 1.9 `blog-ateliers-tms-conformes-tracables-2026.html`, l. 215 (Conclusion)

Ajouter une phrase à la fin du paragraphe, après « …auprès de vos salariés et des organismes de contrôle. » et avant `</p>`.

> Avant de planifier vos prochains ateliers, notre calculateur vous permet de [connaître le niveau de risque TMS de votre entreprise], ainsi qu'un ordre de grandeur du coût annuel de vos arrêts liés aux TMS.

### 1.10 `formations.html`, l. 1419-1424 (bloc CTA final « Prêt à protéger vos équipes ? »)

Ajouter un paragraphe après le `<p>` existant (l. 1420, « Devis personnalisé gratuit sous 48h… ») et avant `<div class="cta-buttons">` (l. 1421).

> Combien vous coûtent les TMS ? [Calculez-en l'ordre de grandeur à partir de vos arrêts de travail] avant de demander votre devis.

(Emplacement alternatif proposé par SEO, « avant le catalogue », non retenu ici pour garder un seul lien sur la page ; à arbitrer par UX/UI si besoin.)

---

## 2. Corrections d'accents (blocs CTA de fin d'article)

Texte corrigé, identique pour les 7 articles (le paragraphe reprend mot pour mot la version déjà accentuée de `faq.html` l. 525) :

- `<h2>` : Envie d'agir sur la prévention des TMS dans votre entreprise ?
- `<p>` : Contactez-nous directement, nous vous répondons sous 48h avec un diagnostic personnalisé.

| Fichier | `<h2>` | `<p>` |
|---|---|---|
| `blog-arrets-maladie-plafonnes-septembre-2026.html` | l. 230 | l. 231 |
| `blog-rentree-2026-tms-ce-quil-faut-anticiper.html` | l. 223 | l. 224 |
| `blog-argent-sur-votre-dos.html` | l. 216 | l. 217 |
| `blog-pst-5-2026-2030.html` | l. 232 | l. 233 |
| `blog-pst5-lancement-officiel-2026.html` | l. 219 | l. 220 |
| `blog-5-gestes-manageriaux-tms-rps.html` | l. 237 | l. 238 |
| `blog-ateliers-tms-conformes-tracables-2026.html` | l. 240 | l. 241 |

Fautes corrigées : « prevention » → « prévention », « repondons » → « répondons », « personnalise » → « personnalisé ».
`faq.html` et `formations.html` : rien à corriger dans les passages concernés.

Les numéros de ligne de §2 sont ceux d'avant les insertions de §1 : appliquer §2 d'abord, ou relocaliser par le texte.

---

## 3. Signalements (hors périmètre de cette mission, à router par l'agent principal)

- **Pied de page** : « Prevention-sante des TMS en entreprise. » → « Prévention-santé des TMS en entreprise. » dans `blog-arrets-maladie…` l. 282, `blog-rentree-2026…` l. 275, `blog-argent-sur-votre-dos` l. 268, `blog-pst-5-2026-2030` l. 284, `blog-pst5-lancement-officiel-2026` l. 271, `blog-5-gestes-manageriaux-tms-rps` l. 289, `blog-ateliers-tms…` l. 292 (probablement présent sur d'autres pages du site, à vérifier par grep).
- **Meta descriptions / og / twitter / JSON-LD sans accents** (périmètre SEO) : `blog-rentree-2026…` l. 7, 13, 18, 31 ; `blog-pst-5-2026-2030` l. 7, 13, 18, 31 ; `blog-ateliers-tms…` l. 7, 13, 18, 31.
- **og:url / mainEntityOfPage avec `.html`** dans `blog-argent-sur-votre-dos.html` (l. 15, 30), incohérent avec les canoniques sans `.html` (périmètre SEO).
- **`blog-calculateur-cout-cache-tms.html`** : non traité au-delà de l. 190, comme demandé. Pour mémoire, le CTA l. 253 contient un tiret long, à reprendre dans le chantier séparé.
- **Chiffres existants non vérifiés ici** : les pages modifiées contiennent des statistiques déjà en ligne (« 87% » dans `faq.html` l. 255, « plus de 80 % » dans `blog-arrets…` l. 196 avec une source INRS « Travail sur écran »). Je ne les ai ni modifiées ni vérifiées ; les phrases ajoutées n'en dépendent pas.
