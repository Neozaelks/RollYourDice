const Discord = require('discord.js');
const fichesPerso = require('../joueurs.json');


module.exports.run = async (bot, message, args) => {
    var originalAuthor = message.author.id

        let embed = new Discord.RichEmbed()
            .setDescription("Choisissez votre joueur !")
            .setColor('#a010bf');

        for (m in fichesPerso.joueurs) {
            embed.addField(`${m}`, `Tapez ${m}`);
        }
        embed.addField("STOP", "pour arrêter");
        embed.addField("Vous avez...", "40 secondes");
        message.channel.send(embed);

        const filter = n => n.author.id === originalAuthor;

        message.channel.awaitMessages(filter, {
            max: 1,
            time: 40000,
            errors: ['time']
        })
            .then(collected => {
                var direction1 = collected.first().content;
                if (direction1 === "STOP") {
                    channel.message.send("Très bien, j'arrête la commande.");
                }
                else {
                    let embed2 = new Discord.RichEmbed()
                        .setDescription("Choisissez votre spécialité")
                        .setColor("#a010bf");
                    for (m in fichesPerso.joueurs[direction1]) {
                        embed2.addField(`${m}`, `Tapez ${m}`);
                    }

                    embed2.addField("STOP", "pour arrêter");
                    embed2.addField("Vous avez...", "40 secondes");

                    message.channel.send(embed2);

                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 40000,
                        errors: ['time']
                    })
                        .then(collected => {

                            var direction2 = collected.first().content;
                            if (direction2 === "STOP") {
                                channel.message.send("Très bien, j'arrête la commande");
                            }
                            else {
                                let embed3 = new Discord.RichEmbed()
                                    .setDescription(`${direction2} de ${direction1}`)
                                    .setColor("#a010bf");
                                    
                                for (m in fichesPerso.joueurs[direction1][direction2]) {
                                    let n = fichesPerso.joueurs[direction1][direction2][m];
                                    embed3.addField(`${m}`, `${n}`);
                                }
                                message.channel.send(embed3);
                            }
                        })
                        .catch(collected => message.channel.send("Le temps est écoulé, ou vous avez demandé d'arrêter la commande."));
                }
            })
            .catch(collected => message.channel.send("Le temps est écoulé, ou vous avez demandé d'arrêter la commande."));
}

module.exports.help = {
    name: 'charinfo'
}
