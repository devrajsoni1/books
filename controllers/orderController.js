OrderModel = require('../models/orderModel');
const {Cart} = require('../src/cart');
CartModel = require('../models/cartModel');

const {getCartController, 
emptyCartController} = require('./cartController')

async function createOrderController(req, res) {
    const {userId, orderId, books, status} = req.body;
    try {

        let totalValue = 0;

        getCartController(req, res);

        const order = new OrderModel(userId, orderId, books, status, totalValue);

        newOrder = new Order(order);

        await newOrder.save()
        .then((newOrder) => {
            console.log('Order saved to the database:', newOrder);
          })
          .catch((error) => {
            console.error('Error saving order:', error);
          });
    
        emptyCartController(req, res);
        
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }

}

async function getOrderStatusController(req, res) {
    const {userId} = req.body
    try{
        const order = Order.findById({userId});
        res.status(200).json(order.status);
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports =  {
    getOrderStatusController,
    createOrderController
};