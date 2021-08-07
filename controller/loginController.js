const passport = require("passport");
const User = require("../models/User")


const loginController ={
    logIn(req,res){
        res.render("login")
    },
    postlogin(req,res){
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        req.login(user,(err)=>{
            if(err){
                res.send(err)
            }else{
                passport.authenticate('local')(req,res,()=>{
                    if(req.user.isseller ){
                        res.redirect('/dashboard')
                    }else{
                        res.redirect('/')
                    }
                });
            }
        });
    }
}

module.exports = loginController