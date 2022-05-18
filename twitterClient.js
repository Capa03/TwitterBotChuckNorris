
const{TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({

    appKey: "TuZfLKk1B1n9309yWVwFOPRUc",
    appSecret: "sVhapTUHBckbFtTdiYW5U1ogRY6cXMiN2aZWizx1WjKYzioH5E",
    accessSecret: "y4kZadB5RhNTlJ6RFloWVMp5M43cVdIfl75de9Ksdrfsf",
    accessToken: "873223092750995456-EHzInhs3ZWRhqpi8kcdn7QlWmG17yQC"
})


const rwClient = client.readWrite;

module.exports = rwClient

