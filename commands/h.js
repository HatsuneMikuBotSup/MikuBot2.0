const fetch = require('node-fetch')
const parseString = require('xml2js').parseString;


async function getLewd(message, args, prefix) {
    if (!message.channel.nsfw) {
        return message.channel.send("No NSFW allowed here! >w<");
    }
    const arguments = message.content.slice(prefix.length + 2);
    const url = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=' + arguments;
    try {
        const response = await fetch(url)
        apiData = await response.text()
        parseString(apiData, function (error, result) {
            let postCount = result.posts.$.count - 1;
            if (postCount > 100) {
                postCount = 100;
            }
            if (postCount > 0) {
                var picNum = Math.floor(Math.random() * postCount) + 0;
                var r34Pic = result.posts.post[picNum].$.file_url;
                message.channel.send({
                    files: [r34Pic]
                });
            } else {
                message.channel.send("Replace space's with _ or be more general!");
            }
        })
    } catch (error) {
        console.log(error)
        message.channel.send("There was an error with rule34.xxx")
    }
}

module.exports = {
    name: 'h',
    description: 'Posts lewd image from rule34.xxx',
    execute(message, args, prefix) {
        getLewd(message, args, prefix)
    }
}
