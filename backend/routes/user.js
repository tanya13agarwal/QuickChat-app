const express = require("express");
const {login} = require("../controllers/user");
const {newUser} = require("../controllers/user");
const {getMyProfile} = require("../controllers/user");
const { singleAvatar } = require("../midllewares/multer");
const { isAuthenticated } = require("../midllewares/auth");

const app = express.Router();

app.post("/new", singleAvatar, newUser);
app.post("/login", login);

app.use(isAuthenticated);

app.get("/me", getMyProfile);

module.exports = app;