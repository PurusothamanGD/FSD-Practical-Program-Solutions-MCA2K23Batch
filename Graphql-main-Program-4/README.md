# Graphql
To run this code Go to terminal then these commands
npm install express express-graphql graphql
node index.js
then search for this url 👇
http://localhost:4000/graphql
then enter these code one by one in graphql:
code:1
-------

{
  games {
    title
}
}


code:2
-------

{
  games {
    title
    publisher
}
}


code:3
-------

{
  games {
    id
    title
    publisher
    developer`
    releaseDate
    platforms {
      id
      name
    }
  }
}


code:4
-------

{
  games {
    id
    title
    publisher
    developer
    releaseDate
    platforms {
      id
      name
    }
    esrbRating {
      id
      code
      name
    }
  }
}

///////////

Don't forget to take Screenshot for each output

///////////
package
----------
express
express-graphql
grapql
