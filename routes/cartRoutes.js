const express = require('express');
const {
  createCartController,
  getCartController,
  updateCartController,
  addToCartController,
  removeFromCartController,
} = require('../controllers/cartController');

const router = express.Router();

router.post('/createCart', createCartController);
router.get('/getCart/:id', getCartController);
router.put('/updateCart/:id', updateCartController);
router.put('/addToCart/:id', addToCartController);
router.delete('/remFromCart/:id', removeFromCartController);

module.exports = router;
