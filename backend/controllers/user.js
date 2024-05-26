// Create a new user and save it to the database and save token in cookie

const User = require('../models/user');
const Chat = require("../models/chat");
const sendToken = require('../utils/features');
const ErrorHandler = require("../utils/utility");
const TryCatch = require("../midllewares/error");

const {cookieOptions} = require("../utils/features");

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

    // console.log("hyyyy",req.user);
    const user = await User.findById(req.user);
  
    if (!user) return next(new ErrorHandler("User not found", 404));
  
    res.status(200).json({
      success: true,
      user,
    });
});

// logout of the current profile
exports.logout = TryCatch(async (req, res) => {
    // set quickchat-token as empty and display message
    return res
      .status(200)
      .cookie("quickchat-token", "", { ...cookieOptions, maxAge: 0 })
      .json({
        success: true,
        message: "Logged out successfully",
      });
});



exports.searchUser = TryCatch(async (req, res) => {
    const { fullname = "" } = req.query;
  
    // // Finding All my chats
    // const myChats = await Chat.find({ groupChat: false, members: req.user });
  
    // //  extracting All Users from my chats means friends or people I have chatted with
    // const allUsersFromMyChats = myChats.flatMap((chat) => chat.members);
  
    // // Finding all users except me and my friends
    // const allUsersExceptMeAndFriends = await User.find({
    //   _id: { $nin: allUsersFromMyChats },
    //   name: { $regex: name, $options: "i" },
    // });
  
    // // Modifying the response
    // const users = allUsersExceptMeAndFriends.map(({ _id, name, avatar }) => ({
    //   _id,
    //   name,
    //   avatar: avatar.url,
    // }));
  
    return res.status(200).json({
      success: true,
      fullname,
    });
  });
