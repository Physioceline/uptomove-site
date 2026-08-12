# Comment déployer le site UP TO MOVE (procédure qui marche)

Ce dépôt contient **6 pages HTML statiques**, telles quelles, sans Next.js ni build.
C'est la formule qui fonctionne (validée le 11 août 2026 au soir). Ne pas s'en écarter.

## Structure du dépôt

À la racine, uniquement :

- `index.html`, `formations.html`, `clients.html`, `apropos.html`, `blog.html`, `contact.html`
- Les images, vidéos (`.mp4`), logos, PDF (Qualiopi) référencés par ces pages
- `favicon.ico`

Il n'y a **plus de projet Next.js** dans ce dépôt (`app/`, `components/`, `package.json`, etc. ont été retirés le 11/08). Si besoin de les retrouver un jour, ils existent toujours dans l'historique Git (commit `175586b` et suivants), mais ce n'est plus ce qui est en ligne.

## Réglages Vercel (à ne jamais changer)

Projet Vercel : **uptomove-site** (organisation uptomove-projects)
Repo GitHub : **Physioceline/uptomove-site**
URL en ligne : **https://uptomove-site.vercel.app**

Dans Vercel → Settings → Build and Deployment :

- **Framework Preset : Other**
- **Output Directory : `.`** (override activé — sinon Vercel sert par défaut le dossier `public` s'il existe, et le site part en 404)
- **Root Directory : `./`**
- Build Command / Install Command / Development Command : vides

## Modifier une page et republier — la procédure

1. Modifier directement les fichiers `.html` à la racine du dépôt (pas dans un sous-dossier `app/`).
2. Dans Terminal, dans le dossier du projet :

```
cd "/Users/celineschneider/Desktop/Bordel Bureau/Claudeapp/Site/uptomove-next"
rm -f .git/index.lock
git add -A
git commit -m "Description du changement"
git push
```

3. Attendre 1-2 minutes, puis vérifier directement **https://uptomove-site.vercel.app/** (pas besoin de retourner dans Vercel si les réglages ci-dessus n'ont pas changé).

## Pièges à éviter (vécus cet été)

- **Ne jamais cliquer "Redeploy" sur un ancien déploiement dans Vercel** si les réglages ont changé entre-temps : Redeploy réutilise les réglages figés de cet ancien déploiement (c'est ce qui a fait revenir Next.js malgré le changement de Framework Preset). Pour appliquer un nouveau réglage, il faut un **nouveau commit + push**, pas un Redeploy.
- Si `rm -f .git/index.lock` échoue ou qu'un push traîne, c'est presque toujours un fichier `.git/index.lock` resté coincé — le supprimer avant de continuer.
- Ne jamais taper de token GitHub en clair dans une commande visible/partagée. Si `git push` demande un mot de passe, utiliser un Personal Access Token à la place du mot de passe.
- Le lien "Mentions légales" du footer pointe vers `mentions-legales.html`, qui n'existe pas encore — à créer si besoin.

## En résumé

Éditer les `.html` → `git add -A && git commit -m "..." && git push` → attendre → vérifier `uptomove-site.vercel.app`. C'est tout. Pas de build, pas de Framework Next.js, pas de Redeploy manuel.
