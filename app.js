const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const fs = require('fs')
const _ = require('lodash');


const app = express()
imgPath = 'D:/Practicing/MERN/7/Shop/images/Screenshot (1).png'
mongoose.connect("mongodb://localhost:27017/shopDB", { useNewUrlParser: true, useUnifiedTopology: true })

const productScema = {
    name: {
        type: String,
        required:[true , 'Please enter Name']
    },
    price: {
        type:mongoose.Decimal128,
        required:[ true, "Please enter price" ]
    },
   image:{
        type:String,
        required:[ true, "Please enter Image URL" ]   
    },
   desc: {
        type:String,
        required:[ true, "Please enter Description" ]
    }
}

const Product = mongoose.model("Product", productScema);

const product = new Product({
    name: "Iphone",
    price: 1100.5,
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.route('/')
    .get((req, res) => {
        Product.find({},(err, foundProducts)=>{
            if(!err){
                res.render('home', {products:foundProducts})
            }else{
                res.send(err)
            }
        }) ;
    });
    
app.get('/product/:productId',(req,res)=>{
    Product.findById(req.params.productId,(err,foundProduct)=>{
        if(!err){
            res.render("product", {product:foundProduct})
        }else{
            console.log(err)
        }
    })
})
app.post('/search',(req,res)=>{
    const search = _.capitalize(req.body.name) 
    Product.find({name:search},(err,foundProduct)=>{
        if(!err){
            foundProduct.forEach((product)=>{
                res.render("product",{product:product}) 
            }) 
        }else{
            res.send("Product not found")
        }
    })
})

app.route('/add')
    .get((req, res) => {
        res.render('add')
    })
    .post((req,res)=>{
        const productName = _.capitalize(req.body.name)
        const product = new Product({
            name: productName,
            price: req.body.price,
            image: req.body.image,
            desc: req.body.desc
        });
        product.save((err)=>{
            if(!err){
                res.redirect('/')
            }else{
                res.send(err)
            }
        })
    });

app.route('/dashboard')
.get((req,res)=>{
    res.render('dashboard')
});
app.get('/dashboard/order',(req,res)=>{
    res.render('orders')
})
app.get('/dashboard/products',(req,res)=>{
    res.render('products')
})
app.get('/dashboard/customers',(req,res)=>{
    res.render('customers')
})
app.get('/dashboard/settings',(req,res)=>{
    res.render('settings')
})
app.listen(3000, () => {
    console.log("Successfully connected to localhost:3000")
})