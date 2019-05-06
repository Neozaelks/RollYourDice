const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    var diceArgs = messageArray[1];
    var seperatedArgs = diceArgs.split("d");
    var numberOfDiceToRoll = seperatedArgs[0];
    var numberOfFaces = seperatedArgs[1];

    var resultats = [];
    for (var i = 0; i < numberOfDiceToRoll; i++) {
        var min = Math.ceil(0);
        var max = Math.floor(numberOfFaces - 1);
        resultats.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    resultats = resultats.toString();

    let embed = new Discord.RichEmbed()
        .setDescription('Résultats de votre jet de dés !')
        .setColor('#004f00')
        .addField("Résultats :", `${resultats}`);

    return message.channel.send(embed);
}

module.exports.help = {
    name: 'roll'
}