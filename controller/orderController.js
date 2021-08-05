const { Order, OrderItem } = require('../models/Order')


const orderController = {
    home(req, res) {
        Order.find((err, foundOrders) => {
            if (!err) {
                res.render('orders', { orders: foundOrders })
            } else {
                res.send(err)
            }
        }).populate({
            path: 'items',
            populate: {
                path: 'product',
                model: 'Product'
            }
        })
    }
}

module.exports = orderController;


