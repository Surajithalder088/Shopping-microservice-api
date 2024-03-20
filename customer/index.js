const express=require("express")
const dotenv =require('dotenv')
const mongoose=require('mongoose')
const userRouter =require('./signin/route.js')



 dotenv.config();
const app=express();

// conecting database
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log(" customer database connected"))
.catch((err)=>console.error(err))

app.use(express.json());

app.use('/signin',userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Customer is listening to port ${process.env.PORT}` );
})