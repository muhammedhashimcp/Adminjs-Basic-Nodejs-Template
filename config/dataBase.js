const mongoose = require('mongoose')
const {MONGO_URL} = require("./config");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URL, {})
        console.log(`MongoDb connected ${connect.connection.host}`)
    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

module.exports = connectDb