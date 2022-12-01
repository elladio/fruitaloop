///////////////////////////////////////////////////
//////// DATABASE connections
///////////////////////////////////////////////////
require("dotenv").config() // Load ENV variables
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}

//establish out connection
mongoose.connect(DATABASE_URL, CONFIG)

//log connections events from mongoose
mongoose.connection
    .on("open", ()=> console.log('Mongoose connected'))
    .on("close", ()=> console.log('Disconected from mongoose'))
    .on("error", ()=> console.log('Mongoose error'))

module.exports = mongoose