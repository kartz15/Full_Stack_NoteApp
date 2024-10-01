// Connect to Databse --> Export Server
const mongoose = require('mongoose')
require('dotenv').config()

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL)
    console.log("Database Connected")

}

module.exports = connectToDb