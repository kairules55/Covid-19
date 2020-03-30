//imports
const express = require("express");
const db = require("./config/mongoose");
const passport = require("passport");
const passportJwt = require("./config/passport-jwt-startegy");

//port
const port = 8000;

//Express App
const app = express();

//Middleware
app.use(express.urlencoded());
app.use("/", require("./routes"));

//Server
app.listen(port, function(error) {
  if (error) {
    console.log("Error while starting the app");
    return;
  }
  console.log("Server is up and runnning");
});
