const express= require('express');
const app=express();
const mongoose=require('mongoose')

const port=process.env.PORT || 3001

const userRoute=require('./routes/user')

const path=require('path');
// const cookieParser = require('cookie-parser');
// const { checkForAuthenticationCookie } = require('./middleware/authmid');

app.use('/static',express.static('static'));
app.use(express.urlencoded({ extended : true }));
// app.use(cookieParser());
// app.use(checkForAuthenticationCookie("token"));



mongoose.connect('mongodb://localhost:27017/myblogzee').then(()=>{
    console.log('mongodb connected')
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    // res.render('home',{ name : "zeenath"})
    res.render('home',{
        user: req.user,
    })
})

app.use('/user',userRoute);


app.listen(port,()=>{
    console.log('server running ')
})
