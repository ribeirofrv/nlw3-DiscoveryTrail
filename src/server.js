// import package
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

const server = express(); // -> starting express
server
  .use(express.urlencoded({ extended: true })) // -> use body from request
  .use(express.static("public")) // -> using static files
  .set("views", path.join(__dirname, "views")) // -> configure template engine
  .set("view engine", "hbs")
  .get("/", pages.index) // -> create a route
  .get("/institute", pages.institute)
  .get("/institutes", pages.institutes)
  .get("/create-institute", pages.createInstitute)
  .post("/save-institute", pages.saveInstitute)
  .get("/confirm-save", pages.confirmSave);

server.listen(5500); // turn on the server
