const express = require("express");
const login = require("../controllers/user");
const newUser = require("../controllers/user");

const app = express.Router();

app.post("/new", newUser);
app.post("/login", login);

module.exports = app;