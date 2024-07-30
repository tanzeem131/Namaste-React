import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
    },
    reducers: {
        addItem: (state,action)=>{
            //Redux Toolkit uses IMMER for mutating the states
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state,action)=>{
            //RTK-either mutate the state or return a new state
            // state.items.length = 0; // []
            return {items :[]};
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;