const { createCart, getCartByUserId } = require('./cartModel');

// Controller methods

function createCartController(req, res) {
  const { userId } = req.body;
  const cart = createCart(userId);
  res.status(201).json(cart);
}

function getCartController(req, res) {
  const { userId } = req.params;
  const cart = getCartByUserId(userId);
  if (cart) {
    res.json(cart.getCart());
  } else {
    res.status(404).json({ error: 'Cart not found' });
  }
}

// Function to add a book to the cart
function addToCartController(req, res) {
    const { userId, bookId } = req.body;
    const isAdded = addToCart(userId, bookId);
    if (isAdded) {
      res.status(200).json({ message: 'Book added to cart successfully' });
    } else {
      res.status(404).json({ error: 'Book not found or not available' });
    }
  }
  
  // Function to remove a book from the cart
  function removeFromCartController(req, res) {
    const { userId, bookId } = req.body;
    const isRemoved = removeFromCart(userId, bookId);
    if (isRemoved) {
      res.status(200).json({ message: 'Book removed from cart successfully' });
    } else {
      res.status(404).json({ error: 'Book not found in the cart' });
    }
  }
  

module.exports = {
  createCartController,
  getCartController,
  addToCartController,
  removeFromCartController
};
