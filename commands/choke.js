module.exports = {
    name: "choke",
    description: "this will choke a user",
    execute(message, args, prefix, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
            var images = 1;
            if (args.slice(5) != 0) {
                    message.channel.send("Looks like u cant breathe :3 " + message.content.slice(5 + prefix.length), { files: ["./images/choke/" + Math.floor(Math.random() * images) + ".jpg"] });
                    if (message.mentions.members.size) {
                        client.user.setActivity("choking " + message.mentions.members.first().displayName);
                        if (message.author.username == "UCanCallMeMiku") {
                            message.mentions.members.first().roles.add("788459296580042813");
                            setTimeout(function () {
                                message.mentions.members.first().roles.remove("788459296580042813");
                            }, 1000 * 15);
                        }
                    }
            }

            else {
                message.channel.send("Enter who u want to choke. Example: !choke @Miku");
            }
    }
 }

