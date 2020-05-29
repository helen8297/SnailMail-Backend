const { query } = require("../index");

async function createUserTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, name TEXT, address TEXT, postcode VARCHAR(8), friend_ids TEXT [])`
  );

  console.log(`Log: create bootcamper table script ${res}`);
}

createUserTable();

//name, address, postcode, friend_ids
//INTEGER REFERENCES users (user_id)
