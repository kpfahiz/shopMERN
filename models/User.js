const mongoose = require('mongoose')


const addressSchema = new mongoose.Schema({
    addressType: String,
    houseName: String,
    street: String,
    district: String,
    postoffice: String,
    state: String,
    country: String,
    pincode: Number
})

const Address = mongoose.model("Address",addressSchema);
const userScehma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password: String,
    seller: Boolean,
    createdAt: Date,
    address: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    }],
    phoneNumber: Number,
    socialId: String
})

const User = mongoose.model("User",userScehma);