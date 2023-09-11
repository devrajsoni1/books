const CartModel = require('../models/cartModel');
const {Cart} = require('../src/cart');
const Book = require('../models/bookModel');

// Controller methods

async function createCartController(req, res) {
  const { userId } = req.body;
  try {

    let books = [];
    const cart = new Cart({
      userId: userId,
      books: books
    });

    const newCart = new CartModel(cart);

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
    const cart = await CartModel.findOne({userId: userId});

    if (cart) {
      return res.json(cart.books);
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

    const newBook = await Book.findOne({bookId: bookId});

    const updatedCart = await Cart.updateOne({userId: userId}, { $push : {books: newBook}});

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

    const bookToRemove = await Book.findOne({bookId});

    const cart = await Cart.findOne({userId: userId});

    if(!cart){
      return res.status(404).json("Cart not found for the user");
    }

    const updatedCart = await CartModel.updateOne({userId: userId}, {$pull : {books: bookToRemove}});

    if(updatedCart) {
      res.status(200).json({ message: 'Book removed from cart successfully' });
    } else {
      res.status(404).json({ error: 'Book not found in the cart' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function emptyCartController(req, res) {
  const {userId} = req.body;
  try{
    const cart = await CartModel.findOne({userId: userId});
    if(!cart){
      return res.status(404).json("Cart doesn't exist for the user")
    }

    const updatedCart = await Cart.updateOne(
      {userId: userId},
      {
        $set: {
          books: []
        }
      }
    );

    if(updatedCart) {
      res.status(200).json({ message: 'Cart emptied successfully' });
    } else {
      res.status(404).json({ error: 'Cart not found' });
    }
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
  emptyCartController
};
