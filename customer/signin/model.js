const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    wishlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Wishlist'
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    buid:{
        type:[String]
    },
    cart:{
        type:[String]
    },
    payment:{
        type:[String]
    }
})

const User=mongoose.model("user",userschema)
 module.exports=User;