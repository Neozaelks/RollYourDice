const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    if(args === "generique"){
        var generique = 'https://www.youtube.com/watch?v=IhznFMV5Lj0';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === "montagne"){
        var generique = 'https://www.youtube.com/watch?v=NZjcD_ddIwI';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === "tempete"){
        var generique = 'https://www.youtube.com/watch?v=Pj0-MPGKF34';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === "foret"){
        var generique = 'https://www.youtube.com/watch?v=NbpdKfeWt5c';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'forge'){
        var generique = 'https://www.youtube.com/watch?v=jD16-qUB4Hc';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'temple'){
        var generique = 'https://www.youtube.com/watch?v=Y2Gd0aTczKA';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'animasia'){
        var generique = 'https://www.youtube.com/watch?v=Q7TWBZ-Mzus';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'aria'){
        var generique = 'https://www.youtube.com/watch?v=wfBtPrcemsY';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'ile'){
        var generique = 'https://www.youtube.com/watch?v=1jDTb7pCndk';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'boss'){
        var generique = 'https://www.youtube.com/watch?v=vDL6741wq7s';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'port'){
        var generique = 'https://www.youtube.com/watch?v=NQ5uQ7CpFuI';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'aqabah'){
        var generique = 'https://www.youtube.com/watch?v=fWserXnphME';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }

    if(args === 'combat'){
        var generique = 'https://www.youtube.com/watch?v=w0sUw735gRw';
        if(!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal !");
        if(message.guild.me.voiceChannel) return message.channel.send("Le bot est déjà connecté à un channel ! Patientez jusqu'à la fin de son utilisation.");

        const validate = await ytdl.validateURL(generique);
        const info = await ytdl.getInfo(generique);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(ytdl(generique, {filter: 'audioonly'}));
    }
}

module.exports.help = {
    name: 'play'
}