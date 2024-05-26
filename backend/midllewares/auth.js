const TryCatch = require("../midllewares/error");
const jwt = require("jsonwebtoken");
const {QUICKCHAT_TOKEN }= require("../constants/config");
const ErrorHandler = require("../utils/utility");

exports.isAuthenticated = TryCatch((req, res, next) => {

    const token = req.cookies[QUICKCHAT_TOKEN];
    console.log("hyyy",token);
    if (!token)
      return next(new ErrorHandler("Please login to access this route", 401));
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = decodedData._id;
  
    next();
  });
