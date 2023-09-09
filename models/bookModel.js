const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishDate: Date,
  price: Number,
  available: Boolean,
});

const Book = mongoose.model('Book', bookSchema);

// Create a new book
function createBook(bookData) {
  return Book.create(bookData);
}

// Get a book by ID
function getBookById(bookId) {
  return Book.findById(bookId);
}

// Get all books
function getAllBooks() {
  return Book.find();
}

// Update a book by ID
function updateBookById(bookId, newData) {
  return Book.findByIdAndUpdate(bookId, newData, { new: true });
}

// Delete a book by ID
function deleteBookById(bookId) {
  return Book.findByIdAndRemove(bookId);
}

module.exports = {
  createBook,
  getBookById,
  getAllBooks,
  updateBookById,
  deleteBookById,
};
