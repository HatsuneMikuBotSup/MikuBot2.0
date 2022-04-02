module.exports = {
    name: "pussy",
    description: "will send pussy jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 15;
        var imagesGif = 0;
        var shoutouts = [
            "Hehe :>",
            "Don't look at me like that Onii-Chan!",
            "quit staring!",
            "uhmmmm >.<",
            "Do u like my pussy?",
            "Please use me :heart:",
            "Can I see ur pp now? >///<",
            "pls touch it O/./O",
            "Put it inside allready! :heart:",
            "I think I lost my credit card inside it, can u check?",
            "Can we have...s-sex?",
            "Im giving u consent uwu",
            "you can do everything u want with me >w<",
            "please be gentle >.<",
            "U said u will give me an ice if I show it to u",
            "I think ur pp wont fit :weary:"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/pussy/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
