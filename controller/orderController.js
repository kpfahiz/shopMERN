const Order = require('../models/Order')
const  Product  = require('../models/Product').Product

const orderController = {
    home(req,res){
        Order.find((err,foundOrders)=>{
            foundOrders.forEach((order)=>{
                
            })
        })
       
    }
}

// if(!err){
//     console.log(foundOrders)
//     res.render("orders", { orders : foundOrders,product:foundProducts })
// }else{
//     res.send(err)
// }

// Product.findById({foundOrders},(foundProducts)=>{
               
// })

// Product.findById(order.products,(foundProducts)=>{
//     console.log(foundProducts)
// })

module.exports = orderController;