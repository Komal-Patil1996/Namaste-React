import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const BodyComponent = () => {

  //this is nothing but array destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
 
  const [searchText, setSearchText] = useState("");

  console.log("listOfRestaurants",listOfRestaurants)

  const PromotedRestaurantCard = promotedRestaurantCard();

  const {loggedInUser, setUserName} = useContext(UserContext);

  useEffect(() => {
  fetchData() 

  // return() =>{
  //   console.log("unmount the body")
  // }
 }, []);

  const fetchData = async () =>{
  const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
}
 
//conditional Rendering
return  (listOfRestaurants.length === 0)? <Shimmer/>: ( 
      <div className="body">
      <div className="flex"> 
      <div className="search m-4 p-4">
      <input className="border border-solid border-black" type="text"  value={searchText} onChange={(event) =>{
     
        setSearchText(event.target.value);
      }} />
      <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={ () =>{
        const filteredrest = listOfRestaurants.filter(
          (res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setfilteredRestaurant(filteredrest);
        console.log("333",listOfRestaurants)

      }} >search</button>
      </div>
      <div className="m-4 p-4 flex items-center">
      <button className="px-4 py-2 bg-gray-100" 
       onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4.4
          );
        setListOfRestaurants(filteredList);
       }
      } 
       >
        Top Rated Restaurant</button>
      </div>
      <div className="m-4 p-4 flex items-center">
        <label>User Name:</label>
        <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e) => {
        setUserName(e.target.value);
        }} ></input>
      </div> 

     
      </div>
  
      <div className="flex flex-wrap">
      { filteredRestaurant.map(restaurant => (

      <Link  key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}
      > {restaurant.info.avgRating === 4.4 ? (<PromotedRestaurantCard resData={restaurant}/>) :
      ( <RestaurantCard resData={restaurant}/>)}
      </Link> 
      ))}
      </div>
      </div>
    );
  }

  export default BodyComponent;