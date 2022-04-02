module.exports = {
    name: "naked",
    description: "will send naked jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 15;
        var imagesGif = 0;
        var shoutouts = [
            "Hehe :>",
            "Don't look at me like that Onii-Chan!",
            "quit staring!",
            "uhmmmm >.<",
            "Do u like my body?",
            "Please use me :heart:",
            "Can I see ur pp now? >///<",
            "pls touch me O/./O",
            "Can I touch ur pp now? owo",
            "Do you think im sexy? :>",
            "My eyes are up here baka"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/naked/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
