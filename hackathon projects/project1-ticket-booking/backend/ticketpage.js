let ticketsContainer=document.getElementById("ava_fl");
let flights=JSON.parse(localStorage.getItem("flights_data")).data;
let flightsLength=flights.length;

console.log(flights)

for(let i=0;i<flightsLength;i++){
    let container=document.createElement("div");
    // container.setAttribute("class","container");
    container.classList.add("container") 

    let air_logo=document.createElement("div");
    // air_logo.setAttribute("class","air_logo");
    air_logo.classList.add("air_logo") 

    container.appendChild(air_logo);

    let img=document.createElement("img");
    img.setAttribute("src","airplane_logo.jpg");
    air_logo.appendChild(img);
    let fl_name=document.createElement("fl_name");
    // fl_name.setAttribute("class","fl_name");
    fl_name.classList.add("fl_name") 
    
    air_logo.appendChild(fl_name);
    let flp=document.createElement("p");
    // flp.setAttribute("class","flp")
    flp.classList.add("flp") 

    flp.innerText=`${flights[i].flight_name}`;
    fl_name.appendChild(flp);
    let flno=document.createElement("p");
    // flno.setAttribute("class","flno");
    flno.classList.add("flno") 

    flno.innerText=`${flights[i].flight_id}`;
    fl_name.appendChild(flno);

    let dep=document.createElement("dep");
    // dep.setAttribute("class",dep);
    dep.classList.add("dep") 

    container.appendChild(dep);

    let dep_from=document.createElement("p");
    // dep_from.setAttribute("class","dep_from");
    dep_from.classList.add("dep_from") 

    dep_from.innerText=flights[i].flight_from;
    dep.appendChild(dep_from);
    let time=document.createElement("p");
    // time.setAttribute("class","time");
    time.classList.add("time") 

    time.innerText=flights[i].flight_start_time;
    dep.appendChild(time);
    let date=document.createElement("p");
    // date.setAttribute("class","date");
    date.classList.add("date") 

    date.innerText=flights[i].flight_start_date;
    dep.appendChild(date);
    let dep_to=document.createElement("p");
    // dep_to.setAttribute("class","dep_to");
    dep_to.classList.add("dep_to") 
    dep_to.innerText=flights[i].flight_from;
    dep.appendChild(dep_to);
    let line_container=document.createElement("div");
    // line_container.setAttribute("class","line_container"); 
    line_container.classList.add("line_container") 


    container.appendChild(line_container);
    
    let line=document.createElement("div");
    // line.setAttribute("class","line");
    line.classList.add("line") 


    line_container.appendChild(line);

    let ret=document.createElement("div");
    // ret.setAttribute("class","ret");
    ret.classList.add("ret") 
    container.appendChild(ret);
    let ret_to=document.createElement("p");
    // ret_to.setAttribute("class","ret_to");
    ret_to.classList.add("ret_to") 

    ret_to.innerText=flights[i].flight_to;
    ret.appendChild(ret_to);
    let ret_time=document.createElement("p");
    // ret_time.setAttribute("class","ret_time");
    ret_time.classList.add("ret_time")
    


    ret_time.innerText=flights[i].flight_reach_time;
    ret.appendChild(ret_time);
    let ret_date=document.createElement("p");
    // ret_date.setAttribute("class","ret_date");
    ret_date.classList.add("ret_date")
    ret_date.innerText=flights[i].flight_return_date;
    ret.appendChild(ret_date);
    let ret_from=document.createElement("p");
    // ret_from.setAttribute("class","ret_from");
    ret_from.classList.add("ret_from")
    ret_from.innerText=flights[i].flight_to;
    ret.appendChild(ret_from);


    let line_hr=document.createElement("hr");
    line_hr.setAttribute("class","line_hr");
    line_hr.classList.add("line_hr")

    container.appendChild(line_hr);

    let t_price=document.createElement("div");
    // t_price.setAttribute("class","t_price");
    t_price.classList.add("t_price");
    

    container.appendChild(t_price);

    let rs=document.createElement("p");
    // rs.setAttribute("class","rs");
    rs.classList.add("rs")
    rs.innerText=`Rs. ${flights[i].price}`;
    t_price.appendChild(rs);

    let book_btn=document.createElement("div");
    // book_btn.setAttribute("class","book_btn");
    book_btn.classList.add("book_btn")

    container.appendChild(book_btn);

    let a=document.createElement("a");
    a.href="https://buy.stripe.com/test_4gw5nV258fp5eWYfZ0";
    book_btn.appendChild(a);
    let p=document.createElement("p");
    p.innerText="BOOK";
    a.appendChild(p);
    for(let j=0;j<flightsLength;j++){
        // container.appendChild(air_logo)
        // container.appendChild(dep);
        // container.appendChild(line_container);
        // line_container.appendChild(line);
        // container.appendChild(line_hr);
        // container.appendChild(t_price);
        // container.appendChild(book_btn);
        ticketsContainer.appendChild(container);
    }
}
