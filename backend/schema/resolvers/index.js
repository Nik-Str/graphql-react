const { getUsers, getUser, getMovies, getMovie } = require('./querys.js');
const { createUser, updateUserName, deleteUser } = require('./mutations');
//Every resolvers can have input parameter: parent, args, context, info
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
      const movie = await getMovie(args.name);
      if (movie) return { movie };
      return { message: "Movie doesn't exist." };
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
  //union that specifies diffrent result
  MovieResult: {
    __resolveType(obj) {
      if (obj.movie) return 'MovieSuccessResult';
      if (obj.message) return 'MovieErrorResult';
      return null;
    },
  },
};

module.exports = { resolvers };
