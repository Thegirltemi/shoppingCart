
import { createSlice } from "@reduxjs/toolkit";
import {popularProducts} from "../../data"

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items: popularProducts, 
        totalAmount: 0,
        totalCount:0
    },
    reducers:{
        getCartTotal: (state) =>{
            let {totalAmount, totalCount} = state.items.reduce((cartTotal, cartItem)=>{
                const{price, amount} = cartItem;
                const itemTotal = price * amount;
                cartTotal.totalAmount += itemTotal;
                cartTotal.totalCount += amount;
                return cartTotal;
            },
            {totalAmount: 0,totalCount: 0}
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2))
            state.totalCount = totalCount
        },
        remove: (state, action) => {
            state.items = state.items.filter((item)=>item.id !== action.payload );
        },
        increase:(state, action)=>{
            state.items = state.items.map((item)=> {
                if(item.id === action.payload){
                    return{...item, amount: item.amount + 1}
                }
                return item;
            })
        },
        decrease:(state, action)=>{
            state.items = state.items.map((item)=> {
                if(item.id === action.payload){
                    return{...item, amount: item.amount - 1}
                }
                return item;

            })
            .filter((item) => item.amount !== 0 )
        },
        clearCart : (state) =>{
            state.items = [];
        },
        getCartItems: (state)=>{
            state.items = popularProducts;
        }
        
    }
})

export const {getCartTotal , increase, remove, decrease, clearCart, getCartItems} = cartSlice.actions
export default cartSlice.reducer;