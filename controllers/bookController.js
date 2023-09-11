const Book = require('../models/bookModel');
const { BookFactory } = require('../src/book');

// Controller methods

async function createBookController(req, res) {
  const { bookId, title, author, publishDate, genre, price, available } = req.body;
  try {

    const bookFactory = new BookFactory();
    const book = bookFactory.create({
      bookId: bookId,
      title: title,
      author: author,
      publishDate :  Date.parse(publishDate),
      genre: genre,
      price: price,
      available: available
    });

    const newBook = new Book(book);

    newBook.save()
    .then((newBook) => {
      console.log('Book saved to the database:', newBook);
    })
    .catch((error) => {
      console.error('Error saving user:', error);
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getBookController(req, res) {
  const { bookId } = req.body;
  try {
    const book = await Book.findOne({bookId: bookId});
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
  const { bookId, title, author, publishDate, genre, price, available} = req.body;
  try {
    const book = await Book.findOneAndUpdate({
      bookId: bookId
    },
    {
      bookId: bookId,
      title: title,
      author: author,
      publishDate: Date.parse(publishDate),
      genre: genre,
      price: price,
      available: available
    }
    );

    res.status(201).json(book);

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
  const { bookId } = req.body;
  try {
    const isDeleted = await Book.findOneAndDelete({bookId: bookId});
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
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getBookAvailability(req, res) {
  const { bookId } = req.body; // Assuming you pass the book ID as a parameter

  try {
    // Call a function (e.g., getBookById) to retrieve the book by ID from the database
    const book = await Book.findOne({bookId: bookId});

    if (book) {
      // Check if the 'available' data member is true
      if (book.available) {
        console.log("Book is available");
        res.json(book.available);
      } else {
        console.log("Book is unavailable");
        res.json(book.available);
      }
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function markUnavlController(req, res) {
  const {bookId} = req.body;
  try{
    const book = await Book.findOneAndUpdate({
      bookId: bookId
    },
    {
      available: false
    }
    );

    res.status(201).json(book);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({error: 'Internal Server Error'});
  }
}

module.exports = {
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
  getAllBooksController,
  getBookAvailability,
  markUnavlController,
};
