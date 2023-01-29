const express=require("express");
const app=express();
const port=process.env.PORT||8800;
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const usersRoute=require("./routes/users")
const hotelsRoute=require("./routes/hotels")
const roomsRoute=require("./routes/rooms")
const connection=async()=>{
   try{
      await mongoose.connect("mongodb://localhost:27017/bookingapp")
      console.log("database connection successfull");
   }
   catch(error){
      console.log("databse connection failed",error);
   }
}
mongoose.connection.on("disconnected",()=>{
   console.log("mongodb disconnected")
})
mongoose.connection.on("connected",()=>{
   console.log("mongodb connected");
})

// middlewares 
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use((req,res,next)=>{
   console.log("I am a middleware")
})
app.listen(port,()=>{
    connection();
    console.log(`listening at port ${port}`);
})