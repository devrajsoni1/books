const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
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
  });

const Order = mongoose.model('Book', orderSchema);

module.exports = Order;