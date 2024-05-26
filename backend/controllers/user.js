// Create a new user and save it to the database and save token in cookie

const User = require('../models/user');
const sendToken = require('../utils/features');
const ErrorHandler = require("../utils/utility");
const TryCatch = require("../midllewares/error");

exports.newUser = async(req,res) => {

    const {fullname, username, password, bio} = req.body;
    console.log(req.body);
    
    const avatar = {
        public_id: "Sdfsd",
        url:"asdfd",
    };
    
    const user = await User.create({
        fullname,
        bio,
        username,
        password,
        avatar,
    });

    // res.status(201).json({message:"user created successfully"});
    sendToken(res, user, 201, "User created");
}


// Login user and save token in cookie
exports.login = async (req, res, next) => {
    try{
        const { username, password } = req.body;
  
        const user = await User.findOne({ username }).select("+password");
    
        if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));
        
        // if (!user) return res.status(400).json({message: "Invalid Username or Password"});
    
        // const isMatch = await compare(password, user.password);
    
        // if (!isMatch)
        //   return return res.status(400).json({message: "Invalid credentials"});
        if (password !== user.password)  return next(new ErrorHandler("Invalid Username or Password", 404)); 
    
        sendToken(res, user, 200, `Welcome Back, ${user.fullname}`);
    }
    catch(error){
        next(error); 
    }
  };
  

// get my profile
exports.getMyProfile = TryCatch(async (req, res, next) => {

    console.log("hyyyy",req.user);
    const user = await User.findById(req.user);
  
    if (!user) return next(new ErrorHandler("User not found", 404));
  
    res.status(200).json({
      success: true,
      user,
    });
});

// module.exports = login;
// module.exports = getMyProfile;
// module.exports = newUser;
