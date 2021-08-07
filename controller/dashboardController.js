const Product = require('../models/Product').Product
const User = require('../models/User')

const dashboardController = {
    Home(req,res){
        if(req.isAuthenticated()){
            res.render('dashboard',{user:req.user})
        }else{
            res.redirect('/login')
        }
        // res.render('dashboard',)
    },
    Products(req, res) {
        if(req.isAuthenticated()){
            Product.find({seller:req.user._id}, (err, foundProducts) => {
                if (!err) {
                    res.render('products', { products: foundProducts,user:req.user })
                }
            });
        }else{
            res.redirect('/register/seller')
        }
       
    },
    Customers(req,res){
        if(req.isAuthenticated()){
            res.render('customers',{user:req.user})
        }else{
            res.redirect('/register/seller')
        }
    },
    Settings(req,res){
        if(req.isAuthenticated()){
            res.render('settings',{user:req.user})
        }else{
            res.redirect('/register/seller')
        }
    },
}


module.exports = dashboardController;