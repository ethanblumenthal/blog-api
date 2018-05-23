// REQUIRED MODULES
const express = require('express');
const morgam = require('morgan');
const {BlogPosts} = require('./models');
const app = express();

// MIDDLEWARE
app.use(morgan('common'));
app.use('/blog', BlogPosts);

// LISTENING PORTS
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});