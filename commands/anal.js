module.exports = {
    name: "anal",
    description: "will send anal gifs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 10;
        var imagesGif = 3;
        var shoutouts = [
            "...d-daddy!",
            "MY ASS >w<", "IT HURTS!",
            "MY ASS IS WIDE OPEN!",
            "UR HURTING ME",
            "nasty boii :>",
            "u like it rough, heh? :3",
            "TOO DEEP!",
            "IT FEELS SO GOOD!",
            "U hit the wrong hole Onii-Chan!",
            "You're stretching my asshole :sob:",
            "DEEPER DEEPER!",
            "wrong hole :woozy_face:",
            "THATS THE SPOT :heart:",
            "I wont be able to walk after this :sob:",
            "STOOP :sob:"
        ];
        if (Math.random() >= imagesGif/imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/anal/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/anal/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
        client.user.setActivity("anal with " + message.author.username);
    }
}
