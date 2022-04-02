module.exports = {
    name: "blush",
    description: "if u blush",
    execute(message, args, client) {
        var imagesJpg = 2;
        var imagesGif = 1;
        var shoutouts = [
            ">///<",
            ".....",
            "uhhh...",
            "uhmmmm",
            ">w<",
            ">//.//<",
            "O//w//O"
        ];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/blush/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/blush/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
    }
}
