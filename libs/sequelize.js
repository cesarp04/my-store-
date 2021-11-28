const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const DB_HOST = encodeURIComponent(config.dbHost);
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:5432/${DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

console.log(`Connected to database ${DB_NAME}`);

module.exports = sequelize;
