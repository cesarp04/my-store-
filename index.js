const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
      },
    ],
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
