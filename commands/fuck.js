module.exports = {
    name: "fuck",
    description: "this will fuck a user",
    execute(message, args, prefix, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var images = 13;
        var shoutouts = [
            "Stop crying ",
            "Open ur holes",
            "U won't be able to walk after this",
            "U CANT ESCAPE ME ",
            ":heart:",
            "Ur mine :heart:"
        ];
        if (args.slice(4) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(4 + prefix.length) + " >:)", { files: ["./images/sex/" + Math.floor(Math.random() * images) + ".jpg"] });
            if (message.mentions.members.size) {
                client.user.setActivity("sex with " + message.mentions.members.first().displayName);
            }

            else {
                client.user.setActivity("sex with " + message.content.slice(4 + prefix.length));
            }
        }
        else {
            message.channel.send("Enter who u want to fuck. Example: !fuck @Miku");
        }
    }
}
