import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";


const BodyComponent = () => {

  //this is nothing but array destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
 
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
  fetchData() 

  return() =>{
    console.log("unmount the body")
  }
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
      <div className="filter"> 
      <div className="search">
      <input type="text" className="search-box" value={searchText} onChange={(event) =>{
     
        setSearchText(event.target.value);
      }} />
      <button onClick={ () =>{
        console.log(searchText,listOfRestaurants[0].info.name);
        const filteredrest = listOfRestaurants.filter(
          (res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setfilteredRestaurant(filteredrest);
        console.log("333",listOfRestaurants)

      }} >search</button>
      </div>
       <button className="filter-btn" 
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
  
      <div className="restro-container">
      { filteredRestaurant.map(restaurant => (

      <Link  key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}> <RestaurantCard resData={restaurant}/></Link> 
      ))}
      </div>
      </div>
    );
  }

  export default BodyComponent;