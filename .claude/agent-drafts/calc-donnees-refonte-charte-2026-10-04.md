# Calculateur TMS — Audit des données et méthode proposée

Agent : `calc-donnees` · Chantier : `refonte-charte` · Date : 2026-10-04
Fichier audité : `calculateur-tms-web.html` (script l. ~839-1065, PDF l. ~1300-1375). Registre mis à jour : `calculateur/SOURCES.md`.

---

## 0. Constats structurels (avant les chiffres)

Ces constats viennent de la lecture du code. Ils ne dépendent d'aucune source externe.

1. **La durée d'arrêt saisie ne joue sur aucun coût.** `dur` sert seulement au compteur de jours perdus. Un arrêt de 3 jours et un arrêt de 300 jours coûtent pareil.
2. **`cAbs` ne dépend ni de l'effectif ni de la durée.** `eff × 35 000 × (arr/eff × 1,8) × 0,35` revient à `arr × 22 050 €` (× effet prévention).
3. **`cIndir` ne dépend pas des arrêts.** Une entreprise sans aucun arrêt affiche quand même `eff × 1 200 € × secteur`. Exemple : 120 salariés en logistique, zéro arrêt : 216 000 € de « coûts indirects ».
4. **Âge, sexe et postes ne modifient aucun coût.** `genreM`, `ageM` et `pm` n'entrent que dans `expo`, le nombre de « salariés exposés ». Ce nombre est souvent plafonné à l'effectif total (cas type : 120/120).
5. **Le secteur multiplie le coût d'un arrêt déjà déclaré** (`arr × 8 500 × sm`). Rien ne justifie qu'un arrêt de même durée coûte 1,6 fois plus cher dans le BTP qu'ailleurs.
6. **Le plan de prévention réduit des coûts observés** (−15 % / −7 %). Or les arrêts saisis reflètent déjà la prévention en place : l'effet est compté deux fois.
7. **La page promet une comparaison qui n'est pas calculée.** La porte du rapport annonce « Votre score de risque vs. moyennes du secteur », mais aucune moyenne sectorielle n'est calculée.
8. **Bogue (pour Dev)** : `parseInt(pct-f)||50` transforme 0 % de femmes en 50 %. Même chose pour `effectif||50`.
9. **Ordre de grandeur (cas type ci-dessous)** : 459 792 € pour 176 jours d'arrêt, soit environ 2 600 € par jour d'arrêt déclaré.

---

## 1. Audit S01 à S16 (et chiffres affichés repérés en plus)

Légende : **S** = sourcé · **H** = hypothèse UP TO MOVE · **AE** = attribution erronée (bloquant) · **NT** = non trouvé (aucune source primaire lue ne contient le chiffre).

