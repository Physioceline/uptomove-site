# Calculateur TMS : textes définitifs (passage 2)

Agent : `calc-redaction` · Chantier : `refonte-charte` · Date : 2026-10-04
Skill `redaction-celine` relancée avant rédaction. Aucun fichier du site modifié.

Entrées suivies : décisions (`calc-decisions-…`, prioritaires), structure UX/UI (`calc-ux-ui-…` §3 à §5), mots-clés SEO (`calc-seo-keywords-…` §1.4, §1.5), données (`calc-donnees-…` §3 et §6, `calculateur/SOURCES.md` « Registre validé »). Les valeurs par défaut et la règle de risque viennent de « PARAMS v2 » (§7 du livrable Données, S34 à S38). Les points encore ouverts sont listés au §8.

## Conventions pour Dev

- `{{variable}}` = valeur calculée ou paramètre, injecté par le script. Les montants sont arrondis à l'euro et formatés `fr-FR` (`99 380 €`).
- Espace insécable avant `%`, `€`, `?`, `!` et après « n° ». Écrire `10 %`, `282 €`.
- Aucun tiret long dans les textes. Les flèches `→` sont voulues sur les CTA, comme sur l'index.
- Les identifiants suivent l'ordre de la spec UX/UI. Un texte « (sr) » est réservé aux lecteurs d'écran.
- Les accents des valeurs internes (`sedentaire`, `Sedentaires`) ne doivent jamais apparaître : utiliser les libellés de ce document.

---

## 0. Textes supprimés

| Ancien texte | Raison |
|---|---|
| Hero « Outil offert — Prévention TMS », H1 sur trois lignes, sous-titre « coût réel… leviers pour agir » | Remplacés (§1) |
| « INRS : les femmes sont 2× plus exposées aux TMS » | Attribution erronée (S09) |
| « INRS : risque ×3 après 45 ans », « Risque faible / modéré / élevé ×3 / très élevé » sous les tranches d'âge, « (âge légal de départ) » | Attribution erronée (S10), affirmation non vérifiée |
| « (INRS : les signaux faibles précèdent les arrêts de 6 à 18 mois en moyenne) » | Attribution erronée (S14) |
| Sous-libellés pronostics des signaux (« risque élevé de passage en arrêt », « TMS en développement »…) | Diagnostic implicite non sourcé |
| Étape « Votre rapport offert » en entier (titre, liste, bouton « Voir mon rapport ») | Écran supprimé (décision 5) |
| CTA « Intervention prioritaire recommandée… réduisent de 30% les douleurs dès les premières semaines » | Promesse non sourcée (S16) |
| CTA « Formation préventive — sécurisez votre trajectoire… dans les 12 à 24 mois » | Hypothèse non sourcée (S19) |
| « …sécurise votre DUERP » | Inexact |
| Bloc « ROI estimé » (×N, « Basé sur une réduction de 30%… données INRS ») | Décisions 2 et 4, attribution erronée (S12) |
| Disclaimer « Estimations calculées sur la base des données INRS et de l'Assurance Maladie… » | Attribution erronée (S20), remplacé par §2.6 et §3 |
| Modale « Recevez votre analyse TMS » | Remplacée par le panneau PDF (§2.12) |
| Tous les `alert()` | Remplacés par les messages en ligne (§2.13) |
| PDF : note « * Présentielle dégradée… 1,5x… Base : 220j/an, 35% effectif exposé… Source : INRS », « Source INRS : coût moyen arrêt TMS entre 6 000 et 25 000 € », bloc ROI | Attributions erronées (S17, S18, S20), décisions 2 et 4 |
| Bouton « Exporter les leads CSV » et ses messages | Fonction supprimée (décision 8) |
| Intitulés de formation « Debout prolongé » et « Conduite » | N'existent pas dans `formations.html` (décision 9) |

---

## 1. Hero

| Id | Texte |
|---|---|
| skip.link | Aller au calculateur |
| hero.surtitre | Outil gratuit · Prévention des troubles musculo-squelettiques |
| hero.h1 | Calculateur des coûts cachés des TMS en entreprise |
| hero.intro | Estimez en 3 minutes le coût des TMS dans votre entreprise, des arrêts de travail aux coûts cachés (perte de productivité, remplacements, désorganisation des équipes). Vous obtenez aussi votre niveau de risque et un repère par rapport à votre secteur. |
| hero.reassurance.1 | Résultat immédiat, sans inscription |
| hero.reassurance.2 | Calcul fait dans votre navigateur, rien n'est envoyé sans votre accord |
| hero.reassurance.3 | Méthode et sources consultables |
| hero.reassurance.3.lien | Méthode et sources consultables (lien vers `#methode`, ouvre le bloc) |
| hero.cta | Commencer le calcul → |
| hero.apercu.etiquette | Exemple de restitution |
| hero.apercu.cout.label | Coût annuel estimé |
| hero.apercu.cout.valeur | 99 380 € |
| hero.apercu.risque.label | Niveau de risque |
| hero.apercu.risque.valeur | Élevé |
| hero.apercu.ligne1.label | Jours d'arrêt liés aux TMS |
| hero.apercu.ligne1.valeur | 176 jours par an |
| hero.apercu.ligne2.label | Postes les plus exposés |
| hero.apercu.ligne2.valeur | Manutention |
| hero.apercu.mention | Exemple fictif : 120 salariés en logistique. |

Note : valeurs du cas type de Données (§7.4, 120 salariés en logistique, 8 arrêts de 22 jours), calculées avec PARAMS v2. Le 128 400 € de l'index ne doit pas être repris sur cette page (l'accueil relève du chantier site).

Réassurance 2 : à confirmer par Dev (le calcul est local et la persistance `sessionStorage` ne quitte pas le navigateur).

---

## 2. Bloc calculateur

### 2.1 Stepper

| Id | Texte |
|---|---|
| stepper.etape1 | Entreprise |
| stepper.etape2 | Équipes |
| stepper.etape3 | Absentéisme |
| stepper.resultats | Résultats |
| stepper.position | Étape {{n}} sur 3 |
| stepper.etape-faite (sr) | {{libellé}}, étape terminée, revenir à cette étape |
| stepper.etape-courante (sr) | {{libellé}}, étape en cours |

### 2.2 Résumé d'erreurs (en tête d'étape, si 2 erreurs ou plus)

| Id | Texte |
|---|---|
| erreurs.resume.titre | {{n}} réponses sont à compléter avant de continuer |
| erreurs.resume.item | Lien vers le champ, avec le texte de son message d'erreur (§2.13) |

