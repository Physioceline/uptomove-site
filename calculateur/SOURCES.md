# Registre des données et sources — Calculateur TMS

**Propriétaire : agent `calc-donnees`** (seul à éditer ce fichier). Tout chiffre utilisé dans le calcul ou affiché sur la page doit y figurer.

Statuts : `sourcé` (source primaire lue et citée) · `hypothèse` (choix UP TO MOVE, à afficher comme tel) · `à vérifier` · `attribution erronée` (défaut bloquant).

---

## État initial (relevé le 2026-10-04 dans `calculateur-tms-web.html`, avant audit)

| Id | Valeur actuelle | Usage | Attribution affichée | Statut |
|---|---|---|---|---|
| S01 | 8 500 € | Coût direct par arrêt TMS (`cArrets`) | « données INRS et Assurance Maladie » (mention générale) | à vérifier |
| S02 | 35 000 € | Coût salarial annuel moyen (`cAbs`) | aucune | à vérifier |
| S03 | 1 200 € / salarié | Coûts indirects par salarié (`cIndir`) | aucune | à vérifier |
| S04 | ×1,8 | Majoration du taux d'absentéisme estimé | aucune | à vérifier |
| S05 | 0,35 | Part de l'effectif / de l'absentéisme imputée aux TMS | aucune | à vérifier |
| S06 | 220 j | Jours travaillés par an | aucune | à vérifier |
| S07 | 0,8 à 1,6 | Coefficients par secteur (`sM`) | aucune | à vérifier |
| S08 | 0,7 / 1,6 / 1,3 / 1,1 | Coefficients par type de poste | aucune | à vérifier |
| S09 | 1 + 0,5 × part de femmes | Coefficient sexe | « INRS : les femmes sont 2× plus exposées aux TMS » | à vérifier |
| S10 | 0,7 / 1,0 / 1,8 / 2,2 | Coefficients par tranche d'âge | « INRS : risque ×3 après 45 ans » | à vérifier |
| S11 | −15 % / −7 % | Effet d'un plan de prévention existant / partiel | aucune | à vérifier |
| S12 | 30 % | Réduction de l'absentéisme TMS après formation (ROI) | « données INRS » | à vérifier |
| S13 | 120 € / salarié, plafond 18 000 € | Coût de la démarche UP TO MOVE (ROI) | aucune | hypothèse (tarif interne à confirmer par Céline) |
| S14 | 6 à 18 mois | Délai entre signaux faibles et arrêt | « INRS » | à vérifier |
| S15 | 8 % / 3 % | Seuils arrêts / effectif pour risque élevé / modéré | aucune | à vérifier |
| S16 | −30 % de douleurs « dès les premières semaines » | Texte du CTA risque élevé | aucune | à vérifier |

---

## Registre validé

Audit du 2026-10-04 (chantier `refonte-charte`), méthode validée par Céline le même jour. Formules et PARAMS v2 : §7 du livrable. Détail : `.claude/agent-drafts/calc-donnees-refonte-charte-2026-10-04.md`. Date de consultation de toutes les sources : 2026-10-04.

### Statut des valeurs actuelles

