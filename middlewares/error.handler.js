function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send('Something failed');
}

module.exports = {
  logErrors,
  errorHandler,
};
