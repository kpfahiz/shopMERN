const Product = require('../models/Product');

const homeController = {
    Home(req, res)  {
        Product.find({}, (err, foundProducts) => {
            if (!err) {
                res.render('home', { products: foundProducts })
            } else {
                res.send(err)
            }
        });
    }
}

module.exports = homeController;