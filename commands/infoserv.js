const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servIcon = message.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Informations sur le serveur')
        .setColor('#dc143c')
        .setThumbnail(servIcon)
        .addField('Nom du serveur', message.guild.name)
        .addField('Créé le', message.guild.createdAt)
        .addField('Nombre de membres', message.guild.memberCount)
        .addField('Créé par', message.guild.owner);
    return message.channel.send(embed);
}

module.exports.help = {
    name: "infoserv"
}