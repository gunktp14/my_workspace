//manage routing
const express = require('express')
const router = express.Router()
const path = require('path')
//routing for respone to user

router.get("/",(req,res)=>{
    res.status(200) 
    res.type('text/html')
    res.sendFile(path.join(__dirname,'../template/index.html'))
})

router.get("/product/:id",(req,res)=>{
    const productID = req.params.id    
    switch(productID){
        case "1":
            res.sendFile(path.join(__dirname,'../template/product1.html'))
        break;
        case "2":
            res.sendFile(path.join(__dirname,'../template/product2.html'))
        break;
        case "3":
            res.sendFile(path.join(__dirname,'../template/product3.html'))
        break;
        case "4":
            res.sendFile(path.join(__dirname,'../template/product4.html'))
        break;
        default:
            res.redirect("/")
        }
})

module.exports = router