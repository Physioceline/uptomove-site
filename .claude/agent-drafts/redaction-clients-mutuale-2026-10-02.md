# Rédaction — 5ᵉ étude de cas `clients.html` : Groupe Mutuale MFOS

**Agent** : CR (rédaction) · **Date** : 2026-10-02 · **Skill appliquée** : `redaction-celine`
**Nature du travail** : calage dans le gabarit + relecture typographique du texte écrit par Céline. Aucune reformulation de fond, aucun chiffre ni argument ajouté.
**Mise à jour du 02/10/2026** : arbitrages de Céline appliqués (masculin générique, nom du guide, placement du 98,9 %, sous-titre) et trois textes courts ajoutés pour l'agent Design (§ 8).

Gabarit de référence lu dans `/Users/celineschneider/Documents/Claude/Site/clients.html` : RATP (l. 325-386), Groupe Chavigny (l. 388-454), Daiichi-Sankyo (l. 456-522), Groupe VSF (l. 524-588).
Jumeau structurel le plus proche : **RATP** (paragraphe d'intro + paragraphe d'annonce + liste d'ateliers typés avec intitulé en gras). C'est donc RATP qui sert de modèle.

---

## 1. Titre `h3` (3 parties)

Pastille jaune / médian / orange, comme les 4 autres fiches :

- **Pastille** : `GROUPE MUTUALE MFOS`
- **Médian** : `- 3 CENTRES DENTAIRES -`
- **Orange** : `LOIR-ET-CHER (41)`

Rendu attendu : **GROUPE MUTUALE MFOS** - 3 CENTRES DENTAIRES - *LOIR-ET-CHER (41)*

Corrections appliquées : « centres dentaire » → « centres dentaires » (accord au pluriel) ; passage en capitales comme les 4 autres titres.

---

## 2. Sous-titre (`.case-subtitle`) — arbitré

**Version retenue**

> Programme de prévention des TMS auprès des professionnels de la santé bucco-dentaire.

Aucune donnée de temps n'est ajoutée. L'unité de la mission est le nombre de centres, déjà porté par le titre `h3`, et le répéter en dessous ferait doublon à deux lignes d'écart.

**Une variante, si Céline veut que le sous-titre annonce aussi la nature du programme** (même absence de volume, formulation tirée de ses propres mots « sensibilisation théorique et pratique directement applicable au fauteuil ») :

> Prévention des TMS auprès des professionnels de la santé bucco-dentaire, de la théorie à la pratique au fauteuil.

C'est la seule façon que je vois d'enrichir ce sous-titre sans inventer de durée. Je recommande malgré tout la version retenue, plus sobre et plus proche du registre des quatre autres.

---

## 3. Le 98,9 % : bloc `.case-stat` dans le détail — arbitré

Contenu exact, sur le modèle de Chavigny (`clients.html` l. 417-418) :

```html
<div class="case-stat">98,9&nbsp;%</div>
<p class="case-stat-label">taux de satisfaction</p>
```

- `.case-stat` : **98,9 %** (avec espace insécable avant le signe %, pour éviter un % renvoyé seul à la ligne sur mobile)
- `.case-stat-label` : **taux de satisfaction** (minuscules, comme « personnes formées »)

Label volontairement nu : « des participants » ou « des stagiaires » serait une déduction que le texte de Céline ne permet pas.

Rappel du raisonnement qui a conduit à ce placement plutôt qu'au sous-titre :

1. Le composant existe déjà et il est fait pour ça. `.case-stat` + `.case-stat-label` est le seul emplacement du gabarit prévu pour un chiffre fort (« +350 / personnes formées »). Aucun motif nouveau à arbitrer côté UX ou Design.
2. Le sous-titre a une autre fonction dans la série. Les quatre sous-titres décrivent *ce qui a été fait*, jamais une performance. Y glisser un taux de satisfaction ferait basculer le haut de fiche du registre « compte rendu d'intervention » vers le registre « argument commercial », exactement ce qu'un lecteur DRH ou QHSE lit avec méfiance.
3. Le chiffre est plus crédible là où sa méthode est expliquée. Dans le détail replié, le 98,9 % se retrouve à quelques lignes de la puce « Progression mesurée par le QCM de début et de fin de session ». Le chiffre et son dispositif de mesure se lisent ensemble.
4. Pas les deux. Répéter le chiffre à 15 cm d'intervalle insiste, et l'insistance sur un taux de satisfaction produit l'effet inverse de celui recherché auprès de décideurs.

Conséquence assumée : le chiffre n'apparaît qu'après un clic sur « Lire le détail de l'intervention ».

Emplacement dans le `.case-body` : avant le bloc `.case-tabs`, comme chez Chavigny.

---

## 4. Onglet **Objectif** (masculin générique appliqué)

```html
<p>Prévenir les <strong>Troubles Musculo-Squelettiques (TMS)</strong> auprès des professionnels de la santé bucco-dentaire, dont l'activité expose à des postures contraignantes (flexion cervicale, torsions, travail à quatre mains).</p>
<p>Le programme combine <strong>sensibilisation théorique</strong> et <strong>pratique directement applicable au fauteuil</strong>, à travers plusieurs temps complémentaires :</p>
<ul>
  <li><strong>Économies gestuelles et posturales</strong>, pour apprendre à ajuster ses gestes et ses postures afin de limiter les contraintes physiques au quotidien.</li>
  <li><strong>Anatomie et biomécanique</strong>, pour comprendre les limites du corps (rachis cervical et lombaire, membres supérieurs, poignets) et les conséquences des TMS.</li>
  <li><strong>Prévention individuelle</strong>, avec l'aménagement du poste et l'ergonomie active.</li>
  <li><strong>Séance de mobilité de 30 minutes</strong>, pour acquérir des exercices d'auto-entretien articulaire et des techniques d'auto-régulation utilisables seul entre deux patients.</li>
</ul>
```

Interventions, toutes de l'ordre de la ponctuation, du genre ou du gabarit :

- **Masculin générique** : « les professionnelles » → « les professionnels », « utilisables seule » → « utilisables seul ».
- Virgule ajoutée avant « dont l'activité expose » : la relative est explicative (elle décrit la profession en général), pas restrictive (il ne s'agit pas de distinguer les professionnels exposés des autres). Sans la virgule, la phrase dit littéralement « ceux d'entre eux dont l'activité expose ».
- Intitulés d'ateliers passés en gras, comme RATP (l. 367-371). **Mais la virgule de Céline est conservée** là où RATP utilise un tiret long (« <strong>Économies gestuelles et posturales</strong> — apprendre à… »). Deux raisons : c'est sa ponctuation d'origine, et `redaction-celine` proscrit le tiret cadratin. Le résultat reste visuellement identique à RATP (intitulé gras puis description).
- Mise en gras de « sensibilisation théorique » et « pratique directement applicable au fauteuil », strict parallèle de RATP l. 365.
- Point final de la phrase d'annonce remplacé par deux-points introduisant la liste, comme RATP.
- Pas de ligne `<p><strong>Objectifs</strong> :</p>` en tête : RATP et Daiichi n'en ont pas, l'onglet s'appelle déjà « Objectif ». Si Dev préfère l'autre variante du gabarit (Chavigny l. 428, VSF l. 568), il suffit d'ajouter `<p><strong>Objectifs</strong> :</p>` en première ligne.

