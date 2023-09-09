const { createBook, getBook, updateBook, deleteBook, getAllBooks } = require('./bookModel');

// Controller methods

function createBookController(req, res) {
  const { title, author, publishDate, price } = req.body;
  const newBook = createBook({ title, author, publishDate, price });
  res.status(201).json(newBook);
}

function getBookController(req, res) {
  const { id } = req.params;
  const book = getBook(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
}

function updateBookController(req, res) {
  const { id } = req.params;
  const { price } = req.body;
  const updatedBook = updateBook(id, { price });
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
}

function deleteBookController(req, res) {
  const { id } = req.params;
  const isDeleted = deleteBook(id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
}

function getAllBooksController(req, res) {
  const books = getAllBooks();
  res.json(books);
}

module.exports = {
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
  getAllBooksController,
};
