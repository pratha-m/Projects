const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("hello,auth end point")
})
router.get("/register",(req,res)=>{
    res.send("hello,auth register end point")
})
module.exports=router;