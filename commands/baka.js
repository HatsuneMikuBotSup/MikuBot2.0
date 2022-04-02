module.exports = {
    name: "baka",
    description: "If ur baka",
    execute(message, args, client) {
        var images = 1;
        var shoutouts = [
            "BAKA",
            "baka",
            "Anatawa baka desu",
            "idiot",
            "idiot :see_no_evil:",
            "baka :see_no_evil:",
            ">:I"
        ];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/baka/" + Math.floor(Math.random() * images) + ".jpg"] });
    }
}



