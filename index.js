const express = require('express');
const routerApi = require('./routes/index.routes');

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
