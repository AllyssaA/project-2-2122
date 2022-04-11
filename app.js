require("dotenv").config();
const express = require("express");
const indexRoute = require("./routes/index")
// const fetch = require("node-fetch");

module.exports = express()
    .set("view engine", "ejs")
    .set("views", "./views")

    .use(express.static("./static"))

    .use("/", indexRoute)
    

// // Create express app
// const app = express();

// // Link templating engine ejs to express
// app.set("view engine", "ejs");

// // Template files
// app.set("views", "views");

// // Use static folder
// //test
// app.use(express.static("static"));

// app.get("/", (req, res) => {
//   res.render("index", {
//     pageTitle: "Ayeee new project minor!",
//   });
// });

// // setup server
// app.set("port", process.env.PORT || 8000);

// const server = app.listen(app.get("port"), function () {
//   console.log(`Server app started on port : ${app.get("port")}`);
// });