module.exports = {
    name: "titjob",
    description: "will send titjob jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 2;
        var imagesGif = 0;
        var shoutouts = [
            "not on my face Onii-Chan!",
            "Your Cum is so warm",
            "I hope u liked it >.<",
            "WOAH so much cum o.o"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/titjob/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        client.user.setActivity("titjob with " + message.author.username);
    }
}
