module.exports = {
    name: "ass",
    description: "will send ass jpgs",
    execute(message, args, client) {
        if (!message.channel.nsfw) {
            return message.channel.send("No NSFW allowed here! >w<");
        }
        var imagesJpg = 12;
        var imagesGif = 0;
        var shoutouts = [
            "Zzz..",
            "What are u looking at Onii-chan?",
            "OwO",
            "I hope noone sees me naked",
            "Eeeek!",
            "O////O",
            "Put it in :woozy_face:",
            ":woozy_face: :smirk: "
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/ass/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
