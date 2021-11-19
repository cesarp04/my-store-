const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.getProducts();
  res.json(products);
});

router.get('/filter', async (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.getProductById(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.createProduct(body);
  res.status(201).json({
    message: 'Product created',
    data: newProduct,
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedProduct = await service.updateProduct(id, body);
    res.json({
      message: 'Product Updated',
      data: updatedProduct,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await service.deleteProduct(id);
  res.json(deletedProduct);
});

module.exports = router;
