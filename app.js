const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")


const app = express()

app.get('/',(req,res)=>{
    res.send("Great Start");
})

app.listen(3000,()=>{
    console.log("Successfully connected to localhost:3000")
})