| Id | Valeur actuelle | Statut | Décision |
|---|---|---|---|
| S01 | 8 500 €/arrêt | attribution erronée (introuvable) | Supprimer → remplacé par S02/S06 × durée saisie |
| S02 | 35 000 € | hypothèse non sourcée | Remplacer par 62 113 € (sourcé, voir ci-dessous) |
| S03 | 1 200 €/salarié | hypothèse | Supprimer → redéfini en ratio 0,5 × coût d'absence (hypothèse) |
| S04 | ×1,8 | hypothèse | Supprimer |
| S05 | 0,35 | hypothèse | Supprimer (exposés = part des postes à contraintes saisie) |
| S06 | 220 j | hypothèse (repère légal 218 j, C. trav. L3121-64) | Conserver, étiqueté convention de calcul |
| S07 | sM 0,8–1,6 | hypothèse | Remplacer par S26 (sourcé) |
| S08 | postes 0,7/1,6/1,3/1,1 | hypothèse | Conserver pour le badge de risque uniquement, étiqueté |
| S09 | 1+0,5×F ; « INRS 2× » | attribution erronée | Remplacer par S27 (1,38) ; retirer la mention INRS |
| S10 | âge 0,7/1/1,8/2,2 ; « INRS ×3 après 45 ans » | attribution erronée | Mention à retirer ; coefficients = hypothèse (badge uniquement) |
| S11 | −15 % / −7 % | hypothèse (double compte) | Retirer des coûts ; garder pour le niveau de risque |
| S12 | −30 % « données INRS » | attribution erronée | Remplacer par des scénarios 10/20/30 % étiquetés hypothèse |
| S13 | 120 €/salarié, plafond 18 000 € | **retiré** (décision de Céline du 2026-10-04) | Ni affiché ni utilisé : pas de coût de démarche, pas de ratio ×N |
| S14 | « INRS : 6 à 18 mois » | attribution erronée (introuvable) | Retirer |
| S15 | seuils 8 % / 3 % | hypothèse | Conserver, étiqueté |
| S16 | « −30 % de douleurs » | hypothèse non étiquetée | Retirer, sauf données internes documentées |
| S17 | PDF « INRS : présentéisme 1,5x » | attribution erronée | Retirer ; voir S29 |
| S18 | PDF « INRS : 6 000 à 25 000 € » | attribution erronée (introuvable) | Retirer |
| S19 | CTA « 12 à 24 mois » | hypothèse (introuvable) | Retirer ou étiqueter |
| S20 | « données INRS et Assurance Maladie » ; « Source : INRS » (exposés) | attribution erronée | Remplacer par une mention de méthode |

### Valeurs sourcées ou hypothèses retenues pour la nouvelle méthode