### 2.3 Étape 1, Votre entreprise

| Id | Texte |
|---|---|
| etape1.titre (h2) | Votre entreprise |
| etape1.intro | Trois questions pour situer votre activité. Les champs sont tous obligatoires. |
| etape1.secteur.label | Secteur d'activité |
| etape1.secteur.placeholder | Choisissez votre secteur |
| etape1.secteur.option.industrie | Industrie |
| etape1.secteur.option.logistique | Logistique et entreposage |
| etape1.secteur.option.btp | BTP |
| etape1.secteur.option.sante | Santé et médico-social |
| etape1.secteur.option.commerce | Commerce |
| etape1.secteur.option.restauration | Restauration et hôtellerie |
| etape1.secteur.option.bureau | Bureau et tertiaire |
| etape1.secteur.option.transport | Transport |
| etape1.secteur.option.autre | Autre secteur |
| etape1.effectif.label | Nombre de salariés |
| etape1.effectif.aide | Effectif total, tous sites confondus. |
| etape1.effectif.placeholder | Par exemple 120 |
| etape1.postes.legend | Quels types de postes existent dans votre entreprise ? |
| etape1.postes.aide | Cochez tous ceux qui vous concernent. |
| etape1.postes.sedentaire.titre | Postes sédentaires |
| etape1.postes.sedentaire.desc | Bureau, travail sur écran, position assise prolongée |
| etape1.postes.manuel.titre | Postes de manutention |
| etape1.postes.manuel.desc | Port de charges, gestes répétitifs |
| etape1.postes.debout.titre | Postes debout |
| etape1.postes.debout.desc | Station debout prolongée (commerce, restauration, caisse) |
| etape1.postes.conduite.titre | Postes de conduite |
| etape1.postes.conduite.desc | Position assise prolongée et vibrations (transport, livraison, engins) |
| etape1.postes.repartition.intro | Indiquez la part de chaque type de poste. Nous avons réparti l'effectif à parts égales, vous pouvez ajuster. |
| etape1.postes.pct.sedentaire.label | Part des postes sédentaires, en % |
| etape1.postes.pct.manuel.label | Part des postes de manutention, en % |
| etape1.postes.pct.debout.label | Part des postes debout, en % |
| etape1.postes.pct.conduite.label | Part des postes de conduite, en % |
| compteur.reste | Total {{total}} %, il reste {{reste}} % à répartir |
| compteur.depasse | Total {{total}} %, retirez {{exces}} % |
| compteur.complet | Total 100 % |
| etape1.bouton | Continuer → |

Les trois messages `compteur.*` servent aussi aux répartitions de l'étape 2.

### 2.4 Étape 2, Vos équipes

| Id | Texte |
|---|---|
| etape2.retour | ← Retour |
| etape2.titre (h2) | Vos équipes |
| etape2.intro | Le profil de vos salariés affine le niveau de risque. Si vous n'avez pas ces chiffres, cochez « Je ne connais pas la répartition ». |
| etape2.femmes.label | Part de femmes dans l'effectif, en % |
| etape2.femmes.aide | Les femmes représentent 55 % des TMS reconnus en maladie professionnelle pour 47 % des salariés (Assurance Maladie – Risques professionnels, données 2023). |
| etape2.femmes.curseur (sr) | Part de femmes, en % |
| etape2.femmes.deduit | Soit {{pct_hommes}} % d'hommes |
| etape2.femmes.jnsp | Je ne connais pas la répartition |
| etape2.femmes.jnsp.actif | Nous utilisons la part moyenne de femmes parmi les salariés en France, 47 % (Assurance Maladie – Risques professionnels, données 2023). |
| etape2.age.legend | Répartition de l'effectif par âge, en % |
| etape2.age.aide | En 2024, 56 % des TMS reconnus en maladie professionnelle concernaient des salariés de 50 à 64 ans (Assurance Maladie). |
| etape2.age.t1.label | Part des 16-29 ans, en % |
| etape2.age.t2.label | Part des 30-44 ans, en % |
| etape2.age.t3.label | Part des 45-64 ans, en % |
| etape2.age.t4.label | Part des 65 ans et plus, en % |
| etape2.age.jnsp | Je ne connais pas la répartition |
| etape2.age.jnsp.actif | L'âge ne sera pas pris en compte dans votre niveau de risque. Il n'influence pas le coût estimé. |
| etape2.bouton | Continuer → |


### 2.5 Étape 3, Absentéisme et prévention

| Id | Texte |
|---|---|
| etape3.retour | ← Retour |
| etape3.titre (h2) | Vos arrêts de travail et votre prévention |
| etape3.intro | Sur les 12 derniers mois. Une estimation suffit. |
| etape3.arrets.label | Nombre d'arrêts de travail liés aux TMS |
| etape3.arrets.aide | Tous les arrêts pour douleurs du dos, du cou, des épaules, des coudes ou des poignets, reconnus ou non en maladie professionnelle. Indiquez 0 s'il n'y en a pas eu. |
| etape3.arrets.placeholder | Par exemple 8 |
| etape3.arrets.alerte | Ce nombre dépasse votre effectif. C'est possible si certains salariés ont eu plusieurs arrêts, vérifiez simplement votre saisie. |
| etape3.duree.label | Durée moyenne d'un arrêt, en jours |
| etape3.duree.placeholder | Par exemple 22 |
| etape3.duree.jnsp | Je ne sais pas |
| etape3.duree.jnsp.actif | Nous retenons 90 jours par arrêt, la durée moyenne d'un arrêt pour accident lié au dos selon l'Assurance Maladie. C'est un repère approximatif pour l'ensemble des TMS, indiquez votre durée réelle si vous la connaissez. |
| etape3.signaux.legend | Avez-vous observé ces signaux dans vos équipes ? (facultatif) |
| etape3.signaux.aide | Plusieurs réponses possibles. |
| etape3.signaux.a.titre | Plaintes régulières de douleurs |
| etape3.signaux.a.desc | Dos, épaules, poignets, signalées plusieurs fois dans l'année |
| etape3.signaux.b.titre | Gestes ralentis ou évités |
| etape3.signaux.b.desc | Des salariés contournent certains mouvements ou changent leur façon de travailler |
| etape3.signaux.c.titre | Demandes d'aménagement ou de changement de poste |
| etape3.signaux.c.desc | Pour des raisons physiques |
| etape3.signaux.d.titre | Aucun de ces signaux |
| etape3.signaux.annonce.d (sr) | « Aucun de ces signaux » est coché, les autres réponses ont été décochées. |
| etape3.signaux.annonce.autre (sr) | « Aucun de ces signaux » a été décoché. |
| etape3.prevention.legend | Avez-vous une démarche de prévention des TMS ? |
| etape3.prevention.oui.titre | Oui |
| etape3.prevention.oui.desc | Une démarche formalisée, avec un plan d'actions suivi |
| etape3.prevention.partiel.titre | En partie |
| etape3.prevention.partiel.desc | Des actions ponctuelles, sans plan d'ensemble |
| etape3.prevention.non.titre | Non |
| etape3.prevention.non.desc | Pas encore de démarche engagée |
| etape3.bouton | Calculer mon coût → |

