const express=require("express")
const dotenv =require('dotenv')
const mongoose=require('mongoose')

 
const app=express();

// conecting database

async function connect(){
 await mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log(" product database connected"))
.catch((err)=>console.error(err))
}
dotenv.config();
app.use(express.json());
app.use('/',(req,res,next)=>{

    return res.status(200).json({'msg':'Hello from products !'})
}) 

app.listen(process.env.PORT,connect(),()=>{
    console.log(`Product is listening to port ${process.env.PORT}`);
})