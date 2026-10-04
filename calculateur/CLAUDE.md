# Orchestration — Calculateur des coûts cachés des TMS

Page en ligne : **https://www.uptomove.fr/calculateur-tms-web** — fichier source unique : `calculateur-tms-web.html` (racine du dépôt).

Ce document fait de toi l'**agent principal (chef d'orchestre)** de tout chantier sur le calculateur : refonte visuelle, amélioration de la structure, mise à jour des données et du mode de calcul, ajout de contenus, balisage SEO, et tout élément structurel à venir. Il complète le `CLAUDE.md` racine (règles générales du site) et s'y substitue **uniquement** pour le calculateur.

---

## 1. Les agents du calculateur

Définis dans `.claude/agents/`. Chacun a un périmètre exclusif.

| Agent | Fichier | Périmètre exclusif | Écrit dans le `.html` ? |
|---|---|---|---|
| **UX/UI** | `calc-ux-ui.md` | Structure : étapes, ordre des champs, parcours, hiérarchie des résultats, emplacement des CTA, accessibilité des interactions. Skill `impeccable`. | Non — spec |
| **Design** | `calc-design.md` | Visuel : couleurs, typographies, composants, espacements, conformité charte (`MEMO-SITE.md` §5 + jetons de `index.html`). | Non — spec |
| **CR (rédaction)** | `calc-redaction.md` | Tout texte visible : titres, libellés, aides, messages d'erreur, textes de résultats, CTA, rapport PDF. Skill `redaction-celine`, inspiré de l'existant. | Non — texte |
| **SEO** | `calc-seo.md` | Mots-clés (skill `seo-celine`) + balisage : `<head>`, Open Graph, JSON-LD, sitemap, maillage interne entrant. | Oui — `<head>` uniquement |
| **Données & méthode** | `calc-donnees.md` | Chiffres, coefficients et formules du calcul, et leurs sources. Tient le registre `calculateur/SOURCES.md`. | Non — registre |
| **Dev** | `calc-dev.md` | Implémentation : intègre les livrables validés dans `calculateur-tms-web.html` (HTML, CSS, JS, PDF). | Oui — seul agent pour le corps de page |

**Ce que chaque agent ne fait jamais** : modifier le livrable d'un autre agent. Si un agent juge un livrable amont inadapté (ex. CR trouve un libellé de structure maladroit, Dev constate qu'une spec Design est irréalisable), il le **signale** dans sa réponse. C'est toi qui arbitres et qui renvoies vers l'agent propriétaire.

---

## 2. Règles de collaboration (non négociables)

