# Décisions — chantier `refonte-charte` du calculateur (2026-10-04)

Arbitrages de l'agent principal, dont 4 validés par Céline le 2026-10-04. Ce fichier prime sur les livrables des agents en cas de contradiction.

## Validé par Céline

1. **Méthode de calcul sourcée** (livrable Données §méthode) : coûts calculés à partir des arrêts déclarés (jours × coût journalier S02/S06), présentéisme (S29/S33) et coûts indirects (S03) affichés comme hypothèses UP TO MOVE, comparaison sectorielle S26. Toutes les fausses attributions INRS / Assurance Maladie sont retirées (S09, S10, S12, S14, S17, S18, S20).
2. **ROI : scénarios de réduction 10 / 20 / 30 %**, étiquetés « hypothèse UP TO MOVE », avec le repère sourcé S31 (2,2 € par € investi, AISS/DGUV 2011) présenté comme contexte général, pas comme résultat UP TO MOVE.
3. **Formulaire PDF : les 6 champs restent obligatoires** (prénom, nom, fonction, entreprise, email, téléphone). Endpoint Formspree `mljrlnqe` et noms de champs inchangés.
4. **Le tarif UP TO MOVE n'est pas affiché** (S13 retiré) : le ROI s'exprime en économie potentielle en € par scénario, sans ratio « ×N » ni coût de la démarche.

## Arbitré par l'agent principal (dans le périmètre de la prévisualisation, à confirmer par Céline lors de la validation)

5. Structure UX/UI retenue : 3 étapes avec saisie (Entreprise → Équipes → Absentéisme et prévention), résultats affichés directement (l'écran « rapport offert » disparaît).
6. Le PDF garde le formulaire de téléchargement, mais dans un panneau intégré à la page (spec UX/UI) plutôt qu'une modale, avec les 6 champs obligatoires de la décision 3.
7. Champs cachés Formspree ajoutés : effectif et niveau de risque (en plus du coût estimé et du secteur).
8. Export de leads caché (`#export`, `localStorage`) supprimé : `saveLead` n'est jamais appelé, la fonction exportait une liste vide.
9. Formations recommandées : uniquement des formations qui existent dans `formations.html` ; les intitulés « Debout prolongé » et « Conduite » inventés sont remplacés par les formations réelles les plus proches. Durées et pourcentages de pratique alignés sur `formations.html`.
10. Liens du PDF : `https://www.uptomove.fr/...` (et non `uptomove-site.vercel.app`).
11. Jetons Design `--orange-ink #A84B0F` et `--field-line #8389A0` acceptés, échelle de risque sans rouge acceptée.
12. FAQ courte visible acceptée (3 à 5 questions, réponses sourcées), sous la section « Comment est calculé ce résultat ».

## Hors chantier (à signaler à Céline, agents du site)

- Bloc « Exemple de restitution » de l'accueil (128 400 €, 32 jours) : à recalculer avec la nouvelle méthode.
- Article `blog-calculateur-cout-cache-tms.html` : reprend les fausses attributions INRS, accents manquants dans les CTA, concurrence de mots-clés avec la page outil.
- Liens entrants proposés par SEO (articles arrêts maladie, rentrée 2026, FAQ, formations).
- Défauts de contraste relevés par Design sur `index.html` (`.tag-orange`, bas du footer), `contact.html`, `formations.html`.
- Fichiers internes publiquement accessibles (`/CLAUDE.md`, `/MEMO-SITE.md`, `/ETAT.md`, `/.claude/…`).

## Arbitrages après passage 2 (CR + Données)

13. **Durée moyenne d'arrêt : champ obligatoire, sans option « Je ne sais pas »**. Le défaut de 90 jours (S34, arrêts liés au dos) n'est pas représentatif de l'ensemble des TMS et quadruple le résultat. Aide sous le champ : une estimation suffit. Dev n'intègre pas le texte CR de la valeur par défaut « durée » ni la case correspondante ; S34 n'est pas utilisé.
14. Seuils de variante sectorielle 0,90 / 1,10 acceptés ; valeur affichée = valeur calculée par `repereSectoriel` (industrie 1,89).
15. Formations : « Debout » → formations Manutention ; « Conduite » → formats non spécifiques au geste (proposition CR acceptée).
16. Niveau de risque fondé sur l'indice de profil (seuils 1,5 / 2,0, hypothèse) accepté ; le cas type passe en « élevé ».
17. Téléphone retiré du pied de PDF tant que Céline ne l'a pas confirmé. Échec de génération du PDF : message invitant à écrire à info@uptomove.fr (adresse déjà publiée sur le site).
18. Option cotisation AT/MP : hors chantier (piste pour une prochaine version).
