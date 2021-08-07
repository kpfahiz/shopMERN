const mongoose = require("mongoose")

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
    stock:{
        type:Number,
        required:[ true, "Please enter Stocks" ] 
    },
   desc: {
        type:String,
        required:[ true, "Please enter Description" ]
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
}

const Product = mongoose.model("Product", productScema);

module.exports= {Product, productScema}
