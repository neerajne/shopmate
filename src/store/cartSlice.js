import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState : {
        cartList :[],
        total:0
    },
     reducers:{
        add(state , action)
        {
            const updatedCartList = state.cartList.concat(action.payload);
            const newTotal = state.total + action.payload.price ;
            return {...state , total : newTotal , cartList : updatedCartList}
        },
        remove( state , action)
        {
            const updatedCartList = state.cartList.filter((item) => item.id !== action.payload.id);
            const newTotal = state.total - action.payload.price ;
            return {...state , total : newTotal , cartList : updatedCartList}
        }
    }
})
export const  {add, remove, total} = cartSlice.actions; 
export const cartReducer = cartSlice.reducer ;