const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  async createUser(data) {
    return data;
  }

  async getUsers() {
    const query = 'SELECT * FROM task';
    const rta = await this.pool.query(query)
    return rta.rows;
  }

  async getUserById(id) {
    return { id };
  }

  async updateUser(id, changes) {
    return {
      id,
      changes,
    };
  }

  async deleteUser(id) {
    return { id };
  }
}

module.exports = UserService;
