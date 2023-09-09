const {
  createCart,
  getCartByUserId,
  addToCart,
  removeFromCart,
} = require('./cartModel');

// Controller methods

async function createCartController(req, res) {
  const { userId } = req.body;
  try {
    const cart = await createCart(userId);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getCartController(req, res) {
  const { userId } = req.params;
  try {
    const cart = await getCartByUserId(userId);
    if (cart) {
      res.json(cart.books);
    } else {
      res.status(404).json({ error: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function addToCartController(req, res) {
  const { userId, bookId } = req.body;
  try {
    const updatedCart = await addToCart(userId, bookId);
    if (updatedCart) {
      res.status(200).json({ message: 'Book added to cart successfully' });
    } else {
      res.status(404).json({ error: 'Book not found or not available' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function removeFromCartController(req, res) {
  const { userId, bookId } = req.body;
  try {
    const updatedCart = await removeFromCart(userId, bookId);
    if (updatedCart) {
      res.status(200).json({ message: 'Book removed from cart successfully' });
    } else {
      res.status(404).json({ error: 'Book not found in the cart' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createCartController,
  getCartController,
  addToCartController,
  removeFromCartController,
};
