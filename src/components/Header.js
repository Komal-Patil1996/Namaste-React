import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact,setbtnNameReact] = useState("Login");
 
  const onlineStatus = useOnlineStatus();

  const user = useContext(UserContext);


// subscribing to the store using a Selector
  const cartItem = useSelector((store) => store.cart.item);

  console.log("cartItem", cartItem)

    return (
     <div className="flex justify-between shadow-lg bg-pink-50 sm:bg-yellow-100 lg:bg-green-100">
       <div className="logo-container">
         <img  className="w-56" src={LOGO_URL}/>
       </div>
       <div className="flex items-center">
       <ul className="flex p-4 m-4">

        <li className="px-4">{onlineStatus ? "💚": "🟥" }</li>
         <li className="px-4">
          <Link to="/">Home</Link></li>
         <li className="px-4">
          <Link to="/about"> About Us</Link></li>
         <li className="px-4">
         <Link to="/contact">Contact Us</Link> </li>
         <li className="px-4"><Link to="/grocery">Grocery</Link></li>
         <li className="px-4 text-lg font-bold"><Link to="/cart">Cart ({cartItem.length} items)</Link></li>

         <li>
          <button onClick={ () => {
          btnNameReact === "Login"?setbtnNameReact("Logout"): setbtnNameReact("Login") //this will render the header component once again so even if the btnNameReact is const variable the variable will be intialized again with new updated value in render process

          }

          } > {btnNameReact}</button></li>
               
               
        <li className="px-4 font-bold">{user.loggedInUser}</li>

       </ul>
       </div>
   
     </div>
    );
   }

export default Header;   