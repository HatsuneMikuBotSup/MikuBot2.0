module.exports = {
    name: "bunny",
    description: "will send bunny jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 3;
        var imagesGif = 0;
        var shoutouts = [
            "Nyaa!",
            "^w^",
            "pat me!",
            "Hug me!",
            "Give me a headpat >.<",
            "Nya :3",
            "Am I a good girl? :o"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/bunny/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
