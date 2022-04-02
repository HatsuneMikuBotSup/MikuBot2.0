module.exports = {
    name: "feet",
    description: "will send feet jpgs",
    execute(message, args, client) {
        var imagesJpg = 2;
        var imagesGif = 0;
        var shoutouts = ["Don't tickle me there",">///<","Do u like my feets?"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/feet/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}

