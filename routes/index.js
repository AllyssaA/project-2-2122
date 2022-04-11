const express = require("express")

module.exports = express
    .Router()

    .get("/", (req, res) => {
        res.render("index", {
            pageTitle: "Ayeee new project minor!"
        })
    })