| Id | Valeur | Unité | Usage | Source (organisme, titre, année publ. / données, emplacement, URL) | Statut |
|---|---|---|---|---|---|
| S02 | 62 113 | € par an | Coût salarial annuel moyen → coût d'un jour (CJ = S02/S06 = 282,33 €) | Insee Première n° 2079, oct. 2025, données 2024 : brut moyen 3 602 €/mois EQTP — insee.fr/fr/statistiques/8657156 ; Insee Références *Les entreprises en France*, déc. 2023, données 2022 : charges employeur 43,7 % du brut — insee.fr/fr/statistiques/7678548. Calcul 3 602 × 12 × 1,437 | sourcé (calcul) |
| S03 | 0,5 | ratio | Coûts indirects = 0,5 × coût d'absence (sensibilité 0,25–1) | Aucune source trouvée ; ratio OIT ×4 (S30) non transposable | hypothèse |
| S06 | 220 | jours | Jours travaillés par an | Repère : C. trav. art. L3121-64 (forfait 218 j) | hypothèse |
| S21 | 88 % ; 44 723 MP-TMS ; IF 2,2 ‰ | — | Texte de contexte | Assurance Maladie – Risques professionnels, *Rapport annuel 2024 – Éléments statistiques et financiers*, nov. 2025, données 2024, p. 40-41, Tableaux 19-20 ; ameli.fr « Les TMS : pourquoi et comment agir », mise à jour 16/03/2026 | sourcé |
| S22 | 326 | jours par MP-TMS | Repère sectoriel (jours perdus par MP-TMS reconnue) | Ameli open data, *2024_Risque-MP-par-âge-sexe-et-profession_serie-annuelle.xlsx*, publié le 17/03/2026 : 14 589 978 j / 44 723 MP-TMS (calcul de l'agent) | sourcé (calcul) |
| S23 | CTN C 1 804 ; D 1 482 ; B 1 677 ; A 1 779 ; F 1 685 ; G 1 622 ; H 1 445 ; I 1 284 ; E 1 804 (à recontrôler) | € par sinistre | Option : surcoût de cotisation si MP reconnue, arrêt de 16 à 45 j | Arrêté du 30/12/2025, tarification AT/MP 2026, JORF 31/12/2025, annexe 2 — legifrance.gouv.fr/jorf/id/JORFTEXT000053228984 | sourcé |
| S24 | 2,08 % (2026) ; M2 = 0,56 (2025) | — | Option cotisation | Arrêté du 30/12/2025, art. 2 ; Rapport annuel 2024, p. 106, Équation 2, Tableau 59 | sourcé |
| S25 | < 20 collectif ; 20–149 mixte ; ≥ 150 individuel | effectif | Option cotisation | CSS art. D242-6-2 (texte reproduit par l'OPPBTP, MAJ 26/09/2022) ; formule de la fraction mixte non lue : « Je ne sais pas » | sourcé (seuils seulement) |
| S26 | IF MP-TMS ‰ : industrie 3,91 ; logistique (NAF 5210) 3,77 ; BTP 3,75 ; santé 2,57 ; commerce 2,39 ; restauration 1,80 ; transport 1,58 ; bureau 0,35 ; national 2,07 | ‰ salariés | Repère « vs secteur » + indice de risque | Ameli open data, *2024_Risque-MP-par-CTN-x-NAF_serie-annuelle.xlsx*, publié le 17/03/2026, données 2024 (calcul de l'agent ; rattachement NAF = hypothèse) | sourcé (calcul) |
| S27 | 1,38 (F/H) ; 47 % de femmes salariées | ratio | Indice de risque (sexe) | Rapport annuel 2024, p. 166, Tableau 92 (données 2023) : F = 47 % des salariés, 55 % des MP-TMS | sourcé (calcul) |
| S28 | 56 % des MP-TMS chez les 50-64 ans | % | Texte de contexte | Fichier ameli âge-sexe 2024 (calcul) ; Rapport annuel 2024, p. 80-81 | sourcé |
| S29 | 1,4 à 2 | × taux d'absentéisme | Présentéisme (r = 1,4 / 1,7 / 2,0 selon les signaux) | INRS, P. Canetto, *Prévention et performance d'entreprise*, mai 2017, p. 15 (citation secondaire, toutes causes) | sourcé (bornes) ; choix selon les signaux = hypothèse |
| S30 | ×4 | coûts indirects / directs | Non utilisé (contexte uniquement) | INRS 2017, p. 14 (citation de l'OIT, accidents) | sourcé, non transposable |
| S31 | 2,2 | retour par € investi | Contexte uniquement, jamais appliqué au calcul (décision du 2026-10-04) | AISS/DGUV/BG ETEM, *The return on prevention*, 2011 ; INRS 2017, p. 16 et p. 20 | sourcé |
| S32 | Pas d'effet préventif démontré | — | Prudence sur les promesses liées à la formation | Verbeek JH et al., Cochrane Database Syst Rev 2011 ; (6) : CD005958, PMID 21678349 | sourcé |
| S33 | 0,25 | part de productivité perdue | Présentéisme | Aucune source trouvée | hypothèse |
| S12 | 10 / 20 / 30 % | réduction | Scénarios d'économie potentielle en € (sans ratio, sans coût de démarche) | Aucune source trouvée | hypothèse |
| S15 | taux d'arrêts 8 % / 3 % ; indice de profil 2,0 / 1,5 | seuils | Niveau de risque | Aucune source trouvée | hypothèse |
| S34 | 90 | jours | Durée par défaut si « Je ne sais pas » | ameli.fr « Les TMS : pourquoi et comment agir », mise à jour 16/03/2026 : arrêt pour accident lié au dos « en moyenne de 3 mois » (approximation : accidents du dos, pas tous les TMS) | sourcé (utilisé comme approximation) |
| S35 | 47 % | part de femmes | Défaut sexe si « Je ne sais pas » (coefficient = 1) | = S27 | sourcé |
| S36 | 1,0 | coefficient | Défaut âge si « Je ne sais pas » (aucune répartition injectée) | Aucune répartition nationale par tranche lue | hypothèse neutre |
| S37 | parts égales | % | Défaut si plusieurs types de postes cochés | — | hypothèse (affichée, modifiable) |
| S38 | N/E > 1 | seuil | Avertissement non bloquant arrêts > effectif | — | hypothèse |

Non trouvé (« Je ne sais pas ») : coût moyen actuel d'un TMS publié par l'Assurance Maladie ; durée moyenne d'un arrêt TMS hors MP ; multiplicateur de risque par tranche d'âge ; taux d'absentéisme TMS (DARES) ; jeu de données AT/MP par NAF sur data.gouv.fr (il existe en open data sur ameli).