---

## 5. Onglet **Résultats** (masculin générique et nom du guide corrigés)

```html
<p><strong>Résultats</strong> :</p>
<ul>
  <li><strong>Meilleure compréhension des facteurs de risque TMS</strong> propres au cabinet dentaire et des mécanismes qui y conduisent.</li>
  <li><strong>Acquisition de solutions préventives</strong>, directement applicables dans les gestes métier du quotidien.</li>
  <li><strong>Mise en place de réflexes de mouvement et de récupération active</strong>, mobilisables en autonomie entre deux patients.</li>
  <li><strong>Renforcement de la culture de prévention</strong> au sein de l'équipe, appuyé par «&nbsp;le guide de la mobilité générale&nbsp;» remis à chaque participant pour prolonger les apprentissages au cabinet.</li>
  <li><strong>Progression mesurée par le QCM de début et de fin de session</strong>, avec attestation individuelle et bilan qualitatif transmis au bénéficiaire.</li>
</ul>
```

Interventions :

- **Nom du support** : « le Guide de la mobilité UP TO MOVE » → «&nbsp;le guide de la mobilité générale&nbsp;», graphie exacte du catalogue (`formations.html` l. 485 et l. 1034). La mention « UP TO MOVE » disparaît, elle ne fait pas partie du nom et le lecteur est déjà sur le site de la marque.
- Guillemets français avec espaces insécables, comme sur la page Formations. Le nom du guide n'est **pas** mis en gras, là non plus par alignement sur Formations, et parce que deux segments en gras dans la même puce alourdissent la lecture.
- **Masculin générique** : « chaque participante » → « chaque participant ».
- Ligne `<p><strong>Résultats</strong> :</p>` ajoutée (présente sur RATP l. 375, Chavigny l. 440, VSF l. 577) et segments d'ouverture passés en gras, comme sur RATP. Texte inchangé pour le reste.

Pas de `<p class="closing">` proposée : Chavigny et Daiichi en ont une, RATP et VSF non, et je n'ai pas de phrase de Céline à y mettre. Si elle en veut une, c'est une ligne à écrire par elle.

---

## 6. Texte alternatif de la photo Mutuale — version sans tiret cadratin

**Version retenue** (128 caractères)

> Modèle anatomique de colonne vertébrale sur le fauteuil dentaire, atelier Économies gestuelles et posturales (Groupe Mutuale MFOS)

Le nom du client passe entre parenthèses, l'un des deux remplacements du tiret cadratin prévus par `redaction-celine`. La virgule était déjà prise par la première incise, et un second usage aurait rendu la phrase illisible.

