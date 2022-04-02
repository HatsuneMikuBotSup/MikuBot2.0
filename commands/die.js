module.exports = {
    name: "die",
    description: "if u want to die",
    execute(message, args, client) {
        var images = 1;
        message.channel.send("Nuuu, Im here for u :c");
        client.user.setActivity(message.author.username + " >///<");
    }
}
