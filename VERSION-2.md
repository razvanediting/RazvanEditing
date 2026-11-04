# Deuxième version — Razvan Editing

## Présentation

- Version 1 conservée à la racine du site
- Version 2 à `/v2/`, avec un accueil bleu profond, un titre centré et un encart blanc, des boutons arrondis, une présentation des montages et des sections claires
- Police Satoshi sur toute la version 2 et son administration, chargée localement
- Contenus, logo, chiffres confirmés, tarifs, contacts et collaborations de Razvan Editing conservés
- Titres des huit vidéos YouTube récupérés depuis les réponses officielles YouTube oEmbed
- Titres des cinq formats courts visibles et modifiables

La composition s’inspire de https://blue-editing.vercel.app/ ; aucun média, avis client ni témoignage de ce site n’a été réutilisé.

## Aperçus

Les cinq montages courts disposent d’un aperçu silencieux de six secondes. Les clips font ensemble moins de 800 ko et se chargent quand ils deviennent utiles. La vidéo complète reste accessible au clic, avec les contrôles du lecteur et un lien vers l’original.

Sur ordinateur, les aperçus des cartes commencent au survol ou au focus clavier. Sur mobile, un seul aperçu visible joue automatiquement. La lecture s’arrête lorsque le contenu sort de l’écran, pendant l’utilisation du lecteur complet ou de l’administration. Les préférences de mouvement réduit et d’économie de données sont respectées.

## Administration

Le panel partage les mêmes données entre les deux versions. Ajouter `?razvan` à l’adresse ouvre la connexion ; la version 2 possède aussi un bouton Administration en pied de page.

Le mot de passe publié est conservé. Les nouveaux champs permettent de modifier le titre et l’encart de la version 2, les miniatures et les aperçus vidéo. Les brouillons sont conservés dans le navigateur et restaurés après connexion. La publication récupère les modifications en cours, conserve les références des médias et met à jour `data.json` commun aux deux versions.

## Contrôles

- Cinq formats courts, huit vidéos YouTube et leurs titres contrôlés
- Satoshi, images et médias chargés depuis les bons chemins
- Aperçus vérifiés au survol sur ordinateur et au défilement sur mobile
- Arrêt des aperçus pendant la lecture complète
- Navigation, onglets, FAQ, Échap et lecteur vérifiés au clavier
- Absence de débordement horizontal à 320, 390, 768, 1024 et 1440 px
- Connexion à l’administration vérifiée avec un mot de passe de test dans une réponse de données simulée, sans modifier le mot de passe réel
- Sauvegarde des textes et titres, restauration après rechargement et parcours complet de publication GitHub vérifiés avec réponses GET/PUT simulées, sans publication de contenu de test
- Contrôle de la conservation des miniatures et aperçus dans les données publiées
- Version 1 vérifiée après les modifications du code commun
- Aucun téléchargement vidéo automatique en mode de mouvement réduit

Méthode de la première refonte : Unslop par Damir Sokolovsky (@heydamir), CC BY 4.0. Cette version adapte la direction à la référence demandée par le propriétaire.
