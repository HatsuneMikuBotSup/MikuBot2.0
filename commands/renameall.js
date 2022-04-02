module.exports = {
  name: "renameall",
  description: "renames all to UCanCallMe",
    execute(message, client) {
        if (message.author.username == "UCanCallMeMiku") {
            const guild = client.guilds.cache.get('606567664852402188');

            guild.members.fetch().then(members => {
                // Loop through every members
                members.forEach(member => {
                    if (!member.displayName.toLowerCase().includes("ucancallme")) {
                        if (member.displayName.length + 10 <= 32) {
                            message.channel.send("renaming:" + member.displayName)
                            try {
                                member.setNickname("UCanCallMe" + member.displayName);
                            } catch (err) {}
                        } else {
                            try {
                                member.setNickname("UCanCallMe" + member.displayName.substring(0, 21));
                                message.channel.send("renaming:" + member.displayName)
                            } catch (err) {}
                        }
                    }
                });
            });

        }
    }
}