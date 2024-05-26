const express = require("express");
const {login} = require("../controllers/user");
const {newUser} = require("../controllers/user");
const {getMyProfile, logout, searchUser} = require("../controllers/user");
const { singleAvatar } = require("../midllewares/multer");
const { isAuthenticated } = require("../midllewares/auth");

const app = express.Router();

app.post("/new", singleAvatar, newUser);
app.post("/login", login);

// whenever we want user to be logged in , use isAuthenticated
app.use(isAuthenticated);

app.get("/me", getMyProfile);
app.get("/logout", logout);
app.get("/search", searchUser);

module.exports = app;