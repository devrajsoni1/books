const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // Reference to the Book model
  }],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;