import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        item:[]
    },
    reducers:{
// mutating the state over here
        addItem: (state, action)=>{
            // Redux toolkit user Immer BTs 
            state.item.push(action.payload);

        },
        removeItem: (state) =>{
            state.item.pop();
        },
        // ex: originalstate = ["pizza"]
        clearCart: (state)=>{
            // RTK should either mutate the state or return a new state 
            //  return [{item:[]}] //  this new object will be replaced inside original state=[{item:[]}]
             //  or
            // state.item.length = 0
            //  originalstate = []
           state.item.length = 0; 
        },
    },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart} = cartSlice.actions;