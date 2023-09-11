OrderModel = require('../models/orderModel');
const CartModel = require('../models/cartModel');
const {Cart} = require('../src/cart');
const { Order } = require('../src/order');
CartModel = require('../models/cartModel');

async function createOrderController(req, res) {
    const {userId, orderId, books, status} = req.body;
    try {
        const cart = await CartModel.findOne({userId: userId});
        
        const books = cart.books;
        const totalValue = books.reduce((acc, book) => acc + book.price, 0);

        // const temp = { body: {userId} };
        // const response = await getCartController(temp);

        //userId, orderId, books, status, totalValue
        const order = new Order({
          userId: userId, 
          orderId: orderId, 
          books: cart.books, 
          status: status, 
          totalValue: totalValue
        });

        const newOrder = new Order(order);

        await newOrder.save()
        .then((newOrder) => {
            console.log('Order saved to the database:', newOrder);
          })
          .catch((error) => {
            console.error('Error saving order:', error);
          });
    
        const updatedCart = await Cart.updateOne(
          {userId: userId},
          {
            $set: {
              books: []
            }
          }
        );
        if(updatedCart){
          res.status(201).json("Order placed and cart emptied");
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }

}

async function getOrderStatusController(req, res) {
    const {userId} = req.body
    try{
        const order = Order.findOne({userId: userId});
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