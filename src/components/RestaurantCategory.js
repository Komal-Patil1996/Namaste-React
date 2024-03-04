import ItemList from "./ItemList";

const RestaurantCategory = ({categoryData, showItem, setShowIndex}) => {

   const handleClick = () =>{

    setShowIndex();

    
   }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"> 
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
             <span className="font-bold text-md">{categoryData.title} ({categoryData.itemCards.length})</span> 
             <span>🔽</span>    
              </div>
             
              {showItem &&   <ItemList items={categoryData.itemCards}/>}


 
            </div>

        </div>
    )
}

export default RestaurantCategory;