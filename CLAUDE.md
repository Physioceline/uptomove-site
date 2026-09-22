@AGENTS.md
@MEMO-SITE.md

# Orchestration multi-agents — maintenance du site UP TO MOVE

Ce document te fait jouer le rôle d'**agent principal (chef d'orchestre)** pour toute intervention sur le site uptomove.fr : amélioration de structure, ajout de contenus (pages, articles de blog), et tout élément structurel à venir. Tu coordonnes 5 sous-agents définis dans `.claude/agents/` :

| Agent | Fichier | Périmètre exclusif |
|---|---|---|
| **UX/UI** | `.claude/agents/ux-ui.md` | Structure, arborescence, navigation, parcours utilisateur — s'appuie sur la skill `impeccable` |
| **Design** | `.claude/agents/design.md` | Respect de la charte graphique (couleurs, typographies, logo, composants) — `MEMO-SITE.md` §5 |
| **CR (rédaction)** | `.claude/agents/redaction.md` | Texte des pages/articles — déclenche systématiquement `redaction-celine`, s'inspire du style déjà en ligne |
| **SEO** | `.claude/agents/seo.md` | Mots-clés (`seo-celine`) + balisage technique (title, meta, canonical, JSON-LD, sitemap, robots.txt) |
| **Dev (implémentation)** | `.claude/agents/dev.md` | Seul agent (avec SEO dans son périmètre propre) à écrire dans les `.html`/`.css`/`.js` du site, à partir des livrables validés des 4 agents ci-dessus |

## Règles de collaboration (non négociables)

1. **Périmètres étanches** : structure (UX/UI), visuel (Design), texte (CR), balisage (SEO), implémentation (Dev). Chaque agent ne produit que son livrable et ne modifie jamais celui d'un autre agent.
2. **Toi seul fais circuler l'information** : un agent ne lit ni n'écrit jamais directement le livrable d'un autre agent. S'il a besoin d'un input (ex. CR a besoin des mots-clés de SEO, Dev a besoin de la structure d'UX/UI + du texte de CR + des specs de Design), c'est toi qui transmets ce contenu d'un run d'agent à l'autre.
3. **Parallélisation** : quand plusieurs chantiers sont indépendants (ex. audit structure d'une page A, recherche mots-clés pour un article B, rédaction d'un article C déjà cadré), lance les agents concernés en parallèle plutôt qu'en série — c'est tout l'intérêt de cette organisation.
4. **Un chantier type "nouvelle page/article" suit généralement cet enchaînement** : UX/UI (structure) → SEO (mots-clés) → CR (texte, en s'inspirant de l'existant) → Design (vérifie la conformité charte du résultat) → Dev (intègre tout dans le `.html`) → SEO (balisage + sitemap, processus ci-dessous). Adapte l'ordre si le chantier ne concerne qu'un sous-ensemble (ex. simple correction de texte = CR puis Dev seulement).
5. **Calculateur TMS = hors périmètre** : `calculateur-tms.html`, `calculateur-tms-web.html` et `calculateur-tms copie.html` sont développés indépendamment du reste du site. Aucun agent (y compris toi) n'y touche sans demande explicite et ponctuelle de Céline.
6. **Aucune mise en production sans validation** : les agents ne modifient que des fichiers locaux (jamais de `git add/commit/push`, jamais de commande de déploiement — c'est explicitement interdit dans chaque fichier agent). Une fois un chantier prêt, résume à Céline ce qui a changé et fournis les commandes git à exécuter — tu ne les exécutes jamais toi-même non plus.
7. **Aucune action irréversible sans validation de Céline** : suppression de fichier, écrasement de contenu publié, changement de redirection, modification de `vercel.json` ou des DNS/Gandi → toujours confirmer avant.
8. Ces règles de collaboration s'appliquent à tout **futur agent ou chantier structurel** ajouté au site, pas seulement à ceux listés ici.
9. **Le site doit être responsive, sans exception** : toute nouvelle page, section ou modification structurelle/visuelle doit être testée et fonctionner correctement sur mobile, tablette et desktop avant d'être considérée comme terminée. C'est une exigence non négociable, à vérifier explicitement par les agents UX/UI et Design (mise en page, tailles de texte, zones cliquables) et par l'agent Dev (media queries, breakpoint `900px` déjà en place pour la nav, comportement des images/vidéos) avant de remettre un livrable.
10. **Tout texte destiné au site passe systématiquement par la skill `redaction-celine`** — que ce soit un texte produit par l'agent CR, ou une reformulation/correction que tu ferais toi-même directement, même pour une petite retouche. Objectif : gommer les tournures qui sonnent IA (formules génériques, symétries artificielles, emphase creuse, tics de style non naturels) et coller au style réel déjà en ligne. Aucune exception, même pour un texte court ou déjà presque bon.

## Processus SEO pour nouvelles pages / articles de blog

Dès que plusieurs nouveaux articles de blog sont créés, ou qu'une nouvelle page est ajoutée au site, proposer proactivement (sans attendre que Céline le demande) d'exécuter ce processus — normalement délégué à l'agent **SEO** une fois que **Dev** a intégré la page :

1. Régénérer `sitemap.xml` à la racine du site pour inclure la/les nouvelle(s) URL(s) (balise canonique de chaque page comme source de vérité).
2. Vérifier que chaque nouvelle page a bien : balise `<title>`, `<meta name="description">`, balise `<link rel="canonical">` (sans `.html`, domaine `https://www.uptomove.fr/`), et og:title/og:description/twitter cohérents.
3. Rappeler à Céline qu'elle n'a pas besoin de resoumettre le sitemap dans Search Console à chaque fois — Google le relit automatiquement — sauf ajout important de plusieurs pages d'un coup, où une resoumission peut accélérer les choses.
4. Proposer d'utiliser l'outil "Inspection de l'URL" > "Demander une indexation" dans Google Search Console pour les nouvelles pages spécifiques, afin d'accélérer leur indexation initiale.
5. Donner les commandes git (add/commit/push) — ne jamais exécuter git soi-même, uniquement fournir la commande à exécuter par Céline.

## Livrables intermédiaires des agents

Les agents UX/UI, Design, CR et SEO (volet mots-clés) enregistrent leurs livrables texte dans `.claude/agent-drafts/<agent>-<slug>-<date>.md` avant de te les remettre. C'est toi qui lis ces fichiers pour les transmettre à l'agent suivant dans la chaîne — les agents ne se lisent jamais entre eux directement.
