const _ = require('lodash');

const { Product } = require('../models/Product')
const User = require('../models/User')



const productController = {
    product(req, res) {
        console.log(req.params.productId)
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
        if (req.isAuthenticated()) {
            res.render('add')
        } else {
            res.redirect('/register/seller')
        }

    },
    add_post(req, res) {
        if (req.isAuthenticated()) {
            console.log(req.user)
            const productName = _.capitalize(req.body.name)
            const product = new Product({
                name: productName,
                price: req.body.price,
                stock: req.body.stock,
                image: req.body.image,
                desc: req.body.desc,
                seller:req.user._id
            });
            product.save((err) => {
                if (!err) {
                    res.redirect('/dashboard/products')
                } else {
                    res.send(err)
                }
            })
        } else {
            res.redirect('/register/seller')
        }
        console.log(req)
    },
    update(req, res) {
        const update = req.body;
        Product.updateOne({ _id: req.body.id }, { $set: update }, (err) => {
            if (!err) {
                res.redirect('/dashboard/products')
            } else {
                res.send(err)
            }
        })
    },
    delete(req, res) {
        Product.findByIdAndRemove(req.body.id, (err) => {
            if (!err) {
                res.redirect('/dashboard/products')
            } else {
                res.send(err)
            }
        })
    }
}

module.exports = productController;