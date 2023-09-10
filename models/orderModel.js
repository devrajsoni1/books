const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    books: {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    totalValue: {
      type: Number,
      required: false,
    }
  });

const OrderModel = mongoose.model('OrderModel', orderSchema);

module.exports = OrderModel;