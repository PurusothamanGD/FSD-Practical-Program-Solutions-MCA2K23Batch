// importing packages express, express-graphql, and graphql
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Sample game catalogue data
var gameCatalogue = [
  {
    "id": 1,
    "title": "Game B",
    "publisher": "Publisher ABC",
    "developer": "Developer DEF",
    "releaseDate": "2015-01-01",
    "platforms": [
      { "id": 1, "name": "Xbox" },
      { "id": 2, "name": "Playstation" },
      { "id": 3, "name": "PC" }
    ],
    "esrbRating": {
      "id": 1,
      "code": "E",
      "name": "Everyone"
    }
  },
  {
    "id": 2,
    "title": "Game C",
    "publisher": "Publisher ABC",
    "developer": "Developer DEF",
    "releaseDate": "2018-01-01",
    "platforms": [
      { "id": 1, "name": "Xbox" },
      { "id": 3, "name": "PC" }
    ],
    "esrbRating": {
      "id": 1,
      "code": "E",
      "name": "Everyone"
    }
  },
  {
    "id": 3,
    "title": "Game A",
    "publisher": "Publisher ABC",
    "developer": "Developer DEF",
    "releaseDate": "2020-01-01",
    "platforms": [
      { "id": 1, "name": "Xbox" },
      { "id": 2, "name": "Playstation" }
    ],
    "esrbRating": {
      "id": 3,
      "code": "M",
      "name": "Mature"
    }
  }
];

// Construct a schema using GraphQL schema language
var schema = buildSchema(`
  type Query {
    games: [Game]
  }
  type Game {
    id: Int
    title: String
    publisher: String
    developer: String
    releaseDate: String
    platforms: [Platform]
    esrbRating: EsrbRating
  }
  type Platform {
    id: Int
    name: String
  }
  type EsrbRating {
    id: Int
    code: String
    name: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  games: () => gameCatalogue
};

// Create an Express app
var app = express();

// Set up the GraphQL endpoint at /graphql
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  // Enable GraphiQL interface
}));

// Set up the server to listen on port 4000
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
