require("dotenv").config();
const express = require("express");
// const fetch = require("node-fetch");

// Create express app
const app = express();

// Link templating engine ejs to express
app.set("view engine", "ejs");

// Template files
app.set("views", "views");

// Use static folder
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Ayeee new project minor!",
  });
});

// setup server
app.set("port", process.env.PORT || 8000);

const server = app.listen(app.get("port"), function () {
  console.log(`Server app started on port : ${app.get("port")}`);
});
