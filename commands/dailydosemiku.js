module.exports = {
  name: "dailydosemiku",
  description: "will send nsfw miku pics",
  execute(client){
      var images = 100;

    const channel = client.channels.cache.find(channel => channel.name === "«💙»-miku-only")
    channel.send("This is YOUR Daily Dose of Miku!");

    for (var i = 0; i < 8; i++){
        channel.send("", {files: ["./images/dailydosemiku/" + Math.floor(Math.random()*images) + ".jpg"]})
    }
    client.user.setActivity("daily dose of miku!");
    console.log("Daily Dose of Miku Time!");
  }
}
