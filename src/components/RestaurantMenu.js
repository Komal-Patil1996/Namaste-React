import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () =>{

  const [showIndex, setShowIndex] = useState(null);
  
  const {resId}  = useParams();

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || {};
  const filteredCategory = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((category) => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return   (
        <div className="text-center">
            <h1 className="font-bold my-8 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
           
           {/* controlled components */}

            {filteredCategory.map((category, Index) => 
              <RestaurantCategory key={category?.card?.card.title} categoryData={category.card?.card} showItem={Index === showIndex ? true : false } 
              setShowIndex = {() => setShowIndex(Index)}  />
            )}




        </div>
    )
}

export default RestaurantMenu;