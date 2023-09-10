Order = require('../models/orderModel');

async function createOrderController(req, res) {
    const {id, books, status} = req.body;
    try {

        newOrder = new Order({
            id: id,
            books: books,
            status: status
        });

        await newOrder.save()
        .then((newOrder) => {
            console.log('Order saved to the database:', newOrder);
          })
          .catch((error) => {
            console.error('Error saving order:', error);
          });
    
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }

}

async function getOrderStatusController(req, res) {
    const {id} = req.body
    try{
        const order = Order.findById({id});
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