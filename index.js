const rwClient = require("./twitterClient");

const tweet = async () =>{

    try{
        const request = require("request");
        request({
            url: "http://api.icndb.com/jokes/random",
            json: true
        }, async (error, response, body) => {
            let joke = body.value.joke.toString();
            await rwClient.v2.tweet(joke);
        })
    } catch (e){
        console.error(e)
    }
}

tweet()








