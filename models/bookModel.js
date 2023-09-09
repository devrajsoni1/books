const { Book } = require('./book'); // Import the Book class from the previous code

const booksDB = {}; // Simulated database to store books

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function createBook(bookData) {
  const newBook = Book.create(bookData);
  booksDB[newBook.id] = newBook;
  return newBook;
}

function getBook(id) {
  return booksDB[id];
}

function updateBook(id, bookData) {
  const book = booksDB[id];
  if (!book) return null;
  book.update(bookData);
  return book;
}

function deleteBook(id) {
  const book = booksDB[id];
  if (!book) return false;
  delete booksDB[id];
  return true;
}

function getAllBooks() {
  return Object.values(booksDB);
}

module.exports = {
  createBook,
  getBook,
  updateBook,
  deleteBook,
  getAllBooks,
};
