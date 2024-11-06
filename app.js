const express = require('express');
const app = express();

const PORT = 4040

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

app.use("/resources", express.static("public"));
app.use("resources", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const bcrypt = require("bcryptjs");

const session = require("express-session");

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}))

const connection = require("./database/db");

app.get("/", (req, res) => {
  res.render("index", {msg: "ROOT"})
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.listen(PORT, (req, res) =>  {
  console.log("Server running in http://localhost:" + PORT);
})



