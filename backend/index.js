// index.js -> server instantiate

// create instance of express
const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// start the server
app.listen( PORT, ()=>{ console.log(`Server started successfully at ${PORT}`); } )

//connect to database
const dbConnect = require("./config/database");
dbConnect.connect();
