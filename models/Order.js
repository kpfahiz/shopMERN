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
        "_id" : "610e6102085bba33cc750598",
    },
    quantity: 3,
    createdAt: Date.now()
})

const order = new Order({
    items: [{
        "_id" : "610e64ab1e73563b245bec26",
    },
    {
        "_id":"610e64c78498a2338c677763"
    },{
        "_id":"610e64e1d4dcea4a98aef4ff"
    },{
        "_id":"610e656686de944c508397e8"
    }
    ],
    createdAt: Date.now()
})

// orderitem.save();
 //order.save();
module.exports = {Order, OrderItem};

