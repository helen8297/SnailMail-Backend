const { query } = require("../db/index");

//get all users:
async function getUsers() {
  const data = await query(`SELECT * FROM users`);
  return data.rows;
}

//get specific user details by id:
async function getUserById(id) {
  const user = await query(`SELECT * FROM users WHERE user_id = $1`, [id]);
  return user.rows[0];
}

//search user by name:
async function searchUserByName(search) {
  const user = await query(
    `SELECT * FROM users WHERE name ILIKE '%' || $1 || '%'`,
    [search]
  );
  return user.rows;
}

//save new user:
async function saveUser(user) {
  const { first_name, surname, address, postcode, friend_ids } = user;
  const newUser = await query(
    `INSERT INTO users (name, address, postcode, friend_ids) VALUES($1, $2, $3, $4, $5)`,
    [first_name, surname, address, postcode, friend_ids]
  );
  return newUser;
}

//delete user by id:
async function deleteUserById(id) {
  const res = await query(
    `DELETE FROM users WHERE user_id = $1 RETURNING name`,
    [id]
  );
  if (res.rowCount > 0) {
    return res.rows[0].name;
  } else {
    return null;
  }
}

module.exports = {
  getUsers,
  getUserById,
  searchUserByName,
  saveUser,
  deleteUserById,
};
