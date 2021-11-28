const boom = require('@hapi/boom');
const { User } = require('../db/models/user.model');

class UserService {
  constructor() {}

  async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  async getUsers() {
    const users = await User.findAll();
    return users;
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
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
