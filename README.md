# Project 2: GitHub Hackaton 2021/22

Four days of creative exploration using the GitHub GraphQL API as the outset.

## 📝 Concept

An automagically generated portfolio page based on your github repository, with data from the repositories, description as introductory text and profile image.

## 🔴 Live demo

[Demo](https://minor-project-2-2122.herokuapp.com/)

## 👩‍🏫 Installation

Clone repo

```
$ clone git clone https://github.com/AllyssaA/project-2-2122.git
```

Install dependencies
```
$ npm install
```

Start application

```
$ npm start
```

Nodemon

```
$ npm run dev
```


### Dependencies
We've used a couple of dependencies to create and run this project:

* [ExpressJS](https://expressjs.com/)
* [ejs](https://www.npmjs.com/package/ejs)
* [graphql.js](https://www.npmjs.com/package/@octokit/graphql)
* [Dotenv](https://www.npmjs.com/package/dotenv)


### Dev dependencies
* [Nodemon](https://www.npmjs.com/package/nodemon)


## Github GraphQL
GraphQL is a data query language. The specification determines the validity of the schema on the API server. The schema determines the validity of client calls. The shape of a GraphQL call mirrors the shape of the JSON data it returns. Nested fields let you query for and receive only the data you specify in a single round trip.

How we used GraphQL:

```JavaScript
    user(login: "Hoa0") {
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
    }
```

[Source](https://docs.github.com/en/graphql/overview/about-the-graphql-api)


## ⚖ License
[GNU General Public License v3.0](https://github.com/AllyssaA/project-2-2122/blob/main/LICENSE)


## ✍ Authors


- [@Hoa0](https://github.com/Hoa0)
- [@AllyssaA](https://github.com/AllyssaA)



## ✔ Backlog

- [x] Setup server side
- [x] Setup ejs
- [x] Setup package.json
- [x] Add styling
- [x] Setup GitHub GraphQL API
- [x] Render repositories from API
- [x] Render images from API
- [x] Setup Demo (Heroku)
- [ ] Remove unused files
- [ ] Search function



<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- ...you should implement an explanation of client- server rendering choices 🍽 -->

<!-- ...and an activity diagram including the Service Worker 📈 -->

<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
