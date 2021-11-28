const boom = require('@hapi/boom');
const { User } = require('../db/models/user.model');

class UserService {
  constructor() {}

  async createUser(data) {
    return data;
  }

  async getUsers() {
    User.findAll().then(users => {
      return users;
    });
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
