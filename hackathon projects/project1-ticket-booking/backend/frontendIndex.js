let from=document.getElementById("from");
let to=document.getElementById("to");
let start_date=document.getElementById("start_date");
let return_date=document.getElementById("return_date");

// "http://localhost:3001/getalltickets"
async function fetchApiFrom(url){
    try{
        let res=await fetch(url);
        let data=await res.text();
        let fetchJsonData=JSON.parse(data).data[0];
        let length=fetchJsonData.length;
        // console.log(fetchJsonData.sort());
        // console.log(length);
        for(let i=0;i<length;i++){
            let fromOption=document.createElement("option");
            fromOption.innerText=fetchJsonData[i].flight_from; 
            for(let j=0;j<length;j++){
                from.appendChild(fromOption);
            } 
        }
    }
    catch(error){
        console.log(error);
    }
}
fetchApiFrom("http://localhost:3001/getalltickets");

// "http://localhost:3001/getalltickets"
async function fetchApiTo(url){
    try{
        let res=await fetch(url);
        let data=await res.text();
        let fetchJsonData=JSON.parse(data).data[0];
        let length=fetchJsonData.length;
        // console.log(fetchJsonData);
        // console.log(length);
        for(let i=0;i<length;i++){
            let toOption=document.createElement("option");
            toOption.innerText=fetchJsonData[i].flight_to; 
            for(let j=0;j<length;j++){
                to.appendChild(toOption);
            } 
        }
    }
    catch(error){
        console.log(error);
    }
}
fetchApiTo("http://localhost:3001/getalltickets");


// "http://localhost:3001/getalltickets"
async function fetchApiStartDate(url){
    try{
        let res=await fetch(url);
        let data=await res.text();
        let fetchJsonData=JSON.parse(data).data[0];
        let length=fetchJsonData.length;
        // console.log(fetchJsonData);
        // console.log(length);
        for(let i=0;i<length;i++){
            let flight_start_dateOption=document.createElement("option");
            flight_start_dateOption.innerText=fetchJsonData[i].flight_start_date; 
            for(let j=0;j<length;j++){
                start_date.appendChild(flight_start_dateOption);
            } 
        }
    }
    catch(error){
        console.log(error);
    }
}
fetchApiStartDate("http://localhost:3001/getalltickets");


// "http://localhost:3001/getalltickets"
async function fetchApiReturnDate(url){
    try{
        let res=await fetch(url);
        let data=await res.text();
        let fetchJsonData=JSON.parse(data).data[0];
        let length=fetchJsonData.length;
        // console.log(fetchJsonData);
        // console.log(length);
        for(let i=0;i<length;i++){
            let flight_return_dateOption=document.createElement("option");
            // console.log(fetchJsonData[i].flight_return_date);
            flight_return_dateOption.innerText=fetchJsonData[i].flight_return_date; 
            for(let j=0;j<length;j++){
                return_date.appendChild(flight_return_dateOption);
            } 
        }
    }
    catch(error){
        console.log(error);
    }
}
fetchApiReturnDate("http://localhost:3001/getalltickets");

const order_ticket_btn=document.getElementById("order_ticket_btn");

order_ticket_btn.addEventListener("click",function(){
    if(from.value!=''&&to.value!=''&&start_date.value!=''&&return_date.value!=''){
        console.log(from.value);
        console.log(to.value);
        console.log(start_date.value);
        console.log(return_date.value);
        var xhr = new XMLHttpRequest();
        xhr.open("POST","http://localhost:3001/gettickets",true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            flight_from:from.value,
            flight_to:to.value,
            flight_start_date:start_date.value,
            flight_return_date:return_date.value
        }));
        xhr.onload=()=>{
          if(JSON.parse(xhr.response).success=="true"){
            console.log(JSON.parse(xhr.response));
            window.location.href="/ticketpage.html";
            localStorage.setItem("flights_data",JSON.stringify(JSON.parse(xhr.response)))
          }
        }
    }
})