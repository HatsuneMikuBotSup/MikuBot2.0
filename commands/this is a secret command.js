module.exports = {
  name: "this is a secret command",
  description: "secret",
  execute(message, args){
      message.channel.send(":o");
  }
}
