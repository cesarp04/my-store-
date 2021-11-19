const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer().min(3);
const image = Joi.string().uri();

const createProductSchema = Joi.object().keys({
  name: name.required(),
  price : price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object().keys({
  name: name,
  price : price,
  image: image,
});

const getProductSchema = Joi.object().keys({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
