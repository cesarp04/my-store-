const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'cesar',
  password: 'admin123',
  database: 'my_store',
});

console.log('Connected to database');

module.exports = pool;
