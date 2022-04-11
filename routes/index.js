const express = require("express");
const { graphql } = require("@octokit/graphql");
const graphqlAuth = graphql.defaults({
  headers: {
    authorization: "token " + process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  },
});

module.exports = express
  .Router()

  .get("/", (req, res) => {
    graphqlAuth(`{
            user(login: "AllyssaA) {
                repositories(affiliations: OWNER, first: 100) {
                  edges {
                    node {
                        id
                        description
                        name
                        pushedAt
                        nameWithOwner
                        isPrivate
                    }
                  }
                }
              }`)
              
              .then((data) => {
                console.log(data.user.repositories.edges)
      res.render("index", {
        index: data.user.repositories.edges,
      });
    });

  });
