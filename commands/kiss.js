module.exports = {
    name: "kiss",
    description: "this will kiss a user",
    execute(message, args, prefix, client) {
        var images = 3;
        var shoutouts = [
            "kisses",
            "smouch",
            "xoxo",
            "hihi",
            ":kissing_closed_eyes:",
            ":kiss:"
        ]
        if (args.slice(4) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(5 + prefix.length), { files: ["./images/kiss/" + Math.floor(Math.random() * images) + ".gif"] });
            if (message.mentions.members.size) {
                client.user.setActivity("kissing " + message.mentions.members.first().displayName);
            }
            else { client.user.setActivity("kissing " + message.content.slice(4 + prefix.length)); }
        }
        else {
            message.channel.send("Enter who u want to kiss. Example: !kiss @Miku");
        }
    }
}
