const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'cesar',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  console.log('Connected to database');
  return client;
}

module.exports = getConnection;
