const express = require('express');
const {
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
  getAllBooksController,
  getBookAvailability
} = require('../controllers/bookController.js');

const router = express.Router();

// Define your routes here
router.post('/books', createBookController);
router.get('/books/:id', getBookController);
router.put('/books/:id', updateBookController);
router.delete('/books/:id', deleteBookController);
router.get('/books', getAllBooksController);
router.get('/books', getBookAvailability);

module.exports = router;
