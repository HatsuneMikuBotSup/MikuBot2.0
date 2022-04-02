module.exports = {
  name: "ping",
  description: "this is a ping command!",
    execute(message, date) {
        message.channel.send("Offset is " + date.getHours() + " hours and " + date.getMinutes() + " minutes!");
        message.channel.send("pong!" );
    }
}
