const express = require('express');

const routerApi = require('./routes/index.routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

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
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
