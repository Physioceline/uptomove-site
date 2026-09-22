# Mémo technique — Site UP TO MOVE (V2)

Dernière mise à jour : 23 août 2026. Ce document sert de référence pour toute intervention future sur le site (par moi ou par un autre outil) : infrastructure, outils, identité visuelle, conventions de code.

## 1. Vue d'ensemble

Site statique HTML/CSS/JS vanilla, sans framework ni étape de build. Chaque page est un fichier `.html` autonome contenant son propre `<style>` inline. Environ 37 pages au total : page d'accueil, formations, clients, à propos, FAQ, contact, calculateur TMS, blog (liste) + 22 articles de blog, plan du site, pages légales (mentions légales, CGU, cookies, vie privée).

## 2. Infrastructure et hébergement

- **Hébergement** : Vercel (plan Hobby), projet `uptomove-site`.
- **Dépôt de code** : GitHub — `https://github.com/Physioceline/uptomove-site` (branche `main`). Chaque `git push` sur `main` déclenche un déploiement automatique sur Vercel.
- **Nom de domaine** : `uptomove.fr`, registrar **Gandi** (transféré depuis Simplébo/SAS en août 2026). Titulaire du compte Gandi : Céline (compte "physioceline").
- **DNS** : Gandi LiveDNS (`ns-237-a.gandi.net`, `ns-34-b.gandi.net`, `ns-106-c.gandi.net`). Enregistrements clés dans la zone DNS :
  - `@ A 76.76.21.21` (Vercel — valeur "legacy" toujours valide ; Vercel propose aussi `216.198.79.1` en alternative plus récente, non obligatoire)
  - `www CNAME cname.vercel-dns.com.` (alternative récente : `e5ad6062b61910f0.vercel-dns-017.com.`)
  - `@ MX 0 uptomove-fr.mail.protection.outlook.com.` (email)
  - `@ TXT "v=spf1 include:spf.protection.outlook.com -all"` (SPF email)
  - `autodiscover CNAME autodiscover.outlook.com.` (email)
- **Email professionnel** : Microsoft 365 / Outlook (pas de Gandi Mail).
- **Configuration Vercel** : fichier `vercel.json` à la racine — contient `"cleanUrls": true` (les pages sont servies sans extension `.html`, ex. `/formations`) et la liste des redirections 301 des anciennes URLs (ex-Simplébo) vers les nouvelles.

## 3. Formulaires — Formspree

Compte Formspree (plan gratuit, projet "MY FIRST PROJECT"), 4 formulaires actifs :
- **Contact** (`contact.html`) → endpoint `formspree.io/f/mzepvaro`
- **Calculateur TMS / téléchargement catalogue** (`calculateur-tms-web.html`) → `formspree.io/f/mljrlnqe`
- **Newsletter** (`index.html` + `blog.html`, même formulaire) → `formspree.io/f/xwleqbzy`
- **Catalogue formations** (`formations.html`) → `formspree.io/f/xgawzyql`

Pas de restriction de domaine configurée (option absente sur le plan gratuit) — les formulaires fonctionnent depuis n'importe quel domaine, y compris `www.uptomove.fr`, sans réglage supplémentaire. Formshield (anti-spam) activé, CAPTCHA désactivé.

## 4. SEO — outils et configuration

- **Google Search Console** : propriété `uptomove.fr` (type "Domaine"), vérifiée via enregistrement DNS TXT.
- **Sitemap** : `sitemap.xml` à la racine, régénéré à la main (liste des URLs canoniques), soumis dans Search Console → Sitemaps.
- **robots.txt** : autorise tout le crawl, référence le sitemap.
- **Balises canoniques** : chaque page a une balise `<link rel="canonical">` pointant vers `https://www.uptomove.fr/<slug>` (sans `.html`, cohérent avec `cleanUrls`).
- **Données structurées (JSON-LD)** sur `index.html` : schéma `ProfessionalService` (nom, adresse, offres) + schéma `WebSite` (contrôle du nom de site affiché par Google).
- **Suivi de performance** : fichier `seo-performance-log.csv` à la racine, alimenté chaque semaine par la tâche planifiée `seo-search-console-weekly` (tous les dimanches 18h, via Claude in Chrome sur Search Console).
- **Processus automatique pour nouvelles pages** : voir `CLAUDE.md` — dès qu'une nouvelle page ou plusieurs articles de blog sont créés, le sitemap doit être régénéré, les balises vérifiées, et une indexation demandée dans Search Console.

## 5. Identité visuelle

### Couleurs
| Rôle | Couleur |
|---|---|
| Bleu marine (texte principal, fond nav/footer) | `#1E2952` |
| Orange (accent, CTA) | `#FF914D` |
| Jaune (accent secondaire, pastille) | `#FFDE59` |
| Fond crème (sections claires) | `#F7F6F2` |
| Fond gris clair (fond de page général) | `#EFEFEF` |
| Texte gris (paragraphes) | `#374151` |

