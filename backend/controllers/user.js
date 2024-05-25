// Create a new user and save it to the database and save token in cookie
// const newUser = TryCatch(async (req, res, next) => {
//     const { name, username, password, bio } = req.body;
  
//     const file = req.file;
  
//     if (!file) return next(new ErrorHandler("Please Upload Avatar"));
  
//     const result = await uploadFilesToCloudinary([file]);
  
//     const avatar = {
//       public_id: result[0].public_id,
//       url: result[0].url,
//     };
  
//     const user = await User.create({
//       name,
//       bio,
//       username,
//       password,
//       avatar,
//     });
  
//     sendToken(res, user, 201, "User created");
//   });
  

const login = (req, res) => {
    res.send("hello world");
}

module.exports = login;
// module.exports = newUser;