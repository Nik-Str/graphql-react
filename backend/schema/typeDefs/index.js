const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  enum Nationality { #enum = valid values
    SWEDEN
    ENGLAND
    USA
  }

  type Movie {
    id: ID!
    name: String!
    publicationDate: Int!
    isInTheater: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): MovieResult
  }

  #mutations
  input CreateUserInput {
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality!
  }

  input UpdateUserNameInput {
    id: ID!
    userName: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): ID #Could be specified as User, or anything that you want to be returned after query
    updateUserName(input: UpdateUserNameInput!): Int
    deleteUser(id: ID!): Int
  }

  #Example of union
  type MovieSuccessResult {
    movie: Movie!
  }
  type MovieErrorResult {
    message: String!
  }
  union MovieResult = MovieSuccessResult | MovieErrorResult
`;

module.exports = { typeDefs };