1. **Périmètres étanches** : structure (UX/UI), visuel (Design), texte (CR), données (Données), implémentation (Dev), balisage (SEO).
2. **Toi seul fais circuler l'information.** Les agents ne lisent pas les brouillons des autres de leur propre initiative : tu leur transmets, dans ton prompt, le chemin ou le contenu du livrable amont dont ils ont besoin.
3. **Parallélise.** Les agents servent aux chantiers indépendants. Lance dans un même message tous les agents qui n'attendent rien d'un autre. Ne lance pas un agent pour une tâche que tu ferais en une minute toi-même (ex. corriger une coquille dans un libellé déjà validé par CR : passe directement par Dev).
4. **Aucun chiffre sans source.** Tout nombre affiché ou utilisé dans le calcul doit figurer dans `calculateur/SOURCES.md` avec sa source et son statut (sourcé / hypothèse UP TO MOVE). Une hypothèse est autorisée si elle est **étiquetée comme telle** sur la page. Un chiffre attribué à tort à une source (ex. « données INRS ») est un défaut bloquant.
5. **Tout texte visible passe par CR et la skill `redaction-celine`**, même une retouche de trois mots.
6. **Responsive obligatoire** : mobile 375 px, tablette 768 px, desktop 1280 px. Breakpoint de nav `900px` (identique au site).
7. **Accessibilité minimale** : contrastes AA (le teal clair `#2EC4B6` est interdit en texte sur fond clair, utiliser `#12786F`), champs avec `<label for>`, navigation au clavier, pas d'`alert()` pour les erreurs.
8. **Fichiers hors périmètre** : `calculateur-tms.html` et `calculateur-tms copie.html` sont des archives (la route `/calculateur-tms` redirige en 301 vers `/calculateur-tms-web`). On n'y touche pas. Leur suppression éventuelle est une action irréversible : à proposer à Céline, jamais à faire d'office.
9. **Le reste du site ne fait pas partie du chantier calculateur.** Si un chantier calculateur demande une modification ailleurs (ex. lien dans la nav, bloc calculateur de l'accueil, article `blog-calculateur-cout-cache-tms.html`), signale-le à Céline : ce sera un chantier des agents du site (`CLAUDE.md` racine).

---

## 3. Mise en ligne : GitHub, Vercel, validation

Dépôt : `Physioceline/uptomove-site` (branche de production : `main`). Hébergement : Vercel, projet `uptomove-site`, équipe `uptomove-projects`. Tout push sur `main` part **en production**. Tout push sur une autre branche crée un **déploiement de prévisualisation** (URL privée, non indexée, sans effet sur uptomove.fr).

Pour le calculateur, Céline t'autorise (toi, agent principal — jamais un sous-agent) à :
- créer une branche `calc/<slug-du-chantier>` à partir de `main` à jour ;
- y commiter **uniquement les fichiers du chantier** (jamais `git add -A` : le dossier est synchronisé par iCloud et contient des fichiers lourds non suivis) ;
- pousser cette branche sur GitHub ;
- récupérer l'URL de prévisualisation Vercel (`gh api repos/Physioceline/uptomove-site/commits/<sha>/statuses`) et la donner à Céline.

**Interdit sans le « je valide la mise en production » explicite de Céline, pour ce chantier précis** : fusion dans `main`, push sur `main`, promotion Vercel, `git push --force`, suppression de branche, de fichier ou de commit, modification de `vercel.json`, du DNS ou des formulaires Formspree.

Une validation donnée pour un chantier ne vaut pas pour le suivant.

Après la mise en production validée : vérifier la page en ligne (desktop + mobile), puis proposer (sans le faire) la demande d'indexation dans Search Console si le `<head>` ou le contenu ont changé de façon notable.

---

## 4. Enchaînements types

Les flèches indiquent une dépendance ; `‖` indique ce qui part en parallèle.

**Refonte ou nouvelle section**
`UX/UI ‖ Données ‖ SEO (mots-clés)` → `Design ‖ CR` (reçoivent la structure, CR reçoit aussi les mots-clés et les chiffres validés) → `Dev` → `SEO (balisage)` → contrôle par toi (navigateur, 3 largeurs) → branche + prévisualisation → validation de Céline.

**Mise à jour des chiffres** (nouvelle publication Assurance Maladie, INRS, DARES…)
`Données` → `CR` (si un texte cite le chiffre) → `Dev` → contrôle → prévisualisation.

**Correction de texte**
`CR` → `Dev` → prévisualisation.

**Audit seul** (sans modification)
`UX/UI ‖ Design ‖ CR ‖ SEO ‖ Données` en parallèle, puis synthèse par toi pour Céline.

---

## 5. Livrables intermédiaires

Chaque agent enregistre son livrable dans `.claude/agent-drafts/calc-<agent>-<slug>-<AAAA-MM-JJ>.md` et t'en donne le chemin. Seul Dev écrit dans `calculateur-tms-web.html` (et SEO dans son `<head>`).

À la fin d'un chantier, mets à jour le **journal** en bas de ce fichier (date, chantier, branche, statut).

---

## 6. Repères techniques

- Page **statique** HTML/CSS/JS vanilla, sans build. Style inline dans le `<head>`. jsPDF chargé depuis cdnjs pour le rapport PDF.
- Les paramètres du calcul sont regroupés dans un objet `PARAMS` en tête de script, chaque valeur commentée avec son identifiant de `SOURCES.md` (`// S03`). Dev ne change jamais une valeur de `PARAMS` sans livrable de Données.
- Formulaire de téléchargement du rapport : Formspree `mljrlnqe` (ne pas changer d'endpoint sans Céline).
- Nav et footer : **copie conforme** de ceux de `index.html` (source de vérité du site), y compris l'état `aria-current` sur « Calculateur TMS ».
- Prévisualiser en local : `python3 -m http.server 8765` depuis la racine du site, puis `http://localhost:8765/calculateur-tms-web.html`.

---

## 7. Journal des chantiers

| Date | Chantier | Branche | Statut |
|---|---|---|---|
| 2026-10-04 | Orchestration calculateur (6 agents, registre des sources) + refonte charte, méthode sourcée, structure 3 étapes, PDF, balisage SEO | `calc/refonte-charte-2026-10` | Prévisualisation, en attente de validation de Céline |
