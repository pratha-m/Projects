import "./myApp.css"
import Navbar from "./components/Navbar";
import Leftsidebar from "./components/Leftsidebar";
import Rightsidebar from "./components/Rightsidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>  
          <Navbar/> 
          {/* changing content starts  */}
          <div className="sideBars">
             <Leftsidebar/>
             <Rightsidebar/>
          </div>
          {/* changing content ends  */}
          <Footer/>
    </>      
  );
}

export default App;
