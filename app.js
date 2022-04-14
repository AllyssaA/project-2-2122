require("dotenv").config();
const express = require("express");
const indexRoute = require("./routes/index")
const projectRoute = require("./routes/project-aa");
const projectThRoute = require("./routes/project-th")
// const fetch = require("node-fetch");

module.exports = express()
    .set("view engine", "ejs")
    .set("views", "./views")

    .use(express.static("./static"))

    .use("/", indexRoute)
    .use("/project-aa", projectRoute)
    .use("/project-th", projectThRoute)
    