const { Order, OrderItem } = require('../models/Order')


const orderController = {
    home(req, res) {
        if(req.isAuthenticated()){
            Order.find((err, foundOrders) => {
                if (!err) {
                    res.render('orders', { orders: foundOrders,user:req.user })
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
        }else{
            res.redirect('/register/seller')
        }
    }
}

module.exports = orderController;


