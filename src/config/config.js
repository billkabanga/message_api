require('dotenv').config();

module.exports = { development: { database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: null,
  host: process.env.DB_HOST,
  dialect: 'postgres' },
test: { username: 'root',
  password: null,
  database: 'database_test',
  host: '127.0.0.1',
  dialect: 'mysql' },
production: { database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'postgres' } };
