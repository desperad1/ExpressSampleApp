const express=require('express');
const path=require('path');
const pathHelper=require('../utils/pathHelper')
const router=express.Router();
const products =[];
router.get('/add-product',(req,res,next)=>{
    /* res.sendFile(path.join(pathHelper.rootDir,'views','add-product.html')) */
    res.render('add-product');
});
router.post("/add-product",(req,res,next)=>{
    products.push({title:req.body.title});
    console.log(req.body);
});
exports.router=router;
exports.products=products;