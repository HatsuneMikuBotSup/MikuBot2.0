module.exports = {
    name: "blowjob",
    description: "will give u a blowjob",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 8;
        var imagesGif = 5;
        var shoutouts = [
            "Succi Succ",
            "its soo big o.o",
            "slurp",
            "so tasty owo",
            "I hope u cum in my mouth :see_no_evil:",
            "Mhmhm does it feel good?",
            "Mhmhm how does it feel?",
            "its so massive",
            "its so big o.o",
            "It nearly just fits :eyes:",
            "Cum on my face :weary:",
            "I want to swallow ur cum :drooling_face:"
        ];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/blowjob/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/blowjob/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
        client.user.setActivity("with the dicc of " + message.author.username);
    }
}

