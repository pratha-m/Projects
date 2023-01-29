const cors=require("cors");
const express=require("express");
const app=express();    
const mongoose=require("mongoose");
const User=require("./models/User");
const Flight=require("./models/Flights");
const stripe=require("stripe")("sk_test_51MSVaySBLXs24zAq9J9zmk054zyiJvU7EzwTOTwuSiBCcV8ynpvqV0GdZdfQeyQgXE812oetGHHZSftII8pHirb800SNVde3A2");

app.set("trust proxy",1)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({credentials:true}))

mongoose.connect("mongodb://localhost:27017/Hackathonticket",{})
.then(()=>{console.log("database connection succeded")})
.catch((error)=>{console.log("database connection not succeded",error)})
mongoose.set('strictQuery', true);

app.get("publishable-key",(req,res)=>{
    res.json({publishablekey:"pk_test_51MSVaySBLXs24zAqvK5AuGksLLG66bBB7z41zN6IABkhuuvw48a0gfNllm7LLbKiHUspjTo2kEhOlrQ7oyCLVzyK00N9siYtyt"})
})
app.post("/secret",async(req,res)=>{
    // To create a requires_capture PaymentIntent, see our guide at: https://stripe.com/docs/payments/capture-later
    const paymentIntent = await stripe.paymentIntents.capture({
         amount:2000,
         currency:"usd",
         payment_method_type:['card']
    })
    res.json({clientSecret:paymentIntent.client_secret} )
})

app.post("/createaccount",async(request,res)=>{
    try{
                const password=request.body.password;
                const registerUser=new User({
                    email:request.body.email,
                    password:request.body.password
                })
                const registered=await registerUser.save();
                res.send({"success":"true"});
        }
        catch(error){
            res.status(500).send(error);
        }
    })

    app.post("/login",async(req,res)=>{
        try{
            const email=req.body.email;
            const pass=req.body.password;
            const findEmail=await User.findOne({email:email});
            if(findEmail!=null){
                  if(findEmail.password===pass){
                      res.json({"success":"true","data":{email}});
                  }
                  else{
                     res.json({"success":"false","error":"password Incorrect","data":""});
                  }
            }
            else{
                res.json({"success":"false","error":"No User Found","data":""});
            }
        }
        catch(error){
            res.status(500).json({"success":"false","error":"server error in login","data":""});
        }
    })

    app.post("/createticket",async(req,res)=>{
       try{
            const newFlight=new Flight({
                  flight_id:req.body.flight_id,
                  flight_name:req.body.flight_name,
                  flight_from:req.body.flight_from,
                  flight_to:req.body.flight_to,
                  flight_start_date:req.body.flight_start_date,
                  flight_return_date:req.body.flight_return_date,
                  flight_start_time:req.body.flight_start_time,
                  flight_reach_time:req.body.flight_reach_time,
                  price:req.body.price,
                  class:req.body.class,
                  user:req.body.user
            }); 
            console.log(newFlight)
            const flight=await newFlight.save();
            res.status(200).send({"success":"true","data":newFlight}); 
       }
       catch(error){
        res.status(500).json({"success":"false","error":"server error in creating ticket","data":""});
       }
    })
    
    app.post("/gettickets",async(req,res)=>{
         try{ 
             const findTickets=await Flight.find({
                flight_from:req.body.flight_from,
                flight_to:req.body.flight_to,
                flight_start_date:req.body.flight_start_date,
                flight_return_date:req.body.flight_return_date
             });
             console.log(findTickets);
             if(findTickets.length===0){
                 res.status(500).send({"success":"false","error":"not available"})
              }
             else{
                 res.status(200).send({"success":"true",data:findTickets});
             }
         }  
         catch(error){
            console.log(error);
             res.status(500).json({"success":"false","error":error,"data":""});
         }
    })
    
    app.get("/getalltickets",async(req,res)=>{
         try{
             const allFlights=await Flight.find();
             if(allFlights!=null){
                 res.status(200).send({"success":"true","data":[allFlights]});
             }
             else{
                res.status(500).send({"success":"false","error":"not available"})
             }
         }  
         catch(error){
             res.status(500).json({"success":"false","error":"sorry no tickets","data":""});
         }
    })


app.listen(3001,()=>{
    console.log(`listeing at port 3001`)
})