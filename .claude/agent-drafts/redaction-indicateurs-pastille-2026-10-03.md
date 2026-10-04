# Rédaction — Pastille et H2 de la section bloc 7 (index.html)

Date : 2026-10-03
Agent : CR (rédaction) — skill `redaction-celine` appliquée
Complément à `redaction-indicateurs-2026-10-02.md` (points 1 à 5 déjà intégrés).
Périmètre : texte seul.

Contexte de recette : le bloc indicateurs a été inséré en tête du bloc 7 (section `#resultats`). La section contient désormais trois contenus (indicateurs chiffrés, deux témoignages, six tags de secteurs) sous une pastille `Témoignages` et le H2 `Ils nous font confiance`.

---

## 1. Nouveau libellé de la pastille

**Proposition A (recommandée) — `La preuve`** (9 caractères)

**Proposition B — `Résultats et références`** (23 caractères)

**Proposition C — `Nos preuves`** (11 caractères)

### Recommandation : A

« La preuve » couvre les trois contenus sans les énumérer, ce qui est exactement ce qu'on attend d'une pastille (annoncer une intention de lecture, pas un sommaire). Elle reprend le gabarit déterminant + nom de « Le constat », et l'écho entre les deux n'est pas décoratif : la page ouvre sur le constat du coût des TMS et cette section referme la démonstration juste avant le CTA.

B est la plus descriptive et la plus prudente, à retenir si Céline préfère quelque chose de littéral. Elle couvre bien les indicateurs (résultats) ainsi que les témoignages et les secteurs (références), mais elle est à la limite haute des 24 caractères et aucune pastille existante n'énumère.

C dit la même chose que A en moins net, et « Nos » est déjà très présent en pastille sur la page (« Notre réponse », « Notre différence »).

---

## 2. Le H2 « Ils nous font confiance » : à changer

Je ne partage pas l'avis de maintien, pour une raison factuelle constatée dans le fichier.

**La phrase existe déjà à l'identique en haut de page.** `index.html` ligne 950, dans la barre de preuve du haut :

```html
<span class="bc-label">Ils nous font confiance</span>
```

Elle y est suivie immédiatement du carrousel de logos clients. Le visiteur lit donc deux fois exactement la même phrase sur la même page. Et c'est en haut qu'elle est à sa place, collée aux logos dont elle est la légende naturelle.

Deuxième raison, de fond : « Ils nous font confiance » parle de la relation client. Les six indicateurs, eux, sont des évaluations de formation. En l'état, le H2 n'annonce pas le premier contenu de sa propre section.

**Formulation recommandée**
> Nos résultats et ce qu'en disent nos clients

Elle couvre les deux contenus principaux dans leur ordre d'affichage, reste dans le registre des autres H2 de la page (phrase simple, sans superlatif) et libère « Ils nous font confiance » pour le haut de page, où cette accroche installée reste inchangée.

**Variante plus courte, si le gabarit est serré**
> Nos résultats, et nos clients pour en parler

Les six tags de secteurs n'ont pas besoin d'être annoncés par le H2 : ils fonctionnent comme un complément visuel en fin de section, pas comme un troisième chapitre.

### Point de hiérarchie, hors de mon périmètre
La section enchaîne le H2 puis le `h3.indic-title` « Nos indicateurs de résultats ». Avec le H2 recommandé, le mot « résultats » apparaît deux fois en trois lignes. Ça reste acceptable, mais l'arbitrage (conserver le H3 visible ou le passer en libellé plus discret) revient à l'agent UX/UI.

---

## Contrôle qualité (skill `redaction-celine`)

- Aucune virgule avant « et » dans les libellés livrés : vérifié. La variante « Nos résultats, et nos clients pour en parler » porte une virgule avant « et » qui coordonne deux groupes nominaux de même rang, c'est une virgule de rythme et non une virgule d'énumération. Si elle gêne, retenir la formulation recommandée, qui n'en a pas.
- Aucun tiret em-dash, aucun deux-points, aucun emoji.

## Contrôle vérité

- Aucun chiffre ni fait nouveau avancé.
- La duplication de « Ils nous font confiance » est vérifiée dans `index.html` (ligne 950 pour le `bc-label`, ligne 1193 pour le H2 du bloc 7).
