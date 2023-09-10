const {
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
  getAllBooks,
} = require('../models/bookModel');

// Controller methods

async function createBookController(req, res) {
  const { title, author, publishDate, price, available } = req.body;
  try {
    const newBook = await createBook({ title, author, publishDate, price, available });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getBookController(req, res) {
  const { id } = req.params;
  try {
    const book = await getBookById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateBookController(req, res) {
  const { id } = req.params;
  const { price } = req.body;
  try {
    const updatedBook = await updateBookById(id, { price });
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteBookController(req, res) {
  const { id } = req.params;
  try {
    const isDeleted = await deleteBookById(id);
    if (isDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAllBooksController(req, res) {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getBookAvailability(req, res) {
  const { id } = req.params; // Assuming you pass the book ID as a parameter

  try {
    // Call a function (e.g., getBookById) to retrieve the book by ID from the database
    const book = await getBookById(id);

    if (book) {
      // Check if the 'available' data member is true
      if (book.available) {
        res.json({ message: 'Book is available' });
      } else {
        res.json({ message: 'Book is not available' });
      }
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
  getAllBooksController,
  getBookAvailability
};
