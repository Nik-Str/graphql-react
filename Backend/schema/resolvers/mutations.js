const { queryData } = require('../../service/query');

const createUser = async (args) => {
  const { name, userName, age, nationality } = args.input;
  const sql = `INSERT INTO users (name, userName, age, nationality) VALUES ("${name}", "${userName}", "${age}", "${nationality}")`;
  const user = await queryData(sql);
  return user.insertId;
};

const updateUserName = async (args) => {
  const { userName, id } = args.input;
  const sql = `UPDATE users SET username = "${userName}" WHERE id = ${Number(id)}`;
  const user = await queryData(sql);
  return user.changedRows;
};

const deleteUser = async (id) => {
  const sql = `DELETE FROM users WHERE id = ${id}`;
  const user = await queryData(sql);
  console.log(user);
  return user.affectedRows;
};

module.exports = { createUser, updateUserName, deleteUser };
