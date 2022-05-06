var express=require('express');
var path=require('path');
var adminRoutes=require('./routes/admin');
var shopRoutes=require('./routes/shop');
//create express application
var app=express();
app.set('view engine','pug');
app.set('views','views');
//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes.router);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).render('404');
})
app.listen(3000);