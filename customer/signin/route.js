const express=require("express")
const User=require('./model.js')
const userRouter=express.Router();

userRouter.get('/',async(req,res)=>{
    const users=await User.find()
    res.json({users})
})
userRouter.post('/register',async(req,res)=>{
    const {email,password,fullname}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser) return res.json({msg:" user already exist"})
    const newUser= new User({email,password,fullname});
     await newUser.save()
    res.json({newUser})
})



userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(!existingUser) return res.json({msg:" user not exist"})

    
    res.json({existingUser})
})

module.exports=userRouter;