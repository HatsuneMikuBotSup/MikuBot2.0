module.exports = {
    name: "lick",
    description: "this will lick a user",
    execute(message, args, prefix, client) {
        var images = 1;
        var shoutouts = [
            "I will lick ur tears :>",
            "yummmm:heart:",
            "heehee:star_struck:",
            ":3"
        ];
        if (args.slice(4) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(4 + prefix.length), { files: ["./images/lick/" + Math.floor(Math.random() * images) + ".gif"] });
            if (message.mentions.members.size) {
                client.user.setActivity("licking " + message.mentions.members.first().displayName);
            }
            else { client.user.setActivity("licking " + message.content.slice(4 + prefix.length)); }
        }
        else {
            message.channel.send("Enter who u want to lick. Example: !lick @Miku");
        }
    }
}
