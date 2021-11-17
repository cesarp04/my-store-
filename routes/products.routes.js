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
  res.status(201).json({
    message: 'Product created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Product Updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Product Deleted',
    id,
  });
});

module.exports = router;
