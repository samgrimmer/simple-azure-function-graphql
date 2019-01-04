const { gql, ApolloServer } = require('apollo-server-azure-functions');

const typeDefs = gql`
  type Address {
    street: String!
    suburb: String
    city: String
    postCode: Int
  }

  type Query {
    myName: String!
    myAddress: Address!
  }
`;

const resolvers = {
  Query: {
    myName: () => 'sam grimmer',
    myAddress: () => ({
      street: '85 marsden st',
      suburb: 'lower hutt',
      city: 'wellington',
      postCode: 5040,
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
