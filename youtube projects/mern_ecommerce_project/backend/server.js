const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");

// Handling uncaught exception 
process.on("uncaughtException",(err)=>{
    console.log(`Error :${err.message}`);
    console.log(`shutting down the server due to uncaught exception rejection`);
    process.exit(1);  
})

// config 
dotenv.config({path:"backend/config/config.env"})

// connecting to database 
connectDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


// console.log(abcd) //-->gives uncaught error


// unhendeled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error :${err.message}`);
    console.log("shutting down server due to unhandeled promise rejection");
    server.close(()=>{
        process.exit(1);
    })
})