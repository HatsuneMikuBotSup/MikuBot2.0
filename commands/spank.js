module.exports = {
    name: "spank",
    description: "this will spank a user",
    execute(message, args, prefix, client) {
        var images = 2;
        if (args.slice(5) != 0) {
            message.channel.send("u wer vewy bad >:I " + message.content.slice(5 + prefix.length), { files: ["./images/spank/" + Math.floor(Math.random() * images) + ".gif"] });
            if (message.mentions.members.size) {
                client.user.setActivity("spanking " + message.mentions.members.first().displayName);
            }
            else { client.user.setActivity("spanking " + message.content.slice(5 + prefix.length)); }
        }
        else {
            message.channel.send("Enter who u want to spank. Example: !spank @Miku");
        }
    }
}
