module.exports = {
    name: "boobs",
    description: "will send boobs jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 11;
        var imagesGif = 0;
        var shoutouts = [
            "I hope u like them",
            "MY TITS ARENT SMALL >:c",
            "Stop saying they are small :sob:",
            "Hehe :>",
            "Don't look at me like that Onii-Chan!",
            "quit staring",
            "uhmmmm >.<",
            "Do u think they are big?",
            "pls touch them >///<",
            "please massage them good :>"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/boobs/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
