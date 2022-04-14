const express = require("express");
const {
  graphql
} = require("@octokit/graphql");
const graphqlAuth = graphql.defaults({
  headers: {
    authorization: "token " + process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  },
});

module.exports = express.Router().get("/", (req, res) => {
    res.render("index", {
      pageTitle: "Github Portfolio",
    });
  });
