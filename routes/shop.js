const express = require('express');
const path = require('path');
const pathHelper = require('../utils/pathHelper');
const adminData = require('./admin');
const router = express.Router();
router.get('/',(req,res,next)=>{
   /*  console.log('shop.js',adminData.products);
    res.sendFile(path.join(pathHelper.rootDir,'views','shop.html')); */
    const products=adminData.products;
    res.render('shop',{prods:products,docTitle:'My Shop'});
})
module.exports=router;