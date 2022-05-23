const AppError = require('./../utils/appError');

const sendErrorDev = (err, req, res) => {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0]; 
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const value = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid inputs. ${value.join('. ')}`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let error = {
    ...err,
    message: err.message,
    name: err.name,
  };

  if (error.code === 11000) error = handleDuplicateFieldsDB(error);
  if (error.name === 'ValidationError') error = handleValidationErrorDB(error);

  sendErrorDev(error, req, res);
};