### 2.6 Résultats, R1 synthèse

| Id | Texte |
|---|---|
| resultat.titre (h2) | Le coût estimé des TMS dans votre entreprise |
| resultat.cout.valeur | {{cout_total}} € par an |
| resultat.cout.mention | Estimation indicative, calculée à partir de vos réponses. |
| resultat.cout.lien-methode | Comment est calculé ce résultat |
| resultat.contexte | {{effectif}} salariés · {{secteur_libelle}} |
| resultat.badge.eleve | Risque élevé |
| resultat.badge.modere | Risque modéré |
| resultat.badge.faible | Risque faible |
| resultat.badge.aide | Ce niveau combine vos arrêts rapportés à l'effectif, les signaux observés, votre démarche de prévention et votre profil (secteur, postes, âge, part de femmes). Les seuils sont des hypothèses UP TO MOVE. |
| resultat.defaut.femmes | Calculé avec la part moyenne de femmes (47 %). Modifier |
| resultat.defaut.age | Niveau de risque établi sans tenir compte de l'âge de vos équipes. Modifier |
| resultat.defaut.duree | Calculé avec une durée par défaut de 90 jours par arrêt, qui pèse fortement sur le montant. Modifier |
| resultat.defaut.postes | Calculé avec une répartition à parts égales entre vos types de postes. Modifier |
| resultat.annonce (sr) | Résultat affiché. Coût annuel estimé {{cout_total}} euros, {{badge}}. |
| resultat.zero-arret | Vous n'avez déclaré aucun arrêt lié aux TMS sur 12 mois, le coût estimé est donc nul. Le niveau de risque et le repère sectoriel ci-dessous restent utiles pour anticiper. |

`resultat.defaut.*` : une ligne par valeur par défaut effectivement utilisée. « Modifier » est un lien vers l'étape concernée.
`resultat.defaut.postes` : à afficher seulement si l'utilisateur a coché plusieurs types de postes sans modifier la répartition proposée (drapeau `defautPostesEgaux`, hypothèse S37).

### 2.7 R1-bis, repère sectoriel (S26, S22)

| Id | Texte |
|---|---|
| secteur.titre (h3) | Votre secteur face à la moyenne nationale |
| secteur.texte.au-dessus | Dans le secteur {{secteur_libelle_min}}, on compte {{if_secteur}} TMS reconnus en maladie professionnelle pour 1 000 salariés par an, soit {{rapport_secteur}} fois la moyenne nationale (2,07 pour 1 000). |
| secteur.texte.proche | Dans le secteur {{secteur_libelle_min}}, on compte {{if_secteur}} TMS reconnus en maladie professionnelle pour 1 000 salariés par an, un niveau proche de la moyenne nationale (2,07 pour 1 000). |
| secteur.texte.en-dessous | Dans le secteur {{secteur_libelle_min}}, on compte {{if_secteur}} TMS reconnus en maladie professionnelle pour 1 000 salariés par an, en dessous de la moyenne nationale (2,07 pour 1 000). |
| secteur.texte.autre | Pour votre secteur, nous utilisons la moyenne nationale, soit 2,07 TMS reconnus en maladie professionnelle pour 1 000 salariés par an. |
| secteur.attendu.inf2 | À effectif égal, votre entreprise compterait en moyenne {{mp_attendues}} maladie professionnelle liée aux TMS par an. Chacune représente en moyenne 326 jours de travail perdus. |
| secteur.attendu.sup2 | À effectif égal, votre entreprise compterait en moyenne {{mp_attendues}} maladies professionnelles liées aux TMS par an. Chacune représente en moyenne 326 jours de travail perdus. |
| secteur.limite.bureau | Les TMS du travail de bureau sont moins souvent reconnus en maladie professionnelle, ce chiffre sous-estime donc probablement le risque réel. |
| secteur.source | Source : Assurance Maladie – Risques professionnels, données 2024 (calcul UP TO MOVE). |

Choix de la variante : « au-dessus » si le rapport au national dépasse 1,10, « proche » de 0,90 à 1,10, « en dessous » sous 0,90 (seuils de rédaction, sans effet sur le calcul). `secteur.attendu.inf2` si `mpAttenduesAn` < 2 (singulier en français), `sup2` sinon. `{{mp_attendues}}` et `{{rapport_secteur}}` s'affichent avec deux décimales, comme les renvoie `repereSectoriel` (« 0,45 », « 1,82 »). `secteur.limite.bureau` s'affiche seulement pour « Bureau et tertiaire ».

Valeurs par secteur (`{{secteur_libelle_min}}` · `{{if_secteur}}` · `{{rapport_secteur}}` · variante) :

| Valeur | Libellé dans la phrase | IF ‰ | Rapport | Variante |
|---|---|---|---|---|
| industrie | de l'industrie | 3,91 | 1,89 | au-dessus |
| logistique | de la logistique et de l'entreposage | 3,77 | 1,82 | au-dessus |
| btp | du BTP | 3,75 | 1,81 | au-dessus |
| sante | de la santé et du médico-social | 2,57 | 1,24 | au-dessus |
| commerce | du commerce | 2,39 | 1,15 | au-dessus |
| restauration | de la restauration et de l'hôtellerie | 1,80 | 0,87 | en dessous |
| transport | du transport | 1,58 | 0,76 | en dessous |
| bureau | du bureau et du tertiaire | 0,35 | 0,17 | en dessous |
| autre | (sans objet) | 2,07 | 1 | autre |

### 2.8 R2, décomposition

