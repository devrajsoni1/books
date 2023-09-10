const express = require('express');
const {
  createOrderController,
  getOrderStatusController
} = require('../controllers/orderController');

const router = express.Router();

router.post('/createOrder', createOrderController);
router.get('/getStatus/:id', getOrderStatusController);

module.exports = router;
