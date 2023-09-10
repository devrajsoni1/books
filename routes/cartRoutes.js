const express = require('express');
const {
  createCartController,
  getCartController,
  updateCartController,
  addToCartController,
  removeFromCartController,
} = require('../controllers/cartController');

const router = express.Router();

router.post('/carts', createCartController);
router.get('/carts/:id', getCartController);
router.put('/carts/:id', updateCartController);
router.put('/carts/:id', addToCartController);
router.delete('/carts/:id', removeFromCartController);

module.exports = router;