### Typographies (Google Fonts)
Importées via : `Encode+Sans+Compressed:wght@700;800;900` · `Josefin+Slab:wght@700` · `Nunito:wght@300;400;500;600;700;800`
- **Encode Sans Compressed** (700-900) : titres (H1, H2, H3), boutons, éléments de marque.
- **Nunito** (300-800) : corps de texte, paragraphes — police par défaut du `body`.
- **Josefin Slab** (700) : utilisée ponctuellement (pages calculateur TMS, clients) pour des accents.

### Logo et icônes
- Logo principal : `logo-uptomove-web.png` (700×428, fond transparent, wordmark "UP TO MOVE" dans une pilule dégradé orange→jaune avec zone dégradé rouge/rose).
- `favicon.ico` et `apple-touch-icon.png` : générés à partir du logo (remplace un ancien favicon générique sans rapport avec la marque).
- Logo Qualiopi officiel : `logo-qualiopi.png`.
- Logo partenaire : `logo-cci-paris.png` (soutien CCI Paris Île-de-France, affiché en footer).

## 6. Conventions de code

- **Nommage des fichiers blog** : `blog-<slug-descriptif>.html` (pas de dossier séparé).
- **Navigation mobile** : menu hamburger (`.site-nav-toggle` / `.hero-nav-toggle`), nav sticky (`position:sticky; top:0`), breakpoint principal `900px`.
- **Contenu repliable** : pattern natif `<details>/<summary>` utilisé pour les FAQ, tableaux comparatifs, études de cas clients (indexable par Google même replié).
- **Articles liés** : bloc `<h2>Articles liés</h2>` + liste de liens inséré avant `.tag-row` dans chaque article, pour le maillage interne (clusters thématiques : réglementaire 2026, exercices, pathologies).
- **Formulaires** : toujours via Formspree, jamais de backend custom.

## 7. Tâches automatisées

- **`seo-search-console-weekly`** : tous les dimanches 18h, analyse les performances Search Console (7 derniers jours), compare à l'historique (`seo-performance-log.csv`), envoie un constat + recommandations. Nécessite que Claude in Chrome soit connecté (extension installée + session Google active dans Chrome).

## 8. Ce qui reste à surveiller / pistes ouvertes

- Vérifier régulièrement Search Console → Pages, pour repérer d'éventuelles anciennes URLs Simplébo encore indexées et non couvertes par les redirections actuelles de `vercel.json`.
- Le favicon (logo en format large/pilule) reste peu lisible en tout petit format (16×16 px) — envisager à terme une version "icône" simplifiée de la marque si besoin d'une meilleure visibilité dans les résultats Google.
- Fichier `calculateur-tms copie.html` : ancien doublon présent dans le dépôt, canonicalisé vers `calculateur-tms-web` mais jamais nettoyé/supprimé.
- **Dossier local reconnecté au dépôt git le 22/09/2026** : `Documents/Claude/Site` n'avait plus de `.git` local ; il a été réinitialisé et rattaché à `Physioceline/uptomove-site` (`git init -b main` + `git remote add origin` + `git fetch` + `git checkout`). Le dossier est synchronisé via **iCloud Drive** ("fichiers à la demande") : Finder peut lister des fichiers qui ne sont pas réellement téléchargés sur le disque, ce qui avait causé des faux "fichiers manquants" lors de la reconnexion (rien n'était perdu, il fallait juste les retélécharger). À garder en tête pour toute future manipulation en ligne de commande sur ce dossier — vérifier avec `ls`/`cat` plutôt que de se fier à un listing Finder ou à un ancien résultat.
- **`AGENTS.md` est obsolète/erroné — confirmé le 22/09/2026 en consultant directement le dépôt GitHub `Physioceline/uptomove-site` (branche `main`) via Claude in Chrome** : le dépôt est composé à 99,4 % de HTML (0,6 % JS), les fichiers `.html` (`apropos.html`, `blog-*.html`, etc.) sont directement à la racine, il n'y a ni `package.json`, ni `next.config.js`, ni dossier `app/`/`pages/` versionnés. C'est bien un site statique HTML/CSS/JS vanilla, sans Next.js — comme le décrivent ce mémo (§1, §6) et `DEPLOIEMENT.md`. Le contenu de `AGENTS.md` (repris du `create-next-app` initial du projet, non nettoyé) ne reflète plus rien de réel et induit en erreur ; à corriger ou supprimer.
- **Architecture multi-agents** (mise en place le 22/09/2026) : voir `CLAUDE.md` racine — 5 sous-agents dans `.claude/agents/` (UX/UI, Design, CR, SEO, Dev) orchestrés par l'agent principal pour tout chantier de structure/contenu/visuel/balisage. Exigence transversale non négociable : le site doit rester responsive sur tous les livrables.
