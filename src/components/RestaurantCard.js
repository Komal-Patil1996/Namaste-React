// named export

import { CDN_URL } from "../utils/Constant";
  

const RestaurantCard = (props) => {

    const {resData} = props;
  
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} = resData?.info;
  

    return (
      <div data-testid="resCard" className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-400">
             <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
  
       <h3 className="font-bold py-4 text-lg">{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{costForTwo}</h4>
       <h4>{ sla?.deliveryTime} minutes</h4>
       <h4>{ avgRating}</h4>
      </div>
    )
  }

  export const promotedRestaurantCard = () =>{
    return (props) =>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard; 