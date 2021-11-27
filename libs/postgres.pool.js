const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const DB_HOST = encodeURIComponent(config.dbHost);
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:5432/${DB_NAME}`;

const pool = new Pool({ connectionString: URI });

console.log('Connected to database');

module.exports = pool;
