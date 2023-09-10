const CartModel = require('../models/cartModel');
const {Cart} = require('../src/cart');

// Controller methods

async function createCartController(req, res) {
  const { userId } = req.body;
  try {

    let books = [];
    const cart = new Cart(userId, books);

    newCart = new CartModel(cart);

    newCart.save()
    .then((newCart) => {
      console.log('Cart saved to the database:', newCart);
    })
    .catch((error) => {
      console.error('Error saving cart:', error);
    });

    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getCartController(req, res) {
  const { userId } = req.body;
  try {
    const cart = await CartModel.findById(userId);

    if (cart) {
      let books = cart.books;
      // for(){
      //   if(!getBookAvailability(books[i].bookId)){
      //     await removeFromCart()
      //   }
      // }
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

    const cart = await CartModel.findById({userId});
    if(!cart){
      return res.status(404).json("Cart not found for the user");
    }

    //TODO: complete this
    const updatedcart = await CartModel.findb

    if (updatedCart) {
      res.status(200).json({ message: 'Book removed from cart successfully' });
    } else {
      res.status(404).json({ error: 'Book not found in the cart' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateCartController(req, res) {
  const { userId, action, bookId } = req.body;

  try {
    let message = '';

    if (action === 'add') {
      const updatedCart = await addToCart(userId, bookId);
      if (updatedCart) {
        message = 'Book added to cart successfully';
      } else {
        return res.status(404).json({ error: 'Book not found or not available' });
      }
    } else if (action === 'remove') {
      const updatedCart = await removeFromCart(userId, bookId);
      if (updatedCart) {
        message = 'Book removed from cart successfully';
      } else {
        return res.status(404).json({ error: 'Book not found in the cart' });
      }
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function emptyCartController(req, res) {
  const {userId} = req.body;
  try{
    const cart = await CartModel.findById({userId});
    if(!cart){
      return res.status(404).json("Cart doesn't exist for the user")
    }

    let books = [];
    const updatedCart = new Cart();
    updatedCart({userId, books});
    newCart = new Cart(updatedCart);

    newCart.save()
    .then((newCart) => {
      console.log('Cart cleared for the user:', newCart.userId);
    })
    .catch((error) => {
      console.error('Error clearing cart:', error);
    });
  }
  catch(error){
    console.log(error.message);
    res.status(404).json("Cart not found");
  }
}

module.exports = {
  createCartController,
  getCartController,
  addToCartController,
  removeFromCartController,
  updateCartController,
  emptyCartController
};
