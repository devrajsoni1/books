const express = require('express');
const {
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
  getAllBooksController,
  getBookAvailability,
  markUnavlController
} = require('../controllers/bookController.js');

const router = express.Router();

// Define your routes here
router.post('/createBook', createBookController);
router.get('/getBook/:id', getBookController);
router.put('/updateBook/:id', updateBookController);
router.delete('/deleteBook/:id', deleteBookController);
router.get('/getAllBooks', getAllBooksController);
router.get('/getBookAvl', getBookAvailability);
router.patch('/markUnavl', markUnavlController);

module.exports = router;
