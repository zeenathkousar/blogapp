const express= require('express');

const router=express.Router();

const User=require('../models/user');

router.get('/signin',(req,res)=>{
    return res.render('signin')
});

router.get('/signup',(req,res)=>{
    return res.render('signup')
});

router.post('/signin',async(req,res)=>{
    const { email,password }= req.body;
    //matching hashed password
    const isMatched=await User.matchPassword(email,password);

    console.log('User', isMatched);
    return res.redirect('/')

})

router.post('/signup', async(req,res)=>{
    const { fullName,email,password }=req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/')
});


module.exports=router;