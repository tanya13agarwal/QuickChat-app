// index.js -> server instantiate
 
// create instance of express
const express = require('express');
const app = express();

// import all routes
const userRoute = require("./routes/user.js");

const database = require("./config/database");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");


// load config from env file
dotenv.config();
const PORT = process.env.PORT || 4000;

// database connect
database.connect();

// middleware to parse json request body
app.use(express.json());
app.use(cookieParser());

app.use("/user",userRoute);

//default route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

const errorMiddleware = require("./midllewares/error");
app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})


