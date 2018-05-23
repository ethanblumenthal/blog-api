// REQUIRED MODULES
const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const app = express();

// MIDDLEWARE
app.use(morgan('common'));
app.use('/blog-posts', router);

// LISTENING PORTS
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});