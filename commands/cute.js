module.exports = {
    name: "cute",
    description: "will send cute jpgs",
    execute(message, args, client) {
        var imagesJpg = 1;
        var imagesGif = 0;
        var shoutouts = [
            "Nyaa!",
            "^w^",
            "pat me!",
            "Hug me!",
            "Give me a headpat >.<",
            "Nya :3"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/cute/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
