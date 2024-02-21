import { useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setbtnNameReact] = useState("Login");
 
  const onlineStatus = useOnlineStatus();

    return (
     <div className="header">
       <div className="logo-container">
         <img  className="logo" src={LOGO_URL}/>
       </div>
       <div className="nav-items">
       <ul>

        <li>{onlineStatus ? "💚": "🟥" }</li>
         <li>
          <Link to="/">Home</Link></li>
         <li>
          <Link to="/about"> About Us</Link></li>
         <li>
         <Link to="/contact">Contact Us</Link> </li>
         <li><Link to="/grocery">Grocery</Link></li>
         <li>Cart</li>
         <li>
          <button onClick={ () => {
          btnNameReact === "Login"?setbtnNameReact("Logout"): setbtnNameReact("Login") //this will render the header component once again so even if the btnNameReact is const variable the variable will be intialized again with new updated value in render process

          }

          } > {btnNameReact}</button></li>
       </ul>
       </div>
   
     </div>
    );
   }

export default Header;   