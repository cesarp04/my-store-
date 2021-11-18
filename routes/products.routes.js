const express = require('express');

const ProductsService = require('../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.getProducts();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.getProductById(id);
  res.json(product)
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.createProduct(body);
  res.status(201).json({
    message: 'Product created',
    data: newProduct,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedProduct = service.updateProduct(id, body);
  res.json({
    message: 'Product Updated',
    data: updatedProduct,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedProduct = service.deleteProduct(id);
  res.json(deletedProduct);
});

module.exports = router;
