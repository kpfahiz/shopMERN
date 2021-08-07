const passport = require("passport")
const User = require("../models/User")
const express = require('express')


const registerController = {
    register(req, res) {
        res.render("register")
    },
    add_user(req, res) {
        const username = req.body.username
        User.register({username:username,isseller:false},req.body.password,(err,user)=>{
            if(!err){
                passport.authenticate('local')(req,res,()=>{
                    res.redirect('register/form/'+user._id)
                })            
            }else{
                console.log(err)
                res.redirect('/register');
            }
        })
    },
    form(req, res) {
        if(req.isAuthenticated()){
            res.render('form', { id: req.params.userId })
        }else{
            res.redirect('/register')
        }
    },
    add_details(req, res) {
        User.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.username,
                phoneNumber: req.body.phone,
                address: [{
                    addressType: "biiling address",
                    houseName: req.body.houseName,
                    street: req.body.street,
                    district: req.body.district,
                    postoffice: req.body.postoffice,
                    state: req.body.state,
                    country: req.body.country,
                    pincode: req.body.pincode
                }]
            }
        }, (err, user) => {
            if(!err){
                if(req.user.isseller){
                    res.redirect('/dashboard')
                }else{
                    res.redirect('/')
                }
            }
        })
    },
    seller(req,res){
        res.render("sellerregister")
    },
    addseller(req,res){
        const username = req.body.username
        User.register({username:username,isseller:true},req.body.password,(err,user)=>{
            if(!err){
                passport.authenticate('local')(req,res,()=>{
                    res.redirect('form/'+user._id)
                })            
            }else{
                console.log(err)
                res.redirect('/seller');
            }
        })
    }

}

module.exports = registerController


