const { queryData } = require('../../service/query');

const getUsers = async () => {
  const sql = 'SELECT * FROM users';
  return await queryData(sql);
};

const getUser = async (id) => {
  const sql = `SELECT * FROM users WHERE id = "${id}"`;
  const user = await queryData(sql);
  return user[0];
};

const getMovies = async () => {
  const sql = 'SELECT * FROM movies';
  return await queryData(sql);
};

const getMovie = async (name) => {
  const sql = `SELECT * FROM movies WHERE name = "${name}"`;
  const movie = await queryData(sql);
  return movie[0];
};

module.exports = { getUsers, getUser, getMovies, getMovie };
