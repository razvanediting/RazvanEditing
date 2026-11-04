# Razvan Editing

Portfolio de montage vidéo pour YouTube, TikTok et Reels en HTML, CSS et JavaScript. GitHub Pages publie la racine du dépôt, sans compilation ni dépendance npm.

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

L’accès existant est conservé : ajouter `?razvan` à l’URL puis taper `razvan` au clavier. Le mot de passe publié reste valable. Le panel modifie les coordonnées, textes, chiffres, vidéos, logo et collaborations.

Publier les modifications depuis le panel pour les retrouver après rechargement et sur les autres appareils. Son jeton GitHub est conservé uniquement dans l’onglet et n’est jamais écrit dans les fichiers du site. Il doit être limité à ce dépôt avec l’autorisation Contents: Read and write.

Les miniatures des vidéos actuelles sont locales. Les nouveaux liens YouTube reçoivent automatiquement une miniature. Un nouveau fichier vidéo direct peut aussi avoir une miniature locale via la propriété `poster` dans data.json.

## Formulaire

La configuration Formspree existante est conservée. Les vérifications utilisent des réponses simulées, sans envoyer de message réel. Le service dépend du maintien de ce compte Formspree.

## Crédit

Méthode Unslop, par Damir Sokolovsky (@heydamir), CC BY 4.0. Voir UNSLOP.md.
