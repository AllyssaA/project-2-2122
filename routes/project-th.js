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
      user(login: "AllyssaA") {
        repositories(affiliations: OWNER, first: 100, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}, isFork: false) {
          edges {
            node {
              name
              description
              pushedAt
              url
              homepageUrl
              openGraphImageUrl
          
            }
          }
        }
      }
    }`).then((data) => {
      // console.log(data.login.repositories.edges)
      res.render("project-th", {
        tests: data.user.repositories.edges,
        pageTitle: "Github Portfolio",
      });
    });
  });
