import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetOtpOnEmail from './components/getOtpOnEmail/GetOtpOnEmail';
import CreateAccount from './components/createAcoount/CreateAccount';
import EnterEmailToForgotPassword from './components/enterEmailToForgotPassword/EnterEmailToForgotPassword';
import LoginForm from './components/loginForm/LoginForm';
import WIshlist from './components/wishlist/WIshlist';
import FOoter from './components/footer/FOoter';
import ImageSlider from './components/imageSlider/ImageSlider';
import PRoducts from './components/products/PRoducts';
import YourOrders from './components/yourOrders/YourOrders';
import CartPage from './components/cartPage/CartPage';
import Navbar from './components/navbar/Navbar';
import EachProductPage from './components/eachProductPage/EachProductPage';
import CreateNewPassword from './components/createNewPassword/CreateNewPassword';
import LOgout from './components/logout/LOgout';
import RegistrationSucceded from './components/registrationSucceded/RegistrationSucceded';
import ErrorPage from './components/error/ErrorPage';
import LoginSucceded from "./components/loginSucceded/LoginSucceded"
import CreateOwner from "./components/admin/createowner/CreateOwner"
import { useEffect, useState } from 'react';
import Axios from 'axios';
// import Protected from './components/protected/Protected';
// import Home from "./components/admin/adminHome/Home"
function App() {
  const [users,setUsers]=useState([]);
  const [checkUser,setCheckUser]=useState();
  useEffect(() => {
    Axios.post("http://localhost:3001/getusers")
    .then((result)=>{setUsers(result.data)})
    .catch((err)=>{console.log("error in fetching users",err)});
  },[]) 
  if(users.length!=0){
    for(let i=0;i<users.length;i++){
      if(users[i].tokens.length==1){
        const databaseTokens=users[i].tokens[0].innerToken;
        const browserToken=localStorage.getItem("login_token_snacktime"); 
        if(browserToken!=null){
          if(databaseTokens==browserToken){
            let loginBtn=document.getElementById("loginBtn");
            loginBtn.innerText=(users[i].name).toUpperCase();
            loginBtn.setAttribute("style","color:black;font-weight:bold")
            loginBtn.classList.remove("loginBtnBackground");
            let moreOptionsSubmenu=document.getElementById("moreOptionsSubmenu");
            moreOptionsSubmenu.setAttribute("style","height:150px")
            let createAccountBtn=document.querySelector(".moreOptionsSubmenu .submenuSecondOption");
            createAccountBtn.setAttribute("style","display:none");
            console.log(moreOptionsSubmenu.childNodes);
            // users.length=0;
          }
        } 
      }
    }
  }
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<><ImageSlider/><PRoducts/></>}/>
            <Route exact path='/home' element={<><ImageSlider/><PRoducts/></>}/>
            <Route exact path='/createaccount' element={<CreateAccount/>}/>              
            <Route exact path='/login' element={<LoginForm/>}/>
            <Route exact path='/cartpage' element={<CartPage/>}/>
            <Route exact path='/yourorders' element={<YourOrders/>}/>
            <Route exact path='/enteremailtoforgotpassword' element={<EnterEmailToForgotPassword/>}/>
            <Route exact path='/getotponemail' element={<GetOtpOnEmail/>}/>
            <Route exact path='/wishlist' element={<WIshlist/>}/>
            <Route exact path='/eachproductpage' element={<EachProductPage/>}/>
            <Route exact path='/createnewpassword' element={<CreateNewPassword/>}/>
            <Route exact path='/logout' element={<LOgout/>}/>
            <Route exact path='/registrationsucceded' element={<RegistrationSucceded/>}/>
            <Route exact path='/loginsucceded' element={<LoginSucceded/>}/>
            {/* <Route exact path='/admin' element={<Protected Component={Home}/>}/> */}
            <Route exact path='/createowner' element={<CreateOwner/>}/>
            {/* <Route exact path='/createproduct' element={<RegistrationSucceded/>}/> */}
            {/* <Route exact path='/editproducts' element={<RegistrationSucceded/>}/> */}
            <Route exact path='*' element={<ErrorPage/>}/>
          </Routes>
          <FOoter/>
      </Router>
    </div>   
  );
}

export default App;
