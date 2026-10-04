# Calculateur TMS : guide de ton et audit des textes (passage 1)

Agent : `calc-redaction` · Chantier : `refonte-charte` · Date : 2026-10-04
Skill appliquée : `redaction-celine` (lancée avant rédaction).
Statut : **audit uniquement**. Aucun texte final n'est rédigé ici. Les réécritures attendent la spec UX/UI, les mots-clés SEO et les chiffres validés par Données (`calculateur/SOURCES.md`). Aucun fichier du site n'a été modifié.

Fichiers lus : `index.html`, `blog-calculateur-cout-cache-tms.html`, `blog-arrets-maladie-plafonnes-septembre-2026.html`, `blog-kine-prevention-primaire.html`, `blog-argent-sur-votre-dos.html`, `formations.html` (pour les intitulés de formation), `calculateur-tms-web.html` (HTML, JS, `telechargerPDF`), `calculateur/SOURCES.md` (état initial).

---

## 1. Guide de ton « calculateur »

La référence est **`index.html`** (texte de la refonte, le plus récent et le plus propre). Les articles de blog plus anciens contiennent des tirets longs, des deux-points en cascade et des majuscules à « Troubles Musculo-Squelettiques » : ils ne servent de modèle que pour la façon de sourcer et de conclure, pas pour la ponctuation.

### 1.1 Longueur et rythme des phrases

- Phrases courtes à moyennes (10 à 25 mots), une idée par phrase. Les titres tiennent en une ligne.
  - « Le coût des TMS commence bien avant l'arrêt de travail. » (index)
  - « Des kinésithérapeutes dans vos locaux, une heure par équipe. » (index)
- Les intertitres sont souvent nominaux ou en question, jamais en slogan creux.
  - « TMS, QVCT : de quoi parle-t-on ? » · « Combien vous coûtent les TMS ? » (index)
- Le texte d'accompagnement reste à deux phrases maximum sous un titre.
  - « Trois minutes pour estimer le coût annuel des TMS dans votre entreprise, votre niveau de risque et le gain d'une démarche de prévention. » (index, bloc calculateur)

### 1.2 Vouvoiement et voix

- Vouvoiement systématique, adressé au décideur : « vos équipes », « vos salariés », « vos postes », « votre obligation de prévention ».
- UP TO MOVE parle en **« nous »** (« Nous formons l'équipe sur place », « Nous sommes kinésithérapeutes avant d'être formateurs »). Céline n'apparaît pas à la 1re personne du singulier sur les pages commerciales.
- Le besoin du client est parfois écrit à sa place, à la 1re personne : « Mes salariés se plaignent du dos et des épaules », « Je dois prouver que je respecte mon obligation de prévention » (index). Formule utile pour les textes de résultats par niveau de risque.

### 1.3 Introduire un chiffre et sa source

Trois façons coexistent sur le site :
1. **Carte chiffre** : le nombre seul, une phrase qui dit ce qu'il mesure, puis une ligne « Source : … » séparée.
   - « 2,2 Md€ / de coût annuel pour les entreprises françaises (arrêts, remplacements, perte de productivité). / Source : INRS » (index)
2. **Parenthèse en fin de phrase** : « … une baisse de l'ordre de 30 % de l'absentéisme lié aux TMS (données INRS). » (index) ou « (source : INRS) » (blog calculateur).
3. **Ligne de source sous un paragraphe**, avec référence précise : « Source : Légifrance, Décret n° 2026-498 du 12 juin 2026 » (blog arrêts maladie). C'est le format le plus traçable, à privilégier pour le rapport PDF.

Verbes de prudence déjà en usage : « vise une baisse de l'ordre de », « estimé à », « ordre de grandeur », « à titre indicatif », « ne constituent pas une garantie de résultat » (blog calculateur). Le calculateur doit reprendre ces formulations et ne jamais écrire « réduit de 30 % » au présent de certitude.

Typographie des chiffres sur l'index : espace avant le pourcentage (« 87 % », « 30 % »), « 2,2 Md€ », « une heure » en toutes lettres dans le texte courant.

### 1.4 Amener un CTA

- Une **question ou un constat court**, puis **une phrase de réassurance concrète**, puis un **bouton à verbe d'action** (infinitif ou 1re personne), souvent suivi de « → ».
  - « Prêt à protéger vos équipes ? / Devis gratuit sous 48 heures, intervention possible partout en France. / Demander un devis gratuit » (index)
  - « Combien vous coûtent les TMS ? / Trois minutes pour estimer… / Faire le calcul → » (index)
  - « Calculer mon coût → », « Voir le détail des formations → », « Voir nos interventions clients → » (index)
- Réassurances récurrentes : « sans engagement », « gratuit », « sous 48 heures », « dans vos locaux », « partout en France ».
- Le CTA ne promet jamais un résultat chiffré, il propose une étape (échange, devis, diagnostic).

### 1.5 Vocabulaire récurrent

