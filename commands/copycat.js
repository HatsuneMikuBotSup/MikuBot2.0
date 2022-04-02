module.exports = {
    name: "copycat",
    description: "Copy's importent messages like OwO or UwU and removes duplicates",
    execute(message, args, prefix, command) {
         if (["owo", "uwu","boop","pog"].includes(message.content.slice(prefix.length).toLowerCase())) {
                 message.channel.send(message.content.slice(prefix.length));
         }
    }
}
