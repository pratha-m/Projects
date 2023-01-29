const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
   email:{
     type:String
   },
   password:{
     type:String
   },
   phone_number:{
    type:Number
   }
})
const user=new mongoose.model("userschema",userSchema);
module.exports=user;