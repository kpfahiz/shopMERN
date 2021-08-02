const mongoose = require('mongoose')



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
    }
}


const orderSchema = {
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    createdAt: Date,
    updatedAt: Date,
    quantity: Number
}

const Order = mongoose.model("Order", orderSchema);


const order = new Order({
    products: [{
        "_id" : "61078699b391f30ce89a1528"
    },
    {
        "_id" : "61061b9b588124205422ff50"
    }],
    createdAt: Date.now(),
    quantity: 5

})

//order.save();
module.exports = Order;

