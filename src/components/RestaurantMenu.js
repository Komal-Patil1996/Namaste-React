import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/Constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{


  
  const {resId}  = useParams();

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  console.log("resinfo",resInfo)

    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || {};
 console.log("sd",itemCards)
    return   (
        <div className="Menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(res =>
                  <li key={res.card.info.id}>{res.card.info.name} - Rs.{res.card.info.price/100}</li>  
                )}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;