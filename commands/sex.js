module.exports = {
    name: "sex",
    description: "will send sex gifs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 13;
        var imagesGif = 6;
        var shoutouts = [
            "DEEPER!",
            "CUM INSIDE ME!",
            "Onii-chan?! >///<",
            "HARDER!",
            "DON'T CUM INSIDE ME!",
            "IM NOT A VIRGIN ANYMORE!:sob:",
            "This is my first time",
            "THIS FEELS SOO GOOD!",
            "FUCK ME HARDER DADDY!",
            "FUCK ME HARDER ONII-CHAN!",
            "YOUR DICK IS TOO LARGE!:sob:",
            "I can feel your dick inside me",
            "I can feel your dick move inside me",
            "PLEASE BE GENTLE",
            "USE ME!",
            "OMG YES *moans*",
            "OMG YES :weary:",
            "Thats the spot"
        ];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/sex/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/sex/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
        client.user.setActivity("sex with " + message.author.username);
    }
}
