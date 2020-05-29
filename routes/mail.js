const express = require("express");

//gets our functions with queries from the models file:
const {
  getUsers,
  getUserById,
  searchUserByName,
  saveUser,
  deleteUserById,
} = require("../models/mail.js");

const router = express.Router();

//get all users:
router.get("/mail", async function (req, res) {
  const { search } = req.query;
  if (search) {
    const searchedUser = await searchUserByName();
    res.json(searchedUser);
  }
  const users = await getUsers();
  res.json(users);
});

module.exports = router;
