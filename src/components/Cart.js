import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const dispatch = useDispatch();

const cartItems = useSelector((store) => store.cart.item);

    return (
        <div className="text-center m-4 p-4">
           <h2 className="text-2xl font-bold">Cart</h2> 

           <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={() =>{
                dispatch(clearCart());
            }}>Clear Cart</button>

            {cartItems.length === 0 && <h1>Cart is Empty!! Add item to the cart</h1>}

            <ItemList items={cartItems}/>
           </div>
       </div>
    )
}

export default Cart;