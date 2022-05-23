const http = require('http');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const mongoose = require('mongoose');
const app = require('./app.js');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

console.log(process.env.DB);
mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connected successfully'))
  .catch((err) => console.log('DB connection failed!...', err));

server.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
