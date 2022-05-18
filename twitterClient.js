
const{TwitterApi} = require("twitter-api-v2");

require("dotenv").config();
const client = new TwitterApi({

    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessSecret: process.env.ACCESS_SECRET,
    accessToken: process.env.ACCESS_TOKEN
})


const rwClient = client.readWrite;

module.exports = rwClient

