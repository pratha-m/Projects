const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const ownerSchema=new mongoose.Schema({
    ownername:{
        type:String,
        required:true
    },
    owneremail:{
        type:String,
        required:true
    },
    ownerpassword:{
        type:String,
        required:true
    },
    ownerTokens:[{
        innerToken:{
            type:String,
            required:true
        }
    }] 
})
ownerSchema.pre("save",async function(next){
    if(this.isModified("ownerpassword")){
        this.ownerpassword=await bcrypt.hash(this.ownerpassword, 10);
    }
    next();
})
ownerSchema.methods.generateOwnerAuthToken=async function(){
    try{
       const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY,{expiresIn:"365d"})
       this.ownerTokens=this.ownerTokens.concat({innerToken:token});
       await this.save();
       return token;
    }
    catch(error){
       console.log(error);
    }
}
const owner=new mongoose.model("owner",ownerSchema);
module.exports=owner;