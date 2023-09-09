const { Cart } = require('./cart');

const cartsDB = {}; // Simulated database to store user carts

function createCart(userId) {
  const newCart = new Cart(userId);
  cartsDB[userId] = newCart;
  return newCart;
}

function getCartByUserId(userId) {
  return cartsDB[userId];
}

function addToCart(userId, bookId) {
    const userCart = cartsDB[userId];
    const book = booksDB[bookId];
    if (!userCart || !book) return false;
    if (book.available) {
      userCart.addToCart(bookId);
      return true;
    }
    return false;
  }
  
  function removeFromCart(userId, bookId) {
    const userCart = cartsDB[userId];
    if (!userCart) return false;
    userCart.removeFromCart(bookId);
    return true;
  }
  

module.exports = {
  createCart,
  getCartByUserId,
  addToCart,
  removeFromCart
};
