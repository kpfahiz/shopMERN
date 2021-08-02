const Product = require('../models/Product').Product


const dashboardController = {
    Home(req,res){
        res.render('dashboard')
    },
    Products(req, res) {
        Product.find({}, (err, foundProducts) => {
            if (!err) {
                res.render('products', { products: foundProducts })
            }
        });
    },
    // Orders(req,res){
    //     res.render('orders')
    // },
    Customers(req,res){
        res.render('customers')
    },
    Settings(req,res){
        res.render('settings')
    },
}


module.exports = dashboardController;