# Razvan Editing

Portfolio de montage vidéo pour YouTube, TikTok et Reels en HTML, CSS et JavaScript. GitHub Pages publie la racine du dépôt, sans compilation ni dépendance npm.

La version 1 reste à la racine. La version 2 est disponible dans `v2/` : accueil bleu profond, sections claires, police Satoshi locale, titres réels des vidéos et aperçus animés pour les cinq formats courts. Elle s’inspire de la composition de https://blue-editing.vercel.app/ avec les contenus propres à Razvan Editing.

Les deux versions partagent `app.js`, `data.json`, les médias et le même panel d’administration.

## Fichiers

- index.html : page, formulaire et administration
- style.css : présentation responsive graphite et bleu
- app.js : portfolio, lecteur, navigation et administration
- data.json : contenu publié et réglages
- assets/ : logo, avatar, miniatures et extrait compatible H.264

Les miniatures sont issues des vidéos du portfolio. Les vidéos ne sont chargées qu’à la demande. Le fichier « Razvan Obby », initialement en HEVC, a été converti en H.264 dans assets/short-5.mp4 pour être lisible dans les navigateurs.

## Aperçu local

Depuis le dossier du site, lancer `python -m http.server 8765`, puis ouvrir http://localhost:8765.

## Administration

Ajouter `?razvan` à l’URL ouvre directement la connexion, sur les deux versions. La version 2 propose également un bouton Administration dans le pied de page. Le mot de passe publié reste valable. Le panel modifie les coordonnées, textes, chiffres, vidéos, logo et collaborations, ainsi que le titre et l’encart d’accueil de la version 2.

Les brouillons enregistrés sont restaurés après connexion, même après rechargement. « Publier sur GitHub » prend aussi en compte les modifications de champs en cours et met à jour le contenu des deux versions. Son jeton GitHub est conservé uniquement dans l’onglet et n’est jamais écrit dans les fichiers du site. Il doit être limité à ce dépôt avec l’autorisation Contents: Read and write.

Les miniatures des vidéos actuelles sont locales. Les nouveaux liens YouTube reçoivent automatiquement une miniature. Le panel propose des champs optionnels pour la miniature (`poster`) et l’aperçu court (`preview`). Si l’aperçu n’est pas renseigné, un fichier vidéo direct sert de source au survol.

Les aperçus de la version 2 durent six secondes, sans son, en H.264 270 × 480. Sur ordinateur, les cartes jouent au survol ou au focus clavier ; sur mobile, un seul aperçu visible joue à la fois. Ils s’arrêtent en dehors de l’écran, dans une page masquée, pendant la lecture complète ou dans l’administration. Le mode de mouvement réduit et l’économie de données empêchent la lecture automatique.

## Formulaire

La configuration Formspree existante est conservée. Les vérifications utilisent des réponses simulées, sans envoyer de message réel. Le service dépend du maintien de ce compte Formspree.

## Crédit

Méthode Unslop, par Damir Sokolovsky (@heydamir), CC BY 4.0. Voir UNSLOP.md.
