module.exports = {
    name: "rob",
    description: "this will rob a user",
    execute(message, args, prefix, client) {
        var images = 1;
        var shoutouts = [
            "This is a robbery, give me all your money!",
            "This is a wobbewy, giv me all ur moni UwU"
        ];
        if (args.slice(3) != 0) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)] + message.content.slice(3 + prefix.length), { files: ["./images/rob/" + Math.floor(Math.random() * images) + ".jpg"] });
        }
        else {
            message.channel.send("Enter who u want to rob. Example: !rob @Miku");
        }
    }
}