À signaler pour cohérence : les 12 `alt` déjà en place dans `clients.html` utilisent tous la forme « Sujet — Client ». Cette fiche sera donc la seule avec des parenthèses. Si l'écart gêne, la seule autre option propre est de reprendre la même convention que les 12 autres (donc avec le tiret), c'est un choix à trancher par Céline entre homogénéité de la page et règle de style. Je livre la version sans tiret, conforme à la consigne.

Choix d'écriture : le modèle anatomique posé sur le fauteuil est l'élément le plus parlant et le plus spécifique de la scène, il passe donc en tête. Un `alt` n'a pas à inventorier la pièce, il doit livrer l'information utile à qui ne voit pas l'image. La couleur du fauteuil (bleu-gris) est volontairement omise, elle n'apporte rien à la compréhension. L'écran mural et le kakémono ne sont pas décrits, la fiche ne portant qu'une seule photo et l'essentiel tenant en une ligne lisible à la synthèse vocale.

---

## 7. Points restants

**Taux de satisfaction.** Zéro occurrence de « satisfaction » dans l'ensemble des `.html` du site : le 98,9 % sera le premier chiffre de performance publié, donc le plus exposé à la question « sur quoi ? ». Je ne peux pas le vérifier, il ne vient que du texte de Céline. Point transmis, c'est sa donnée et sa responsabilité.

**Traités hors de ce chantier** (notés par l'agent principal, sans action de ma part) : absence du QCM sur le reste du site, graphie « Loir et Cher » de la fiche Chavigny, coexistence « Économies gestuelles et posturales » / « EGP », harmonisation du nom du guide sur `index.html` et `formations.html`, bandeau à 4 logos, carte secteur « Santé » qui ne cite pas le dentaire, ancre Formations pour un éventuel `.case-link`.

---

## 8. Textes courts pour l'agent Design

### A. Bloc « tableau comparatif » de la page d'accueil

Contexte lu : `index.html` l. 1018-1039, `<details class="table-wrap">` dont le `summary` porte aujourd'hui « Voir le tableau comparatif ». Les 6 critères du tableau sont profil des formateurs, analyse du poste de travail, durée de formation, certification Qualiopi, adaptation poste sédentaire ou manuel, Passeport Prévention.

**Proposition 1 (recommandée)**

- Libellé : **Comparer avec un formateur généraliste**
- Accroche : **6 critères passés en revue, du profil des formateurs au Passeport Prévention.** (12 mots)

**Proposition 2**

- Libellé : **Voir le tableau comparatif**
- Accroche : **Formateurs, analyse de poste, durée, Qualiopi, Passeport Prévention, 6 critères comparés.** (11 mots)

**Recommandation : proposition 1.** Trois raisons.

Le reproche de Céline porte sur le libellé, et « tableau comparatif » ne dit pas *comparatif avec qui*. « Comparer avec un formateur généraliste » nomme l'autre colonne du tableau, donc l'enjeu réel pour un DRH qui a plusieurs devis sur son bureau. Le mot « tableau » n'a pas besoin d'être annoncé, le lecteur le verra en ouvrant.

L'accroche de la proposition 1 donne la mesure de l'effort (6 critères) et son amplitude (du métier du formateur à l'obligation 2026) sans réciter le tableau. Celle de la proposition 2 énumère cinq intitulés que le lecteur relira deux secondes plus tard, ce qui désamorce l'envie d'ouvrir au lieu de la créer.

Enfin « passés en revue » dit un travail de comparaison mené, pas une juxtaposition de colonnes.

Si Céline tient au mot « comparatif » dans le libellé, variante intermédiaire : **Le comparatif avec un formateur généraliste**, avec la même accroche.

Pour Dev : écrire « 6&nbsp;critères » (espace insécable après le chiffre).

### B. Texte alternatif du logo « Mon Passeport Prévention »

Modèle suivi, l'`alt` du logo Qualiopi (`index.html` l. 840) : « Logo Qualiopi, certification n° F3740-1-I, catégorie actions de formation ».

**Version recommandée**

> Logo officiel du dispositif Mon Passeport Prévention

**Variante, si le Design veut que l'`alt` porte aussi la fonction du dispositif**

> Logo Mon Passeport Prévention, dispositif de traçabilité des formations santé-sécurité

La fonction de traçabilité est déjà affirmée sur la page (`index.html` l. 1044) et dans les articles de blog consacrés au sujet, elle n'ajoute donc aucune affirmation nouvelle. J'écarte en revanche les qualificatifs du type « national » ou « public » que je ne peux pas sourcer depuis les contenus du site. Entre les deux, je recommande la version courte : un `alt` de logo institutionnel sert d'abord à identifier la marque affichée.

### C. `alt` de la photo Mutuale sans tiret cadratin

Voir § 6 ci-dessus. Version à retenir :

> Modèle anatomique de colonne vertébrale sur le fauteuil dentaire, atelier Économies gestuelles et posturales (Groupe Mutuale MFOS)
