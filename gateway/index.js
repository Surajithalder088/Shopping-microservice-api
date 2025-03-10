const express=require("express")
const dotenv =require('dotenv')

 
const cors=require("cors")
const proxy=require('express-http-proxy')

const app=express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/customer',proxy('http://localhost:8001')) 
app.use('/shopping',proxy('http://localhost:8003')) 
app.use('/',proxy('http://localhost:8002')) 


app.listen(process.env.PORT,()=>{
    console.log("Gateway is listening to port 8000");
})