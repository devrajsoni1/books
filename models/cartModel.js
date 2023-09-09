const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // Reference to the Book model
  }],
});

const Cart = mongoose.model('Cart', cartSchema);

// Create a new cart for a user
function createCart(userId) {
  return Cart.create({ userId });
}

// Get a user's cart by user ID
function getCartByUserId(userId) {
  return Cart.findOne({ userId }).populate('books');
}

// Add a book to a user's cart
function addToCart(userId, bookId) {
  return Cart.findOneAndUpdate(
    { userId },
    { $addToSet: { books: bookId } },
    { new: true }
  ).populate('books');
}

// Remove a book from a user's cart
function removeFromCart(userId, bookId) {
  return Cart.findOneAndUpdate(
    { userId },
    { $pull: { books: bookId } },
    { new: true }
  ).populate('books');
}

// Delete a user's cart by user ID
function deleteCartByUserId(userId) {
  return Cart.findOneAndRemove({ userId });
}

module.exports = {
  createCart,
  getCartByUserId,
  addToCart,
  removeFromCart,
  deleteCartByUserId,
};
