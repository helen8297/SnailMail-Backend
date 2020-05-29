const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  //   port: process.env.RDS_PORT,
});

// console.log(`this should be dbname ${RDS_DB_NAME}`);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
