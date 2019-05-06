# RollYourDice
Un bot Discord designé pour améliorer vos séances de JDR sur Discord.

## Liste des commandes

### !info
Cette commande affiche des informations générales sur le bot (comme sa date de création), des informations sur ce que collecte le bot, la liste des commandes, et leur brève description.

### !infoserv
Cette commande affiche le nom du serveur, son créateur, son nombre de membres, et sa date de création.

### !roll `x`d`y`
Cette commande permet de lancer un dé, en fonction des arguments de la commande. Le paramètre `x` désigne le nombre de dés à jeter, et le paramètre `y` désigne le nombre de faces de ces dés.

L'ensemble de définition des résultats des dés est [`0`, `y-1`].
*Ce paramètre pourra être modifié dans des versions futures.*

### !charinfo
Cette commande permet de naviguer et d'afficher le contenu du fichier joueurs.json fourni avec le bot, via des embeds Discord. 

*Cette commande sera modifiée très prochainement pour améliorer son fonctionnement.*

### !play [nom de l'ambiance]
Cette commande permet de jouer des musiques d'ambiances pour le JDR. **Cette commande ne permet pas de lancer une musique en particulier, comme FredBoat ou Rythm le ferait.** Cette commande est disponible uniquement pour les personnes ayant le rôle `@MJ`.

*Cette commande sera modifiée prochainement pour permettre de modifier les rôles pouvant accéder à cette commande.*

### !stop
Cette commande permet d'arrêter une ambiance sonore en JDR, et déconnecte le bot du salon vocal.

## Changements et ajouts à venir

* Ajout d'un message d'erreur en cas d'erreur sur la commande !roll
* Ajout d'informations sur la commande !infoserv
* Modification totale de la commande !charinfo
* Permission de jouer n'importe quelle musique via la commande !play
* Fix de la commande !play (pouvoir jouer plusieurs musiques à la suite)
* Ajout d'une queue avec la commande !play

## Autres informations

Ce bot, toutes ses interventions, et toutes les images générées, affichées ou modifiées par celui-ci sont sous license CC-BY-SA. Ceci signifie que vous pouvez réutiliser gratuitement le code, les images et les assets de ce bot, mais en conservant une license libre, et en spécifiant partout ou il est utilisé mon ID Discord.

Vous pouvez faire part des erreurs ou des suggestions pour ce bot de deux façons :
* Soit via GitHub, en soumettant une 'Issue',
* Soit sur le serveur associé à ce bot, dont le lien est [juste ici !](https://discord.gg/bqsXPSn)

## Dépendances

Ce bot discord utilise 4 dépendances majeures, que vous devrez installer afin d'utiliser le bot.
* discord.js 11.4.2
* ffmpeg-binaries 4.0.0
* opusscript 0.0.6
* ytdl-core 0.29.1

# Merci !
