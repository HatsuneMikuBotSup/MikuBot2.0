module.exports = {
    name: "kill",
    description: "this will kill a user",
    execute(message, args, prefix, client) {
        var images = 3;
        var shoutouts = [
            "ur time has come -.- ",
            "time to die",
            "u dead :3",
            "hihihiHEHEHEEH",
            "BONK",
            "bye bye :>",
            "I got good money to kill u owo"
        ];
        if (args.slice(4) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(4 + prefix.length) , { files: ["./images/kill/" + Math.floor(Math.random() * images) + ".gif"] });
            if (message.mentions.members.size) {
                client.user.setActivity("killing " + message.mentions.members.first().displayName);
            }
            else { client.user.setActivity("killing " + message.content.slice(4 + prefix.length)); }
        }
        else {
            message.channel.send("Enter who u want to kill. Example: !kill @Miku");
        }
    }
}
