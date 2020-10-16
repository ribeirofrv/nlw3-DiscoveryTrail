// import package
const express = require("express");
const path = require('path');
const pages = require('./pages.js');


const server = express() // -> starting express
server
  .use(express.static('public')) // -> using static files
  .set('views', path.join(__dirname, "views")) // -> configure template engine
    .set('view engine', 'hbs')
    .get("/", pages.index) // -> create a route
    .get("/institution", pages.institution)
    .get("/institutions", pages.institutions)
    .get("/create-institution", pages.createinstitution)


server.listen(5500) // turn on the server