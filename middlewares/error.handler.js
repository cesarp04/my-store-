function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send('Something failed');
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    res.status(err.output.statusCode).send(err.output.payload);
  } else {
    next(err);
  }
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
};
