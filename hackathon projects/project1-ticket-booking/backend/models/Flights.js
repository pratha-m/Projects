const mongoose=require("mongoose");
const flightSchema=new mongoose.Schema({
      flight_id:{
        type:String
      },
      flight_name:{
        type:String  
      },
      flight_from:{
        type:String
      },
      flight_to:{
        type:String
      },
      flight_start_date:{
        type:String
      },
      flight_return_date:{
        type:String
      },
      flight_start_time:{
        type:String      
      },
      flight_reach_time:{
        type:String      
      },
      price:{
        type:String
      },
      class:{
        type:String
      },
      user:{
        type:String
      }
})
const flightTicket=new mongoose.model("flightschema",flightSchema);
module.exports=flightTicket;