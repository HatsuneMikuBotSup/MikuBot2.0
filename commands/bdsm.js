module.exports = {
    name: "bdsm",
    description: "this will bdsm a user",
    execute(message, args, prefix, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var images = 10;
        var shoutouts = [
            "Stop crying",
            "Open ur holes",
            "U won't be able to walk after this",
            "U CANT ESCAPE ME",
            ":heart:",
            "Do u like that?"
        ];
        if (args.slice(4) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(4 + prefix.length) + " >:)", { files: ["./images/bdsm/" + Math.floor(Math.random() * images) + ".jpg"] });
            if (message.mentions.members.size) {
                client.user.setActivity("bdsm with " + message.mentions.members.first().displayName);
            }

            else {
                client.user.setActivity("bdsm with " + message.content.slice(4 + prefix.length));
            }
        }
        else {
            message.channel.send("Enter who u want to bdsm. Example: !bdsm @Miku");
        }
    }
}
