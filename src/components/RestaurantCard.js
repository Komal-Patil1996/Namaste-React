// named export

import { CDN_URL } from "../utils/Constant";

const styleCard = {
    backgroundColor : '#f0f0f0'
  }
  

const RestaurantCard = (props) => {

    const {resData} = props;
  
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} = resData?.info;
  
    return (
      <div className="restro-card" style={styleCard}>
             <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
  
       <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{costForTwo}</h4>
       <h4>{ sla?.deliveryTime} minutes</h4>
       <h4>{ avgRating}</h4>
      </div>
    )
  }

  export default RestaurantCard; 