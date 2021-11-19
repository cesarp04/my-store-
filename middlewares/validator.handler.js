const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return function (req, res, next) {
    const result = schema.validate(req[property], { abortEarly: false });
    if (result.error) {
      next(
        boom.badRequest(result.error)
      );
    }
    next();
  };
}

module.exports = validatorHandler;