| Id | Texte |
|---|---|
| detail.titre (h3) | Le détail de vos coûts directs et cachés |
| detail.absence.label | Jours d'absence |
| detail.absence.desc | Valeur des journées de travail perdues pendant les arrêts |
| detail.absence.valeur | {{c_abs}} € |
| detail.presenteisme.label | Perte de productivité |
| detail.presenteisme.desc | Salariés présents mais gênés par la douleur (hypothèse UP TO MOVE) |
| detail.presenteisme.valeur | {{c_pres}} € |
| detail.indirects.label | Coûts indirects |
| detail.indirects.desc | Remplacements, heures supplémentaires, réorganisation (hypothèse UP TO MOVE) |
| detail.indirects.valeur | {{c_ind}} € |
| detail.total.label | Total estimé |
| detail.total.valeur | {{cout_total}} € |
| detail.jours.valeur | {{jours_arret}} |
| detail.jours.label | jours d'arrêt par an |
| detail.jours.complement | et l'équivalent de {{jours_pres}} jours de productivité perdue |
| detail.exposes.valeur | {{exposes}} |
| detail.exposes.label | salariés sur des postes physiques |
| detail.exposes.aide | Manutention, station debout prolongée et conduite, d'après votre répartition. Le travail sur écran expose aussi aux TMS, sous d'autres formes. |

### 2.9 R3, ce que vous pouvez faire

| Id | Texte |
|---|---|
| action.titre (h3) | Ce que vous pouvez faire |

Encadré selon le niveau de risque :

| Id | Titre | Texte |
|---|---|---|
| action.eleve | Agir d'abord sur les postes les plus exposés | Vos arrêts et les signaux observés placent votre entreprise dans la tranche haute de notre échelle. La première étape consiste à repérer les postes concernés puis à former les équipes qui les occupent, sur leurs gestes réels. Nos kinésithérapeutes interviennent dans vos locaux, en une heure par groupe. |
| action.modere | Traiter les signaux avant qu'ils ne deviennent des arrêts | Votre situation présente des points de vigilance. C'est le bon moment pour sensibiliser vos équipes et revoir les gestes des postes les plus sollicités, avant que les douleurs ne s'installent. |
| action.faible | Ancrer les bons réflexes dans la durée | Vos indicateurs se situent dans la tranche basse de notre échelle. Une action de prévention régulière aide à maintenir cette situation et alimente votre DUERP, dans le cadre de votre obligation de prévention (article L.4121-1 du Code du travail). |

| Id | Texte |
|---|---|
| formations.titre (h3) | Les formations adaptées à vos postes |
| formations.intro | Sélectionnées selon vos types de postes et votre démarche de prévention. Toutes sont animées par des kinésithérapeutes diplômés d'État. |
| formations.carte.duree | {{duree}} |
| formations.carte.pratique | {{part_pratique}} |
| formations.carte.lien | Voir la formation → |

Cartes (intitulés, durées et part de pratique repris de `formations.html`) :

| Id | Titre | Durée | Pratique | Description | Lien |
|---|---|---|---|---|---|
| formation.conference | Conférence Sensibilisation TMS | 30 min | 100 % théorie | Une première étape pour sensibiliser l'ensemble de vos équipes à la prévention des TMS, quels que soient les métiers. | `formations#sedentaires` ou `formations#manutention` |
| formation.egp-sedentaire | Économies gestuelles et posturales « Sédentaire » | 1 h | 50 % pratique | Les gestes et les postures adaptés au poste sédentaire et au travail sur écran. Guide de la mobilité générale remis à chaque participant. | `formations#sedentaires` |
| formation.analyse-sedentaire | Analyse individuelle de poste | 30 min par poste | 100 % pratique | Un kinésithérapeute observe le salarié sur son poste réel et lui donne des recommandations personnalisées. | `formations#sedentaires` |
| formation.automassage-sedentaire | Atelier Auto-massage | 1 h | 75 % pratique | Des techniques simples d'auto-massage pour relâcher les tensions de la nuque, des épaules et des bras. Guide de l'auto-massage remis à chaque participant. | `formations#sedentaires` |
| formation.stress-sedentaire | Gestion des situations à stress | 1 h | 75 % pratique | Des outils pratiques pour gérer le stress au quotidien, à partir de la respiration. Guide de la respiration et visualisation remis à chaque participant. | `formations#sedentaires` |
| formation.fatigue-visuelle | Prévention fatigue visuelle | 45 min | 75 % pratique | Comprendre et réduire au quotidien la fatigue visuelle liée au travail sur écran. Guide de la prévention de la fatigue visuelle remis à chaque participant. | `formations#sedentaires` |
| formation.egp-manutention | Économies gestuelles et posturales « Manutention » | 1 h | 50 % pratique | Les bons gestes et postures pour la manutention manuelle et les postes en station debout. Guide de la mobilité générale remis à chaque participant. | `formations#manutention` |
| formation.analyse-manutention | Analyse individuelle de poste | 30 min par poste | 100 % pratique | Observation des gestes réels sur le poste de manutention et recommandations personnalisées. | `formations#manutention` |
| formation.echauffement | Échauffement | 1 h | 80 % pratique | Un programme d'échauffement adapté à vos métiers, pour préparer le corps à l'effort dès la prise de poste. Guide de l'échauffement remis à chaque participant. | `formations#manutention` |
| formation.automassage-manutention | Atelier Auto-massage | 1 h | 75 % pratique | Des techniques d'auto-massage pour soulager les tensions liées aux contraintes physiques du poste. Guide de l'auto-massage remis à chaque participant. | `formations#manutention` |
| formation.stress-manutention | Gestion des situations à stress | 1 h | 75 % pratique | Des outils pratiques pour gérer le stress physique et psychologique des métiers de terrain. Guide de la respiration et visualisation remis à chaque participant. | `formations#manutention` |

Correspondance proposée pour remplacer les formations inventées (logique `getFormations`, à valider par l'agent principal) :
- Postes debout → formations « Manutention » (la fiche Économies gestuelles et posturales « Manutention » couvre explicitement la station debout).
- Postes de conduite → Conférence, Analyse individuelle de poste (manutention), Gestion des situations à stress (manutention), Atelier Auto-massage (manutention). Aucune formation du catalogue ne cible la conduite, je n'ai donc retenu que des formats non spécifiques à un geste.

Note de vérification : « Atelier Auto-massage » (sédentaire) indique dans `formations.html` le public « Équipes bureau / écran » ; « nuque, épaules, bras » reprend l'ancienne description du calculateur et reste à confirmer par Céline (le programme n'a pas été relu en détail).

### 2.10 R4, gain potentiel d'une démarche de prévention

