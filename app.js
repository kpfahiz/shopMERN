const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const _ = require('lodash')
const passport = require("passport")
const session = require('express-session');
require('dotenv').config()

const homeRouters = require('./routes/home')
const productRouters = require('./routes/product')
const dashboardRouters = require('./routes/dashboard')
const Product = require('./models/Product');
const orderRouters = require('./routes/order')
const loginRouters = require('./routes/login')
const logoutRouters = require('./routes/logout')
const registerRouters = require('./routes/register')



const app = express()

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))



app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
})
mongoose.connect("mongodb://localhost:27017/shopDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })



app.use('', homeRouters)
app.use('', productRouters)
app.use('/dashboard', dashboardRouters)
app.use('/order', orderRouters)
app.use('/login', loginRouters)
app.use('/register', registerRouters)
app.use('/logout',logoutRouters)


app.listen(3000, () => {
    console.log("Successfully connected to localhost:3000")
})

