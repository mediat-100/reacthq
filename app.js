const express = require('express');
const app = express();
const userRouter = require('./routes/user.route');
const errorHandler = require('./controller/error.controller');

app.use(express.json()) //body-parser

app.use('/api/v1/user', userRouter);

app.use(errorHandler);

module.exports = app;