| Id | Texte |
|---|---|
| gain.titre (h3) | Ce que pourrait représenter une démarche de prévention |
| gain.etiquette | Hypothèse UP TO MOVE |
| gain.intro | Trois scénarios appliqués à votre coût estimé. Ce sont des hypothèses de calcul, pas des résultats garantis. |
| gain.scenario10.label | Si vos coûts liés aux TMS baissaient de 10 % |
| gain.scenario10.valeur | {{eco10}} € par an |
| gain.scenario20.label | Si vos coûts liés aux TMS baissaient de 20 % |
| gain.scenario20.valeur | {{eco20}} € par an |
| gain.scenario30.label | Si vos coûts liés aux TMS baissaient de 30 % |
| gain.scenario30.valeur | {{eco30}} € par an |
| gain.repere | À titre de repère, une étude menée auprès de 300 entreprises de 19 pays estime le retour moyen des actions de santé et de sécurité au travail à 2,2 € pour 1 € investi (AISS et DGUV, The return on prevention, 2011). Ce chiffre, établi d'après les déclarations des entreprises, porte sur l'ensemble des actions de prévention et ne constitue pas une prévision pour la vôtre. |

### 2.11 R5, actions

| Id | Texte |
|---|---|
| actions.devis | Demander un devis gratuit |
| actions.devis.reassurance | Réponse sous 48 heures, intervention possible partout en France. |
| actions.pdf | Recevoir le rapport PDF |
| actions.modifier | Modifier mes réponses |
| actions.recommencer | Recommencer |

### 2.12 R6, panneau PDF

| Id | Texte |
|---|---|
| pdf.panneau.titre (h3) | Recevez votre rapport en PDF |
| pdf.panneau.intro | Vos résultats, le détail du calcul et les formations recommandées, dans un document à partager avec votre direction ou votre CSE. Tous les champs sont obligatoires. |
| pdf.champ.prenom | Prénom |
| pdf.champ.nom | Nom |
| pdf.champ.fonction | Fonction |
| pdf.champ.fonction.placeholder | Par exemple DRH, responsable QHSE |
| pdf.champ.entreprise | Entreprise |
| pdf.champ.email | Email professionnel |
| pdf.champ.email.placeholder | nom@entreprise.fr |
| pdf.champ.telephone | Téléphone |
| pdf.consentement | Vos coordonnées nous servent à vous envoyer ce rapport et à vous recontacter au sujet de la prévention des TMS. Elles ne sont pas transmises à des tiers. |
| pdf.consentement.lien | Consulter notre politique de vie privée |
| pdf.bouton | Recevoir mon rapport |
| pdf.etat.envoi | Envoi en cours… |
| pdf.etat.succes | Merci, votre rapport se télécharge. |
| pdf.etat.succes.lien | Le téléchargement n'a pas démarré ? Télécharger à nouveau |
| pdf.etat.erreur-reseau | L'envoi n'a pas abouti. Vos réponses sont conservées, réessayez dans un instant ou écrivez-nous à info@uptomove.fr. |
| pdf.etat.erreur-jspdf | Vos coordonnées nous sont bien parvenues, mais le PDF n'a pas pu être créé sur votre appareil. Réessayez ou écrivez-nous à info@uptomove.fr. |
| pdf.formspree.subject | Rapport calculateur TMS, UP TO MOVE |

Formulation de `pdf.consentement` : la phrase actuelle (« jamais partagées avec des tiers ») a été reprise sur le fond. Formspree reste un sous-traitant technique, la mention complète relève de Céline.
`pdf.etat.erreur-jspdf` : la question UX n° 5 (envoi manuel du rapport ?) n'est pas tranchée. Si Céline envoie le rapport à la main, remplacer la 2e phrase par « Nous vous l'envoyons par email dans les 48 heures. »

### 2.13 Messages d'erreur (en ligne, sous le champ)

| Id | Texte |
|---|---|
| erreur.secteur | Choisissez votre secteur d'activité. |
| erreur.effectif.vide | Indiquez le nombre de salariés. |
| erreur.effectif.invalide | Indiquez un nombre entier, au moins 1. |
| erreur.postes.aucun | Cochez au moins un type de poste. |
| erreur.postes.total | La répartition des postes doit totaliser 100 %. Il reste {{reste}} % à répartir. |
| erreur.postes.total-depasse | La répartition des postes doit totaliser 100 %. Retirez {{exces}} %. |
| erreur.femmes.vide | Indiquez la part de femmes, ou cochez « Je ne connais pas la répartition ». |
| erreur.femmes.invalide | Indiquez un pourcentage entre 0 et 100. |
| erreur.age.vide | Indiquez la répartition par âge, ou cochez « Je ne connais pas la répartition ». |
| erreur.age.total | La répartition par âge doit totaliser 100 %. Il reste {{reste}} % à répartir. |
| erreur.age.total-depasse | La répartition par âge doit totaliser 100 %. Retirez {{exces}} %. |
| erreur.arrets.vide | Indiquez le nombre d'arrêts, 0 s'il n'y en a pas eu. |
| erreur.arrets.invalide | Indiquez un nombre entier, 0 ou plus. |
| erreur.duree.vide | Indiquez la durée moyenne d'un arrêt, ou cochez « Je ne sais pas ». |
| erreur.duree.invalide | Indiquez un nombre de jours, au moins 1. |
| erreur.prevention | Indiquez si vous avez une démarche de prévention. |
| erreur.pdf.prenom | Indiquez votre prénom. |
| erreur.pdf.nom | Indiquez votre nom. |
| erreur.pdf.fonction | Indiquez votre fonction. |
| erreur.pdf.entreprise | Indiquez le nom de votre entreprise. |
| erreur.pdf.email.vide | Indiquez votre email professionnel. |
| erreur.pdf.email.invalide | Indiquez une adresse email valide, par exemple nom@entreprise.fr. |
| erreur.pdf.telephone | Indiquez votre numéro de téléphone. |
| erreur.calcul-incomplet | Terminez d'abord les trois étapes du calcul. |

---

## 3. Bloc « Comment est calculé ce résultat » (`id="methode"`, replié)

