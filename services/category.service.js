const boom = require('@hapi/boom');

class CategoryService {

  constructor(){
  }
  async createCategory(data) {
    return data;
  }

  async getCategories() {
    return [];
  }

  async getCategoryById(id) {
    return { id };
  }

  async updateCategory(id, changes) {
    return {
      id,
      changes,
    };
  }

  async deleteCategory(id) {
    return { id };
  }

}

module.exports = CategoryService;
