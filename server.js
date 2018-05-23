// REQUIRED MODULES
const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const app = express();

// MIDDLEWARE
app.use(morgan('common'));
app.use('/blog-posts', router);

// RUN SERVER
function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err);
    });
  });
}