| Id | Texte |
|---|---|
| methode.titre (h2) | Comment est calculé ce résultat |
| methode.resume (summary) | Méthode, sources et limites de l'estimation |
| methode.principe.titre (h3) | Le principe |
| methode.principe.texte | Le calculateur estime ce que coûtent à votre entreprise les arrêts de travail liés aux TMS que vous déclarez, en ajoutant la perte de productivité et les coûts indirects qui les accompagnent. Le secteur, les postes, l'âge et la répartition femmes-hommes servent à situer votre niveau de risque, ils ne modifient pas le montant en euros. L'outil ne remplace ni un audit ni l'analyse de vos données de paie. |
| methode.composantes.titre (h3) | Les trois composantes du coût |
| methode.composantes.absence | Jours d'absence. Nombre d'arrêts × durée moyenne × coût d'une journée de travail. Une journée vaut le coût salarial annuel moyen divisé par 220 jours, soit 282 €. |
| methode.composantes.presenteisme | Perte de productivité. Avant et après un arrêt, un salarié qui a mal travaille souvent moins efficacement. Nous comptons 1,4 à 2 jours de présence gênée par jour d'absence, selon les signaux que vous avez cochés, avec une perte de productivité de 25 % sur ces jours. |
| methode.composantes.indirects | Coûts indirects. Remplacements, heures supplémentaires et réorganisation, estimés à la moitié du coût des absences. |
| methode.tableau.titre (h3) | Les données utilisées |
| methode.tableau.col1 | Donnée |
| methode.tableau.col2 | Valeur |
| methode.tableau.col3 | Source |
| methode.tableau.col4 | Statut |
| methode.sourcé | Sourcé |
| methode.hypothese | Hypothèse UP TO MOVE |
| methode.defauts.titre (h3) | Si vous avez répondu « Je ne sais pas » |
| methode.defauts.texte | Pour la part de femmes, nous retenons 47 %, la moyenne des salariés en France (Assurance Maladie – Risques professionnels, données 2023), ce qui revient à ne pas ajuster le niveau de risque. L'âge n'est pas pris en compte, faute de répartition nationale publiée par tranche. Pour la durée d'un arrêt, nous retenons 90 jours, la durée moyenne d'un arrêt pour accident lié au dos selon l'Assurance Maladie (ameli.fr, 2026), utilisée comme approximation. Le résultat signale chaque valeur par défaut utilisée. |
| methode.limites.titre (h3) | Les limites de l'estimation |
| methode.limites.1 | Une journée perdue est valorisée au coût salarial complet. Ce que l'employeur débourse réellement est plus faible, car les indemnités journalières de la Sécurité sociale en couvrent une partie. |
| methode.limites.2 | La perte de productivité, les coûts indirects, le choix du ratio selon les signaux, les coefficients d'âge et de poste, les seuils de risque et les scénarios de réduction sont des hypothèses UP TO MOVE. |
| methode.limites.3 | Le repère sectoriel porte sur les TMS reconnus en maladie professionnelle, qui sont sous-déclarés, surtout pour le travail de bureau. |
| methode.limites.4 | Les 326 jours par maladie professionnelle reconnue décrivent des cas souvent lourds, bien plus longs que la plupart des arrêts TMS ordinaires. |
| methode.limites.5 | Le coût salarial est une moyenne nationale du secteur privé, sans ajustement par secteur ni par région. |
| methode.maj | Données mises à jour en octobre 2026. |

Tableau des paramètres (`methode.tableau.ligne.*`) :

