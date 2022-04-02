const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();
const prefix = "!";
var chatWords = ["uwu", "owo", "69", "420", "nigger", "nigga", "pog", "boop", "ùwú", "òwó"]
const fs = require("fs");
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
}
 
var date = new Date();

//-------------------------------------------------------------------------------------------------Boot

client.once("ready", () => {
    console.log("Miku is online!");
	client.user.setActivity("Taking over the World!");
});

//-------------------------------------------------------------------------------------------------Message Event

client.on("message", message => {
    if (message.content.startsWith(prefix) &&
        !message.author.bot &&
        !message.content.toLowerCase().includes("@everyone") &&
        !message.content.toLowerCase().includes("@here") &&
        message.author.username != "sex") {
        const args = message.content.slice(prefix.length);
        const command = args.toLowerCase();

        //-------------------------------------------------------------------------------------------------Normal Commands

        if (command === "anal") {
            client.commands.get("anal").execute(message, args, client);
        }
        else if (command === "armpit") {
            client.commands.get("armpit").execute(message, args, client);
        }
        else if (command === "ass") {
            client.commands.get("ass").execute(message, args, client);
        }
        else if (command === "baka") {
            client.commands.get("baka").execute(message, args, client);
        }
        else if (command === "bj"){
		    client.commands.get("blowjob").execute(message, args, client);
        }
        else if (command === "blowjob") {
            client.commands.get("blowjob").execute(message, args, client);
        }
        else if (command === "blush") {
            client.commands.get("blush").execute(message, args, client);
        }
        else if (command === "boobs") {
            client.commands.get("boobs").execute(message, args, client);
        }
        else if (command === "bunny") {
            client.commands.get("bunny").execute(message, args, client);
        }
        else if (command === "cum") {
            client.commands.get("creampie").execute(message, args, client);
        }
        else if (command === "creampie") {
            client.commands.get("creampie").execute(message, args, client);
        }
        else if (command === "cute") {
            client.commands.get("cute").execute(message, args, client);
        }
        else if (command === "die") {
            client.commands.get("die").execute(message, args, client);
        }
        else if (command === "help") {
            client.commands.get("help").execute(message, args, embed);
        }
        else if(command === "horny"){
            client.commands.get("horny").execute(message, args, client);
        }
        else if (command === "feet") {
            client.commands.get("feet").execute(message, args, client);
        }
        else if (command === "love") {
            client.commands.get("love").execute(message, args, client);
        }
        else if (command === "member" || command === "members") {
            message.channel.send(message.guild.memberCount);
        }
        else if (command === "naked") {
            client.commands.get("naked").execute(message, args, client);
        }
        else if (command === "oral") {
            client.commands.get("blowjob").execute(message, args, client);
        }
        else if (command === "pain") {
            client.commands.get("pain").execute(message, args, client);
        }
        else if (command === "ping") {
            client.commands.get("ping").execute(message, date);
        }
        else if (command === "pussy") {
            client.commands.get("pussy").execute(message, args, client);
        }
        else if (command === "sex") {
            client.commands.get("sex").execute(message, args, client);
        }
        else if (command === "titjob") {
            client.commands.get("titjob").execute(message, args, client);
        }

	    else if(command === "69"){
			client.commands.get("nice").execute(message, args);
        }
        else if (command === "420") {
            client.commands.get("nice").execute(message, args);
        }
        else if (command === "nice") {
            client.commands.get("69").execute(message, args);
        }

        //-------------------------------------------------------------------------------------------------Secret Commands

        else if(command === "debugdailydosemiku"){
            client.commands.get("dailydosemiku").execute(client);
        }
        else if (command === "debugdailydosezerotwo") {
            client.commands.get("dailydosezerotwo").execute(client);
        }
        else if (command === "debugfemboyfriday") {
            client.commands.get("femboyfriday").execute(client);
        }
        else if(command === "this is a secret command"){
            client.commands.get("this is a secret command").execute(message, args);
        }
        else if (command === "rename") {
            client.commands.get("rename").execute(message, client);
        }
        else if (command === "renameall") {
            client.commands.get("renameall").execute(message, client);
        }

        //-------------------------------------------------------------------------------------------------Interactive Commands
        else if (command[0] + command[1] + command[2] + command[3] == "bdsm") {
            if (command[4] == " ") {
                client.commands.get("bdsm").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to bdsm. Example: !bdsm @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] + command[4] == "choke") {
            if (command[5] == " ") {
                client.commands.get("choke").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to choke. Example: !choke @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] == "fuck") {
            if (command[4] == " ") {
                client.commands.get("fuck").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to fuck. Example: !fuck @Miku"); }
        }

        else if (command[0] + command[1] == "h ") {
            client.commands.get("h").execute(message, args, prefix);
        }

        else if (command[0] + command[1] + command[2] + command[3] + command[4] + command[5] + command[6] == "hentai ") {
            client.commands.get("hentai").execute(message, args, prefix);
        }

        else if (command[0] + command[1] + command[2] == "hug") {
            if (command[3] == " ") {
                client.commands.get("hug").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to hug. Example: !hug @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] == "kill") {
            if (command[4] == " ") {
                client.commands.get("kill").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to kill. Example: !kill @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] == "kiss") {
            if (command[4] == " ") {
                client.commands.get("kiss").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to kiss. Example: !kiss @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] == "lick") {
            if (command[4] == " ") {
                client.commands.get("lick").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to lick. Example: !lick @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] + command[4] == "marry") {
            if (command[5] == " ") {
                client.commands.get("marry").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to marry. Example: !marry @Miku"); }
        }

        else if (command[0] + command[1] + command[2] == "rob") {
            if (command[3] == " ") {
                client.commands.get("rob").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to rob. Example: !rob @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] + command[4] == "spank") {
            if (command[5] == " ") {
                client.commands.get("spank").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter who u want to spank. Example: !spank @Miku"); }
        }

        else if (command[0] + command[1] + command[2] + command[3] == "spam") {
            if (command[4] == " ") {
                client.commands.get("spam").execute(message, args, prefix, client);
            }
            else { message.channel.send("Enter what u want to spam. Example: !spam Pray to the holy Miku"); }
        }

	    else {
			client.commands.get("copycat").execute(message, args, prefix,command);
        }
    }

    //-------------------------------------------------------------------------------------------------Chat Words

    if (chatWords.some(el => message.content.toLowerCase().includes(el)) && !message.author.bot) {
		if (message.content.toLowerCase().includes("owo") && !message.content.startsWith(prefix)) {message.channel.send("OwO");}
        if (message.content.toLowerCase().includes("uwu") && !message.content.startsWith(prefix)) { message.channel.send("UwU"); }
        if (message.content.toLowerCase().includes("ùwú") && !message.content.startsWith(prefix)) { message.channel.send("ÙwÚ"); }
        if (message.content.toLowerCase().includes("òwó") && !message.content.startsWith(prefix)) { message.channel.send("ÒwÓ"); }
        if (message.content.toLowerCase().includes("pog") && !message.content.startsWith(prefix)) { message.channel.send("p...pog..pogchamp:see_no_evil::two_hearts:"); }
        if (message.content.toLowerCase().includes("boop") && !message.content.startsWith(prefix)) { message.channel.send("boop:two_hearts:"); }
        if (message.content.toLowerCase().includes("nigger") && !message.content.startsWith(prefix)) { message.channel.send("U fucking racist go kys :D"); }
        if (message.content.toLowerCase().includes("nigga") && !message.content.startsWith(prefix)) { message.channel.send("U fucking racist go kys :D"); }
        if (message.content.toLowerCase().includes("nice") && !message.content.startsWith(prefix)) {message.channel.send("69");}
        if (message.content.toLowerCase().includes("69") && !message.content.startsWith(prefix) && !message.content.includes("<")) { message.channel.send("nice"); }
        if (message.content.toLowerCase().includes("420") && !message.content.startsWith(prefix) && !message.content.includes("<")) { message.channel.send("nice"); }
    }

    //-------------------------------------------------------------------------------------------------Console Log

    console.log(message.author.tag + ": " + message.content);
});

//-------------------------------------------------------------------------------------------------On Join Event

var welcomeMessagePre = [
    "Henlo",
    "Hewoo",
    "konnichiwa",
    "ohayoo",
    "U finally made it",
    "Its the legendery hentai dealer",
    "Heyya"
];

var welcomeMessageAft = [
    "u look good today",
    "UwU",
    "OwO",
    "welcome to hell!",
    "welcome to Hatsune Miku NSFW Club",
    "welcome to the dark side",
    "u have come to the right place",
    "get ready for 4k tentacle hentai",
    "*notices ur bulge*",
    "If you leave ur gay :>",
    "pwease stay with me :3",
    "ur cute owo",
    "cutie"
];

client.on("guildMemberAdd", member => {
    const channel = client.channels.cache.find(channel => channel.name === "«🙌»-welcome")
    if (Date.now() - member.user.createdAt < 1000 * 60 * 60 * 24 * 10) {
        member.roles.add("785810811721351218");
        channel.send(member.user.username + " kinda sus :thinking:");
    }
    else {
        channel.send(welcomeMessagePre[Math.floor(Math.random() * welcomeMessagePre.length)] + " " + member.user.username + " " +
                     welcomeMessageAft[Math.floor(Math.random() * welcomeMessageAft.length)]);
    }
});


//-------------------------------------------------------------------------------------------------Time Manager

var now = date.getHours()*60 + date.getMinutes();
var offset = 0;
for (var i = 0; now + offset != 11 * 60 && now + offset != 23 * 60 && now + offset != 35 * 60; i++) {
    offset++;
}
console.log(offset + " minutes offset");
setTimeout(function () {
    client.commands.get("dailydosemiku").execute(client)
    client.commands.get("dailydosezerotwo").execute(client);

    setInterval(function () {
        client.commands.get("dailydosemiku").execute(client);
    }, 1000 * 60 * 60 * 24);

    setInterval(function () {
        client.commands.get("dailydosezerotwo").execute(client);
    }, 1000 * 60 * 60 * 12);

}, 1000 * 60 * offset);

//-------------------------------------------------------------------------------------------------Client Login

client.login("NzgyMzI4NTI1MDcxMDU2OTE4.X8KmNw.HboY9tzFi36R_KfsjPCzjEOzVdQ");

