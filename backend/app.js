require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typeDefs');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //Context can provide values, function e.t.c that every resolver can use
  //You can also pass the req body through context
  context: ({ req }) => {
    return { validation: 'sessionValidateFunction', req };
  },
});

server.listen().then((url) => {
  console.log(`Server is listening at port: ${url.port}`);
});