| Id | Valeur actuelle | Statut | Constat et source primaire lue |
|---|---|---|---|
| S01 | 8 500 € par arrêt TMS | **AE** (sous la mention générale « données INRS et Assurance Maladie ») | Je n'ai trouvé ce chiffre dans aucune source lue. Le seul « coût moyen d'un TMS » trouvé (21 512 €) est daté de 2010 (CNAMTS/CCMSA) et n'apparaît que sur des sites secondaires (MSA, agrégateurs) : je ne le retiens pas. Pour un employeur, le coût direct réglementaire d'un sinistre est le **coût moyen par catégorie d'incapacité temporaire** de l'arrêté du 30/12/2025 (voir S23), et il ne joue que pour une MP reconnue. |
| S02 | 35 000 € de coût salarial annuel | **H** (aucune source, sous-estimé) | Insee Première n° 2079 (oct. 2025, données 2024) : salaire brut moyen dans le privé « 3 602 euros par mois » en EQTP. Insee Références « Les entreprises en France » (déc. 2023, données 2022) : cotisations et autres coûts employeur = « 43,7 % du salaire brut ». Calcul : 3 602 × 12 × 1,437 = **62 113 €**. |
| S03 | 1 200 € par salarié (coûts indirects) | **H** (aucune source) | Aucune source trouvée. Valeur à abandonner (voir constat 3). |
| S04 | ×1,8 (majoration de l'absentéisme) | **H** (aucune source) | Aucune source trouvée. |
| S05 | 0,35 (part imputée aux TMS) | **H** (aucune source) | Aucune source trouvée. Le PDF l'affiche comme « 35 % effectif exposé ». |
| S06 | 220 jours travaillés par an | **H** (raisonnable) | Repère légal : forfait jours plafonné à 218 jours (C. trav. art. L3121-64). Légifrance n'était pas accessible ; texte lu via reproductions (travail-industrie.com, legisocial.fr). À afficher comme convention de calcul. |
| S07 | sM : 0,8 à 1,6 | **H** (aucune source) | Remplaçable par l'indice de fréquence des MP-TMS par secteur (S26, données Assurance Maladie 2024). Écarts notables : bureau 0,8 → 0,17 ; transport 1,3 → 0,76 ; restauration 1,3 → 0,87. |
| S08 | Postes : 0,7 / 1,6 / 1,3 / 1,1 | **H** | Aucune source chiffrée trouvée. L'INRS cite le travail sur écran, la logistique et le transport parmi les secteurs concentrant les cas, sans coefficient. |
| S09 | 1 + 0,5 × part de femmes, affiché « INRS : les femmes sont 2× plus exposées » | **AE** | La page INRS « Facteurs de risque » (mise à jour 27/03/2025) cite le genre comme facteur, **sans aucun chiffre**. Donnée primaire : Rapport annuel 2024 Assurance Maladie – Risques professionnels, p. 166, Tableau 92 (données 2023) : femmes = 47 % des salariés et 55 % des MP-TMS. Le rapport des indices de fréquence femmes/hommes vaut donc **≈ 1,38**, pas 2. |
| S10 | 0,7 / 1,0 / 1,8 / 2,2, affiché « INRS : risque ×3 après 45 ans » et « Risque élevé ×3 » | **AE** | INRS « Facteurs de risque » (27/03/2025) : « l'âge, le genre ou encore l'état de santé peuvent également contribuer », sans multiplicateur. Données lues (fichier ameli MP par âge 2024) : 50-64 ans = 56 % des MP-TMS (25 191 / 44 723). Je n'ai pas trouvé de dénominateur (salariés par tranche d'âge fine) pour en tirer un indice de fréquence. **Je ne sais pas** quel multiplicateur est juste. |
| S11 | −15 % / −7 % (plan de prévention) | **H** (aucune source, et double compte) | Aucune source trouvée. |
| S12 | −30 % d'absentéisme TMS après formation, affiché « données INRS » | **AE** | Aucune source INRS trouvée. Contre-preuve académique : revue Cochrane (Verbeek et al., 2011, CD005958, 9 essais randomisés, 20 101 salariés) : la formation aux manutentions « ne prévient pas » les lombalgies (preuve de qualité modérée). Seul ordre de grandeur publié sur le retour de la prévention en général : AISS/DGUV 2011, « Return on Prevention » = 2,2, repris par l'INRS (2017, p. 16 et p. 20) avec des réserves. |
| S13 | 120 € par salarié, plafond 18 000 € | **H** (tarif interne) | À confirmer par Céline. |
| S14 | « INRS : signaux faibles 6 à 18 mois avant l'arrêt » | **AE** (NT) | Rien trouvé à l'INRS ni ailleurs (recherche exacte sans résultat). |
| S15 | Seuils de 8 % / 3 % d'arrêts par rapport à l'effectif | **H** | Aucune source. |
| S16 | « −30 % de douleurs dès les premières semaines » | **H** non étiquetée → à retirer ou à sourcer | Aucune source trouvée. C'est une promesse de résultat : la retirer, sauf données internes UP TO MOVE documentées. |
| S17 (nouveau) | PDF : « Selon l'INRS, ce coût [présentéisme] représente 1,5x celui des arrêts » | **AE** | L'INRS (Canetto, *Prévention et performance d'entreprise*, mai 2017, p. 15) cite une autre source : présentéisme « de 1,4 à 2 fois le taux d'absentéisme ». Il s'agit d'un taux, toutes causes, pas d'un coût TMS. Le 1,5 n'y figure pas, et le code ne l'utilise pas. |
| S18 (nouveau) | PDF : « Source INRS : coût moyen arrêt TMS entre 6 000 et 25 000 € » | **AE** (NT) | Non retrouvé dans les sources lues. |
| S19 (nouveau) | CTA risque modéré : « dégradation dans les 12 à 24 mois » | **H** (NT) | Aucune source. |
| S20 (nouveau) | Disclaimer « sur la base des données INRS et de l'Assurance Maladie » ; PDF « Salariés exposés… Source : INRS » | **AE** | Aucune valeur du calcul actuel ne vient de ces organismes. |

---

## 2. Données nouvelles vérifiées

| Id | Donnée | Valeur | Source primaire (lue) |
|---|---|---|---|
| S21 | Part des TMS dans les MP reconnues | 44 723 / 50 598 = 88 % (2024) ; IF TMS 2,2 ‰ | Assurance Maladie – Risques professionnels, *Rapport annuel 2024 – Éléments statistiques et financiers* (publié en nov. 2025), p. 40-41, Tableaux 19-20 : « près de 90 % des MP ». Page ameli « Les TMS : pourquoi et comment agir » (mise à jour 16/03/2026) : « les TMS représentaient 88 % des maladies professionnelles ». |
| S22 | Journées perdues par MP-TMS reconnue | 14 589 978 j / 44 723 = **≈ 326 j** (2024) | Ameli, fichier *2024_Risque-MP-par-âge-sexe-et-profession_serie-annuelle.xlsx* (publié le 17/03/2026), colonnes « Nombre de journées perdues » et « Top TMS ». Calcul de l'agent. Ratio stock/flux, pas une durée d'arrêt individuelle. |
| S23 | Coût moyen IT « 16 à 45 jours » (barème 2026) | CTN C (transports, dont l'entreposage) : 1 804 € ; CTN D : 1 482 € ; CTN B : 1 677 € ; A : 1 779 € ; F : 1 685 € ; G : 1 622 € ; H : 1 445 € ; I : 1 284 € (E : 1 804 €, à recontrôler sur le JO) | Arrêté du 30 décembre 2025 relatif à la tarification AT/MP pour 2026 (JORF du 31/12/2025, JORFTEXT000053228984), annexe 2, lu via Légifrance. Autres catégories CTN C : < 4 j : 238 € ; 4-15 j : 560 € ; 46-90 j : 4 703 € ; 91-150 j : 8 937 € ; > 150 j : 37 636 €. |
| S24 | Taux net moyen national ; formule du taux net | 2,08 % (2026) ; 2,12 % (2025). Taux net = (M1 + taux brut) × (1 + M2) + M3 + M4, avec M2 = 0,56 en 2025 | Arrêté du 30/12/2025, art. 2 ; Rapport annuel 2024, p. 106, Équation 2 et Tableau 59. |
| S25 | Modes de tarification | < 20 salariés : collectif ; 20-149 : mixte ; ≥ 150 : individuel | CSS art. D242-6-2 (texte reproduit par l'OPPBTP, mis à jour le 26/09/2022). La formule de la fraction individuelle du taux mixte n'a pas été lue : **je ne sais pas**. |
| S26 | Indice de fréquence des MP-TMS par secteur (‰ salariés, 2024) et rapport à la moyenne nationale (2,07 ‰ hors compte spécial) | industrie (NAF 10-33) 3,91 → **1,88** ; logistique-entreposage (NAF 5210A+B) 3,77 → **1,82** (NAF 52 entier : 2,45 → 1,18) ; BTP (41-43) 3,75 → **1,81** ; santé et médico-social (86-88) 2,57 → **1,24** ; commerce (45-47) 2,39 → **1,15** ; restauration et hébergement (55-56) 1,80 → **0,87** ; transport (49-51) 1,58 → **0,76** ; bureau (58-75) 0,35 → **0,17** | Ameli, *2024_Risque-MP-par-CTN-x-NAF_serie-annuelle.xlsx* (publié le 17/03/2026), colonnes « Nombre de salariés » et « MP en 1er règlement » (lignes « Top TMS »). Calcul de l'agent. Le rattachement des secteurs de la page aux codes NAF est une hypothèse. |
| S27 | Rapport femmes/hommes des IF TMS | **1,38** | Rapport annuel 2024, p. 166, Tableau 92 (2023) : (55/47) ÷ (45/53). |
| S28 | Âge (descriptif) | MP-TMS 2024 : < 30 ans 3 % ; 30-49 ans 41 % ; 50-64 ans 56 % ; 65 ans et + 0,4 %. Bénéficiaires d'IJ AT/MP de plus de 55 ans : 21 % des sinistres, 32 % des montants d'IJ | Fichier ameli « âge-sexe » 2024 (calcul de l'agent) ; Rapport annuel 2024, p. 80-81. |
| S29 | Présentéisme | « 1,4 à 2 fois le taux d'absentéisme » (toutes causes, source secondaire citée par l'INRS) | INRS, P. Canetto, *Prévention et performance d'entreprise : panorama…*, mai 2017, p. 15 (citation de sa réf. [53]). |
| S30 | Coûts indirects | « l'OIT évalue les coûts indirects à 4 fois les coûts directs » (accidents, coûts assurés) | INRS 2017, p. 14 (citation secondaire de sa réf. [29]). L'INRS signale lui-même les limites de ces ratios (p. 20). Non applicable tel quel à un coût salarial. |
| S31 | Retour de la prévention | 2,2 (toutes actions de santé-sécurité, 300 entreprises, 19 pays, déclaratif) | AISS / DGUV / BG ETEM, *The return on prevention*, 2011 ; repris par l'INRS (2017, p. 16 et p. 20). |
| S32 | Efficacité de la formation seule aux manutentions | Pas d'effet préventif démontré sur les lombalgies | Verbeek JH et al., Cochrane Database Syst Rev 2011 ; (6) : CD005958 (PMID 21678349). |

**Pas trouvé, ou pas exploitable :**
- Durée moyenne d'un arrêt TMS « maladie ordinaire », hors MP : **je ne sais pas**.
- Taux d'absentéisme DARES spécifique aux TMS : **je ne sais pas** (aucune publication DARES lue sur ce point).
- data.gouv.fr ne propose aucun jeu de données AT/MP par code NAF. La bonne source est l'open data ameli (fichiers ci-dessus, avec un millésime par an).

---

## 3. Méthode proposée

Elle garde les trois blocs actuels : coûts directs, productivité, coûts indirects.

**Principe** : les coûts reposent sur ce que l'entreprise déclare (nombre d'arrêts × durée). Le profil (secteur, postes, âge, sexe, prévention) sert à estimer l'exposition, le niveau de risque et la comparaison au secteur. Il ne multiplie plus des coûts déjà observés.

### Variables
- `E` : effectif ; `N` : nombre d'arrêts TMS sur 12 mois ; `D` : durée moyenne d'un arrêt (jours) ; `J_abs = N × D`
- `CS` : coût salarial annuel moyen = 62 113 € (S02) ; `J_an` : 220 jours (S06) ; `CJ = CS / J_an` = 282,33 € par jour
- `r_pres` : ratio présentéisme / absence. 1,4 sans signal ; 1,7 avec un signal autre que les plaintes ; 2,0 si « plaintes régulières » est coché. Les bornes viennent de S29 ; le choix selon les signaux est une hypothèse (H).
- `p` : perte de productivité pendant un jour de présentéisme = 0,25 (H, aucune source trouvée)
- `k_ind` : coûts indirects rapportés au coût d'absence = 0,5 (H, plage de sensibilité 0,25 à 1). Le ratio 4 de l'OIT (S30) porte sur les coûts assurés des accidents : il ne s'applique pas ici.

### Formules
1. **Absence (coût direct employeur, valeur des jours perdus)** : `C_abs = J_abs × CJ`
2. **Présentéisme (perte de productivité)** : `C_pres = J_abs × r_pres × p × CJ`
3. **Coûts indirects (remplacement, heures supplémentaires, encadrement)** : `C_ind = k_ind × C_abs`
4. **Total affiché** : `C_tot = C_abs + C_pres + C_ind`
5. **Option, ligne séparée hors total : surcoût de cotisation si les arrêts sont reconnus en MP** : `C_cot ≤ N × CM_IT(CTN, D) × (1 + M2)`, réparti sur 3 ans (S23-S25). C'est un plafond (fraction individuelle = 1). À n'afficher que si l'utilisateur indique des MP reconnues et un effectif ≥ 20.
6. **Jours perdus** : `J_abs` (arrêts) + `J_abs × r_pres × p` (équivalent présentéisme), affichés séparément.
7. **Salariés exposés** : `E × (part manuels + debout + conduite)`, d'après les données saisies. On supprime le produit de coefficients et le 0,35.
8. **Comparaison au secteur (nouveau)** : MP-TMS attendues par an = `E × IF_secteur / 1000` (S26), avec la mention « chaque MP-TMS reconnue représente en moyenne ~326 jours perdus (S22) ».
9. **Indice de profil (niveau de risque uniquement)** : `I = rel_secteur(S26) × g(S27) × a(S10, H) × pm(S08, H)`, avec `g = (h + 1,38 f) / (0,53 + 0,47 × 1,38)`. Il sert au badge de risque, pas au montant en euros.
10. **ROI** : économie = `C_tot × x`. `x` est affiché comme scénario (10 / 20 / 30 %, H), sans attribution. Coût de la démarche : S13 (H).
11. **Prévention en place** : sort du calcul des coûts. Elle reste un critère du niveau de risque (comme aujourd'hui) et de la recommandation.

### Ce qui change par rapport à aujourd'hui
- La durée saisie devient le moteur du coût (aujourd'hui elle est ignorée).
- Les coûts indirects suivent les arrêts, plus l'effectif.
- Le secteur ne multiplie plus le coût d'un arrêt. Il sert à la comparaison sectorielle (désormais calculée et sourcée) et à l'indice de risque.
- Les coefficients sexe et secteur deviennent sourcés (S27, S26). Âge et postes restent des hypothèses, étiquetées comme telles.
- On supprime 8 500 €, 1 200 €, ×1,8, 0,35, −15 % / −7 % et « −30 % INRS ».
- Toutes les mentions « INRS » non vérifiées sont retirées.

### Limites
- On valorise un jour perdu au coût salarial complet (approche par le capital humain). Le décaissement réel de l'employeur est plus faible : les IJ de la Sécurité sociale remboursent une partie. C'est à dire sur la page.
- `p`, `k_ind`, `r_pres` selon les signaux, l'âge, les postes, `x` et les seuils de risque sont des hypothèses.
- S26 mesure des MP **reconnues**, sous-déclarées et peu reconnues pour le travail de bureau : 0,17 sous-estime probablement le risque réel du tertiaire.
- La durée moyenne d'une MP-TMS (~326 j) n'est pas celle des arrêts TMS ordinaires saisis par les entreprises (souvent bien plus courts).
- Le coût salarial est une moyenne nationale du privé, sans ajustement par secteur.

---

## 4. Cas type chiffré

120 salariés, logistique, 60 % H / 40 % F, âges 20/40/35/5, postes 70 % manuels / 30 % sédentaires, 8 arrêts de 22 jours, signal « plaintes régulières », prévention partielle.

### Formule actuelle (calcul refait à partir du code)
- sm = 1,5 ; pm = (70 × 1,6 + 30 × 0,7) / 100 = 1,33 ; genreM = 1 + 0,4 × 0,5 = 1,2 ; ageM = 0,14 + 0,40 + 0,63 + 0,11 = 1,28 ; prévention = × 0,93
- expo = min(round(120 × 1,5 × 1,33 × 1,2 × 1,28 × 0,35 = 128,7), 120) = **120**
- tauxAbsEst = 8 / 120 × 100 × 1,8 = 12 %
- cArrets = 8 × 8 500 × 1,5 × 0,93 = **94 860 €**
- cAbs = 120 × 35 000 × 0,12 × 0,35 × 0,93 = **164 052 €**
- cIndir = 120 × 1 200 × 1,5 × 0,93 = **200 880 €**
- **Total = 459 792 €** ; jours perdus = 176 + 1 109 = **1 285** ; risque « modéré »
- ROI : coût 14 400 € ; économie 30 % = 137 938 € → **×9,6**

### Formule proposée
- CJ = 62 113 / 220 = 282,33 € ; J_abs = 8 × 22 = 176 j
- C_abs = 176 × 282,33 = **49 690 €**
- C_pres = 176 × 2,0 × 0,25 × 282,33 = **24 845 €** (88 jours équivalents)
- C_ind = 0,5 × 49 690 = **24 845 €**
- **Total ≈ 99 381 €** (−78 % par rapport à aujourd'hui). Fourchette de sensibilité : sans signal (r = 1,4) 91 927 € ; k_ind de 0,25 à 1 : 86 958 € à 124 226 €.
- Jours perdus : **176** jours d'arrêt + **88** jours équivalents présentéisme
- Salariés exposés : 120 × 70 % = **84**
- Repère sectoriel (S26, entreposage) : 120 × 3,77 / 1000 = **0,45 MP-TMS reconnue attendue par an**, chacune ≈ 326 j perdus
- Option cotisation (si les 8 arrêts étaient des MP reconnues, CTN C, catégorie 16-45 j, plafond) : 8 × 1 804 × 1,56 = 22 514 € sur 3 ans (≈ 7 505 €/an)
- ROI (S13 = 14 400 €) : 10 % → 9 938 € (×0,69) ; 20 % → 19 876 € (×1,38) ; 30 % → 29 814 € (×2,07)
- Indice de profil (risque) : 1,82 × 0,977 × 1,28 × 1,33 ≈ 3,0 → sert seulement au badge

---

## 5. Objet `PARAMS` cible

```js
var PARAMS = {
  // --- Coût d'un jour perdu ---
  coutSalarialAnnuel: 62113,      // S02 — Insee IP n°2079 (brut 3 602 €/mois, 2024) × (1 + 43,7 %) Insee 2022
  joursTravaillesAn: 220,         // S06 — hypothèse (repère légal : 218 j, C. trav. L3121-64)
  // --- Présentéisme ---
  ratioPresenteisme: { aucun: 1.4, autres: 1.7, plaintes: 2.0 }, // S29 bornes 1,4–2 (INRS 2017, p.15) ; choix selon signaux = hypothèse
  perteProductivitePresent: 0.25, // S33 — hypothèse UP TO MOVE
  // --- Coûts indirects ---
  ratioIndirects: 0.5,            // S03 (redéfini) — hypothèse UP TO MOVE, sensibilité 0,25–1
  // --- Repère sectoriel : IF MP-TMS 2024 (‰ salariés) ---
  ifTmsNational: 2.07,            // S26 — ameli CTN×NAF 2024, hors compte spécial
  ifTmsSecteur: {                 // S26 — rattachement NAF = hypothèse
    industrie: 3.91, logistique: 3.77, btp: 3.75, sante: 2.57, commerce: 2.39,
    restauration: 1.80, transport: 1.58, bureau: 0.35, autre: 2.07
  },
  joursParMpTms: 326,             // S22 — ameli âge-sexe 2024 (14 589 978 j / 44 723 MP)
  // --- Indice de profil (badge de risque uniquement) ---
  ratioFemmesHommes: 1.38,        // S27 — Rapport annuel AM-RP 2024, Tableau 92 (2023)
  partFemmesRef: 0.47,            // S27 — idem (Insee Enquête emploi 2023)
  coefAge: [0.7, 1.0, 1.8, 2.2],  // S10 — hypothèse UP TO MOVE (à afficher comme telle)
  coefPoste: { sedentaire: 0.7, manuel: 1.6, debout: 1.3, conduite: 1.1 }, // S08 — hypothèse
  seuilsRisque: { eleve: 0.08, modere: 0.03 }, // S15 — hypothèse
  // --- Option cotisation AT/MP (MP reconnues uniquement) ---
  coutMoyenIT_16_45: { A: 1779, B: 1677, C: 1804, D: 1482, E: 1804, F: 1685, G: 1622, H: 1445, I: 1284 }, // S23 — arrêté 30/12/2025, annexe 2
  majorationM2: 0.56,             // S24 — Rapport annuel 2024, Tableau 59 (2025)
  // --- ROI ---
  coutDemarcheParSalarie: 120, plafondDemarche: 18000, // S13 — tarif interne, à confirmer
  scenariosReduction: [0.10, 0.20, 0.30] // S12 (redéfini) — scénarios hypothétiques, sans attribution
};
```

---

## 6. Ce qui doit changer sur la page (à transmettre à CR et Dev)

**À retirer (attributions erronées, bloquant)**
- « INRS : les femmes sont 2× plus exposées aux TMS »
- « INRS : risque ×3 après 45 ans » et « Risque élevé ×3 »
- « (INRS : les signaux faibles précèdent les arrêts de 6 à 18 mois en moyenne) »
- « Basé sur une réduction de 30 % de l'absentéisme TMS après formation — données INRS » (page et PDF)
- PDF : « Selon l'INRS, ce coût représente 1,5x… », « Source INRS : coût moyen arrêt TMS entre 6 000 et 25 000 € », « Source : INRS » (salariés exposés)
- Disclaimer « sur la base des données INRS et de l'Assurance Maladie »
- CTA : « réduisent de 30 % les douleurs dès les premières semaines » (S16) ; « dans les 12 à 24 mois » (S19), sauf à l'étiqueter comme hypothèse

**Remplacements possibles (fond fourni par Données, rédaction par CR)**
- Sexe : « Les femmes représentent 55 % des TMS reconnus en maladie professionnelle pour 47 % des salariés (Assurance Maladie, 2023). »
- Âge : « 56 % des TMS reconnus en 2024 concernent des salariés de 50 à 64 ans (Assurance Maladie). »
- Contexte : « Les TMS représentent 88 % des maladies professionnelles reconnues (Assurance Maladie, 2024). »
- Mention de méthode : coût d'un jour = coût salarial moyen Insee ; présentéisme, coûts indirects et réduction après démarche = hypothèses UP TO MOVE, avec les valeurs ; repère sectoriel = MP-TMS reconnues 2024, Assurance Maladie.
- ROI : afficher un scénario (« si la démarche réduit les arrêts de 20 %… ») plutôt qu'un multiplicateur présenté comme un résultat.

**Pour Dev** : constat 8 (bogue `||50`). Si l'option cotisation est retenue, prévoir une liste secteur → CTN.

**À signaler à Céline** : le total baisse fortement sur le cas type (de 459 792 € à 99 381 €). C'est l'effet de chiffres sourcés ou d'hypothèses désormais explicites.

---

## 7. PARAMS v2 et formules définitives (après décisions de Céline du 2026-10-04)

Cette section **remplace le §5**. Elle applique `calc-decisions-refonte-charte-2026-10-04.md` :
- ROI = 3 scénarios de réduction (10 / 20 / 30 %), étiquetés hypothèse, exprimés en économie potentielle en € ;
- S13 retiré : aucun coût de démarche, aucun ratio « ×N » ;
- S31 (2,2) cité en contexte seulement.

### 7.1 Valeurs par défaut quand l'utilisateur coche « Je ne sais pas »

| Champ | Valeur par défaut | Statut | Justification |
|---|---|---|---|
| Part de femmes | **47 %** | sourcé (S27) | Part des femmes parmi les salariés du régime général en 2023 (Insee Enquête emploi, reprise dans le Rapport annuel AM-RP 2024, Tableau 92). Avec cette valeur, le coefficient sexe vaut exactement 1 : il n'ajuste rien. |
| Répartition par âge | **Pas d'ajustement : coefficient d'âge = 1,0** (on n'injecte aucune répartition) | hypothèse neutre (S36) | Je n'ai trouvé aucune répartition des salariés par tranches 16-29 / 30-44 / 45-64 / 65+ pour la lire à la source. Je ne sais pas quelle répartition nationale injecter. Le neutre est la seule valeur qui n'invente rien. Mention : « âge non pris en compte ». |
| Durée moyenne d'un arrêt | **90 jours** | repère sourcé, utilisé comme approximation (S34) | Page ameli « Les TMS : pourquoi et comment agir » (mise à jour 16/03/2026) : arrêt pour un accident lié au dos « en moyenne de 3 mois ». Limite : cette durée concerne les accidents du dos, pas tous les arrêts TMS. Je ne connais pas de durée moyenne sourcée pour les arrêts TMS ordinaires. Afficher la valeur et inviter à saisir la durée réelle. |
| Répartition des postes quand plusieurs types sont cochés | **Parts égales** entre les types cochés | hypothèse acceptable si affichée (S37) | Pré-remplissage modifiable ; il influence seulement le nombre d'exposés et l'indice de profil. |
| Signaux faibles (aucun coché) | Équivaut à « aucun signal » → r_pres = 1,4 | hypothèse (S29 borne basse) | Comportement actuel, rendu explicite. |

**Autres points de la spec UX/UI tranchés ici :**
- Avertissement « arrêts > effectif » : non bloquant, seuil `N > E` (hypothèse S38 : un salarié peut avoir plusieurs arrêts, d'où l'avertissement sans blocage).
- Option « part des 45 ans et plus » : compatible avec le modèle (l'âge ne sert qu'à l'indice de profil). Si l'UX la retient : `a = 1,0 × (1 − p45) + 1,8 × p45` (hypothèse dérivée de S10). Sinon, garder les 4 tranches.
- Libellé « 65 ans et + (âge légal de départ) » : je ne sais pas, à la date du jour, quel âge légal s'applique à chaque génération. **Retirer la parenthèse.**
- Comparaison sectorielle R1-bis : **validée**, sourcée S26 (voir §7.3, `repereSectoriel`).
- S16 (« −30 % de douleurs ») et la ligne PDF « 6 000 et 25 000 € » : **à retirer**.

### 7.2 Objet PARAMS v2 (complet)

```js
var PARAMS = {
  // Coût d'un jour perdu
  coutSalarialAnnuel: 62113,          // S02 — Insee IP n°2079 (brut 3 602 €/mois EQTP, 2024) × 1,437 (Insee 2022)
  joursTravaillesAn: 220,             // S06 — hypothèse (repère légal 218 j, C. trav. L3121-64)

  // Présentéisme
  ratioPresenteisme: { aucun: 1.4, autres: 1.7, plaintes: 2.0 }, // S29 bornes 1,4–2 (INRS 2017 p.15) ; choix selon signaux = hypothèse
  perteProductivitePresent: 0.25,     // S33 — hypothèse UP TO MOVE

  // Coûts indirects
  ratioIndirects: 0.5,                // S03 — hypothèse UP TO MOVE (× coût d'absence)

  // Scénarios de réduction (ROI), en € uniquement
  scenariosReduction: [0.10, 0.20, 0.30], // S12 — hypothèse UP TO MOVE
  repereRetourPrevention: 2.2,        // S31 — contexte uniquement (AISS/DGUV 2011), jamais appliqué au calcul

  // Repère sectoriel : IF MP-TMS 2024, ‰ salariés
  ifTmsNational: 2.07,                // S26 — ameli CTN×NAF 2024, hors compte spécial
  ifTmsSecteur: {                     // S26 — rattachement NAF (hypothèse) en commentaire
    industrie: 3.91,     // NAF 10-33
    logistique: 3.77,    // NAF 5210A + 5210B (entreposage)
    btp: 3.75,           // NAF 41-43
    sante: 2.57,         // NAF 86-88
    commerce: 2.39,      // NAF 45-47
    restauration: 1.80,  // NAF 55-56
    transport: 1.58,     // NAF 49-51
    bureau: 0.35,        // NAF 58-75
    autre: 2.07          // = national
  },
  joursParMpTms: 326,                 // S22 — ameli âge-sexe 2024

  // Indice de profil (niveau de risque uniquement)
  ratioFemmesHommes: 1.38,            // S27 — Rapport annuel AM-RP 2024, Tableau 92 (2023)
  partFemmesRef: 0.47,                // S27 — idem
  coefAge: [0.7, 1.0, 1.8, 2.2],      // S10 — hypothèse UP TO MOVE (16-29 / 30-44 / 45-64 / 65+)
  coefPoste: { sedentaire: 0.7, manuel: 1.6, debout: 1.3, conduite: 1.1 }, // S08 — hypothèse
  seuilsTauxArrets: { eleve: 0.08, modere: 0.03 }, // S15 — hypothèse
  seuilsIndiceProfil: { eleve: 2.0, modere: 1.5 }, // S15 — hypothèse (nouveau)

  // Valeurs par défaut « Je ne sais pas »
  defautPartFemmes: 0.47,             // S27 (sourcé)
  defautCoefAge: 1.0,                 // S36 — hypothèse neutre
  defautDureeArret: 90,               // S34 — ameli, accident lié au dos ≈ 3 mois (approximation)
  seuilAvertissementArrets: 1.0       // S38 — avertir si N/E > 1 (non bloquant), hypothèse
};
```

### 7.3 Pseudo-code des fonctions de calcul

Entrées :
- `secteur` (clé de `ifTmsSecteur`), `E` (entier ≥ 1) ;
- `postes` = { sedentaire, manuel, debout, conduite } en % (somme 100) ;
- `partFemmes` (0-1, ou `null` si « Je ne sais pas ») ;
- `ages` = [p1, p2, p3, p4] en % (ou `null` si « Je ne sais pas ») ;
- `N` (entier ≥ 0) ; `D` (entier ≥ 1, ou `null` si « Je ne sais pas » ; ignoré si `N = 0`) ;
- `signaux` = sous-ensemble de {a, b, c, d} ; `prevention` ∈ {oui, partiel, non}.

```js
function coutJour() {                                   // € par jour perdu
  return PARAMS.coutSalarialAnnuel / PARAMS.joursTravaillesAn;   // 282,3318…
}

function dureeRetenue(N, D) {                           // jours par arrêt
  if (N === 0) return 0;
  return (D === null) ? PARAMS.defautDureeArret : D;    // défautDuree → drapeau « valeur par défaut »
}

function ratioPres(signaux) {
  if (signaux.has('a')) return PARAMS.ratioPresenteisme.plaintes;              // 2,0
  if (signaux.has('b') || signaux.has('c')) return PARAMS.ratioPresenteisme.autres; // 1,7
  return PARAMS.ratioPresenteisme.aucun;                                        // 1,4 (rien ou « d »)
}

function couts(N, D, signaux) {
  var j = N * dureeRetenue(N, D);                       // jours d'arrêt
  var cj = coutJour();
  var cAbs  = Math.round(j * cj);
  var cPres = Math.round(j * ratioPres(signaux) * PARAMS.perteProductivitePresent * cj);
  var cInd  = Math.round(PARAMS.ratioIndirects * j * cj);
  return { cAbs: cAbs, cPres: cPres, cInd: cInd, cTotal: cAbs + cPres + cInd }; // total = somme des arrondis
}

function jours(N, D, signaux) {
  var jArret = N * dureeRetenue(N, D);
  var jPres  = Math.round(jArret * ratioPres(signaux) * PARAMS.perteProductivitePresent);
  return { jArret: jArret, jPresEq: jPres, jTotal: jArret + jPres };
}

function exposes(E, postes) {                           // salariés sur postes à contraintes physiques
  return Math.round(E * (postes.manuel + postes.debout + postes.conduite) / 100);
}

function coefSexe(partFemmes) {
  var f = (partFemmes === null) ? PARAMS.defautPartFemmes : partFemmes;
  var R = PARAMS.ratioFemmesHommes, f0 = PARAMS.partFemmesRef;
  return ((1 - f) + R * f) / ((1 - f0) + R * f0);       // = 1 si f = 0,47
}

function coefAge(ages) {
  if (ages === null) return PARAMS.defautCoefAge;       // 1,0
  var c = PARAMS.coefAge;
  return (ages[0]*c[0] + ages[1]*c[1] + ages[2]*c[2] + ages[3]*c[3]) / 100;
}

function coefPostes(postes) {
  var s = 0;
  for (var k in postes) s += postes[k] * PARAMS.coefPoste[k];
  return s / 100;
}

function indiceProfil(secteur, postes, partFemmes, ages) {
  var relSect = PARAMS.ifTmsSecteur[secteur] / PARAMS.ifTmsNational;
  return relSect * coefSexe(partFemmes) * coefAge(ages) * coefPostes(postes);
}

function niveauRisque(E, N, signaux, prevention, I) {
  var t = N / E;
  var sig = signaux.has('a') || signaux.has('b') || signaux.has('c');
  if (t > PARAMS.seuilsTauxArrets.eleve
      || (sig && prevention === 'non')
      || (I >= PARAMS.seuilsIndiceProfil.eleve && (sig || prevention === 'non')))
    return 'high';
  if (t > PARAMS.seuilsTauxArrets.modere || sig || prevention === 'non'
      || I >= PARAMS.seuilsIndiceProfil.modere)
    return 'med';
  return 'low';
}

function repereSectoriel(secteur, E) {
  var ifS = PARAMS.ifTmsSecteur[secteur];
  return {
    ifSecteur: ifS,                                         // ‰, afficher 2 décimales
    ifNational: PARAMS.ifTmsNational,
    rapport: Math.round(ifS / PARAMS.ifTmsNational * 100) / 100,
    mpAttenduesAn: Math.round(E * ifS / 1000 * 100) / 100,  // MP-TMS reconnues attendues par an
    joursParMp: PARAMS.joursParMpTms
  };
}

function scenarios(cTotal) {                            // économie potentielle en €, aucun ratio
  return PARAMS.scenariosReduction.map(function (x) {
    return { reduction: x, economie: Math.round(cTotal * x) };
  });
}

function avertissementArrets(E, N) { return N / E > PARAMS.seuilAvertissementArrets; }
```

**Règles :**
- La prévention n'entre dans aucun coût.
- Avec `N = 0` : tous les coûts et les jours valent 0 ; le niveau de risque, les exposés et le repère sectoriel restent calculés.
- Drapeaux à remonter à l'affichage et au PDF : `defautSexe`, `defautAge`, `defautDuree`, `defautPostesEgaux`.

### 7.4 Cas type, sortie attendue pour les tests Dev

Entrées : secteur `logistique`, E = 120, postes { manuel 70, sedentaire 30 }, partFemmes 0,40, ages [20, 40, 35, 5], N = 8, D = 22, signaux {a}, prevention `partiel`.

| Sortie | Valeur attendue |
|---|---|
| coutJour() | 282,3318… € |
| jArret | 176 |
| ratioPres | 2,0 |
| cAbs | **49 690 €** |
| cPres | **24 845 €** |
| cInd | **24 845 €** |
| cTotal | **99 380 €** |
| jPresEq | **88** |
| jTotal | **264** |
| exposes | **84** |
| coefSexe | 0,97743… |
| coefAge | 1,28 |
| coefPostes | 1,33 |
| relSect | 1,82126… (3,77 / 2,07) |
| indiceProfil | **3,03** (3,0305…) |
| niveauRisque | **high**, car I ≥ 2,0 et signal présent (avec l'ancienne règle : « med ») |
| repereSectoriel | ifSecteur 3,77 ; ifNational 2,07 ; rapport 1,82 ; mpAttenduesAn 0,45 ; joursParMp 326 |
| scenarios | 10 % → **9 938 €** ; 20 % → **19 876 €** ; 30 % → **29 814 €** |
| avertissementArrets | false |
| Drapeaux défaut | aucun |

**Tests complémentaires :**
- Mêmes entrées, D = « Je ne sais pas » : j = 720 ; cAbs = 203 279 ; cPres = 101 639 ; cInd = 101 639 ; cTotal = 406 557 ; jPresEq = 360 ; drapeau `defautDuree`.
- Mêmes entrées, sexe et âge « Je ne sais pas » : coefSexe = 1 ; coefAge = 1 ; I = 1,8213 × 1 × 1 × 1,33 = 2,42 → toujours `high`. Coûts inchangés.
- N = 0 : cTotal = 0 ; jTotal = 0 ; niveau `med` (signal présent) ; repère sectoriel inchangé.

Le §4 annonçait un total de 99 381 €, calculé sans arrondir chaque composante. La valeur de référence pour les tests est **99 380 €** (somme des composantes arrondies).
