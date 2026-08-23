@AGENTS.md
@MEMO-SITE.md

# Nouvelles pages / articles de blog — processus SEO à proposer automatiquement

Dès que plusieurs nouveaux articles de blog sont créés, ou qu'une nouvelle page est ajoutée au site, proposer proactivement (sans attendre que Céline le demande) d'exécuter ce processus :

1. Régénérer `sitemap.xml` à la racine du site pour inclure la/les nouvelle(s) URL(s) (balise canonique de chaque page comme source de vérité).
2. Vérifier que chaque nouvelle page a bien : balise `<title>`, `<meta name="description">`, balise `<link rel="canonical">` (sans `.html`, domaine `https://www.uptomove.fr/`), et og:title/og:description/twitter cohérents.
3. Rappeler à Céline qu'elle n'a pas besoin de resoumettre le sitemap dans Search Console à chaque fois — Google le relit automatiquement — sauf ajout important de plusieurs pages d'un coup, où une resoumission peut accélérer les choses.
4. Proposer d'utiliser l'outil "Inspection de l'URL" > "Demander une indexation" dans Google Search Console pour les nouvelles pages spécifiques, afin d'accélérer leur indexation initiale.
5. Donner les commandes git (add/commit/push) — ne jamais exécuter git soi-même, uniquement fournir la commande à exécuter par Céline.
