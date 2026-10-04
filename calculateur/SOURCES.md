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

_(rempli par `calc-donnees` après audit)_
