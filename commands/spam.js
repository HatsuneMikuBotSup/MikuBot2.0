module.exports = {
    name: "spam",
    description: "this will spam a user input",
    execute(message, args, prefix){
        var out = "";
        if (args.slice(4) != 0){
            for (var i = 0; out.length < 1000; i++){
                out += args.slice(4) + " ";
            }
            if (message.content.toLowerCase().includes("nigger") || message.content.toLowerCase().includes("xd")) {message.channel.send("STOP IT :D");}
            else {message.channel.send(out);}
        }
        else {
        message.channel.send("Enter what u want to spam. Example: !spam OwO");
        }
    }
}
