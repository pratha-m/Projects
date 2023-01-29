const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// SIGN UP LOGIC
let signup_email=document.getElementById("signup_email");
let signup_pass=document.getElementById("signup_pass");
let signupBtn=document.getElementById("signupBtn");

signupBtn.addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST","http://localhost:3001/createaccount",true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
       email:signup_email.value,
       password:signup_pass.value
  }));
})

// SIGN IN LOGIC 
let signin_email=document.getElementById("signin_email");
let signin_password=document.getElementById("signin_password");
let LoginBtn=document.getElementById("LoginBtn");

LoginBtn.addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST","http://localhost:3001/login",true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
       email:signin_email.value,
       password:signin_password.value
  }));
  xhr.onload=()=>{
    if(JSON.parse(xhr.response).success=="true"){
      console.log(JSON.parse(xhr.response).data.email);
      if(localStorage.getItem("account")!=null){
        localStorage.setItem("account",JSON.parse(xhr.response).data.email);
      }
      else{
         localStorage.removeItem("account");
        localStorage.setItem("account",JSON.parse(xhr.response).data.email);
      }
      // window.location.replace("/");
      window.location.href="/index.html";
    }
  }
})