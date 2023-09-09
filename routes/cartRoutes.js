const express = require('express');
const {
  createCartController,
  getCartController,
  updateCartController,
  deleteCartController,
  getAllCartsController,
} = require('./cartController');

const router = express.Router();

router.post('/carts', createCartController);
router.get('/carts/:id', getCartController);
router.put('/carts/:id', updateCartController);
router.delete('/carts/:id', deleteCartController);
router.get('/carts', getAllCartsController);

module.exports = router;
