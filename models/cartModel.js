const mongoose = require('mongoose');
const Book = require('./bookModel')

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Book, // Reference to the Book model
  }],
});

const CartModel = mongoose.model('CartModel', cartSchema);

module.exports = CartModel;