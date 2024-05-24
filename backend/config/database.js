// config -> database.js -> connects database with mongoose application

const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        
    })
    .then(() => {
        console.log("Database Connection Established Successfully.")
    })
    .catch( (err) => {
        console.error(err);
        console.log("Connection Issues with Database");
        process.exit(1);
    })
}