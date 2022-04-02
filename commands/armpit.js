module.exports = {
    name: "armpit",
    description: "will send armpit jpgs",
    execute(message, args, client) {
        var imagesJpg = 3;
        var imagesGif = 0;
        var shoutouts = ["Don't tickle me there!","*yawn*"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/armpit/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });

    }
}
