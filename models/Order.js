const mongoose = require('mongoose')

const orderSchema = {
    productname: {
        type: String,
        required:[true,'Please enter Product Name']
    }
}