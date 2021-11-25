const boom = require('@hapi/boom');

class OrderService {

  constructor(){
  }
  async createOrder(data) {
    return data;
  }

  async getOrders() {
    return [];
  }

  async getOrderById(id) {
    return { id };
  }

  async updateOrder(id, changes) {
    return {
      id,
      changes,
    };
  }

  async deleteOrder(id) {
    return { id };
  }

}

module.exports = OrderService;
