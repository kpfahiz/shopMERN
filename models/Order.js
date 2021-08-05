const mongoose = require('mongoose')



const orderItemSchema = {
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Order"
    },
    createdAt: Date,
    updatedAt: Date,
    quantity: Number
}

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

const orderSchema = {
    items :[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"OrderItem"
    }],
    createdAt: Date,
    updatedAt: Date
}

const Order = mongoose.model("Order", orderSchema)


const orderitem = new OrderItem({
    product: {
        "_id" : "61061b4d588124205422ff4b",
    },
    quantity: 3,
    createdAt: Date.now()
})

const order = new Order({
    items: [{
        "_id" : "61091696748c8334987e13b5",
    },
    {
        "_id":"610916ddd5538545f06b7913"
    },{
        "_id":"6109327f307c042148e94f96"
    }
    ],
    createdAt: Date.now()
})

//orderitem.save();
//order.save();
module.exports = {Order, OrderItem};

