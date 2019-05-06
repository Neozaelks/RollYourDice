const config = require('./config.json');
const Discord = require('discord.js');
const fichesPerso = require('./joueurs.json');
const ytdl = require('ytdl-core');
const fs = require("fs");


const bot = new Discord.Client({ disableEveryone: false });
/*Ctrl + C permet de kill le process de node.js*/

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');

    if (jsFile.length <= 0){
        console.log('Fichier de commandes introuvable.');
        return;
    }

    jsFile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    })
});

bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne !`);
    bot.user.setActivity('Developed by Xeria !');
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    var args = messageArray.slice(1);

    if (prefix == command.slice(0, 1)) {
        let commandFile = bot.commands.get(command.slice(prefix.length));
        if (commandFile) commandFile.run(bot, message, args);
    };
})
bot.login(config.token);