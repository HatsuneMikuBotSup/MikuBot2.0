module.exports = {
    name: "love",
    description: "will send love gifs",
    execute(message, args, client) {
        var imagesJpg = 9;
        var imagesGif = 1;
        var shoutouts = [
            "You're cute teehee:star_struck:",
            "Heyy Darling",
            "Darling :heart:",
            "Do you think I am cute? >.< ",
            "You're online! :heart_eyes:",
            "Iv been waiting for u :eyes:",
            "Hayyy ^w^"
        ];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/love/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/love/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
    }
}
