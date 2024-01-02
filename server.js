//create JSON file (npm init)

const express = require("express");
const students = require("./students");
//import express

const app = express();
//link app with express methods

//express route : representation of how a server handles a request in a certain endpoint

//app.get("/students/:id", (req, res) => {
//res.send(students.filter((el) => el.id == req.params.id));
//});

//express middleware:
//app.use(express.static("pages"));

//custom middlewars:

const mdlware = (req, res, next) => {
  console.log("middleware function executed");
  next();
};

app.get("/home", mdlware, (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(` server is running on port ${PORT}`)
);