| Id | Donnée | Valeur | Source | Statut |
|---|---|---|---|---|
| ligne.cout-salarial | Coût salarial annuel moyen | 62 113 € | Insee Première n° 2079, 2025 (salaire brut moyen 2024 dans le privé) et Insee Références « Les entreprises en France », 2023 (charges employeur 2022), calcul UP TO MOVE | Sourcé |
| ligne.jours-an | Jours travaillés par an | 220 | Convention de calcul (repère légal, forfait de 218 jours, article L3121-64 du Code du travail) | Hypothèse UP TO MOVE |
| ligne.presenteisme | Présence gênée par jour d'absence | 1,4 à 2 | INRS, Prévention et performance d'entreprise, 2017, p. 15 (bornes citées par l'INRS, toutes causes confondues). Choix selon les signaux par UP TO MOVE | Sourcé (bornes), hypothèse (choix) |
| ligne.productivite | Perte de productivité sur ces jours | 25 % | Aucune source publiée trouvée | Hypothèse UP TO MOVE |
| ligne.indirects | Coûts indirects | 50 % du coût des absences | Aucune source publiée transposable | Hypothèse UP TO MOVE |
| ligne.secteur | TMS reconnus pour 1 000 salariés, par secteur | de 0,35 à 3,91 (moyenne 2,07) | Assurance Maladie – Risques professionnels, données 2024, calcul UP TO MOVE | Sourcé |
| ligne.jours-mp | Jours perdus par TMS reconnu | 326 | Assurance Maladie – Risques professionnels, données 2024, calcul UP TO MOVE | Sourcé |
| ligne.femmes | Fréquence des TMS reconnus, femmes par rapport aux hommes | 1,38 | Assurance Maladie – Risques professionnels, Rapport annuel 2024, données 2023 | Sourcé |
| ligne.age | Coefficients par tranche d'âge (niveau de risque) | 0,7 · 1 · 1,8 · 2,2 | Aucun multiplicateur publié trouvé | Hypothèse UP TO MOVE |
| ligne.postes | Coefficients par type de poste (niveau de risque) | sédentaire 0,7 · manutention 1,6 · debout 1,3 · conduite 1,1 | Aucune source chiffrée trouvée | Hypothèse UP TO MOVE |
| ligne.seuils | Seuils du niveau de risque | arrêts rapportés à l'effectif 3 % et 8 %, indice de profil 1,5 et 2 | Aucune source publiée | Hypothèse UP TO MOVE |
| ligne.duree-defaut | Durée d'un arrêt si « Je ne sais pas » | 90 jours | Assurance Maladie, ameli.fr « Les TMS : pourquoi et comment agir », mise à jour du 16/03/2026 (arrêt pour accident lié au dos) | Sourcé, utilisé comme approximation |
| ligne.scenarios | Scénarios de réduction des coûts | 10 %, 20 %, 30 % | Aucune source publiée | Hypothèse UP TO MOVE |
| ligne.repere-roi | Retour moyen des actions de prévention | 2,2 € pour 1 € investi | AISS et DGUV, The return on prevention, 2011, repris par l'INRS en 2017 | Sourcé (contexte) |

Si Données conserve un ou plusieurs liens URL par ligne, les mettre sur le nom de la source.

---

## 4. FAQ courte

| Id | Question | Réponse |
|---|---|---|
| faq.titre (h2) | Questions fréquentes | |
| faq.1 | Comment le coût des TMS est-il calculé par cet outil ? | À partir de vos arrêts de travail déclarés, valorisés au coût salarial moyen publié par l'Insee, auxquels s'ajoutent la perte de productivité et les coûts indirects. Ces deux derniers postes reposent sur des hypothèses UP TO MOVE, indiquées comme telles dans la méthode ci-dessus. |
| faq.2 | Quelle différence entre coûts directs et coûts cachés des TMS ? | Les coûts directs correspondent aux journées d'absence. Les coûts cachés sont moins visibles dans vos tableaux de bord : un salarié qui travaille avec une douleur, un remplacement à organiser, une équipe qui compense. Ils sont rarement chiffrés, c'est pourquoi le calculateur les estime à part. |
| faq.3 | Le résultat est-il fiable pour mon entreprise ? | Il donne un ordre de grandeur, pas un montant comptable. Sa précision dépend de vos réponses et des hypothèses détaillées dans la méthode. Pour un chiffrage précis, il faut croiser vos données de paie, d'absentéisme et de cotisation AT/MP. |
| faq.4 | Mes données sont-elles enregistrées ? | Le calcul se fait dans votre navigateur, vos réponses ne nous sont pas transmises. Seule la demande de rapport PDF nous envoie vos coordonnées, le coût estimé, votre secteur, votre effectif et votre niveau de risque, pour vous adresser le rapport et vous recontacter. |
| faq.5 | Que faire une fois le coût estimé ? | Partager le résultat avec votre direction ou votre CSE, repérer les postes les plus exposés puis engager une démarche de prévention. Nous pouvons vous aider à la construire, avec des formations courtes animées par des kinésithérapeutes dans vos locaux. |

Le JSON-LD `FAQPage` reprendra ces questions et réponses mot pour mot.
`faq.4` : à confirmer par Dev après intégration (aucun envoi avant le formulaire, `sessionStorage` local). Les champs transmis correspondent à la décision 7.

---

## 5. Bloc de sortie

| Id | Texte |
|---|---|
| sortie.titre (h2) | Aller plus loin |
| sortie.texte | Découvrez nos formations, échangez avec nous sur votre situation ou lisez comment utiliser ce calculateur avec vos équipes. |
| sortie.lien.formations | Voir nos formations → |
| sortie.lien.contact | Nous contacter → |
| sortie.lien.article | Lire l'article sur le calculateur → |

---

## 6. Rapport PDF

| Id | Texte |
|---|---|
| pdf.doc.titre | Coût estimé des troubles musculo-squelettiques |
| pdf.doc.surtitre | RAPPORT DU CALCULATEUR TMS |
| pdf.doc.entreprise | {{entreprise}} |
| pdf.doc.date | Rapport établi le {{date}} |
| pdf.doc.badge | Risque élevé / Risque modéré / Risque faible |
| pdf.metrique.cout | Coût annuel estimé |
| pdf.metrique.jours | Jours d'arrêt par an |
| pdf.metrique.exposes | Salariés sur des postes physiques |
| pdf.defauts | Valeurs par défaut utilisées : {{liste_defauts}}. |
| pdf.detail.titre | DÉTAIL DU COÛT ANNUEL ESTIMÉ |
| pdf.detail.absence | Jours d'absence |
| pdf.detail.presenteisme | Perte de productivité (hypothèse UP TO MOVE) |
| pdf.detail.indirects | Coûts indirects (hypothèse UP TO MOVE) |
| pdf.detail.total | TOTAL ESTIMÉ |
| pdf.detail.jours-pres | S'y ajoute l'équivalent de {{jours_pres}} jours de productivité perdue. |
| pdf.secteur.titre | VOTRE SECTEUR FACE À LA MOYENNE NATIONALE |
| pdf.secteur.texte | Variante de §2.7 identique à la page (`secteur.texte.*`, `secteur.attendu.*`, `secteur.limite.bureau`). |
| pdf.secteur.source | Source : Assurance Maladie – Risques professionnels, données 2024 (calcul UP TO MOVE). |
| pdf.gain.titre | CE QUE POURRAIT REPRÉSENTER UNE DÉMARCHE DE PRÉVENTION |
| pdf.gain.etiquette | Hypothèse UP TO MOVE, pas un résultat garanti |
| pdf.gain.lignes | Baisse de 10 % : {{eco10}} € par an · Baisse de 20 % : {{eco20}} € par an · Baisse de 30 % : {{eco30}} € par an |
| pdf.gain.repere | Repère : 2,2 € de retour moyen pour 1 € investi dans la santé et la sécurité au travail, toutes actions confondues (AISS et DGUV, The return on prevention, 2011). |
| pdf.formations.titre | FORMATIONS RECOMMANDÉES POUR VOS POSTES |
| pdf.formations.carte | Titre, durée, part de pratique et description identiques à §2.9 |
| pdf.formations.lien | Voir la formation sur uptomove.fr |
| pdf.profil.titre | VOS RÉPONSES |
| pdf.profil.entreprise | Entreprise |
| pdf.profil.secteur | Secteur |
| pdf.profil.effectif | Effectif |
| pdf.profil.effectif.valeur | {{effectif}} salariés |
| pdf.profil.postes | Types de postes |
| pdf.profil.postes.valeur | {{postes_liste}} (ex. « Manutention 70 %, sédentaires 30 % » ; un seul type : « Manutention ») |
| pdf.profil.femmes | Part de femmes |
| pdf.profil.femmes.valeur | {{pct_femmes}} % (valeur par défaut) si la case était cochée |
| pdf.profil.age | Répartition par âge |
| pdf.profil.age.valeur | 16-29 ans {{t1}} %, 30-44 ans {{t2}} %, 45-64 ans {{t3}} %, 65 ans et plus {{t4}} % |
| pdf.profil.arrets | Arrêts liés aux TMS sur 12 mois |
| pdf.profil.arrets.valeur | {{arrets}} arrêts, {{duree}} jours en moyenne |
| pdf.profil.signaux | Signaux observés |
| pdf.profil.signaux.valeur | {{signaux_liste}} ou « Aucun signal coché » |
| pdf.profil.prevention | Démarche de prévention |
| pdf.profil.prevention.valeur | Oui, démarche formalisée / En partie, actions ponctuelles / Non |
| pdf.methode.titre | MÉTHODE ET LIMITES |
| pdf.methode.texte | Coût d'une journée de travail : 282 €, soit le coût salarial annuel moyen (62 113 €, Insee, données 2024 et 2022) divisé par 220 jours. Perte de productivité, coûts indirects, seuils de risque et scénarios de réduction : hypothèses UP TO MOVE. Repère sectoriel : TMS reconnus en maladie professionnelle, Assurance Maladie – Risques professionnels, données 2024. Ce rapport donne un ordre de grandeur indicatif, établi à partir des réponses saisies. Il ne remplace ni un audit ni l'analyse de vos données de paie. Méthode complète sur www.uptomove.fr/calculateur-tms-web. |
| pdf.entete | RAPPORT DU CALCULATEUR TMS · {{entreprise}} |
| pdf.pied | www.uptomove.fr · info@uptomove.fr · 41 rue Juge, 75015 Paris |
| pdf.pied.page | Page {{n}} sur {{total}} |
| pdf.pied.copyright | © 2026 UP TO MOVE |
| pdf.fichier | {{entreprise-slug}}-cout-tms.pdf |

`pdf.methode.texte` : les deux-points y introduisent des énumérations de type « libellé : valeur », format de fiche toléré dans un document de synthèse. Si Céline préfère, Dev peut les présenter en tableau à deux colonnes.
`pdf.pied` : le numéro 06 31 19 77 69 du PDF actuel a été retiré faute de validation (il n'apparaît pas sur le site). À rajouter si Céline le confirme.

Libellés des signaux pour `{{signaux_liste}}` : « Plaintes régulières de douleurs », « Gestes ralentis ou évités », « Demandes d'aménagement ou de changement de poste ».
Libellés des postes pour `{{postes_liste}}` : « Sédentaires », « Manutention », « Debout », « Conduite ».

---

## 7. Notes pour l'agent principal

1. **H1** : repris tel que recommandé par SEO, sans modification.
2. **« 3 minutes »** (hero, `<title>` et meta SEO) : conservé à la demande de SEO. UX demande de remesurer la durée après refonte. Si le parcours dépasse nettement 3 minutes, remplacer par « en quelques minutes » partout.
3. **Aides contextuelles femmes et âge** : formulées d'après Données §6 (S27, S28). Pour l'âge, les données publiées découpent à 50 ans alors que le formulaire découpe à 45 ans : la phrase reste exacte mais ne justifie pas directement les tranches.
4. **S32 (Cochrane)** : non cité sur la page. Les textes de recommandation ne promettent aucun effet de la formation, ce qui respecte cette donnée.
5. **Option cotisation AT/MP** (Données, formule 5) : non prévue dans la structure UX ni dans les décisions, aucun texte rédigé.
6. **Niveau de risque** : `resultat.badge.aide` décrit la règle de PARAMS v2 (taux d'arrêts, signaux, prévention, indice de profil) sans entrer dans le détail. Les seuils figurent dans le tableau de la méthode.

---

## 8. Points ouverts

| Point | Où | État |
|---|---|---|
| Défaut de durée à 90 jours (S34) | etape3.duree.jnsp.actif, resultat.defaut.duree, methode | Repère sur les accidents du dos, pas sur tous les TMS. Avec ce défaut, le cas type passe de 99 380 € à 406 557 €. Le texte prévient l'utilisateur, mais le choix mérite un regard de Céline. |
| Seuils des variantes sectorielles (0,90 et 1,10) | §2.7 | Seuils de rédaction, à confirmer par l'agent principal. |
| Correspondance conduite et debout | §2.9 | Logique `getFormations` proposée, à valider. |
| Rapport industrie | §2.7 | Le §2 de Données indique 1,88, la fonction `repereSectoriel` renvoie 1,89 (3,91 / 2,07 = 1,889). Le texte affiche la valeur calculée. |
| Téléphone du pied de PDF | §6 | Retiré, à rajouter si Céline le confirme. |
| Message d'échec du PDF | pdf.etat.erreur-jspdf | Dépend de la réponse de Céline sur un envoi manuel du rapport. |
| Mention de consentement | pdf.consentement | Formulation reprise de l'existant, mention RGPD complète à valider par Céline. |

---

## Compléments arbitrage 13

| Id | Texte |
|---|---|
| etape3.duree.aide | Un ordre de grandeur suffit si vous n'avez pas le chiffre exact. |
| erreur.duree.vide | Indiquez la durée moyenne d'un arrêt, en jours. |

---

## Part de femmes, v2

Spec : `calc-ux-ui-part-femmes-2026-10-04.md`, avec l'arbitrage Femmes à gauche, Hommes à droite. `aria-valuetext` nomme déjà les femmes en premier, il ne change pas. Ordre du bloc respecté (question, lecture, curseur, erreur, case, note de la case, note sourcée).

| Id | Texte |
|---|---|
| etape2.femmes.label | Répartition femmes / hommes de votre effectif |
| etape2.femmes.extremite.gauche | Femmes {{pct_femmes}} % |
| etape2.femmes.extremite.droite | {{pct_hommes}} % Hommes |
| etape2.femmes.non-renseigne.lecture | Femmes – % · – % Hommes (tiret demi-cadratin U+2013, pas de tiret long) |
| etape2.femmes.non-renseigne.aide | Déplacez le curseur pour indiquer la répartition. |
| etape2.femmes.aria-valuetext | {{pct_femmes}} % de femmes, {{pct_hommes}} % d'hommes |
| etape2.femmes.aria-valuetext.non-renseigne | Non renseigné, déplacez le curseur |
| etape2.femmes.jnsp | Je ne connais pas la répartition |
| etape2.femmes.jnsp.actif | Moyenne utilisée, 47 % de femmes et 53 % d'hommes, comme parmi l'ensemble des salariés en France. |
| etape2.femmes.note | Les femmes représentent 55 % des TMS reconnus en maladie professionnelle pour 47 % des salariés (Assurance Maladie – Risques professionnels, données 2023). |
| erreur.femmes.vide | Déplacez le curseur ou cochez « Je ne connais pas la répartition ». |

`etape2.femmes.non-renseigne.aide` : facultatif, à afficher sous la barre tant que le curseur n'est pas touché si Design lui trouve une place. Sinon, la lecture avec tirets suffit.

Identifiants remplacés ou supprimés :
- remplacés : `etape2.femmes.label`, `etape2.femmes.aide` (devient `etape2.femmes.note`, en bas du bloc), `etape2.femmes.curseur` (devient `etape2.femmes.aria-valuetext`), `etape2.femmes.jnsp.actif`, `erreur.femmes.vide` ;
- supprimés : `etape2.femmes.deduit`, `erreur.femmes.invalide` ;
- inchangé : `etape2.femmes.jnsp`.
