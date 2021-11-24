const { ApolloServer, gql } = require('apollo-server'); // parse this schema
// gql is a tag function

// def schema
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// resolvers
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL world',
  },
};

// server
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
