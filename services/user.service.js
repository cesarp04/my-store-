const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');

class UserService {
  constructor() {}

  async createUser(data) {
    return data;
  }

  async getUsers() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM task');
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