kinésithérapeutes diplômés d'État · dans vos locaux · une heure · poste réel · gestes et postures · économies gestuelles et posturales · signaux d'alerte · démarche de prévention · obligation de prévention (article L.4121-1 du Code du travail) · DUERP · Passeport de prévention · QVCT · certifié Qualiopi · concret · sans engagement · troubles musculo-squelettiques (en minuscules dans l'index).

### 1.6 Ce que Céline n'écrit pas (sur les pages de la refonte)

- Pas de dramatisation ni d'urgence artificielle (« intervention prioritaire », « sécurisez votre trajectoire »).
- Pas de promesse miracle : elle la dénonce elle-même (« n'est malheureusement pas LA solution miracle », blog « De l'argent sur votre dos ! »).
- Pas d'anglicismes de consultant : ROI, vs., Manufacturing, sur-mesure en rafale. Le blog écrit « retour sur investissement » en toutes lettres.
- Pas de « coach bien-être » ni de vocabulaire wellness (l'index s'en distingue explicitement).
- Pas d'exclamations en série ni d'emojis. Pas de tiret long, pas de virgule avant « et », deux-points réservés aux énumérations et aux citations (skill `redaction-celine`).
- Pas de majuscules à chaque mot de « Troubles Musculo-Squelettiques ».
- Le registre familier du blog grand public (« Non, non, non. ») n'a pas sa place dans un outil B2B.

---

## 2. Audit des textes actuels

Légende des problèmes : **TON** (hors ton du site) · **IA** (tournure générique ou artificielle) · **TYPO** (accents, majuscules, espaces, tiret long, deux-points) · **CHIFFRE** (chiffre non sourcé ou à valider) · **ATTRIB** (attribution à une source à vérifier) · **FAIT** (affirmation factuelle douteuse) · **COHÉRENCE** (contradiction avec le site ou avec le calcul) · **UX** (signalement pour l'agent UX/UI, hors périmètre CR).

Les identifiants sont proposés et pourront être renommés une fois la structure UX/UI connue.

### 2.1 Métadonnées (périmètre SEO, signalé pour information)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| meta.title | Calculateur coûts cachés des Troubles Musculo-Squelettiques dans votre entreprise — UP TO MOVE | TYPO (majuscules, tiret long), trop long | Laisser à SEO, signaler le tiret et les majuscules |
| meta.description, og/twitter | Estimez en 3 minutes le cout reel des TMS… salaries exposes et leviers de prevention… | TYPO (accents manquants partout) | Laisser à SEO, signaler les accents |

### 2.2 Hero

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| hero.tag | Outil offert — Prévention TMS | TYPO (tiret long) ; « offert » alors que le site dit « gratuit » | Étiquette courte alignée sur le site (« Outil gratuit ») |
| hero.titre (H1) | Calculateur coûts cachés / des Troubles Musculo-Squelettiques / dans votre entreprise | TYPO (majuscules, article manquant « des coûts cachés ») ; H1 à reprendre avec mot-clé SEO | Titre naturel en une phrase, minuscules, mot-clé fourni par SEO |
| hero.sous-titre | Estimez en 3 minutes le coût réel des TMS et découvrez les leviers pour agir. | « coût réel » promet plus qu'une estimation ; « leviers pour agir » générique | Dire ce qu'on obtient (estimation annuelle, niveau de risque, pistes de prévention), garder la durée si UX la confirme |

### 2.3 Barre de progression et étape 1 (profil)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| etape1.surtitre | Étape 1 / 3 — Profil entreprise | TYPO (tiret long) ; « 3 étapes » alors que le parcours en affiche 4 écrans | Surtitre simple, nombre d'étapes à caler sur la spec UX |
| etape1.titre | Votre entreprise en quelques chiffres | Correct | Conserver ou ajuster à la spec |
| etape1.intro | Ces informations permettent de calibrer l'estimation au plus près de votre réalité terrain. | IA (« au plus près de votre réalité terrain ») | Phrase plus simple : à quoi servent ces informations |
| etape1.secteur.label | Secteur d'activité * | Astérisque sans légende « champ obligatoire » | Libellé + mention des champs obligatoires une seule fois |
| etape1.secteur.placeholder | — Sélectionner — | TYPO (tirets longs) | « Choisissez votre secteur » |
| etape1.secteur.options | Industrie / Manufacturing · Logistique / Entrepôt · BTP / Construction · Santé / Médico-social · Commerce / Distribution · Restauration / Hôtellerie · Travail de bureau / Tertiaire · Transport · Autre secteur | TON (« Manufacturing » anglicisme) ; doublons inutiles (« BTP / Construction ») | Libellés français courts ; la liste dépend aussi de Données (coefficients par secteur S07) |
| etape1.effectif.label | Effectif total (salariés) * | Correct | Conserver, éventuellement « Nombre de salariés » |
| etape1.effectif.placeholder | ex : 120 | TYPO (« ex. ») | « Par exemple 120 » |
| etape1.genre.label | Répartition hommes / femmes — indiquez la répartition (%) * | TYPO (tiret long), redondance (« répartition » deux fois) | Libellé court + aide séparée |
| etape1.genre.aide | INRS : les femmes sont 2× plus exposées aux TMS | **ATTRIB** + **CHIFFRE** (S09) ; **COHÉRENCE** : le calcul applique au plus ×1,5, pas ×2 ; deux-points de conséquence | À réécrire uniquement avec le chiffre et la source validés par Données ; sinon supprimer |
| etape1.genre.hommes / .sub | Hommes · Part masculine de l'effectif | Sous-libellé redondant | Supprimer le sous-libellé |
| etape1.genre.femmes / .sub | Femmes · Part féminine de l'effectif | Idem | Idem |
| etape1.age.label | Répartition par tranche d'âge — indiquez la répartition (%) * | TYPO (tiret long), redondance | Libellé court |
| etape1.age.aide | INRS : risque ×3 après 45 ans | **ATTRIB** + **CHIFFRE** (S10) ; **COHÉRENCE** : coefficients appliqués 0,7 / 1,0 / 1,8 / 2,2 (pas ×3) | Idem genre : chiffre validé ou suppression |
| etape1.age.t1 / .sub | 16 – 29 ans · Risque faible | « Risque faible/modéré/élevé/très élevé » par âge : affirmation non sourcée (CHIFFRE S10) | Retirer les qualificatifs de risque, ou les aligner sur la source validée |
| etape1.age.t2 / .sub | 30 – 44 ans · Risque modéré | Idem | Idem |
| etape1.age.t3 / .sub | 45 – 64 ans · Risque élevé ×3 | Idem + ×3 | Idem |
| etape1.age.t4 / .sub | 65 ans et + (âge légal de départ) · Risque très élevé | **FAIT** : 65 ans n'est pas l'âge légal de départ en France (à vérifier par Données) | Supprimer la parenthèse « âge légal de départ » sauf source officielle à jour |
| etape1.postes.label | Type(s) de postes — indiquez la répartition (%) * | TYPO (tiret long, « Type(s) ») | « Répartition des postes (en %) » |
| etape1.postes.sedentaire / .sub | Sédentaires (bureau, écran) · Travail assis prolongé, ordinateur | Correct, léger doublon | Garder une seule précision |
| etape1.postes.manuel / .sub | Manuels (port de charges) · Manutention, gestes répétitifs | Correct | Conserver, vocabulaire site « manutention » |
| etape1.postes.debout / .sub | Debout prolongé · Commerce, restauration, caisse | Correct | Conserver |
| etape1.postes.conduite / .sub | Conduite / Transport · Position assise avec vibrations | Correct | Conserver |
| etape1.repartition.ok | Répartition : 100% ✓ Parfait ! | TON (exclamation), TYPO (« 100 % ») | Confirmation sobre (« Total : 100 % ») |
| etape1.repartition.ko | Répartition : X% — doit faire 100% / doit faire exactement 100% | TYPO (tiret long, espace avant %), deux variantes pour le même message | Un seul message, formulé comme une aide (« Total actuel : X %, il doit atteindre 100 %. ») |
| etape1.bouton | Continuer → | Correct | Conserver ou caler sur la spec |

### 2.4 Étape 2 (absentéisme)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| etape2.retour | ← Retour | Correct | Conserver |
| etape2.surtitre | Étape 2 / 3 — Sinistralité | TYPO (tiret long) ; « sinistralité » jargon assurance, peu employé sur le site | « Absentéisme » |
| etape2.titre | Vos données d'absentéisme | Correct | Conserver |
| etape2.intro | Estimations sur les 12 derniers mois. Une approximation suffit. | Correct, ton juste | Conserver ou ajuster |
| etape2.arrets.label | Nombre d'arrêts de travail liés aux TMS sur les 12 derniers mois * | Correct, un peu long | Raccourcir si l'intro dit déjà « 12 derniers mois » |
| etape2.arrets.placeholder | ex : 8 | TYPO | « Par exemple 8 » |
| etape2.duree.label | Durée moyenne d'un arrêt (jours) * | Correct | Conserver (« en jours ») |
| etape2.duree.placeholder | ex : 22 | TYPO | « Par exemple 22 » |
| etape2.signaux.label | Avez-vous observé des signaux faibles TMS parmi vos équipes ? * | « signaux faibles TMS » : le site dit « signaux d'alerte » ; astérisque alors que le champ est facultatif dans le code | Vocabulaire du site ; retirer l'astérisque (UX à confirmer) |
| etape2.signaux.aide | (INRS : les signaux faibles précèdent les arrêts de 6 à 18 mois en moyenne) | **ATTRIB** + **CHIFFRE** (S14) | Chiffre validé et source précise, sinon supprimer |
| etape2.signaux.a / .sub | Plaintes régulières de douleurs (dos, épaules, poignets...) · Plusieurs signalements par mois — risque élevé de passage en arrêt | TYPO (« ... », tiret long) ; affirmation de risque non sourcée | Décrire l'observation, sans pronostic |
| etape2.signaux.b / .sub | Ralentissement ou évitement de certains gestes · Signe de compensation musculaire — TMS en développement | **FAIT** (diagnostic implicite « TMS en développement »), tiret long | Formulation clinique prudente, propre à une kiné (« souvent une compensation ») |
| etape2.signaux.c / .sub | Demandes de changement de poste ou d'aménagement · Signal indirect — salarié en difficulté physique | Tiret long, ton sec | Reformuler sans tiret |
| etape2.signaux.d / .sub | Aucun signal observé · Situation favorable — maintenir la vigilance | Tiret long ; jugement anticipé | Simple « Aucun de ces signaux » |
| etape2.signaux.hint-vide | Cochez les signaux observes dans votre entreprise | TYPO (« observés » sans accent) | Corriger, préciser « plusieurs choix possibles » |
| etape2.signaux.hint-ok | X signal(s) selectionne(s) ✓ | TYPO (« sélectionné(s) » sans accents, pluriel entre parenthèses) | Accord géré dans le code (« 1 signal coché », « 2 signaux cochés ») |
| etape2.plan.label | Avez-vous déjà un plan de prévention en place ? * | Ambigu : « plan de prévention » a un sens réglementaire précis (entreprises extérieures) | Préciser « démarche de prévention des TMS » |
| etape2.plan.oui / .sub | Oui · Plan formalisé ou actions en cours | Chevauche « En cours de mise en place » | Distinguer clairement les trois réponses |
| etape2.plan.non / .sub | Non · Pas de démarche structurée | Correct | Conserver |
| etape2.plan.partiel / .sub | En cours de mise en place · Actions ponctuelles, pas encore de plan global | Correct | Conserver, harmoniser avec « Oui » |
| etape2.bouton | Calculer mes coûts cachés → | Correct | Conserver ou caler sur la spec |

### 2.5 Écran intermédiaire (« étape 3 »)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| etape3.surtitre | Étape 3 / 3 — Votre rapport offert | TYPO ; **UX** : écran sans saisie qui retarde le résultat | Signaler à UX/UI (fusion possible avec les résultats) |
| etape3.titre | Votre analyse est prête ! | TON (exclamation) ; IA | Si l'écran est gardé, titre sobre |
| etape3.intro | Découvrez comment votre entreprise se positionne par rapport aux moyennes nationales et ce que vous pouvez faire. | **COHÉRENCE** : aucune moyenne nationale n'est affichée dans les résultats | Supprimer la promesse de comparaison, sauf si Données fournit des moyennes sourcées |
| etape3.encart.tag | Dans votre rapport offert | « offert » vs « gratuit » | Harmoniser |
| etape3.encart.titre | Votre coût annuel TMS — chiffré, détaillé, expliqué | IA (triade), tiret long | Titre simple |
| etape3.encart.liste | Coût annuel estimé… · Détail : arrêts directs / productivité / coûts indirects · Nombre de salariés exposés et jours perdus · Votre score de risque vs. moyennes du secteur · Formations UP TO MOVE recommandées pour votre profil · ROI estimé d'une démarche de prévention | « vs. », « ROI » anglicismes ; « score » et « moyennes du secteur » non affichés (seulement un niveau de risque) | Liste fidèle à ce que la page restitue réellement |
| etape3.bouton | Voir mon rapport → | Correct | Conserver |

### 2.6 Résultats (étape 4)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| resultat.surtitre | Votre diagnostic TMS | « diagnostic » : terme médical et engageant pour une estimation | « Votre estimation » |
| resultat.titre (JS) | Diagnostic TMS — votre entreprise | Tiret long, idem « diagnostic » | Titre sobre |
| resultat.intro (JS) | Voici votre estimation personnalisée des risques de Troubles Musculo-Squelettiques, préparée sur la base de vos données : X personnes dans le secteur [Industrie / Manufacturing]. | IA (« Voici votre… préparée sur la base de »), majuscules, deux-points d'explication, libellé de secteur avec « / » injecté tel quel | Phrase courte qui rappelle effectif et secteur |
| resultat.badge.eleve | Risque élevé | Correct, seuils S15 à valider | Conserver le libellé, préciser les critères dans une aide « Comment ce niveau est calculé » |
| resultat.badge.modere | Risque modéré | Idem | Idem |
| resultat.badge.faible | Risque maîtrisé | « maîtrisé » valorise une situation non mesurée | « Risque faible » ou « Risque limité » |
| resultat.metrique.cout | Coût annuel estimé des TMS | Correct | Conserver, ajouter la méthode à proximité |
| resultat.metrique.jours | Jours de travail perdus / an | Correct ; **COHÉRENCE** : inclut une part estimée hors arrêts déclarés (S04, S05, S06) sans le dire | Mention « estimés » + renvoi méthode |
| resultat.metrique.exposes | Salariés potentiellement exposés | Correct, prudent | Conserver |
| resultat.formations.titre | Formations UP TO MOVE recommandées pour votre profil | Correct | Conserver ou raccourcir (« Les formations adaptées à vos postes ») |
| resultat.formations.lien | Voir la formation → | Correct | Conserver |
| resultat.cta.tag | Solution UP TO MOVE | TON (« solution ») | Étiquette plus neutre ou supprimée |
| resultat.cta.eleve.titre (JS) | Intervention prioritaire recommandée | TON (dramatisation) | Constat + proposition d'échange, sans urgence |
| resultat.cta.eleve.texte (JS) | Votre niveau de risque TMS est élevé. Nos formations animées par des kinésithérapeutes réduisent de 30% les douleurs dès les premières semaines. | **CHIFFRE** non sourcé (S16), promesse de résultat au présent de certitude, « dès les premières semaines » | Retirer la promesse chiffrée ; mettre en avant ce que fait UP TO MOVE (kinés D.E., une heure, dans vos locaux) |
| resultat.cta.modere.titre (JS) | Formation préventive — sécurisez votre trajectoire | IA, jargon, tiret long | Titre concret |
| resultat.cta.modere.texte (JS) | Votre exposition TMS est réelle. Intervenir maintenant évite une dégradation dans les 12 à 24 mois. | **CHIFFRE** non sourcé (12 à 24 mois, absent du registre), promesse | Retirer le délai sauf validation Données |
| resultat.cta.faible.titre (JS) | Ancrer les bons réflexes dans la durée | Correct, proche du vocabulaire site (« ancrer les bons réflexes », index) | Conserver ou ajuster |
| resultat.cta.faible.texte (JS) | Votre situation est favorable. Une formation annuelle maintient vos résultats et sécurise votre DUERP. | « sécurise votre DUERP » inexact (une formation alimente le DUERP, index) ; « maintient vos résultats » promesse | Reprendre la formulation de l'index (« alimentent votre DUERP ») |
| resultat.roi.tag | ROI estimé — Démarche UP TO MOVE | Anglicisme, tiret long | « Retour sur investissement estimé » |
| resultat.roi.valeur (JS) | ×X — économie estimée de N €/an | Tiret long ; « ×X » peu lisible pour un DRH | Phrase explicite, formule visible (dépend de Données S12, S13) |
| resultat.roi.base | Basé sur une réduction de 30% de l'absentéisme TMS après formation — données INRS. | **ATTRIB** + **CHIFFRE** (S12), tiret long, « 30% » | Formulation prudente de l'index (« vise une baisse de l'ordre de… ») uniquement si S12 est validé, sinon « hypothèse UP TO MOVE » étiquetée |
| resultat.cta.devis | Demander un devis personnalisé → | Correct ; s'ouvre dans un nouvel onglet (UX) | Aligner sur l'index (« Demander un devis gratuit ») |
| resultat.cta.pdf | ⬇ Télécharger mon analyse PDF | Symbole décoratif, « analyse » vs « rapport » (modale) | Un seul terme partout (« rapport ») |
| resultat.recommencer | Recommencer le calcul | Correct | Conserver |
| resultat.mention | Estimations calculées sur la base des données INRS et de l'Assurance Maladie. Résultats fournis à titre indicatif. © UP TO MOVE 2026. | **ATTRIB** globale non démontrée (plusieurs paramètres sont des hypothèses) | Mention de méthode honnête : sources citées une à une, hypothèses UP TO MOVE nommées comme telles, lien vers la méthode |

### 2.7 Formations recommandées (pools JS)

Constat général : les intitulés du calculateur ne correspondent pas toujours à `formations.html`. Ils doivent reprendre **exactement** les intitulés et durées de la page Formations. Tous les titres contiennent des tirets longs (« — Sédentaire — 1h »), alors que la durée est déjà affichée dans l'étiquette.

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| formation.conference | Conférence Sensibilisation TMS — 30 min · Point de départ idéal pour embarquer toutes vos équipes dans une démarche de prévention. | Tiret long ; « idéal », « embarquer » | Description reprise de `formations.html` |
| formation.egp-sed | Économies gestuelles et posturales — Sédentaire — 1h · Gestes adaptés au poste écran, réduction des tensions cervicales et lombaires. | Tirets ; « réduction des tensions » promesse légère | Intitulé exact « Économies gestuelles et posturales « Sédentaire » » |
| formation.analyse-sed | Analyse individuelle de poste — Sédentaire — 30 min · Audit ergonomique personnalisé : postures, environnement, outils. Recommandations sur-mesure. | « sur-mesure » répété dans 3 fiches | Durée site « 30 min par poste » |
| formation.automassage-sed | Atelier Auto-massage — Sédentaire — 1h · … Guide auto-massage inclus. | Mention de guide à vérifier sur `formations.html` | Aligner |
| formation.stress-sed | Gestion des situations à stress — Sédentaire — 1h · … | Correct sur le fond | Aligner l'intitulé |
| formation.fatigue-visuelle | Prévention fatigue visuelle — 45 min · … Idéal pour les postes informatiques. | « Idéal » | Aligner |
| formation.egp-man | Économies gestuelles et posturales — Manutention — 1h · … 50% pratique. Guide mobilité inclus. | TYPO (« 50 % ») ; « Guide mobilité » vs « guide de la mobilité générale » (site) | Aligner |
| formation.analyse-man | Analyse individuelle de poste — Manutention — 30 min | Idem analyse-sed | Aligner |
| formation.echauffement-man | Échauffement au poste — Manutention — 1h · … 90% pratique. | **COHÉRENCE** : `formations.html` indique « 80 % pratique / 20 % théorie » ; intitulé site « Échauffement » | Reprendre la donnée du site |
| formation.automassage-man | Atelier Auto-massage — Manutention — 1h | Aligner | Aligner |
| formation.stress-man | Gestion des situations à stress — Manutention — 1h | Aligner | Aligner |
| formation.*-debout (5 fiches) | « … — Debout prolongé — … » dont « Échauffement… 90% pratique » | **COHÉRENCE** : aucune formation « Debout prolongé » n'existe sur `formations.html` | Décision Céline : renvoyer vers les formations Manutention existantes ou créer une offre ; ne pas afficher d'intitulé inexistant |
| formation.*-conduite (5 fiches) | « … — Conduite — … » dont « Prévention fatigue visuelle… en conduite » | Idem, aucune formation « Conduite » sur le site ; fatigue visuelle « en conduite » non présente dans l'offre | Idem |

### 2.8 Messages d'erreur (`alert()` à remplacer par des messages en ligne, règle 7 du `calculateur/CLAUDE.md`)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| erreur.secteur-effectif | Manque secteur ou effectif | TYPO, ton télégraphique, deux champs dans un même message | Un message par champ, sous le champ, formulé poliment |
| erreur.genre | H/F: 50+40=90 doit faire 100 | Message de développeur, calcul brut | « La répartition hommes / femmes doit totaliser 100 %. » (formulation finale au passage 2) |
| erreur.age | Age total = 90 doit faire 100 | Idem, « Âge » sans accent | Idem pour l'âge |
| erreur.postes-vide | Renseignez au moins un type de poste | Correct sur le fond, sans point | Conserver l'idée |
| erreur.postes-total | Postes: 90% doit faire 100% | Message de développeur | Même modèle que genre et âge |
| erreur.arrets-duree | Merci de renseigner le nombre d'arrêts et la durée moyenne. | Correct, ton du site | Scinder par champ |
| erreur.plan | Merci d'indiquer si un plan de prévention est en place. | Correct | Aligner sur le libellé final |
| erreur.calcul-incomplet | Veuillez d'abord compléter le calculateur. | Correct (cas rare) | Conserver l'idée |
| erreur.pdf-chargement | Le générateur de PDF n'a pas pu se charger (connexion internet requise). Réessayez, ou contactez-nous à info@uptomove.fr. | Virgule avant « ou » acceptable ; correct | Conserver l'idée, sans `alert()` |
| (UX) remplissage silencieux | Aucun texte : si H/F est vide, le code impose 50/50 ; si les âges sont vides, il impose 20/40/35/5 | **UX + CHIFFRE** : valeurs injectées sans prévenir | Signalé à UX/UI et Données ; si conservé, prévoir un texte qui l'annonce |

### 2.9 Modale de téléchargement

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| modale.titre | Recevez votre analyse TMS | « analyse » vs « rapport » | Harmoniser (« rapport ») |
| modale.intro | Complétez ce formulaire pour télécharger votre rapport PDF personnalisé. | Correct | Conserver ou raccourcir |
| modale.fermer (aria) | Fermer | Correct | Conserver |
| modale.prenom / nom / fonction / entreprise / email / telephone | Prénom · Nom · Fonction · Entreprise · Email professionnel · Téléphone | Correct ; tous obligatoires sans indication (UX) | Conserver, signaler à UX le caractère obligatoire du téléphone |
| modale.email.title | Veuillez entrer une adresse email valide (exemple : nom@domaine.fr) | Correct | Conserver |
| modale.bouton | Télécharger mon rapport PDF | Correct | Conserver |
| modale.bouton-envoi | Envoi en cours... | « ... » au lieu de « … » | Corriger |
| modale.mention | En soumettant ce formulaire, vous acceptez d'être recontacté(e) par UP TO MOVE. Vos données ne sont jamais partagées avec des tiers. | « recontacté(e) » ; pas de lien vers la page Vie privée ; la mention RGPD complète relève de Céline | Mention claire + lien `vie-privee` (à valider par Céline) |
| modale.succes | Merci ! Votre téléchargement démarre... | Exclamation, « ... » | Message sobre |
| modale.erreur-envoi | Une erreur est survenue. Réessayez ou écrivez-nous à info@uptomove.fr. | Correct | Conserver |
| modale.erreur-email | Veuillez entrer une adresse email valide (exemple : nom@domaine.fr). | Correct | Conserver |
| (interne) formspree._subject | Téléchargement calculateur TMS — UP TO MOVE | Visible seulement par Céline dans l'email reçu ; tiret long | Faible priorité |

### 2.10 Rapport PDF (`telechargerPDF`)

| Id proposé | Texte actuel | Problème | Intention |
|---|---|---|---|
| pdf.titre | Coût caché annuel des Troubles Musculo-Squelettiques | Majuscules | Minuscules, cohérent avec le H1 final |
| pdf.surtitre | RAPPORT DE DIAGNOSTIC TMS | « diagnostic » (voir résultats) | « Estimation des coûts des TMS » ou équivalent |
| pdf.badge | Risque élevé / modéré / maîtrisé | Idem résultats | Mêmes libellés que la page |
| pdf.metrique.cout | Coût annuel estimé | Correct | Conserver |
| pdf.metrique.jours | Jours perdus / an* | **COHÉRENCE** : l'astérisque renvoie à une note sur la « présentielle dégradée », sans rapport direct | Renvois de notes à refaire |
| pdf.metrique.exposes | Salariés exposés** | Moins prudent que la page (« potentiellement ») | Aligner sur la page |
| pdf.note | * Présentielle dégradée : salarié présent mais productivité réduite par la douleur. Selon l'INRS, ce coût représente 1,5x celui des arrêts déclarés. Base : 220j/an, 35% effectif exposé. ** Salariés exposés : estimation basée sur secteur, postes, H/F et âge. Source : INRS. | **ATTRIB** + **CHIFFRE** (1,5x absent du registre ; S05, S06) ; terme « présentielle dégradée » non usuel (le terme courant est « présentéisme ») ; « Source : INRS » pour une formule interne | Note de méthode réécrite à partir du registre validé ; hypothèses étiquetées |
| pdf.detail.titre | DÉTAIL DU COÛT ANNUEL ESTIMÉ | Correct | Conserver |
| pdf.detail.arrets | Arrêts TMS (coût direct) | Correct | Conserver |
| pdf.detail.productivite | Perte de productivité (présentielle dégradée) | Terme ; **COHÉRENCE** : la formule `cAbs` part d'un taux d'absentéisme estimé, pas du présentéisme | Libellé à caler sur la formule validée par Données |
| pdf.detail.indirects | Coûts indirects (désorganisation, AT/MP) | « AT/MP » non expliqué pour un dirigeant | Expliciter |
| pdf.detail.total | TOTAL ESTIMÉ | Correct | Conserver |
| pdf.detail.source | Source INRS : coût moyen arrêt TMS entre 6 000 et 25 000 € | **ATTRIB** + **CHIFFRE** (fourchette absente du registre ; le calcul utilise 8 500 €, S01) | Remplacer par la source exacte du chiffre retenu |
| pdf.roi.tag | ROI ESTIMÉ — DÉMARCHE UP TO MOVE | Anglicisme, tiret long | Comme la page |
| pdf.roi.valeur | ×X — économie de N €/an | Moins prudent que la page (« estimée » absent) | Comme la page |
| pdf.roi.base | Basé sur une réduction de 30% de l'absentéisme TMS après formation — données INRS | **ATTRIB** + **CHIFFRE** (S12) | Comme la page |
| pdf.formations.titre | FORMATIONS UP TO MOVE RECOMMANDÉES POUR VOTRE PROFIL | Correct | Conserver |
| pdf.formations.lien | Voir la formation » | Le lien pointe vers `uptomove-site.vercel.app` et non `www.uptomove.fr` (à signaler à Dev) | Conserver le libellé |
| pdf.profil.titre | PROFIL ENTREPRISE | Correct | Conserver |
| pdf.profil.libelles | Entreprise · Secteur · Effectif (« X salariés ») · Type(s) de postes · Répartition H/F · Arrêts TMS (« X — durée moy. Y j ») · Plan prévention (« Oui — plan formalisé ») · Niveau de risque | Abréviations (« moy. », « j »), tirets longs, valeurs internes sans accents (« Sedentaires ») | Libellés complets et accentués |
| pdf.profil.ages | RÉPARTITION ÂGES · « Répartition âges : 16-29: 20% | … » | Titre répété dans la valeur ; format brut | Format lisible |
| pdf.entete-pages | RAPPORT DE DIAGNOSTIC TMS — [entreprise] | Tiret long | Aligner sur pdf.surtitre |
| pdf.pied | www.uptomove.fr · 06 31 19 77 69 · info@uptomove.fr · 41 rue Juge, 75015 Paris · Page X/Y · © 2026 UP TO MOVE | Numéro de téléphone absent du site public : à confirmer par Céline | Conserver après validation |
| pdf.nom-fichier | [entreprise]-couts-caches.pdf | Correct | Conserver |
| pdf.mention-absente | (aucune mention « à titre indicatif » ni méthode dans le PDF) | Le rapport circule seul en interne chez le client sans avertissement | Ajouter une mention de méthode et de limites |

### 2.11 Hors public

| Id proposé | Texte actuel | Remarque |
|---|---|---|
| interne.export | Exporter les leads CSV · Aucun lead enregistré. · X lead(s) exporté(s) ! · Erreur : … | Visible seulement avec `#export`. Le formulaire actuel n'appelle plus `saveLead`, le bouton exporte donc une liste vide. Signalé à Dev, pas de réécriture prévue. |

### 2.12 Constats transverses

1. **Tiret long** dans plus de 40 textes (HTML, JS, PDF) : à supprimer partout.
2. **Accents manquants** dans les textes générés en JS (`observes`, `selectionne(s)`, `Sedentaires`) et dans les métadonnées.
3. **Pourcentages** écrits « 30% » alors que le site écrit « 30 % ».
4. **Vocabulaire à unifier** : rapport / analyse / diagnostic ; offert / gratuit ; signaux faibles / signaux d'alerte ; ROI / retour sur investissement.
5. **Attributions INRS** répétées pour des paramètres que le registre classe tous « à vérifier ». Aucun texte final ne citera l'INRS sans validation de Données.
6. **Promesses de résultat** (−30 % de douleurs, 12 à 24 mois, « sécurise votre DUERP ») à retirer ou à requalifier.
7. **Hors périmètre calculateur** : l'article `blog-calculateur-cout-cache-tms.html` reprend les mêmes attributions (« femmes deux fois plus exposées », « ×3 après 45 ans », « 30 %… données INRS », « 2,2 milliards… source : INRS »). Si Données invalide ces chiffres, l'article devra être corrigé par les agents du site (à signaler à Céline).

---

## 3. Chiffres cités dans les textes (à faire valider par l'agent Données)

Je ne modifie aucun de ces chiffres. Colonne « Id registre » d'après `calculateur/SOURCES.md` (état initial) ; « absent » signifie que le chiffre n'y figure pas encore.

| # | Chiffre | Où il apparaît | Attribution affichée | Id registre |
|---|---|---|---|---|
| C1 | « 3 minutes » | hero.sous-titre (et index, blog) | aucune | absent (durée de parcours, à confirmer par UX) |
| C2 | « 3 étapes » (Étape 1 / 3…) | surtitres | aucune | absent (dépend de la spec UX) |
| C3 | Femmes « 2× plus exposées » | etape1.genre.aide | INRS | S09 (le calcul applique ×1,5 max) |
| C4 | Risque « ×3 après 45 ans » | etape1.age.aide, etape1.age.t3 | INRS | S10 (coefficients 0,7 / 1,0 / 1,8 / 2,2) |
| C5 | Qualificatifs de risque par tranche d'âge (faible, modéré, élevé, très élevé) | etape1.age.* | aucune | S10 |
| C6 | « 65 ans… âge légal de départ » | etape1.age.t4 | aucune | absent (fait réglementaire à vérifier) |
| C7 | Signaux faibles « 6 à 18 mois » avant l'arrêt | etape2.signaux.aide | INRS | S14 |
| C8 | « Plusieurs signalements par mois » = risque élevé | etape2.signaux.a.sub | aucune | absent |
| C9 | Réduction de « 30 % » de l'absentéisme TMS après formation | resultat.roi.base, pdf.roi.base | données INRS | S12 |
| C10 | Réduction de « 30 % » des douleurs « dès les premières semaines » | resultat.cta.eleve.texte | aucune | S16 |
| C11 | « 12 à 24 mois » avant dégradation | resultat.cta.modere.texte | aucune | absent |
| C12 | Coût par arrêt « entre 6 000 et 25 000 € » | pdf.detail.source | INRS | absent (le calcul utilise 8 500 €, S01) |
| C13 | Présentéisme « 1,5x » le coût des arrêts déclarés | pdf.note | INRS | absent |
| C14 | « 220 j/an » | pdf.note | aucune | S06 |
| C15 | « 35 % effectif exposé » | pdf.note | aucune | S05 |
| C16 | « ×X » et « économie de N €/an » (ROI) | resultat.roi.valeur, pdf.roi.valeur | aucune | S12 + S13 (coût démarche 120 €/salarié, plafond 18 000 €) |
| C17 | Mention globale « données INRS et Assurance Maladie » | resultat.mention | INRS, Assurance Maladie | toutes lignes du registre |
| C18 | « 50 % pratique » (EGP Manutention), « 90 % pratique » (Échauffement Manutention et Debout) | formations JS | aucune | absent (donnée catalogue : `formations.html` indique 50 % et **80 %**) |
| C19 | Durées des formations (30 min, 45 min, 1 h) | formations JS, PDF | aucune | absent (donnée catalogue, à aligner sur `formations.html`) |
| C20 | Seuils de risque (arrêts / effectif > 8 % élevé, > 3 % modéré) | non affichés, mais déterminent les textes des badges et CTA | aucune | S15 |
| C21 | Numéro « 06 31 19 77 69 » | pdf.pied | sans objet | à confirmer par Céline (absent du site public) |

Chiffres présents sur le site mais **pas** dans le calculateur, susceptibles d'être réutilisés dans le hero ou la mention de méthode (à valider avant tout usage) : « 87 % des maladies professionnelles reconnues » (index, « Assurance Maladie / INRS »), « 2,2 Md€ » (index et blog, « INRS »), « 80 % des TMS évitables » (index, « INRS / Assurance Maladie »), « plus de 80 % des maladies professionnelles » (blog arrêts maladie, « INRS »). Les deux pourcentages 87 % et « plus de 80 % » cités sur le site pour la même notion sont à réconcilier.

---

## 4. Points à arbitrer par l'agent principal

1. Formations « Debout prolongé » et « Conduite » affichées alors qu'elles n'existent pas dans le catalogue : décision Céline.
2. Écran intermédiaire « étape 3 » sans saisie : à soumettre à UX/UI.
3. Remplissage silencieux des répartitions H/F et âges : UX/UI et Données.
4. Lien du PDF vers `uptomove-site.vercel.app` et bouton d'export de leads sans données : Dev.
5. Correction éventuelle de `blog-calculateur-cout-cache-tms.html` : chantier site, à signaler à Céline.

Pour le passage 2, j'ai besoin de la spec UX/UI (blocs et ordre), des mots-clés SEO (H1, intro, intertitres) et du registre `SOURCES.md` validé.
