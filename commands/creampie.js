module.exports = {
    name: "creampie",
    description: "will send creampie jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 18;
        var imagesGif = 1;
        var shoutouts = [
            "I will get pregnant :sob:",
            "DID U CUM INSIDE ME?!",
            "YESSS ONII-CHAN!",
            "*moans* >///<",
            "I hope you used a condom",
            "THIS FEELS SO GOOD",
            "I CAN FEEL UR HOT CUM",
            "How should we call the baby? :uwu:",
            "Don't tell my mom about this, she will kill me",
            "OMG YES :heart: I LOVE U",
            "ONII_CHAANNNN O//.//O",
            "SO MUCH CUM!",
            "WOAH so much cum o.o",
            "yes Yes YESSS >//w//<",
            "Ur cum is so sticky :woozy_face:"
        ];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/creampie/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/creampie/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
        client.user.setActivity(message.author.username + " creampied me :sob:");
    }
}
