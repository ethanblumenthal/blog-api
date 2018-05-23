// REQUIRED MODULES
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {BlogPosts} = require('./models');

// STARTER DATA
BlogPosts.create('Marketing', 'blah', 'Ethan', 2018);
BlogPosts.create('Business', 'blah blah blah', 'Aaron', 2017);
BlogPosts.create('Sales', 'blah blah', 'Alex', 2018);

// GET REQUEST
router.get('/', (req, res) => {
  res.json(BlogPosts.get());
});

// POST REQUEST
router.post('/', jsonParser, (req, res) => {
  
});

// PUT REQUEST
router.put('/:id', jsonParser, (req, res) => {
  
});

// DELETE REQUEST
router.delete('/:id', (req, res) => {
  BlogPosts.delete(req.params.id);
  console.log(`Deleted blog post with id \`${req.params.ID}\``);
  res.status(204).end();
});

module.exports = router;