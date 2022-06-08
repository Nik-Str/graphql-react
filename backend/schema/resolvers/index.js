const { getUsers, getUser, getMovies, getMovie } = require('./querys.js');
const { createUser, updateUserName, deleteUser } = require('./mutations');

const resolvers = {
  Query: {
    users: async () => {
      return await getUsers();
    },
    user: async (parent, args) => {
      return await getUser(Number(args.id));
    },
    movies: async () => {
      return await getMovies();
    },
    movie: async (parent, args) => {
      return await getMovie(args.name);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      return await createUser(args);
    },
    updateUserName: async (parent, args) => {
      return await updateUserName(args);
    },
    deleteUser: async (parent, args) => {
      return await deleteUser(Number(args.id));
    },
  },
};

module.exports = { resolvers };
