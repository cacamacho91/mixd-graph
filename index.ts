const {ApolloServer, gql} = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Cocktail {
    uuid: ID!
    name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    cocktails: [Cocktail]
  }
`

const cocktails = [
    {
      uuid: "i-am-placeholder-uuid-1",
      name: "Moscow Mule"
    },
    {
      uuid: "i-am-placeholder-uuid-2",
      name: "Cosmopolitan"
    },
  ]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      cocktails: () => cocktails,
    },
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
