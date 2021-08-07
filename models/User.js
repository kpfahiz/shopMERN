const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('mongoose')
const passport = require("passport")



const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    password: String,
    isseller: Boolean,
    createdAt: Date,
    address: [{
        addressType: String,
        houseName: String,
        street: String,
        district: String,
        postoffice: String,
        state: String,
        country: String,
        pincode: Number
    }],
    phoneNumber: Number,
    socialId: String
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);

passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
  
passport.deserializeUser(User.deserializeUser());

module.exports= User