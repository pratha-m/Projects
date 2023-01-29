const express=require("express");
const app=express();
const cors=require("cors");
const errorMiddleware=require("./middleware/error");
const cookieParser=require("cookie-parser");

app.use(cors())
app.use(express.json());
app.use(cookieParser());

//Route Imports 
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

// Middlewares for error     
app.use(errorMiddleware); 

module.exports=app;