const express = require('express');
const app = express();
const userRouter = require('./routes/user.route');
const errorHandler = require('./controller/error.controller');

app.use(express.json()); //body-parser


app.use('/api/v1/user', userRouter);

app.use(errorHandler);

// default landing endpoint
app.use('/', (req, res, next) => {
  res.status(200).json({
    msg: 'welcome to reacthq application',
  });
});

module.exports = app;
