module.exports = {
    name: "marry",
    description: "this will marry a user",
    execute(message, args, prefix, client) {
        var images = 12;
        var shoutouts = [
            "You are my one and only",
            "Please by my waifu",
            "Will you be me wife?",
            "pls marry me uwu"
        ];
        if (args.slice(5) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(5 + prefix.length), { files: ["./images/marry/" + Math.floor(Math.random() * images) + ".jpg"] });
        }
        else {
            message.channel.send("Enter who u want to marry. Example: !marry @Miku");
        }
    }
}
