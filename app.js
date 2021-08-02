const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const _ = require('lodash');

require('dotenv').config()

const homeRouters = require('./routes/home')
const productRouters = require('./routes/product')
const dashboardRouters = require('./routes/dashboard')
const Product = require('./models/Product')



const app = express()



mongoose.connect("mongodb://localhost:27017/shopDB", { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')



app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

    


app.use('',homeRouters)
app.use('',productRouters)
app.use('/dashboard',dashboardRouters)


app.listen(3000, () => {
    console.log("Successfully connected to localhost:3000")
})

