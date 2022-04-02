module.exports = {
    name: "hug",
    description: "this will hug a user",
    execute(message, args, prefix, client) {
        var images = 2;
        var shoutouts = [
            "ugh fine, I guess u ARE my little pogchamp. Come here!",
            "come in my arms ^w^!",
            "huggie wuggie :>",
            "*hugs*",
            ":heart:"
        ];

        if (args.slice(3) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(3 + prefix.length), { files: ["./images/hug/" + Math.floor(Math.random() * images) + ".gif"] });
            if (message.mentions.members.size) {
                client.user.setActivity("hugging " + message.mentions.members.first().displayName);
            }
            else { client.user.setActivity("hugging " + message.content.slice(3 + prefix.length));}
        }
        else {
            message.channel.send("Enter who u want to hug. Example: !hug @Miku");
        }
    }
}
