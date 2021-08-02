const _ = require('lodash');

const Product = require('../models/Product')



const productController ={
    product(req, res) {
        Product.findById(req.params.productId, (err, foundProduct) => {
            if (!err) {
                res.render("product", { product: foundProduct })
            } else {
                console.log(err)
            }
        });
    },
    search(req, res) {
        const search = _.capitalize(req.body.name)
        Product.find({ name: search }, (err, foundProduct) => {
            if (!err) {
                foundProduct.forEach((product) => {
                    res.render("product", { product: product })
                })
            } else {
                res.send("Product not found")
            }
        });
    },
    add_get(req, res) {
        res.render('add')
    },
    add_post(req, res) {
        const productName = _.capitalize(req.body.name)
        const product = new Product({
            name: productName,
            price: req.body.price,
            stock: req.body.stock,
            image: req.body.image,
            desc: req.body.desc
        });
        product.save((err) => {
            if (!err) {
                res.redirect('/dashboard/products')
            } else {
                res.send(err)
            }
        })
    },
    update(req, res) {
        const update = req.body;
        console.log(update, req.body.id)
        Product.updateOne({ _id: req.body.id }, { $set: update }, (err) => {
            if (!err) {
                res.redirect('/dashboard/products')
            } else {
                res.send(err)
            }
        })
    },
    delete(req,res){
        Product.findByIdAndRemove(req.body.id,(err)=>{
            if(!err){
                res.redirect('/dashboard/products')
            }else{
                res.send(err)
            }
        })
    }
}

module.exports = productController;