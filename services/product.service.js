const faker = require('faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  async createProduct(product) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name: product.name,
      price: product.price,
      image: product.image,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async getProducts() {
    const query = 'SELECT * FROM task';
    const [data] = await sequelize.query(query);
    return data;
  }

  async getProductById(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlocked) {
      throw boom.forbidden('Product is blocked');
    }
    return product;
  }

  async updateProduct(id, product) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index < 0) {
      throw boom.notFound('Product not found');
    }
    const updatedProduct = this.products[index];
    this.products[index] = {
      ...updatedProduct,
      ...product,
    };
    return this.products[index];
  }

  async deleteProduct(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index < 0) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return {
      message: 'Product deleted',
      id,
    };
  }
}

module.exports = ProductsService;
