const express = require('express');
const {
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
  getAllBooksController,
} = require('./bookController');

const router = express.Router();

// Define your routes here
router.post('/books', createBookController);
router.get('/books/:id', getBookController);
router.put('/books/:id', updateBookController);
router.delete('/books/:id', deleteBookController);
router.get('/books', getAllBooksController);

module.exports = router;
