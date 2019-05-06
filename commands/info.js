const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let prefix = config.prefix;
    let embed = new Discord.RichEmbed()
        .setDescription('Informations sur le bot')
        .setColor('#dc143c')
        .setThumbnail(botIcon)
        .addField('Nom du bot', bot.user.username)
        .addField('Créé le', bot.user.createdAt)
        .addField('Informations générales', "Ce bot scanne tous les salons textuels auxquels il est associé pour savoir si il y a été invoqué. Vous pouvez demander à tout moment le fait de ne pas être l'objet de ce scan en envoyant un message à <@265599653553242112>. Ce bot, toutes ses interventions, et toutes les images générées, affichées ou modifiées par celui-ci sont sous license CC-BY-SA. Ceci signifie que vous pouvez réutiliser gratuitement le code, les images et les assets de ce bot, mais en conservant une license libre, et en spécifiant partout ou il est utilisé mon nom.")
        .addField('Commandes disponibles', '⬇️')
        .addField(`${prefix}info`, 'Fait apparaître cette boite de dialogue.')
        .addField(`${prefix}infoserv`, 'Fait apparaître des infos sur le serveur.')
        .addField(`${prefix}roll \`xdy\``, 'Lance un dé à \`y\` faces \`x\` fois')
        .addField(`${prefix}charinfo`, "Permet d'afficher, grâce à une suite de commandes, des informations sur les personnages des PJ.")
        .addField(`${prefix}play`, "Permet de jouer des musiques d'ambiances pour JDR. Ne peut pas permettre de lancer une musique, comme Rythm ou FredBoat le ferait. Commande uniquement disponible pour les Maîtres du Jeu.")
        .addField(`${prefix}stop`, "Permet d'arrêter une ambiance sonore en JDR, et fait quitter le Bot du salon vocal.");

    return message.channel.send(embed);
}

module.exports.help = {
    name: "info"
}