require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const app = express();
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer')
const mongoose = require('mongoose');
const jsreport = require('jsreport');
const $ = require('jquery');
let pdf = require("html-pdf");
let path = require("path");
let ejs = require("ejs");

app.set('view engine', 'ejs');
app.engine('handlebars', exphbs());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.render("Team")
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
