module.exports = {
  name: "rename",
  description: "renames the author to UCanCallMe",
    execute(message, client) {
            message.member.setNickname("UCanCallMe" + message.author.username);
            if (message.member.displayName.length + 10 <= 32) {
                message.channel.send("renaming:" + message.member.displayName)
                try {
                    message.member.setNickname("UCanCallMe" + message.member.displayName);
                } catch (err) { }
            } else {
                try {
                    message.member.setNickname("UCanCallMe" + message.member.displayName.substring(0, 21));
                    message.message.channel.send("renaming:" + message.member.displayName)
                } catch (err) { }
            }
        }
}